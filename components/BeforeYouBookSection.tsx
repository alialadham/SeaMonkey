import Link from "next/link";
import { Binoculars } from "lucide-react";
import {
  CampIcon,
  DiveGogglesIcon,
  HikingGearIcon,
  SafariIcon,
  SnorkelMaskIcon,
} from "@/components/ActivityIcons";
import { AnimatedReveal } from "@/components/AnimatedReveal";
import { SectionHeading } from "@/components/SectionHeading";
import { expeditions } from "@/lib/expeditions";
import { whatsappBookingLink } from "@/lib/site-data";

const tripTypes = [
  {
    slug: "arabian-oryx-photography-safari",
    label: "Arabian Oryx",
    description: "A vehicle safari shaped around Jordan's national animal.",
    icon: SafariIcon,
  },
  {
    slug: "hike-in-the-wild",
    label: "Hiking",
    description: "Guided wilderness trails through Jordan's mountain habitat.",
    icon: HikingGearIcon,
  },
  {
    slug: "scuba-dive-snorkel-cruise-red-sea",
    label: "Scuba Diving",
    description: "Reef, turtle, and marine-life trips from Aqaba.",
    icon: SnorkelMaskIcon,
  },
  {
    slug: "night-dive",
    label: "Night Dive",
    description: "After-dark Red Sea diving for nocturnal marine encounters.",
    icon: DiveGogglesIcon,
  },
  {
    slug: "camp-in-the-wild",
    label: "Camp in the Wild",
    description: "An overnight camp with wild trails and field exploration.",
    icon: CampIcon,
  },
  {
    slug: "water-buffalo-birdwatching-trek",
    label: "Water Buffalo / Bird Watching",
    description: "A wetland trek for buffalo, birds, and rare freshwater life.",
    icon: HikingGearIcon,
  },
];

export function BeforeYouBookSection() {
  return (
    <section id="before-you-book" className="section-shell bg-navy">
      <div className="mx-auto max-w-7xl px-5 md:px-8">
        <SectionHeading
          eyebrow="Before you book"
          title="Pick the trip type that fits your field day."
          copy="SeaMonkey Wildlife offers six guided expedition styles across desert, mountain, wetland, and Red Sea habitats. Choose your trip type first, then open the expedition-specific WhatsApp booking message."
          align="center"
        />

        <div className="mt-12 grid gap-4 md:grid-cols-2 xl:grid-cols-3">
          {tripTypes.map(({ slug, label, description, icon: Icon }, index) => {
            const expedition = expeditions.find((item) => item.slug === slug);

            if (!expedition) {
              return null;
            }

            return (
              <AnimatedReveal
                key={slug}
                delay={index * 0.05}
                className="rounded-[8px] border border-white/10 bg-white/[0.06] p-5 shadow-cinematic"
              >
                <div className="flex items-start gap-4">
                  <div className="grid h-20 w-20 shrink-0 place-items-center rounded-[8px] bg-gold text-ink shadow-gold">
                    <Icon className="h-[72px] w-[72px] scale-110" />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-white">
                      {label}
                    </h3>
                    <p className="mt-2 text-sm leading-7 text-parchment/[0.68]">
                      {description}
                    </p>
                  </div>
                </div>
                <div className="mt-6 flex flex-col gap-3 sm:flex-row">
                  <a
                    href={whatsappBookingLink(expedition.title)}
                    target="_blank"
                    rel="noreferrer"
                    className="btn-gold"
                  >
                    Book this expedition
                  </a>
                  <Link
                    href={`/expeditions/${slug}`}
                    className="btn-ghost"
                  >
                    View itinerary
                  </Link>
                </div>
              </AnimatedReveal>
            );
          })}
        </div>

        <div className="mt-8 flex justify-center gap-2 text-sm text-parchment/[0.62]">
          <Binoculars className="mt-1 h-4 w-4 text-gold" />
          <p>Ask about private dates, public groups, and guide availability.</p>
        </div>
      </div>
    </section>
  );
}
