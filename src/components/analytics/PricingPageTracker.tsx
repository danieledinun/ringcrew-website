'use client';

import { useEffect } from 'react';

export default function PricingPageTracker() {
  useEffect(() => {
    // Track pricing page view conversion
    if (typeof window !== 'undefined' && (window as any).gtag) {
      (window as any).gtag('event', 'conversion', {
        'send_to': 'AW-17954576067/AsCKCMXH9_gbEMOttPFC',
        'value': 1.0,
        'currency': 'USD'
      });
    }
  }, []);

  return null;
}
