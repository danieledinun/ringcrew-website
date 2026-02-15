import Hero from '@/components/sections/Hero';
import TrustBar from '@/components/sections/TrustBar';
import ProblemStatement from '@/components/sections/ProblemStatement';
import HowItWorks from '@/components/sections/HowItWorks';
import Features from '@/components/sections/Features';
import LiveDemo from '@/components/sections/LiveDemo';
import ROICalculator from '@/components/sections/ROICalculator';
import IndustryGrid from '@/components/sections/IndustryGrid';
import ResultsPreview from '@/components/sections/Testimonials';
import FAQ from '@/components/sections/FAQ';
import FinalCTA from '@/components/sections/FinalCTA';
import { HomepageJsonLd, FAQJsonLd } from '@/components/seo/JsonLd';

export default function Home() {
  return (
    <>
      <HomepageJsonLd />
      <FAQJsonLd faqs={[
        {
          question: "Will my customers know they're talking to AI?",
          answer: "RingCrew uses the most natural-sounding voice AI available. Most callers don't notice — and if they ask, the AI identifies itself politely. You can customize this."
        },
        {
          question: "How long does setup take?",
          answer: "Most businesses are live within 24 hours. Just fill out a short questionnaire about your business and we handle everything."
        },
        {
          question: "What happens during emergencies?",
          answer: "RingCrew detects urgent keywords like 'burst pipe' or 'gas leak' and immediately transfers the call to your phone. If you don't answer, it takes a message and sends you an urgent SMS notification."
        },
        {
          question: "Can it integrate with my existing tools?",
          answer: "Yes. RingCrew integrates with Google Calendar, HubSpot, GoHighLevel, ServiceTitan, Housecall Pro, Calendly, and more."
        },
        {
          question: "What if the AI can't answer a question?",
          answer: "It gracefully says 'Let me have someone call you back' and sends you the details. No awkward dead-ends."
        },
        {
          question: "Is there a contract?",
          answer: "No long-term contracts. Month-to-month. Cancel anytime."
        },
        {
          question: "How much does it cost?",
          answer: "Plans start at $297/month with a free 7-day trial. No credit card required. See our pricing page for details."
        }
      ]} />
      <Hero />
      <TrustBar />
      <ProblemStatement />
      <HowItWorks />
      <Features />
      <LiveDemo />
      <ROICalculator />
      <IndustryGrid />
      <ResultsPreview />
      <FAQ />
      <FinalCTA />
    </>
  );
}
