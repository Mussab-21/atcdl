# ATCDL — Content Action Items & Placeholders Tracker

This file tracks all content placeholders, missing client references, or unconfirmed items as required by Rule 3 ("Never invent content").

## Open Items & Placeholders

| ID | Location | Item | Needed Action | Status |
|---|---|---|---|---|
| CT-01 | Products | Real pilot metrics for ATCDL Docs | Add validated metrics (e.g. processing time reduction) after first client pilot | Placeholder only (`Prototype` badge) |
| CT-02 | Products | Real pilot metrics for ATCDL Ask | Add validated retrieval accuracy numbers after pilot | Placeholder only (`Prototype` badge) |
| CT-03 | Products | Video screen recordings for products | Record 60-90s walkthrough for each flagship product | ATCDL Docs completed & embedded (`/recordings/atcdl_docs_loop.*`); others pending |
| CT-04 | Case Studies | Client testimonials | Testimonials require signed-off flag (`approved: true`) before display | No unverified testimonials displayed |
| CT-05 | Contact / CRM | HubSpot API / Slack Webhook integration | Input live API tokens in `.env.local` for production CRM routing | Mock/Console logger during dev |
| CT-06 | Infrastructure | Postgres Database connection | Configure production `DATABASE_URL` (Supabase / Neon / RDS) | Local/Mock ready |
| CT-07 | Operations | Lead Notification Retry Trigger | `POST /api/leads/retry` is currently a manual/admin-triggered tool. In production, configure an external scheduler (e.g. Vercel Cron or GitHub Action) with `Authorization: Bearer <RETRY_SECRET>`. GET `/api/leads/retry` is available for zero-side-effect health checks. | Manual-only tool |
