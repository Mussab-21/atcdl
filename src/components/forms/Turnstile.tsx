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
    };
    onTurnstileLoaded?: () => void;
  }
}

export function Turnstile({ onSuccess, onError, className = "" }: TurnstileProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const siteKey = process.env.NEXT_PUBLIC_TURNSTILE_SITE_KEY;

  useEffect(() => {
    if (!siteKey) return;

    // Load Turnstile script if not already present
    const scriptId = "cloudflare-turnstile-script";
    let script = document.getElementById(scriptId) as HTMLScriptElement | null;

    const renderWidget = () => {
      if (window.turnstile && containerRef.current) {
        window.turnstile.render(containerRef.current, {
          sitekey: siteKey,
          callback: (token: string) => onSuccess(token),
          "error-callback": (err: string) => onError?.(err),
          theme: "dark",
        });
      }
    };

    if (!script) {
      script = document.createElement("script");
      script.id = scriptId;
      script.src = "https://challenges.cloudflare.com/turnstile/v0/api.js?render=explicit";
      script.async = true;
      script.defer = true;
      script.onload = renderWidget;
      document.head.appendChild(script);
    } else if (window.turnstile) {
      renderWidget();
    }
  }, [siteKey, onSuccess, onError]);

  if (!siteKey) {
    return (
      <div className={`p-2.5 rounded-lg bg-[var(--bg-secondary)] border border-[var(--border)] text-[11px] font-mono text-[var(--text-muted)] flex items-center justify-between ${className}`}>
        <span>🛡️ Bot Protection: Cloudflare Turnstile</span>
        <span className="text-[var(--warning)]">Awaiting Site Key</span>
      </div>
    );
  }

  return <div ref={containerRef} className={`my-2 flex justify-center ${className}`} />;
}
