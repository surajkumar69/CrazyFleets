"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { Calendar, MapPin, Clock, Car } from "lucide-react";

export default function Hero() {
  const [formData, setFormData] = useState({
    pickupDate: "",
    pickupTime: "",
    returnDate: "",
    returnTime: "",
    carType: "Any",
    pickupLocation: "Bestech City Centre, Dharuhera"
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleWhatsAppSearch = (e: React.FormEvent) => {
    e.preventDefault();
    const text = `Hello Crazy Fleets,
I want to inquire about self-drive cars.

Car Type: ${formData.carType}
Pickup Date: ${formData.pickupDate}
Pickup Time: ${formData.pickupTime}
Return Date: ${formData.returnDate}
Return Time: ${formData.returnTime}

Please share the available cars and pricing.`;

    const encodedText = encodeURIComponent(text);
    window.open(`https://wa.me/919350522272?text=${encodedText}`, '_blank');
  };

  return (
    <section className="relative min-h-[90vh] flex items-center justify-center pt-20 overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <Image
          src="/images/hero_highway.jpg"
          alt="Premium self-drive car on Indian highway"
          fill
          className="object-cover object-center"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-r from-background/90 via-background/60 to-transparent"></div>
        <div className="absolute inset-0 bg-gradient-to-t from-background via-transparent to-transparent"></div>
      </div>

      <div className="container mx-auto px-4 md:px-6 relative z-10 flex flex-col lg:flex-row items-center justify-between gap-12">
        
        {/* Text Content */}
        <div className="w-full lg:w-1/2 flex flex-col gap-6 py-10 lg:py-0">
          <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold text-foreground leading-tight tracking-tight">
            Rent Your Car.<br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-blue-500 dark:from-blue-400 dark:to-slate-200">
              Drive Your Way.
            </span>
          </h1>
          <h2 className="text-xl md:text-2xl text-muted-foreground font-medium">
            Premium self-drive cars for every journey.
          </h2>
          <p className="text-muted-foreground text-lg max-w-xl">
            Choose your car, pick your dates and enjoy the freedom to drive on your own terms.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 pt-4">
            <Link
              href="/cars"
              className="px-8 py-4 bg-foreground text-background font-semibold rounded-full text-center hover:opacity-90 transition-all hover:scale-105"
            >
              Explore Cars
            </Link>
            <Link
              href="https://wa.me/919350522272?text=Hello%20Crazy%20Fleets,%20I%20want%20to%20book%20a%20self-drive%20car."
              target="_blank"
              rel="noopener noreferrer"
              className="px-8 py-4 glass text-foreground font-semibold rounded-full text-center hover:bg-accent transition-all border border-card-border"
            >
              Book on WhatsApp
            </Link>
          </div>
        </div>

        {/* Booking Card */}
        <div className="w-full lg:w-[450px]">
          <div className="glass-card p-8 accent-glow relative overflow-hidden">
            <div className="absolute top-0 right-0 w-32 h-32 bg-blue-500/20 rounded-full blur-3xl"></div>
            <h3 className="text-2xl font-bold text-foreground mb-6">Quick Search</h3>
            
            <form className="flex flex-col gap-4 relative z-10" onSubmit={handleWhatsAppSearch}>
              
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="space-y-2">
                  <label className="text-sm font-medium text-muted-foreground">Location</label>
                  <div className="relative">
                    <MapPin className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground" />
                    <select 
                      name="pickupLocation"
                      value={formData.pickupLocation}
                      onChange={handleInputChange}
                      className="w-full bg-muted border border-card-border rounded-xl py-3 pl-9 pr-4 text-foreground text-sm appearance-none focus:outline-none focus:border-blue-500"
                    >
                      <option value="Dharuhera">Dharuhera</option>
                    </select>
                  </div>
                </div>

                <div className="space-y-2">
                  <label className="text-sm font-medium text-muted-foreground">Car Type</label>
                  <div className="relative">
                    <Car className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground" />
                    <select 
                      name="carType"
                      value={formData.carType}
                      onChange={handleInputChange}
                      className="w-full bg-muted border border-card-border rounded-xl py-3 pl-9 pr-4 text-foreground text-sm appearance-none focus:outline-none focus:border-blue-500"
                    >
                      <option value="Any">Any Car</option>
                      <option value="Hatchback">Hatchback</option>
                      <option value="Sedan">Sedan</option>
                      <option value="SUV">SUV</option>
                      <option value="Luxury">Luxury</option>
                    </select>
                  </div>
                </div>
              </div>

              <div className="grid grid-cols-2 gap-4">
                <div className="space-y-2">
                  <label className="text-sm font-medium text-muted-foreground">Pickup Date</label>
                  <div className="relative">
                    <Calendar className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground" />
                    <input 
                      type="date" 
                      name="pickupDate"
                      required
                      value={formData.pickupDate}
                      onChange={handleInputChange}
                      className="w-full bg-muted border border-card-border rounded-xl py-3 pl-9 pr-2 text-foreground text-sm focus:outline-none focus:border-blue-500" 
                    />
                  </div>
                </div>
                <div className="space-y-2">
                  <label className="text-sm font-medium text-muted-foreground">Time</label>
                  <div className="relative">
                    <Clock className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground" />
                    <input 
                      type="time" 
                      name="pickupTime"
                      required
                      value={formData.pickupTime}
                      onChange={handleInputChange}
                      className="w-full bg-muted border border-card-border rounded-xl py-3 pl-9 pr-2 text-foreground text-sm focus:outline-none focus:border-blue-500" 
                    />
                  </div>
                </div>
              </div>

              <div className="grid grid-cols-2 gap-4">
                <div className="space-y-2">
                  <label className="text-sm font-medium text-muted-foreground">Return Date</label>
                  <div className="relative">
                    <Calendar className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground" />
                    <input 
                      type="date" 
                      name="returnDate"
                      required
                      value={formData.returnDate}
                      onChange={handleInputChange}
                      className="w-full bg-muted border border-card-border rounded-xl py-3 pl-9 pr-2 text-foreground text-sm focus:outline-none focus:border-blue-500" 
                    />
                  </div>
                </div>
                <div className="space-y-2">
                  <label className="text-sm font-medium text-muted-foreground">Time</label>
                  <div className="relative">
                    <Clock className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground" />
                    <input 
                      type="time" 
                      name="returnTime"
                      required
                      value={formData.returnTime}
                      onChange={handleInputChange}
                      className="w-full bg-muted border border-card-border rounded-xl py-3 pl-9 pr-2 text-foreground text-sm focus:outline-none focus:border-blue-500" 
                    />
                  </div>
                </div>
              </div>

              <button
                type="submit"
                className="w-full py-4 mt-2 bg-gradient-to-r from-blue-600 to-blue-800 text-white font-bold rounded-xl text-center shadow-lg hover:shadow-blue-500/25 transition-all"
              >
                Check Cars
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
