"use client";

import Image from "next/image";
import Link from "next/link";
import {
  Bird,
  Clock,
  MapPin,
  Mountain,
  PawPrint,
  Tent,
  Users,
  Waves,
} from "lucide-react";
import { motion } from "framer-motion";
import type { Expedition } from "@/lib/expeditions";

const accentIcons = {
  safari: PawPrint,
  sea: Waves,
  mountain: Mountain,
  camp: Tent,
  bird: Bird,
};

const expeditionIconOverrides = {
  "water-buffalo-birdwatching-trek": PawPrint,
};

const adventureLabels: Record<string, string> = {
  "arabian-oryx-photography-safari": "Arabian Oryx",
  "scuba-dive-snorkel-cruise-red-sea": "Scuba Diving",
  "hike-in-the-wild": "Hiking",
  "night-dive": "Night Dive",
  "camp-in-the-wild": "Camp in the Wild",
  "water-buffalo-birdwatching-trek": "Water Buffalo",
};

type ExpeditionCardProps = {
  expedition: Expedition;
  index: number;
};

export function ExpeditionCard({ expedition, index }: ExpeditionCardProps) {
  const AccentIcon =
    expeditionIconOverrides[
      expedition.slug as keyof typeof expeditionIconOverrides
    ] ?? accentIcons[expedition.accent];
  const adventureLabel = adventureLabels[expedition.slug] ?? expedition.title;

  return (
    <motion.article
      initial={{ opacity: 0, y: 32 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-80px" }}
      transition={{ duration: 0.65, delay: index * 0.06 }}
      whileHover={{ y: -8 }}
      className="group overflow-hidden rounded-[8px] border border-white/10 bg-white/[0.055] shadow-2xl shadow-black/15"
    >
      <Link href={`/expeditions/${expedition.slug}`} className="block">
        <div className="relative h-72 overflow-hidden">
          <Image
            src={expedition.image}
            alt={expedition.title}
            fill
            sizes="(max-width: 768px) 100vw, 33vw"
            className="object-cover contrast-110 saturate-125 transition duration-700 group-hover:scale-[1.08]"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-ink via-ink/[0.18] to-transparent" />
          <div className="absolute inset-x-4 bottom-4 flex translate-y-5 items-center gap-3 rounded-[8px] border border-white/15 bg-ink/[0.72] px-4 py-3 opacity-0 shadow-cinematic backdrop-blur-md transition duration-500 group-hover:translate-y-0 group-hover:opacity-100">
            <AccentIcon className="h-5 w-5" />
            <span className="text-sm font-semibold uppercase tracking-[0.2em] text-white">
              {adventureLabel}
            </span>
          </div>
        </div>
        <div className="p-5">
          <h3 className="min-h-[64px] font-display text-2xl font-semibold leading-tight text-parchment">
            {expedition.title}
          </h3>
          <div className="mt-5 grid gap-3 text-sm text-parchment/[0.74]">
            <p className="flex items-center gap-3">
              <MapPin className="h-4 w-4 text-gold" />
              {expedition.location}
            </p>
            <p className="flex items-center gap-3">
              <Clock className="h-4 w-4 text-gold" />
              {expedition.duration}
            </p>
            <p className="flex items-center gap-3">
              <Users className="h-4 w-4 text-gold" />
              {expedition.groupSize}
            </p>
            <p className="flex items-center gap-3">
              <AccentIcon className="h-4 w-4 text-gold" />
              {expedition.type}
            </p>
          </div>
          <span className="mt-6 inline-flex w-full items-center justify-center rounded-[8px] bg-gold px-5 py-3 text-sm font-bold text-ink shadow-gold transition group-hover:bg-sand">
            View itinerary
          </span>
        </div>
      </Link>
    </motion.article>
  );
}
