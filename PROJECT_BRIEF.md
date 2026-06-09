# SeaMonkey Wildlife Website Brief

## Project
- Project name: SeaMonkey Wildlife website.
- Current path: `/Users/alialadham/Documents/Codex/2026-05-06/i-want-to-create-a-brand`.
- Purpose: cinematic wildlife expedition website for Jordan wildlife trips with WhatsApp-first booking.
- GitHub remote: `https://github.com/alialadham/SeaMonkey.git`.
- Latest known local baseline commit from earlier handoff: `4aa639c Final SeaMonkey website checks`.

## Tech Stack
- Next.js App Router, React, TypeScript.
- Tailwind CSS.
- Framer Motion.
- lucide-react plus small custom inline SVG activity icons.
- `next/image`.
- Local MP4 video assets.
- Vercel deployment via Vercel CLI.

## Design Direction
- Premium cinematic eco-adventure style.
- Deep ocean/navy/black foundation with parchment, sand, olive, and warm gold accents.
- Dark overlays, glass cards, image/video-led layouts, smooth reveal animations, editorial Blog pages, responsive grids.
- Preserve the current SeaMonkey Wildlife visual direction. Do not rebuild/redesign unless explicitly requested.

## Pages / Routes / Features
- Homepage `/`: loader, navbar, local video hero, homepage About preview with trailer video, featured expeditions, gallery preview, why book, before-you-book trip cards, Blog preview, reviews CTA section, FAQ/contact CTA, footer, floating WhatsApp button, back-to-top button.
- `/about`: About Us page with MP4 hero video, field approach panel, highlights, Mission/Vision/Values, review CTA.
- `/adventures`: internal route for the full user-facing Expeditions page; shows all six expeditions with icon-only filters and expedition-specific WhatsApp booking buttons.
- `/gallery`: local wildlife gallery with cards linked to expedition details.
- `/journal`: user-facing Blog index.
- `/journal/[slug]`: editorial Blog detail pages with expedition-specific themes.
- `/expeditions/[slug]`: expedition detail/itinerary pages.
- `/review`: review/rating flow page.
- `/faq`: FAQ page.
- No `/contact` page by design; Contact opens WhatsApp.

## Media / Images / Video
- Logo: `public/assets/uploads/seamonkey-logo.jpg`.
- Homepage hero video: `public/videos/seamonkey-hero.mp4`.
- About page hero video and homepage trailer area: `public/videos/seamonkey-about-hero.mp4`.
- Main asset config: `lib/site-data.ts`.
- Expedition media/data: `lib/expeditions.ts`.
- Blog media/data: `lib/journal.ts`.
- Local expedition images in `public/assets/seamonkey/`.
- `next.config.ts` allows remote `seamonkeynetwork.com/wp-content/uploads/**`, but launch-critical media should stay local because remote WordPress media can fail locally.

## Loader Status
- Loader component: `components/SiteLoader.tsx`.
- Mounted in `app/layout.tsx`.
- First page load only via `sessionStorage` key `seamonkey-loader-seen`.
- Uses approved SeaMonkey logo, progress line/percentage, and `Powered by Brandak`.
- Reduced-motion mode uses simplified timing/progress.

## WhatsApp / Contact / Booking
- WhatsApp number/link: `https://wa.me/962799900914`.
- Booking helper: `whatsappBookingLink()` in `lib/site-data.ts`.
- Review helper: `whatsappReviewLink()` in `lib/site-data.ts`.
- Feedback helper: `whatsappFeedbackLink()` in `lib/site-data.ts`.
- Generic homepage booking CTAs route to `/adventures` first; they do not open generic WhatsApp directly.
- Expedition cards/detail pages use expedition-specific WhatsApp prefilled messages.
- Footer includes WhatsApp, email, Instagram placeholder, and Leave a Review.
- Email: `info@seamonkeynetwork.com`.
- No backend form, CRM, Supabase, or email sending service is connected.

## Expedition / Icon Status
- Shared activity icon mapping lives in `components/ActivityIcons.tsx`.
- Arabian Oryx Photography Safari: `CarFront` vehicle icon.
- Scuba Dive, Snorkel and Cruise the Red Sea: custom `SnorkelMaskIcon`.
- Hike in the Wild: custom `HikingGearIcon`.
- Night Dive: custom `ScubaGearIcon`.
- Camp in the Wild: `Tent`.
- Water Buffalo and Bird Watching Trek: custom `HikingGearIcon`, not bird-only and not PawPrint.
- Icons are used in featured cards, all-expeditions grid, before-you-book cards, and expedition detail trip-type facts/pills.
- `/adventures` filters are icon-only with accessible labels/titles:
  - All, Scuba Diving / Snorkel, Hiking, Camping and Hiking, Safari / Wildlife.

## Blog Naming Status
- User-facing `Journal` has been changed to `Blog`.
- Internal routes and data names remain `/journal`, `journalPosts`, etc. Do not rename routes unless explicitly requested.
- Blog cards show expedition names, not `PDF`.
- Blog detail pages keep official/PDF-derived content and themed editorial layouts.

## Review Direction
- Current direction: public review flow should become a Google Forms-style form.
- Placeholder review form link is in `lib/site-data.ts` as `contact.reviewForm = "REPLACE_WITH_GOOGLE_FORM_LINK"` with comment `Replace with official Google Forms review link.`
- Low ratings still branch toward private WhatsApp feedback using prefilled messages.
- Visible Google Reviews wording/buttons have been removed.
- Homepage mock sliding review carousel is hidden behind `showMockReviews = false` in `components/ReviewsSection.tsx`.
- Comment present: `Mock reviews hidden until real reviews are provided.`
- Keep `/review` route and review flow available.

## GitHub Status
- Git remote configured as `origin`: `https://github.com/alialadham/SeaMonkey.git`.
- User previously reported/current status: pushed to GitHub.
- `package-lock.json` is tracked.
- `.gitignore` excludes `.env*`, `node_modules`, `.next`, `.vercel`, build outputs, and `work/`.
- Current worktree contains ongoing uncommitted website updates and unrelated/untracked items such as `freellmapi/` and `PROJECT_BRIEF 2.md`; do not remove unrelated files unless explicitly asked.

## Vercel / Deployment
- Vercel was previously linked/relinked via Vercel CLI.
- Existing/old production alias from earlier work: `https://i-want-to-create-a-brand.vercel.app`.
- Desired future domain: `seamonkeywildlife.com`.
- Project/domain slug remains generic unless renamed later.
- Do not change deployment/domain settings unless specifically asked.

## Current Bugs / Issues
- `metadataBase` warning appears during build unless metadata base URL is configured.
- `next dev` can hang before accepting connections in this environment.
- `next start` after `npm run build` has worked on `http://127.0.0.1:3003`.
- Stop local server before running `npm run build` to avoid stale/corrupt `.next` output.
- Local `node_modules` was repaired with `npm ci` after transient ESLint dependency errors.
- Media/legal approval is still needed before public/commercial launch.
- Remote WordPress media can fail locally; keep critical media local.

## Pending Tasks
- Replace `REPLACE_WITH_GOOGLE_FORM_LINK` with official review form URL.
- Configure `metadataBase` if social sharing metadata is needed.
- Confirm media/legal rights before public commercial launch.
- Decide whether to rename project/domain to a SeaMonkey-specific slug.
- Add custom domain if desired.
- Replace any remaining fallback media only when approved official assets are provided.
- Add backend/contact handling only if requested; current intended flow is WhatsApp-first plus review form placeholder.

## Important Files / Folders
- `PROJECT_BRIEF.md` - project memory and handoff brief.
- `app/page.tsx` - homepage composition.
- `app/layout.tsx` - root layout, metadata, loader, back-to-top mount.
- `app/about/page.tsx` - About page.
- `app/adventures/page.tsx` - all-expeditions page route.
- `app/gallery/page.tsx` - gallery page.
- `app/faq/page.tsx` - FAQ page.
- `app/review/page.tsx` - review flow route.
- `app/expeditions/[slug]/page.tsx` - expedition routes.
- `app/journal/page.tsx` - Blog index.
- `app/journal/[slug]/page.tsx` - Blog detail pages.
- `components/ActivityIcons.tsx` - shared custom/lucide activity icon mapping.
- `components/AboutSection.tsx` - homepage About/trailer section.
- `components/ExpeditionsGrid.tsx` - full Expeditions page filters/cards.
- `components/ExpeditionCard.tsx` - featured expedition cards.
- `components/BeforeYouBookSection.tsx` - six trip-type cards.
- `components/ExpeditionDetailPage.tsx` - itinerary/detail UI.
- `components/ReviewsSection.tsx` - review CTA and hidden mock carousel.
- `components/ReviewFlow.tsx` - rating/private feedback flow.
- `components/Navbar.tsx`, `components/Footer.tsx`, `components/WhatsAppButton.tsx`, `components/SiteLoader.tsx`.
- `lib/site-data.ts` - contact helpers, review form placeholder, asset paths, gallery items, FAQs.
- `lib/expeditions.ts` - expedition data, media, itineraries, trip categories.
- `lib/journal.ts` - Blog/PDF-derived content and theme metadata.
- `public/assets/seamonkey/` - local expedition images.
- `public/videos/seamonkey-hero.mp4` - homepage hero video.
- `public/videos/seamonkey-about-hero.mp4` - About hero and homepage trailer video.
- `tsconfig.json` - excludes unrelated `freellmapi`.
- `package.json` scripts: `dev`, `build`, `lint`, `typecheck`.

## Rules For Next Codex Chat
- First read `PROJECT_BRIEF.md`.
- Confirm current project path and required files before editing.
- Run the site locally before making changes, preferably `npm run build` then `npx next start --hostname 127.0.0.1 --port 3003` if needed.
- Do not rebuild, redesign, or replace the website unless explicitly asked.
- Do not remove existing pages, routes, sections, media setup, loader, WhatsApp flow, deployment setup, Blog/expedition/review structure, or responsive layout unless explicitly requested.
- Keep changes scoped to the user’s exact request.
- Do not inspect unrelated files unless needed.
- Do not run lint/typecheck/build/deploy unless asked or truly needed for verification.
- Preserve `SeaMonkey Wildlife` branding.
- Do not use `Sea Monkey Network` user-facing text unless it is part of an old logo image.
- Use official/approved local SeaMonkey media where possible.
- Avoid fake/cartoon wildlife imagery when real uploaded images exist.
- Do not leave broken local asset references.
- If building locally, stop local server first.
- If deploying, use Vercel carefully and report exact URL/status. Do not expose secrets.

Continue from this brief. Do not rebuild. Preserve the current SeaMonkey Wildlife design, routes, media setup, loader, WhatsApp booking flow, Blog/expedition/review structure, deployment setup, and responsive layout. First confirm the correct project path, then run the site locally before making changes.
