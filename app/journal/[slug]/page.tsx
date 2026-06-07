import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import {
  ArrowRight,
  Clock,
  Compass,
  MapPin,
  MessageCircle,
  PawPrint,
  Route,
} from "lucide-react";
import { AnimatedReveal } from "@/components/AnimatedReveal";
import { Footer } from "@/components/Footer";
import { Navbar } from "@/components/Navbar";
import { WhatsAppButton } from "@/components/WhatsAppButton";
import {
  getJournalPostBySlug,
  journalPosts,
} from "@/lib/journal";
import { whatsappBookingLink } from "@/lib/site-data";

type JournalPostPageProps = {
  params: Promise<{
    slug: string;
  }>;
};

const articleThemes = {
  wetlands: {
    shell: "bg-[#eaf0e2] text-[#3b4639]",
    paper: "bg-[#f7f9ef]",
    title: "text-[#263c2a]",
    label: "text-[#71835a]",
    subtitle: "text-[#61764e]",
    text: "text-[#485146]",
    muted: "text-[#6d7668]",
    line: "bg-[#71835a]",
    quote: "border-[#71835a] text-[#263c2a]",
    panel: "bg-[#e4ebd9] text-[#3b4639]",
    card: "bg-[#eef3e6] text-[#3b4639]",
    cta: "bg-[#dfe8d2]",
    primaryButton: "bg-[#5f774a] text-white hover:bg-[#496238]",
    secondaryButton: "border-[#71835a]/35 text-[#263c2a] hover:bg-[#71835a] hover:text-white",
  },
  dana: {
    shell: "bg-[#f3e5d1] text-[#4a382b]",
    paper: "bg-[#fff4e4]",
    title: "text-[#3d2c20]",
    label: "text-[#a87843]",
    subtitle: "text-[#9b7148]",
    text: "text-[#58483c]",
    muted: "text-[#7c6958]",
    line: "bg-[#a87843]",
    quote: "border-[#a87843] text-[#3d2c20]",
    panel: "bg-[#f1dfc5] text-[#4a382b]",
    card: "bg-[#f7ead7] text-[#4a382b]",
    cta: "bg-[#ead4b5]",
    primaryButton: "bg-[#8d6138] text-white hover:bg-[#6f4929]",
    secondaryButton: "border-[#a87843]/40 text-[#3d2c20] hover:bg-[#8d6138] hover:text-white",
  },
  redsea: {
    shell: "bg-[#e8f4f5] text-[#173947]",
    paper: "bg-[#f3fbfb]",
    title: "text-[#073147]",
    label: "text-[#0e81a5]",
    subtitle: "text-[#177f9d]",
    text: "text-[#31505b]",
    muted: "text-[#5d7580]",
    line: "bg-[#0e81a5]",
    quote: "border-[#0e81a5] text-[#073147]",
    panel: "bg-[#dceff2] text-[#173947]",
    card: "bg-[#e8f6f7] text-[#173947]",
    cta: "bg-[#d6edf0]",
    primaryButton: "bg-[#0b7194] text-white hover:bg-[#07516d]",
    secondaryButton: "border-[#0e81a5]/40 text-[#073147] hover:bg-[#0b7194] hover:text-white",
  },
  hike: {
    shell: "bg-[#efe4cf] text-[#4b4031]",
    paper: "bg-[#fbf0dc]",
    title: "text-[#3e3426]",
    label: "text-[#8a7747]",
    subtitle: "text-[#92703e]",
    text: "text-[#574f41]",
    muted: "text-[#766b58]",
    line: "bg-[#8a7747]",
    quote: "border-[#8a7747] text-[#3e3426]",
    panel: "bg-[#eadcc3] text-[#4b4031]",
    card: "bg-[#f3e7d2] text-[#4b4031]",
    cta: "bg-[#e5d4b8]",
    primaryButton: "bg-[#756338] text-white hover:bg-[#5a4d2d]",
    secondaryButton: "border-[#8a7747]/40 text-[#3e3426] hover:bg-[#756338] hover:text-white",
  },
  oryx: {
    shell: "bg-[#f6ecd9] text-[#4c3c2d]",
    paper: "bg-[#fff7e9]",
    title: "text-[#493524]",
    label: "text-[#aa7f45]",
    subtitle: "text-[#9b7148]",
    text: "text-[#5c4d3d]",
    muted: "text-[#796854]",
    line: "bg-[#aa7f45]",
    quote: "border-[#aa7f45] text-[#493524]",
    panel: "bg-[#efe0c6] text-[#4c3c2d]",
    card: "bg-[#f8ecd8] text-[#4c3c2d]",
    cta: "bg-[#ead8ba]",
    primaryButton: "bg-[#9b6f39] text-white hover:bg-[#775225]",
    secondaryButton: "border-[#aa7f45]/40 text-[#493524] hover:bg-[#9b6f39] hover:text-white",
  },
  night: {
    shell: "bg-[#06131d] text-[#dcecf2]",
    paper: "bg-[#101f2a]",
    title: "text-[#f4fbff]",
    label: "text-[#40b8d4]",
    subtitle: "text-[#53c2dc]",
    text: "text-[#c7d7de]",
    muted: "text-[#91a8b2]",
    line: "bg-[#40b8d4]",
    quote: "border-[#40b8d4] text-[#f4fbff]",
    panel: "bg-[#0b2a39] text-[#dcecf2]",
    card: "bg-[#132d3a] text-[#dcecf2]",
    cta: "bg-[#0a2635]",
    primaryButton: "bg-[#38aecd] text-[#041018] hover:bg-[#79d9ee]",
    secondaryButton: "border-[#40b8d4]/45 text-[#e8fbff] hover:bg-[#38aecd] hover:text-[#041018]",
  },
};

export function generateStaticParams() {
  return journalPosts.map((post) => ({
    slug: post.slug,
  }));
}

export async function generateMetadata({
  params,
}: JournalPostPageProps): Promise<Metadata> {
  const { slug } = await params;
  const post = getJournalPostBySlug(slug);

  if (!post) {
    return {
      title: "Journal Not Found | SeaMonkey Wildlife",
    };
  }

  return {
    title: `${post.title} | SeaMonkey Wildlife Journal`,
    description: post.excerpt,
    openGraph: {
      title: `${post.title} | SeaMonkey Wildlife Journal`,
      description: post.excerpt,
      images: [{ url: post.heroImage }],
    },
  };
}

function getParagraphs(text: string) {
  return text
    .split("\n")
    .map((line) => line.trim())
    .filter(Boolean);
}

export default async function JournalPostPage({
  params,
}: JournalPostPageProps) {
  const { slug } = await params;
  const post = getJournalPostBySlug(slug);

  if (!post) {
    notFound();
  }

  const { expedition } = post;
  const paragraphs = post.pdfPages.flatMap((page) => getParagraphs(page.text));
  const quoteIndex = Math.min(4, Math.max(2, Math.floor(paragraphs.length / 3)));
  const beforeQuote = paragraphs.slice(0, quoteIndex);
  const afterQuote = paragraphs.slice(quoteIndex);
  const primaryImage = post.pdfImages[0];
  const theme = articleThemes[post.theme];

  return (
    <>
      <Navbar />
      <main className={`${theme.shell} pt-24`}>
        <section className="px-4 py-10 md:px-8 md:py-16">
          <AnimatedReveal>
            <article className={`mx-auto max-w-5xl overflow-hidden rounded-[8px] shadow-2xl shadow-black/20 ${theme.paper}`}>
              <div className="relative h-52 overflow-hidden md:h-72">
                <Image
                  src={post.heroImage}
                  alt={post.title}
                  fill
                  priority
                  sizes="(max-width: 768px) 100vw, 1024px"
                  className="object-cover contrast-110 saturate-125"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent" />
                <p className="absolute bottom-5 left-5 rounded-full bg-black/35 px-4 py-2 text-xs font-bold uppercase tracking-[0.22em] text-white backdrop-blur-md">
                  {post.locationLabel}
                </p>
              </div>

              <div className="px-5 py-10 md:px-14 md:py-16 lg:px-20">
                <div className={`mb-8 h-0.5 w-20 ${theme.line}`} />
              <Link
                href="/journal"
                  className={`inline-flex text-xs font-bold uppercase tracking-[0.26em] transition ${theme.label}`}
              >
                  Back to journal
              </Link>
                <p className={`mt-7 text-xs font-black uppercase tracking-[0.26em] ${theme.label}`}>
                  {post.label}
              </p>
                <h1 className={`journal-editorial-title mt-5 max-w-4xl text-5xl leading-[0.96] md:text-7xl ${theme.title}`}>
                  {post.title} — {post.locationLabel}
              </h1>
                <p className={`mt-6 max-w-3xl font-serif text-2xl font-semibold leading-tight md:text-3xl ${theme.subtitle}`}>
                  {post.subtitle}
              </p>

                <div className={`mt-9 grid gap-3 border-y border-current py-5 text-sm font-semibold md:grid-cols-3 ${theme.muted}`}>
                  <p className="flex items-center gap-3">
                    <MapPin className="h-4 w-4" />
                    {expedition.location}
                  </p>
                  <p className="flex items-center gap-3">
                    <Clock className="h-4 w-4" />
                    {expedition.duration}
                  </p>
                  <p className="flex items-center gap-3">
                    <Route className="h-4 w-4" />
                    {expedition.type}
                  </p>
                </div>

                <div className={`mx-auto mt-12 max-w-3xl text-lg leading-9 ${theme.text}`}>
                  {beforeQuote.map((paragraph, index) => (
                    <p
                      key={`${paragraph}-${index}`}
                      className={index === 0 ? "text-xl leading-9 md:text-2xl md:leading-10" : "mt-6"}
                    >
                      {paragraph}
                    </p>
                  ))}

                  <blockquote className={`my-12 border-l-4 pl-7 font-serif text-3xl font-semibold leading-tight md:text-4xl ${theme.quote}`}>
                    {post.quote}
                  </blockquote>

                  {primaryImage ? (
                    <figure className="my-12 overflow-hidden rounded-[8px] shadow-xl shadow-black/10">
                      <div className="relative aspect-[16/10]">
                        <Image
                          src={primaryImage.src}
                          alt={primaryImage.alt}
                          fill
                          sizes="(max-width: 768px) 100vw, 760px"
                          className="object-cover contrast-110 saturate-125"
                        />
                      </div>
                      <figcaption className={`px-4 py-3 text-xs font-bold uppercase tracking-[0.18em] ${theme.muted}`}>
                        {post.locationLabel}
                      </figcaption>
                    </figure>
                  ) : (
                    <div className={`my-12 rounded-[8px] p-5 text-sm leading-7 ${theme.panel}`}>
                      Field image coming soon.
                    </div>
                  )}

                  {afterQuote.map((paragraph, index) => (
                    <p className="mt-6" key={`${paragraph}-${index}`}>{paragraph}</p>
                  ))}

                  <div className="mt-14 grid gap-4 md:grid-cols-2">
                    <div className={`rounded-[8px] p-5 ${theme.card}`}>
                      <p className={`flex items-center gap-2 text-xs font-black uppercase tracking-[0.22em] ${theme.label}`}>
                    <PawPrint className="h-4 w-4" />
                        Wildlife highlights
                  </p>
                      <div className="mt-5 flex flex-wrap gap-2">
                        {expedition.wildlife.map((animal) => (
                          <span
                            key={animal.name}
                            className="rounded-full bg-white/45 px-3 py-2 text-xs font-bold"
                          >
                            {animal.name}
                          </span>
                        ))}
                </div>
                      <p className="mt-5 text-sm leading-7">
                        {expedition.wildlifeSummary}
                      </p>
                    </div>

                    <div className={`rounded-[8px] p-5 ${theme.panel}`}>
                      <p className={`flex items-center gap-2 text-xs font-black uppercase tracking-[0.22em] ${theme.label}`}>
                    <Compass className="h-4 w-4" />
                        Conservation note
                  </p>
                      <p className="mt-5 text-sm leading-7">
                        {expedition.routeHighlights[0]}
                  </p>
                </div>
                </div>

                  {post.pdfImages.length > 1 ? (
                    <div className="mt-12 grid gap-5 md:grid-cols-2">
                      {post.pdfImages.slice(1).map((image) => (
                        <figure key={image.src} className="overflow-hidden rounded-[8px] shadow-xl shadow-black/10">
                          <div className="relative h-80">
                        <Image
                          src={image.src}
                          alt={image.alt}
                          fill
                          sizes="(max-width: 768px) 100vw, 50vw"
                          className="object-cover contrast-110 saturate-125"
                        />
                      </div>
                    </figure>
                      ))}
                    </div>
                  ) : null}

                  <div className={`mt-14 rounded-[8px] p-6 ${theme.cta}`}>
                    <p className={`text-xs font-black uppercase tracking-[0.22em] ${theme.label}`}>
                      Book this field route
                    </p>
                    <p className={`mt-3 text-sm leading-7 ${theme.text}`}>
                      Message SeaMonkey Wildlife with your preferred date,
                      group size, and expedition route.
                    </p>
                    <div className="mt-6 flex flex-col gap-3 sm:flex-row">
                <Link
                  href={`/expeditions/${expedition.slug}`}
                        className={`inline-flex min-h-12 items-center justify-center gap-2 rounded-[8px] border px-6 py-3 text-sm font-bold transition hover:-translate-y-0.5 ${theme.secondaryButton}`}
                >
                  View full itinerary <ArrowRight className="h-4 w-4" />
                </Link>
                <a
                  href={whatsappBookingLink(expedition.title)}
                  target="_blank"
                  rel="noreferrer"
                        className={`inline-flex min-h-12 items-center justify-center gap-2 rounded-[8px] px-6 py-3 text-sm font-bold transition hover:-translate-y-0.5 ${theme.primaryButton}`}
                >
                  <MessageCircle className="h-4 w-4" />
                  Book on WhatsApp
                </a>
                    </div>
                  </div>
                </div>
              </div>
            </article>
          </AnimatedReveal>
        </section>
      </main>
      <Footer />
      <WhatsAppButton />
    </>
  );
}
