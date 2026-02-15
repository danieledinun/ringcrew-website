export default function LiveDemo() {
  return (
    <section className="py-20">
      <div className="container mx-auto px-4 max-w-4xl">
        <div className="text-center mb-8">
          <h2 className="text-section font-heading">
            Hear RingCrew in Action
          </h2>
          <p className="text-muted-foreground mt-4 max-w-2xl mx-auto">
            Here's what a typical call sounds like when RingCrew answers for an HVAC company.
          </p>
        </div>

        {/* Transcript-only display (until real audio is recorded) */}
        <div className="bg-surface-50 border border-border rounded-brand p-8 max-w-2xl mx-auto">
          <div className="flex items-center gap-2 mb-6">
            <div className="w-3 h-3 rounded-full bg-brand-500 animate-pulse" />
            <span className="text-sm font-medium text-muted-foreground">Sample Conversation</span>
          </div>

          <div className="space-y-4 text-sm">
            <div>
              <span className="font-semibold text-brand-600">RingCrew:</span>
              <span className="text-foreground ml-2">&quot;Thank you for calling Comfort Air HVAC! How can I help you today?&quot;</span>
            </div>
            <div>
              <span className="font-semibold text-muted-foreground">Caller:</span>
              <span className="text-foreground ml-2">&quot;Hi, my AC stopped working and it&apos;s really hot in here.&quot;</span>
            </div>
            <div>
              <span className="font-semibold text-brand-600">RingCrew:</span>
              <span className="text-foreground ml-2">&quot;I&apos;m sorry to hear that! Let me get you scheduled right away. Can I get the address where you need service?&quot;</span>
            </div>
            <div>
              <span className="font-semibold text-muted-foreground">Caller:</span>
              <span className="text-foreground ml-2">&quot;Sure, it&apos;s 4521 Oak Street.&quot;</span>
            </div>
            <div>
              <span className="font-semibold text-brand-600">RingCrew:</span>
              <span className="text-foreground ml-2">&quot;Got it. We have a technician available tomorrow morning between 8 and 10 AM — does that work for you?&quot;</span>
            </div>
            <div>
              <span className="font-semibold text-muted-foreground">Caller:</span>
              <span className="text-foreground ml-2">&quot;That&apos;s perfect.&quot;</span>
            </div>
            <div>
              <span className="font-semibold text-brand-600">RingCrew:</span>
              <span className="text-foreground ml-2">&quot;Great! You&apos;re all set for tomorrow morning. Can I get your name and the best number to reach you?&quot;</span>
            </div>
          </div>

          <div className="mt-6 pt-4 border-t border-border">
            <p className="text-xs text-muted-foreground">
              This is a sample conversation flow. Your AI receptionist is customized to your business — your services, your hours, your scheduling preferences.
            </p>
          </div>
        </div>

        <div className="text-center mt-8">
          <a href="/get-started" className="inline-flex items-center justify-center rounded-brand bg-brand-500 text-white px-8 py-3 font-semibold hover:bg-brand-600 transition-colors shadow-cta">
            Get Started Free →
          </a>
        </div>
      </div>
    </section>
  );
}
