"use client";

import { useState } from "react";
import { Car } from "@/lib/data";
import { Calendar, Clock, MapPin, User, Phone, Mail, FileText } from "lucide-react";

export default function BookingForm({ car }: { car: Car }) {
  const [step, setStep] = useState(1);
  const [formData, setFormData] = useState({
    pickupDate: "",
    pickupTime: "",
    returnDate: "",
    returnTime: "",
    name: "",
    phone: "",
    email: "",
    pickupLocation: "Bestech City Centre, Dharuhera",
    returnLocation: "Bestech City Centre, Dharuhera",
    message: ""
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleWhatsAppBooking = () => {
    const text = `Hello Crazy Fleets,
I want to book a self-drive car.

Car: ${car.name}
Pickup Date: ${formData.pickupDate}
Pickup Time: ${formData.pickupTime}
Return Date: ${formData.returnDate}
Return Time: ${formData.returnTime}
Name: ${formData.name}
Phone: ${formData.phone}

Please share availability and pricing.`;

    const encodedText = encodeURIComponent(text);
    window.open(`https://wa.me/919350522272?text=${encodedText}`, '_blank');
  };

  const isStep2Valid = formData.pickupDate && formData.pickupTime;
  const isStep3Valid = formData.returnDate && formData.returnTime;
  const isStep4Valid = formData.name && formData.phone && formData.email;

  return (
    <div className="glass-card p-6 md:p-8 border border-white/10 sticky top-32">
      <h3 className="text-2xl font-bold text-white mb-6">Book This Car</h3>

      {/* Progress Bar */}
      <div className="flex gap-2 mb-8">
        {[2, 3, 4, 5].map((s) => (
          <div 
            key={s} 
            className={`h-1.5 flex-1 rounded-full transition-colors ${
              step >= s - 1 ? "bg-blue-500" : "bg-white/10"
            }`}
          />
        ))}
      </div>

      {step === 1 && (
        <div className="animate-in fade-in slide-in-from-right-4">
          <h4 className="text-lg font-medium text-white mb-4">Step 1: Pickup Details</h4>
          <div className="space-y-4">
            <div>
              <label className="text-sm font-medium text-slate-300 block mb-2">Pickup Date</label>
              <div className="relative">
                <Calendar className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-400" />
                <input 
                  type="date" 
                  name="pickupDate"
                  value={formData.pickupDate}
                  onChange={handleInputChange}
                  className="w-full bg-slate-900/50 border border-white/10 rounded-xl py-3 pl-10 pr-4 text-white text-sm focus:outline-none focus:border-blue-500 [color-scheme:dark]" 
                />
              </div>
            </div>
            <div>
              <label className="text-sm font-medium text-slate-300 block mb-2">Pickup Time</label>
              <div className="relative">
                <Clock className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-400" />
                <input 
                  type="time" 
                  name="pickupTime"
                  value={formData.pickupTime}
                  onChange={handleInputChange}
                  className="w-full bg-slate-900/50 border border-white/10 rounded-xl py-3 pl-10 pr-4 text-white text-sm focus:outline-none focus:border-blue-500 [color-scheme:dark]" 
                />
              </div>
            </div>
            <button 
              onClick={() => setStep(2)}
              disabled={!isStep2Valid}
              className="w-full py-4 mt-4 bg-white text-black font-bold rounded-xl disabled:opacity-50 transition-all hover:bg-slate-200"
            >
              Next Step
            </button>
          </div>
        </div>
      )}

      {step === 2 && (
        <div className="animate-in fade-in slide-in-from-right-4">
          <h4 className="text-lg font-medium text-white mb-4">Step 2: Return Details</h4>
          <div className="space-y-4">
            <div>
              <label className="text-sm font-medium text-slate-300 block mb-2">Return Date</label>
              <div className="relative">
                <Calendar className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-400" />
                <input 
                  type="date" 
                  name="returnDate"
                  value={formData.returnDate}
                  onChange={handleInputChange}
                  className="w-full bg-slate-900/50 border border-white/10 rounded-xl py-3 pl-10 pr-4 text-white text-sm focus:outline-none focus:border-blue-500 [color-scheme:dark]" 
                />
              </div>
            </div>
            <div>
              <label className="text-sm font-medium text-slate-300 block mb-2">Return Time</label>
              <div className="relative">
                <Clock className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-400" />
                <input 
                  type="time" 
                  name="returnTime"
                  value={formData.returnTime}
                  onChange={handleInputChange}
                  className="w-full bg-slate-900/50 border border-white/10 rounded-xl py-3 pl-10 pr-4 text-white text-sm focus:outline-none focus:border-blue-500 [color-scheme:dark]" 
                />
              </div>
            </div>
            <div className="flex gap-4 pt-4">
              <button 
                onClick={() => setStep(1)}
                className="w-1/3 py-4 glass text-white font-medium rounded-xl hover:bg-white/10 transition-colors"
              >
                Back
              </button>
              <button 
                onClick={() => setStep(3)}
                disabled={!isStep3Valid}
                className="w-2/3 py-4 bg-white text-black font-bold rounded-xl disabled:opacity-50 hover:bg-slate-200 transition-colors"
              >
                Next Step
              </button>
            </div>
          </div>
        </div>
      )}

      {step === 3 && (
        <div className="animate-in fade-in slide-in-from-right-4">
          <h4 className="text-lg font-medium text-white mb-4">Step 3: Customer Details</h4>
          <div className="space-y-4">
            <div>
              <div className="relative">
                <User className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-400" />
                <input 
                  type="text" 
                  name="name"
                  placeholder="Full Name"
                  value={formData.name}
                  onChange={handleInputChange}
                  className="w-full bg-slate-900/50 border border-white/10 rounded-xl py-3 pl-10 pr-4 text-white text-sm focus:outline-none focus:border-blue-500" 
                />
              </div>
            </div>
            <div>
              <div className="relative">
                <Phone className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-400" />
                <input 
                  type="tel" 
                  name="phone"
                  placeholder="Mobile Number"
                  value={formData.phone}
                  onChange={handleInputChange}
                  className="w-full bg-slate-900/50 border border-white/10 rounded-xl py-3 pl-10 pr-4 text-white text-sm focus:outline-none focus:border-blue-500" 
                />
              </div>
            </div>
            <div>
              <div className="relative">
                <Mail className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-400" />
                <input 
                  type="email" 
                  name="email"
                  placeholder="Email Address"
                  value={formData.email}
                  onChange={handleInputChange}
                  className="w-full bg-slate-900/50 border border-white/10 rounded-xl py-3 pl-10 pr-4 text-white text-sm focus:outline-none focus:border-blue-500" 
                />
              </div>
            </div>
            <div>
              <div className="relative">
                <FileText className="absolute left-3 top-4 w-4 h-4 text-slate-400" />
                <textarea 
                  name="message"
                  placeholder="Any specific requests? (Optional)"
                  value={formData.message}
                  onChange={handleInputChange}
                  rows={3}
                  className="w-full bg-slate-900/50 border border-white/10 rounded-xl py-3 pl-10 pr-4 text-white text-sm focus:outline-none focus:border-blue-500 resize-none" 
                />
              </div>
            </div>
            <div className="flex gap-4 pt-2">
              <button 
                onClick={() => setStep(2)}
                className="w-1/3 py-4 glass text-white font-medium rounded-xl hover:bg-white/10 transition-colors"
              >
                Back
              </button>
              <button 
                onClick={() => setStep(4)}
                disabled={!isStep4Valid}
                className="w-2/3 py-4 bg-white text-black font-bold rounded-xl disabled:opacity-50 hover:bg-slate-200 transition-colors"
              >
                Review Booking
              </button>
            </div>
          </div>
        </div>
      )}

      {step === 4 && (
        <div className="animate-in fade-in slide-in-from-right-4">
          <h4 className="text-lg font-medium text-white mb-4">Step 4: Booking Summary</h4>
          
          <div className="bg-slate-900/50 border border-white/10 rounded-xl p-5 mb-6 text-sm">
            <div className="flex justify-between border-b border-white/10 pb-3 mb-3">
              <span className="text-slate-400">Vehicle</span>
              <span className="text-white font-medium">{car.name}</span>
            </div>
            <div className="flex justify-between border-b border-white/10 pb-3 mb-3">
              <span className="text-slate-400">Pickup</span>
              <span className="text-white text-right">{formData.pickupDate} <br/> {formData.pickupTime}</span>
            </div>
            <div className="flex justify-between border-b border-white/10 pb-3 mb-3">
              <span className="text-slate-400">Return</span>
              <span className="text-white text-right">{formData.returnDate} <br/> {formData.returnTime}</span>
            </div>
            <div className="flex justify-between border-b border-white/10 pb-3 mb-3">
              <span className="text-slate-400">Customer</span>
              <span className="text-white text-right">{formData.name} <br/> {formData.phone}</span>
            </div>
            <div className="flex justify-between pt-2">
              <span className="text-slate-400 text-lg">Total Price</span>
              <span className="text-white text-lg font-bold">Contact for Price</span>
            </div>
          </div>

          <div className="flex flex-col gap-3">
            <button 
              onClick={handleWhatsAppBooking}
              className="w-full py-4 bg-[#25D366] text-white font-bold rounded-xl shadow-lg shadow-[#25D366]/20 hover:bg-[#20b858] transition-colors"
            >
              Confirm via WhatsApp
            </button>
            <button 
              onClick={() => setStep(3)}
              className="w-full py-3 glass text-white font-medium rounded-xl hover:bg-white/10 transition-colors"
            >
              Edit Details
            </button>
          </div>
        </div>
      )}
    </div>
  );
}
