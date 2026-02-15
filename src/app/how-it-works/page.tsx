import { Metadata } from 'next';
import { Card } from '@/components/ui/card';
import { HOW_IT_WORKS_STEPS } from '@/lib/constants';
import { ClipboardCheck, Bot, Rocket } from 'lucide-react';
import SectionHeader from '@/components/shared/SectionHeader';
import GetStartedButton from '@/components/shared/GetStartedButton';
import LiveDemo from '@/components/sections/LiveDemo';
import { generateMetadata } from '@/lib/seo';

export const metadata: Metadata = generateMetadata({
  title: 'How It Works — AI Receptionist Setup in Under 24 Hours',
  description: 'See exactly how RingCrew works. From signup to live calls in under 24 hours. Simple 3-step process. No phone calls needed.',
  path: '/how-it-works',
  keywords: ['how AI receptionist works', 'AI phone answering setup', 'virtual receptionist how it works'],
});

const iconMap = {
  ClipboardCheck,
  Bot,
  Rocket,
};

export default function HowItWorksPage() {
  return (
    <>
      {/* Hero */}
      <section className="py-20 bg-gradient-to-b from-surface-50 to-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-hero-sm md:text-hero font-heading text-foreground mb-6">
            How RingCrew Works
          </h1>
          <p className="text-xl text-muted-foreground">
            From signup to live calls in under 24 hours. Here&apos;s exactly what happens.
          </p>
        </div>
      </section>

      {/* Steps - Expanded */}
      <section className="py-20 bg-white">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="space-y-16">
            {HOW_IT_WORKS_STEPS.map((step) => {
              const Icon = iconMap[step.icon as keyof typeof iconMap];
              return (
                <div key={step.number} className="flex flex-col md:flex-row gap-8 items-start">
                  <div className="flex-shrink-0">
                    <div className="w-16 h-16 bg-primary rounded-full flex items-center justify-center">
                      <span className="text-2xl font-bold text-white">{step.number}</span>
                    </div>
                  </div>
                  <div className="flex-1">
                    <div className="flex items-center gap-4 mb-4">
                      <Icon className="h-8 w-8 text-primary" />
                      <h2 className="text-3xl font-heading font-bold">{step.title}</h2>
                    </div>
                    <p className="text-lg text-muted-foreground mb-6">
                      {step.description}
                    </p>
                    {step.number === 1 && (
                      <Card className="p-6 bg-surface-50">
                        <p className="text-sm text-muted-foreground">
                          Our online form takes about 3 minutes. Tell us your business name, services, hours,
                          and the questions your customers ask most. No phone call needed.
                        </p>
                      </Card>
                    )}
                    {step.number === 2 && (
                      <Card className="p-6 bg-surface-50">
                        <p className="text-sm text-muted-foreground">
                          We configure an AI agent trained specifically on your business. It knows your services,
                          your pricing approach, your emergency protocols, and your scheduling preferences.
                          It answers calls the way your best receptionist would — but it never takes a day off.
                        </p>
                      </Card>
                    )}
                    {step.number === 3 && (
                      <Card className="p-6 bg-surface-50">
                        <p className="text-sm text-muted-foreground">
                          Forward your existing business number to RingCrew, or use a new local number we provide.
                          Within 24 hours, every call is answered instantly. You get SMS + email notifications
                          for every call, with full transcripts and recordings.
                        </p>
                      </Card>
                    )}
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Live Demo */}
      <LiveDemo />

      {/* Final CTA */}
      <section className="py-20 bg-surface-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-heading font-bold mb-4">
            Ready? It takes 3 minutes.
          </h2>
          <p className="text-muted-foreground mb-8">
            Answer a few questions and we&apos;ll have your AI receptionist live within 24 hours.
          </p>
          <GetStartedButton />
        </div>
      </section>
    </>
  );
}
