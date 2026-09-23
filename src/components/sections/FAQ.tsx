"use client";

import { useState } from "react";
import { ChevronDown } from "lucide-react";

const faqs = [
  {
    question: "What documents are required?",
    answer: "You need a valid driving license (original), Aadhar Card/Passport for ID proof, and a credit card or UPI for the security deposit."
  },
  {
    question: "What is the minimum rental duration?",
    answer: "The minimum rental duration is 12 hours for local use and 24 hours for outstation trips."
  },
  {
    question: "How does self-drive booking work?",
    answer: "Choose your car, select dates, upload documents for verification, pay the booking amount and deposit, then pick up the car from our location."
  },
  {
    question: "Where can I pick up the car?",
    answer: "You can pick up the car from our office at Bestech City Centre, NH8, Jaipur - Delhi Expressway, Dharuhera."
  },
  {
    question: "Can I extend my rental?",
    answer: "Yes, extensions are possible subject to availability. Please inform us at least 4 hours before your booking ends."
  },
  {
    question: "What happens if I return the car late?",
    answer: "Late returns are charged on an hourly basis as per the vehicle category. We recommend returning on time to avoid penalties."
  },
  {
    question: "What is the fuel policy?",
    answer: "We provide cars with a certain fuel level. You must return it with the same level, or the difference will be charged from your deposit."
  },
  {
    question: "What is the security deposit?",
    answer: "A refundable security deposit is required before pickup. The amount varies based on the car model."
  },
  {
    question: "Can I cancel my booking?",
    answer: "Yes, you can cancel. Cancellations made 24 hours prior are fully refunded. Check our cancellation policy for more details."
  },
  {
    question: "Are multiple cars available?",
    answer: "Yes, we have a diverse fleet including hatchbacks, sedans, and SUVs. Check our 'Cars' section for live availability."
  }
];

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <section id="faq" className="py-24 bg-muted border-t border-card-border">
      <div className="container mx-auto px-4 md:px-6 max-w-4xl">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-foreground mb-6">Frequently Asked Questions</h2>
          <p className="text-muted-foreground text-lg">
            Everything you need to know about renting a car with Crazy Fleets.
          </p>
        </div>

        <div className="flex flex-col gap-4">
          {faqs.map((faq, index) => (
            <div 
              key={index}
              className={`glass rounded-2xl overflow-hidden transition-all duration-300 ${
                openIndex === index ? 'border-blue-500/50' : 'border-card-border hover:border-card-border'
              }`}
            >
              <button
                className="w-full px-6 py-5 flex items-center justify-between text-left"
                onClick={() => setOpenIndex(openIndex === index ? null : index)}
              >
                <span className="text-lg font-medium text-foreground pr-8">{faq.question}</span>
                <ChevronDown 
                  className={`w-5 h-5 text-primary shrink-0 transition-transform duration-300 ${
                    openIndex === index ? 'rotate-180' : ''
                  }`} 
                />
              </button>
              
              <div 
                className={`px-6 overflow-hidden transition-all duration-300 ease-in-out ${
                  openIndex === index ? 'max-h-40 pb-5 opacity-100' : 'max-h-0 opacity-0'
                }`}
              >
                <p className="text-muted-foreground">{faq.answer}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
