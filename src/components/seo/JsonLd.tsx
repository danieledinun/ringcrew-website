export function HomepageJsonLd() {
  const data = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Organization",
        "@id": "https://ringcrew.ai/#organization",
        "name": "RingCrew",
        "url": "https://ringcrew.ai",
        "logo": "https://ringcrew.ai/logo.png",
        "description": "AI receptionist for local service businesses. Answers every call 24/7, books appointments, qualifies leads, and handles emergencies.",
        "foundingDate": "2026",
        "sameAs": [
          "https://www.linkedin.com/company/ringcrew"
        ],
        "contactPoint": {
          "@type": "ContactPoint",
          "email": "hello@ringcrew.ai",
          "contactType": "sales",
          "availableLanguage": ["English"]
        }
      },
      {
        "@type": "WebSite",
        "@id": "https://ringcrew.ai/#website",
        "url": "https://ringcrew.ai",
        "name": "RingCrew",
        "description": "AI receptionist for local service businesses",
        "publisher": { "@id": "https://ringcrew.ai/#organization" }
      },
      {
        "@type": "SoftwareApplication",
        "name": "RingCrew AI Receptionist",
        "applicationCategory": "BusinessApplication",
        "operatingSystem": "Cloud-based",
        "description": "AI-powered virtual receptionist that answers business phone calls 24/7, books appointments, qualifies leads, and routes emergencies for local service businesses.",
        "offers": {
          "@type": "AggregateOffer",
          "lowPrice": "297",
          "highPrice": "997",
          "priceCurrency": "USD",
          "offerCount": "3"
        }
      }
    ]
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }}
    />
  );
}

export function FAQJsonLd({ faqs }: { faqs: { question: string; answer: string }[] }) {
  const data = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": faqs.map(faq => ({
      "@type": "Question",
      "name": faq.question,
      "acceptedAnswer": {
        "@type": "Answer",
        "text": faq.answer
      }
    }))
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }}
    />
  );
}

export function BreadcrumbJsonLd({ items }: { items: { name: string; url: string }[] }) {
  const data = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "itemListElement": items.map((item, i) => ({
      "@type": "ListItem",
      "position": i + 1,
      "name": item.name,
      "item": item.url
    }))
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }}
    />
  );
}

export function ServiceJsonLd({ industry, description }: { industry: string; description: string }) {
  const data = {
    "@context": "https://schema.org",
    "@type": "Service",
    "name": `AI Receptionist for ${industry}`,
    "provider": { "@id": "https://ringcrew.ai/#organization" },
    "description": description,
    "areaServed": { "@type": "Country", "name": "United States" },
    "serviceType": "AI Answering Service",
    "offers": {
      "@type": "Offer",
      "price": "297",
      "priceCurrency": "USD",
      "priceSpecification": {
        "@type": "UnitPriceSpecification",
        "price": "297",
        "priceCurrency": "USD",
        "billingDuration": "P1M"
      }
    }
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }}
    />
  );
}
