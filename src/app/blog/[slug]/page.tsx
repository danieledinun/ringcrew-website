import { Metadata } from 'next';
import { notFound } from 'next/navigation';
import Link from 'next/link';
import { MDXRemote } from 'next-mdx-remote/rsc';
import { Clock, Calendar, ArrowRight } from 'lucide-react';
import { getPostBySlug, getAllPosts, getRelatedPosts } from '@/lib/blog';
import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { BreadcrumbJsonLd, FAQJsonLd } from '@/components/seo/JsonLd';

export async function generateStaticParams() {
  const posts = getAllPosts();
  return posts.map((post) => ({
    slug: post.slug,
  }));
}

export async function generateMetadata({ params }: { params: { slug: string } }): Promise<Metadata> {
  const post = getPostBySlug(params.slug);
  if (!post) return {};

  return {
    title: post.title,
    description: post.description,
    keywords: post.keywords.join(', '),
    alternates: {
      canonical: `https://ringcrew.ai/blog/${post.slug}`,
    },
    openGraph: {
      title: post.title,
      description: post.description,
      url: `https://ringcrew.ai/blog/${post.slug}`,
      images: [post.ogImage],
      type: 'article',
      publishedTime: post.date,
      modifiedTime: post.updated,
    },
  };
}

export default function BlogPostPage({ params }: { params: { slug: string } }) {
  const post = getPostBySlug(params.slug);
  if (!post) notFound();

  const relatedPosts = getRelatedPosts(post.slug, post.industry, 3);

  const articleSchema = {
    "@context": "https://schema.org",
    "@type": "Article",
    "headline": post.title,
    "description": post.description,
    "author": {
      "@type": "Organization",
      "name": "RingCrew"
    },
    "publisher": {
      "@type": "Organization",
      "name": "RingCrew",
      "logo": { "@type": "ImageObject", "url": "https://ringcrew.ai/logo.png" }
    },
    "datePublished": post.date,
    "dateModified": post.updated,
    "mainEntityOfPage": `https://ringcrew.ai/blog/${post.slug}`
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }}
      />
      <BreadcrumbJsonLd items={[
        { name: "Home", url: "https://ringcrew.ai" },
        { name: "Blog", url: "https://ringcrew.ai/blog" },
        { name: post.title, url: `https://ringcrew.ai/blog/${post.slug}` }
      ]} />

      <article className="py-20">
        <div className="container mx-auto px-4 max-w-4xl">
          {/* Breadcrumbs */}
          <div className="text-sm text-muted-foreground mb-8 flex items-center gap-2">
            <Link href="/" className="hover:text-foreground">Home</Link>
            <span>→</span>
            <Link href="/blog" className="hover:text-foreground">Blog</Link>
            <span>→</span>
            <span className="text-foreground">{post.title}</span>
          </div>

          {/* Header */}
          <header className="mb-12">
            <h1 className="text-hero-sm md:text-hero font-heading text-foreground mb-6">
              {post.title}
            </h1>

            <div className="flex flex-wrap items-center gap-4 text-sm text-muted-foreground mb-6">
              <span className="flex items-center gap-2">
                <Calendar className="h-4 w-4" />
                {new Date(post.date).toLocaleDateString('en-US', { month: 'long', day: 'numeric', year: 'numeric' })}
              </span>
              <span className="flex items-center gap-2">
                <Clock className="h-4 w-4" />
                {post.readingTime} min read
              </span>
              <span>By {post.author}</span>
            </div>

            <div className="flex gap-2">
              {post.industry.map((ind, i) => (
                <span
                  key={i}
                  className="text-xs bg-brand-500/10 text-brand-600 px-3 py-1 rounded-full"
                >
                  {ind.charAt(0).toUpperCase() + ind.slice(1)}
                </span>
              ))}
            </div>
          </header>

          {/* Content */}
          <div className="prose prose-lg max-w-none prose-headings:font-heading prose-h2:text-3xl prose-h2:font-bold prose-h2:mb-4 prose-h2:mt-8 prose-p:text-muted-foreground prose-p:leading-relaxed prose-a:text-brand-600 prose-a:no-underline hover:prose-a:underline prose-strong:text-foreground prose-ul:text-muted-foreground prose-ol:text-muted-foreground prose-table:text-sm">
            <MDXRemote source={post.content} />
          </div>

          {/* Author Box */}
          <div className="mt-12 p-6 bg-surface-50 rounded-brand border border-border">
            <div className="flex items-start gap-4">
              <div className="w-16 h-16 bg-brand-500 rounded-full flex items-center justify-center flex-shrink-0">
                <span className="text-white font-bold text-2xl">R</span>
              </div>
              <div>
                <h3 className="font-heading font-bold text-foreground mb-2">RingCrew Team</h3>
                <p className="text-muted-foreground text-sm">
                  We help local service businesses capture every customer call with AI-powered phone answering. 
                  Learn more at <Link href="/" className="text-brand-600 hover:underline">ringcrew.ai</Link>
                </p>
              </div>
            </div>
          </div>

          {/* Related Posts */}
          {relatedPosts.length > 0 && (
            <div className="mt-16">
              <h2 className="text-2xl font-heading font-bold text-foreground mb-6">Related Posts</h2>
              <div className="grid md:grid-cols-2 gap-6">
                {relatedPosts.map((relatedPost) => (
                  <Link key={relatedPost.slug} href={`/blog/${relatedPost.slug}`}>
                    <Card className="p-6 hover:shadow-card-hover transition-all h-full">
                      <h3 className="text-xl font-heading font-bold text-foreground mb-2 hover:text-brand-600 transition-colors">
                        {relatedPost.title}
                      </h3>
                      <p className="text-muted-foreground text-sm mb-4">
                        {relatedPost.description}
                      </p>
                      <span className="text-brand-600 text-sm flex items-center gap-1">
                        Read more <ArrowRight className="h-4 w-4" />
                      </span>
                    </Card>
                  </Link>
                ))}
              </div>
            </div>
          )}

          {/* Final CTA */}
          <div className="mt-16 p-8 bg-gradient-to-br from-brand-500/10 to-accent/10 rounded-brand text-center">
            <h2 className="text-2xl font-heading font-bold text-foreground mb-4">
              Ready to Stop Missing Calls?
            </h2>
            <p className="text-muted-foreground mb-6 max-w-2xl mx-auto">
              Try RingCrew free for 7 days. Your AI receptionist answers every call in under 1 second, books appointments, and qualifies leads 24/7.
            </p>
            <Button asChild size="lg">
              <Link href="/get-started">
                Get Started Free →
              </Link>
            </Button>
          </div>
        </div>
      </article>
    </>
  );
}
