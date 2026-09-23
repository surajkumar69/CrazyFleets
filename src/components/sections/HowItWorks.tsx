import Image from "next/image";
import { MousePointerClick, CalendarDays, ShieldCheck, Key } from "lucide-react";

export default function HowItWorks() {
  const steps = [
    {
      num: "01",
      title: "Choose Your Car",
      desc: "Browse our premium fleet and select the car that suits your journey.",
      icon: MousePointerClick
    },
    {
      num: "02",
      title: "Select Your Dates",
      desc: "Pick your pickup and return dates with our flexible booking system.",
      icon: CalendarDays
    },
    {
      num: "03",
      title: "Complete Booking & Verification",
      desc: "Provide your details and complete the quick verification process.",
      icon: ShieldCheck
    },
    {
      num: "04",
      title: "Pick Up & Drive",
      desc: "Pick up your car from our location and hit the road.",
      icon: Key
    }
  ];

  return (
    <section id="how-it-works" className="py-24 bg-muted border-y border-card-border relative">
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex flex-col lg:flex-row gap-16 items-center">
          
          {/* Image Side */}
          <div className="w-full lg:w-1/2 relative h-[500px] rounded-3xl overflow-hidden border border-card-border shadow-2xl">
            <Image 
              src="/images/how_it_works.jpg"
              alt="Unlock your car with Crazy Fleets"
              fill
              className="object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-r from-black/60 dark:from-[#050813]/80 via-transparent to-transparent"></div>
          </div>

          {/* Content Side */}
          <div className="w-full lg:w-1/2">
            <h2 className="text-4xl font-bold text-foreground mb-4">How It Works</h2>
            <p className="text-muted-foreground text-lg mb-12">
              Renting a premium self-drive car is easy, fast, and completely hassle-free with Crazy Fleets.
            </p>

            <div className="flex flex-col gap-8">
              {steps.map((step, index) => (
                <div key={index} className="flex gap-6 items-start relative">
                  {/* Connector Line */}
                  {index !== steps.length - 1 && (
                    <div className="absolute left-7 top-14 bottom-[-30px] w-[1px] bg-accent"></div>
                  )}
                  
                  <div className="w-14 h-14 rounded-full glass border border-blue-200 dark:border-blue-500/30 flex items-center justify-center shrink-0 shadow-[0_0_15px_rgba(59,130,246,0.2)] z-10">
                    <step.icon className="w-6 h-6 text-primary" />
                  </div>
                  
                  <div className="pt-2">
                    <div className="flex items-center gap-3 mb-2">
                      <span className="text-sm font-bold text-blue-500">{step.num}</span>
                      <h3 className="text-xl font-bold text-foreground">{step.title}</h3>
                    </div>
                    <p className="text-muted-foreground leading-relaxed">
                      {step.desc}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
