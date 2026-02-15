import { Card } from '@/components/ui/card';
import { ClipboardCheck, Bot, Rocket } from 'lucide-react';
import { HOW_IT_WORKS_STEPS } from '@/lib/constants';
import SectionHeader from '@/components/shared/SectionHeader';

const iconMap = {
  ClipboardCheck,
  Bot,
  Rocket,
};

export default function HowItWorks() {
  return (
    <section id="how-it-works" className="py-20 bg-surface-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeader
          title="Live in Under 24 Hours. No Calls. No Contracts."
          centered
        />

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
          {HOW_IT_WORKS_STEPS.map((step) => {
            const Icon = iconMap[step.icon as keyof typeof iconMap];
            return (
              <div key={step.number} className="relative">
                <Card className="p-8 h-full hover:shadow-card-hover transition-shadow">
                  <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mb-6">
                    <Icon className="h-6 w-6 text-primary" />
                  </div>
                  <div className="absolute top-4 right-4 w-8 h-8 bg-primary text-white rounded-full flex items-center justify-center font-bold">
                    {step.number}
                  </div>
                  <h3 className="text-card font-heading text-foreground mb-4">
                    {step.title}
                  </h3>
                  <p className="text-muted-foreground">
                    {step.description}
                  </p>
                </Card>
                {step.number < 3 && (
                  <div className="hidden md:block absolute top-1/2 -right-4 transform -translate-y-1/2 z-10">
                    <div className="w-8 h-0.5 bg-primary/30"></div>
                  </div>
                )}
              </div>
            );
          })}
        </div>

        <p className="text-center text-muted-foreground">
          No phone calls required. No demos to sit through.
          <br />
          Just answer a few questions and we handle the rest.
        </p>
      </div>
    </section>
  );
}
