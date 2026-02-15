export default function WhatIsSection() {
  return (
    <section className="py-20 bg-surface-50" id="what-is-ai-receptionist">
      <div className="container mx-auto px-4 max-w-3xl">
        <h2 className="text-section font-heading text-center mb-8">
          What Is an AI Receptionist?
        </h2>

        <div className="prose prose-lg mx-auto text-muted-foreground">
          <p>
            An AI receptionist is a voice-powered virtual agent that answers your
            business phone calls using artificial intelligence. Unlike a traditional
            answering service or voicemail, an AI receptionist holds natural
            conversations with callers — qualifying leads, booking appointments,
            answering frequently asked questions, and routing emergencies — just
            like a human receptionist, but available 24/7 at a fraction of the cost.
          </p>

          <p>
            RingCrew is an AI receptionist built specifically for local service
            businesses. It comes pre-configured with industry knowledge for HVAC,
            plumbing, dental offices, med spas, auto repair, roofing, and pest
            control companies. Every RingCrew agent is custom-trained on your
            specific business — your services, hours, pricing approach, and
            emergency protocols.
          </p>

          <div className="bg-white border border-border rounded-brand p-6 my-8 not-prose">
            <h3 className="font-heading font-bold text-foreground mb-4">
              RingCrew vs. Other Options
            </h3>
            <div className="overflow-x-auto">
              <table className="w-full text-sm">
                <thead>
                  <tr className="border-b border-border">
                    <th className="text-left py-3 pr-4 font-semibold text-foreground"></th>
                    <th className="text-center py-3 px-4 font-semibold text-brand-600">RingCrew AI</th>
                    <th className="text-center py-3 px-4 font-semibold text-muted-foreground">Answering Service</th>
                    <th className="text-center py-3 px-4 font-semibold text-muted-foreground">Hire a Receptionist</th>
                  </tr>
                </thead>
                <tbody className="text-muted-foreground">
                  <tr className="border-b border-border">
                    <td className="py-3 pr-4 font-medium text-foreground">Monthly cost</td>
                    <td className="text-center py-3 px-4 text-brand-600 font-semibold">$297–$997</td>
                    <td className="text-center py-3 px-4">$800–$2,000</td>
                    <td className="text-center py-3 px-4">$2,800–$4,000+</td>
                  </tr>
                  <tr className="border-b border-border">
                    <td className="py-3 pr-4 font-medium text-foreground">Availability</td>
                    <td className="text-center py-3 px-4 text-brand-600 font-semibold">24/7/365</td>
                    <td className="text-center py-3 px-4">Limited hours</td>
                    <td className="text-center py-3 px-4">Business hours</td>
                  </tr>
                  <tr className="border-b border-border">
                    <td className="py-3 pr-4 font-medium text-foreground">Answer speed</td>
                    <td className="text-center py-3 px-4 text-brand-600 font-semibold">&lt;1 second</td>
                    <td className="text-center py-3 px-4">15–30 seconds</td>
                    <td className="text-center py-3 px-4">Varies</td>
                  </tr>
                  <tr className="border-b border-border">
                    <td className="py-3 pr-4 font-medium text-foreground">Books appointments</td>
                    <td className="text-center py-3 px-4 text-brand-600">✅ Real-time</td>
                    <td className="text-center py-3 px-4">❌ Takes messages</td>
                    <td className="text-center py-3 px-4">✅ Manual</td>
                  </tr>
                  <tr className="border-b border-border">
                    <td className="py-3 pr-4 font-medium text-foreground">Handles multiple calls</td>
                    <td className="text-center py-3 px-4 text-brand-600">✅ Unlimited</td>
                    <td className="text-center py-3 px-4">❌ Limited</td>
                    <td className="text-center py-3 px-4">❌ One at a time</td>
                  </tr>
                  <tr>
                    <td className="py-3 pr-4 font-medium text-foreground">Setup time</td>
                    <td className="text-center py-3 px-4 text-brand-600 font-semibold">&lt;24 hours</td>
                    <td className="text-center py-3 px-4">1–2 weeks</td>
                    <td className="text-center py-3 px-4">2–6 weeks</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
