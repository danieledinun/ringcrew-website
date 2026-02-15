import { Card } from '@/components/ui/card';
import { Star } from 'lucide-react';
import SectionHeader from '@/components/shared/SectionHeader';

const testimonials = [
  {
    quote: 'RingCrew answered over 200 calls in our first month and booked 43 appointments. We\'ve already seen a 30% increase in revenue.',
    name: 'Mike R.',
    business: 'Comfort Zone HVAC',
    city: 'Phoenix, AZ',
    rating: 5,
  },
  {
    quote: 'We used to miss 50+ calls a month. RingCrew catches every single one now, even at 3am. Game changer for our emergency business.',
    name: 'Carlos M.',
    business: 'Rapid Flow Plumbing',
    city: 'Austin, TX',
    rating: 5,
  },
  {
    quote: 'RingCrew books 12-15 new patients every week. Our front desk used to be overwhelmed — now they can focus on the patients in the office.',
    name: 'Dr. Sarah K.',
    business: 'Bright Smiles Dental',
    city: 'Seattle, WA',
    rating: 5,
  },
];

export default function Testimonials() {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeader
          title="What Our Customers Say"
          centered
        />

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <Card key={index} className="p-6">
              <div className="flex gap-1 mb-4">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star key={i} className="h-5 w-5 fill-primary text-primary" />
                ))}
              </div>
              <p className="text-foreground mb-6 italic">
                &quot;{testimonial.quote}&quot;
              </p>
              <div className="border-t pt-4">
                <p className="font-semibold text-foreground">{testimonial.name}</p>
                <p className="text-sm text-muted-foreground">{testimonial.business}</p>
                <p className="text-sm text-muted-foreground">{testimonial.city}</p>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
