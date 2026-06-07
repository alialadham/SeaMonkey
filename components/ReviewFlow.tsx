"use client";

import { useMemo, useState } from "react";
import { ArrowUpRight, MessageCircle, Star } from "lucide-react";
import { expeditions } from "@/lib/expeditions";
import { contact, whatsappFeedbackLink, whatsappReviewLink } from "@/lib/site-data";

const defaultExpedition = "Not sure / other";

export function ReviewFlow() {
  const [rating, setRating] = useState(0);
  const [name, setName] = useState("");
  const [contactInfo, setContactInfo] = useState("");
  const [issue, setIssue] = useState("");
  const [expedition, setExpedition] = useState(defaultExpedition);
  const [message, setMessage] = useState("");

  const feedbackLink = useMemo(
    () =>
      whatsappFeedbackLink({
        rating,
        expedition,
        message,
        name,
        contactInfo,
        issue,
      }),
    [contactInfo, expedition, issue, message, name, rating],
  );

  const needsFeedback = rating > 0 && rating < 5;

  return (
    <section className="section-shell bg-ink">
      <div className="mx-auto max-w-5xl px-5 md:px-8">
        <div className="rounded-[8px] border border-white/10 bg-white/[0.06] p-6 shadow-cinematic md:p-8">
          <p className="text-xs font-semibold uppercase tracking-[0.28em] text-gold">
            Give us a review
          </p>
          <h1 className="mt-4 font-display text-4xl font-semibold leading-tight text-white md:text-6xl">
            How was your SeaMonkey Wildlife expedition?
          </h1>
          <p className="mt-5 max-w-2xl leading-8 text-parchment/[0.72]">
            Choose a rating first. Great trips can go to Google; anything we
            should fix goes straight to SeaMonkey Wildlife on WhatsApp.
          </p>

          <div className="mt-8 flex flex-wrap gap-3">
            {[1, 2, 3, 4, 5].map((value) => (
              <button
                key={value}
                type="button"
                onClick={() => setRating(value)}
                className={`grid h-14 w-14 place-items-center rounded-[8px] border transition ${
                  value <= rating
                    ? "border-gold bg-gold text-ink shadow-gold"
                    : "border-white/15 bg-white/[0.06] text-parchment hover:border-gold/60"
                }`}
                aria-label={`${value} star rating`}
              >
                <Star className="h-6 w-6 fill-current" />
              </button>
            ))}
          </div>

          {rating === 5 ? (
            <div className="mt-8 rounded-[8px] border border-gold/30 bg-gold/10 p-5">
              <h2 className="font-display text-3xl font-semibold text-white">
                Thank you. A Google review would help.
              </h2>
              <p className="mt-3 leading-7 text-parchment/[0.72]">
                If your expedition deserved five stars, share it publicly so
                future guests can find SeaMonkey Wildlife.
              </p>
              <div className="mt-6 flex flex-col gap-3 sm:flex-row">
                <a
                  href={contact.googleReview}
                  target="_blank"
                  rel="noreferrer"
                  className="btn-gold"
                >
                  Leave a Google Review <ArrowUpRight className="h-4 w-4" />
                </a>
                <a
                  href={whatsappReviewLink()}
                  target="_blank"
                  rel="noreferrer"
                  className="btn-ghost"
                >
                  <MessageCircle className="h-4 w-4" />
                  Message SeaMonkey
                </a>
              </div>
            </div>
          ) : null}

          {needsFeedback ? (
            <div className="mt-8 rounded-[8px] border border-white/10 bg-ink/45 p-5">
              <h2 className="font-display text-3xl font-semibold text-white">
                Tell us what happened.
              </h2>
              <p className="mt-3 leading-7 text-parchment/[0.72]">
                Your feedback goes to SeaMonkey Wildlife first, with a
                pre-filled WhatsApp message.
              </p>

              {rating === 4 ? (
                <div className="mt-5 rounded-[8px] border border-gold/25 bg-gold/10 p-4 text-sm leading-7 text-sand">
                  If the experience was still positive overall, a Google review
                  helps. You can also send private notes below.
                </div>
              ) : null}

              <div className="mt-6 grid gap-4 md:grid-cols-2">
                <label className="grid gap-2 text-sm font-semibold text-parchment">
                  Name
                  <input
                    value={name}
                    onChange={(event) => setName(event.target.value)}
                    className="rounded-[8px] border border-white/10 bg-white/[0.07] px-4 py-3 text-white outline-none focus:border-gold"
                  />
                </label>
                <label className="grid gap-2 text-sm font-semibold text-parchment">
                  Phone or email
                  <input
                    value={contactInfo}
                    onChange={(event) => setContactInfo(event.target.value)}
                    className="rounded-[8px] border border-white/10 bg-white/[0.07] px-4 py-3 text-white outline-none focus:border-gold"
                  />
                </label>
                <label className="grid gap-2 text-sm font-semibold text-parchment md:col-span-2">
                  Which expedition did you join?
                  <select
                    value={expedition}
                    onChange={(event) => setExpedition(event.target.value)}
                    className="rounded-[8px] border border-white/10 bg-[#071923] px-4 py-3 text-white outline-none focus:border-gold"
                  >
                    <option>{defaultExpedition}</option>
                    {expeditions.map((item) => (
                      <option key={item.slug}>{item.title}</option>
                    ))}
                  </select>
                </label>
                <label className="grid gap-2 text-sm font-semibold text-parchment md:col-span-2">
                  What went wrong?
                  <input
                    value={issue}
                    onChange={(event) => setIssue(event.target.value)}
                    className="rounded-[8px] border border-white/10 bg-white/[0.07] px-4 py-3 text-white outline-none focus:border-gold"
                  />
                </label>
                <label className="grid gap-2 text-sm font-semibold text-parchment md:col-span-2">
                  Message/details
                  <textarea
                    value={message}
                    onChange={(event) => setMessage(event.target.value)}
                    rows={5}
                    className="resize-none rounded-[8px] border border-white/10 bg-white/[0.07] px-4 py-3 text-white outline-none focus:border-gold"
                  />
                </label>
              </div>

              <div className="mt-6 flex flex-col gap-3 sm:flex-row">
                <a
                  href={feedbackLink}
                  target="_blank"
                  rel="noreferrer"
                  className="btn-gold"
                >
                  <MessageCircle className="h-4 w-4" />
                  Send Feedback on WhatsApp
                </a>
                {rating === 4 ? (
                  <a
                    href={contact.googleReview}
                    target="_blank"
                    rel="noreferrer"
                    className="btn-ghost"
                  >
                    Leave a Google Review <ArrowUpRight className="h-4 w-4" />
                  </a>
                ) : null}
              </div>
            </div>
          ) : null}
        </div>
      </div>
    </section>
  );
}
