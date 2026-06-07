import type { Metadata } from "next";
import { Footer } from "@/components/Footer";
import { Navbar } from "@/components/Navbar";
import { WhatsAppButton } from "@/components/WhatsAppButton";
import { WildlifeGallery } from "@/components/WildlifeGallery";

export const metadata: Metadata = {
  title: "Gallery | SeaMonkey Wildlife",
  description:
    "SeaMonkey Wildlife gallery of Jordan's wildlife, reefs, wetlands, mountain routes, and expedition habitats.",
};

export default function GalleryPage() {
  return (
    <>
      <Navbar />
      <main className="bg-ink pt-20 text-parchment">
        <WildlifeGallery />
      </main>
      <Footer />
      <WhatsAppButton />
    </>
  );
}
