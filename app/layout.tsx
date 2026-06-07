import type { Metadata } from "next";
import type { ReactNode } from "react";
import "./globals.css";

export const metadata: Metadata = {
  title: "SeaMonkey Wildlife | Wildlife Expeditions in Jordan",
  description:
    "Jordan's first wildlife expedition agency, offering cinematic desert, mountain, wetland, and Red Sea adventures.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: ReactNode;
}>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
