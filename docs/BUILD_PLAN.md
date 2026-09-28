# NIMBRIX Website — Agent Build Plan (v1)

> **For the coding agent.** This file is the executable build spec. The strategy, copy, and rationale live in `docs/Nimbrix_Website_Master_Implementation_Plan.md` (the "Master Plan"). Read both before writing code. Where they conflict, **this file wins** (see §1 for deliberate overrides).

---

## 0. Operating Rules (read first)

1. **Greenfield.** Create a new repo `nimbrix-web`. Do not copy code from the old `nimbrux_ai_web` repo (default Next.js scaffold, nothing reusable).
2. **Work in milestones (§14).** Finish one milestone, run its acceptance checks, commit, then continue. Never start polish work before the structure it depends on exists.
3. **Never invent content.** No fake clients, logos, testimonials, metrics, team members, or case-study numbers. Where real content is missing, render a clearly marked placeholder and add an entry to `docs/CONTENT_TODO.md`. Placeholder copy must never look like real claims.
4. **Every project/idea/product carries a status badge** (`Client | Product | Prototype | Lab | Concept | Open Source`). Only `Client` may be called a "case study".
5. **No hardcoded colors, spacing, radii, or durations.** Everything comes from design tokens (§4) and motion tokens (§5.2).
6. **Never fake form success.** The form shows success only after the server confirms the lead was persisted.
7. **No secrets in frontend code.** All keys via env vars, server-only unless prefixed `NEXT_PUBLIC_`.
8. **Motion is purposeful and subtle** (Master Plan §43–48). Every animation must respect `prefers-reduced-motion`.
9. After each milestone, output a short report: what was built, what is stubbed, what needs human input.

---

## 1. Decisions & Overrides

| Topic | Master Plan said | This build |
|---|---|---|
| Animation library | Motion / Framer Motion | **GSAP** (`gsap`, `ScrollTrigger`, `@gsap/react`). Do **not** install Framer Motion. |
| Simple hover/focus/pulse/shimmer | CSS | Unchanged — use CSS, not GSAP |
| Content "CMS" | Headless CMS implied | **File-based typed content** (MDX + JSON in `/content`, validated with Zod). Structured so a CMS (Sanity/Keystatic) can replace it later without touching components. |
| Database | Postgres + Prisma | Unchanged, used for **leads/audit only** |
| Products | not in Master Plan | New `/products` section (§6, §13). Same content pipeline as projects. |

GSAP note: GSAP and its plugins (ScrollTrigger, etc.) are currently free to use, but confirm the license at gsap.com/standard-license when the repo is created.

---

## 2. Stack

- **Framework:** Next.js (latest stable, App Router), TypeScript strict, React
- **Styling:** Tailwind CSS (latest stable) mapped to CSS-variable tokens; custom components, **no** big UI kit. Radix primitives allowed for accessible Dialog/Accordion/Tabs/Select only.
- **Animation:** `gsap`, `gsap/ScrollTrigger`, `@gsap/react` (`useGSAP`)
- **Fonts:** Geist (headings + body) via `next/font`; Inter as fallback
- **Forms/validation:** `react-hook-form` + `zod` (same schema client + server)
- **DB:** PostgreSQL + Prisma
- **Email:** Resend (or any transactional provider behind an interface)
- **Bot protection:** Cloudflare Turnstile
- **Rate limiting:** Upstash Redis (`@upstash/ratelimit`) or DB-backed fallback
- **CRM:** HubSpot adapter behind a `CrmProvider` interface (stub allowed in M1)
- **Notifications:** Slack incoming webhook
- **Analytics:** PostHog + GA4 through one typed `track()` wrapper
- **Content:** MDX (`next-mdx-remote` or `@next/mdx`) + JSON, Zod-validated
- **Testing:** Vitest (unit: scoring, schemas), Playwright (smoke: nav, form, reduced-motion)
- **Hosting:** Vercel (preferred) — Netlify acceptable
- **Package manager:** pnpm

Dependencies to install at start:

```bash
pnpm add gsap @gsap/react zod react-hook-form @hookform/resolvers \
  @prisma/client @upstash/ratelimit @upstash/redis resend posthog-js \
  next-mdx-remote gray-matter clsx
pnpm add -D prisma vitest @playwright/test @types/node
```

---

## 3. Repository Structure

```text
nimbrix-web/
├─ docs/
│  ├─ Nimbrix_Website_Master_Implementation_Plan.md
│  ├─ BUILD_PLAN.md                 (this file)
│  └─ CONTENT_TODO.md               (agent maintains)
├─ content/
│  ├─ projects/*.mdx
│  ├─ products/*.mdx
│  ├─ ideas/*.mdx
│  ├─ industries/*.mdx
│  ├─ solutions/*.mdx
│  └─ site.json                     (nav, footer, ranges, stack categories)
├─ prisma/schema.prisma
├─ src/
│  ├─ app/
│  │  ├─ (marketing)/…              (all public pages)
│  │  ├─ api/leads/route.ts
│  │  ├─ api/estimator/route.ts
│  │  ├─ sitemap.ts  robots.ts  opengraph-image.tsx
│  │  └─ layout.tsx  globals.css
│  ├─ components/
│  │  ├─ ui/                        (design-system primitives)
│  │  ├─ sections/                  (Hero, Problem, Solutions, …)
│  │  ├─ diagrams/                  (ArchitectureDiagram, AIFlow, ProcessRail)
│  │  ├─ motion/                    (Reveal, CursorGlow, GsapProvider)
│  │  └─ forms/                     (ProjectBrief, Estimator)
│  ├─ lib/
│  │  ├─ gsap.ts  motion.ts  content.ts  analytics.ts
│  │  ├─ leads/{schema,score,notify,crm}.ts
│  │  └─ seo.ts
│  └─ styles/tokens.css
└─ tests/
```

---

## 4. Design Tokens

Implement in `src/styles/tokens.css`; expose to Tailwind via `theme.extend` referencing the variables. Values come from Master Plan §6–9.

```css
:root {
  /* surfaces */
  --bg-primary:#070A0F; --bg-secondary:#0B1018;
  --bg-card:#101722;   --bg-elevated:#141C28;
  --border:#202B3A;
  /* text */
  --text-primary:#F4F7FB; --text-secondary:#A7B0BF; --text-muted:#6F7A8A;
  /* accent */
  --accent:#4D8DFF; --accent-hover:#76A7FF; --accent-deep:#2463D8;
  --accent-ai:#39D6D0;
  /* status */
  --success:#35C98B; --warning:#F3B84B; --error:#FF6262;
  /* radii */
  --radius-sm:8px; --radius-btn:10px; --radius-md:16px; --radius-lg:24px;
  /* spacing: 4px base */
  --space-1:4px; --space-2:8px; --space-3:12px; --space-4:16px; --space-6:24px;
  --space-8:32px; --space-12:48px; --space-16:64px; --space-24:96px; --space-32:128px;
  /* layout */
  --container:1320px; --pad-desktop:56px; --pad-tablet:32px; --pad-mobile:20px;
  --nav-h:72px;
}
@media (max-width:767px){ :root{ --nav-h:64px; } }
```

Rules:
- Color ratio ≈ 85% neutral / 10% blue / 5% cyan+status. Cyan only on AI-related UI.
- Type scale (fluid with `clamp`): Hero 72–88 / 48–56 / 40–46 (desktop/tablet/mobile); H2 44–56; H3 24–30; body 17–19; small 13–14. Heading line-height 0.95–1.05, body 1.5–1.7.
- 12/8/4-column grid, max content width 1320px.
- Glass/blur **only** on navbar, modals, and the hero visualization.
- Build components listed in Master Plan §68. Each supports: default, hover, focus-visible, active, disabled, mobile, reduced-motion (§70).

---

## 5. GSAP Architecture

### 5.1 Setup (single registration point)

```ts
// src/lib/gsap.ts
"use client";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";

gsap.registerPlugin(ScrollTrigger, useGSAP);
export { gsap, ScrollTrigger, useGSAP };
```

- Import GSAP **only** from `@/lib/gsap`. Only in Client Components.
- Always use `useGSAP()` with a `scope` ref so tweens/ScrollTriggers are auto-reverted on unmount (avoids React strict-mode duplicates).
- Wrap all motion in `gsap.matchMedia()` with `(prefers-reduced-motion: no-preference)`. Under `reduce`, elements render in their final state; no scrub, no pinning.
- Desktop-only effects (cursor glow, pinned process) go in a `(min-width: 1024px) and (hover: hover)` media query.
- Call `ScrollTrigger.refresh()` after fonts load and after route content mounts.
- Dynamically import heavy diagram components below the fold (`next/dynamic`) so GSAP work doesn't block LCP.

### 5.2 Motion tokens

```ts
// src/lib/motion.ts
export const motion = {
  duration: { fast: 0.2, base: 0.5, slow: 0.8, hero: 5 },
  ease: { out: "power3.out", inOut: "power2.inOut" },
  distance: { load: 12, reveal: 20 },
  stagger: 0.08,
  start: "top 85%",
} as const;
```

### 5.3 Reveal primitive

Avoid the "content flashes then hides" bug by hiding via CSS only when motion is allowed, and animating **to** visible.

```css
/* globals.css */
@media (prefers-reduced-motion: no-preference) {
  .js [data-reveal] { opacity: 0; transform: translateY(20px); }
}
```

```tsx
// src/components/motion/Reveal.tsx
"use client";
import { useRef } from "react";
import { gsap, useGSAP } from "@/lib/gsap";
import { motion } from "@/lib/motion";

export function Reveal({ children, className, as: Tag = "div" }: {
  children: React.ReactNode; className?: string; as?: React.ElementType;
}) {
  const ref = useRef<HTMLElement>(null);
  useGSAP(() => {
    const mm = gsap.matchMedia();
    mm.add("(prefers-reduced-motion: no-preference)", () => {
      const items = ref.current!.querySelectorAll("[data-reveal-item]");
      gsap.to(items.length ? items : ref.current, {
        opacity: 1, y: 0,
        duration: motion.duration.base, ease: motion.ease.out,
        stagger: items.length ? motion.stagger : 0,
        scrollTrigger: { trigger: ref.current, start: motion.start, once: true },
      });
    });
    return () => mm.revert();
  }, { scope: ref });
  return <Tag ref={ref} data-reveal="" className={className}>{children}</Tag>;
}
```

Add `<script>document.documentElement.classList.add('js')</script>` early in `<head>` and a `<noscript>` style that forces `[data-reveal]{opacity:1;transform:none}`.

### 5.4 Animation catalog

| # | Where | Behavior | Tech | Notes |
|---|---|---|---|---|
| A1 | Global load | opacity 0→1, y 12→0, 400–600ms | GSAP timeline | Per Master Plan §43 |
| A2 | All sections | Scroll reveal (opacity + y20), staggered children | `Reveal` | `once: true` |
| A3 | **Hero system interface** | 4–6s one-shot sequence: panel fades in → nodes connect (SVG stroke draw) → data dots travel along paths → status chips flip (`Queued → Processing → Completed`) → "Process invoice #4821" completes. Then **freeze**; no infinite loop. | One `gsap.timeline()` + SVG `strokeDashoffset` + `motionPath`-free manual path following via `gsap.to` on `strokeDashoffset` | Subtle chip pulse allowed via CSS. Mobile: reduced version (fewer nodes). |
| A4 | Hero background | Grid/radial/noise at <5% opacity, static. Optional tiny particles, ≤40 dots, paused when off-screen. | CSS + canvas optional | Felt, not noticed |
| A5 | Solution cards | On hover: lift −3px, border→accent (CSS). Workflow diagram (e.g. Lead → AI qualification → CRM → Sales) fades/slides in. | CSS + GSAP `to` for diagram reveal | Hover-capable devices only; on touch, diagram is always visible |
| A6 | Cursor glow (key cards) | Radial glow 5–10% opacity following cursor | `gsap.quickTo` on CSS vars `--mx/--my` | Desktop only; disabled under reduced motion |
| A7 | **Process section** (Discover→Design→Build→Operate) | Scroll-scrubbed: current step becomes active, connecting line fills | ScrollTrigger with `scrub` (pin optional, desktop only) | Mobile: simple per-step reveal, no pin |
| A8 | AI pages data flow | Document → Extraction → Embedding → Retrieval → LLM → Answer; packets travel along the line; loops gently only while in view | Timeline + ScrollTrigger `toggleActions` play/pause | Pause when off-screen |
| A9 | Buttons/links | 200ms; arrow `translateX(4px)` on hover | CSS | Not GSAP |
| A10 | Estimator/brief steps | Step transition slide/fade 250ms | GSAP `Flip`-free simple `fromTo` | Focus moves to new step heading (a11y) |
| A11 | Counters (only real metrics) | Count-up when visible | GSAP `to` on object | Never for invented numbers |

**Forbidden:** 360° rotations, bouncing, objects flying in from every side, parallax on text, autoplaying loops longer than 6s on the hero, WebGL unless explicitly approved later.

**Performance:** animate only `transform`/`opacity`; use `will-change` sparingly; kill/pause off-screen tweens; total GSAP + plugins budget ≈ <70KB gzip on the homepage.

---

## 6. Routes & Pages

| Route | Purpose | Milestone |
|---|---|---|
| `/` | Homepage (order in §7) | M1 |
| `/solutions` | Overview of the 4 offers | M1 |
| `/solutions/custom-ai` | Custom AI / GenAI | M1 |
| `/solutions/ai-agents` | Agents & automation | M1 |
| `/solutions/enterprise-software` | Enterprise software | M1 |
| `/solutions/web-mobile-platforms` | Web & mobile | M1 |
| `/work`, `/work/[slug]` | Projects with badges + filters | M1 (list) / M2 (detail polish) |
| `/contact` | **Project Brief** multi-step form | M1 |
| `/contact/thank-you` | "We've got the brief." | M1 |
| `/trust`, `/privacy`, `/terms` | Trust & legal | M1 |
| `/about`, `/process` | About + process | M2 |
| `/products`, `/products/[slug]` | Nimbrix products | M2 |
| `/ideas`, `/ideas/[slug]` | Pitch Lab | M2 |
| `/industries`, `/industries/[slug]` | 4 industry pages first | M2 |
| `/labs` | Experiments & open source | M2 |
| `/estimate` (or modal) | Project estimator | M2 |
| `/insights` | Articles | M3 (hide from nav until ≥3 real posts) |

Navigation (Master Plan §10): `Solutions · Work · Industries · Process · Insights` + `[Start a Project]`. Add **Products** to the nav after Solutions once `/products` ships (M2). Until then, hide links to unbuilt routes.

Navbar: transparent at top; after ~60px scroll → `rgba(7,10,15,.85)` + `backdrop-filter: blur(16px)` + bottom border. Mobile: hamburger + sticky "Start a Project →" bar.

---

## 7. Homepage Sections (in order)

Copy source: Master Plan §12–§34, §61, §75. Implement in this order:

1. **Navbar** (Solutions mega-menu with "Have a specific problem?" panel)
2. **Hero** — eyebrow `NIMBRIX / TECHNOLOGY ENGINEERING`; H1 "Build what your business **actually needs.**" (gradient on highlighted words); CTAs `Start a Project →` / `Explore Our Work →`; right side = System Interface visual (A3)
3. **Capability strip** — text categories only (AI/ML, Automation, Cloud, Data, Web, Mobile, Enterprise Systems). No logos.
4. **Problem** — "Your business doesn't need more software. It needs the right system." + friction chain
5. **Solutions** — "Four ways we build business value." 4 cards with hover workflow (A5, A6)
6. **How we build** — Discover → Design → Build → Operate (A7)
7. **Featured work** — 3 items from content, with status badges
8. **Products** (M2) — 3 flagship products, see `docs/NIMBRIX_Product_Strategy.md`
9. **Pitch Lab / Ideas** — 3 featured ideas
10. **Industries** — "Built for complex businesses." (4 initial)
11. **Engineering** — architecture diagram + categorized stack (only real tech)
12. **Commercial scope** — typical ranges table, footnote "Final scope is determined after discovery."
13. **Why Nimbrix**
14. **Final CTA** — 3 entry points: business problem / product idea / automate a workflow
15. **Footer**

Sections 8–9 render only if content exists; homepage must not break when they are empty.

---

## 8. Content Model (`/content`, Zod-validated)

Build-time validation: a bad frontmatter field **fails the build**.

```ts
const Status = z.enum(["Client","Product","Prototype","Lab","Concept","Open Source"]);

Project = { title, slug, category: z.enum(["AI","Automation","Software","Web","Mobile"]),
  status: Status, industry?, summary, problem, solution, technology: string[],
  architecture?: string /* diagram id */, images?: string[],
  metrics?: {label, value}[] /* real only */, businessValue,
  githubUrl?, liveUrl?, featured: boolean }

Product = { name, slug, tagline, status: Status, offer: z.enum([...4 offers]),
  problem, howItWorks: string[], modules: string[], integrations: string[],
  deployment: string[], demoUrl?, pricingModel?: string, featured: boolean }

Idea = { title, slug, industry, concept, problem, solution, howItWorks: string[],
  potentialValue, status: z.enum(["Concept","Prototype"]), roadmap?: string[] }

Industry, Service, TeamMember, Testimonial (testimonial requires signed-off flag: approved: true)
```

Seed content (mark every seed with `status` honestly):
- **Projects (from GitHub inventory, rewritten per Master Plan §21–26):** AI Talent Intelligence (Resume Matcher, `Prototype`), AI Workforce Assistant (`Prototype`), NEIKI Digital Operations Platform (`Client` only if it was real client work; otherwise `Prototype`), Fashion-MNIST (`Lab`), Discord/Figma integrations (`Lab` / `Open Source`).
- **Ideas:** Telecom AI Operations Assistant, Banking AI Customer Operations, Manufacturing Intelligent Operations, Logistics Control Tower (Master Plan §64–67), all `Concept`.
- **Products:** from `NIMBRIX_Product_Strategy.md`, all `Concept` or `Prototype` until they are really running.

---

## 9. Lead System (P0 — part of M1, not post-launch)

### 9.1 Flow

```text
ProjectBrief form → POST /api/leads → validate (zod) → Turnstile verify
→ rate limit → sanitize → persist (Prisma) → score → [CRM sync] → email → Slack
→ return { ok:true, id }  (UI shows success only on ok:true)
```

Order matters: **persist first**, then side-effects. If CRM/email/Slack fail, the lead still exists; mark `notifyStatus` and retry via a simple retry job or a manual admin query. Log failures.

### 9.2 Prisma model (minimum)

```prisma
model Lead {
  id           String   @id @default(cuid())
  createdAt    DateTime @default(now())
  name         String
  email        String
  company      String?
  projectType  String
  problem      String
  existingSystems String?
  budget       String
  timeline     String
  source       String?  // page / utm / cta
  score        Int
  label        String   // HOT | QUALIFIED | NURTURE | LOW
  ipHash       String?
  userAgent    String?
  crmStatus    String   @default("pending")
  notifyStatus String   @default("pending")
  @@index([createdAt])
  @@index([email])
}
model AuditLog { id String @id @default(cuid()) at DateTime @default(now()) event String meta Json? }
```

Hash IPs; do not store raw IPs.

### 9.3 Scoring (`src/lib/leads/score.ts`, unit-tested)

The Master Plan's example maxes out at **70** (budget 40 + type 20 + timeline 10), so the HOT band (80+) could never trigger. Use this full 100-point model:

| Factor | Points |
|---|---|
| Budget: $100K+ 40 · $50–100K 30 · $25–50K 20 · $10–25K 10 · $5–10K 5 · Not sure 3 | 0–40 |
| Type: Enterprise software 20 · AI 20 · Automation 15 · Web/mobile 10 · Not sure 5 | 0–20 |
| Timeline: <1 month 10 · 1–3 months 8 · 3–6 months 5 · 6+ months 2 | 0–10 |
| Existing systems described (integration need) | 0–10 |
| Business email domain (not gmail/yahoo/outlook/hotmail etc.) | 0–10 |
| Problem description ≥ 200 chars | 0–10 |

Labels (internal only, never shown to users): 80–100 HOT · 50–79 QUALIFIED · 25–49 NURTURE · 0–24 LOW.

### 9.4 Security checklist

Server-side validation · Turnstile · rate limit (e.g. 5/hour/IP hash) · honeypot field · input length caps + sanitization · email validation · DB constraints · audit log · CSRF: same-origin check on the route (`Origin` header) · security headers (CSP, HSTS, X-Content-Type-Options, Referrer-Policy) in `next.config`.

### 9.5 Notifications

Slack + email use the Master Plan §39 template (company, project, budget, timeline, score, email, problem). Prefix HOT leads with 🔥.

### 9.6 Estimator (M2)

4 questions per Master Plan §35 → `POST /api/estimator` → stores as a partial lead and hands off to the brief pre-filled. Analytics: `project_estimator_started/completed`.

---

## 10. Analytics

Typed wrapper `track(event, props)` sending to PostHog and GA4. Events (Master Plan §56):

`hero_cta_clicked · solutions_viewed · project_opened · industry_selected · pricing_viewed · project_estimator_started · project_estimator_completed · contact_started · contact_submitted · calendar_clicked · github_clicked · case_study_viewed`

Add: `product_opened`, `idea_opened`. Fire `solutions_viewed`/`pricing_viewed` via IntersectionObserver (once per page view). Load analytics after consent where required; provide a minimal cookie/consent notice if EU traffic is expected.

---

## 11. SEO, Accessibility, Performance

**SEO:** `generateMetadata` per route, canonical URLs, OG image generator, `sitemap.ts`, `robots.ts`, JSON-LD (`Organization`, `WebSite`, `Service`, `BreadcrumbList`), internal linking between solution ↔ work ↔ industry ↔ idea.

**Accessibility (WCAG 2.2 AA):** semantic landmarks, visible `:focus-visible`, keyboard-operable mega-menu/accordion/tabs/modal, labeled form fields, `aria-live` for form errors, focus moved to heading on step change, color never the only signal, alt text, contrast ≥ AA, full `prefers-reduced-motion` support.

**Performance targets:** Lighthouse 90+ performance, 95+ accessibility/best practices/SEO; LCP < 2.5s, CLS < 0.1, INP < 200ms. `next/image` for all images, no autoplay video, dynamic-import below-fold diagrams, font subsetting with `display: swap`.

---

## 12. Environment Variables

```bash
DATABASE_URL=
NEXT_PUBLIC_SITE_URL=
NEXT_PUBLIC_TURNSTILE_SITE_KEY=
TURNSTILE_SECRET_KEY=
UPSTASH_REDIS_REST_URL=
UPSTASH_REDIS_REST_TOKEN=
RESEND_API_KEY=
LEADS_TO_EMAIL=
SLACK_WEBHOOK_URL=
HUBSPOT_ACCESS_TOKEN=
NEXT_PUBLIC_POSTHOG_KEY=
NEXT_PUBLIC_POSTHOG_HOST=
NEXT_PUBLIC_GA_ID=
```

Commit a `.env.example`. Validate env with Zod at boot; missing optional integrations degrade gracefully (log + skip), missing `DATABASE_URL` fails loudly.

---

## 13. Products Section

Full product recommendations are in `NIMBRIX_Product_Strategy.md`. Website requirements:

- `/products` grid + `/products/[slug]` detail using the `Product` model (§8)
- Detail page order: Problem → How it works (diagram, AI flow animation A8) → Modules → Integrations → Deployment options (cloud / private / on-prem) → Status → Pricing model (if set) → CTA `Book a Demo →` (routes to `/contact?product=<slug>`)
- Product badge is `Product` only when it is genuinely usable; otherwise `Prototype` or `Concept`
- The brief form reads `?product=` and pre-selects the interest

---

## 14. Milestones & Acceptance Criteria

### M0 — Foundation (½ day)
- [ ] Repo, pnpm, TypeScript strict, ESLint/Prettier, Tailwind, tokens, fonts
- [ ] `lib/gsap.ts`, `lib/motion.ts`, `Reveal`, `CursorGlow`
- [ ] UI primitives: Button, Link, Badge, Card, FormField, Select, Textarea, Accordion, Tabs, Modal, Toast
- [ ] Layout: Navbar (desktop+mobile), Footer
- **Accept:** `/design-system` dev page shows every primitive in every state; reduced-motion verified.

### M1 — Launchable Site (core)
- [ ] Homepage sections 1–7, 10–15 (skip Products/Ideas if content empty)
- [ ] 4 solution pages, `/work` list + detail, `/trust`, `/privacy`, `/terms`, `/about` (basic)
- [ ] **Lead system end-to-end (§9)** + thank-you page
- [ ] Analytics + SEO basics (sitemap, robots, metadata, OG)
- **Accept:** submit a real test lead → row in DB, score correct, email + Slack received; Lighthouse ≥ targets on `/` and `/contact`; keyboard-only pass; Playwright smoke passes on Chromium/Firefox/WebKit.
- **→ Deploy to production here.**

### M2 — Sales Weapons
- [ ] `/products` + detail, `/ideas` (Pitch Lab) + detail, 4 industry pages, `/labs`, `/process` with A7
- [ ] Estimator → pre-filled brief
- [ ] Homepage sections 8–9 enabled
- [ ] Nav updated (Products)
- **Accept:** a salesperson can go AI → project → industry → idea → brief in ≤ 5 clicks (Master Plan §79).

### M3 — Hardening & Growth
- [ ] Case-study template with Before→After visual (real metrics only)
- [ ] `/insights` (only if ≥ 3 real posts)
- [ ] Per-prospect pitch URLs (Master Plan §63) via `/ideas/[slug]` with optional `noindex`
- [ ] CRM adapter fully live, retry job for failed notifications
- [ ] Full browser/device QA, Core Web Vitals field data, funnel dashboard in PostHog

---

## 15. Final QA Checklist (before each production deploy)

- [ ] No placeholder content visible; `CONTENT_TODO.md` reviewed
- [ ] No invented metrics/logos/testimonials
- [ ] Every project/product/idea has an honest status badge
- [ ] Lead form: success only after DB write; error states tested (network fail, invalid, bot, rate-limited)
- [ ] `prefers-reduced-motion` renders every page fully, no hidden content
- [ ] Hero animation runs once, ≤ 6s, then static
- [ ] Mobile: hero ≤ ~700px, full-width cards, sticky CTA works
- [ ] Lighthouse, WCAG (axe), keyboard, screen reader spot-check
- [ ] OG images, canonical, sitemap, robots correct; no broken internal links
- [ ] Security headers present; no secrets in client bundle

---

## 16. Kickoff Prompt (paste into the agent)

> Read `docs/BUILD_PLAN.md` and `docs/Nimbrix_Website_Master_Implementation_Plan.md` fully. Create a new Next.js (App Router, TypeScript, Tailwind) project named `nimbrix-web`. Implement **M0**, then stop and report. Use GSAP (not Framer Motion) exactly as specified in §5. Do not invent any content, clients, metrics, or testimonials; use marked placeholders and log them in `docs/CONTENT_TODO.md`. After I approve M0, continue to M1, then M2, then M3, stopping for review after each milestone.
