import { Metadata } from 'next';

export function generateMetadata({
  title,
  description,
  path = '',
  keywords,
  ogImage = '/og-image.png',
}: {
  title: string;
  description: string;
  path?: string;
  keywords?: string[];
  ogImage?: string;
}): Metadata {
  const url = `https://ringcrew.ai${path}`;

  return {
    title,
    description,
    keywords: keywords?.join(', '),
    alternates: {
      canonical: url,
    },
    openGraph: {
      type: 'website',
      locale: 'en_US',
      url,
      siteName: 'RingCrew',
      title,
      description,
      images: [
        {
          url: ogImage,
          width: 1200,
          height: 630,
          alt: title,
        },
      ],
    },
    twitter: {
      card: 'summary_large_image',
      title,
      description,
      images: [ogImage],
    },
  };
}
