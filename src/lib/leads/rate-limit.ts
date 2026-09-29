import { Ratelimit } from "@upstash/ratelimit";
import { Redis } from "@upstash/redis";
import { prisma } from "@/lib/prisma";

// 1. Upstash Redis Limiter (active when credentials are provided in env)
let upstashRatelimit: Ratelimit | null = null;

if (
  process.env.UPSTASH_REDIS_REST_URL &&
  process.env.UPSTASH_REDIS_REST_TOKEN &&
  process.env.UPSTASH_REDIS_REST_URL.startsWith("https://")
) {
  try {
    const redis = new Redis({
      url: process.env.UPSTASH_REDIS_REST_URL,
      token: process.env.UPSTASH_REDIS_REST_TOKEN,
    });

    upstashRatelimit = new Ratelimit({
      redis,
      limiter: Ratelimit.slidingWindow(5, "1 h"),
      analytics: true,
      prefix: "nimbrix:ratelimit:leads",
    });
  } catch (err) {
    console.warn("[RateLimit] Failed to initialize Upstash Redis, falling back to database limiter", err);
    upstashRatelimit = null;
  }
}

/**
 * Multi-layer rate limiter:
 * 1. Checks Upstash Redis if configured
 * 2. Falls back to persistent database-backed rate limit table in Prisma (survives serverless instances)
 */
export async function verifyRateLimit(
  identifier: string,
  limit: number = 5,
  windowHours: number = 1
): Promise<{ success: boolean; remaining: number }> {
  // Layer 1: Upstash Redis
  if (upstashRatelimit) {
    try {
      const result = await upstashRatelimit.limit(identifier);
      return { success: result.success, remaining: result.remaining };
    } catch (err) {
      console.warn("[RateLimit] Upstash call error, falling back to DB limiter", err);
    }
  }

  // Layer 2: Database-Backed Persistent Limiter
  try {
    const now = new Date();
    const windowMs = windowHours * 60 * 60 * 1000;
    const key = `lead_limit_${identifier}`;

    // Clean up expired entries periodically or find current
    const existing = await prisma.rateLimit.findUnique({
      where: { key },
    });

    if (!existing || now > existing.resetAt) {
      // First request in new window
      const resetAt = new Date(now.getTime() + windowMs);
      await prisma.rateLimit.upsert({
        where: { key },
        create: { key, count: 1, resetAt },
        update: { count: 1, resetAt },
      });
      return { success: true, remaining: limit - 1 };
    }

    if (existing.count >= limit) {
      return { success: false, remaining: 0 };
    }

    // Increment count
    const updated = await prisma.rateLimit.update({
      where: { key },
      data: { count: { increment: 1 } },
    });

    return { success: true, remaining: Math.max(0, limit - updated.count) };
  } catch (dbErr) {
    console.error("[RateLimit] DB limiter error", dbErr);
    // Fail open in dev if DB issue, but log
    return { success: true, remaining: 1 };
  }
}
