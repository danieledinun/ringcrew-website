import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { ArrowRight } from 'lucide-react';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion';
import { Industry } from '@/lib/industries';
import SectionHeader from '@/components/shared/SectionHeader';

interface IndustryPageTemplateProps {
  industry: Industry;
}

export default function IndustryPageTemplate({ industry }: IndustryPageTemplateProps) {
  return (
    <>
      {/* Hero Section */}
      <section className="py-20 md:py-28 bg-gradient-to-b from-surface-50 to-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h1 className="text-hero-sm md:text-hero font-heading text-foreground mb-6">
                {industry.headline}
              </h1>
              <p className="text-xl text-muted-foreground mb-8 leading-relaxed">
                {industry.subheadline}
              </p>

              {/* Hero Stat */}
              <div className="bg-primary/10 rounded-lg p-6 mb-8 inline-block">
                <div className="text-4xl font-bold text-primary mb-1">
                  {industry.heroStat.value}
                </div>
                <p className="text-muted-foreground">
                  {industry.heroStat.label}
                </p>
              </div>

              <div className="flex flex-col sm:flex-row gap-4">
                <Button asChild size="lg">
                  <Link href={`/get-started?industry=${industry.slug}`}>
                    Get Started Free — Built for {industry.name}
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Link>
                </Button>
              </div>
            </div>

            <div className="bg-gradient-to-br from-primary/10 to-accent/10 rounded-3xl p-8 aspect-square flex items-center justify-center">
              <div className="text-center">
                <div className="text-6xl mb-4">
                  {industry.slug === 'hvac' && '🔧'}
                  {industry.slug === 'plumbing' && '🔧'}
                  {industry.slug === 'dental' && '🦷'}
                  {industry.slug === 'med-spa' && '💆'}
                  {industry.slug === 'auto-repair' && '🚗'}
                  {industry.slug === 'roofing' && '🏠'}
                  {industry.slug === 'pest-control' && '🐜'}
                </div>
                <p className="text-muted-foreground font-semibold">
                  AI for {industry.name} Companies
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Pain Points Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeader title="Sound Familiar?" centered />

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {industry.painPoints.map((pain, index) => (
              <Card key={index} className="p-6">
                <div className="text-destructive mb-4">✗</div>
                <p className="text-foreground">{pain}</p>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section className="py-20 bg-surface-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeader
            title={`How RingCrew Works for ${industry.name} Companies`}
            centered
          />
          <div className="max-w-3xl mx-auto space-y-6">
            <Card className="p-6">
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 bg-primary rounded-full flex items-center justify-center font-bold text-white flex-shrink-0">
                  1
                </div>
                <div>
                  <h3 className="font-semibold text-lg mb-2">Answer a Few Questions</h3>
                  <p className="text-muted-foreground">
                    Tell us about your {industry.name.toLowerCase()} services, pricing, hours, and emergency protocols. Takes 3 minutes.
                  </p>
                </div>
              </div>
            </Card>
            <Card className="p-6">
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 bg-primary rounded-full flex items-center justify-center font-bold text-white flex-shrink-0">
                  2
                </div>
                <div>
                  <h3 className="font-semibold text-lg mb-2">We Build Your AI Receptionist</h3>
                  <p className="text-muted-foreground">
                    We train your AI agent on your {industry.name.toLowerCase()} business. It understands your services and customer needs.
                  </p>
                </div>
              </div>
            </Card>
            <Card className="p-6">
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 bg-primary rounded-full flex items-center justify-center font-bold text-white flex-shrink-0">
                  3
                </div>
                <div>
                  <h3 className="font-semibold text-lg mb-2">Go Live & Capture Calls</h3>
                  <p className="text-muted-foreground">
                    Every {industry.name.toLowerCase()} service call is answered in under 1 second. Emergency calls transfer immediately.
                  </p>
                </div>
              </div>
            </Card>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20 bg-white">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeader
            title={`Common Questions from ${industry.name} Companies`}
            centered
          />

          <Accordion type="single" collapsible className="w-full">
            {industry.faq.map((item, index) => (
              <AccordionItem key={index} value={`item-${index}`}>
                <AccordionTrigger className="text-left">
                  {item.q}
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground">
                  {item.a}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </section>

      {/* Testimonial Section */}
      <section className="py-20 bg-surface-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <Card className="p-12">
            <div className="flex gap-1 mb-6">
              {[...Array(5)].map((_, i) => (
                <span key={i} className="text-primary text-2xl">★</span>
              ))}
            </div>
            <p className="text-2xl text-foreground mb-8 italic">
              &quot;{industry.testimonial.quote}&quot;
            </p>
            <div className="border-t pt-6">
              <p className="font-semibold text-lg">{industry.testimonial.name}</p>
              <p className="text-muted-foreground">{industry.testimonial.business}</p>
              <p className="text-muted-foreground text-sm">{industry.testimonial.city}</p>
            </div>
          </Card>
        </div>
      </section>

      {/* Related Reading */}
      <section className="py-16 bg-surface-50">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-heading font-bold text-foreground mb-8 text-center">
            Related Reading
          </h2>
          <div className="grid md:grid-cols-2 gap-6">
            <Link href="/blog/missed-calls-cost" className="block">
              <Card className="p-6 hover:shadow-card-hover transition-all h-full">
                <h3 className="text-xl font-heading font-bold text-foreground mb-2">
                  How Much Do Missed Calls Actually Cost Your Business?
                </h3>
                <p className="text-muted-foreground text-sm mb-3">
                  Local businesses lose $120K+ per year to missed calls. See the real math behind unanswered phones.
                </p>
                <span className="text-brand-600 text-sm flex items-center gap-1">
                  Read more <ArrowRight className="h-4 w-4" />
                </span>
              </Card>
            </Link>
            <Link href="/blog/after-hours-calls" className="block">
              <Card className="p-6 hover:shadow-card-hover transition-all h-full">
                <h3 className="text-xl font-heading font-bold text-foreground mb-2">
                  43% of Service Calls Happen After Hours
                </h3>
                <p className="text-muted-foreground text-sm mb-3">
                  Nearly half of service calls come after 5pm. If you're sending them to voicemail, you're losing thousands.
                </p>
                <span className="text-brand-600 text-sm flex items-center gap-1">
                  Read more <ArrowRight className="h-4 w-4" />
                </span>
              </Card>
            </Link>
            {industry.slug === 'hvac' && (
              <Link href="/blog/ai-receptionist-hvac" className="block">
                <Card className="p-6 hover:shadow-card-hover transition-all h-full">
                  <h3 className="text-xl font-heading font-bold text-foreground mb-2">
                    Why Every HVAC Company Needs an AI Receptionist
                  </h3>
                  <p className="text-muted-foreground text-sm mb-3">
                    HVAC companies miss 38% of calls. An AI receptionist answers 24/7 and books service calls instantly.
                  </p>
                  <span className="text-brand-600 text-sm flex items-center gap-1">
                    Read more <ArrowRight className="h-4 w-4" />
                  </span>
                </Card>
              </Link>
            )}
            <Link href="/blog/how-ai-receptionist-works" className="block">
              <Card className="p-6 hover:shadow-card-hover transition-all h-full">
                <h3 className="text-xl font-heading font-bold text-foreground mb-2">
                  How Does an AI Receptionist Actually Work?
                </h3>
                <p className="text-muted-foreground text-sm mb-3">
                  A plain English breakdown from the moment the phone rings to booking the appointment.
                </p>
                <span className="text-brand-600 text-sm flex items-center gap-1">
                  Read more <ArrowRight className="h-4 w-4" />
                </span>
              </Card>
            </Link>
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-20 bg-brand-800 text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl md:text-5xl font-heading font-bold mb-6">
            Ready to Stop Missing {industry.name} Service Calls?
          </h2>
          <p className="text-xl mb-8 text-brand-100">
            Join {industry.name.toLowerCase()} companies capturing more revenue with RingCrew.
          </p>
          <Button asChild size="lg" className="bg-white text-brand-800 hover:bg-gray-100">
            <Link href={`/get-started?industry=${industry.slug}`}>
              Get Started Free — Built for {industry.name}
              <ArrowRight className="ml-2 h-4 w-4" />
            </Link>
          </Button>
          <p className="mt-6 text-sm text-brand-200">
            Free 7-day trial. No credit card needed.
          </p>
        </div>
      </section>
    </>
  );
}
