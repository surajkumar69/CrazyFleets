import Image from "next/image";
import Link from "next/link";
import { cars } from "@/lib/data";
import { Users, Fuel, Settings } from "lucide-react";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Our Fleet | Crazy Fleets",
  description: "Browse our premium fleet of self-drive cars including Hatchbacks, Sedans, and SUVs.",
};

export default function CarsPage() {
  return (
    <div className="pt-32 pb-24 min-h-screen bg-[#0a0f1c]">
      <div className="container mx-auto px-4 md:px-6">
        <div className="mb-12">
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">Our Fleet</h1>
          <p className="text-slate-400 text-lg">Select a car that fits your journey.</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {cars.map((car) => (
            <div key={car.id} className="glass-card group overflow-hidden border border-white/5 flex flex-col">
              <div className="relative h-64 w-full overflow-hidden bg-slate-900">
                <Image 
                  src={car.image_url} 
                  alt={car.name} 
                  fill 
                  className="object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute top-4 right-4 px-3 py-1 bg-black/60 backdrop-blur-md rounded-full text-xs font-semibold text-white border border-white/10">
                  {car.category}
                </div>
              </div>
              
              <div className="p-6 flex-1 flex flex-col">
                <div className="flex justify-between items-start mb-4">
                  <div>
                    <h3 className="text-2xl font-bold text-white mb-1">{car.name}</h3>
                    <p className="text-sm text-blue-400 font-medium">Self Drive</p>
                  </div>
                  <div className="text-right">
                    <p className="text-sm text-slate-400">Price</p>
                    <p className="font-semibold text-white">Contact Us</p>
                  </div>
                </div>

                <div className="grid grid-cols-3 gap-2 mb-6 border-y border-white/10 py-4 mt-auto">
                  <div className="flex flex-col items-center gap-1">
                    <Settings className="w-5 h-5 text-slate-400" />
                    <span className="text-xs text-slate-300">{car.transmission.split("/")[0]}</span>
                  </div>
                  <div className="flex flex-col items-center gap-1 border-x border-white/10">
                    <Fuel className="w-5 h-5 text-slate-400" />
                    <span className="text-xs text-slate-300">{car.fuel_type}</span>
                  </div>
                  <div className="flex flex-col items-center gap-1">
                    <Users className="w-5 h-5 text-slate-400" />
                    <span className="text-xs text-slate-300">{car.seating_capacity} Seats</span>
                  </div>
                </div>

                <div className="flex gap-3">
                  <Link 
                    href={`/cars/${car.id}`}
                    className="flex-1 py-3 glass rounded-xl text-center font-medium text-white hover:bg-white/10 transition-colors"
                  >
                    View Details
                  </Link>
                  <Link 
                    href={`https://wa.me/919350522272?text=${encodeURIComponent(`Hello Crazy Fleets, I want to book the ${car.name}. Please share availability and pricing.`)}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex-1 py-3 bg-white text-black rounded-xl text-center font-bold hover:bg-slate-200 transition-colors"
                  >
                    Book Now
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
