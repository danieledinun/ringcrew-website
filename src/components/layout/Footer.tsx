import Link from 'next/link';
import Image from 'next/image';
import { BUSINESS_INFO } from '@/lib/constants';

export default function Footer() {
  return (
    <footer className="bg-surface-900 text-white pb-16 md:pb-0">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Brand */}
          <div className="col-span-1">
            <div className="mb-4">
              <Image
                src="/logo-dark.svg"
                alt="RingCrew"
                width={240}
                height={48}
                className="h-10 w-auto"
              />
            </div>
            <p className="text-gray-400 text-sm">
              Never miss another customer call. AI receptionist for local businesses.
            </p>
          </div>

          {/* Product */}
          <div>
            <h3 className="font-semibold mb-4">Product</h3>
            <ul className="space-y-2 text-sm">
              <li><Link href="/how-it-works" className="text-gray-400 hover:text-white transition-colors">How It Works</Link></li>
              <li><Link href="/pricing" className="text-gray-400 hover:text-white transition-colors">Pricing</Link></li>
              <li><Link href="/get-started" className="text-gray-400 hover:text-white transition-colors">Get Started</Link></li>
            </ul>
          </div>

          {/* Industries */}
          <div>
            <h3 className="font-semibold mb-4">Industries</h3>
            <ul className="space-y-2 text-sm">
              <li><Link href="/industries/hvac" className="text-gray-400 hover:text-white transition-colors">HVAC</Link></li>
              <li><Link href="/industries/plumbing" className="text-gray-400 hover:text-white transition-colors">Plumbing</Link></li>
              <li><Link href="/industries/dental" className="text-gray-400 hover:text-white transition-colors">Dental</Link></li>
              <li><Link href="/industries/med-spa" className="text-gray-400 hover:text-white transition-colors">Med Spa</Link></li>
              <li><Link href="/industries/auto-repair" className="text-gray-400 hover:text-white transition-colors">Auto Repair</Link></li>
              <li><Link href="/industries/roofing" className="text-gray-400 hover:text-white transition-colors">Roofing</Link></li>
              <li><Link href="/industries/pest-control" className="text-gray-400 hover:text-white transition-colors">Pest Control</Link></li>
            </ul>
          </div>

          {/* Company */}
          <div>
            <h3 className="font-semibold mb-4">Company</h3>
            <ul className="space-y-2 text-sm">
              <li><Link href="/about" className="text-gray-400 hover:text-white transition-colors">About</Link></li>
              <li><Link href="/blog" className="text-gray-400 hover:text-white transition-colors">Blog</Link></li>
              <li><Link href="/contact" className="text-gray-400 hover:text-white transition-colors">Contact</Link></li>
              <li><Link href="/legal/privacy" className="text-gray-400 hover:text-white transition-colors">Privacy Policy</Link></li>
              <li><Link href="/legal/terms" className="text-gray-400 hover:text-white transition-colors">Terms of Service</Link></li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-8 pt-8 text-center text-sm text-gray-400">
          <p>&copy; {new Date().getFullYear()} {BUSINESS_INFO.name}. All rights reserved.</p>
          <p className="mt-2">
            Questions? Email us at{' '}
            <a href={`mailto:${BUSINESS_INFO.email}`} className="text-primary hover:underline">
              {BUSINESS_INFO.email}
            </a>
          </p>
        </div>
      </div>
    </footer>
  );
}
