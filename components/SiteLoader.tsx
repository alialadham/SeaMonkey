"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { assets } from "@/lib/site-data";

const LOADER_KEY = "seamonkey-loader-seen";
const LOAD_DURATION_MS = 3700;
const REDUCED_DURATION_MS = 900;

function getProgress(elapsed: number, reducedMotion: boolean) {
  if (reducedMotion) {
    return Math.min(100, (elapsed / REDUCED_DURATION_MS) * 100);
  }

  if (elapsed < 650) {
    return (elapsed / 650) * 30;
  }

  if (elapsed < 2350) {
    return 30;
  }

  if (elapsed < 3300) {
    const phase = (elapsed - 2350) / 950;
    return 30 + Math.min(1, phase) * 70;
  }

  return 100;
}

export function SiteLoader() {
  const [visible, setVisible] = useState(false);
  const [reducedMotion, setReducedMotion] = useState(false);
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    if (sessionStorage.getItem(LOADER_KEY)) {
      return;
    }

    const shouldReduceMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)",
    ).matches;

    setReducedMotion(shouldReduceMotion);
    setProgress(0);
    setVisible(true);
    sessionStorage.setItem(LOADER_KEY, "true");

    const start = performance.now();
    let frame = 0;

    const tick = (time: number) => {
      const elapsed = time - start;
      setProgress(getProgress(elapsed, shouldReduceMotion));

      if (elapsed < (shouldReduceMotion ? REDUCED_DURATION_MS : LOAD_DURATION_MS)) {
        frame = window.requestAnimationFrame(tick);
      }
    };

    frame = window.requestAnimationFrame(tick);

    const timer = window.setTimeout(() => {
      setProgress(100);
      setVisible(false);
    }, shouldReduceMotion ? REDUCED_DURATION_MS : LOAD_DURATION_MS);

    return () => {
      window.clearTimeout(timer);
      window.cancelAnimationFrame(frame);
    };
  }, []);

  return (
    <AnimatePresence>
      {visible ? (
        <motion.div
          className="site-loader"
          initial={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.75, ease: "easeInOut" }}
          aria-live="polite"
          aria-label="SeaMonkey Wildlife loading"
        >
          <div className="site-loader-water" />
          <div className="site-loader-rays" />
          <div className="site-loader-particles" />

          <motion.div
            className="site-loader-content"
            initial={{ opacity: 0, y: reducedMotion ? 0 : 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, ease: "easeOut" }}
          >
            <Image
              src={assets.logo}
              alt="SeaMonkey Wildlife"
              width={180}
              height={180}
              unoptimized
              className="site-loader-logo"
              priority
            />
            <div className="site-loader-copy">
              <p>SeaMonkey Wildlife</p>
              <span>Loading</span>
            </div>
            <div className="site-loader-progress" aria-hidden="true">
              <motion.div
                animate={{ scaleX: progress / 100 }}
                transition={{
                  duration: reducedMotion ? 0 : 0.18,
                  ease: "easeOut",
                }}
              />
            </div>
            <div className="site-loader-status" aria-hidden="true">
              <span>{Math.round(progress)}%</span>
            </div>
            <motion.p
              className="site-loader-powered"
              initial={{ opacity: 0, y: reducedMotion ? 0 : 8 }}
              animate={{ opacity: 0.78, y: 0 }}
              transition={{ delay: 0.65, duration: 0.8, ease: "easeOut" }}
            >
              Powered by Brandak
            </motion.p>
          </motion.div>
        </motion.div>
      ) : null}
    </AnimatePresence>
  );
}
