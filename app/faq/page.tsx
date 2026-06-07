import type { Metadata } from "next";
import { MessageCircle } from "lucide-react";
import { AnimatedReveal } from "@/components/AnimatedReveal";
import { FAQSection } from "@/components/FAQSection";
import { Footer } from "@/components/Footer";
import { Navbar } from "@/components/Navbar";
import { SectionHeading } from "@/components/SectionHeading";
import { WhatsAppButton } from "@/components/WhatsAppButton";
import { whatsappBookingLink } from "@/lib/site-data";

export const metadata: Metadata = {
  title: "FAQ | SeaMonkey Wildlife",
  description:
    "Common SeaMonkey Wildlife booking and field questions for Jordan wildlife expeditions.",
};

export default function FAQPage() {
  return (
    <>
      <Navbar />
      <main className="bg-ink text-parchment">
        <section className="relative overflow-hidden bg-ink pt-32">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_24%_22%,rgba(200,155,74,0.18),transparent_30%),linear-gradient(135deg,rgba(3,25,35,1),rgba(5,5,5,1)_70%)]" />
          <div className="relative mx-auto max-w-7xl px-5 pb-12 md:px-8">
            <AnimatedReveal>
              <SectionHeading
                eyebrow="FAQ"
                title="Know before you go."
                copy="Short answers for booking, field timing, wildlife sightings, clothing, and private trip questions."
                align="center"
              />
            </AnimatedReveal>
          </div>
        </section>

        <FAQSection showIntro={false} />

        <section className="section-shell bg-ocean">
          <div className="mx-auto max-w-4xl px-5 text-center md:px-8">
            <AnimatedReveal className="rounded-[8px] border border-white/10 bg-white/[0.06] p-6 shadow-cinematic md:p-8">
              <p className="text-xs font-semibold uppercase tracking-[0.28em] text-gold">
                Still deciding?
              </p>
              <h2 className="mt-4 font-display text-4xl font-semibold text-white md:text-6xl">
                Ask SeaMonkey Wildlife directly.
              </h2>
              <p className="mx-auto mt-5 max-w-2xl leading-8 text-parchment/[0.72]">
                Send your route, date, and group size on WhatsApp to confirm
                availability and guide arrangements.
              </p>
              <a
                href={whatsappBookingLink()}
                target="_blank"
                rel="noreferrer"
                className="btn-gold mt-8"
              >
                <MessageCircle className="h-4 w-4" />
                Book on WhatsApp
              </a>
            </AnimatedReveal>
          </div>
        </section>
      </main>
      <Footer />
      <WhatsAppButton />
    </>
  );
}
