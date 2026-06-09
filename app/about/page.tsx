import type { Metadata } from "next";
import Image from "next/image";
import { Camera, Compass, Mountain, ShieldCheck, Star, Waves } from "lucide-react";
import { AnimatedReveal } from "@/components/AnimatedReveal";
import { Footer } from "@/components/Footer";
import { Navbar } from "@/components/Navbar";
import { WhatsAppButton } from "@/components/WhatsAppButton";
import { assets } from "@/lib/site-data";

export const metadata: Metadata = {
  title: "About Us | SeaMonkey Wildlife",
  description:
    "About SeaMonkey Wildlife, Jordan wildlife expeditions, mission, vision, values, and cinematic field video.",
};

const highlights = [
  { label: "First wildlife expedition agency in Jordan", icon: Compass },
  { label: "Desert, sea, wetlands, mountains", icon: Mountain },
  { label: "Private and public expedition options", icon: Waves },
  { label: "Photography-friendly field routes", icon: Camera },
];

export default function AboutPage() {
  return (
    <>
      <Navbar />
      <main className="bg-ink text-parchment">
        <section className="relative min-h-[92svh] overflow-hidden pt-28">
          {/* Replace About page hero video here. */}
          <video
            className="absolute inset-0 h-full w-full object-cover"
            autoPlay
            muted
            loop
            playsInline
            poster={assets.heroPoster}
            preload="metadata"
          >
            <source src={assets.aboutHeroVideo} type="video/mp4" />
          </video>
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_18%_18%,rgba(200,155,74,0.18),transparent_28%),linear-gradient(90deg,rgba(3,25,35,0.96),rgba(3,25,35,0.58)_56%,rgba(5,5,5,0.82)),linear-gradient(0deg,rgba(5,5,5,1),transparent_42%)]" />
          <div className="relative mx-auto grid min-h-[calc(92svh-7rem)] max-w-7xl gap-10 px-5 pb-16 md:px-8 lg:grid-cols-[minmax(0,0.9fr)_minmax(360px,0.62fr)] lg:items-end">
            <AnimatedReveal className="max-w-4xl">
              <p className="text-xs font-semibold uppercase tracking-[0.32em] text-gold">
                About Us
              </p>
              <h1 className="mt-4 max-w-4xl font-display text-5xl font-semibold leading-[0.95] text-white md:text-7xl lg:text-8xl">
                Wildlife expeditions shaped by respect for nature.
              </h1>
              <p className="mt-6 max-w-2xl text-lg leading-8 text-parchment/[0.78] md:text-xl md:leading-9">
                SeaMonkey Wildlife creates cinematic field experiences across
                Jordan&apos;s deserts, wetlands, mountains, and Red Sea habitats.
              </p>
              <div className="mt-8 flex flex-col gap-3 sm:flex-row">
                <a href="#mission" className="btn-gold">
                  Mission, Vision, Values
                </a>
                <a href="/review" className="btn-ghost">
                  <Star className="h-4 w-4" />
                  Leave a Review
                </a>
              </div>
            </AnimatedReveal>

            <AnimatedReveal delay={0.08}>
              <div className="rounded-[8px] border border-white/10 bg-ink/[0.68] p-5 shadow-cinematic backdrop-blur-md md:p-6">
                <p className="text-xs font-bold uppercase tracking-[0.24em] text-gold">
                  Field approach
                </p>
                <p className="mt-4 leading-8 text-parchment/[0.78]">
                  SeaMonkey Wildlife is built around responsible field
                  experiences, real Jordan habitats, and route-specific
                  expedition planning.
                </p>
                <div className="mt-6 grid gap-3 sm:grid-cols-2">
                  {highlights.map(({ label, icon: Icon }) => (
                    <div
                      key={label}
                      className="grid grid-cols-[auto_1fr] items-start gap-3 border-l border-gold/30 py-2 pl-3"
                    >
                      <Icon className="mt-1 h-5 w-5 text-gold" />
                      <p className="text-sm font-semibold leading-6 text-parchment">
                        {label}
                      </p>
                    </div>
                  ))}
                </div>
              </div>
            </AnimatedReveal>
          </div>
        </section>

        <section id="mission" className="section-shell relative bg-navy">
          <div className="absolute inset-0 bg-topographic-lines opacity-35" />
          <div className="absolute left-0 top-0 h-72 w-72 bg-ocean/30 blur-3xl" />
          <div className="relative mx-auto grid max-w-7xl gap-12 px-5 md:px-8 lg:grid-cols-[0.9fr_1.1fr] lg:items-start">
            <AnimatedReveal className="lg:sticky lg:top-28">
              <p className="text-xs font-semibold uppercase tracking-[0.32em] text-gold">
                What guides every route
              </p>
              <h2 className="mt-4 font-display text-4xl font-semibold leading-tight text-parchment md:text-6xl">
                Conservation-minded adventure, built for close encounters.
              </h2>
              <div className="mt-10 overflow-hidden rounded-[8px] border border-gold/25 bg-ink shadow-cinematic">
                <div className="relative h-[420px] md:h-[560px]">
                  <Image
                    src={assets.aboutWalking}
                    alt="SeaMonkey Wildlife guide walking through Azraq wetlands"
                    fill
                    sizes="(max-width: 1024px) 100vw, 520px"
                    className="object-cover contrast-110 saturate-110"
                  />
                  <div className="absolute inset-0 bg-[linear-gradient(0deg,rgba(5,5,5,0.88),transparent_58%),linear-gradient(90deg,rgba(3,25,35,0.56),transparent_42%)]" />
                  <div className="absolute bottom-6 left-6 max-w-xs border-l border-gold/50 pl-4">
                    <p className="text-xs font-bold uppercase tracking-[0.24em] text-gold">
                      Azraq wetlands
                    </p>
                    <p className="mt-2 text-sm leading-6 text-parchment/80">
                      A field-first view of Jordan&apos;s wetlands, deserts,
                      mountains, and Red Sea habitats.
                    </p>
                  </div>
                </div>
              </div>
            </AnimatedReveal>

            <div className="relative space-y-8 lg:pt-14">
              <div className="absolute bottom-8 left-5 top-16 hidden w-px bg-gradient-to-b from-gold via-sand/50 to-olive/20 md:block" />
              <AnimatedReveal className="relative md:pl-16">
                <span className="mb-5 grid h-11 w-11 place-items-center rounded-full border border-gold/40 bg-gold/10 text-gold shadow-gold md:absolute md:left-0 md:top-1">
                  <ShieldCheck className="h-5 w-5" />
                </span>
                <div className="border-t border-gold/30 bg-white/[0.045] p-6 shadow-cinematic backdrop-blur-sm md:p-8">
                  <p className="text-xs font-bold uppercase tracking-[0.24em] text-gold">
                    Mission
                  </p>
                  <p className="mt-4 text-base leading-8 text-parchment/[0.76]">
                    To bring explorers as close as possible to wildlife through
                    safe, ethical, and immersive experiences that create lasting
                    memories and a deeper connection with nature.
                  </p>
                </div>
              </AnimatedReveal>

              <AnimatedReveal delay={0.05} className="relative md:pl-16">
                <span className="mb-5 grid h-11 w-11 place-items-center rounded-full border border-gold/40 bg-gold/10 text-gold shadow-gold md:absolute md:left-0 md:top-1">
                  <Compass className="h-5 w-5" />
                </span>
                <div className="border-t border-gold/30 bg-white/[0.045] p-6 shadow-cinematic backdrop-blur-sm md:p-8">
                  <p className="text-xs font-bold uppercase tracking-[0.24em] text-gold">
                    Vision
                  </p>
                  <p className="mt-4 text-base leading-8 text-parchment/[0.76]">
                    To connect explorers with wildlife across every major
                    ecosystem on Earth, from deserts and rainforests to oceans
                    and polar regions, inspiring a worldwide community of
                    conservation-minded adventurers.
                  </p>
                </div>
              </AnimatedReveal>

              <AnimatedReveal delay={0.1} className="relative md:pl-16">
                <span className="mb-5 grid h-11 w-11 place-items-center rounded-full border border-gold/40 bg-gold/10 text-gold shadow-gold md:absolute md:left-0 md:top-1">
                  <Mountain className="h-5 w-5" />
                </span>
                <div className="border-t border-gold/30 bg-white/[0.045] p-6 shadow-cinematic backdrop-blur-sm md:p-8">
                  <p className="text-xs font-bold uppercase tracking-[0.24em] text-gold">
                    Values
                  </p>
                  <p className="mt-4 text-base leading-8 text-parchment/[0.76]">
                    We believe that people protect what they love. By creating
                    meaningful encounters with wildlife, we foster a culture of
                    respect, appreciation, education and passion for animals,
                    helping drive conservation efforts that safeguard nature for
                    future generations.
                  </p>
                </div>
              </AnimatedReveal>
            </div>
          </div>
        </section>
      </main>
      <Footer />
      <WhatsAppButton />
    </>
  );
}
