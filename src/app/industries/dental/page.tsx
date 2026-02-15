import { Metadata } from 'next';
import { industries } from '@/lib/industries';
import IndustryPageTemplate from '@/components/sections/IndustryPageTemplate';
import { ServiceJsonLd, FAQJsonLd, BreadcrumbJsonLd } from '@/components/seo/JsonLd';

const industry = industries.find(i => i.slug === 'dental')!;

export const metadata: Metadata = {
  title: industry.metaTitle,
  description: industry.metaDescription,
  keywords: industry.keywords.join(', '),
  alternates: {
    canonical: `https://ringcrew.ai/industries/${industry.slug}`,
  },
  openGraph: {
    title: industry.metaTitle,
    description: industry.metaDescription,
    url: `https://ringcrew.ai/industries/${industry.slug}`,
    images: [`/og-${industry.slug}.png`],
  },
};

export default function DentalPage() {
  return (
    <>
      <ServiceJsonLd
        industry={industry.name}
        description={industry.metaDescription}
      />
      <BreadcrumbJsonLd items={[
        { name: "Home", url: "https://ringcrew.ai" },
        { name: "Industries", url: "https://ringcrew.ai/industries" },
        { name: industry.name, url: `https://ringcrew.ai/industries/${industry.slug}` }
      ]} />
      <FAQJsonLd faqs={industry.faq.map(f => ({ question: f.q, answer: f.a }))} />
      <IndustryPageTemplate industry={industry} />
    </>
  );
}
