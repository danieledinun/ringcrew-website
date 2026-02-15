import Hero from '@/components/sections/Hero';
import TrustBar from '@/components/sections/TrustBar';
import ProblemStatement from '@/components/sections/ProblemStatement';
import HowItWorks from '@/components/sections/HowItWorks';
import Features from '@/components/sections/Features';
import LiveDemo from '@/components/sections/LiveDemo';
import ROICalculator from '@/components/sections/ROICalculator';
import IndustryGrid from '@/components/sections/IndustryGrid';
import Testimonials from '@/components/sections/Testimonials';
import FAQ from '@/components/sections/FAQ';
import FinalCTA from '@/components/sections/FinalCTA';

export default function Home() {
  return (
    <>
      <Hero />
      <TrustBar />
      <ProblemStatement />
      <HowItWorks />
      <Features />
      <LiveDemo />
      <ROICalculator />
      <IndustryGrid />
      <Testimonials />
      <FAQ />
      <FinalCTA />
    </>
  );
}
