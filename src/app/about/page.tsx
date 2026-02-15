import { Metadata } from 'next';
import { Card } from '@/components/ui/card';
import { generateMetadata } from '@/lib/seo';

export const metadata: Metadata = generateMetadata({
  title: 'About RingCrew — AI Receptionist for Local Businesses',
  description: 'Learn about RingCrew and why we built the AI receptionist for local service businesses.',
  path: '/about',
});

export default function AboutPage() {
  return (
    <div className="py-20 bg-white">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <h1 className="text-hero-sm font-heading text-foreground mb-8">
          About RingCrew
        </h1>

        <div className="prose prose-lg max-w-none">
          <p className="text-xl text-muted-foreground mb-8">
            We built RingCrew because we saw local service businesses losing thousands of dollars
            every month to missed calls.
          </p>

          <Card className="p-8 mb-8">
            <h2 className="text-2xl font-heading font-bold mb-4">The Problem</h2>
            <p className="text-muted-foreground">
              Every day, HVAC companies, plumbers, dentists, and other local businesses miss 30-60% of
              their inbound calls. Phones ring during service calls, after hours, at lunch — and every
              missed call is a customer who calls someone else instead.
            </p>
          </Card>

          <Card className="p-8 mb-8">
            <h2 className="text-2xl font-heading font-bold mb-4">The Solution</h2>
            <p className="text-muted-foreground">
              RingCrew is an AI receptionist that answers every call in under 1 second, 24/7/365.
              It books appointments, qualifies leads, handles emergencies, and never takes a day off.
              Best of all, it sets up in under 24 hours — no phone calls needed.
            </p>
          </Card>

          <Card className="p-8">
            <h2 className="text-2xl font-heading font-bold mb-4">Our Mission</h2>
            <p className="text-muted-foreground">
              Help local service businesses capture every customer call and grow their revenue —
              without hiring, training, or managing additional staff.
            </p>
          </Card>

          <div className="mt-12 text-center">
            <p className="text-lg text-muted-foreground">
              Questions? Email us at{' '}
              <a href="mailto:hello@ringcrew.ai" className="text-primary hover:underline">
                hello@ringcrew.ai
              </a>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
