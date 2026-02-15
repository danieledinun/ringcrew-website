'use client';

import { useState } from 'react';
import Link from 'next/link';
import { ArrowLeft, Check } from 'lucide-react';
import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Label } from '@/components/ui/label';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { RadioGroup, RadioGroupItem } from '@/components/ui/radio-group';
import { Checkbox } from '@/components/ui/checkbox';
import { Progress } from '@/components/ui/progress';

const TOTAL_STEPS = 5;

export default function GetStartedPage() {
  const [currentStep, setCurrentStep] = useState(1);
  const [submitted, setSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    // Step 1
    businessName: '',
    contactName: '',
    email: '',
    phone: '',
    industry: '',
    website: '',
    // Step 2
    services: '',
    serviceArea: '',
    hasEmergency: 'no',
    emergencyExamples: '',
    // Step 3
    commonQuestions: '',
    pricingApproach: 'free_estimate',
    priceRanges: '',
    // Step 4
    bookingTools: [] as string[],
    bookingPreference: 'book_directly',
    smsConfirmations: true,
    // Step 5
    phoneSetup: 'forward_existing',
    voicePreference: 'female',
    specialNotes: '',
  });

  const progress = (currentStep / TOTAL_STEPS) * 100;

  const updateField = (field: string, value: any) => {
    setFormData(prev => ({ ...prev, [field]: value }));
  };

  const handleNext = () => {
    if (currentStep < TOTAL_STEPS) {
      setCurrentStep(currentStep + 1);
    }
  };

  const handleBack = () => {
    if (currentStep > 1) {
      setCurrentStep(currentStep - 1);
    }
  };

  const handleSubmit = async () => {
    // Submit form data
    const response = await fetch('/api/onboarding', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(formData),
    });

    if (response.ok) {
      setSubmitted(true);
    }
  };

  if (submitted) {
    return (
      <div className="min-h-screen bg-surface-50 flex items-center justify-center p-4">
        <Card className="max-w-2xl w-full p-12 text-center">
          <div className="w-20 h-20 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-6">
            <Check className="h-10 w-10 text-primary" />
          </div>
          <h1 className="text-4xl font-heading font-bold mb-4">
            You&apos;re All Set!
          </h1>
          <div className="text-lg text-muted-foreground space-y-4 mb-8">
            <p>
              We&apos;re building your AI receptionist for <strong>{formData.businessName}</strong> right now.
            </p>
            <p>Here&apos;s what happens next:</p>
            <ul className="text-left max-w-md mx-auto space-y-2">
              <li className="flex items-start">
                <span className="mr-2">→</span>
                <span>Within 24 hours: We&apos;ll email you at {formData.email} with a test phone number</span>
              </li>
              <li className="flex items-start">
                <span className="mr-2">→</span>
                <span>You call the test number, try it out, give us feedback</span>
              </li>
              <li className="flex items-start">
                <span className="mr-2">→</span>
                <span>We make any tweaks, then flip the switch — you&apos;re live!</span>
              </li>
            </ul>
            <p className="text-sm">
              Your 7-day free trial starts when we go live. No charge until then.
            </p>
          </div>
          <Button variant="outline" asChild>
            <a href="mailto:hello@ringcrew.ai">Have questions? Email us at hello@ringcrew.ai</a>
          </Button>
        </Card>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-surface-50">
      {/* Header */}
      <div className="bg-white border-b border-border sticky top-0 z-50">
        <div className="max-w-4xl mx-auto px-4 py-4 flex items-center justify-between">
          <Link href="/" className="flex items-center space-x-2 text-muted-foreground hover:text-foreground">
            <ArrowLeft className="h-4 w-4" />
            <span className="text-sm">Back to site</span>
          </Link>
          <div className="flex items-center space-x-2">
            <div className="w-8 h-8 bg-primary rounded-lg flex items-center justify-center">
              <span className="text-white font-bold text-xl">R</span>
            </div>
            <span className="font-heading font-bold text-xl">RingCrew</span>
          </div>
          <div className="w-24"></div>
        </div>
        <div className="max-w-4xl mx-auto px-4 pb-4">
          <Progress value={progress} className="h-2" />
          <p className="text-sm text-muted-foreground mt-2">Step {currentStep} of {TOTAL_STEPS}</p>
        </div>
      </div>

      {/* Content */}
      <div className="max-w-3xl mx-auto px-4 py-12">
        <div className="mb-8 text-center">
          <h1 className="text-3xl font-heading font-bold mb-2">
            Let&apos;s Set Up Your AI Receptionist
          </h1>
          <p className="text-muted-foreground">
            Answer a few questions about your business. We&apos;ll have your AI receptionist
            built and ready to take calls within 24 hours.
          </p>
          <div className="flex flex-wrap justify-center gap-4 mt-4 text-sm text-muted-foreground">
            <span className="flex items-center"><Check className="h-4 w-4 text-primary mr-1" /> Free 7-day trial</span>
            <span className="flex items-center"><Check className="h-4 w-4 text-primary mr-1" /> No credit card required</span>
            <span className="flex items-center"><Check className="h-4 w-4 text-primary mr-1" /> Takes ~3 minutes</span>
          </div>
        </div>

        <Card className="p-8">
          {/* Step 1: About Your Business */}
          {currentStep === 1 && (
            <div className="space-y-6">
              <h2 className="text-2xl font-heading font-bold">About Your Business</h2>

              <div>
                <Label htmlFor="businessName">Business Name *</Label>
                <Input
                  id="businessName"
                  value={formData.businessName}
                  onChange={(e) => updateField('businessName', e.target.value)}
                  placeholder="e.g., ABC HVAC Services"
                />
              </div>

              <div>
                <Label htmlFor="contactName">Your Name *</Label>
                <Input
                  id="contactName"
                  value={formData.contactName}
                  onChange={(e) => updateField('contactName', e.target.value)}
                  placeholder="e.g., John Smith"
                />
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <Label htmlFor="email">Email *</Label>
                  <Input
                    id="email"
                    type="email"
                    value={formData.email}
                    onChange={(e) => updateField('email', e.target.value)}
                    placeholder="john@abchvac.com"
                  />
                </div>
                <div>
                  <Label htmlFor="phone">Phone Number *</Label>
                  <Input
                    id="phone"
                    type="tel"
                    value={formData.phone}
                    onChange={(e) => updateField('phone', e.target.value)}
                    placeholder="(555) 123-4567"
                  />
                </div>
              </div>

              <div>
                <Label htmlFor="industry">Industry *</Label>
                <Select value={formData.industry} onValueChange={(value) => updateField('industry', value)}>
                  <SelectTrigger>
                    <SelectValue placeholder="Select your industry" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="hvac">HVAC</SelectItem>
                    <SelectItem value="plumbing">Plumbing</SelectItem>
                    <SelectItem value="dental">Dental</SelectItem>
                    <SelectItem value="med-spa">Med Spa</SelectItem>
                    <SelectItem value="auto-repair">Auto Repair</SelectItem>
                    <SelectItem value="roofing">Roofing</SelectItem>
                    <SelectItem value="pest-control">Pest Control</SelectItem>
                    <SelectItem value="electrical">Electrical</SelectItem>
                    <SelectItem value="landscaping">Landscaping</SelectItem>
                    <SelectItem value="other">Other</SelectItem>
                  </SelectContent>
                </Select>
              </div>

              <div>
                <Label htmlFor="website">Website URL (optional)</Label>
                <Input
                  id="website"
                  type="url"
                  value={formData.website}
                  onChange={(e) => updateField('website', e.target.value)}
                  placeholder="https://www.yourbusiness.com"
                />
                <p className="text-sm text-muted-foreground mt-1">
                  We&apos;ll pull info from your site to train your AI faster
                </p>
              </div>
            </div>
          )}

          {/* Step 2: Services & Hours */}
          {currentStep === 2 && (
            <div className="space-y-6">
              <h2 className="text-2xl font-heading font-bold">Services & Hours</h2>

              <div>
                <Label htmlFor="services">What services do you offer? *</Label>
                <Textarea
                  id="services"
                  value={formData.services}
                  onChange={(e) => updateField('services', e.target.value)}
                  placeholder="e.g., AC repair, furnace installation, duct cleaning, maintenance plans..."
                  rows={4}
                />
              </div>

              <div>
                <Label htmlFor="serviceArea">Service Area (optional)</Label>
                <Input
                  id="serviceArea"
                  value={formData.serviceArea}
                  onChange={(e) => updateField('serviceArea', e.target.value)}
                  placeholder="e.g., Phoenix metro, within 30 miles, zip codes 85001-85099"
                />
              </div>

              <div>
                <Label>Do you offer emergency services? *</Label>
                <RadioGroup value={formData.hasEmergency} onValueChange={(value) => updateField('hasEmergency', value)}>
                  <div className="flex items-center space-x-2">
                    <RadioGroupItem value="yes" id="emergency-yes" />
                    <Label htmlFor="emergency-yes" className="font-normal">Yes</Label>
                  </div>
                  <div className="flex items-center space-x-2">
                    <RadioGroupItem value="no" id="emergency-no" />
                    <Label htmlFor="emergency-no" className="font-normal">No</Label>
                  </div>
                </RadioGroup>
              </div>

              {formData.hasEmergency === 'yes' && (
                <div>
                  <Label htmlFor="emergencyExamples">What counts as an emergency?</Label>
                  <Textarea
                    id="emergencyExamples"
                    value={formData.emergencyExamples}
                    onChange={(e) => updateField('emergencyExamples', e.target.value)}
                    placeholder="e.g., gas leak, burst pipe, no heat in winter"
                    rows={3}
                  />
                </div>
              )}
            </div>
          )}

          {/* Step 3: Common Questions */}
          {currentStep === 3 && (
            <div className="space-y-6">
              <h2 className="text-2xl font-heading font-bold">Common Customer Questions</h2>

              <div>
                <Label htmlFor="commonQuestions">What questions do customers ask most? *</Label>
                <Textarea
                  id="commonQuestions"
                  value={formData.commonQuestions}
                  onChange={(e) => updateField('commonQuestions', e.target.value)}
                  placeholder="List common questions callers ask. Examples: How much does an AC tune-up cost? Do you offer financing? How soon can someone come out?"
                  rows={6}
                />
                <p className="text-sm text-muted-foreground mt-1">
                  Don&apos;t worry about being perfect — list anything you can think of.
                </p>
              </div>

              <div>
                <Label>How should pricing questions be handled? *</Label>
                <RadioGroup value={formData.pricingApproach} onValueChange={(value) => updateField('pricingApproach', value)}>
                  <div className="flex items-center space-x-2">
                    <RadioGroupItem value="share_ranges" id="pricing-share" />
                    <Label htmlFor="pricing-share" className="font-normal">Share general price ranges</Label>
                  </div>
                  <div className="flex items-center space-x-2">
                    <RadioGroupItem value="free_estimate" id="pricing-estimate" />
                    <Label htmlFor="pricing-estimate" className="font-normal">Say pricing depends on the job and offer a free estimate</Label>
                  </div>
                  <div className="flex items-center space-x-2">
                    <RadioGroupItem value="no_pricing" id="pricing-none" />
                    <Label htmlFor="pricing-none" className="font-normal">Don&apos;t discuss pricing — just book the appointment</Label>
                  </div>
                </RadioGroup>
              </div>

              {formData.pricingApproach === 'share_ranges' && (
                <div>
                  <Label htmlFor="priceRanges">Price Ranges</Label>
                  <Textarea
                    id="priceRanges"
                    value={formData.priceRanges}
                    onChange={(e) => updateField('priceRanges', e.target.value)}
                    placeholder="e.g., AC tune-up: $89–$129, Furnace repair: $150–$500"
                    rows={3}
                  />
                </div>
              )}
            </div>
          )}

          {/* Step 4: Appointments & Tools */}
          {currentStep === 4 && (
            <div className="space-y-6">
              <h2 className="text-2xl font-heading font-bold">Appointments & Tools</h2>

              <div>
                <Label>How do you currently book appointments? *</Label>
                <div className="space-y-2 mt-2">
                  {['Google Calendar', 'Calendly', 'ServiceTitan', 'Housecall Pro', 'Jobber', 'GoHighLevel', 'HubSpot', 'Pen & paper / call back'].map((tool) => (
                    <div key={tool} className="flex items-center space-x-2">
                      <Checkbox
                        id={tool}
                        checked={formData.bookingTools.includes(tool)}
                        onCheckedChange={(checked) => {
                          if (checked) {
                            updateField('bookingTools', [...formData.bookingTools, tool]);
                          } else {
                            updateField('bookingTools', formData.bookingTools.filter(t => t !== tool));
                          }
                        }}
                      />
                      <Label htmlFor={tool} className="font-normal">{tool}</Label>
                    </div>
                  ))}
                </div>
              </div>

              <div>
                <Label>What should happen when someone wants to book? *</Label>
                <RadioGroup value={formData.bookingPreference} onValueChange={(value) => updateField('bookingPreference', value)}>
                  <div className="flex items-center space-x-2">
                    <RadioGroupItem value="book_directly" id="book-direct" />
                    <Label htmlFor="book-direct" className="font-normal">Book directly into my calendar</Label>
                  </div>
                  <div className="flex items-center space-x-2">
                    <RadioGroupItem value="collect_info" id="book-collect" />
                    <Label htmlFor="book-collect" className="font-normal">Collect their info and I&apos;ll call them back to schedule</Label>
                  </div>
                  <div className="flex items-center space-x-2">
                    <RadioGroupItem value="both" id="book-both" />
                    <Label htmlFor="book-both" className="font-normal">Both — book if slot available, otherwise collect info</Label>
                  </div>
                </RadioGroup>
              </div>
            </div>
          )}

          {/* Step 5: Final Details */}
          {currentStep === 5 && (
            <div className="space-y-6">
              <h2 className="text-2xl font-heading font-bold">Final Details</h2>

              <div>
                <Label>How would you like to connect your phone? *</Label>
                <RadioGroup value={formData.phoneSetup} onValueChange={(value) => updateField('phoneSetup', value)}>
                  <div className="flex items-center space-x-2">
                    <RadioGroupItem value="forward_existing" id="phone-forward" />
                    <Label htmlFor="phone-forward" className="font-normal">Forward my existing number (easiest)</Label>
                  </div>
                  <div className="flex items-center space-x-2">
                    <RadioGroupItem value="new_number" id="phone-new" />
                    <Label htmlFor="phone-new" className="font-normal">Get a new local number</Label>
                  </div>
                  <div className="flex items-center space-x-2">
                    <RadioGroupItem value="after_hours" id="phone-after" />
                    <Label htmlFor="phone-after" className="font-normal">Forward only after-hours/overflow</Label>
                  </div>
                  <div className="flex items-center space-x-2">
                    <RadioGroupItem value="help_decide" id="phone-help" />
                    <Label htmlFor="phone-help" className="font-normal">Not sure — help me decide</Label>
                  </div>
                </RadioGroup>
              </div>

              <div>
                <Label>AI Voice Preference (optional)</Label>
                <RadioGroup value={formData.voicePreference} onValueChange={(value) => updateField('voicePreference', value)}>
                  <div className="flex items-center space-x-2">
                    <RadioGroupItem value="female" id="voice-female" />
                    <Label htmlFor="voice-female" className="font-normal">Professional & friendly (female)</Label>
                  </div>
                  <div className="flex items-center space-x-2">
                    <RadioGroupItem value="male" id="voice-male" />
                    <Label htmlFor="voice-male" className="font-normal">Professional & friendly (male)</Label>
                  </div>
                  <div className="flex items-center space-x-2">
                    <RadioGroupItem value="no_preference" id="voice-none" />
                    <Label htmlFor="voice-none" className="font-normal">No preference</Label>
                  </div>
                </RadioGroup>
              </div>

              <div>
                <Label htmlFor="specialNotes">Anything else we should know? (optional)</Label>
                <Textarea
                  id="specialNotes"
                  value={formData.specialNotes}
                  onChange={(e) => updateField('specialNotes', e.target.value)}
                  placeholder="Special instructions, things to never say, VIP customers, seasonal notes..."
                  rows={4}
                />
              </div>
            </div>
          )}

          {/* Navigation */}
          <div className="flex justify-between mt-8 pt-6 border-t">
            <Button
              variant="outline"
              onClick={handleBack}
              disabled={currentStep === 1}
            >
              Back
            </Button>
            {currentStep < TOTAL_STEPS ? (
              <Button onClick={handleNext}>
                Continue
              </Button>
            ) : (
              <Button onClick={handleSubmit} className="bg-primary">
                Submit & Start Trial
              </Button>
            )}
          </div>
        </Card>
      </div>
    </div>
  );
}
