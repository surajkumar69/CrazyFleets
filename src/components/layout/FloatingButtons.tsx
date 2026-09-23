import Link from "next/link";
import { MessageCircle, PhoneCall } from "lucide-react";

export default function FloatingButtons() {
  return (
    <div className="fixed bottom-6 right-6 z-50 flex flex-col gap-4">
      {/* Mobile only Call Button */}
      <Link
        href="tel:+919350522272"
        className="md:hidden w-14 h-14 bg-muted rounded-full flex items-center justify-center text-foreground shadow-lg border border-card-border"
        aria-label="Call Now"
      >
        <PhoneCall className="w-6 h-6" />
      </Link>
      
      {/* WhatsApp Button */}
      <Link
        href="https://wa.me/919350522272?text=Hello%20Crazy%20Fleets,%20I%20want%20to%20book%20a%20self-drive%20car."
        target="_blank"
        rel="noopener noreferrer"
        className="w-14 h-14 bg-[#25D366] rounded-full flex items-center justify-center text-foreground shadow-[0_0_20px_rgba(37,211,102,0.4)] hover:scale-110 transition-transform"
        aria-label="WhatsApp Us"
      >
        <MessageCircle className="w-7 h-7" />
      </Link>
    </div>
  );
}
