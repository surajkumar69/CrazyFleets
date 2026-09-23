import Hero from "@/components/sections/Hero";
import FleetPreview from "@/components/sections/FleetPreview";
import HowItWorks from "@/components/sections/HowItWorks";
import WhyChooseUs from "@/components/sections/WhyChooseUs";
import LocationSection from "@/components/sections/LocationSection";
import Testimonials from "@/components/sections/Testimonials";
import FAQ from "@/components/sections/FAQ";

export default function Home() {
  return (
    <>
      <Hero />
      <FleetPreview />
      <HowItWorks />
      <WhyChooseUs />
      <LocationSection />
      <Testimonials />
      <FAQ />
    </>
  );
}
