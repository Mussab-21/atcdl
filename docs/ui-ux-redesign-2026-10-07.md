# ATC Digital Labs — UI/UX redesign handoff

Date: 7 October 2026

## Design direction

A calm engineering studio identity: deep green navigation, warm white surfaces, mint and lilac service panels, clear sans-serif typography and a restrained serif accent. The homepage leads with a clear proposition and one main action, then services, selected work, delivery process and the product lab.

The main visitor journey is **understand the offer → explore relevant work or a product → send an inquiry**. Product visitors get a shorter demo inquiry; project visitors can optionally provide budget, timing and existing systems.

## Implemented changes

| Audit area | Implementation |
|---|---|
| F01: action contrast | Darkened the shared action/link green to #126647, with white foreground. Regression test verifies at least 4.5:1. Decorative green remains in existing illustrations; this is not a site-wide WCAG certification. |
| F02: navigation overflow | Rebuilt desktop disclosure navigation within viewport edges and added a separate mobile disclosure menu. Verified at 1024px. |
| F03: false success | Storage failure returns 503 with a retry message. Confirmation uses the real saved record reference in an essential HTTP-only cookie. Unconfigured notifications no longer report delivery. |
| F04: dialog accessibility | Native modal dialog with an accessible title, initial focus, Escape handling, background isolation and focus restoration. |
| F05: form errors | Focused error summary with field links, field descriptions, invalid state, native required metadata, preserved input and clear failure copy. |
| F06: offering mismatch | Shared offering definitions for URL prefill, displayed values, validation and scoring. Invalid values are rejected. |
| F07: privacy expectations | Removed automatic NDA and absolute data-handling promises. Explained inquiry storage, communication providers and the temporary receipt cookie. |
| F08: distracting headline | Replaced automatic word rotation with a stable headline. |
| F09: intake friction | Rebuilt the three-step brief as one clear form. Company, budget, timing and systems are optional; demo requests require only name and email. |
| F10: industry deep links | Banking and logistics aliases select the correct industry. The hero and explorer share selection. Navigation includes only supported industries. |
| F11: product filtering | Agents belongs to Communication; counts and results agree, with a status message and empty-state recovery. |
| F12: misleading contact badge | Intent-specific headings replace the incorrect status badge. |
| F13: repeated carousel links | Retired the cloned carousel in favor of unique, directly navigable product cards. |
| F14: nested controls | Link-wrapped shared buttons now render non-interactive styled spans. Added menu state attributes and a skip link. |
| F15: lost inquiry context | Product, service, solution and industry context appear in the form and persist with the saved inquiry. |
| F16: unsupported claims | Removed static verified-system wording, guaranteed hallucination/safety claims and a generic numerical efficiency claim. Product and industry demonstrations are explicitly illustrative. Existing case-study narratives still require the company's evidence and publication approval. |
| F17: destinations | Footer product links lead to the named product. Removed project-source links that only opened a GitHub profile. |
| F18: motion cost | New homepage animation pauses on request, offscreen, in a hidden tab and for reduced motion. Industry and product hero timers also respect visibility. Process progression is manual. Removed a permanent transform hint from the audited bottleneck component. |
| F19: hidden fallback content | Server-rendered content is visible before JavaScript. Short reveal animations enhance already-visible content. Removed the global concealment rule. |
| F20: measurement | Wired hero, form, detail-page and industry events. Added a local atc:analytics event integration point. External GA/PostHog collection still requires a configured provider and appropriate consent setup. |

## Motion and interaction

- Homepage workflow explorer has three user-selected scenarios: documents, connected operations and private AI. Its moving paths illustrate data flow; they do not imply a live backend.
- Animation can be paused. OS reduced-motion preferences suppress movement and smooth scrolling.
- Service and work cards use brief hover feedback; process details expand on request.
- Font assets are hosted locally with their SIL Open Font License, removing build-time Google Fonts downloads.

## Verification

- `node node_modules/next/dist/bin/next build`: passed; 49 pages generated.
- `node node_modules/typescript/bin/tsc --noEmit`: passed.
- `node node_modules/eslint/bin/eslint.js src`: zero errors; existing unused-import warnings remain in older components.
- `npm run test:ux`: six offline regression tests pass. Covers all offering values and scores, database failure, real confirmation references, notification failure after persistence, invalid requests and action contrast. No emails or webhooks are sent.
- Browser checks: homepage at 1440px and 390px without horizontal overflow; navigation panel at 1024px remains within viewport; mobile menu; workflow selection/pause; mobile form error focus; demo required fields; solution prefill; Communication filter; modal Escape/focus return; banking deep link after hydration.
- Reduced motion and offscreen behavior are implemented in shared observers and CSS; a physical-device or screen-reader certification was not performed.

## Production handoff

1. Keep the production database available and migrations current. The site deliberately refuses to confirm an unsaved inquiry.
2. Configure and test the intended Discord and/or Resend notification destinations. Notification failure does not invalidate a successfully saved inquiry. Monitor partial delivery and use the protected retry endpoint as appropriate; it now refuses requests if RETRY_SECRET is missing.
3. If enabling Turnstile, configure both public site key and server secret for the deployment domain. Verification outages now fail clearly instead of silently bypassing verification.
4. Connect the intended analytics provider before expecting dashboard data. Event wiring alone is not a configured analytics account.
5. Replace illustrative product previews with real approved product screenshots as products mature. Add verified project repository URLs and evidence-backed case-study results when available.
6. Review the published privacy notice against actual provider, retention and contractual practices. The implementation does not establish an NDA or legal compliance guarantee.

These are configuration and evidence checks, not claims that external services or a production deployment were tested in this development session.
