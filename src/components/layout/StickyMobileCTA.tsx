"use client";

import { useState, useEffect } from 'react';
import { usePathname } from 'next/navigation';
import Link from 'next/link';

export function StickyMobileCTA() {
  const [show, setShow] = useState(false);
  const [mounted, setMounted] = useState(false);
  const pathname = usePathname();

  // Hide on /get-started page
  if (pathname === '/get-started') return null;

  useEffect(() => {
    setMounted(true);

    const handleScroll = () => {
      setShow(window.scrollY > 500);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Don't render on server to avoid hydration mismatch
  if (!mounted) return null;

  return (
    <div
      className={`fixed bottom-0 left-0 right-0 z-50 md:hidden transition-transform duration-300 ${
        show ? 'translate-y-0' : 'translate-y-full'
      }`}
    >
      <div className="bg-brand-500 px-4 py-3 shadow-lg">
        <Link
          href="/get-started"
          className="flex items-center justify-center w-full text-white font-semibold text-sm"
        >
          Stop Missing Calls → Get Started Free
        </Link>
      </div>
    </div>
  );
}
