"use client";

import { useEffect, useState } from "react";
import { ArrowUp } from "lucide-react";

export function BackToTopButton() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const onScroll = () => setVisible(window.scrollY > 520);

    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });

    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  if (!visible) {
    return null;
  }

  return (
    <button
      type="button"
      aria-label="Back to top"
      onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
      className="fixed bottom-24 right-5 z-40 grid h-12 w-12 place-items-center rounded-full border border-white/15 bg-navy/85 text-gold shadow-2xl shadow-black/30 backdrop-blur-xl transition hover:-translate-y-1 hover:border-gold"
    >
      <ArrowUp className="h-5 w-5" />
    </button>
  );
}
