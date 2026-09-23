import Link from "next/link";
import Image from "next/image";
import { Phone, MapPin, Mail, Globe, Send, MessageCircle } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-black pt-16 pb-8 border-t border-white/10 relative overflow-hidden">
      {/* Decorative gradient */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[1px] bg-gradient-to-r from-transparent via-white/20 to-transparent"></div>
      
      <div className="container mx-auto px-4 md:px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 md:gap-8 mb-12">
          
          {/* Brand Col */}
          <div className="flex flex-col gap-4">
            <Link href="/" className="relative w-40 h-12">
              <Image 
                src="/images/logo.jpg" 
                alt="Crazy Fleets Logo" 
                fill 
                className="object-contain"
              />
            </Link>
            <p className="text-slate-400 mt-2 text-sm leading-relaxed">
              DRIVE WITHOUT LIMITS. Premium self-drive cars for your journey. Choose your car, select your rental period and hit the road with Crazy Fleets.
            </p>
            <div className="flex gap-4 mt-2">
              <div className="w-10 h-10 rounded-full glass flex items-center justify-center text-slate-300 hover:text-white transition-colors cursor-pointer">
                <Globe className="w-4 h-4" />
              </div>
              <div className="w-10 h-10 rounded-full glass flex items-center justify-center text-slate-300 hover:text-white transition-colors cursor-pointer">
                <Send className="w-4 h-4" />
              </div>
              <div className="w-10 h-10 rounded-full glass flex items-center justify-center text-slate-300 hover:text-white transition-colors cursor-pointer">
                <MessageCircle className="w-4 h-4" />
              </div>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-white font-semibold text-lg mb-6">Quick Links</h4>
            <ul className="flex flex-col gap-3">
              {[
                { name: "Home", href: "/" },
                { name: "Cars", href: "/cars" },
                { name: "How It Works", href: "/#how-it-works" },
                { name: "About", href: "/about" },
                { name: "Contact", href: "/contact" }
              ].map((link) => (
                <li key={link.name}>
                  <Link 
                    href={link.href}
                    className="text-slate-400 hover:text-white transition-colors text-sm flex items-center gap-2"
                  >
                    <span className="w-1 h-1 rounded-full bg-slate-600"></span>
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Support */}
          <div>
            <h4 className="text-white font-semibold text-lg mb-6">Support</h4>
            <ul className="flex flex-col gap-3">
              {[
                { name: "FAQs", href: "/#faq" },
                { name: "Terms & Conditions", href: "#" },
                { name: "Privacy Policy", href: "#" },
                { name: "Cancellation Policy", href: "#" }
              ].map((link) => (
                <li key={link.name}>
                  <Link 
                    href={link.href}
                    className="text-slate-400 hover:text-white transition-colors text-sm flex items-center gap-2"
                  >
                    <span className="w-1 h-1 rounded-full bg-slate-600"></span>
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-white font-semibold text-lg mb-6">Contact Us</h4>
            <ul className="flex flex-col gap-4">
              <li className="flex items-start gap-3">
                <MapPin className="w-5 h-5 text-slate-400 shrink-0 mt-0.5" />
                <span className="text-slate-400 text-sm">
                  Bestech City Centre, <br/>
                  NH8, Jaipur - Delhi Expressway, <br/>
                  Dharuhera, Haryana 123110
                </span>
              </li>
              <li className="flex items-center gap-3">
                <Phone className="w-5 h-5 text-slate-400 shrink-0" />
                <Link href="tel:+919350522272" className="text-slate-400 hover:text-white text-sm">
                  +91 9350522272
                </Link>
              </li>
              <li className="flex items-center gap-3">
                <Mail className="w-5 h-5 text-slate-400 shrink-0" />
                <Link href="mailto:info@crazyfleets.com" className="text-slate-400 hover:text-white text-sm">
                  info@crazyfleets.com
                </Link>
              </li>
            </ul>
          </div>

        </div>

        <div className="pt-8 border-t border-white/10 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-slate-500 text-sm text-center md:text-left">
            &copy; {new Date().getFullYear()} Crazy Fleets. All rights reserved.
          </p>
          <p className="text-slate-500 text-sm">
            Drive Without Limits
          </p>
        </div>
      </div>
    </footer>
  );
}
