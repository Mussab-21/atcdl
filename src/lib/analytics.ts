export type AnalyticsEvent =
  | "hero_cta_clicked"
  | "solutions_viewed"
  | "project_opened"
  | "product_opened"
  | "product_demo_requested"
  | "industry_selected"
  | "pricing_viewed"
  | "project_estimator_started"
  | "project_estimator_completed"
  | "estimator_currency_toggled"
  | "contact_started"
  | "contact_submitted"
  | "calendar_clicked"
  | "github_clicked"
  | "case_study_viewed";

export function track(
  event: AnalyticsEvent,
  properties?: Record<string, string | number | boolean | undefined>
) {
  if (typeof window === "undefined") return;

  // Log in development
  if (process.env.NODE_ENV === "development") {
    console.log(`[Analytics Event: ${event}]`, properties);
  }

  // Google Analytics 4 (if configured)
  const windowWithGtag = window as unknown as {
    gtag?: (command: string, eventName: string, eventParams?: Record<string, unknown>) => void;
  };

  if (typeof windowWithGtag.gtag === "function") {
    windowWithGtag.gtag("event", event, properties);
  }

  // PostHog (if loaded)
  const windowWithPostHog = window as unknown as {
    posthog?: {
      capture: (eventName: string, eventProperties?: Record<string, unknown>) => void;
    };
  };

  if (windowWithPostHog.posthog?.capture) {
    windowWithPostHog.posthog.capture(event, properties);
  }
}
