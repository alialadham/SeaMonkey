import Link from "next/link";
import { Star } from "lucide-react";
import { AnimatedReveal } from "@/components/AnimatedReveal";
import { SectionHeading } from "@/components/SectionHeading";

// Placeholder/demo testimonials only. Replace with approved real guest reviews
// before presenting them as customer testimonials or connecting to Google.
const mockReviews = [
  {
    initials: "GR",
    name: "Guest Review",
    route: "Wildlife expedition",
    quote: "An unforgettable wildlife experience in Jordan.",
  },
  {
    initials: "AG",
    name: "Guest Review",
    route: "Guided field day",
    quote: "Amazing guides, beautiful locations, and very professional.",
  },
  {
    initials: "NA",
    name: "Guest Review",
    route: "Nature expedition",
    quote: "One of the most unique expeditions I have done in Jordan.",
  },
  {
    initials: "RS",
    name: "Guest Review",
    route: "Red Sea trip",
    quote: "The Red Sea trip was organized, beautiful, and easy to book.",
  },
  {
    initials: "PH",
    name: "Guest Review",
    route: "Photography route",
    quote: "Perfect for photography, nature, and a different kind of expedition.",
  },
];

const showMockReviews = false;

export function ReviewsSection() {
  return (
    <section id="reviews" className="section-shell bg-ink">
      <div className="mx-auto max-w-7xl px-5 md:px-8">
        <AnimatedReveal className="text-center">
          <SectionHeading
            eyebrow="Guest feedback"
            title="Tell us how the expedition felt."
            copy="Share your experience with SeaMonkey Wildlife so the team can keep improving every field route."
            align="center"
          />
        </AnimatedReveal>

        {/* Mock reviews hidden until real reviews are provided. */}
        {showMockReviews ? (
          <AnimatedReveal className="mt-12 overflow-hidden">
            <div className="reviews-marquee">
              {[...mockReviews, ...mockReviews].map((review, index) => (
                <article
                  key={`${review.quote}-${index}`}
                  className="review-marquee-card"
                  aria-hidden={index >= mockReviews.length}
                >
                  <div className="flex items-center justify-between gap-4">
                    <div className="grid h-10 w-10 place-items-center rounded-full bg-gold/90 text-xs font-black text-ink">
                      {review.initials}
                    </div>
                    <div
                      className="flex gap-0.5 text-gold/75"
                      aria-label="5 star placeholder rating"
                    >
                      {[1, 2, 3, 4, 5].map((star) => (
                        <Star key={star} className="h-3.5 w-3.5 fill-current" />
                      ))}
                    </div>
                  </div>
                  <p className="mt-6 text-lg font-semibold leading-8 text-white">
                    “{review.quote}”
                  </p>
                  <div className="mt-7">
                    <p className="text-sm font-bold text-parchment">
                      {review.name}
                    </p>
                    <p className="mt-1 text-xs font-semibold uppercase tracking-[0.18em] text-parchment/45">
                      {review.route}
                    </p>
                  </div>
                </article>
              ))}
            </div>
          </AnimatedReveal>
        ) : null}

        <AnimatedReveal delay={0.14} className="mt-8 text-center">
          <div className="mt-6 flex flex-col justify-center gap-3 sm:flex-row">
            <Link href="/review" className="btn-gold">
              Give Us a Review
            </Link>
          </div>
        </AnimatedReveal>
      </div>
    </section>
  );
}
