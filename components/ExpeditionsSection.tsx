import Link from "next/link";
import { ExpeditionCard } from "@/components/ExpeditionCard";
import { SectionHeading } from "@/components/SectionHeading";
import { expeditions } from "@/lib/expeditions";

const featuredSlugs = [
  "scuba-dive-snorkel-cruise-red-sea",
  "arabian-oryx-photography-safari",
  "water-buffalo-birdwatching-trek",
];

export function ExpeditionsSection() {
  const featuredExpeditions = featuredSlugs
    .map((slug) => expeditions.find((expedition) => expedition.slug === slug))
    .filter((expedition): expedition is (typeof expeditions)[number] =>
      Boolean(expedition),
    );

  return (
    <section id="expeditions" className="section-shell bg-ink">
      <div className="mx-auto max-w-7xl px-5 md:px-8">
        <SectionHeading
          eyebrow="Featured expeditions"
          title="Choose your wild route."
          copy="Book immersive wildlife trips built around Jordan's most cinematic habitats, from protected desert safaris to after-dark reef dives."
        />
        <div className="mt-12 grid gap-5 md:grid-cols-2 xl:grid-cols-3">
          {featuredExpeditions.map((expedition, index) => (
            <ExpeditionCard
              key={expedition.title}
              expedition={expedition}
              index={index}
            />
          ))}
        </div>
        <div className="mt-8 rounded-[8px] border border-white/10 bg-white/[0.06] p-5 text-center shadow-cinematic">
          <p className="text-sm leading-7 text-parchment/[0.72]">
            Hiking, night diving, and wild camping are also available through
            SeaMonkey Wildlife.
          </p>
          <Link href="/adventures" className="btn-gold mt-4">
            See More Expeditions
          </Link>
        </div>
      </div>
    </section>
  );
}
