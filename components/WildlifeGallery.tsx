import Image from "next/image";
import Link from "next/link";
import { AnimatedReveal } from "@/components/AnimatedReveal";
import { SectionHeading } from "@/components/SectionHeading";
import { galleryItems } from "@/lib/site-data";

const sizeClass = {
  wide: "md:col-span-2 min-h-[270px]",
  tall: "md:row-span-2 min-h-[560px]",
  square: "min-h-[270px]",
};

const placeholderClass = {
  sand: "bg-[radial-gradient(circle_at_30%_25%,rgba(248,243,232,0.26),transparent_25%),linear-gradient(135deg,#6f552e,#d8b98c_48%,#062b3f)]",
  ocean:
    "bg-[radial-gradient(circle_at_25%_30%,rgba(248,243,232,0.18),transparent_24%),linear-gradient(135deg,#031923,#0d5971_58%,#c89b4a)]",
  olive:
    "bg-[radial-gradient(circle_at_75%_18%,rgba(216,185,140,0.24),transparent_26%),linear-gradient(135deg,#031923,#5e6f42_55%,#d8b98c)]",
};

type WildlifeGalleryProps = {
  preview?: boolean;
};

export function WildlifeGallery({ preview = false }: WildlifeGalleryProps) {
  const items = preview ? galleryItems.slice(0, 5) : galleryItems;

  return (
    <section id="gallery" className="section-shell relative bg-ocean">
      <div className="absolute inset-0 bg-[linear-gradient(120deg,rgba(248,243,232,0.07)_1px,transparent_1px),linear-gradient(30deg,rgba(248,243,232,0.045)_1px,transparent_1px)] bg-[size:56px_56px]" />
      <div className="relative mx-auto max-w-7xl px-5 md:px-8">
        <AnimatedReveal>
          <SectionHeading
            eyebrow="Wildlife gallery"
            title={preview ? "A field-level preview." : "Jordan, seen at field level."}
            copy={
              preview
                ? "A short look at the species, reefs, wetlands, and mountain routes behind SeaMonkey Wildlife expeditions."
                : "An image-led look at the species, reefs, wetlands, and mountain routes that shape every SeaMonkey Wildlife expedition."
            }
            align="center"
          />
        </AnimatedReveal>

        <div className="mt-12 grid auto-rows-[270px] gap-4 md:grid-cols-4">
          {items.map((item, index) => (
            <AnimatedReveal
              key={item.title}
              delay={index * 0.035}
              className={`group relative overflow-hidden rounded-[8px] border border-white/10 shadow-cinematic ${
                sizeClass[item.size]
              } ${item.image ? "bg-ink" : placeholderClass[item.placeholder ?? "ocean"]}`}
            >
              <Link href={item.href} className="absolute inset-0 block">
                {/* Replace placeholder gallery panels with official SeaMonkey Wildlife photos or licensed media. */}
                {item.image ? (
                  <Image
                    src={item.image}
                    alt={item.title}
                    fill
                    sizes="(max-width: 768px) 100vw, 35vw"
                    className="object-cover contrast-110 saturate-125 brightness-110 transition duration-700 group-hover:scale-[1.06]"
                  />
                ) : (
                  <div className="absolute inset-0 opacity-70 mix-blend-overlay bg-[linear-gradient(45deg,transparent_0_42%,rgba(255,255,255,0.22)_42%_43%,transparent_43%_100%)] bg-[size:34px_34px]" />
                )}
                <div className="absolute inset-0 bg-gradient-to-t from-ink/[0.78] via-ink/[0.12] to-transparent" />
                <div className="absolute bottom-0 left-0 right-0 p-5">
                  <p className="text-xs font-semibold uppercase tracking-[0.24em] text-gold">
                    {item.location}
                  </p>
                  <h3 className="mt-2 font-display text-2xl font-semibold text-white">
                    {item.title}
                  </h3>
                </div>
              </Link>
            </AnimatedReveal>
          ))}
        </div>
        {preview ? (
          <div className="mt-8 text-center">
            <Link href="/gallery" className="btn-gold">
              View Gallery
            </Link>
          </div>
        ) : null}
      </div>
    </section>
  );
}
