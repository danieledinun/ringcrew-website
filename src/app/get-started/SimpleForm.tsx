'use client';

import { useState, useEffect, FormEvent } from 'react';
import Link from 'next/link';
import { ArrowLeft, Check } from 'lucide-react';

const TOTAL_STEPS = 5;

export default function SimpleForm() {
  const [currentStep, setCurrentStep] = useState(1);
  const [submitted, setSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [formData, setFormData] = useState({
    businessName: '',
    contactName: '',
    email: '',
    phone: '',
    industry: '',
    website: '',
    services: '',
    serviceArea: '',
    hasEmergency: 'no',
    emergencyExamples: '',
    commonQuestions: '',
    pricingApproach: 'free_estimate',
    priceRanges: '',
    bookingTools: [] as string[],
    bookingPreference: 'book_directly',
    phoneSetup: 'forward_existing',
    voicePreference: 'female',
    specialNotes: '',
  });

  const progress = (currentStep / TOTAL_STEPS) * 100;

  useEffect(() => {
    if (typeof window !== 'undefined' && (window as any).gtag) {
      (window as any).gtag('event', 'conversion', {
        'send_to': 'AW-17954576067/bwEnCInh6fgbEMOttPFC',
        'value': 10.0,
        'currency': 'USD'
      });
    }
  }, []);

  const updateField = (field: string, value: any) => {
    setFormData(prev => ({ ...prev, [field]: value }));
  };

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      const response = await fetch('/api/onboarding', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        if (typeof window !== 'undefined' && (window as any).gtag) {
          (window as any).gtag('event', 'conversion', {
            'send_to': 'AW-17954576067/gWnjCIzh6fgbEMOttPFC',
            'value': 297.0,
            'currency': 'USD'
          });
        }
        setSubmitted(true);
      } else {
        alert('Something went wrong. Please try again or email us at hello@ringcrew.ai');
      }
    } catch (error) {
      alert('Network error. Please check your connection and try again.');
    } finally {
      setIsSubmitting(false);
    }
  };

  if (submitted) {
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center p-4">
        <div className="max-w-2xl w-full bg-white rounded-lg shadow-lg p-12 text-center">
          <div className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6">
            <Check className="h-10 w-10 text-green-600" />
          </div>
          <h1 className="text-4xl font-bold mb-4">You're All Set!</h1>
          <div className="text-lg text-gray-600 space-y-4 mb-8">
            <p>We're building your AI receptionist for <strong>{formData.businessName}</strong> right now.</p>
            <p>Here's what happens next:</p>
            <ul className="text-left max-w-md mx-auto space-y-2">
              <li>→ Within 24 hours: We'll email you at {formData.email} with a test phone number</li>
              <li>→ You call the test number, try it out, give us feedback</li>
              <li>→ We make any tweaks, then flip the switch — you're live!</li>
            </ul>
            <p className="text-sm">Your 7-day free trial starts when we go live. No charge until then.</p>
          </div>
          <a href="mailto:hello@ringcrew.ai" className="inline-block px-6 py-3 border-2 border-gray-300 rounded-lg hover:bg-gray-50">
            Have questions? Email us at hello@ringcrew.ai
          </a>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="bg-white border-b sticky top-0 z-50">
        <div className="max-w-4xl mx-auto px-4 py-4 flex items-center justify-between">
          <Link href="/" className="flex items-center space-x-2 text-gray-600 hover:text-gray-900">
            <ArrowLeft className="h-4 w-4" />
            <span className="text-sm">Back to site</span>
          </Link>
          <span className="font-bold text-xl">RingCrew</span>
          <div className="w-24"></div>
        </div>
        <div className="max-w-4xl mx-auto px-4 pb-4">
          <div className="w-full bg-gray-200 rounded-full h-2">
            <div className="bg-green-600 h-2 rounded-full transition-all" style={{ width: `${progress}%` }}></div>
          </div>
          <p className="text-sm text-gray-600 mt-2">Step {currentStep} of {TOTAL_STEPS}</p>
        </div>
      </div>

      <div className="max-w-3xl mx-auto px-4 py-12">
        <div className="mb-8 text-center">
          <h1 className="text-3xl font-bold mb-2">Let's Set Up Your AI Receptionist</h1>
          <p className="text-gray-600">
            Answer a few questions about your business. We'll have your AI receptionist built and ready to take calls within 24 hours.
          </p>
        </div>

        <form onSubmit={handleSubmit} className="bg-white rounded-lg shadow-lg p-8">
          {currentStep === 1 && (
            <div className="space-y-6">
              <h2 className="text-2xl font-bold">About Your Business</h2>

              <div>
                <label className="block text-sm font-medium mb-2">Business Name *</label>
                <input
                  type="text"
                  required
                  value={formData.businessName}
                  onChange={(e) => updateField('businessName', e.target.value)}
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent"
                  placeholder="e.g., ABC HVAC Services"
                />
              </div>

              <div>
                <label className="block text-sm font-medium mb-2">Your Name *</label>
                <input
                  type="text"
                  required
                  value={formData.contactName}
                  onChange={(e) => updateField('contactName', e.target.value)}
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent"
                  placeholder="e.g., John Smith"
                />
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium mb-2">Email *</label>
                  <input
                    type="email"
                    required
                    value={formData.email}
                    onChange={(e) => updateField('email', e.target.value)}
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent"
                    placeholder="john@abchvac.com"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium mb-2">Phone Number *</label>
                  <input
                    type="tel"
                    required
                    value={formData.phone}
                    onChange={(e) => updateField('phone', e.target.value)}
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent"
                    placeholder="(555) 123-4567"
                  />
                </div>
              </div>

              <div>
                <label className="block text-sm font-medium mb-2">Industry *</label>
                <select
                  required
                  value={formData.industry}
                  onChange={(e) => updateField('industry', e.target.value)}
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent"
                >
                  <option value="">Select your industry</option>
                  <option value="hvac">HVAC</option>
                  <option value="plumbing">Plumbing</option>
                  <option value="dental">Dental</option>
                  <option value="med-spa">Med Spa</option>
                  <option value="auto-repair">Auto Repair</option>
                  <option value="roofing">Roofing</option>
                  <option value="pest-control">Pest Control</option>
                  <option value="electrical">Electrical</option>
                  <option value="landscaping">Landscaping</option>
                  <option value="other">Other</option>
                </select>
              </div>

              <div>
                <label className="block text-sm font-medium mb-2">Website URL (optional)</label>
                <input
                  type="url"
                  value={formData.website}
                  onChange={(e) => updateField('website', e.target.value)}
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent"
                  placeholder="https://www.yourbusiness.com"
                />
              </div>
            </div>
          )}

          {currentStep === 2 && (
            <div className="space-y-6">
              <h2 className="text-2xl font-bold">Services & Hours</h2>

              <div>
                <label className="block text-sm font-medium mb-2">What services do you offer? *</label>
                <textarea
                  required
                  value={formData.services}
                  onChange={(e) => updateField('services', e.target.value)}
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent"
                  rows={4}
                  placeholder="e.g., AC repair, furnace installation, duct cleaning..."
                />
              </div>

              <div>
                <label className="block text-sm font-medium mb-2">Service Area (optional)</label>
                <input
                  type="text"
                  value={formData.serviceArea}
                  onChange={(e) => updateField('serviceArea', e.target.value)}
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent"
                  placeholder="e.g., Phoenix metro, within 30 miles"
                />
              </div>

              <div>
                <label className="block text-sm font-medium mb-2">Do you offer emergency services? *</label>
                <div className="space-y-2">
                  <label className="flex items-center">
                    <input
                      type="radio"
                      value="yes"
                      checked={formData.hasEmergency === 'yes'}
                      onChange={(e) => updateField('hasEmergency', e.target.value)}
                      className="mr-2"
                    />
                    Yes
                  </label>
                  <label className="flex items-center">
                    <input
                      type="radio"
                      value="no"
                      checked={formData.hasEmergency === 'no'}
                      onChange={(e) => updateField('hasEmergency', e.target.value)}
                      className="mr-2"
                    />
                    No
                  </label>
                </div>
              </div>

              {formData.hasEmergency === 'yes' && (
                <div>
                  <label className="block text-sm font-medium mb-2">What counts as an emergency?</label>
                  <textarea
                    value={formData.emergencyExamples}
                    onChange={(e) => updateField('emergencyExamples', e.target.value)}
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent"
                    rows={3}
                    placeholder="e.g., gas leak, burst pipe, no heat in winter"
                  />
                </div>
              )}
            </div>
          )}

          {currentStep === 3 && (
            <div className="space-y-6">
              <h2 className="text-2xl font-bold">Common Customer Questions</h2>

              <div>
                <label className="block text-sm font-medium mb-2">What questions do customers ask most? *</label>
                <textarea
                  required
                  value={formData.commonQuestions}
                  onChange={(e) => updateField('commonQuestions', e.target.value)}
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent"
                  rows={6}
                  placeholder="List common questions callers ask..."
                />
              </div>

              <div>
                <label className="block text-sm font-medium mb-2">How should pricing questions be handled? *</label>
                <div className="space-y-2">
                  <label className="flex items-center">
                    <input
                      type="radio"
                      value="share_ranges"
                      checked={formData.pricingApproach === 'share_ranges'}
                      onChange={(e) => updateField('pricingApproach', e.target.value)}
                      className="mr-2"
                    />
                    Share general price ranges
                  </label>
                  <label className="flex items-center">
                    <input
                      type="radio"
                      value="free_estimate"
                      checked={formData.pricingApproach === 'free_estimate'}
                      onChange={(e) => updateField('pricingApproach', e.target.value)}
                      className="mr-2"
                    />
                    Say pricing depends on the job and offer a free estimate
                  </label>
                  <label className="flex items-center">
                    <input
                      type="radio"
                      value="no_pricing"
                      checked={formData.pricingApproach === 'no_pricing'}
                      onChange={(e) => updateField('pricingApproach', e.target.value)}
                      className="mr-2"
                    />
                    Don't discuss pricing — just book the appointment
                  </label>
                </div>
              </div>

              {formData.pricingApproach === 'share_ranges' && (
                <div>
                  <label className="block text-sm font-medium mb-2">Price Ranges</label>
                  <textarea
                    value={formData.priceRanges}
                    onChange={(e) => updateField('priceRanges', e.target.value)}
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent"
                    rows={3}
                    placeholder="e.g., AC tune-up: $89–$129, Furnace repair: $150–$500"
                  />
                </div>
              )}
            </div>
          )}

          {currentStep === 4 && (
            <div className="space-y-6">
              <h2 className="text-2xl font-bold">Appointments & Tools</h2>

              <div>
                <label className="block text-sm font-medium mb-2">What should happen when someone wants to book? *</label>
                <div className="space-y-2">
                  <label className="flex items-center">
                    <input
                      type="radio"
                      value="book_directly"
                      checked={formData.bookingPreference === 'book_directly'}
                      onChange={(e) => updateField('bookingPreference', e.target.value)}
                      className="mr-2"
                    />
                    Book directly into my calendar
                  </label>
                  <label className="flex items-center">
                    <input
                      type="radio"
                      value="collect_info"
                      checked={formData.bookingPreference === 'collect_info'}
                      onChange={(e) => updateField('bookingPreference', e.target.value)}
                      className="mr-2"
                    />
                    Collect their info and I'll call them back to schedule
                  </label>
                  <label className="flex items-center">
                    <input
                      type="radio"
                      value="both"
                      checked={formData.bookingPreference === 'both'}
                      onChange={(e) => updateField('bookingPreference', e.target.value)}
                      className="mr-2"
                    />
                    Both — book if slot available, otherwise collect info
                  </label>
                </div>
              </div>
            </div>
          )}

          {currentStep === 5 && (
            <div className="space-y-6">
              <h2 className="text-2xl font-bold">Final Details</h2>

              <div>
                <label className="block text-sm font-medium mb-2">How would you like to connect your phone? *</label>
                <div className="space-y-2">
                  <label className="flex items-center">
                    <input
                      type="radio"
                      value="forward_existing"
                      checked={formData.phoneSetup === 'forward_existing'}
                      onChange={(e) => updateField('phoneSetup', e.target.value)}
                      className="mr-2"
                    />
                    Forward my existing number (easiest)
                  </label>
                  <label className="flex items-center">
                    <input
                      type="radio"
                      value="new_number"
                      checked={formData.phoneSetup === 'new_number'}
                      onChange={(e) => updateField('phoneSetup', e.target.value)}
                      className="mr-2"
                    />
                    Get a new local number
                  </label>
                  <label className="flex items-center">
                    <input
                      type="radio"
                      value="after_hours"
                      checked={formData.phoneSetup === 'after_hours'}
                      onChange={(e) => updateField('phoneSetup', e.target.value)}
                      className="mr-2"
                    />
                    Forward only after-hours/overflow
                  </label>
                </div>
              </div>

              <div>
                <label className="block text-sm font-medium mb-2">Anything else we should know? (optional)</label>
                <textarea
                  value={formData.specialNotes}
                  onChange={(e) => updateField('specialNotes', e.target.value)}
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent"
                  rows={4}
                  placeholder="Special instructions, things to never say, VIP customers..."
                />
              </div>
            </div>
          )}

          <div className="flex justify-between mt-8 pt-6 border-t">
            {currentStep > 1 && (
              <button
                type="button"
                onClick={() => setCurrentStep(currentStep - 1)}
                className="px-6 py-2 border-2 border-gray-300 rounded-lg hover:bg-gray-50"
              >
                Back
              </button>
            )}
            {currentStep < TOTAL_STEPS ? (
              <button
                type="button"
                onClick={() => setCurrentStep(currentStep + 1)}
                className="ml-auto px-6 py-2 bg-green-600 text-white rounded-lg hover:bg-green-700"
              >
                Continue
              </button>
            ) : (
              <button
                type="submit"
                disabled={isSubmitting}
                className="ml-auto px-6 py-2 bg-green-600 text-white rounded-lg hover:bg-green-700 disabled:opacity-50"
              >
                {isSubmitting ? 'Submitting...' : 'Submit & Start Trial'}
              </button>
            )}
          </div>
        </form>
      </div>
    </div>
  );
}
