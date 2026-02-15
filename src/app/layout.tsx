import type { Metadata } from "next";
import { Plus_Jakarta_Sans, Inter } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import { StickyMobileCTA } from "@/components/layout/StickyMobileCTA";
import { BUSINESS_INFO } from "@/lib/constants";

const heading = Plus_Jakarta_Sans({
  variable: "--font-heading",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800"],
});

const body = Inter({
  variable: "--font-body",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
});

export const metadata: Metadata = {
  metadataBase: new URL('https://ringcrew.ai'),
  title: {
    default: 'RingCrew — AI Receptionist for Local Businesses | Never Miss a Call',
    template: '%s | RingCrew'
  },
  description: 'RingCrew is the AI receptionist that answers your business phone 24/7. Books appointments, qualifies leads, handles emergencies. Built for HVAC, plumbing, dental & more.',
  keywords: ['AI receptionist', 'AI answering service', 'virtual receptionist', 'AI phone answering', 'small business AI'],
  authors: [{ name: 'RingCrew' }],
  creator: 'RingCrew',
  publisher: 'RingCrew',
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://ringcrew.ai',
    siteName: 'RingCrew',
    title: 'RingCrew — Never Miss Another Customer Call',
    description: 'AI receptionist for local businesses. Answers calls 24/7, books appointments, qualifies leads.',
    images: [{ url: '/og-image.png', width: 1200, height: 630, alt: 'RingCrew AI Receptionist' }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'RingCrew — AI Receptionist for Local Businesses',
    description: 'Never miss another customer call. AI-powered phone answering for HVAC, plumbing, dental & more.',
    images: ['/og-image.png'],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: { index: true, follow: true, 'max-video-preview': -1, 'max-image-preview': 'large', 'max-snippet': -1 },
  },
  alternates: { canonical: 'https://ringcrew.ai' },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${heading.variable} ${body.variable} font-body antialiased`}>
        <Navbar />
        <main>{children}</main>
        <Footer />
        <StickyMobileCTA />
      </body>
    </html>
  );
}
