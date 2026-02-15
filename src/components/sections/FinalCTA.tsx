import GetStartedButton from '@/components/shared/GetStartedButton';

export default function FinalCTA() {
  return (
    <section className="py-20 bg-brand-800 text-white">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h2 className="text-4xl md:text-5xl font-heading font-bold mb-6">
          Ready to Stop Missing Calls?
        </h2>
        <p className="text-xl mb-8 text-brand-100">
          Answer a few questions. We&apos;ll build your AI receptionist in under 24 hours.
          <br />
          Free for 7 days — no credit card, no commitment.
        </p>
        <GetStartedButton className="bg-white text-brand-800 hover:bg-gray-100 shadow-cta" />
        <p className="mt-6 text-sm text-brand-200">
          Takes about 3 minutes. No phone call needed.
        </p>
      </div>
    </section>
  );
}
