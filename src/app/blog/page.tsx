import { Metadata } from 'next';
import Link from 'next/link';
import { Card } from '@/components/ui/card';
import { Clock } from 'lucide-react';
import { getAllPosts } from '@/lib/blog';

export const metadata: Metadata = {
  title: 'AI Receptionist Blog | Tips for Local Service Businesses | RingCrew',
  description: 'Learn how AI receptionists help HVAC, plumbing, dental, and other local businesses capture more calls, book more appointments, and grow revenue.',
  keywords: ['AI receptionist blog', 'business phone tips', 'missed calls', 'small business growth'],
  alternates: {
    canonical: 'https://ringcrew.ai/blog',
  },
};

export default function BlogIndexPage() {
  const posts = getAllPosts();

  return (
    <div className="py-20">
      <div className="container mx-auto px-4 max-w-6xl">
        <div className="text-center mb-16">
          <h1 className="text-hero-sm md:text-hero font-heading text-foreground mb-6">
            The RingCrew Blog
          </h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Insights on AI receptionists, missed calls, and growing your local service business.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {posts.map((post) => (
            <Link key={post.slug} href={`/blog/${post.slug}`}>
              <Card className="p-6 hover:shadow-card-hover transition-all h-full">
                <div className="flex gap-2 mb-3">
                  {post.industry.slice(0, 2).map((ind, i) => (
                    <span
                      key={i}
                      className="text-xs bg-brand-500/10 text-brand-600 px-2 py-1 rounded-full"
                    >
                      {ind.toUpperCase()}
                    </span>
                  ))}
                </div>

                <h2 className="text-2xl font-heading font-bold text-foreground mb-3 hover:text-brand-600 transition-colors">
                  {post.title}
                </h2>

                <p className="text-muted-foreground mb-4">
                  {post.description}
                </p>

                <div className="flex items-center gap-4 text-sm text-muted-foreground">
                  <span>{new Date(post.date).toLocaleDateString('en-US', { month: 'long', day: 'numeric', year: 'numeric' })}</span>
                  <span className="flex items-center gap-1">
                    <Clock className="h-4 w-4" />
                    {post.readingTime} min read
                  </span>
                </div>
              </Card>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}
