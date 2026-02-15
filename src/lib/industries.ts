export interface Industry {
  slug: string;
  name: string;
  headline: string;
  subheadline: string;
  heroStat: { value: string; label: string };
  avgJobValue: number;
  missedCallPercent: number;
  painPoints: string[];
  emergencyKeywords: string[];
  faq: Array<{ q: string; a: string }>;
  testimonial: { quote: string; name: string; business: string; city: string };
  metaTitle: string;
  metaDescription: string;
  keywords: string[];
}

export const industries: Industry[] = [
  {
    slug: 'hvac',
    name: 'HVAC',
    headline: 'Never Miss Another HVAC Service Call',
    subheadline: 'RingCrew answers every call to your HVAC company 24/7 — booking tune-ups, qualifying emergency repairs, and capturing leads you\'re currently losing to voicemail.',
    heroStat: { value: '$12,400', label: 'avg. revenue captured in first month' },
    avgJobValue: 350,
    missedCallPercent: 38,
    painPoints: [
      'Summer AC rush = phones ring off the hook, can\'t answer them all',
      'After-hours emergency calls go to voicemail — customer calls a competitor',
      'Techs in the field can\'t answer the office phone',
    ],
    emergencyKeywords: ['no heat', 'no AC', 'gas leak', 'pipe burst', 'flooding'],
    faq: [
      {
        q: 'Can RingCrew handle emergency HVAC calls?',
        a: 'Yes. It detects keywords like "no heat" or "gas leak" and immediately transfers to your emergency line.'
      },
      {
        q: 'Does it integrate with ServiceTitan?',
        a: 'Yes. RingCrew syncs with ServiceTitan, Housecall Pro, and Jobber to create jobs and update your CRM automatically.'
      },
      {
        q: 'What if someone calls about financing?',
        a: 'RingCrew can explain your financing options and qualifications, or connect them with someone who can discuss payment plans in detail.'
      },
      {
        q: 'Can it book same-day appointments?',
        a: 'Absolutely. It checks your real-time calendar and can book same-day emergency slots if available.'
      },
      {
        q: 'How does it handle seasonal volume spikes?',
        a: 'RingCrew scales instantly — whether you get 10 calls or 100 calls in a day, every single one is answered in under 1 second.'
      },
    ],
    testimonial: {
      quote: 'RingCrew answered over 200 calls in our first month and booked 43 appointments. We\'ve already seen a 30% increase in revenue.',
      name: 'Mike R.',
      business: 'Comfort Zone HVAC',
      city: 'Phoenix, AZ'
    },
    metaTitle: 'AI Receptionist for HVAC Companies | Answer Every Call 24/7 | RingCrew',
    metaDescription: 'Stop missing HVAC service calls. RingCrew\'s AI receptionist answers 24/7, books appointments, qualifies emergency repairs, and captures $12K+ in monthly revenue. Try free.',
    keywords: ['AI receptionist HVAC', 'HVAC answering service', 'AI phone answering HVAC', 'HVAC missed calls', 'after hours HVAC answering'],
  },
  {
    slug: 'plumbing',
    name: 'Plumbing',
    headline: 'Capture Every Plumbing Emergency Call',
    subheadline: 'RingCrew answers your plumbing business calls 24/7 — booking routine appointments, routing emergencies, and ensuring no customer ever gets voicemail again.',
    heroStat: { value: '$15,200', label: 'avg. emergency revenue captured monthly' },
    avgJobValue: 425,
    missedCallPercent: 42,
    painPoints: [
      'Emergency calls at 2am go unanswered — customer finds another plumber',
      'You\'re under a sink and can\'t answer the phone',
      'Lost track of how many calls you miss while on job sites',
    ],
    emergencyKeywords: ['burst pipe', 'water leak', 'no water', 'sewer backup', 'flooding'],
    faq: [
      {
        q: 'How does RingCrew handle emergency vs routine calls?',
        a: 'It asks questions to assess urgency. Emergencies like burst pipes are transferred immediately to your phone. Routine calls are booked into your calendar.'
      },
      {
        q: 'Can it give price estimates?',
        a: 'Yes, based on the pricing guidelines you provide. It can share typical ranges or say you\'ll provide a free estimate on-site.'
      },
      {
        q: 'What if I\'m already on an emergency job?',
        a: 'RingCrew takes detailed information, books them for the next available slot, and sends you a text summary so you can follow up when ready.'
      },
      {
        q: 'Does it work with dispatch software?',
        a: 'Yes. RingCrew integrates with ServiceTitan, Housecall Pro, Jobber, and other field service management tools.'
      },
      {
        q: 'Can it handle commercial plumbing calls?',
        a: 'Absolutely. You can configure it to route commercial calls differently than residential, or collect specific information for commercial projects.'
      },
    ],
    testimonial: {
      quote: 'We used to miss 50+ calls a month. RingCrew catches every single one now, even at 3am. Game changer for our emergency business.',
      name: 'Carlos M.',
      business: 'Rapid Flow Plumbing',
      city: 'Austin, TX'
    },
    metaTitle: 'AI Answering Service for Plumbers | 24/7 Call Answering | RingCrew',
    metaDescription: 'Never miss a plumbing emergency again. RingCrew AI answers every call 24/7, routes emergencies instantly, and books appointments while you\'re on the job. Free trial.',
    keywords: ['AI answering service plumber', 'plumbing call answering', '24/7 plumber phone', 'plumbing receptionist AI', 'emergency plumbing calls'],
  },
  {
    slug: 'dental',
    name: 'Dental',
    headline: 'Fill Your Dental Schedule with AI',
    subheadline: 'RingCrew answers every call to your dental office 24/7 — booking new patients, confirming appointments, and handling emergencies so your team can focus on patient care.',
    heroStat: { value: '47', label: 'new patient appointments booked per month (avg)' },
    avgJobValue: 280,
    missedCallPercent: 35,
    painPoints: [
      'Front desk is busy with patients — phone calls go to voicemail',
      'After-hours calls from potential new patients go unanswered',
      'Lunch breaks and staff shortages mean missed appointment requests',
    ],
    emergencyKeywords: ['tooth pain', 'dental emergency', 'broken tooth', 'knocked out tooth', 'severe pain'],
    faq: [
      {
        q: 'Can RingCrew verify insurance?',
        a: 'It can collect insurance information and confirm you accept their plan, then have your team verify benefits before the appointment.'
      },
      {
        q: 'How does it handle dental emergencies?',
        a: 'It asks qualifying questions to assess severity, then either books an emergency slot or transfers to your on-call line depending on your protocol.'
      },
      {
        q: 'Will it sound professional for a medical office?',
        a: 'Absolutely. RingCrew uses a professional, empathetic voice perfect for healthcare settings. Patients often don\'t realize they\'re speaking to AI.'
      },
      {
        q: 'Can it answer questions about procedures?',
        a: 'Yes. It can explain common procedures, prep instructions, and what to expect — based on information you provide during setup.'
      },
      {
        q: 'Does it integrate with Dentrix or Eaglesoft?',
        a: 'Yes. RingCrew can integrate with most dental practice management software to book appointments and update patient records.'
      },
    ],
    testimonial: {
      quote: 'RingCrew books 12-15 new patients every week. Our front desk used to be overwhelmed — now they can focus on the patients in the office.',
      name: 'Dr. Sarah K.',
      business: 'Bright Smiles Dental',
      city: 'Seattle, WA'
    },
    metaTitle: 'AI Receptionist for Dental Offices | Book More Patients 24/7 | RingCrew',
    metaDescription: 'Stop missing new patient calls. RingCrew AI receptionist answers 24/7, books appointments, handles emergencies, and fills your dental schedule. Try free for 7 days.',
    keywords: ['AI receptionist dental office', 'dental office answering service', 'AI scheduling dental', 'dental phone answering', 'dental appointment booking AI'],
  },
  {
    slug: 'med-spa',
    name: 'Med Spa',
    headline: 'Book More Med Spa Appointments on Autopilot',
    subheadline: 'RingCrew answers every call to your med spa 24/7 — booking consultations, answering treatment questions, and capturing high-value clients who call outside business hours.',
    heroStat: { value: '$18,900', label: 'avg. monthly revenue from after-hours bookings' },
    avgJobValue: 650,
    missedCallPercent: 40,
    painPoints: [
      'High-value clients call evenings and weekends — you miss them',
      'Staff are with clients and can\'t answer every call',
      'Potential clients research treatments at night and want to book immediately',
    ],
    emergencyKeywords: ['adverse reaction', 'swelling', 'allergic reaction', 'urgent concern'],
    faq: [
      {
        q: 'Can RingCrew explain different treatments?',
        a: 'Yes. It can describe your services, typical results, and pricing — based on the information you provide. For detailed medical questions, it books a consultation.'
      },
      {
        q: 'How does it handle price-sensitive clients?',
        a: 'It can share your pricing, discuss package deals, explain financing options, or simply book a free consultation depending on your preference.'
      },
      {
        q: 'Will it sound professional and spa-like?',
        a: 'Absolutely. RingCrew uses a warm, professional voice that matches the premium experience your clients expect.'
      },
      {
        q: 'Can it book multiple staff members?',
        a: 'Yes. It can check availability across multiple providers and book appointments with specific injectors, estheticians, or consultants.'
      },
      {
        q: 'Does it handle membership inquiries?',
        a: 'Yes. It can explain your membership tiers, pricing, and benefits, then book a consultation to sign up.'
      },
    ],
    testimonial: {
      quote: 'We were losing 20+ consultation requests per month to voicemail. RingCrew catches every call and our booking rate has doubled.',
      name: 'Jessica T.',
      business: 'Radiant Med Spa',
      city: 'Dallas, TX'
    },
    metaTitle: 'AI Receptionist for Med Spas | Book More Clients 24/7 | RingCrew',
    metaDescription: 'Capture every med spa inquiry. RingCrew AI answers calls 24/7, books consultations, explains treatments, and converts after-hours callers. Start free trial.',
    keywords: ['AI receptionist med spa', 'med spa answering service', 'medical spa booking AI', 'aesthetic clinic phone answering', '24/7 med spa calls'],
  },
  {
    slug: 'auto-repair',
    name: 'Auto Repair',
    headline: 'Stop Missing Auto Repair Calls',
    subheadline: 'RingCrew answers every call to your auto shop 24/7 — booking services, qualifying urgent repairs, and capturing customers while your techs focus on the bays.',
    heroStat: { value: '$9,800', label: 'avg. monthly revenue from answered calls' },
    avgJobValue: 320,
    missedCallPercent: 45,
    painPoints: [
      'Shop is loud — you don\'t hear the phone ringing',
      'You\'re under a car and can\'t answer',
      'Customer calls about a breakdown — needs help NOW',
    ],
    emergencyKeywords: ['breakdown', 'won\'t start', 'tow', 'stranded', 'urgent repair'],
    faq: [
      {
        q: 'Can RingCrew schedule specific services?',
        a: 'Yes. It can book oil changes, inspections, tire rotations, diagnostics, and more — checking your calendar for available slots.'
      },
      {
        q: 'What if someone calls about a weird noise?',
        a: 'It asks questions to understand the issue, then books a diagnostic appointment and lets you know the details via text.'
      },
      {
        q: 'Can it give repair estimates?',
        a: 'It can share typical price ranges for common services, or explain you\'ll provide a detailed estimate after the vehicle is inspected.'
      },
      {
        q: 'Does it work with shop management software?',
        a: 'Yes. RingCrew integrates with Shopware, Mitchell, and other auto repair management systems.'
      },
      {
        q: 'How does it handle roadside emergencies?',
        a: 'It detects urgent keywords and immediately transfers to your phone, or collects their location and sends you an urgent text if you don\'t answer.'
      },
    ],
    testimonial: {
      quote: 'I used to miss 30% of my calls because I was in the shop. RingCrew answers every one and books them right into my schedule. Worth every penny.',
      name: 'Tony D.',
      business: 'Precision Auto',
      city: 'Chicago, IL'
    },
    metaTitle: 'AI Answering Service for Auto Repair Shops | Never Miss a Call | RingCrew',
    metaDescription: 'Stop missing repair calls. RingCrew AI answers 24/7, books services, handles breakdowns, and keeps your bays full. Try free for 7 days.',
    keywords: ['AI answering service auto shop', 'auto repair call answering', 'car repair receptionist AI', 'automotive shop phone system', '24/7 auto repair calls'],
  },
  {
    slug: 'roofing',
    name: 'Roofing',
    headline: 'Capture Every Roofing Lead 24/7',
    subheadline: 'RingCrew answers every call to your roofing company 24/7 — booking inspections, qualifying storm damage claims, and ensuring no high-value lead goes to voicemail.',
    heroStat: { value: '$24,500', label: 'avg. monthly revenue from captured leads' },
    avgJobValue: 8500,
    missedCallPercent: 48,
    painPoints: [
      'You\'re on a roof and can\'t answer your phone',
      'Storm damage calls flood in — you can\'t keep up',
      'High-value insurance claims go to voicemail and never call back',
    ],
    emergencyKeywords: ['storm damage', 'leak', 'emergency repair', 'tarp needed', 'hail damage'],
    faq: [
      {
        q: 'Can RingCrew qualify insurance claims?',
        a: 'Yes. It asks about damage type, insurance carrier, and urgency — then books an inspection and sends you all the details.'
      },
      {
        q: 'How does it handle emergency leak calls?',
        a: 'It detects urgent keywords and immediately transfers to your phone. If you don\'t answer, it takes their info and sends you an urgent SMS.'
      },
      {
        q: 'Can it book free inspections?',
        a: 'Absolutely. It explains your free inspection process and books a time that works for the homeowner.'
      },
      {
        q: 'What if someone calls during storm season?',
        a: 'RingCrew scales to handle hundreds of calls. Every storm damage inquiry is answered instantly and queued for inspection.'
      },
      {
        q: 'Does it work with roofing CRMs?',
        a: 'Yes. RingCrew integrates with JobNimbus, AccuLynx, and other roofing software to create leads automatically.'
      },
    ],
    testimonial: {
      quote: 'After a hailstorm, we got 180 calls in 3 days. RingCrew answered every single one and booked 92 inspections. Unreal.',
      name: 'Derek P.',
      business: 'Apex Roofing',
      city: 'Denver, CO'
    },
    metaTitle: 'AI Receptionist for Roofing Companies | Capture Storm Leads 24/7 | RingCrew',
    metaDescription: 'Never miss a roofing lead again. RingCrew AI answers every call 24/7, books inspections, qualifies insurance claims. Perfect for storm season. Try free.',
    keywords: ['AI receptionist roofing company', 'roofing answering service', 'storm damage call handling', 'roofing lead capture AI', '24/7 roofing calls'],
  },
  {
    slug: 'pest-control',
    name: 'Pest Control',
    headline: 'Answer Every Pest Control Call Instantly',
    subheadline: 'RingCrew answers your pest control business calls 24/7 — booking treatments, qualifying emergencies, and capturing customers who need help NOW.',
    heroStat: { value: '$11,400', label: 'avg. monthly revenue from emergency bookings' },
    avgJobValue: 380,
    missedCallPercent: 40,
    painPoints: [
      'Emergency pest calls come in after hours — customer books someone else',
      'You\'re mid-treatment and can\'t answer the phone',
      'Seasonal surges overwhelm your office staff',
    ],
    emergencyKeywords: ['infestation', 'bed bugs', 'wasps', 'rats', 'urgent pest problem'],
    faq: [
      {
        q: 'Can RingCrew handle emergency pest calls?',
        a: 'Yes. It detects urgent keywords like "infestation" or "bed bugs" and immediately transfers to your phone or books an emergency slot.'
      },
      {
        q: 'How does it qualify leads?',
        a: 'It asks about the pest type, severity, property type, and how soon they need service — giving you all the details to prioritize jobs.'
      },
      {
        q: 'Can it book recurring treatments?',
        a: 'Yes. It can explain your quarterly or monthly plans and book the initial service, then your team sets up the recurring schedule.'
      },
      {
        q: 'Does it work with pest control software?',
        a: 'Yes. RingCrew integrates with PestPac, ServSuite, and other pest control management systems.'
      },
      {
        q: 'What if someone calls about a specific pest?',
        a: 'RingCrew can explain your treatment approach for common pests, pricing, and what to expect — based on information you provide.'
      },
    ],
    testimonial: {
      quote: 'We used to lose 25+ calls a week because we couldn\'t answer fast enough. RingCrew gets every single call now and our booking rate tripled.',
      name: 'Amanda L.',
      business: 'Guardian Pest Control',
      city: 'Atlanta, GA'
    },
    metaTitle: 'AI Answering Service for Pest Control | Book More Jobs 24/7 | RingCrew',
    metaDescription: 'Stop missing pest control calls. RingCrew AI answers 24/7, books treatments, handles emergencies, and captures customers instantly. Start free trial.',
    keywords: ['AI answering pest control', 'pest control receptionist AI', '24/7 pest control calls', 'pest control booking system', 'exterminator answering service'],
  },
];
