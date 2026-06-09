import Image from "next/image";
import Link from "next/link";
import { Mail, MessageCircle, Phone } from "lucide-react";
import { AnimatedReveal } from "@/components/AnimatedReveal";
import { SectionHeading } from "@/components/SectionHeading";
import { expeditions } from "@/lib/expeditions";
import { assets, contact } from "@/lib/site-data";

export function BookingContactSection() {
  return (
    <section id="contact" className="section-shell relative bg-ink">
      <div className="absolute inset-0">
        <Image
          src={assets.heroPoster}
          alt="SeaMonkey Wildlife expedition landscape"
          fill
          sizes="100vw"
          className="object-cover opacity-28 contrast-110 saturate-125"
        />
        <div className="absolute inset-0 bg-[linear-gradient(90deg,rgba(5,5,5,0.94),rgba(3,25,35,0.78)),linear-gradient(0deg,rgba(5,5,5,1),transparent_35%,rgba(5,5,5,0.95))]" />
      </div>

      <div className="relative mx-auto grid max-w-7xl gap-10 px-5 md:px-8 lg:grid-cols-[0.8fr_1.2fr] lg:items-start">
        <AnimatedReveal>
          <SectionHeading
            eyebrow="Contact and booking"
            title="Tell us what you want to see."
            copy="Solo traveler? Not a problem. Ask about upcoming public group trips, private expeditions, and custom wildlife routes."
          />
          <div className="mt-8 grid gap-3">
            <Link
              href="/#before-you-book"
              className="contact-link"
            >
              <MessageCircle className="h-5 w-5 text-gold" />
              Choose an expedition first
            </Link>
            <a href={`mailto:${contact.email}`} className="contact-link">
              <Mail className="h-5 w-5 text-gold" />
              {contact.email}
            </a>
            <a href={`tel:+${contact.phoneDisplay}`} className="contact-link">
              <Phone className="h-5 w-5 text-gold" />
              Call SeaMonkey Wildlife
            </a>
          </div>
        </AnimatedReveal>

        <AnimatedReveal delay={0.12}>
          <form className="rounded-[8px] border border-white/[0.12] bg-parchment p-5 text-ink shadow-cinematic md:p-7">
            <div className="grid gap-4 md:grid-cols-2">
              <label className="field-label">
                First name
                <input className="field-input" name="firstName" type="text" />
              </label>
              <label className="field-label">
                Last name
                <input className="field-input" name="lastName" type="text" />
              </label>
              <label className="field-label">
                Email
                <input className="field-input" name="email" type="email" />
              </label>
              <label className="field-label">
                Phone
                <input className="field-input" name="phone" type="tel" />
              </label>
              <label className="field-label md:col-span-2">
                Trip interested in
                <select className="field-input" name="trip" defaultValue="">
                  <option value="" disabled>
                    Choose an expedition
                  </option>
                  {expeditions.map((expedition) => (
                    <option key={expedition.title} value={expedition.title}>
                      {expedition.title}
                    </option>
                  ))}
                </select>
              </label>
              <label className="field-label md:col-span-2">
                Message
                <textarea
                  className="field-input min-h-36 resize-y"
                  name="message"
                />
              </label>
            </div>
            <div className="mt-6 flex flex-col gap-3 sm:flex-row">
              <Link
                href="/#before-you-book"
                className="btn-dark"
              >
                Choose Your Expedition
              </Link>
              <Link
                href="/adventures"
                className="btn-outline-dark"
              >
                View Expeditions
              </Link>
            </div>
          </form>
        </AnimatedReveal>
      </div>
    </section>
  );
}
