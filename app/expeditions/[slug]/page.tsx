import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { ExpeditionDetailPage } from "@/components/ExpeditionDetailPage";
import { expeditions, getExpeditionBySlug } from "@/lib/expeditions";

type ExpeditionPageProps = {
  params: Promise<{
    slug: string;
  }>;
};

export function generateStaticParams() {
  return expeditions.map((expedition) => ({
    slug: expedition.slug,
  }));
}

export async function generateMetadata({
  params,
}: ExpeditionPageProps): Promise<Metadata> {
  const { slug } = await params;
  const expedition = getExpeditionBySlug(slug);

  if (!expedition) {
    return {
      title: "Expedition Not Found | SeaMonkey Wildlife",
    };
  }

  return {
    title: `${expedition.title} | SeaMonkey Wildlife`,
    description: `${expedition.location} ${expedition.type.toLowerCase()} with SeaMonkey Wildlife. ${expedition.duration}, ${expedition.groupSize}.`,
    openGraph: {
      title: `${expedition.title} | SeaMonkey Wildlife`,
      description: expedition.overview[0],
      images: [{ url: expedition.heroImage }],
    },
  };
}

export default async function ExpeditionPage({ params }: ExpeditionPageProps) {
  const { slug } = await params;
  const expedition = getExpeditionBySlug(slug);

  if (!expedition) {
    notFound();
  }

  return <ExpeditionDetailPage expedition={expedition} />;
}
