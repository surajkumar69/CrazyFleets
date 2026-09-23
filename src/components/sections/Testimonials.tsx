import { Star } from "lucide-react";

export default function Testimonials() {
  const reviews = [
    {
      name: "Rahul Sharma",
      role: "Self-Drive Customer",
      review: "Great experience with the car and booking process. The Scorpio N was in perfect condition and the pickup was completely hassle-free.",
      rating: 5
    },
    {
      name: "Amit Patel",
      role: "Self-Drive Customer",
      review: "Rented a Baleno for a weekend trip. Transparent pricing, no hidden charges, and excellent customer support. Highly recommended!",
      rating: 5
    },
    {
      name: "Vikram Singh",
      role: "Self-Drive Customer",
      review: "The Thar made our mountain trip unforgettable. Bestech City Centre location is very convenient right on the highway.",
      rating: 5
    }
  ];

  return (
    <section className="py-24 bg-[#0a0f1c]">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-white mb-6">What Our Customers Say</h2>
          <p className="text-slate-400 text-lg max-w-2xl mx-auto">
            Real experiences from people who chose the freedom to drive with us.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {reviews.map((review, index) => (
            <div key={index} className="glass-card p-8 flex flex-col justify-between">
              <div>
                <div className="flex gap-1 mb-6">
                  {[...Array(review.rating)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 fill-yellow-500 text-yellow-500" />
                  ))}
                </div>
                <p className="text-slate-300 leading-relaxed italic mb-8">
                  &quot;{review.review}&quot;
                </p>
              </div>
              
              <div className="flex items-center gap-4 border-t border-white/10 pt-6">
                <div className="w-12 h-12 rounded-full bg-slate-800 flex items-center justify-center text-xl font-bold text-white">
                  {review.name.charAt(0)}
                </div>
                <div>
                  <h4 className="font-bold text-white">{review.name}</h4>
                  <p className="text-sm text-slate-400">{review.role}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
