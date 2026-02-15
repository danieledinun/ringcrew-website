import { Metadata } from 'next';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { Check } from 'lucide-react';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion';
import { PRICING_PLANS } from '@/lib/constants';
import SectionHeader from '@/components/shared/SectionHeader';
import { generateMetadata } from '@/lib/seo';
import { BreadcrumbJsonLd, FAQJsonLd } from '@/components/seo/JsonLd';

export const metadata: Metadata = generateMetadata({
  title: 'Pricing — Simple, Transparent AI Receptionist Plans',
  description: 'RingCrew pricing starts at $297/month with a free 7-day trial. No credit card required. No contracts. Choose the plan that fits your business.',
  path: '/pricing',
  keywords: ['AI answering service pricing', 'AI receptionist cost', 'virtual receptionist price', 'business phone answering pricing'],
});

const pricingFAQ = [
  {
    question: 'What counts as a call?',
    answer: 'Any inbound call your AI receptionist answers. Spam calls are filtered and don\'t count.',
  },
  {
    question: 'What happens if I go over my call limit?',
    answer: 'You\'re charged per additional call at your plan\'s overage rate. No surprise bills — we\'ll notify you when you\'re approaching your limit.',
  },
  {
    question: 'Can I switch plans?',
    answer: 'Yes, upgrade or downgrade anytime. Changes take effect on your next billing cycle.',
  },
  {
    question: 'Is there a setup fee?',
    answer: 'No setup fees during our launch period. We build your AI receptionist for free.',
  },
];

export default function PricingPage() {
  return (
    <>
      <BreadcrumbJsonLd items={[
        { name: "Home", url: "https://ringcrew.ai" },
        { name: "Pricing", url: "https://ringcrew.ai/pricing" }
      ]} />
      <FAQJsonLd faqs={pricingFAQ.map(f => ({ question: f.question, answer: f.answer }))} />
      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-b from-surface-50 to-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-hero-sm md:text-hero font-heading text-foreground mb-6">
            Simple, Transparent Pricing
          </h1>
          <p className="text-xl text-muted-foreground mb-12">
            Every plan starts with a free 7-day trial. No credit card required.
          </p>
        </div>
      </section>

      {/* Pricing Cards */}
      <section className="py-12 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {PRICING_PLANS.map((plan) => (
              <Card
                key={plan.id}
                className={`p-8 relative ${
                  plan.highlighted ? 'border-primary border-2 shadow-card-hover' : ''
                }`}
              >
                {plan.highlighted && (
                  <div className="absolute -top-4 left-1/2 transform -translate-x-1/2 bg-primary text-white px-4 py-1 rounded-full text-sm font-semibold">
                    Most Popular
                  </div>
                )}

                <div className="text-center mb-8">
                  <h3 className="text-2xl font-heading font-bold mb-2">{plan.name}</h3>
                  <div className="mb-4">
                    {plan.pricePrefix && (
                      <span className="text-muted-foreground mr-1">{plan.pricePrefix}</span>
                    )}
                    <span className="text-5xl font-bold text-foreground">
                      ${plan.price}
                    </span>
                    <span className="text-muted-foreground">/{plan.period}</span>
                  </div>
                  <p className="text-muted-foreground">{plan.description}</p>
                </div>

                <ul className="space-y-3 mb-8">
                  {plan.features.map((feature, index) => (
                    <li key={index} className="flex items-start">
                      <Check className="h-5 w-5 text-primary mr-3 flex-shrink-0 mt-0.5" />
                      <span className="text-foreground">{feature}</span>
                    </li>
                  ))}
                </ul>

                <Button
                  asChild
                  className={`w-full ${plan.highlighted ? 'bg-primary' : ''}`}
                  variant={plan.highlighted ? 'default' : 'outline'}
                  size="lg"
                >
                  <Link href={`/get-started?plan=${plan.id}`}>
                    {plan.cta}
                  </Link>
                </Button>
              </Card>
            ))}
          </div>

          <p className="text-center mt-12 text-muted-foreground">
            All plans include a free 7-day trial. No credit card. No contracts. Cancel anytime.
          </p>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20 bg-surface-50">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeader
            title="Pricing Questions"
            centered
          />

          <Accordion type="single" collapsible className="w-full">
            {pricingFAQ.map((item, index) => (
              <AccordionItem key={index} value={`item-${index}`}>
                <AccordionTrigger className="text-left">
                  {item.question}
                </AccordionTrigger>
                <AccordionContent forceMount className="text-muted-foreground data-[state=closed]:hidden">
                  {item.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-heading font-bold mb-4">
            Ready to Get Started?
          </h2>
          <p className="text-muted-foreground mb-8">
            Try RingCrew free for 7 days. No credit card needed.
          </p>
          <Button asChild size="lg">
            <Link href="/get-started">
              Start Free Trial
            </Link>
          </Button>
        </div>
      </section>
    </>
  );
}
