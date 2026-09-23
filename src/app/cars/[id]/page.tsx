import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { cars } from "@/lib/data";
import { Users, Fuel, Settings, Check, AlertCircle } from "lucide-react";
import BookingForm from "@/components/sections/BookingForm";

export async function generateMetadata({ params }: { params: Promise<{ id: string }> }) {
  const resolvedParams = await params;
  const car = cars.find(c => c.id === resolvedParams.id);
  if (!car) return { title: "Car Not Found" };
  
  return {
    title: `${car.name} | Crazy Fleets`,
    description: `Rent ${car.name} self-drive in Dharuhera. Premium condition, easy booking.`,
  };
}

export function generateStaticParams() {
  return cars.map((car) => ({
    id: car.id,
  }));
}

export default async function CarDetailsPage({ params }: { params: Promise<{ id: string }> }) {
  const resolvedParams = await params;
  const car = cars.find(c => c.id === resolvedParams.id);

  if (!car) {
    notFound();
  }

  const features = [
    "Air Conditioning",
    "Power Steering",
    "Power Windows",
    "Bluetooth / USB / AUX",
    "Airbags",
    "ABS",
    "Central Locking",
    "Reverse Camera/Sensors"
  ];

  return (
    <div className="pt-32 pb-24 bg-background min-h-screen">
      <div className="container mx-auto px-4 md:px-6">
        
        {/* Breadcrumb */}
        <div className="flex items-center gap-2 text-sm text-muted-foreground mb-8">
          <Link href="/" className="hover:text-foreground transition-colors">Home</Link>
          <span>/</span>
          <Link href="/cars" className="hover:text-foreground transition-colors">Cars</Link>
          <span>/</span>
          <span className="text-foreground">{car.name}</span>
        </div>

        <div className="flex flex-col lg:flex-row gap-12">
          
          {/* Main Content */}
          <div className="w-full lg:w-2/3">
            
            {/* Gallery Image */}
            <div className="relative h-[400px] md:h-[500px] w-full rounded-3xl overflow-hidden border border-card-border mb-10">
              <Image 
                src={car.image_url} 
                alt={car.name}
                fill
                className="object-cover"
                priority
              />
              <div className="absolute top-6 right-6 px-4 py-2 bg-black/60 backdrop-blur-md rounded-full text-sm font-semibold text-foreground border border-card-border">
                {car.category}
              </div>
            </div>

            {/* Header */}
            <div className="flex justify-between items-start mb-8">
              <div>
                <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-2">{car.name}</h1>
                <p className="text-primary font-medium text-lg">Available for Self-Drive</p>
              </div>
            </div>

            {/* Key Specs */}
            <div className="grid grid-cols-3 md:grid-cols-4 gap-4 mb-12">
              <div className="glass-card p-4 flex flex-col items-center justify-center text-center gap-2 border border-card-border">
                <Settings className="w-6 h-6 text-muted-foreground" />
                <span className="text-sm font-medium text-slate-200">{car.transmission}</span>
              </div>
              <div className="glass-card p-4 flex flex-col items-center justify-center text-center gap-2 border border-card-border">
                <Fuel className="w-6 h-6 text-muted-foreground" />
                <span className="text-sm font-medium text-slate-200">{car.fuel_type}</span>
              </div>
              <div className="glass-card p-4 flex flex-col items-center justify-center text-center gap-2 border border-card-border">
                <Users className="w-6 h-6 text-muted-foreground" />
                <span className="text-sm font-medium text-slate-200">{car.seating_capacity} Seats</span>
              </div>
            </div>

            {/* Features */}
            <div className="mb-12">
              <h2 className="text-2xl font-bold text-foreground mb-6">Vehicle Features</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {features.map((feature, i) => (
                  <div key={i} className="flex items-center gap-3">
                    <div className="w-6 h-6 rounded-full bg-blue-500/20 flex items-center justify-center shrink-0">
                      <Check className="w-3.5 h-3.5 text-primary" />
                    </div>
                    <span className="text-muted-foreground">{feature}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Terms */}
            <div className="glass-card p-6 md:p-8 border border-card-border mb-8 lg:mb-0">
              <h2 className="text-xl font-bold text-foreground mb-6">Important Information</h2>
              
              <div className="space-y-6">
                <div>
                  <h4 className="flex items-center gap-2 text-foreground font-medium mb-2">
                    <AlertCircle className="w-4 h-4 text-primary" /> Required Documents
                  </h4>
                  <p className="text-sm text-muted-foreground pl-6 leading-relaxed">
                    Original Driving License, Aadhar Card / Passport, and a live photo check at the time of pickup.
                  </p>
                </div>
                <div>
                  <h4 className="flex items-center gap-2 text-foreground font-medium mb-2">
                    <AlertCircle className="w-4 h-4 text-primary" /> Security Deposit
                  </h4>
                  <p className="text-sm text-muted-foreground pl-6 leading-relaxed">
                    A fully refundable security deposit is required before handing over the keys. Will be refunded within 24-48 hours after drop-off.
                  </p>
                </div>
                <div>
                  <h4 className="flex items-center gap-2 text-foreground font-medium mb-2">
                    <AlertCircle className="w-4 h-4 text-primary" /> Kilometer Policy
                  </h4>
                  <p className="text-sm text-muted-foreground pl-6 leading-relaxed">
                    Limited kilometers based on your booking duration. Extra kilometers will be charged per km basis. Contact us for exact limits.
                  </p>
                </div>
              </div>
            </div>

          </div>

          {/* Sidebar / Booking Form */}
          <div className="w-full lg:w-1/3 flex flex-col gap-6 relative">
            <BookingForm car={car} />
            
            <div className="glass-card p-6 border border-card-border flex flex-col gap-4">
              <h3 className="text-lg font-bold text-foreground">Need Help?</h3>
              <p className="text-sm text-muted-foreground mb-2">Have questions about this {car.name}? Call us directly.</p>
              <Link 
                href="tel:+919350522272"
                className="w-full py-4 bg-muted text-foreground border border-card-border font-bold rounded-xl text-center hover:bg-accent transition-colors flex items-center justify-center gap-2"
              >
                Call +91 9350522272
              </Link>
              <Link 
                href="/cars"
                className="w-full py-4 bg-transparent text-foreground border border-card-border font-medium rounded-xl text-center hover:bg-accent transition-colors mt-2"
              >
                Back to All Cars
              </Link>
            </div>
          </div>

        </div>
      </div>
    </div>
  );
}
