import { Metadata } from 'next';
import { Card } from '@/components/ui/card';
import { Mail } from 'lucide-react';
import { generateMetadata } from '@/lib/seo';
import { BUSINESS_INFO } from '@/lib/constants';

export const metadata: Metadata = generateMetadata({
  title: 'Contact Us — Get in Touch with RingCrew',
  description: 'Have questions about RingCrew? Get in touch with our team.',
  path: '/contact',
});

export default function ContactPage() {
  return (
    <div className="py-20 bg-gradient-to-b from-surface-50 to-white">
      <div className="max-w-2xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h1 className="text-hero-sm font-heading text-foreground mb-4">
            Get in Touch
          </h1>
          <p className="text-lg text-muted-foreground">
            Have questions? We&apos;re here to help.
          </p>
        </div>

        <Card className="p-8">
          <div className="text-center">
            <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-6">
              <Mail className="h-8 w-8 text-primary" />
            </div>

            <h2 className="text-2xl font-heading font-bold mb-4">
              Email Us
            </h2>
            <p className="text-muted-foreground mb-6">
              Send us an email and we&apos;ll get back to you within 24 hours.
            </p>

            <a
              href={`mailto:${BUSINESS_INFO.email}`}
              className="inline-flex items-center justify-center text-xl font-semibold text-primary hover:underline"
            >
              {BUSINESS_INFO.email}
            </a>

            <div className="mt-12 pt-8 border-t">
              <p className="text-sm text-muted-foreground">
                Ready to get started?{' '}
                <a href="/get-started" className="text-primary hover:underline font-semibold">
                  Try RingCrew free for 7 days →
                </a>
              </p>
            </div>
          </div>
        </Card>
      </div>
    </div>
  );
}
