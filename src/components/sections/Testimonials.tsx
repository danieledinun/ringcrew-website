export default function ResultsPreview() {
  return (
    <section className="py-20 bg-surface-50">
      <div className="container mx-auto px-4 max-w-6xl">
        <div className="text-center mb-12">
          <h2 className="text-section font-heading">
            What Businesses Like Yours Typically See
          </h2>
          <p className="text-muted-foreground mt-4 max-w-2xl mx-auto">
            Based on industry data for local service businesses using AI receptionists.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {/* Card 1 */}
          <div className="bg-white rounded-brand p-8 shadow-card text-center">
            <div className="text-4xl font-bold text-brand-500 mb-2">95%+</div>
            <div className="text-lg font-semibold mb-2">Call Answer Rate</div>
            <p className="text-muted-foreground text-sm">
              vs. 38–70% for businesses relying on staff to answer phones
            </p>
          </div>

          {/* Card 2 */}
          <div className="bg-white rounded-brand p-8 shadow-card text-center">
            <div className="text-4xl font-bold text-brand-500 mb-2">15–30</div>
            <div className="text-lg font-semibold mb-2">Extra Appointments/Month</div>
            <p className="text-muted-foreground text-sm">
              From calls that previously went to voicemail or were missed entirely
            </p>
          </div>

          {/* Card 3 */}
          <div className="bg-white rounded-brand p-8 shadow-card text-center">
            <div className="text-4xl font-bold text-brand-500 mb-2">&lt;1 sec</div>
            <div className="text-lg font-semibold mb-2">Answer Time</div>
            <p className="text-muted-foreground text-sm">
              Every call picked up instantly — nights, weekends, holidays, lunch breaks
            </p>
          </div>
        </div>

        <p className="text-center text-xs text-muted-foreground mt-8">
          Results vary by business. Based on industry benchmarks for AI answering services in home services and healthcare.
        </p>
      </div>
    </section>
  );
}
