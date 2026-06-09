"use client";

import { useMemo, useState } from "react";
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
import {
  filterIcons,
  getExpeditionActivityIcon,
  type ActivityIcon,
} from "@/components/ActivityIcons";
import type { Expedition, ExpeditionCategory } from "@/lib/expeditions";
import { whatsappBookingLink } from "@/lib/site-data";

const filters = [
  {
    label: "All",
    categories: null,
    icon: filterIcons.all,
  },
  {
    label: "Scuba Diving / Snorkel",
    categories: ["Scuba Diving", "Snorkel and Mask"],
    icon: filterIcons.diving,
  },
  {
    label: "Hiking",
    categories: ["Hiking"],
    icon: filterIcons.hiking,
  },
  {
    label: "Camping and Hiking",
    categories: ["Camping and Hiking"],
    icon: filterIcons.camp,
  },
  {
    label: "Safari / Wildlife",
    categories: ["Safari"],
    icon: filterIcons.safari,
  },
] as const satisfies ReadonlyArray<{
  label: string;
  categories: readonly ExpeditionCategory[] | null;
  icon: ActivityIcon;
}>;

type ExpeditionFilter = (typeof filters)[number]["label"];

type ExpeditionsGridProps = {
  expeditions: Expedition[];
};

export function ExpeditionsGrid({ expeditions }: ExpeditionsGridProps) {
  const [activeFilter, setActiveFilter] = useState<ExpeditionFilter>("All");

  const filteredExpeditions = useMemo(() => {
    const filter = filters.find((item) => item.label === activeFilter);

    if (!filter?.categories) {
      return expeditions;
    }

    return expeditions.filter((expedition) =>
      filter.categories.some((category) =>
        expedition.categories.includes(category),
      ),
    );
  }, [activeFilter, expeditions]);

  return (
    <>
      <div className="mt-10 flex flex-wrap justify-center gap-2">
        {filters.map((filter) => {
          const active = filter.label === activeFilter;
          const FilterIcon = filter.icon;

          return (
            <button
              key={filter.label}
              type="button"
              aria-label={`Filter by ${filter.label}`}
              title={filter.label}
              onClick={() => setActiveFilter(filter.label)}
              className={`grid h-11 w-11 place-items-center rounded-[8px] border transition ${
                active
                  ? "border-gold bg-gold text-ink shadow-gold"
                  : "border-white/15 bg-white/[0.06] text-parchment/70 hover:border-gold/50 hover:text-gold"
              }`}
            >
              <FilterIcon className="h-5 w-5" />
            </button>
          );
        })}
      </div>

      <div className="mt-12 grid gap-6 md:grid-cols-2 xl:grid-cols-3">
        {filteredExpeditions.map((expedition) => {
          const ActivityIcon = getExpeditionActivityIcon(expedition);

          return (
            <article
              key={expedition.slug}
              className="group overflow-hidden rounded-[8px] border border-white/10 bg-white/[0.06] shadow-cinematic"
            >
              <Link href={`/expeditions/${expedition.slug}`} className="block">
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
                    <p className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.2em] text-gold">
                      <ActivityIcon className="h-4 w-4" />
                      {expedition.tripType}
                    </p>
                    <h2 className="mt-2 font-display text-3xl font-semibold leading-tight text-white">
                      {expedition.title}
                    </h2>
                  </div>
                </div>
              </Link>

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
                    {expedition.tripType}
                  </p>
                </div>

                <div className="mt-6 flex flex-col gap-3 sm:flex-row">
                  <Link
                    href={`/expeditions/${expedition.slug}`}
                    className="btn-ghost"
                  >
                    Full itinerary <ArrowRight className="h-4 w-4" />
                  </Link>
                  <a
                    href={whatsappBookingLink(expedition.title)}
                    target="_blank"
                    rel="noreferrer"
                    className="btn-gold"
                  >
                    <MessageCircle className="h-4 w-4" />
                    Book
                  </a>
                </div>
              </div>
            </article>
          );
        })}
      </div>
    </>
  );
}
