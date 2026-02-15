import Link from 'next/link';
import { Card } from '@/components/ui/card';
import { Clock, ArrowRight } from 'lucide-react';
import { getAllPosts } from '@/lib/blog';

export default function BlogPreview() {
  const posts = getAllPosts().slice(0, 3);

  return (
    <section className="py-20">
      <div className="container mx-auto px-4 max-w-6xl">
        <h2 className="text-section font-heading text-center mb-4">
          Latest from the Blog
        </h2>
        <p className="text-center text-muted-foreground mb-12 max-w-2xl mx-auto">
          Tips and insights on capturing more calls and growing your business.
        </p>
        <div className="grid md:grid-cols-3 gap-8">
          {posts.map((post) => (
            <Link key={post.slug} href={`/blog/${post.slug}`}>
              <Card className="p-6 hover:shadow-card-hover transition-all h-full flex flex-col">
                <div className="flex gap-2 mb-3">
                  {post.industry.slice(0, 1).map((ind, i) => (
                    <span
                      key={i}
                      className="text-xs bg-brand-500/10 text-brand-600 px-2 py-1 rounded-full"
                    >
                      {ind.charAt(0).toUpperCase() + ind.slice(1)}
                    </span>
                  ))}
                </div>

                <h3 className="text-xl font-heading font-bold text-foreground mb-3 hover:text-brand-600 transition-colors">
                  {post.title}
                </h3>

                <p className="text-muted-foreground text-sm mb-4 flex-grow line-clamp-3">
                  {post.description}
                </p>

                <div className="flex items-center justify-between text-sm text-muted-foreground pt-4 border-t border-border">
                  <span className="flex items-center gap-1">
                    <Clock className="h-4 w-4" />
                    {post.readingTime} min
                  </span>
                  <span className="text-brand-600 flex items-center gap-1">
                    Read more <ArrowRight className="h-4 w-4" />
                  </span>
                </div>
              </Card>
            </Link>
          ))}
        </div>

        <div className="text-center mt-12">
          <Link
            href="/blog"
            className="inline-flex items-center gap-2 text-brand-600 hover:text-brand-700 font-semibold"
          >
            View All Posts <ArrowRight className="h-5 w-5" />
          </Link>
        </div>
      </div>
    </section>
  );
}
