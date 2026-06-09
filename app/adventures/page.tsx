import type { Metadata } from "next";
import { AnimatedReveal } from "@/components/AnimatedReveal";
import { ExpeditionsGrid } from "@/components/ExpeditionsGrid";
import { Footer } from "@/components/Footer";
import { Navbar } from "@/components/Navbar";
import { SectionHeading } from "@/components/SectionHeading";
import { WhatsAppButton } from "@/components/WhatsAppButton";
import { expeditions } from "@/lib/expeditions";

export const metadata: Metadata = {
  title: "Expeditions | SeaMonkey Wildlife",
  description:
    "All SeaMonkey Wildlife expeditions across Jordan's desert, mountain, wetland, and Red Sea habitats.",
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
                eyebrow="All expeditions"
                title="Choose your expedition type."
                copy="Filter SeaMonkey Wildlife routes by scuba diving, snorkel and mask, hiking, camping and hiking, or safari. Choose a route before opening the expedition-specific WhatsApp booking flow."
                align="center"
              />
            </AnimatedReveal>

            <ExpeditionsGrid expeditions={expeditions} />
          </div>
        </section>
      </main>
      <Footer />
      <WhatsAppButton />
    </>
  );
}
