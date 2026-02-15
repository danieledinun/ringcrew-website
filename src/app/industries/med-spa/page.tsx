import { Metadata } from 'next';
import { industries } from '@/lib/industries';
import IndustryPageTemplate from '@/components/sections/IndustryPageTemplate';

const industry = industries.find(i => i.slug === 'med-spa')!;

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

export default function MedSpaPage() {
  return <IndustryPageTemplate industry={industry} />;
}
