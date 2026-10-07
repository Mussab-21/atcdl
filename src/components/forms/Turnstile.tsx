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
          "expired-callback"?: () => void;
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
              if (isMounted) onSuccess(token);
            },
            "error-callback": (err: string) => {
              console.warn("[Turnstile ERROR callback]", err);
              if (isMounted) onError?.(err);
            },
            "expired-callback": () => onSuccess(""),
            theme: "light",
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
    const timeoutId = setTimeout(() => {
      if (!widgetIdRef.current && isMounted) {
        if (intervalId) clearInterval(intervalId);
        onError?.("Verification could not load. Please refresh and try again.");
      }
    }, 15000);

    return () => {
      isMounted = false;
      clearTimeout(timeoutId);
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

  if (!siteKey) return null;

  return (
    <div className={`my-3 flex flex-col items-center justify-center min-h-[65px] ${className}`}>
      <div ref={containerRef} />
    </div>
  );
}
