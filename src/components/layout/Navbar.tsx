"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { Menu, X, PhoneCall, MessageCircle } from "lucide-react";

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { name: "Home", href: "/" },
    { name: "Cars", href: "/cars" },
    { name: "How It Works", href: "/#how-it-works" },
    { name: "Why Crazy Fleets", href: "/#why-us" },
    { name: "About", href: "/about" },
    { name: "Contact", href: "/contact" },
  ];

  return (
    <nav
      className={`fixed top-0 w-full z-50 transition-all duration-300 ${
        isScrolled ? "bg-[#0a0f1c]/90 backdrop-blur-md border-b border-white/10 py-3" : "bg-transparent py-5"
      }`}
    >
      <div className="container mx-auto px-4 md:px-6 flex items-center justify-between">
        <Link href="/" className="flex items-center gap-2 z-50">
          <div className="relative w-32 h-10 md:w-40 md:h-12">
            <Image 
              src="/images/logo.jpg" 
              alt="Crazy Fleets Logo" 
              fill 
              className="object-contain"
              priority
            />
          </div>
        </Link>

        {/* Desktop Nav */}
        <div className="hidden md:flex items-center gap-8">
          <ul className="flex items-center gap-6">
            {navLinks.map((link) => (
              <li key={link.name}>
                <Link
                  href={link.href}
                  className="text-sm font-medium text-slate-300 hover:text-white transition-colors"
                >
                  {link.name}
                </Link>
              </li>
            ))}
          </ul>
          
          <div className="flex items-center gap-4">
            <Link 
              href="tel:+919350522272"
              className="p-2 rounded-full glass hover:bg-white/10 transition-colors"
              aria-label="Call Now"
            >
              <PhoneCall className="w-4 h-4 text-slate-300" />
            </Link>
            <Link 
              href="https://wa.me/919350522272"
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 rounded-full glass hover:bg-green-500/20 text-green-400 transition-colors"
              aria-label="WhatsApp"
            >
              <MessageCircle className="w-4 h-4" />
            </Link>
            <Link
              href="/cars"
              className="px-6 py-2.5 bg-white text-black font-semibold rounded-full hover:bg-slate-200 transition-all hover:scale-105"
            >
              Book a Car
            </Link>
          </div>
        </div>

        {/* Mobile Menu Toggle */}
        <button
          className="md:hidden z-50 p-2 text-white"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
        >
          {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>

      {/* Mobile Nav */}
      <div
        className={`fixed inset-0 bg-[#0a0f1c] z-40 transition-transform duration-300 flex flex-col pt-24 px-6 ${
          mobileMenuOpen ? "translate-x-0" : "translate-x-full"
        } md:hidden`}
      >
        <ul className="flex flex-col gap-6 text-xl">
          {navLinks.map((link) => (
            <li key={link.name}>
              <Link
                href={link.href}
                className="font-medium text-white block"
                onClick={() => setMobileMenuOpen(false)}
              >
                {link.name}
              </Link>
            </li>
          ))}
        </ul>
        <div className="mt-auto pb-10 flex flex-col gap-4">
          <Link
            href="/cars"
            className="w-full py-4 bg-white text-black text-center font-bold rounded-xl"
            onClick={() => setMobileMenuOpen(false)}
          >
            Book a Car
          </Link>
          <div className="flex gap-4">
            <Link 
              href="tel:+919350522272"
              className="flex-1 py-3 glass rounded-xl flex items-center justify-center gap-2 font-medium"
            >
              <PhoneCall className="w-4 h-4" /> Call Now
            </Link>
            <Link 
              href="https://wa.me/919350522272"
              target="_blank"
              rel="noopener noreferrer"
              className="flex-1 py-3 bg-green-600 rounded-xl flex items-center justify-center gap-2 font-medium text-white"
            >
              <MessageCircle className="w-4 h-4" /> WhatsApp
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
}
