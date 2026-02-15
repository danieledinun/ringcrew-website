import { INTEGRATIONS } from '@/lib/constants';

export default function TrustBar() {
  return (
    <section className="py-12 border-y border-border bg-surface-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <p className="text-center text-sm font-medium text-foreground mb-6">
          Built for HVAC, plumbing, dental, med spa, auto repair & more
        </p>
        <p className="text-center text-sm text-muted-foreground mb-6">
          Integrates with:
        </p>
        <div className="flex flex-wrap justify-center items-center gap-8">
          {INTEGRATIONS.map((integration, index) => (
            <div key={index} className="text-muted-foreground font-medium">
              {integration}
            </div>
          ))}
        </div>
        <p className="text-center mt-8 font-semibold text-foreground">
          RingCrew answers every call in under 1 second
        </p>
      </div>
    </section>
  );
}
