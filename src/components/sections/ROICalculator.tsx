'use client';

import { useState } from 'react';
import { Card } from '@/components/ui/card';
import { Slider } from '@/components/ui/slider';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import SectionHeader from '@/components/shared/SectionHeader';
import GetStartedButton from '@/components/shared/GetStartedButton';

export default function ROICalculator() {
  const [callsPerWeek, setCallsPerWeek] = useState(50);
  const [missedPercent, setMissedPercent] = useState(35);
  const [avgJobValue, setAvgJobValue] = useState(300);

  const callsPerMonth = callsPerWeek * 4;
  const missedCallsPerMonth = Math.round(callsPerMonth * (missedPercent / 100));
  const lostRevenue = Math.round(missedCallsPerMonth * avgJobValue * 0.3); // 30% conversion
  const paybackDays = Math.ceil(297 / (lostRevenue / 30)); // based on starter plan

  return (
    <section className="py-20 bg-white">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeader
          title="How Much Revenue Are You Losing to Missed Calls?"
          centered
        />

        <Card className="p-8">
          <div className="space-y-8">
            {/* Slider 1 */}
            <div>
              <Label className="mb-4 block">
                How many calls does your business get per week?
              </Label>
              <div className="flex items-center gap-4">
                <Slider
                  value={[callsPerWeek]}
                  onValueChange={(value) => setCallsPerWeek(value[0])}
                  min={10}
                  max={200}
                  step={5}
                  className="flex-1"
                />
                <span className="font-semibold w-12 text-right">{callsPerWeek}</span>
              </div>
            </div>

            {/* Slider 2 */}
            <div>
              <Label className="mb-4 block">
                What % do you think go unanswered?
              </Label>
              <div className="flex items-center gap-4">
                <Slider
                  value={[missedPercent]}
                  onValueChange={(value) => setMissedPercent(value[0])}
                  min={10}
                  max={60}
                  step={5}
                  className="flex-1"
                />
                <span className="font-semibold w-12 text-right">{missedPercent}%</span>
              </div>
            </div>

            {/* Input */}
            <div>
              <Label htmlFor="jobValue" className="mb-4 block">
                What&apos;s your average job/ticket value?
              </Label>
              <div className="flex items-center gap-2">
                <span className="text-2xl">$</span>
                <Input
                  id="jobValue"
                  type="number"
                  value={avgJobValue}
                  onChange={(e) => setAvgJobValue(Number(e.target.value))}
                  className="text-lg"
                />
              </div>
            </div>

            {/* Results */}
            <div className="bg-primary/10 rounded-lg p-6 text-center">
              <p className="text-lg mb-2 text-muted-foreground">
                You&apos;re losing approximately
              </p>
              <p className="text-4xl font-bold text-primary mb-2">
                ${lostRevenue.toLocaleString()}
              </p>
              <p className="text-lg mb-4 text-muted-foreground">
                per month in missed calls
              </p>
              <p className="text-sm text-foreground">
                RingCrew would pay for itself in <strong>{paybackDays} days</strong>
              </p>
            </div>

            <div className="text-center pt-4">
              <GetStartedButton />
              <p className="mt-4 text-sm text-muted-foreground">
                Stop Losing Revenue
              </p>
            </div>
          </div>
        </Card>
      </div>
    </section>
  );
}
