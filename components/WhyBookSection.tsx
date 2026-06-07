import {
  Binoculars,
  Camera,
  Handshake,
  Leaf,
  ShieldCheck,
  Users,
} from "lucide-react";
import { AnimatedReveal } from "@/components/AnimatedReveal";
import { SectionHeading } from "@/components/SectionHeading";

const reasons = [
  {
    title: "Jordan's first wildlife expedition agency",
    icon: ShieldCheck,
  },
  {
    title: "Led by nature lovers and experienced guides",
    icon: Binoculars,
  },
  {
    title: "Perfect for photographers and adventurers",
    icon: Camera,
  },
  {
    title: "Focused on responsible ecotourism and conservation",
    icon: Leaf,
  },
  {
    title: "Private and public group trips available",
    icon: Users,
  },
  {
    title: "Special arrangements with guides",
    icon: Handshake,
  },
];

export function WhyBookSection() {
  return (
    <section className="section-shell bg-parchment text-ink">
      <div className="mx-auto max-w-7xl px-5 md:px-8">
        <div className="grid gap-10 lg:grid-cols-[0.8fr_1.2fr] lg:items-end">
          <div className="[&_*]:text-ink">
            <SectionHeading
              eyebrow="Why book with us"
              title="Designed for rare encounters, not rushed tourism."
              copy="Every route is built around habitat, timing, light, safety, and a deep respect for the places that make Jordan wild."
            />
          </div>
          <div className="grid gap-4 sm:grid-cols-2">
            {reasons.map(({ title, icon: Icon }, index) => (
              <AnimatedReveal
                key={title}
                delay={index * 0.05}
                className="rounded-[8px] border border-ink/10 bg-white/[0.55] p-5 shadow-xl shadow-ink/5"
              >
                <Icon className="h-6 w-6 text-olive" />
                <p className="mt-5 text-lg font-semibold leading-7">{title}</p>
              </AnimatedReveal>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
