import SectionHeader from '@/components/shared/SectionHeader';
import { Card } from '@/components/ui/card';
import { Play, Pause } from 'lucide-react';

export default function LiveDemo() {
  return (
    <section className="py-20 bg-surface-50">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeader
          title="Hear RingCrew in Action"
          subtitle="This is a real call answered by a RingCrew AI receptionist for an HVAC company. The caller needed to book an AC repair."
          centered
        />

        <Card className="p-8">
          {/* Placeholder for audio player */}
          <div className="flex items-center justify-center p-12 bg-surface-100 rounded-lg">
            <div className="text-center">
              <div className="w-16 h-16 bg-primary rounded-full flex items-center justify-center mx-auto mb-4">
                <Play className="h-8 w-8 text-white" />
              </div>
              <p className="text-muted-foreground">
                Audio player placeholder
                <br />
                <span className="text-sm">Sample call demo will be added here</span>
              </p>
            </div>
          </div>

          {/* Transcript placeholder */}
          <div className="mt-6 p-4 bg-surface-50 rounded-lg">
            <p className="font-semibold mb-2">Transcript:</p>
            <p className="text-sm text-muted-foreground">
              AI: &quot;Thank you for calling ABC HVAC! How can I help you today?&quot;
              <br />
              Caller: &quot;Hi, my AC stopped working and it&apos;s really hot in here.&quot;
              <br />
              AI: &quot;I&apos;m sorry to hear that. Let me get you scheduled for a service call. What&apos;s your address?&quot;
            </p>
          </div>
        </Card>
      </div>
    </section>
  );
}
