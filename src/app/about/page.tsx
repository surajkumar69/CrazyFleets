import Image from "next/image";
import Link from "next/link";
import { CheckCircle2 } from "lucide-react";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "About Us | Crazy Fleets",
  description: "Learn more about Crazy Fleets, the premium self-drive car sharing platform based in Dharuhera.",
};

export default function AboutPage() {
  return (
    <div className="pt-32 pb-24 bg-background min-h-screen">
      <div className="container mx-auto px-4 md:px-6">
        
        <div className="flex flex-col lg:flex-row gap-16 items-center">
          {/* Image Side */}
          <div className="w-full lg:w-1/2 relative h-[600px] rounded-3xl overflow-hidden border border-card-border shadow-2xl">
            <Image 
              src="/images/about_us.jpg"
              alt="Crazy Fleets Premium Fleet"
              fill
              className="object-cover"
              priority
            />
            <div className="absolute inset-0 bg-gradient-to-t from-background via-transparent to-transparent"></div>
          </div>

          {/* Content Side */}
          <div className="w-full lg:w-1/2 flex flex-col gap-6">
            <div className="inline-block px-4 py-1.5 bg-blue-100 dark:bg-blue-500/10 border border-blue-200 dark:border-blue-500/30 rounded-full text-primary font-medium text-sm w-max mb-2">
              About Us
            </div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-foreground leading-tight">
              Your Car. <br/> Your Journey. <br/> Your Freedom.
            </h1>
            
            <p className="text-muted-foreground text-lg leading-relaxed mt-4">
              Crazy Fleets is a premium self-drive car sharing platform based in Dharuhera, Haryana. We offer multiple car options for customers who want the freedom to drive on their own terms.
            </p>
            <p className="text-muted-foreground text-lg leading-relaxed">
              Whether you are planning a weekend getaway, need a reliable vehicle for business trips, or simply want to experience the thrill of driving a premium car, our diverse fleet is meticulously maintained to ensure your safety and comfort.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mt-8">
              {[
                "Located in Dharuhera, NH8",
                "Flexible self-drive options",
                "Multiple vehicle choices",
                "Transparent Pricing",
                "Premium customer support",
                "Well-maintained fleet"
              ].map((item, i) => (
                <div key={i} className="flex items-center gap-3">
                  <div className="w-6 h-6 rounded-full bg-blue-500/20 flex items-center justify-center shrink-0">
                    <CheckCircle2 className="w-4 h-4 text-primary" />
                  </div>
                  <span className="text-slate-200 font-medium">{item}</span>
                </div>
              ))}
            </div>

            <div className="mt-10">
              <Link
                href="/cars"
                className="px-8 py-4 bg-foreground text-background font-semibold rounded-xl inline-block hover:opacity-90 transition-all hover:scale-105"
              >
                View Our Fleet
              </Link>
            </div>
          </div>
        </div>

      </div>
    </div>
  );
}
