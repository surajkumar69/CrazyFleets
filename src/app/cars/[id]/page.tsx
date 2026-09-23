import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { cars } from "@/lib/data";
import { Users, Fuel, Settings, Check, AlertCircle } from "lucide-react";
import BookingForm from "@/components/sections/BookingForm";

export function generateMetadata({ params }: { params: { id: string } }) {
  const car = cars.find(c => c.id === params.id);
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

export default function CarDetailsPage({ params }: { params: { id: string } }) {
  const car = cars.find(c => c.id === params.id);

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
    <div className="pt-32 pb-24 bg-[#0a0f1c] min-h-screen">
      <div className="container mx-auto px-4 md:px-6">
        
        {/* Breadcrumb */}
        <div className="flex items-center gap-2 text-sm text-slate-400 mb-8">
          <Link href="/" className="hover:text-white transition-colors">Home</Link>
          <span>/</span>
          <Link href="/cars" className="hover:text-white transition-colors">Cars</Link>
          <span>/</span>
          <span className="text-white">{car.name}</span>
        </div>

        <div className="flex flex-col lg:flex-row gap-12">
          
          {/* Main Content */}
          <div className="w-full lg:w-2/3">
            
            {/* Gallery Image */}
            <div className="relative h-[400px] md:h-[500px] w-full rounded-3xl overflow-hidden border border-white/10 mb-10">
              <Image 
                src={car.image_url} 
                alt={car.name}
                fill
                className="object-cover"
                priority
              />
              <div className="absolute top-6 right-6 px-4 py-2 bg-black/60 backdrop-blur-md rounded-full text-sm font-semibold text-white border border-white/10">
                {car.category}
              </div>
            </div>

            {/* Header */}
            <div className="flex justify-between items-start mb-8">
              <div>
                <h1 className="text-4xl md:text-5xl font-bold text-white mb-2">{car.name}</h1>
                <p className="text-blue-400 font-medium text-lg">Available for Self-Drive</p>
              </div>
            </div>

            {/* Key Specs */}
            <div className="grid grid-cols-3 md:grid-cols-4 gap-4 mb-12">
              <div className="glass-card p-4 flex flex-col items-center justify-center text-center gap-2 border border-white/5">
                <Settings className="w-6 h-6 text-slate-400" />
                <span className="text-sm font-medium text-slate-200">{car.transmission}</span>
              </div>
              <div className="glass-card p-4 flex flex-col items-center justify-center text-center gap-2 border border-white/5">
                <Fuel className="w-6 h-6 text-slate-400" />
                <span className="text-sm font-medium text-slate-200">{car.fuel_type}</span>
              </div>
              <div className="glass-card p-4 flex flex-col items-center justify-center text-center gap-2 border border-white/5">
                <Users className="w-6 h-6 text-slate-400" />
                <span className="text-sm font-medium text-slate-200">{car.seating_capacity} Seats</span>
              </div>
            </div>

            {/* Features */}
            <div className="mb-12">
              <h2 className="text-2xl font-bold text-white mb-6">Vehicle Features</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {features.map((feature, i) => (
                  <div key={i} className="flex items-center gap-3">
                    <div className="w-6 h-6 rounded-full bg-blue-500/20 flex items-center justify-center shrink-0">
                      <Check className="w-3.5 h-3.5 text-blue-400" />
                    </div>
                    <span className="text-slate-300">{feature}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Terms */}
            <div className="glass-card p-6 md:p-8 border border-white/5 mb-8 lg:mb-0">
              <h2 className="text-xl font-bold text-white mb-6">Important Information</h2>
              
              <div className="space-y-6">
                <div>
                  <h4 className="flex items-center gap-2 text-white font-medium mb-2">
                    <AlertCircle className="w-4 h-4 text-blue-400" /> Required Documents
                  </h4>
                  <p className="text-sm text-slate-400 pl-6 leading-relaxed">
                    Original Driving License, Aadhar Card / Passport, and a live photo check at the time of pickup.
                  </p>
                </div>
                <div>
                  <h4 className="flex items-center gap-2 text-white font-medium mb-2">
                    <AlertCircle className="w-4 h-4 text-blue-400" /> Security Deposit
                  </h4>
                  <p className="text-sm text-slate-400 pl-6 leading-relaxed">
                    A fully refundable security deposit is required before handing over the keys. Will be refunded within 24-48 hours after drop-off.
                  </p>
                </div>
                <div>
                  <h4 className="flex items-center gap-2 text-white font-medium mb-2">
                    <AlertCircle className="w-4 h-4 text-blue-400" /> Kilometer Policy
                  </h4>
                  <p className="text-sm text-slate-400 pl-6 leading-relaxed">
                    Limited kilometers based on your booking duration. Extra kilometers will be charged per km basis. Contact us for exact limits.
                  </p>
                </div>
              </div>
            </div>

          </div>

          {/* Sidebar / Booking Form */}
          <div className="w-full lg:w-1/3 relative">
            <BookingForm car={car} />
          </div>

        </div>
      </div>
    </div>
  );
}
