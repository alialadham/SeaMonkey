"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { Menu, X } from "lucide-react";
import { motion } from "framer-motion";
import { assets, whatsappBookingLink } from "@/lib/site-data";

const navLinks = [
  { label: "Adventures", href: "/adventures" },
  { label: "Gallery", href: "/gallery" },
  { label: "Journal", href: "/journal" },
  { label: "FAQ", href: "/faq" },
  { label: "Contact", href: whatsappBookingLink(), external: true },
];

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 28);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-navy/[0.86] shadow-2xl shadow-black/25 backdrop-blur-xl"
          : "bg-transparent"
      }`}
    >
      <nav className="mx-auto flex h-20 max-w-7xl items-center justify-between px-5 md:px-8">
        <Link href="/" className="flex items-center gap-3">
          {/* Replace logo source in lib/site-data.ts when the final SeaMonkey Wildlife logo is approved. */}
          <span className="relative grid h-12 w-12 place-items-center rounded-full border border-white/15 bg-white/[0.08]">
            <Image
              src={assets.logo}
              alt="SeaMonkey Wildlife"
              width={90}
              height={110}
              className="h-10 w-auto"
              priority
            />
          </span>
        </Link>

        <div className="hidden items-center gap-8 md:flex">
          {navLinks.map((link) => (
            link.external ? (
              <a
                key={link.href}
                href={link.href}
                target="_blank"
                rel="noreferrer"
                className="text-sm font-medium text-white/[0.78] transition hover:text-gold"
              >
                {link.label}
              </a>
            ) : (
              <Link
                key={link.href}
                href={link.href}
                className="text-sm font-medium text-white/[0.78] transition hover:text-gold"
              >
                {link.label}
              </Link>
            )
          ))}
        </div>

        <div className="hidden md:block">
          <a
            href={whatsappBookingLink()}
            target="_blank"
            rel="noreferrer"
            className="btn-gold"
          >
            Book Your Trip
          </a>
        </div>

        <button
          type="button"
          aria-label="Open menu"
          onClick={() => setOpen((value) => !value)}
          className="grid h-11 w-11 place-items-center rounded-full border border-white/15 bg-white/10 text-white md:hidden"
        >
          {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
        </button>
      </nav>

      {open ? (
        <motion.div
          initial={{ opacity: 0, y: -8 }}
          animate={{ opacity: 1, y: 0 }}
          className="mx-4 mb-4 rounded-[8px] border border-white/[0.12] bg-navy/[0.96] p-4 shadow-cinematic backdrop-blur-xl md:hidden"
        >
          <div className="grid gap-2">
            {navLinks.map((link) => (
              link.external ? (
                <a
                  key={link.href}
                  href={link.href}
                  target="_blank"
                  rel="noreferrer"
                  onClick={() => setOpen(false)}
                  className="rounded-[8px] px-3 py-3 text-sm font-medium text-white/80 hover:bg-white/[0.08] hover:text-gold"
                >
                  {link.label}
                </a>
              ) : (
                <Link
                  key={link.href}
                  href={link.href}
                  onClick={() => setOpen(false)}
                  className="rounded-[8px] px-3 py-3 text-sm font-medium text-white/80 hover:bg-white/[0.08] hover:text-gold"
                >
                  {link.label}
                </Link>
              )
            ))}
            <a
              href={whatsappBookingLink()}
              target="_blank"
              rel="noreferrer"
              onClick={() => setOpen(false)}
              className="mt-2 rounded-[8px] bg-gold px-4 py-3 text-center text-sm font-bold text-ink"
            >
              Book Your Trip
            </a>
          </div>
        </motion.div>
      ) : null}
    </header>
  );
}
