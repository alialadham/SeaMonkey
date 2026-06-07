import Image from "next/image";
import Link from "next/link";
import { Instagram, Mail, MessageCircle } from "lucide-react";
import { assets, contact, whatsappBookingLink } from "@/lib/site-data";

const links = [
  { label: "Adventures", href: "/adventures" },
  { label: "Gallery", href: "/gallery" },
  { label: "Journal", href: "/journal" },
  { label: "Give Us a Review", href: "/review" },
  { label: "FAQ", href: "/faq" },
  { label: "Contact", href: whatsappBookingLink(), external: true },
];

export function Footer() {
  return (
    <footer id="contact" className="bg-ink text-white">
      <div className="mx-auto grid max-w-7xl gap-10 border-t border-white/10 px-5 py-12 md:grid-cols-[1.2fr_0.8fr_1fr] md:px-8">
        <div>
          <Link href="/" className="flex items-center gap-3">
            {/* Replace logo source in lib/site-data.ts if the official logo file changes. */}
            <span className="grid h-12 w-12 place-items-center rounded-full border border-white/15 bg-white/[0.08]">
              <Image
                src={assets.logo}
                alt="SeaMonkey Wildlife"
                width={90}
                height={110}
                className="h-10 w-auto"
              />
            </span>
            <span>
              <span className="block text-sm font-semibold uppercase tracking-[0.24em]">
                SeaMonkey
              </span>
              <span className="text-xs uppercase tracking-[0.28em] text-sand">
                Wildlife
              </span>
            </span>
          </Link>
          <p className="mt-5 max-w-sm text-sm leading-7 text-white/60">
            Premium eco-adventure across Jordan&apos;s desert reserves, wetlands,
            mountains, and Red Sea wildlife routes.
          </p>
        </div>

        <div>
          <p className="text-xs font-semibold uppercase tracking-[0.24em] text-gold">
            Explore
          </p>
          <div className="mt-5 grid gap-3">
            {links.map((link) => (
              link.external ? (
                <a
                  key={link.href}
                  href={link.href}
                  target="_blank"
                  rel="noreferrer"
                  className="text-sm text-white/[0.66] transition hover:text-gold"
                >
                  {link.label}
                </a>
              ) : (
                <Link
                  key={link.href}
                  href={link.href}
                  className="text-sm text-white/[0.66] transition hover:text-gold"
                >
                  {link.label}
                </Link>
              )
            ))}
          </div>
        </div>

        <div>
          <p className="text-xs font-semibold uppercase tracking-[0.24em] text-gold">
            Connect
          </p>
          <div className="mt-5 grid gap-3">
            <a
              href={whatsappBookingLink()}
              target="_blank"
              rel="noreferrer"
              className="footer-link"
            >
              <MessageCircle className="h-4 w-4" />
              WhatsApp
            </a>
            <a href={`mailto:${contact.email}`} className="footer-link">
              <Mail className="h-4 w-4" />
              Email
            </a>
            {/* Replace Instagram link/content with official SeaMonkey Wildlife Instagram. */}
            <a
              href={contact.instagramPlaceholder}
              target="_blank"
              rel="noreferrer"
              className="footer-link"
            >
              <Instagram className="h-4 w-4" />
              Instagram
            </a>
          </div>
        </div>
      </div>
      <div className="border-t border-white/10 px-5 py-5 text-center text-xs text-white/[0.42]">
        Copyright © 2026 SeaMonkey Wildlife
      </div>
    </footer>
  );
}
