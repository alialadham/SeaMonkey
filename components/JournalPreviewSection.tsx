import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { AnimatedReveal } from "@/components/AnimatedReveal";
import { SectionHeading } from "@/components/SectionHeading";
import { journalPosts } from "@/lib/journal";

export function JournalPreviewSection() {
  return (
    <section className="section-shell bg-navy">
      <div className="mx-auto max-w-7xl px-5 md:px-8">
        <AnimatedReveal>
          <SectionHeading
            eyebrow="Field journal"
            title="Official route notes."
            copy="A preview of SeaMonkey Wildlife field journal posts for the main expedition routes."
            align="center"
          />
        </AnimatedReveal>

        <div className="mt-10 grid gap-5 md:grid-cols-3">
          {journalPosts.slice(0, 3).map((post, index) => (
            <AnimatedReveal
              key={post.slug}
              delay={index * 0.05}
              className="group overflow-hidden rounded-[8px] border border-white/10 bg-white/[0.06] shadow-cinematic"
            >
              <Link href={`/journal/${post.slug}`} className="block">
                <div className="relative h-64">
                  <Image
                    src={post.heroImage}
                    alt={post.title}
                    fill
                    sizes="(max-width: 768px) 100vw, 33vw"
                    className="object-cover contrast-110 saturate-125 transition duration-700 group-hover:scale-[1.06]"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-ink via-ink/[0.16] to-transparent" />
                </div>
                <div className="p-5">
                  <p className="text-xs font-semibold uppercase tracking-[0.22em] text-gold">
                    {post.expedition.title}
                  </p>
                  <h3 className="mt-3 font-display text-2xl font-semibold leading-tight text-white">
                    {post.title}
                  </h3>
                  <p className="mt-3 text-sm leading-7 text-parchment/[0.68]">
                    {post.excerpt}
                  </p>
                </div>
              </Link>
            </AnimatedReveal>
          ))}
        </div>

        <div className="mt-8 text-center">
          <Link href="/journal" className="btn-gold">
            Read Field Journal <ArrowRight className="h-4 w-4" />
          </Link>
        </div>
      </div>
    </section>
  );
}
