import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { AnimatedReveal } from "@/components/AnimatedReveal";
import { Footer } from "@/components/Footer";
import { Navbar } from "@/components/Navbar";
import { ParallaxExpeditionMedia } from "@/components/ParallaxExpeditionMedia";
import { SectionHeading } from "@/components/SectionHeading";
import { WhatsAppButton } from "@/components/WhatsAppButton";
import { journalPosts } from "@/lib/journal";

export const metadata: Metadata = {
  title: "Journal | SeaMonkey Wildlife",
  description:
    "Field notes and adventure previews from SeaMonkey Wildlife expeditions across Jordan.",
};

export default function JournalPage() {
  return (
    <>
      <Navbar />
      <main className="bg-ink text-parchment">
        <section className="section-shell pt-32">
          <div className="mx-auto max-w-7xl px-5 md:px-8">
            <AnimatedReveal>
              <SectionHeading
                eyebrow="Journal"
                title="Official adventure journal."
                copy="Field journal posts for SeaMonkey Wildlife expeditions, with each story linked to its itinerary and WhatsApp booking flow."
                align="center"
              />
            </AnimatedReveal>

            <div className="mt-12 grid gap-8 md:grid-cols-2">
              {journalPosts.map((post, index) => (
                <AnimatedReveal
                  key={post.slug}
                  delay={index * 0.05}
                  className="group"
                >
                  <Link href={`/journal/${post.slug}`} className="block">
                    <div className="relative h-96 overflow-hidden rounded-[8px] shadow-cinematic">
                      <ParallaxExpeditionMedia
                        src={post.heroImage}
                        alt={post.title}
                        caption={post.locationLabel}
                        theme={post.theme}
                        className="h-full rounded-none border-0 shadow-none"
                        showCaption={false}
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-ink via-ink/[0.18] to-transparent" />
                      <div className="absolute bottom-6 left-6 right-6">
                        <p className="text-xs font-semibold uppercase tracking-[0.24em] text-gold">
                          {post.expedition.title} / {post.readTime}
                        </p>
                        <h2 className="mt-3 font-display text-4xl font-semibold leading-tight text-white">
                          {post.title}
                        </h2>
                      </div>
                    </div>
                    <div className="px-1 pt-5">
                      <p className="max-w-xl text-base leading-8 text-parchment/[0.72]">
                        {post.excerpt}
                      </p>
                      <p className="mt-5 inline-flex items-center gap-2 text-sm font-bold text-gold">
                        Read field note <ArrowRight className="h-4 w-4" />
                      </p>
                    </div>
                  </Link>
                </AnimatedReveal>
              ))}
            </div>
          </div>
        </section>
      </main>
      <Footer />
      <WhatsAppButton />
    </>
  );
}
