import { CheckCircle2 } from "lucide-react";

export default function WhyChooseUs() {
  const features = [
    "Wide Range of Cars",
    "Self-Drive Freedom",
    "Well-Maintained Vehicles",
    "Transparent Pricing",
    "Easy Booking",
    "Flexible Rental Options",
    "Quick Customer Support",
    "Convenient Location"
  ];

  return (
    <section id="why-us" className="py-24 bg-background">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">Why Choose Crazy Fleets</h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            We provide a premium self-drive experience tailored for those who love the road.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-5xl mx-auto">
          {features.map((feature, index) => (
            <div 
              key={index} 
              className="glass-card p-6 border border-card-border hover:border-blue-500/50 flex flex-col items-center text-center gap-4 group"
            >
              <div className="w-12 h-12 rounded-full bg-blue-100 dark:bg-blue-100 dark:bg-blue-500/10 flex items-center justify-center group-hover:scale-110 transition-transform">
                <CheckCircle2 className="w-6 h-6 text-primary" />
              </div>
              <h3 className="text-lg font-semibold text-foreground">{feature}</h3>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
