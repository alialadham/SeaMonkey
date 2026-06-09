"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import {
  ArrowRight,
  CalendarDays,
  Check,
  Clock,
  Mail,
  MapPin,
  Mountain,
  PawPrint,
  ShieldCheck,
  Users,
} from "lucide-react";
import { getExpeditionActivityIcon } from "@/components/ActivityIcons";
import { AnimatedReveal } from "@/components/AnimatedReveal";
import { Footer } from "@/components/Footer";
import { Navbar } from "@/components/Navbar";
import { WhatsAppButton } from "@/components/WhatsAppButton";
import {
  getRelatedExpeditions,
  type Expedition,
} from "@/lib/expeditions";
import { getJournalPostByExpeditionSlug } from "@/lib/journal";
import { contact, whatsappBookingLink } from "@/lib/site-data";

type ExpeditionDetailPageProps = {
  expedition: Expedition;
};

const factIcons = {
  location: MapPin,
  duration: Clock,
  group: Users,
  difficulty: Mountain,
  time: CalendarDays,
  wildlife: PawPrint,
};

export function ExpeditionDetailPage({ expedition }: ExpeditionDetailPageProps) {
  const related = getRelatedExpeditions(expedition.relatedSlugs);
  const journalPost = getJournalPostByExpeditionSlug(expedition.slug);
  const bookingLink = whatsappBookingLink(expedition.title);
  const TripIcon = getExpeditionActivityIcon(expedition);
  const facts = [
    { label: "Location", value: expedition.location, icon: factIcons.location },
    { label: "Duration", value: expedition.duration, icon: factIcons.duration },
    { label: "Group size", value: expedition.groupSize, icon: factIcons.group },
    { label: "Trip type", value: expedition.tripType, icon: TripIcon },
    {
      label: "Difficulty",
      value: expedition.difficulty ?? "Ask SeaMonkey Wildlife",
      icon: factIcons.difficulty,
    },
    {
      label: "Best time",
      value: expedition.bestTime ?? "Ask SeaMonkey Wildlife",
      icon: factIcons.time,
    },
    {
      label: "Wildlife",
      value: expedition.wildlifeSummary,
      icon: factIcons.wildlife,
    },
  ];

  return (
    <>
      <Navbar />
      <main className="bg-ink text-parchment">
        <section className="relative min-h-[92svh] overflow-hidden pt-24">
          <Image
            src={expedition.heroImage}
            alt={expedition.title}
            fill
            priority
            sizes="100vw"
            className="object-cover contrast-110 saturate-125"
          />
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_18%_24%,rgba(200,155,74,0.26),transparent_28%),linear-gradient(90deg,rgba(3,25,35,0.94),rgba(3,25,35,0.52)_54%,rgba(5,5,5,0.86)),linear-gradient(0deg,rgba(5,5,5,1),transparent_42%)]" />
          <div className="relative z-10 mx-auto flex min-h-[calc(92svh-6rem)] max-w-7xl flex-col justify-end px-5 pb-14 md:px-8">
            <AnimatedReveal>
              <Link
                href="/adventures"
                className="mb-7 inline-flex text-xs font-semibold uppercase tracking-[0.28em] text-gold transition hover:text-sand"
              >
                Expeditions
              </Link>
              <h1 className="max-w-5xl font-display text-5xl font-semibold leading-[0.95] text-white md:text-7xl lg:text-8xl">
                {expedition.title}
              </h1>
              <div className="mt-7 flex flex-wrap gap-3 text-sm text-white/[0.76]">
                <span className="detail-pill">
                  <MapPin className="h-4 w-4" />
                  {expedition.location}
                </span>
                <span className="detail-pill">
                  <TripIcon className="h-4 w-4" />
                  {expedition.tripType}
                </span>
                <span className="detail-pill">
                  <Clock className="h-4 w-4" />
                  {expedition.duration}
                </span>
                <span className="detail-pill">
                  <Users className="h-4 w-4" />
                  {expedition.groupSize}
                </span>
              </div>
              <div className="mt-9 flex flex-col gap-3 sm:flex-row">
                <a
                  href={bookingLink}
                  target="_blank"
                  rel="noreferrer"
                  className="btn-gold"
                >
                  Book this expedition
                </a>
                {journalPost ? (
                  <Link
                    href={`/journal/${journalPost.slug}`}
                    className="btn-ghost"
                  >
                    Read blog
                  </Link>
                ) : null}
              </div>
            </AnimatedReveal>
          </div>
        </section>

        <section className="section-shell bg-navy">
          <div className="mx-auto max-w-7xl px-5 md:px-8">
            <AnimatedReveal className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
              {facts.map(({ label, value, icon: Icon }) => (
                <div
                  key={label}
                  className="rounded-[8px] border border-white/10 bg-white/[0.06] p-5 shadow-xl shadow-black/10"
                >
                  <Icon className="h-5 w-5 text-gold" />
                  <p className="mt-5 text-xs font-semibold uppercase tracking-[0.24em] text-sand">
                    {label}
                  </p>
                  <p className="mt-2 text-lg font-semibold leading-7 text-white">
                    {value}
                  </p>
                </div>
              ))}
            </AnimatedReveal>
          </div>
        </section>

        <section className="section-shell bg-ink">
          <div className="mx-auto grid max-w-7xl gap-12 px-5 md:px-8 lg:grid-cols-[0.95fr_1.05fr] lg:items-start">
            <AnimatedReveal>
              <p className="text-xs font-semibold uppercase tracking-[0.32em] text-gold">
                About this route
              </p>
              <h2 className="mt-4 font-display text-4xl font-semibold leading-tight text-parchment md:text-6xl">
                Built around habitat, timing, and wild encounters.
              </h2>
              <div className="mt-7 space-y-5 text-base leading-8 text-parchment/[0.74]">
                {expedition.overview.map((paragraph) => (
                  <p key={paragraph}>{paragraph}</p>
                ))}
              </div>
              <div className="mt-8 grid gap-3">
                {expedition.routeHighlights.map((highlight) => (
                  <div
                    key={highlight}
                    className="flex gap-3 rounded-[8px] border border-white/10 bg-white/[0.055] p-4"
                  >
                    <ShieldCheck className="mt-1 h-5 w-5 shrink-0 text-gold" />
                    <p className="text-sm leading-7 text-parchment/[0.76]">
                      {highlight}
                    </p>
                  </div>
                ))}
              </div>
            </AnimatedReveal>

            <AnimatedReveal delay={0.1} className="grid gap-4 sm:grid-cols-2">
              {expedition.galleryImages.map((image, index) => (
                <div
                  key={image}
                  className={`relative overflow-hidden rounded-[8px] border border-white/10 shadow-cinematic ${
                    index === 0 ? "h-[420px] sm:col-span-2" : "h-72"
                  }`}
                >
                  {/* Replace or extend official route gallery images in lib/expeditions.ts. */}
                  <Image
                    src={image}
                    alt={`${expedition.title} route image ${index + 1}`}
                    fill
                    sizes="(max-width: 768px) 100vw, 50vw"
                    className="object-cover contrast-110 saturate-125"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-ink/[0.7] via-transparent to-transparent" />
                </div>
              ))}
            </AnimatedReveal>
          </div>
        </section>

        <section className="section-shell bg-ocean">
          <div className="mx-auto max-w-5xl px-5 md:px-8">
            <AnimatedReveal className="text-center">
              <p className="text-xs font-semibold uppercase tracking-[0.32em] text-gold">
                Full itinerary
              </p>
              <h2 className="mt-4 font-display text-4xl font-semibold text-parchment md:text-6xl">
                The field flow.
              </h2>
            </AnimatedReveal>
            <div className="relative mt-14">
              <div className="absolute bottom-0 left-5 top-0 w-px bg-gradient-to-b from-gold via-sand/30 to-transparent md:left-1/2" />
              <div className="grid gap-6">
                {expedition.itinerary.map((step, index) => (
                  <motion.div
                    key={`${step.time}-${step.title}`}
                    initial={{ opacity: 0, y: 28 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: "-80px" }}
                    transition={{ duration: 0.65, delay: index * 0.04 }}
                    className={`relative grid gap-4 md:grid-cols-2 ${
                      index % 2 === 0 ? "" : "md:[&>div]:col-start-2"
                    }`}
                  >
                    <div className="ml-12 rounded-[8px] border border-white/10 bg-white/[0.07] p-5 shadow-2xl shadow-black/15 md:ml-0">
                      <span className="absolute left-[13px] top-6 grid h-4 w-4 place-items-center rounded-full bg-gold ring-8 ring-ocean md:left-[calc(50%-8px)]" />
                      <p className="text-sm font-bold uppercase tracking-[0.2em] text-gold">
                        {step.time}
                      </p>
                      <h3 className="mt-3 font-display text-2xl font-semibold text-white">
                        {step.title}
                      </h3>
                      <p className="mt-3 leading-7 text-parchment/[0.72]">
                        {step.description}
                      </p>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          </div>
        </section>

        <section className="section-shell bg-ink">
          <div className="mx-auto max-w-7xl px-5 md:px-8">
            <AnimatedReveal>
              <p className="text-xs font-semibold uppercase tracking-[0.32em] text-gold">
                Wildlife you may see
              </p>
              <h2 className="mt-4 font-display text-4xl font-semibold text-parchment md:text-6xl">
                Species to watch for.
              </h2>
            </AnimatedReveal>
            <div className="mt-10 grid gap-5 md:grid-cols-3">
              {expedition.wildlife.map((animal, index) => (
                <AnimatedReveal
                  key={animal.name}
                  delay={index * 0.06}
                  className="overflow-hidden rounded-[8px] border border-white/10 bg-white/[0.055] shadow-cinematic"
                >
                  <div className="relative h-64">
                    {/* Replace placeholder wildlife images in lib/expeditions.ts when official species photos are available. */}
                    <Image
                      src={animal.image}
                      alt={animal.name}
                      fill
                      sizes="(max-width: 768px) 100vw, 33vw"
                      className="object-cover contrast-110 saturate-125"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-ink/[0.82] via-transparent to-transparent" />
                  </div>
                  <div className="p-5">
                    <h3 className="font-display text-2xl font-semibold text-white">
                      {animal.name}
                    </h3>
                    <p className="mt-3 text-sm leading-7 text-parchment/[0.7]">
                      {animal.note}
                    </p>
                  </div>
                </AnimatedReveal>
              ))}
            </div>
          </div>
        </section>

        <section className="section-shell bg-parchment text-ink">
          <div className="mx-auto grid max-w-7xl gap-10 px-5 md:px-8 lg:grid-cols-[0.85fr_1.15fr]">
            <div>
              <p className="text-xs font-semibold uppercase tracking-[0.32em] text-olive">
                What to bring
              </p>
              <h2 className="mt-4 font-display text-4xl font-semibold leading-tight md:text-6xl">
                Pack for the field.
              </h2>
            </div>
            <div className="grid gap-3 sm:grid-cols-2">
              {expedition.whatToBring.map((item) => (
                <div
                  key={item}
                  className="flex items-center gap-3 rounded-[8px] border border-ink/10 bg-white/[0.55] p-4 shadow-xl shadow-ink/5"
                >
                  <Check className="h-5 w-5 shrink-0 text-olive" />
                  <p className="font-semibold">{item}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="section-shell relative bg-navy">
          <div className="absolute inset-0 bg-topographic-lines opacity-50" />
          <div className="relative mx-auto grid max-w-7xl gap-10 px-5 md:px-8 lg:grid-cols-[0.8fr_1.2fr] lg:items-center">
            <AnimatedReveal>
              <p className="text-xs font-semibold uppercase tracking-[0.32em] text-gold">
                      Book this expedition
              </p>
              <h2 className="mt-4 font-display text-4xl font-semibold leading-tight text-parchment md:text-6xl">
                Ready to go wild?
              </h2>
              <p className="mt-5 max-w-xl leading-8 text-parchment/[0.72]">
                Send SeaMonkey Wildlife your preferred date, group size, and the route
                you want. The team can guide private trips and upcoming public
                group options.
              </p>
              <div className="mt-8 flex flex-col gap-3 sm:flex-row">
                <a
                  href={bookingLink}
                  target="_blank"
                  rel="noreferrer"
                  className="btn-gold"
                >
                  Book this expedition
                </a>
                <a href={`mailto:${contact.email}`} className="btn-ghost">
                  <Mail className="h-4 w-4" />
                  Email
                </a>
              </div>
            </AnimatedReveal>

            <AnimatedReveal delay={0.08}>
              <div className="grid gap-4 md:grid-cols-3">
                {related.map((relatedExpedition) => (
                  <Link
                    key={relatedExpedition.slug}
                    href={`/expeditions/${relatedExpedition.slug}`}
                    className="group overflow-hidden rounded-[8px] border border-white/10 bg-white/[0.06] shadow-cinematic"
                  >
                    <div className="relative h-44">
                      <Image
                        src={relatedExpedition.image}
                        alt={relatedExpedition.title}
                        fill
                        sizes="(max-width: 768px) 100vw, 25vw"
                        className="object-cover contrast-110 saturate-125 transition duration-500 group-hover:scale-[1.06]"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-ink via-transparent to-transparent" />
                    </div>
                    <div className="p-4">
                      <p className="text-xs font-semibold uppercase tracking-[0.2em] text-gold">
                        Related route
                      </p>
                      <h3 className="mt-2 text-lg font-semibold leading-snug text-white">
                        {relatedExpedition.title}
                      </h3>
                      <p className="mt-4 inline-flex items-center gap-2 text-sm font-bold text-sand">
                        View itinerary <ArrowRight className="h-4 w-4" />
                      </p>
                    </div>
                  </Link>
                ))}
              </div>
            </AnimatedReveal>
          </div>
        </section>
      </main>
      <Footer />
      <WhatsAppButton />
    </>
  );
}
