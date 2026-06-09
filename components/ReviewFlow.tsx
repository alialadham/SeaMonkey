"use client";

import { type FormEvent, useMemo, useState } from "react";
import { MessageCircle, Star } from "lucide-react";
import { expeditions } from "@/lib/expeditions";
import {
  googleReviewFormLink,
  whatsappFeedbackLink,
  whatsappReviewLink,
} from "@/lib/site-data";

const defaultExpedition = "Not sure / other";

export function ReviewFlow() {
  const [rating, setRating] = useState(0);
  const [name, setName] = useState("");
  const [contactInfo, setContactInfo] = useState("");
  const [issue, setIssue] = useState("");
  const [expedition, setExpedition] = useState(defaultExpedition);
  const [message, setMessage] = useState("");
  const [reviewStatus, setReviewStatus] = useState("");

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
  const publicReviewText = [
    rating ? `Rating: ${rating}/5.` : "",
    expedition ? `Expedition: ${expedition}.` : "",
    message ? `Review/details: ${message}.` : "",
  ]
    .filter(Boolean)
    .join(" ");
  const reviewIssueText = [
    rating && rating < 5 ? `Rating: ${rating}/5.` : "",
    rating && rating < 5 && expedition ? `Expedition: ${expedition}.` : "",
    issue ? `Issue/feedback: ${issue}.` : "",
    rating && rating < 5 && message ? `Details: ${message}.` : "",
  ]
    .filter(Boolean)
    .join(" ");

  const reviewFormLink = useMemo(
    () =>
      googleReviewFormLink({
        name,
        contactInfo,
        expedition,
        rating,
        review: publicReviewText,
        issue: reviewIssueText,
        details: message,
      }),
    [
      contactInfo,
      expedition,
      message,
      name,
      publicReviewText,
      rating,
      reviewIssueText,
    ],
  );

  function openExternalLink(href: string) {
    const opened = window.open(href, "_blank", "noopener,noreferrer");
    return Boolean(opened);
  }

  function openGoogleReview() {
    if (reviewFormLink.href && openExternalLink(reviewFormLink.href)) {
      setReviewStatus(
        reviewFormLink.isPrefilled
          ? "Your pre-filled Google Form opened in a new tab. Please press Submit there."
          : "Google Forms opened in a new tab. Please press Submit there.",
      );
      return;
    }

    if (reviewFormLink.href) {
      setReviewStatus(
        "Google Forms could not open. Please allow pop-ups and press Leave a Review again.",
      );
      return;
    }

    const fallbackLink = whatsappReviewLink();

    if (!openExternalLink(fallbackLink)) {
      window.location.href = fallbackLink;
    }

    setReviewStatus(
      "Google Forms could not open, so WhatsApp opened as a fallback.",
    );
  }

  function handleReviewSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    openGoogleReview();
  }

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
            Choose a rating first. Great trips can be shared on the website;
            anything we should fix goes straight to SeaMonkey Wildlife on
            WhatsApp.
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
                Thank you. A review would help.
              </h2>
              <p className="mt-3 leading-7 text-parchment/[0.72]">
                If your expedition deserved five stars, share it so future
                guests can find SeaMonkey Wildlife.
              </p>
              <form onSubmit={handleReviewSubmit} className="mt-6 grid gap-4">
                <div className="grid gap-4 md:grid-cols-2">
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
                    Public review
                    <textarea
                      value={message}
                      onChange={(event) => setMessage(event.target.value)}
                      rows={5}
                      className="resize-none rounded-[8px] border border-white/10 bg-white/[0.07] px-4 py-3 text-white outline-none focus:border-gold"
                    />
                  </label>
                </div>

                {reviewStatus ? (
                  <p className="text-sm font-semibold text-sand">
                    {reviewStatus}
                  </p>
                ) : null}

                <div className="flex flex-col gap-3 sm:flex-row">
                  <button type="submit" className="btn-gold">
                    Leave a Review
                  </button>
                </div>
              </form>
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
                  If the experience was still positive overall, a review helps.
                  You can also send private notes below.
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
                <button
                  type="button"
                  onClick={openGoogleReview}
                  className="btn-ghost"
                >
                  Leave a Review
                </button>
              </div>
              {reviewStatus ? (
                <p className="mt-4 text-sm font-semibold text-sand">
                  {reviewStatus}
                </p>
              ) : null}
            </div>
          ) : null}
        </div>
      </div>
    </section>
  );
}
