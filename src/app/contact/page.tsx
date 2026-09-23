import LocationSection from "@/components/sections/LocationSection";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Contact Us | Crazy Fleets",
  description: "Get in touch with Crazy Fleets. Find our location in Dharuhera or contact us via phone or WhatsApp.",
};

export default function ContactPage() {
  return (
    <div className="pt-32 pb-10 bg-background min-h-screen">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-4">Contact Us</h1>
          <p className="text-muted-foreground text-lg">We are here to help you with your next journey.</p>
        </div>
      </div>
      <LocationSection />
    </div>
  );
}
