import type { ElementType, SVGProps } from "react";
import { CarFront, Compass, Tent } from "lucide-react";
import type { Expedition } from "@/lib/expeditions";

export type ActivityIcon = ElementType<{ className?: string }>;

export function SnorkelMaskIcon({
  className,
  ...props
}: SVGProps<SVGSVGElement>) {
  return (
    <svg
      aria-hidden="true"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="2"
      className={className}
      {...props}
    >
      <path d="M4 11.5c0-2.2 1.8-4 4-4h8c2.2 0 4 1.8 4 4v1.25c0 1.24-1 2.25-2.25 2.25H15.8c-.7 0-1.36-.33-1.78-.9L12 11.4l-2.02 2.7c-.42.57-1.08.9-1.78.9H6.25C5 15 4 13.99 4 12.75Z" />
      <path d="M12 7.5v3.9" />
      <path d="M19 8V5.75c0-.97.78-1.75 1.75-1.75S22.5 4.78 22.5 5.75v5" />
      <path d="M15 17.5c1.2.9 2.7.9 4 0" />
      <path d="M4 18.5c1.4.9 3.1.9 4.5 0" />
    </svg>
  );
}

export function ScubaGearIcon({
  className,
  ...props
}: SVGProps<SVGSVGElement>) {
  return (
    <svg
      aria-hidden="true"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="2"
      className={className}
      {...props}
    >
      <path d="M8 5.5h8" />
      <path d="M9 5.5v4.2c0 1.1-.9 2-2 2H5.5A2.5 2.5 0 0 0 3 14.2V15c0 1.1.9 2 2 2h3.2c.7 0 1.36-.33 1.78-.9L12 13.4l2.02 2.7c.42.57 1.08.9 1.78.9H19c1.1 0 2-.9 2-2v-.8a2.5 2.5 0 0 0-2.5-2.5H17c-1.1 0-2-.9-2-2V5.5" />
      <path d="M12 5.5v7.9" />
      <path d="M7 19.5h3" />
      <path d="M14 19.5h3" />
      <path d="M18.5 11.5V7.75c0-.97.78-1.75 1.75-1.75S22 6.78 22 7.75V10" />
    </svg>
  );
}

export function DiveGogglesIcon({
  className,
  ...props
}: SVGProps<SVGSVGElement>) {
  return (
    <svg
      aria-hidden="true"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="2"
      className={className}
      {...props}
    >
      <path d="M4 11.5c0-2.2 1.8-4 4-4h8c2.2 0 4 1.8 4 4v1.2c0 1.27-1.03 2.3-2.3 2.3h-2.15c-.62 0-1.21-.25-1.64-.69L12 12.35l-1.91 1.96c-.43.44-1.02.69-1.64.69H6.3C5.03 15 4 13.97 4 12.7Z" />
      <path d="M9.5 10.5h-2" />
      <path d="M16.5 10.5h-2" />
      <path d="M12 7.5v4.85" />
      <path d="M6 17.5c1.1.75 2.4.75 3.5 0" />
      <path d="M14.5 17.5c1.1.75 2.4.75 3.5 0" />
    </svg>
  );
}

export function HikingGearIcon({
  className,
  ...props
}: SVGProps<SVGSVGElement>) {
  return (
    <svg
      aria-hidden="true"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="2"
      className={className}
      {...props}
    >
      <path d="M8 8h5a4 4 0 0 1 4 4v7H6v-9a2 2 0 0 1 2-2Z" />
      <path d="M9 8V6a3 3 0 0 1 6 0v3" />
      <path d="M6 13H4.5a1.5 1.5 0 0 0 0 3H6" />
      <path d="M17 13h1.5a1.5 1.5 0 0 1 0 3H17" />
      <path d="M10 12h3" />
      <path d="M21 6v15" />
      <path d="m19.5 8 1.5-2 1.5 2" />
    </svg>
  );
}

export const filterIcons = {
  all: Compass,
  diving: SnorkelMaskIcon,
  hiking: HikingGearIcon,
  camp: Tent,
  safari: CarFront,
};

export function getExpeditionActivityIcon(expedition: Expedition): ActivityIcon {
  switch (expedition.slug) {
    case "arabian-oryx-photography-safari":
      return CarFront;
    case "scuba-dive-snorkel-cruise-red-sea":
      return SnorkelMaskIcon;
    case "night-dive":
      return DiveGogglesIcon;
    case "camp-in-the-wild":
      return Tent;
    case "hike-in-the-wild":
    case "water-buffalo-birdwatching-trek":
      return HikingGearIcon;
    default:
      return HikingGearIcon;
  }
}
