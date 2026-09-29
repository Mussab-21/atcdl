"use client";

import React, { useEffect, useRef } from "react";

interface TurnstileProps {
  onSuccess: (token: string) => void;
  onError?: (error: string) => void;
  className?: string;
}

declare global {
  interface Window {
    turnstile?: {
      render: (
        container: HTMLElement,
        options: {
          sitekey: string;
          callback: (token: string) => void;
          "error-callback"?: (error: string) => void;
          theme?: "dark" | "light" | "auto";
        }
      ) => string;
      reset: (widgetId: string) => void;
      remove: (widgetId: string) => void;
    };
  }
}

export function Turnstile({ onSuccess, onError, className = "" }: TurnstileProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const widgetIdRef = useRef<string | null>(null);
  const siteKey = process.env.NEXT_PUBLIC_TURNSTILE_SITE_KEY;

  useEffect(() => {
    if (!siteKey) return;

    let isMounted = true;
    let intervalId: NodeJS.Timeout | null = null;

    const tryRender = () => {
      if (!isMounted || !containerRef.current || widgetIdRef.current) return;

      if (window.turnstile) {
        try {
          const id = window.turnstile.render(containerRef.current, {
            sitekey: siteKey,
            callback: (token: string) => {
              console.log("[Turnstile SUCCESS token acquired]", token.substring(0, 20) + "...");
              if (isMounted) onSuccess(token);
            },
            "error-callback": (err: string) => {
              console.warn("[Turnstile ERROR callback]", err);
              if (isMounted) onError?.(err);
            },
            theme: "dark",
          });
          widgetIdRef.current = id;
          if (intervalId) clearInterval(intervalId);
        } catch (err) {
          console.warn("[Turnstile render error]", err);
        }
      }
    };

    // 1. Check if script exists
    const scriptId = "cloudflare-turnstile-script";
    let script = document.getElementById(scriptId) as HTMLScriptElement | null;

    if (!script) {
      script = document.createElement("script");
      script.id = scriptId;
      script.src = "https://challenges.cloudflare.com/turnstile/v0/api.js?render=explicit";
      script.async = true;
      script.defer = true;
      document.head.appendChild(script);
    }

    // 2. Poll until window.turnstile is ready and renders
    tryRender();
    intervalId = setInterval(tryRender, 200);

    return () => {
      isMounted = false;
      if (intervalId) clearInterval(intervalId);
      if (widgetIdRef.current && window.turnstile?.remove) {
        try {
          window.turnstile.remove(widgetIdRef.current);
        } catch {
          // ignore
        }
        widgetIdRef.current = null;
      }
    };
  }, [siteKey, onSuccess, onError]);

  if (!siteKey) {
    return (
      <div className={`p-2.5 rounded-lg bg-[var(--bg-secondary)] border border-[var(--border)] text-[11px] font-mono text-[var(--text-muted)] flex items-center justify-between ${className}`}>
        <span>🛡️ Bot Protection: Cloudflare Turnstile</span>
        <span className="text-[var(--warning)]">Awaiting Site Key</span>
      </div>
    );
  }

  return (
    <div className={`my-3 flex flex-col items-center justify-center min-h-[65px] ${className}`}>
      <div ref={containerRef} />
    </div>
  );
}
