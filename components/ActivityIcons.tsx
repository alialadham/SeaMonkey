import type { ElementType, SVGProps } from "react";
import Image from "next/image";
import { Compass } from "lucide-react";
import type { Expedition } from "@/lib/expeditions";

export type ActivityIcon = ElementType<{ className?: string }>;

const iconPaths = {
  mask: "/assets/seamonkey/icons/mask.png",
  hike: "/assets/seamonkey/icons/hike.png",
  camp: "/assets/seamonkey/icons/camp.png",
  safari: "/assets/seamonkey/icons/safari.png",
};

function IconImage({
  src,
  className,
}: {
  src: string;
  className?: string;
}) {
  return (
    <Image
      src={src}
      alt=""
      aria-hidden="true"
      width={96}
      height={96}
      unoptimized
      className={`object-contain ${className ?? ""}`}
    />
  );
}

export function SnorkelMaskIcon({
  className,
}: SVGProps<SVGSVGElement>) {
  return <IconImage src={iconPaths.mask} className={className} />;
}

export function ScubaGearIcon({
  className,
}: SVGProps<SVGSVGElement>) {
  return <IconImage src={iconPaths.mask} className={className} />;
}

export function DiveGogglesIcon({
  className,
}: SVGProps<SVGSVGElement>) {
  return <IconImage src={iconPaths.mask} className={className} />;
}

export function HikingGearIcon({
  className,
}: SVGProps<SVGSVGElement>) {
  return <IconImage src={iconPaths.hike} className={className} />;
}

export function CampIcon({ className }: SVGProps<SVGSVGElement>) {
  return <IconImage src={iconPaths.camp} className={className} />;
}

export function SafariIcon({ className }: SVGProps<SVGSVGElement>) {
  return <IconImage src={iconPaths.safari} className={className} />;
}

export const filterIcons = {
  all: Compass,
  diving: SnorkelMaskIcon,
  hiking: HikingGearIcon,
  camp: CampIcon,
  safari: SafariIcon,
};

export function getExpeditionActivityIcon(expedition: Expedition): ActivityIcon {
  switch (expedition.slug) {
    case "arabian-oryx-photography-safari":
      return SafariIcon;
    case "scuba-dive-snorkel-cruise-red-sea":
      return SnorkelMaskIcon;
    case "night-dive":
      return DiveGogglesIcon;
    case "camp-in-the-wild":
      return CampIcon;
    case "hike-in-the-wild":
    case "water-buffalo-birdwatching-trek":
      return HikingGearIcon;
    default:
      return HikingGearIcon;
  }
}
