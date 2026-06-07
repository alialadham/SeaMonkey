import { AboutSection } from "@/components/AboutSection";
import { ExpeditionsSection } from "@/components/ExpeditionsSection";
import { Footer } from "@/components/Footer";
import { HomeBookingCta } from "@/components/HomeBookingCta";
import { HeroSection } from "@/components/HeroSection";
import { JournalPreviewSection } from "@/components/JournalPreviewSection";
import { Navbar } from "@/components/Navbar";
import { ReviewsSection } from "@/components/ReviewsSection";
import { WhatsAppButton } from "@/components/WhatsAppButton";
import { WhyBookSection } from "@/components/WhyBookSection";
import { WildlifeGallery } from "@/components/WildlifeGallery";

export default function Home() {
  return (
    <>
      <Navbar />
      <main>
        <HeroSection />
        <AboutSection />
        <ExpeditionsSection />
        <WildlifeGallery preview />
        <WhyBookSection />
        <JournalPreviewSection />
        <ReviewsSection />
        <HomeBookingCta />
      </main>
      <Footer />
      <WhatsAppButton />
    </>
  );
}
