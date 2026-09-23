"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { Calendar, MapPin, Clock } from "lucide-react";

export default function Hero() {
  const [formData, setFormData] = useState({
    pickupDate: "",
    pickupTime: "",
    returnDate: "",
    returnTime: "",
    pickupLocation: "Bestech City Centre, Dharuhera"
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleWhatsAppSearch = (e: React.FormEvent) => {
    e.preventDefault();
    const text = `Hello Crazy Fleets,
I want to inquire about self-drive cars.

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
        <div className="absolute inset-0 bg-gradient-to-r from-[#0a0f1c]/90 via-[#0a0f1c]/60 to-transparent"></div>
        <div className="absolute inset-0 bg-gradient-to-t from-[#0a0f1c] via-transparent to-transparent"></div>
      </div>

      <div className="container mx-auto px-4 md:px-6 relative z-10 flex flex-col lg:flex-row items-center justify-between gap-12">
        
        {/* Text Content */}
        <div className="w-full lg:w-1/2 flex flex-col gap-6">
          <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold text-white leading-tight">
            Drive Without <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-slate-200">Limits</span>
          </h1>
          <h2 className="text-xl md:text-2xl text-slate-300 font-medium">
            Premium self-drive cars for every journey.
          </h2>
          <p className="text-slate-400 text-lg max-w-xl">
            Choose your car, pick your dates and enjoy the freedom to drive on your own terms.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 pt-4">
            <Link
              href="/cars"
              className="px-8 py-4 bg-white text-black font-semibold rounded-full text-center hover:bg-slate-200 transition-all hover:scale-105"
            >
              Explore Cars
            </Link>
            <Link
              href="https://wa.me/919350522272?text=Hello%20Crazy%20Fleets,%20I%20want%20to%20book%20a%20self-drive%20car."
              target="_blank"
              rel="noopener noreferrer"
              className="px-8 py-4 glass text-white font-semibold rounded-full text-center hover:bg-white/10 transition-all border border-white/20"
            >
              Book on WhatsApp
            </Link>
          </div>
        </div>

        {/* Booking Card */}
        <div className="w-full lg:w-[450px]">
          <div className="glass-card p-8 accent-glow relative overflow-hidden">
            <div className="absolute top-0 right-0 w-32 h-32 bg-blue-500/20 rounded-full blur-3xl"></div>
            <h3 className="text-2xl font-bold text-white mb-6">Quick Search</h3>
            
            <form className="flex flex-col gap-4 relative z-10" onSubmit={handleWhatsAppSearch}>
              
              <div className="space-y-2">
                <label className="text-sm font-medium text-slate-300">Pickup Location</label>
                <div className="relative">
                  <MapPin className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-slate-400" />
                  <select 
                    name="pickupLocation"
                    value={formData.pickupLocation}
                    onChange={handleInputChange}
                    className="w-full bg-slate-900/50 border border-white/10 rounded-xl py-3 pl-10 pr-4 text-white appearance-none focus:outline-none focus:border-blue-500"
                  >
                    <option value="Bestech City Centre, Dharuhera">Bestech City Centre, Dharuhera</option>
                  </select>
                </div>
              </div>

              <div className="grid grid-cols-2 gap-4">
                <div className="space-y-2">
                  <label className="text-sm font-medium text-slate-300">Pickup Date</label>
                  <div className="relative">
                    <Calendar className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-400" />
                    <input 
                      type="date" 
                      name="pickupDate"
                      required
                      value={formData.pickupDate}
                      onChange={handleInputChange}
                      className="w-full bg-slate-900/50 border border-white/10 rounded-xl py-3 pl-9 pr-2 text-white text-sm focus:outline-none focus:border-blue-500 [color-scheme:dark]" 
                    />
                  </div>
                </div>
                <div className="space-y-2">
                  <label className="text-sm font-medium text-slate-300">Time</label>
                  <div className="relative">
                    <Clock className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-400" />
                    <input 
                      type="time" 
                      name="pickupTime"
                      required
                      value={formData.pickupTime}
                      onChange={handleInputChange}
                      className="w-full bg-slate-900/50 border border-white/10 rounded-xl py-3 pl-9 pr-2 text-white text-sm focus:outline-none focus:border-blue-500 [color-scheme:dark]" 
                    />
                  </div>
                </div>
              </div>

              <div className="grid grid-cols-2 gap-4">
                <div className="space-y-2">
                  <label className="text-sm font-medium text-slate-300">Return Date</label>
                  <div className="relative">
                    <Calendar className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-400" />
                    <input 
                      type="date" 
                      name="returnDate"
                      required
                      value={formData.returnDate}
                      onChange={handleInputChange}
                      className="w-full bg-slate-900/50 border border-white/10 rounded-xl py-3 pl-9 pr-2 text-white text-sm focus:outline-none focus:border-blue-500 [color-scheme:dark]" 
                    />
                  </div>
                </div>
                <div className="space-y-2">
                  <label className="text-sm font-medium text-slate-300">Time</label>
                  <div className="relative">
                    <Clock className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-400" />
                    <input 
                      type="time" 
                      name="returnTime"
                      required
                      value={formData.returnTime}
                      onChange={handleInputChange}
                      className="w-full bg-slate-900/50 border border-white/10 rounded-xl py-3 pl-9 pr-2 text-white text-sm focus:outline-none focus:border-blue-500 [color-scheme:dark]" 
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
