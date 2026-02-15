import Link from 'next/link';
import { Card } from '@/components/ui/card';
import { ArrowRight } from 'lucide-react';
import SectionHeader from '@/components/shared/SectionHeader';

const industries = [
  { icon: '🔧', name: 'HVAC', slug: 'hvac', tagline: 'Book 15+ more HVAC appointments per month', seoDescription: 'AI receptionist for HVAC companies — answers every call 24/7' },
  { icon: '🔧', name: 'Plumbing', slug: 'plumbing', tagline: 'Capture every emergency plumbing call', seoDescription: 'AI answering service for plumbers — capture emergency calls instantly' },
  { icon: '🦷', name: 'Dental', slug: 'dental', tagline: 'Fill your dental schedule automatically', seoDescription: 'AI receptionist for dental offices — fill your schedule automatically' },
  { icon: '💆', name: 'Med Spas', slug: 'med-spa', tagline: 'Book high-value consultations 24/7', seoDescription: 'AI receptionist for med spas — book consultations around the clock' },
  { icon: '🚗', name: 'Auto Repair', slug: 'auto-repair', tagline: 'Never miss a repair call again', seoDescription: 'AI answering service for auto shops — never lose a repair job again' },
  { icon: '🏠', name: 'Roofing', slug: 'roofing', tagline: 'Capture storm damage leads instantly', seoDescription: 'AI receptionist for roofing companies — capture storm damage leads 24/7' },
  { icon: '🐜', name: 'Pest Control', slug: 'pest-control', tagline: 'Answer emergency pest calls instantly', seoDescription: 'AI answering service for pest control — handle urgent calls day and night' },
];

export default function IndustryGrid() {
  return (
    <section className="py-20 bg-surface-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeader
          title="Built for Local Service Businesses"
          centered
        />

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {industries.map((industry) => (
            <Link key={industry.slug} href={`/industries/${industry.slug}`}>
              <Card className="p-6 hover:shadow-card-hover transition-all group cursor-pointer">
                <div className="flex items-start justify-between mb-4">
                  <div className="text-4xl">{industry.icon}</div>
                  <ArrowRight className="h-5 w-5 text-muted-foreground group-hover:text-primary group-hover:translate-x-1 transition-all" />
                </div>
                <h3 className="text-xl font-semibold text-foreground mb-2">
                  {industry.name}
                </h3>
                <p className="text-sm text-muted-foreground">
                  {industry.tagline}
                </p>
                <p className="text-sm text-muted-foreground mt-1">
                  {industry.seoDescription}
                </p>
              </Card>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
