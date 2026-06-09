import Link from "next/link";
import { AnimatedReveal } from "@/components/AnimatedReveal";

export function HomeBookingCta() {
  return (
    <section className="section-shell bg-ocean">
      <div className="mx-auto max-w-5xl px-5 text-center md:px-8">
        <AnimatedReveal className="rounded-[8px] border border-white/10 bg-white/[0.06] p-6 shadow-cinematic md:p-8">
          <p className="text-xs font-semibold uppercase tracking-[0.28em] text-gold">
            Plan your trip
          </p>
          <h2 className="mt-4 font-display text-4xl font-semibold text-white md:text-6xl">
            Questions before booking?
          </h2>
          <p className="mx-auto mt-5 max-w-2xl leading-8 text-parchment/[0.72]">
            Check the FAQ or choose one of the expedition types above to open a
            route-specific WhatsApp booking message.
          </p>
          <div className="mt-8 flex flex-col justify-center gap-3 sm:flex-row">
            <Link href="/faq" className="btn-ghost">
              FAQ
            </Link>
            <Link
              href="/adventures"
              className="btn-gold"
            >
              Book Your Trip
            </Link>
          </div>
        </AnimatedReveal>
      </div>
    </section>
  );
}
