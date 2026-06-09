import Image from "next/image";
import Link from "next/link";
import { Camera, Compass, Mountain, Waves } from "lucide-react";
import { AnimatedReveal } from "@/components/AnimatedReveal";
import { SectionHeading } from "@/components/SectionHeading";
import { assets } from "@/lib/site-data";

const stats = [
  { label: "First wildlife expedition agency in Jordan", icon: Compass },
  { label: "Desert, sea, wetlands, mountains", icon: Mountain },
  { label: "Private and public trips", icon: Waves },
  { label: "Photography-friendly experiences", icon: Camera },
];

export function AboutSection() {
  return (
    <section id="about" className="section-shell relative bg-navy">
      <div className="absolute inset-0 bg-topographic-lines opacity-50" />
      <div className="relative mx-auto grid max-w-7xl gap-14 px-5 md:px-8 lg:grid-cols-[0.95fr_1.05fr] lg:items-center">
        <AnimatedReveal>
          <SectionHeading
            eyebrow="About SeaMonkey Wildlife"
            title="A wilder way to experience Jordan."
            copy="SeaMonkey Wildlife is Jordan's premier wildlife experience, built to showcase the country's rare animals, marine life, mountains, wetlands, and wild landscapes. From Arabian oryx in Azraq to turtles in the Red Sea, each trip is designed for expeditions, photography, conservation, and unforgettable memories."
          />
          <div className="mt-9 grid gap-3 sm:grid-cols-2">
            {stats.map(({ label, icon: Icon }) => (
              <div
                key={label}
                className="rounded-[8px] border border-white/10 bg-white/[0.06] p-4 shadow-lg shadow-black/10"
              >
                <Icon className="mb-4 h-5 w-5 text-gold" />
                <p className="text-sm font-semibold leading-6 text-parchment">
                  {label}
                </p>
              </div>
            ))}
          </div>
          <Link href="/about" className="btn-gold mt-8">
            Learn More About Us
          </Link>
        </AnimatedReveal>

        <AnimatedReveal delay={0.12} className="grid gap-5">
          {/* Replace About page hero video here. */}
          <div className="relative aspect-video overflow-hidden rounded-[8px] border border-gold/25 bg-ink shadow-cinematic">
            <video
              className="h-full w-full object-cover"
              autoPlay
              muted
              loop
              playsInline
              poster={assets.heroPoster}
              preload="metadata"
            >
              <source src={assets.aboutHeroVideo} type="video/mp4" />
            </video>
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_45%,rgba(200,155,74,0.18),transparent_30%),linear-gradient(0deg,rgba(5,5,5,0.62),rgba(3,25,35,0.12))]" />
          </div>

          <div className="grid gap-5 sm:grid-cols-2">
            <div className="relative h-72 overflow-hidden rounded-[8px] border border-white/10 shadow-cinematic sm:h-96">
              <Image
                src={assets.aboutPrimary}
                alt="Water buffalo in Jordan"
                fill
                sizes="(max-width: 768px) 80vw, 560px"
                className="object-cover contrast-110 saturate-125"
              />
            </div>
            <div className="grid gap-5">
              <div className="relative h-44 overflow-hidden rounded-[8px] border border-white/10 shadow-cinematic">
                <Image
                  src={assets.aboutSecondary}
                  alt="SeaMonkey Wildlife field expedition"
                  fill
                  sizes="(max-width: 768px) 50vw, 360px"
                  className="object-cover contrast-110 saturate-125"
                />
              </div>
              <div className="relative h-44 overflow-hidden rounded-[8px] border border-white/10 shadow-cinematic">
                <Image
                  src={assets.aboutTertiary}
                  alt="Red Sea underwater wildlife"
                  fill
                  sizes="(max-width: 768px) 60vw, 420px"
                  className="object-cover contrast-110 saturate-125"
                />
              </div>
            </div>
          </div>
          <div className="rounded-[8px] border border-gold/30 bg-ink/[0.72] p-5 shadow-gold backdrop-blur-md">
            <p className="text-4xl font-semibold text-gold">4</p>
            <p className="mt-1 text-xs uppercase tracking-[0.2em] text-parchment/80">
              ecosystems in one country
            </p>
          </div>
        </AnimatedReveal>
      </div>
    </section>
  );
}
