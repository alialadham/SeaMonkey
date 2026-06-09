"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { ArrowDown, Compass, Play } from "lucide-react";
import Link from "next/link";
import { assets } from "@/lib/site-data";

export function HeroSection() {
  const { scrollY } = useScroll();
  const y = useTransform(scrollY, [0, 700], [0, 170]);
  const opacity = useTransform(scrollY, [0, 620], [1, 0.35]);

  return (
    <section
      id="home"
      className="relative min-h-[100svh] overflow-hidden bg-ink text-white"
    >
      <motion.div className="absolute inset-0 scale-[1.06]" style={{ y }}>
        {/* Replace hero video here. */}
        <video
          className="h-full w-full object-cover"
          autoPlay
          muted
          loop
          playsInline
          preload="metadata"
        >
          <source src={assets.heroVideo} type="video/mp4" />
        </video>
      </motion.div>

      <div className="absolute inset-0 bg-[radial-gradient(circle_at_22%_35%,rgba(200,155,74,0.24),transparent_28%),linear-gradient(90deg,rgba(3,25,35,0.88),rgba(3,25,35,0.35)_55%,rgba(5,5,5,0.78)),linear-gradient(0deg,rgba(5,5,5,0.98),transparent_30%)]" />
      <div className="absolute inset-x-0 bottom-0 h-40 bg-gradient-to-t from-navy to-transparent" />

      <motion.div
        style={{ opacity }}
        className="relative z-10 mx-auto flex min-h-[100svh] max-w-7xl flex-col justify-end px-5 pb-10 pt-28 md:px-8 md:pb-16"
      >
        <div className="max-w-5xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            className="mb-7 inline-flex items-center gap-3 rounded-full border border-white/15 bg-white/10 px-4 py-2 text-xs font-semibold uppercase tracking-[0.26em] text-sand backdrop-blur-md"
          >
            <Compass className="h-4 w-4 text-gold" />
            Jordan&apos;s first wildlife expedition agency
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 26 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.85, delay: 0.1 }}
            className="max-w-4xl font-display text-6xl font-semibold leading-[0.92] tracking-normal text-white md:text-8xl lg:text-9xl"
          >
            Explore Untamed Wilderness
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.22 }}
            className="mt-7 max-w-2xl text-lg leading-8 text-white/[0.78] md:text-2xl md:leading-10"
          >
            Wildlife expeditions across desert, mountains, wetlands, and the
            Red Sea.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.34 }}
            className="mt-9 flex flex-col gap-3 sm:flex-row"
          >
            <Link
              href="/adventures"
              className="btn-gold"
            >
              Book Your Trip
            </Link>
            <Link href="/adventures" className="btn-ghost">
              <Play className="h-4 w-4" />
              View Expeditions
            </Link>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 18 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.65, duration: 0.7 }}
          className="mt-16 grid gap-3 md:grid-cols-[1fr_1fr_auto]"
        >
          {[
            { label: "01 Azraq wetlands", href: "/journal" },
            { label: "02 Dana wilderness", href: "/journal" },
            { label: "03 Aqaba reefs", href: "/journal" },
          ].map((route) => (
            <Link
              key={route.label}
              href={route.href}
              className="rounded-[8px] border border-white/[0.12] bg-white/[0.08] px-4 py-4 backdrop-blur-md transition hover:-translate-y-0.5 hover:border-gold/50"
            >
              <p className="text-xs uppercase tracking-[0.24em] text-gold">
                Blog
              </p>
              <p className="mt-1 text-sm font-semibold text-white">
                {route.label}
              </p>
            </Link>
          ))}
          <a
            href="#about"
            aria-label="Scroll to about"
            className="hidden h-full min-h-20 w-20 place-items-center rounded-[8px] border border-white/[0.12] bg-white/[0.08] text-gold backdrop-blur-md transition hover:bg-white/[0.14] md:grid"
          >
            <ArrowDown className="h-5 w-5" />
          </a>
        </motion.div>
      </motion.div>
    </section>
  );
}
