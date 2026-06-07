import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import {
  ArrowRight,
  Clock,
  MapPin,
  MessageCircle,
  Route,
  Users,
} from "lucide-react";
import { AnimatedReveal } from "@/components/AnimatedReveal";
import { Footer } from "@/components/Footer";
import { Navbar } from "@/components/Navbar";
import { SectionHeading } from "@/components/SectionHeading";
import { WhatsAppButton } from "@/components/WhatsAppButton";
import { expeditions } from "@/lib/expeditions";
import { whatsappBookingLink } from "@/lib/site-data";

export const metadata: Metadata = {
  title: "Adventures | SeaMonkey Wildlife",
  description:
    "All SeaMonkey Wildlife adventures across Jordan's desert, mountain, wetland, and Red Sea habitats.",
};

export default function AdventuresPage() {
  return (
    <>
      <Navbar />
      <main className="bg-ink text-parchment">
        <section className="relative overflow-hidden pt-32">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_18%_18%,rgba(200,155,74,0.18),transparent_28%),linear-gradient(135deg,rgba(3,25,35,1),rgba(5,5,5,1)_68%)]" />
          <div className="relative mx-auto max-w-7xl px-5 pb-20 md:px-8">
            <AnimatedReveal>
              <SectionHeading
                eyebrow="All adventures"
                title="Every SeaMonkey Wildlife route."
                copy="Choose from desert safaris, wild hikes, overnight camps, wetland treks, Red Sea day trips, and after-dark dives. Each route keeps booking WhatsApp-first."
                align="center"
              />
            </AnimatedReveal>

            <div className="mt-12 grid gap-6 md:grid-cols-2 xl:grid-cols-3">
              {expeditions.map((expedition, index) => (
                <AnimatedReveal
                  key={expedition.slug}
                  delay={index * 0.05}
                  className="group overflow-hidden rounded-[8px] border border-white/10 bg-white/[0.06] shadow-cinematic"
                >
                  <div className="relative h-72 overflow-hidden">
                    <Image
                      src={expedition.image}
                      alt={expedition.title}
                      fill
                      sizes="(max-width: 768px) 100vw, 33vw"
                      className="object-cover contrast-110 saturate-125 transition duration-700 group-hover:scale-[1.06]"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-ink via-ink/[0.18] to-transparent" />
                    <div className="absolute bottom-5 left-5 right-5">
                      <p className="text-xs font-semibold uppercase tracking-[0.24em] text-gold">
                        {expedition.type}
                      </p>
                      <h2 className="mt-2 font-display text-3xl font-semibold leading-tight text-white">
                        {expedition.title}
                      </h2>
                    </div>
                  </div>

                  <div className="p-5">
                    <p className="text-sm leading-7 text-parchment/[0.72]">
                      {expedition.overview[0]}
                    </p>

                    <div className="mt-5 grid gap-3 text-sm text-parchment/[0.74]">
                      <p className="flex items-center gap-3">
                        <MapPin className="h-4 w-4 shrink-0 text-gold" />
                        {expedition.location}
                      </p>
                      <p className="flex items-center gap-3">
                        <Clock className="h-4 w-4 shrink-0 text-gold" />
                        {expedition.duration}
                      </p>
                      <p className="flex items-center gap-3">
                        <Users className="h-4 w-4 shrink-0 text-gold" />
                        {expedition.groupSize}
                      </p>
                      <p className="flex items-center gap-3">
                        <Route className="h-4 w-4 shrink-0 text-gold" />
                        {expedition.type}
                      </p>
                    </div>

                    <div className="mt-6 flex flex-col gap-3 sm:flex-row">
                      <a
                        href={whatsappBookingLink(expedition.title)}
                        target="_blank"
                        rel="noreferrer"
                        className="btn-gold"
                      >
                        <MessageCircle className="h-4 w-4" />
                        Book
                      </a>
                      <Link
                        href={`/expeditions/${expedition.slug}`}
                        className="btn-ghost"
                      >
                        Full itinerary <ArrowRight className="h-4 w-4" />
                      </Link>
                    </div>
                  </div>
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
