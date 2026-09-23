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
    <div className="pt-32 pb-24 min-h-screen bg-background">
      <div className="container mx-auto px-4 md:px-6">
        <div className="mb-12">
          <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-4">Our Fleet</h1>
          <p className="text-muted-foreground text-lg">Select a car that fits your journey.</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {cars.map((car) => (
            <div key={car.id} className="glass-card group overflow-hidden border border-card-border flex flex-col">
              <div className="relative h-64 w-full overflow-hidden bg-muted">
                <Image 
                  src={car.image_url} 
                  alt={car.name} 
                  fill 
                  className="object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute top-4 right-4 px-3 py-1 bg-black/60 backdrop-blur-md rounded-full text-xs font-semibold text-white border border-card-border">
                  {car.category}
                </div>
              </div>
              
              <div className="p-6 flex-1 flex flex-col">
                <div className="flex justify-between items-start mb-4">
                  <div>
                    <h3 className="text-2xl font-bold text-foreground mb-1">{car.name}</h3>
                    <p className="text-sm text-primary font-medium">Self Drive</p>
                  </div>
                  <div className="text-right">
                    <p className="text-sm text-muted-foreground">Price</p>
                    <p className="font-semibold text-foreground">Contact Us</p>
                  </div>
                </div>

                <div className="grid grid-cols-3 gap-2 mb-6 border-y border-card-border py-4 mt-auto">
                  <div className="flex flex-col items-center gap-1">
                    <Settings className="w-5 h-5 text-muted-foreground" />
                    <span className="text-xs text-muted-foreground">{car.transmission.split("/")[0]}</span>
                  </div>
                  <div className="flex flex-col items-center gap-1 border-x border-card-border">
                    <Fuel className="w-5 h-5 text-muted-foreground" />
                    <span className="text-xs text-muted-foreground">{car.fuel_type}</span>
                  </div>
                  <div className="flex flex-col items-center gap-1">
                    <Users className="w-5 h-5 text-muted-foreground" />
                    <span className="text-xs text-muted-foreground">{car.seating_capacity} Seats</span>
                  </div>
                </div>

                <div className="flex gap-3">
                  <Link 
                    href={`/cars/${car.id}`}
                    className="flex-1 py-3 glass rounded-xl text-center font-medium text-foreground hover:bg-accent transition-colors"
                  >
                    View Details
                  </Link>
                  <Link 
                    href={`https://wa.me/919350522272?text=${encodeURIComponent(`Hello Crazy Fleets, I want to book the ${car.name}. Please share availability and pricing.`)}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex-1 py-3 bg-foreground text-background rounded-xl text-center font-bold hover:opacity-90 transition-colors"
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
