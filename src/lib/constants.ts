export const BUSINESS_INFO = {
  name: 'RingCrew',
  domain: 'ringcrew.ai',
  email: 'hello@ringcrew.ai',
  description: 'AI receptionist for local service businesses',
  tagline: 'Never Miss Another Customer Call',
};

export const PRICING_PLANS = [
  {
    id: 'starter',
    name: 'Starter',
    price: 297,
    period: 'month',
    description: 'Perfect for small businesses getting started',
    features: [
      '100 calls/month included',
      '1 phone number',
      'Appointment booking',
      'Lead qualification',
      'SMS/email summaries',
      'Business hours + after-hours',
      '$0.50/call overage',
    ],
    highlighted: false,
    cta: 'Start Free Trial',
  },
  {
    id: 'growth',
    name: 'Growth',
    price: 597,
    period: 'month',
    description: 'Most popular for growing businesses',
    features: [
      '300 calls/month included',
      '2 phone numbers',
      'Everything in Starter, plus:',
      'CRM integration (ServiceTitan, HubSpot, GHL)',
      'Spanish language support',
      'Appointment reminders',
      '$0.40/call overage',
    ],
    highlighted: true,
    cta: 'Start Free Trial',
  },
  {
    id: 'enterprise',
    name: 'Enterprise',
    price: 997,
    period: 'month',
    description: 'For businesses with high call volume',
    features: [
      'Unlimited calls',
      'Multi-location support',
      'Everything in Growth, plus:',
      'Revenue attribution dashboard',
      'Outbound campaign calls',
      'Custom integrations',
      'Dedicated account manager',
    ],
    highlighted: false,
    cta: 'Start Free Trial',
    pricePrefix: 'Starting at',
  },
];

export const FEATURES = [
  {
    icon: 'Phone',
    title: 'Instant Call Answering',
    description: 'Picks up in under 1 second. No hold music. No voicemail. 24/7/365.',
  },
  {
    icon: 'Calendar',
    title: 'Appointment Booking',
    description: 'Checks your real-time calendar and books appointments during the call.',
  },
  {
    icon: 'CheckCircle',
    title: 'Lead Qualification',
    description: 'Asks the right questions — service needed, address, urgency — and scores every lead.',
  },
  {
    icon: 'AlertCircle',
    title: 'Emergency Routing',
    description: 'Detects urgent keywords and transfers to your phone immediately.',
  },
  {
    icon: 'MessageSquare',
    title: 'SMS Follow-Up',
    description: 'Sends confirmation texts to callers and instant summaries to you.',
  },
  {
    icon: 'BarChart3',
    title: 'Call Analytics',
    description: 'See every call, transcript, booking, and dollar captured in your dashboard.',
  },
];

export const HOW_IT_WORKS_STEPS = [
  {
    number: 1,
    icon: 'ClipboardCheck',
    title: 'Answer a Few Questions',
    description: 'Tell us your business name, services, hours, and common customer questions. Takes about 3 minutes.',
  },
  {
    number: 2,
    icon: 'Bot',
    title: 'We Build Your AI Receptionist',
    description: 'We configure a custom AI agent trained on your business. Handles calls exactly like your best front desk employee.',
  },
  {
    number: 3,
    icon: 'Rocket',
    title: 'Go Live & Start Capturing Calls',
    description: 'Forward your business number or get a new one. Your AI crew is answering calls within 24 hours.',
  },
];

export const STATS = [
  {
    value: '62%',
    label: 'of calls to local businesses go unanswered',
  },
  {
    value: '80%',
    label: 'of callers who reach voicemail won\'t leave a message',
  },
  {
    value: '$156K',
    label: 'average annual revenue lost to missed calls (per business)',
  },
];

export const INTEGRATIONS = [
  'Google Calendar',
  'HubSpot',
  'ServiceTitan',
  'Housecall Pro',
  'Calendly',
  'GoHighLevel',
  'Jobber',
];

export const FAQ_ITEMS = [
  {
    question: 'Will my customers know they\'re talking to AI?',
    answer: 'RingCrew uses the most natural-sounding voice AI available. Most callers don\'t notice — and if they ask, the AI identifies itself politely. You can customize this.',
  },
  {
    question: 'How long does setup take?',
    answer: 'Most businesses are live within 24 hours. Just fill out a short questionnaire about your business and we handle everything.',
  },
  {
    question: 'What happens during emergencies?',
    answer: 'RingCrew detects urgent keywords like "burst pipe" or "gas leak" and immediately transfers the call to your phone. If you don\'t answer, it takes a message and sends you an urgent SMS notification.',
  },
  {
    question: 'Can it integrate with my existing tools?',
    answer: 'Yes. RingCrew integrates with Google Calendar, HubSpot, GoHighLevel, ServiceTitan, Housecall Pro, Calendly, and more.',
  },
  {
    question: 'What if the AI can\'t answer a question?',
    answer: 'It gracefully says "Let me have someone call you back" and sends you the details. No awkward dead-ends.',
  },
  {
    question: 'Is there a contract?',
    answer: 'No long-term contracts. Month-to-month. Cancel anytime.',
  },
  {
    question: 'How much does it cost?',
    answer: 'Plans start at $297/month with a free 7-day trial. See our pricing page for details.',
  },
];

export const TRUST_BADGES = [
  '✓ Free 7-day trial',
  '✓ No credit card',
  '✓ Setup in <24 hours',
  '✓ Cancel anytime',
];
