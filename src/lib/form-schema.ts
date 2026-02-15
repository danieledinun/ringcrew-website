import { z } from 'zod';

export const onboardingSchema = z.object({
  // Step 1: About Your Business
  businessName: z.string().min(2, 'Business name is required'),
  contactName: z.string().min(2, 'Your name is required'),
  email: z.string().email('Valid email is required'),
  phone: z.string().min(10, 'Valid phone number is required'),
  industry: z.string().min(1, 'Please select an industry'),
  industryOther: z.string().optional(),
  website: z.string().url('Must be a valid URL').optional().or(z.literal('')),

  // Step 2: Services & Hours
  services: z.string().min(10, 'Please describe your services'),
  businessHours: z.record(z.string(), z.object({
    open: z.string(),
    close: z.string(),
    closed: z.boolean(),
  })),
  serviceArea: z.string().optional(),
  hasEmergency: z.boolean(),
  emergencyExamples: z.string().optional(),

  // Step 3: Common Customer Questions
  commonQuestions: z.string().min(10, 'Please list some common questions'),
  pricingApproach: z.enum(['share_ranges', 'free_estimate', 'no_pricing']),
  priceRanges: z.string().optional(),

  // Step 4: Appointments & Tools
  bookingTools: z.array(z.string()).min(1, 'Select at least one option'),
  bookingPreference: z.enum(['book_directly', 'collect_info', 'both']),
  smsConfirmations: z.boolean(),
  notificationPreference: z.array(z.string()).min(1),

  // Step 5: Final Details
  phoneSetup: z.enum(['forward_existing', 'new_number', 'after_hours', 'help_decide']),
  voicePreference: z.enum(['female', 'male', 'no_preference']).optional(),
  specialNotes: z.string().optional(),
  source: z.string().optional(),
});

export type OnboardingFormData = z.infer<typeof onboardingSchema>;
