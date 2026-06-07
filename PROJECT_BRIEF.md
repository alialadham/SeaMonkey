# SeaMonkey Wildlife Website Brief

## Project Name / Purpose
SeaMonkey Wildlife website. A cinematic eco-adventure website for Jordan's first wildlife expedition agency, presenting desert, mountain, wetland, and Red Sea wildlife experiences with WhatsApp-first booking.

## Current Project Path
`/Users/alialadham/Documents/Codex/2026-05-06/i-want-to-create-a-brand`

## Tech Stack
- Next.js App Router, React, TypeScript
- Tailwind CSS
- Framer Motion
- lucide-react
- `next/image`
- Local MP4 hero video
- Vercel deployment via Vercel CLI

## Design / Style Direction
- Cinematic premium eco-adventure, not a generic landing page.
- Dark ocean/navy/black foundation with parchment, sand, olive, warm gold, and expedition-specific editorial themes.
- Large media, dark overlays, subtle motion, parallax/editorial image panels, responsive layouts, premium cards, and a bold handwritten/adventure display font for major headings.
- Preserve the current SeaMonkey Wildlife visual system and avoid broad redesigns unless explicitly requested.

## Current Pages / Sections
Homepage `/` includes:
- Sticky responsive navbar
- Hero with local video, animated canvas background, dark overlay, WhatsApp CTA, and field-journal anchors
- About section with Vision/Mission TODO comment
- Featured adventures: Scuba Diving, Arabian Oryx, Water Buffalo
- Wildlife gallery with linked cards
- Why Book With Us, including special arrangements with guides
- Before You Book section with all six trip types and WhatsApp booking CTAs
- Field Journal / six expedition story sections
- Review CTA section linked to WhatsApp
- FAQ accordion
- Footer with `id="contact"`
- Floating WhatsApp button

Current routes:
- `/`
- `/review`
- `/journal`
- `/journal/[slug]`
- `/journal/water-buffalo-birdwatching-azraq`
- `/journal/camp-in-the-wild-tafilah`
- `/journal/red-sea-scuba-snorkel-cruise`
- `/journal/hike-in-the-wild-tafilah`
- `/journal/arabian-oryx-field-safari`
- `/journal/night-dive-aqaba`
- `/expeditions/[slug]`
- `/expeditions/arabian-oryx-photography-safari`
- `/expeditions/scuba-dive-snorkel-cruise-red-sea`
- `/expeditions/hike-in-the-wild`
- `/expeditions/night-dive`
- `/expeditions/camp-in-the-wild`
- `/expeditions/water-buffalo-birdwatching-trek`

Expedition detail pages include hero, quick facts, overview, route highlights, itinerary, wildlife cards, what-to-bring checklist, booking CTA, related expeditions, and a matching field-journal link.

## Media / Image / Video Setup
- Brand name should be `SeaMonkey Wildlife`.
- Logo currently uses remote SVG: `https://seamonkeynetwork.com/wp-content/uploads/2023/09/LOGO.svg`.
- Homepage hero video is local: `public/videos/seamonkey-hero.mp4`.
- Hero video source is `assets.heroVideo` in `lib/site-data.ts`.
- Animated canvas background is `components/HeroCanvas.tsx`.
- Hero component is `components/HeroSection.tsx`.
- Gallery/homepage media sources are in `lib/site-data.ts`.
- Expedition media and itinerary data are in `lib/expeditions.ts`.
- Journal/story data is in `lib/journal.ts`.
- `components/ParallaxExpeditionMedia.tsx` provides parallax media with themed fallback panels.
- `next.config.ts` allows remote `seamonkeynetwork.com/wp-content/uploads/**` images.
- Important issue: `seamonkeynetwork.com` often returns HTML `/lander` redirects or invalid image responses for media URLs in local preview, so many remote images do not render locally. Use local approved images or a reliable CDN/storage for final launch.
- Uploaded static asset paths such as `assets/wetlands-buffalo.png` are not present in this project. Do not leave broken references to them.

## WhatsApp Booking / Contact Behavior
- WhatsApp is the main booking/contact flow.
- WhatsApp number/link: `https://wa.me/962799900914`.
- Generic booking helper: `whatsappBookingLink()` in `lib/site-data.ts`.
- Review helper: `whatsappReviewLink()` in `lib/site-data.ts`.
- Generic CTAs use SeaMonkey Wildlife prefilled messages.
- Expedition CTAs use expedition-specific WhatsApp messages.
- Floating WhatsApp button is fixed bottom-right with actual WhatsApp SVG and `aria-label="Chat on WhatsApp"`.
- Footer keeps WhatsApp, email, and Instagram placeholder links.
- Email: `info@seamonkeynetwork.com`.
- No backend form, Supabase, email service, or CRM exists.

## Gallery / Itinerary / Blog Status
- Gallery cards are linked to matching expedition pages.
- Featured adventures show only three requested cards: Scuba Diving, Arabian Oryx, Water Buffalo.
- Full six-trip booking options live in `BeforeYouBookSection`.
- Itinerary/detail pages are still the main route-specific booking pages.
- Blog/journal exists at `/journal` and `/journal/[slug]`.
- Journal uses story/content from the uploaded static HTML for six expeditions.
- Homepage also includes `ExpeditionStoriesSection` with editorial versions of the six journal stories.

## Deployment / Vercel Status
- Production URL to share: `https://i-want-to-create-a-brand.vercel.app`.
- Latest known long deployment URL from prior handoff: `https://i-want-to-create-a-brand-ozgps2j3g-aliadham3355-5321s-projects.vercel.app`.
- Vercel project is linked locally via `.vercel/project.json`:
  - project name: `i-want-to-create-a-brand`
  - project id: `prj_JciZkOK6sr93duGyNVMWcbiabDKO`
  - org/team id: `team_Zu38LyRJYgZo3UFpDRMtI0Dk`
- Vercel CLI account previously confirmed as `brandak` / `aliadham3355-5321`; dashboard visibility may differ from user account `alialadha`.
- The short production alias was previously public. Share the short production alias for clients/friends.
- Current local preview has been run with `next start` on `http://127.0.0.1:3002`. `next dev` may hang before binding in this environment.

## Recent Uploaded Static Files
Uploaded via WhatsApp temp paths:
- `index.html`
- `styles.css`
- `script.js`

What they contain:
- Cinematic hero with animated canvas background
- Expedition index links
- Six expedition story sections
- Reveal-on-scroll animations
- Parallax expedition images
- Strong editorial/journal layout
- Eco-adventure color themes
- Expedition content for wetlands, Dana camp, Red Sea, hike, oryx, and night dive

Important integration rule:
- Use uploaded files as design, animation, and content reference only.
- Convert/merge useful parts into React/Next components.
- Do not copy-paste the static page blindly and do not replace the existing app.

Current integration from uploaded files:
- Canvas animation converted to `components/HeroCanvas.tsx`.
- Parallax/reveal behavior adapted using Framer Motion and `components/ParallaxExpeditionMedia.tsx`.
- Story content converted into `lib/journal.ts`.
- Six editorial story sections converted into `components/ExpeditionStoriesSection.tsx`.
- Uploaded CSS themes converted into Tailwind class patterns inside components.

## Current Bugs / Issues
- Remote images from `seamonkeynetwork.com` are blocked/invalid in local preview; Next image optimizer logs “requested resource isn't a valid image” and/or TLS/fetch errors.
- Uploaded image assets referenced by static HTML are missing from the project.
- Media/legal approval is still needed before public/commercial launch.
- `next dev` can hang before binding locally; `next start` after `npm run build` has worked on `127.0.0.1:3002`.
- Running `npm run build` while a dev server is active may stale/corrupt `.next`; stop/restart local servers around builds.
- Project/domain still has generic slug `i-want-to-create-a-brand`.

## Pending Tasks
- Replace blocked remote WordPress media with approved local files or reliable CDN/Vercel-hosted media.
- Add missing static-upload images if provided and update references carefully.
- Review and approve all media rights/legal usage.
- Replace rock hyrax habitat fallback with true official rock hyrax close-up when available.
- Decide whether to rename Vercel project/domain to a SeaMonkey-specific slug.
- Add a real custom domain if desired.
- If dashboard visibility under `alialadha` is needed, switch/login Vercel CLI, relink, and redeploy under that scope.
- Add backend/contact handling only if requested; current intended flow is WhatsApp-first.

## Important Files / Folders
- `PROJECT_BRIEF.md` - current handoff brief
- `app/page.tsx` - homepage composition
- `app/layout.tsx` - metadata/root layout
- `app/expeditions/[slug]/page.tsx` - dynamic expedition route
- `app/journal/page.tsx` - journal index
- `app/journal/[slug]/page.tsx` - journal detail route
- `app/review/page.tsx` - review CTA page
- `app/globals.css` - Tailwind globals/shared classes
- `components/HeroSection.tsx` - homepage hero
- `components/HeroCanvas.tsx` - React canvas animation from uploaded script
- `components/ExpeditionStoriesSection.tsx` - six editorial story sections from uploaded static HTML
- `components/ParallaxExpeditionMedia.tsx` - React parallax/fallback media component
- `components/Navbar.tsx` - sticky responsive navigation
- `components/WhatsAppButton.tsx` - floating WhatsApp button
- `components/WildlifeGallery.tsx` - homepage linked gallery
- `components/BeforeYouBookSection.tsx` - six trip-type booking cards
- `components/ReviewsSection.tsx` - WhatsApp review CTA
- `components/ExpeditionDetailPage.tsx` - itinerary/detail UI
- `components/ExpeditionCard.tsx` - adventure cards
- `components/Footer.tsx` - footer/contact anchor
- `lib/site-data.ts` - contact data, WhatsApp helpers, hero/gallery assets
- `lib/expeditions.ts` - expedition data, routes, itinerary content, media
- `lib/journal.ts` - journal/story data from uploaded static HTML
- `public/videos/seamonkey-hero.mp4` - homepage hero video
- `public/assets/` - local placeholder SVGs
- `next.config.ts` - remote image config
- `tailwind.config.ts` - theme colors/shadows/fonts/backgrounds
- `package.json` - scripts: `dev`, `build`, `lint`, `typecheck`
- `.vercel/project.json` - local Vercel project link

## Rules For Future Codex Chats
- First read this `PROJECT_BRIEF.md`.
- Confirm the current project path before editing.
- Do not rebuild or redesign unless explicitly asked.
- Do not remove existing pages, routes, sections, media setup, booking/contact flow, deployment setup, itinerary/blog structure, or responsive layout unless explicitly requested.
- Keep changes scoped to the user's specific request.
- Do not inspect unrelated files unless needed.
- Do not run lint/typecheck/build/deploy unless the user asks or the change requires verification.
- Preserve WhatsApp-first booking behavior.
- Preserve `SeaMonkey Wildlife` branding; do not use `Sea Monkey Network` except in old source comments or references.
- Use official/approved SeaMonkey media where possible; avoid cartoon/fake wildlife imagery.
- Do not leave broken uploaded `assets/*.png` references if those files are missing.
- If deploying, use Vercel carefully and report exact public URL/status. Do not expose secrets.
- If building locally, stop/restart local servers around builds to avoid stale manifests.

Continue from this brief. Do not rebuild. Preserve the current SeaMonkey Wildlife design, pages, routes, media setup, WhatsApp booking flow, itinerary/blog structure, and responsive layout. First confirm the correct project path, then make only the requested change.
