import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { AnimatedReveal } from "@/components/AnimatedReveal";
import { ParallaxExpeditionMedia } from "@/components/ParallaxExpeditionMedia";
import { SectionHeading } from "@/components/SectionHeading";
import { journalPosts } from "@/lib/journal";

const themeStyles = {
  wetlands: {
    section: "bg-[#eef1e4] text-ink",
    heading: "text-[#25351f]",
    accent: "text-[#526a3b]",
    line: "bg-[#526a3b]",
    chip: "border-[#526a3b]/25 bg-[#526a3b]/10 text-[#25351f]",
    panel: "border-[#526a3b]/20 bg-white/55",
    button: "border-[#526a3b] text-[#25351f] hover:bg-[#25351f] hover:text-white",
  },
  dana: {
    section: "bg-[#f6ead9] text-ink",
    heading: "text-[#3d2c20]",
    accent: "text-[#9b7148]",
    line: "bg-[#9b7148]",
    chip: "border-[#9b7148]/25 bg-[#9b7148]/10 text-[#3d2c20]",
    panel: "border-[#9b7148]/20 bg-white/55",
    button: "border-[#9b7148] text-[#3d2c20] hover:bg-[#3d2c20] hover:text-white",
  },
  redsea: {
    section: "bg-[#e8f3f4] text-ink",
    heading: "text-[#062f48]",
    accent: "text-[#0e81a5]",
    line: "bg-[#0e81a5]",
    chip: "border-[#0e81a5]/25 bg-[#0e81a5]/10 text-[#062f48]",
    panel: "border-[#0e81a5]/20 bg-white/55",
    button: "border-[#0e81a5] text-[#062f48] hover:bg-[#062f48] hover:text-white",
  },
  hike: {
    section: "bg-[#f1e9d7] text-ink",
    heading: "text-[#3b2e1a]",
    accent: "text-[#a27b44]",
    line: "bg-[#a27b44]",
    chip: "border-[#a27b44]/25 bg-[#a27b44]/10 text-[#3b2e1a]",
    panel: "border-[#a27b44]/20 bg-white/55",
    button: "border-[#a27b44] text-[#3b2e1a] hover:bg-[#3b2e1a] hover:text-white",
  },
  oryx: {
    section: "bg-[#faf4ea] text-ink",
    heading: "text-[#3f3527]",
    accent: "text-[#aa8b5c]",
    line: "bg-[#aa8b5c]",
    chip: "border-[#aa8b5c]/25 bg-[#aa8b5c]/10 text-[#3f3527]",
    panel: "border-[#aa8b5c]/20 bg-white/55",
    button: "border-[#aa8b5c] text-[#3f3527] hover:bg-[#3f3527] hover:text-white",
  },
  night: {
    section: "bg-[#08131b] text-parchment",
    heading: "text-white",
    accent: "text-[#23a8c8]",
    line: "bg-[#23a8c8]",
    chip: "border-[#23a8c8]/30 bg-[#0b2738]/70 text-[#e8faff]",
    panel: "border-[#23a8c8]/30 bg-[#0b2738]/70",
    button: "border-[#23a8c8] text-[#e8faff] hover:bg-[#8defff] hover:text-[#06131d]",
  },
};

export function ExpeditionStoriesSection() {
  return (
    <section id="blog" className="bg-parchment">
      <div className="section-shell bg-ink">
        <div className="mx-auto max-w-7xl px-5 md:px-8">
          <AnimatedReveal>
            <SectionHeading
              eyebrow="Blog"
              title="Six stories from Jordan's wild routes."
              copy="Adapted from the uploaded static SeaMonkey route notes into the existing Next.js experience."
              align="center"
            />
          </AnimatedReveal>
          <div className="mt-10 grid gap-2 border-t border-white/10 pt-5 sm:grid-cols-2 lg:grid-cols-3">
            {journalPosts.map((post) => (
              <Link
                key={post.slug}
                href={`/journal/${post.slug}`}
                className="rounded-[8px] border border-white/10 bg-white/[0.06] px-4 py-3 text-xs font-bold uppercase tracking-[0.16em] text-parchment/70 transition hover:border-gold/50 hover:text-gold"
              >
                {post.label.replace("Expedition ", "")}
              </Link>
            ))}
          </div>
        </div>
      </div>

      {journalPosts.map((post, index) => {
        const styles = themeStyles[post.theme];
        const reversed = index % 2 === 1;

        return (
          <article
            key={post.slug}
            id={`story-${post.slug}`}
            className={`relative overflow-hidden py-20 md:py-28 ${styles.section}`}
          >
            <div className="pointer-events-none absolute inset-0 bg-[linear-gradient(90deg,transparent_0_49.8%,rgba(29,33,29,0.05)_50%,transparent_50.2%_100%)] opacity-70" />
            <div
              className={`relative mx-auto grid max-w-7xl gap-10 px-5 md:px-8 lg:items-center ${
                reversed
                  ? "lg:grid-cols-[minmax(420px,0.74fr)_minmax(0,0.95fr)]"
                  : "lg:grid-cols-[minmax(0,0.95fr)_minmax(420px,0.74fr)]"
              }`}
            >
              <AnimatedReveal
                className={reversed ? "lg:order-2" : ""}
              >
                <ParallaxExpeditionMedia
                  src={post.heroImage}
                  alt={post.title}
                  caption={post.locationLabel}
                  theme={post.theme}
                  className="min-h-[420px] aspect-[1.05/1]"
                />
              </AnimatedReveal>

              <AnimatedReveal delay={0.08}>
                <div className={`mb-7 h-0.5 w-20 ${styles.line}`} />
                <p className={`text-xs font-bold uppercase tracking-[0.22em] ${styles.accent}`}>
                  {post.label}
                </p>
                <h2 className={`mt-4 font-display text-4xl font-semibold leading-[0.98] md:text-6xl ${styles.heading}`}>
                  {post.title}
                </h2>
                <p className={`mt-5 font-display text-2xl font-semibold leading-tight md:text-4xl ${styles.accent}`}>
                  {post.subtitle}
                </p>

                <div className="mt-7 space-y-4 text-base leading-8 opacity-85">
                  <p className="whitespace-pre-line">
                    {post.pdfPages[0]?.text.slice(0, 620)}...
                  </p>
                </div>

                <blockquote className={`my-8 border-l-2 pl-5 font-display text-2xl font-semibold leading-tight md:text-4xl ${styles.heading}`}>
                  {post.quote}
                </blockquote>

                <div className={`mt-8 rounded-[8px] border p-5 shadow-xl shadow-black/5 ${styles.panel}`}>
                  <p className={`text-xs font-bold uppercase tracking-[0.18em] ${styles.accent}`}>
                    Blog
                  </p>
                  <span
                    className={`mt-4 inline-flex rounded-[8px] border px-3 py-2 text-xs font-bold uppercase tracking-[0.08em] ${styles.chip}`}
                  >
                    {post.expedition.title}
                  </span>
                  <p className="mt-5 text-sm leading-7 opacity-80">
                    Official expedition field notes are available on the blog page.
                  </p>
                </div>

                <div className="mt-8 flex flex-col gap-3 sm:flex-row">
                  <Link
                    href={`/journal/${post.slug}`}
                    className={`inline-flex min-h-12 items-center justify-center gap-2 rounded-full border px-6 py-3 text-xs font-bold uppercase tracking-[0.12em] transition hover:-translate-y-0.5 ${styles.button}`}
                  >
                    Read full story <ArrowRight className="h-4 w-4" />
                  </Link>
                  <Link
                    href={`/expeditions/${post.expedition.slug}`}
                    className={`inline-flex min-h-12 items-center justify-center rounded-full border px-6 py-3 text-xs font-bold uppercase tracking-[0.12em] transition hover:-translate-y-0.5 ${styles.button}`}
                  >
                    View itinerary
                  </Link>
                </div>
              </AnimatedReveal>
            </div>
          </article>
        );
      })}
    </section>
  );
}
