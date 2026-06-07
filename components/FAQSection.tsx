"use client";

import { useState } from "react";
import { ChevronDown } from "lucide-react";
import { AnimatePresence, motion } from "framer-motion";
import { SectionHeading } from "@/components/SectionHeading";
import { faqs } from "@/lib/site-data";

type FAQSectionProps = {
  showIntro?: boolean;
};

export function FAQSection({ showIntro = true }: FAQSectionProps) {
  const [active, setActive] = useState(0);

  return (
    <section id="faq" className="section-shell bg-navy">
      <div
        className={`mx-auto grid gap-10 px-5 md:px-8 ${
          showIntro ? "max-w-7xl lg:grid-cols-[0.8fr_1.2fr]" : "max-w-4xl"
        }`}
      >
        {showIntro ? (
          <SectionHeading
            eyebrow="FAQ"
            title="Know before you go."
            copy="Short answers for the most common booking and field questions."
          />
        ) : null}
        <div className="space-y-3">
          {faqs.map((faq, index) => {
            const isOpen = active === index;

            return (
              <div
                key={faq.question}
                className="overflow-hidden rounded-[8px] border border-white/10 bg-white/[0.055]"
              >
                <button
                  type="button"
                  onClick={() => setActive(isOpen ? -1 : index)}
                  className="flex w-full items-center justify-between gap-5 px-5 py-5 text-left text-lg font-semibold text-parchment"
                >
                  {faq.question}
                  <ChevronDown
                    className={`h-5 w-5 shrink-0 text-gold transition ${
                      isOpen ? "rotate-180" : ""
                    }`}
                  />
                </button>
                <AnimatePresence initial={false}>
                  {isOpen ? (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.28 }}
                    >
                      <p className="px-5 pb-6 leading-7 text-parchment/70">
                        {faq.answer}
                      </p>
                    </motion.div>
                  ) : null}
                </AnimatePresence>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
