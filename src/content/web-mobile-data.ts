export interface WebMobilePackage {
  id: "digital-launch" | "product-platform" | "digital-ecosystem";
  name: string;
  level: "01" | "02" | "03";
  tagline: string;
  description: string;
  timeline: string;
  isPopular?: boolean;
  pricing: {
    PKR: {
      from: string;
      range: string;
      context: string;
    };
    USD: {
      from: string;
      range: string;
      context: string;
    };
  };
  capabilities: {
    title: string;
    description: string;
  }[];
  deliverableSummary: string;
  ctaText: string;
}

export interface WebMobileHotspotItem {
  id: "web" | "mobile" | "backend" | "dashboard";
  step: string;
  title: string;
  subtitle: string;
  description: string;
  badge: string;
  keyOutputs: string[];
}

export interface WebMobileDeliveryStage {
  step: string;
  id: "discover" | "design" | "build" | "launch";
  name: string;
  tagline: string;
  duration: string;
  copy: string;
  activities: string[];
  deliverable: string;
}

export interface WebMobileFitScenario {
  id: string;
  title: string;
  subtitle: string;
  problem: string;
  solution: string;
}

export const WEB_MOBILE_DATA = {
  hero: {
    eyebrow: "WEB & MOBILE PLATFORMS",
    title: "Turn your idea into a digital product people actually use.",
    subtitle:
      "From business portals to customer-facing apps, ATCDL designs and builds fast web and mobile products engineered around your users and your business.",
    primaryCta: "Start Your Product",
    secondaryCta: "See How It Works",
  },

  productEcosystem: [
    {
      id: "web",
      step: "01",
      title: "Web Platform & Customer Portal",
      subtitle: "Sub-second responsive experience across all screen sizes",
      description:
        "Modern, responsive web applications engineered with Next.js, accessible typography, and instant page transitions that convert visitors into active customers.",
      badge: "Web Experience",
      keyOutputs: [
        "Sub-second page loads (Lighthouse 90+ score)",
        "Responsive desktop, tablet, and mobile layouts",
        "Accessible semantic HTML & SEO optimization",
      ],
    },
    {
      id: "mobile",
      step: "02",
      title: "Native Mobile Applications",
      subtitle: "iOS & Android apps with offline support & push alerts",
      description:
        "Cross-platform mobile applications sharing a unified backend with native device features, push notifications, camera/geolocation access, and offline data sync.",
      badge: "Mobile Apps",
      keyOutputs: [
        "App Store & Google Play submission readiness",
        "Biometric authentication (FaceID & Fingerprint)",
        "Instant push notifications & offline storage",
      ],
    },
    {
      id: "backend",
      step: "03",
      title: "Scalable Backend & APIs",
      subtitle: "Secure data layer, payments & business logic",
      description:
        "Type-safe APIs with authenticated user sessions, relational data persistence, automated email/SMS dispatch, and PCI-compliant payment integrations.",
      badge: "API & Data",
      keyOutputs: [
        "Stripe & regional payment gateway integration",
        "Type-safe REST / GraphQL API architecture",
        "Automated background jobs & transactional emails",
      ],
    },
    {
      id: "dashboard",
      step: "04",
      title: "Admin Panel & Telemetry Cockpit",
      subtitle: "User management, transaction logs & product analytics",
      description:
        "Comprehensive administrative control panel giving your internal operators live oversight of user sign-ups, active subscriptions, revenue metrics, and error rates.",
      badge: "Operations UI",
      keyOutputs: [
        "Live conversion funnel & user session telemetry",
        "Role-based customer support & moderation tools",
        "One-click financial & user data exports",
      ],
    },
  ] as WebMobileHotspotItem[],

  packages: [
    {
      id: "digital-launch",
      level: "01",
      name: "Digital Launch",
      tagline: "Turn your idea into a production-ready digital experience.",
      description:
        "A fast, responsive web application or customer portal with secure user authentication, core onboarding flow, and transactional notifications.",
      timeline: "3–5 weeks",
      pricing: {
        PKR: {
          from: "PKR 150,000",
          range: "PKR 150,000 – 400,000",
          context: "Fixed milestone delivery for domestic ventures",
        },
        USD: {
          from: "$8,000",
          range: "$8,000 – $20,000",
          context: "Turnkey MVP launch for international businesses",
        },
      },
      capabilities: [
        { title: "Next.js Web Platform", description: "Sub-second responsive web portal with custom UX" },
        { title: "Secure User Auth", description: "Email passwordless login & Google OAuth2 sign-in" },
        { title: "1 Core Customer Workflow", description: "Intuitive self-service flow designed for conversion" },
        { title: "Transactional Notifications", description: "Automated emails for verification & status updates" },
      ],
      deliverableSummary: "Deployed web platform + user auth + core database + 30-day warranty.",
      ctaText: "Choose Digital Launch",
    },
    {
      id: "product-platform",
      level: "02",
      name: "Product Platform",
      isPopular: true,
      tagline: "Web + mobile product ecosystem with real-time sync.",
      description:
        "A complete multi-platform digital product including web portal, iOS & Android mobile apps, administrative management panel, and payment billing.",
      timeline: "6–10 weeks",
      pricing: {
        PKR: {
          from: "PKR 400,000",
          range: "PKR 400,000 – 1,200,000",
          context: "Cross-platform mobile + web platform",
        },
        USD: {
          from: "$25,000",
          range: "$25,000 – $75,000",
          context: "Turnkey commercial multi-platform solution",
        },
      },
      capabilities: [
        { title: "Web + iOS & Android Apps", description: "Omnichannel customer experience sharing unified backend" },
        { title: "Payment Gateway Billing", description: "Stripe / regional payment integration with subscriptions" },
        { title: "Admin Management Portal", description: "Full operational control over users, orders, and content" },
        { title: "Real-Time Push Alerts", description: "Instant mobile push notifications & live status sync" },
      ],
      deliverableSummary: "Web portal + App Store/Play Store apps + admin panel + payment integration.",
      ctaText: "Start Product Platform",
    },
    {
      id: "digital-ecosystem",
      level: "03",
      name: "Digital Ecosystem",
      tagline: "High-scale product ecosystem engineered for growth.",
      description:
        "Enterprise-grade platform with microservices, global edge CDN caching, high-concurrency database clustering, and advanced product telemetry.",
      timeline: "10–16 weeks",
      pricing: {
        PKR: {
          from: "Custom Quote",
          range: "Tailored to product scale",
          context: "Founding enterprise partner cohort",
        },
        USD: {
          from: "$75,000",
          range: "$75,000 – $150,000+",
          context: "Full-scale custom digital ecosystem",
        },
      },
      capabilities: [
        { title: "Multi-Tenant Architecture", description: "Engineered for millions of users with horizontal autoscaling" },
        { title: "Global Edge Caching & CDN", description: "Sub-50ms latency across global geographic regions" },
        { title: "Advanced Conversion Analytics", description: "Cohort tracking, funnel retention, and A/B test tooling" },
        { title: "Dedicated 99.9% Production SLA", description: "High-availability clustering with 24/7 Severity-1 support" },
      ],
      deliverableSummary: "Full digital ecosystem + mobile apps + full source ownership + cloud IaC + SLA.",
      ctaText: "Discuss Digital Ecosystem",
    },
  ] as WebMobilePackage[],

  comparisonMatrix: [
    { name: "Sub-Second Next.js Web Application", launch: true, platform: true, ecosystem: true },
    { name: "Secure User Authentication (OAuth / Email)", launch: true, platform: true, ecosystem: true },
    { name: "Core Customer Self-Service Portal", launch: true, platform: true, ecosystem: true },
    { name: "Responsive Mobile-First UI Blueprints", launch: true, platform: true, ecosystem: true },
    { name: "Native iOS & Android Mobile Apps", launch: false, platform: true, ecosystem: true },
    { name: "Payment Gateway Integration (Stripe / Local)", launch: false, platform: true, ecosystem: true },
    { name: "Administrative Operations & Moderation Panel", launch: false, platform: true, ecosystem: true },
    { name: "Real-Time WebSocket Sync & Push Notifications", launch: false, platform: true, ecosystem: true },
    { name: "Multi-Tenant SaaS / High-Concurrency Architecture", launch: false, platform: false, ecosystem: true },
    { name: "Global Edge CDN Caching & Multi-Region DB", launch: false, platform: false, ecosystem: true },
    { name: "Advanced Product Conversion Funnel Telemetry", launch: false, platform: false, ecosystem: true },
    { name: "Committed 99.9% Production SLA & Support", launch: false, platform: false, ecosystem: true },
  ],

  deliveryStages: [
    {
      step: "01",
      id: "discover",
      name: "Discover & Define",
      tagline: "User Journey & Product Blueprint",
      duration: "Week 1–2",
      copy: "We define exactly what your product needs to do, identifying your primary user journey, business model, and technical requirements before writing code.",
      activities: [
        "Map core user flows, customer personas, and conversion moments",
        "Define technical requirements, payment logic, and third-party APIs",
        "Synthesize project blueprint with fixed milestone scope",
      ],
      deliverable: "Product Blueprint & User Journey Specification",
    },
    {
      step: "02",
      id: "design",
      name: "Design Experience",
      tagline: "High-Fidelity Blueprints & Prototypes",
      duration: "Week 2–4",
      copy: "We craft intuitive, accessible visual interfaces. You click through interactive prototypes and review exact screens before engineering starts.",
      activities: [
        "Design responsive mobile and desktop screen systems in Figma",
        "Build clickable prototypes to validate usability with test users",
        "Establish design tokens, typographic hierarchy, and accessible states",
      ],
      deliverable: "Clickable UI/UX Prototype & Design System Tokens",
    },
    {
      step: "03",
      id: "build",
      name: "Engineer & Integrate",
      tagline: "Full-Stack Development & Staging Demos",
      duration: "Week 4–10",
      copy: "We build your frontends, mobile apps, and backend APIs. You receive working staging builds every 2 weeks to test real interactions on real devices.",
      activities: [
        "Engineer Next.js web application and cross-platform mobile apps",
        "Integrate authentication, database models, and payment processing",
        "Execute automated test suites covering edge cases and performance",
      ],
      deliverable: "Working Staging Builds on Web, iOS TestFlight & Android",
    },
    {
      step: "04",
      id: "launch",
      name: "Launch & Grow",
      tagline: "Store Publishing & Production Telemetry",
      duration: "Week 10+",
      copy: "We deploy to production, manage App Store and Google Play submissions, configure analytics dashboards, and provide continuous improvements.",
      activities: [
        "App Store & Google Play review and publishing management",
        "Deploy production cloud infrastructure with CDN edge caching",
        "Hand over 100% of source code with operational runbooks and SLA",
      ],
      deliverable: "Live Production Product + App Store Deployment + Source Code",
    },
  ] as WebMobileDeliveryStage[],

  postContactSteps: [
    { num: "01", label: "Idea / Problem", desc: "Share what product or platform you want to build" },
    { num: "02", label: "Discovery Call", desc: "15–30 min deep-dive into users, features & business goals" },
    { num: "03", label: "Product Scope", desc: "Clear feature architecture with fixed milestone pricing" },
    { num: "04", label: "UI/UX Design", desc: "Clickable design prototypes you review and approve" },
    { num: "05", label: "Sprint Builds", desc: "Bi-weekly working releases on web and mobile test environments" },
    { num: "06", label: "Beta Testing", desc: "Private testing with real users and automated quality checks" },
    { num: "07", label: "Live Launch", desc: "Production deployment, app store publishing & ongoing support" },
  ],

  fitScenarios: [
    {
      id: "idea",
      title: "New Product Idea",
      subtitle: "Turn Vision Into Working Software",
      problem: "You have an idea for a digital product or SaaS business, but need an experienced engineering team to design, build, and launch it properly.",
      solution: "A complete product delivery path from user design to live web and mobile app store releases.",
    },
    {
      id: "portal",
      title: "Customer Portal",
      subtitle: "Self-Service Digital Access",
      problem: "Customers have to call or email your staff to place orders, check job progress, or download account statements.",
      solution: "A sleek, secure 24/7 web and mobile portal where clients manage everything self-service.",
    },
    {
      id: "manual",
      title: "Field & Mobile Work",
      subtitle: "Offline & On-The-Go Operations",
      problem: "Field employees, drivers, or service technicians still write data on paper forms and re-enter it at the end of the day.",
      solution: "A dedicated mobile app with offline sync, photo capture, and instant central database updates.",
    },
    {
      id: "expansion",
      title: "Product Modernization",
      subtitle: "Upgrading Brittle Software",
      problem: "Your existing app is slow, buggy, or looks dated, causing user churn and negative app store ratings.",
      solution: "A modern rewrite on Next.js and cross-platform mobile frameworks with sub-second speeds.",
    },
  ] as WebMobileFitScenario[],

  technicalSpecs: [
    {
      title: "Sub-Second Next.js App Router & React Server Components",
      content:
        "Frontends are engineered with Next.js App Router and React Server Components, delivering pre-rendered HTML, minimal client JavaScript bundles, and perfect Lighthouse performance scores.",
    },
    {
      title: "Cross-Platform Native Mobile Frameworks",
      content:
        "Mobile apps utilize modern cross-platform engines sharing a unified business logic layer while rendering native iOS and Android interface components with 60 FPS fluidity and full hardware access.",
    },
    {
      title: "Type-Safe Backend APIs & Scalable Relational Stores",
      content:
        "Backends are engineered with TypeScript / Node.js or Python FastAPI, coupled with PostgreSQL databases managed via strict ORM migrations. APIs feature automated OpenAPI documentation and end-to-end type safety.",
    },
    {
      title: "PCI-DSS Compliant Payments & Subscriptions",
      content:
        "Payment workflows adhere to zero-compromise PCI compliance using client-side tokenization with Stripe, Lemon Squeezy, or regional gateways. Webhook handlers feature cryptographic signature verification and idempotent deduplication.",
    },
    {
      title: "Telemetry, Error Tracking & Core Web Vitals",
      content:
        "Production applications are fully instrumented with real-time error tracking (Sentry), Core Web Vitals monitoring, and privacy-compliant analytics to isolate friction in user conversion funnels.",
    },
  ],
};
