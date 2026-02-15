import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion';
import { FAQ_ITEMS } from '@/lib/constants';
import SectionHeader from '@/components/shared/SectionHeader';

interface FAQItem {
  question: string;
  answer: React.ReactNode;
}

interface FAQProps {
  items?: FAQItem[];
}

export default function FAQ({ items = FAQ_ITEMS }: FAQProps) {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeader
          title="Frequently Asked Questions"
          centered
        />

        <Accordion type="single" collapsible className="w-full">
          {items.map((item, index) => (
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
  );
}
