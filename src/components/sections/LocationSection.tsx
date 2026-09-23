import Link from "next/link";
import { MapPin, PhoneCall, MessageCircle, Navigation } from "lucide-react";

export default function LocationSection() {
  return (
    <section className="py-24 bg-muted border-y border-card-border relative">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-foreground mb-6">Find Crazy Fleets</h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Conveniently located for an easy pickup and drop-off experience.
          </p>
        </div>

        <div className="flex flex-col lg:flex-row gap-8 max-w-6xl mx-auto">
          
          {/* Info Card */}
          <div className="w-full lg:w-1/3 glass-card p-8 flex flex-col justify-between">
            <div>
              <div className="w-16 h-16 rounded-2xl bg-blue-100 dark:bg-blue-500/10 flex items-center justify-center mb-8">
                <MapPin className="w-8 h-8 text-primary" />
              </div>
              <h3 className="text-2xl font-bold text-foreground mb-4">Our Office</h3>
              <p className="text-muted-foreground leading-relaxed mb-8">
                Bestech City Centre, <br />
                NH8, Jaipur - Delhi Expressway, <br />
                Dharuhera, Haryana 123110
              </p>
            </div>
            
            <div className="flex flex-col gap-4">
              <Link
                href="https://maps.app.goo.gl/VW69US7f91dA79vRA?g_st=ac"
                target="_blank"
                rel="noopener noreferrer"
                className="w-full py-4 bg-foreground text-background font-bold rounded-xl flex items-center justify-center gap-2 hover:opacity-90 transition-colors"
              >
                <Navigation className="w-5 h-5" /> Get Directions
              </Link>
              <div className="flex gap-4">
                <Link
                  href="tel:+919350522272"
                  className="flex-1 py-3 glass rounded-xl flex items-center justify-center gap-2 text-foreground font-medium hover:bg-accent transition-colors"
                >
                  <PhoneCall className="w-4 h-4" /> Call Now
                </Link>
                <Link
                  href="https://wa.me/919350522272"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex-1 py-3 bg-green-600/20 text-green-400 rounded-xl flex items-center justify-center gap-2 font-medium hover:bg-green-600/30 transition-colors"
                >
                  <MessageCircle className="w-4 h-4" /> WhatsApp
                </Link>
              </div>
            </div>
          </div>

          {/* Map Area */}
          <div className="w-full lg:w-2/3 h-[500px] rounded-3xl overflow-hidden border border-card-border relative">
            <iframe
              src="https://maps.google.com/maps?q=Bestech+City+Centre,+Dharuhera,+Haryana&t=&z=14&ie=UTF8&iwloc=&output=embed"
              width="100%"
              height="100%"
              style={{ border: 0, filter: 'invert(90%) hue-rotate(180deg) grayscale(20%)' }}
              allowFullScreen={true}
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
          </div>
        </div>
      </div>
    </section>
  );
}
