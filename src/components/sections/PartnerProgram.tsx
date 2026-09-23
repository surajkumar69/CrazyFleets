import Link from "next/link";
import Image from "next/image";
import { Handshake, BadgeIndianRupee, LineChart } from "lucide-react";

export default function PartnerProgram() {
  const benefits = [
    {
      icon: Handshake,
      title: "Hassle-Free Management",
      desc: "We handle bookings, verifications, and customer support."
    },
    {
      icon: BadgeIndianRupee,
      title: "Earn Extra Income",
      desc: "Turn your idle car into a consistent money-making asset."
    },
    {
      icon: LineChart,
      title: "Grow with Us",
      desc: "Join a fast-growing premium self-drive network."
    }
  ];

  return (
    <section className="py-24 bg-muted border-t border-card-border relative overflow-hidden">
      <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-blue-500/10 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2"></div>
      
      <div className="container mx-auto px-4 md:px-6 relative z-10">
        <div className="flex flex-col lg:flex-row items-center gap-16">
          
          <div className="w-full lg:w-1/2 flex flex-col gap-8">
            <div>
              <span className="text-primary font-bold tracking-wider uppercase text-sm mb-2 block">Partner Program</span>
              <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
                Earn with Your Car. <br />Grow with Crazy Fleets.
              </h2>
              <p className="text-lg text-muted-foreground max-w-lg">
                Anyone can earn money from their car by listing it on the Crazy Fleets platform. Add your car, let us manage the bookings, and generate additional income from your vehicle.
              </p>
            </div>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              {benefits.map((benefit, index) => (
                <div key={index} className="flex gap-4 items-start">
                  <div className="w-12 h-12 rounded-xl bg-blue-100 dark:bg-blue-500/10 flex items-center justify-center shrink-0 border border-blue-200 dark:border-blue-500/30">
                    <benefit.icon className="w-5 h-5 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-foreground mb-1">{benefit.title}</h3>
                    <p className="text-sm text-muted-foreground">{benefit.desc}</p>
                  </div>
                </div>
              ))}
            </div>

            <div>
              <Link 
                href="https://wa.me/919350522272?text=Hello%20Crazy%20Fleets,%20I%20want%20to%20list%20my%20car%20in%20the%20Partner%20Program."
                target="_blank"
                className="inline-flex items-center justify-center px-8 py-4 bg-foreground text-background font-bold rounded-xl hover:opacity-90 transition-all shadow-lg"
              >
                Join Partner Program
              </Link>
            </div>
          </div>

          <div className="w-full lg:w-1/2 relative">
            <div className="aspect-[4/3] rounded-3xl overflow-hidden shadow-2xl border border-card-border relative">
              <Image 
                src="/images/hero_highway.jpg" 
                alt="Crazy Fleets Partner Program"
                fill
                className="object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent flex flex-col justify-end p-8">
                <div className="glass-card p-6 border-white/20 !bg-white/10 !backdrop-blur-xl">
                  <p className="text-white font-medium text-lg mb-1">"Listing my car with Crazy Fleets was the best decision. It pays for its own EMI!"</p>
                  <p className="text-blue-300 text-sm font-semibold">— Rahul S., Partner</p>
                </div>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
