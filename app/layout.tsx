import type { Metadata } from "next";
import type { ReactNode } from "react";
import { BackToTopButton } from "@/components/BackToTopButton";
import { SiteLoader } from "@/components/SiteLoader";
import "./globals.css";

export const metadata: Metadata = {
  title: "SeaMonkey Wildlife | Wildlife Expeditions in Jordan",
  description:
    "Jordan's first wildlife expedition agency, offering cinematic desert, mountain, wetland, and Red Sea expeditions.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <SiteLoader />
        {children}
        <BackToTopButton />
      </body>
    </html>
  );
}
