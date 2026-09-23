import Link from "next/link";
import { MessageCircle, PhoneCall } from "lucide-react";

export default function FloatingButtons() {
  return (
    <div className="fixed bottom-4 right-4 md:bottom-6 md:right-6 z-50 flex flex-col gap-3 md:gap-4">
      {/* Mobile only Call Button */}
      <Link
        href="tel:+919350522272"
        className="md:hidden w-12 h-12 bg-muted rounded-full flex items-center justify-center text-foreground shadow-lg border border-card-border"
        aria-label="Call Now"
      >
        <PhoneCall className="w-5 h-5" />
      </Link>
      
      {/* WhatsApp Button */}
      <Link
        href="https://wa.me/919350522272?text=Hello%20Crazy%20Fleets,%20I%20want%20to%20book%20a%20self-drive%20car."
        target="_blank"
        rel="noopener noreferrer"
        className="w-12 h-12 md:w-14 md:h-14 bg-[#25D366] rounded-full flex items-center justify-center text-white shadow-[0_0_20px_rgba(37,211,102,0.4)] hover:scale-110 transition-transform"
        aria-label="WhatsApp Us"
      >
        <MessageCircle className="w-6 h-6 md:w-7 md:h-7" />
      </Link>
    </div>
  );
}
