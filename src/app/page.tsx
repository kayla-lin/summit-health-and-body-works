import { MainNavigation } from "@/features/main-nav/main-nav";
import { AboutSection } from "@/features/about/about-section";
import { BookingsSection } from "@/features/bookings/bookings-sections";
import CertificationSection from "@/features/certifications/certification-section";
import { Footer } from "@/features/footer/footer";
import { HeroSection } from "@/features/hero/hero-section";
import { LocationSection } from "@/features/locations/location-section";
import { ServicesSection } from "@/features/services/services-section";

export default function Home() {
  return (
    <main className="flex flex-col">
      <MainNavigation />
      <HeroSection />
      <ServicesSection />
      <LocationSection />
      <BookingsSection />
      <AboutSection />
      <CertificationSection />
      <Footer />
    </main>
  );
}
