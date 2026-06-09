import type { Metadata } from "next";
import { Footer } from "@/components/Footer";
import { Navbar } from "@/components/Navbar";
import { ReviewFlow } from "@/components/ReviewFlow";
import { WhatsAppButton } from "@/components/WhatsAppButton";

export const metadata: Metadata = {
  title: "Give Us a Review | SeaMonkey Wildlife",
  description:
    "Rate your SeaMonkey Wildlife expedition and share feedback through the website review flow or WhatsApp.",
};

export default function ReviewPage() {
  return (
    <>
      <Navbar />
      <main className="bg-ink pt-20 text-parchment">
        <ReviewFlow />
      </main>
      <Footer />
      <WhatsAppButton />
    </>
  );
}
