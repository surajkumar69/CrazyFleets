import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import FloatingButtons from "@/components/layout/FloatingButtons";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Crazy Fleets | Premium Self Drive Car Rental in Dharuhera",
  description: "Drive Without Limits. Premium self-drive car sharing platform in Dharuhera, Haryana. Book Maruti Baleno, Swift, Mahindra Scorpio N, Thar and more.",
  keywords: ["Self Drive Car Rental in Dharuhera", "Self Drive Cars in Dharuhera", "Car Rental in Dharuhera", "Self Drive Car Sharing Dharuhera", "Self Drive Cars Near NH8", "Self Drive Car Rental Haryana"],
  openGraph: {
    title: "Crazy Fleets | Premium Self Drive Cars",
    description: "Premium self-drive car sharing platform in Dharuhera.",
    url: "https://crazyfleets.com",
    siteName: "Crazy Fleets",
    images: [
      {
        url: "/images/hero_highway.jpg",
        width: 1200,
        height: 630,
        alt: "Crazy Fleets Self Drive Cars",
      },
    ],
    locale: "en_IN",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className={inter.className}>
        <Navbar />
        <main className="min-h-screen">
          {children}
        </main>
        <Footer />
        <FloatingButtons />
      </body>
    </html>
  );
}
