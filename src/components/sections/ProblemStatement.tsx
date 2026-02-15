'use client';

import { useEffect, useRef, useState } from 'react';
import { Card } from '@/components/ui/card';
import { STATS } from '@/lib/constants';

function AnimatedCounter({ value, label }: { value: string; label: string }) {
  const [isVisible, setIsVisible] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.1 }
    );

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => {
      if (ref.current) {
        observer.unobserve(ref.current);
      }
    };
  }, []);

  return (
    <div ref={ref} className={`transition-opacity duration-1000 ${isVisible ? 'opacity-100' : 'opacity-0'}`}>
      <div className="text-4xl md:text-5xl font-bold text-primary mb-2">
        {value}
      </div>
      <p className="text-muted-foreground">
        {label}
      </p>
    </div>
  );
}

export default function ProblemStatement() {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-section font-heading text-foreground mb-6">
            Your Business Is Losing Money Every Time the Phone Rings Unanswered
          </h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            Local service businesses miss 30–62% of inbound calls. Each missed call is a
            customer who calls your competitor instead. After hours, weekends, lunch breaks,
            busy periods — every unanswered ring is revenue walking out the door.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {STATS.map((stat, index) => (
            <Card key={index} className="p-8 text-center">
              <AnimatedCounter value={stat.value} label={stat.label} />
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
