"use client";

import { useRef, useState } from "react";
import Image from "next/image";
import { motion, useReducedMotion, useScroll, useTransform } from "framer-motion";

type ExpeditionTheme = "wetlands" | "dana" | "redsea" | "hike" | "oryx" | "night";

type ParallaxExpeditionMediaProps = {
  src: string;
  alt: string;
  caption: string;
  theme: ExpeditionTheme;
  className?: string;
  priority?: boolean;
  showCaption?: boolean;
};

const themeFallbacks: Record<ExpeditionTheme, string> = {
  wetlands:
    "bg-[radial-gradient(circle_at_24%_24%,rgba(216,185,140,0.24),transparent_28%),linear-gradient(135deg,#25351f,#526a3b_54%,#062b3f)]",
  dana:
    "bg-[radial-gradient(circle_at_25%_18%,rgba(248,243,232,0.18),transparent_28%),linear-gradient(135deg,#3d2c20,#9b7148_58%,#031923)]",
  redsea:
    "bg-[radial-gradient(circle_at_35%_25%,rgba(139,216,233,0.24),transparent_30%),linear-gradient(135deg,#062f48,#0e81a5_56%,#031923)]",
  hike:
    "bg-[radial-gradient(circle_at_70%_20%,rgba(248,243,232,0.16),transparent_28%),linear-gradient(135deg,#3b2e1a,#a27b44_52%,#5e6f42)]",
  oryx:
    "bg-[radial-gradient(circle_at_55%_24%,rgba(248,243,232,0.26),transparent_26%),linear-gradient(135deg,#3f3527,#aa8b5c_58%,#d8b98c)]",
  night:
    "bg-[radial-gradient(circle_at_38%_30%,rgba(35,168,200,0.26),transparent_26%),linear-gradient(135deg,#071723,#063e5a_54%,#050505)]",
};

export function ParallaxExpeditionMedia({
  src,
  alt,
  caption,
  theme,
  className,
  priority = false,
  showCaption = true,
}: ParallaxExpeditionMediaProps) {
  const ref = useRef<HTMLDivElement | null>(null);
  const reduceMotion = useReducedMotion();
  const [imageFailed, setImageFailed] = useState(false);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });
  const y = useTransform(scrollYProgress, [0, 1], ["-7%", "7%"]);

  return (
    <div
      ref={ref}
      className={`relative overflow-hidden rounded-[8px] border border-white/10 shadow-cinematic ${className ?? ""}`}
    >
      <motion.div
        className={`absolute inset-x-0 -inset-y-8 ${themeFallbacks[theme]}`}
        style={{ y: reduceMotion ? "0%" : y }}
      >
        {!imageFailed ? (
          <>
            {/* Replace with the uploaded static asset when it is available locally. */}
            <Image
              src={src}
              alt={alt}
              fill
              priority={priority}
              sizes="(max-width: 768px) 100vw, 50vw"
              className="object-cover contrast-110 saturate-125"
              onError={() => setImageFailed(true)}
            />
          </>
        ) : (
          <div className="absolute inset-0 bg-[linear-gradient(45deg,transparent_0_42%,rgba(255,255,255,0.18)_42%_43%,transparent_43%_100%)] bg-[size:34px_34px] opacity-60 mix-blend-overlay" />
        )}
      </motion.div>
      <div className="absolute inset-0 bg-gradient-to-t from-ink/[0.78] via-ink/[0.14] to-transparent" />
      {showCaption ? (
        <p className="absolute bottom-5 left-5 right-5 z-10 text-xs font-semibold uppercase tracking-[0.2em] text-parchment/80">
          {caption}
        </p>
      ) : null}
    </div>
  );
}
