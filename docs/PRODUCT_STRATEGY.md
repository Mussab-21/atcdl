# ATCDL — Product Strategy for the Website

Which products to build and showcase, chosen from your four P1 offers and your existing GitHub work (AI Resume Matcher, AI Internship Assistant, NEIKI, Discord/Figma automations).

## How I chose

A product earns a slot on the website only if it passes all five:

1. **Maps to a P1 offer**, so it feeds the same sales pipeline.
2. **Demoable in 60 seconds**, so a salesperson can show it live in a meeting.
3. **Reusable across clients**, so a project becomes a repeatable asset.
4. **Has a clear buyer and budget**, meaning someone owns the problem.
5. **You can honestly build an MVP in 4–8 weeks** with the current team.

The build order also considers what you already have. Products 2 and 5 below start from existing prototypes.

---

## Tier 1 — Build first (flagships, feature on homepage)

### 1. ATCDL Ask — Private Knowledge Copilot
**Offer:** Custom AI / GenAI

**Problem:** Employees waste hours searching policies, SOPs, contracts, and past tickets across scattered systems.

**What it does:** Connects to a company's documents (PDF, Word, SharePoint/Drive, Confluence), answers questions with cited sources, and respects per-user permissions.

**Modules:** ingestion pipeline · permission-aware retrieval · citation view · admin console · usage analytics · feedback loop

**Why first:** Highest demand of any enterprise AI use case, fits your $10K–$100K+ AI band, and evolves directly from your AI Internship Assistant. The 60-second demo is easy: upload a policy PDF and ask a question.

**Deployment:** cloud, private cloud, on-prem (a strong selling point for banks and telecom)

**Commercial model (suggested):** setup fee plus monthly platform fee, priced by users or documents.

---

### 2. ATCDL Docs — Document & Invoice Intelligence
**Offer:** AI Agents & Automation

**Problem:** Finance and operations teams re-key invoices, forms, contracts, and IDs by hand.

**What it does:** OCR + LLM extraction, validation rules, human-approval queue, and export to ERP/accounting (the invoice flow in your hero visual, made real).

**Modules:** capture (email/upload/API) · extraction · validation rules · approval workflow · ERP/CRM connectors · audit trail

**Why:** Measurable ROI (hours saved per document), which makes pricing easy to defend. Your hero animation ("Process invoice #4821") becomes the actual product demo, so the marketing and the product reinforce each other.

**Commercial model (suggested):** setup plus per-document or monthly volume tiers.

---

### 3. ATCDL Agents — Sales & Support Agent Platform
**Offer:** AI Agents & Automation

**Problem:** Leads go cold and support queues overflow because replies are slow and inconsistent.

**What it does:** AI agent that qualifies leads, answers customer questions from a knowledge base, updates the CRM, and hands off to a human with full context. Web chat plus WhatsApp as the primary channel (WhatsApp is the dominant business channel across South Asia, the Middle East, and much of Africa and Latin America).

**Modules:** channel connectors · knowledge base · qualification flows · CRM sync · human handoff · conversation analytics

**Why:** Fastest to sell (small budget, quick approval), and it's the natural entry product that leads to larger engagements. Your Discord-bot experience carries over directly.

---

## Tier 2 — Build next (feature on /products, not homepage)

### 4. ATCDL Talent — Recruitment Intelligence
**Offer:** Custom AI

Evolves your AI Resume Matcher into a sellable product: resume-to-JD matching, skill-gap analysis, candidate ranking, ATS integration, and interview prep. It fits HR teams and staffing agencies, and a prototype already exists. It's a low-effort win, but it targets a narrower buyer than Tier 1.

### 5. ATCDL Flow — Workflow & Approval Engine
**Offer:** Enterprise Software / Automation

A lightweight configurable engine for approvals, forms, SLAs, and audit logs (leave, procurement, expense, onboarding). It becomes the backbone for custom enterprise builds and reduces delivery time on every ERP-style project. It's less flashy to demo, but a strong long-term asset.

### 6. ATCDL Ops — Operations Control Tower (dashboard framework)
**Offer:** Enterprise Software

A reusable dashboard/data-integration framework that unifies orders, tickets, assets, or vehicles into one live view with alerts and AI recommendations. It's the base for your logistics, telecom, and manufacturing pitches (Master Plan §64–67), which makes it a natural companion to the Pitch Lab.

---

## Tier 3 — Opportunistic (only if a client pays for it)

- **Nonprofit Engagement Platform** (from NEIKI): donations, volunteers, campaigns, analytics. Niche, low budget, but good for credibility and reputation.
- **Booking / marketplace starter kit:** Web & Mobile accelerator, best kept as an internal delivery tool rather than a public product.
- **Computer-vision inspection module:** valuable for manufacturing, but needs client data and hardware context first.

---

## Recommended sequence

| Phase | Weeks | Ship | Website status |
|---|---|---|---|
| A | 1–6 | ATCDL Docs MVP (reuses hero demo) | `Prototype` |
| B | 4–10 | ATCDL Ask MVP | `Prototype` |
| C | 8–14 | ATCDL Agents (web chat first, then WhatsApp) | `Prototype` |
| D | 12+ | Talent → Flow → Ops | `Concept`/`Prototype` |

Adjust for team capacity. The point is to have **three demoable products** before a big outbound push, rather than seven half-finished ones.

---

## Rules for showing products on the site

1. **Status honesty.** Use `Concept` → `Prototype` → `Product`. Only use `Product` when a real customer could use it today.
2. **No invented metrics or customers.** Show what the product *does*, not made-up results. Add real numbers only after a pilot.
3. **Each product page needs:** problem, how it works (diagram), modules, integrations, deployment options, and a `Book a Demo →` CTA.
4. **Every product has a live or recorded demo** before it moves above `Concept`. A 60–90 second screen recording is enough.
5. **Naming:** the `ATCDL*` names above are working titles. Confirm trademark availability and pick final names before launch.

## Pricing guidance

Keep publishing only the *project ranges* from the Master Plan. For products, discuss pricing in the sales conversation until you have 2–3 real customers to price against. If you later publish product pricing, use "from" pricing plus "contact us for enterprise" rather than fixed tiers.

## Decisions I need from you

1. Which 3 products do you actually want to build first? My recommendation is 1, 2, 3.
2. Are any of them already partly built beyond the GitHub prototypes?
3. Who is your first target customer, and in which industry? This decides which product leads the homepage.
