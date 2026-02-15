'use client';

import Link from 'next/link';
import { useState } from 'react';
import { Menu, X } from 'lucide-react';
import { Button } from '@/components/ui/button';

export default function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <nav className="sticky top-0 z-50 bg-white border-b border-border">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <Link href="/" className="flex items-center space-x-2">
            <div className="w-8 h-8 bg-primary rounded-lg flex items-center justify-center">
              <span className="text-white font-bold text-xl">R</span>
            </div>
            <span className="font-heading font-bold text-xl">RingCrew</span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            <Link href="/how-it-works" className="text-foreground hover:text-primary transition-colors">
              How It Works
            </Link>
            <Link href="/pricing" className="text-foreground hover:text-primary transition-colors">
              Pricing
            </Link>
            <div className="relative group">
              <button className="text-foreground hover:text-primary transition-colors">
                Industries
              </button>
              <div className="absolute top-full left-0 mt-2 w-48 bg-white rounded-lg shadow-lg border border-border opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all">
                <Link href="/industries/hvac" className="block px-4 py-2 hover:bg-muted rounded-t-lg">HVAC</Link>
                <Link href="/industries/plumbing" className="block px-4 py-2 hover:bg-muted">Plumbing</Link>
                <Link href="/industries/dental" className="block px-4 py-2 hover:bg-muted">Dental</Link>
                <Link href="/industries/med-spa" className="block px-4 py-2 hover:bg-muted">Med Spa</Link>
                <Link href="/industries/auto-repair" className="block px-4 py-2 hover:bg-muted">Auto Repair</Link>
                <Link href="/industries/roofing" className="block px-4 py-2 hover:bg-muted">Roofing</Link>
                <Link href="/industries/pest-control" className="block px-4 py-2 hover:bg-muted rounded-b-lg">Pest Control</Link>
              </div>
            </div>
            <Link href="/blog" className="text-foreground hover:text-primary transition-colors">
              Blog
            </Link>
          </div>

          {/* CTA Button */}
          <div className="hidden md:block">
            <Button asChild size="lg">
              <Link href="/get-started">
                Get Started Free →
              </Link>
            </Button>
          </div>

          {/* Mobile menu button */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="md:hidden p-2"
          >
            {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <div className="md:hidden border-t border-border bg-white">
          <div className="px-4 py-4 space-y-3">
            <Link
              href="/how-it-works"
              className="block py-2 text-foreground hover:text-primary"
              onClick={() => setMobileMenuOpen(false)}
            >
              How It Works
            </Link>
            <Link
              href="/pricing"
              className="block py-2 text-foreground hover:text-primary"
              onClick={() => setMobileMenuOpen(false)}
            >
              Pricing
            </Link>
            <div className="py-2">
              <div className="font-semibold mb-2">Industries</div>
              <div className="pl-4 space-y-2">
                <Link href="/industries/hvac" className="block py-1 text-sm hover:text-primary" onClick={() => setMobileMenuOpen(false)}>HVAC</Link>
                <Link href="/industries/plumbing" className="block py-1 text-sm hover:text-primary" onClick={() => setMobileMenuOpen(false)}>Plumbing</Link>
                <Link href="/industries/dental" className="block py-1 text-sm hover:text-primary" onClick={() => setMobileMenuOpen(false)}>Dental</Link>
                <Link href="/industries/med-spa" className="block py-1 text-sm hover:text-primary" onClick={() => setMobileMenuOpen(false)}>Med Spa</Link>
                <Link href="/industries/auto-repair" className="block py-1 text-sm hover:text-primary" onClick={() => setMobileMenuOpen(false)}>Auto Repair</Link>
                <Link href="/industries/roofing" className="block py-1 text-sm hover:text-primary" onClick={() => setMobileMenuOpen(false)}>Roofing</Link>
                <Link href="/industries/pest-control" className="block py-1 text-sm hover:text-primary" onClick={() => setMobileMenuOpen(false)}>Pest Control</Link>
              </div>
            </div>
            <Link
              href="/blog"
              className="block py-2 text-foreground hover:text-primary"
              onClick={() => setMobileMenuOpen(false)}
            >
              Blog
            </Link>
            <Button asChild className="w-full mt-4">
              <Link href="/get-started">
                Get Started Free →
              </Link>
            </Button>
          </div>
        </div>
      )}
    </nav>
  );
}
