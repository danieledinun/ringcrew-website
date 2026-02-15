'use client';

import { Button } from '@/components/ui/button';
import { Play, Check } from 'lucide-react';
import GetStartedButton from '@/components/shared/GetStartedButton';
import { TRUST_BADGES } from '@/lib/constants';

export default function Hero() {
  return (
    <section className="relative py-20 md:py-28 overflow-hidden bg-gradient-to-b from-surface-50 to-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left Column - Copy & CTA */}
          <div>
            <h1 className="text-hero-sm md:text-hero font-heading text-foreground mb-6">
              Never Miss Another Customer Call
            </h1>

            <p className="text-xl text-muted-foreground mb-8 leading-relaxed">
              RingCrew is the AI receptionist that answers your business phone 24/7 —
              booking appointments, qualifying leads, and capturing revenue you&apos;re
              currently losing to voicemail. Set up in under 24 hours. No calls needed.
            </p>

            {/* Trust Badges */}
            <div className="flex flex-wrap gap-4 mb-8">
              {TRUST_BADGES.map((badge, index) => (
                <div key={index} className="flex items-center text-sm text-muted-foreground">
                  <Check className="h-4 w-4 text-primary mr-2" />
                  {badge.replace('✓ ', '')}
                </div>
              ))}
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4">
              <GetStartedButton />
              <Button variant="outline" size="lg" className="group">
                <Play className="mr-2 h-4 w-4" />
                Listen to a Sample Call
              </Button>
            </div>
          </div>

          {/* Right Column - Illustration/Animation */}
          <div className="relative">
            <div className="aspect-square bg-gradient-to-br from-primary/10 to-accent/10 rounded-3xl flex items-center justify-center">
              {/* Placeholder for illustration/animation */}
              <div className="text-center">
                <div className="w-32 h-32 bg-primary/20 rounded-full mx-auto mb-4 flex items-center justify-center">
                  <div className="w-24 h-24 bg-primary/40 rounded-full flex items-center justify-center">
                    <div className="w-16 h-16 bg-primary rounded-full animate-pulse"></div>
                  </div>
                </div>
                <p className="text-muted-foreground font-semibold">
                  AI Answering Your Calls
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
