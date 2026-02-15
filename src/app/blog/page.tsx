import { Metadata } from 'next';
import { Card } from '@/components/ui/card';
import { generateMetadata } from '@/lib/seo';

export const metadata: Metadata = generateMetadata({
  title: 'Blog — AI Receptionist Tips & Industry Insights',
  description: 'Learn about AI receptionists, customer service automation, and growing your local service business.',
  path: '/blog',
});

export default function BlogPage() {
  return (
    <div className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h1 className="text-hero-sm font-heading text-foreground mb-4">
            RingCrew Blog
          </h1>
          <p className="text-lg text-muted-foreground">
            Tips, insights, and best practices for local service businesses
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {/* Placeholder blog posts */}
          <Card className="p-6 hover:shadow-card-hover transition-shadow">
            <div className="bg-surface-100 h-48 rounded-lg mb-4"></div>
            <h3 className="text-xl font-semibold mb-2">
              How Much Do Missed Calls Cost Your Business?
            </h3>
            <p className="text-muted-foreground text-sm">
              Learn the true cost of missed customer calls and how AI can help capture every opportunity.
            </p>
          </Card>

          <Card className="p-6 hover:shadow-card-hover transition-shadow">
            <div className="bg-surface-100 h-48 rounded-lg mb-4"></div>
            <h3 className="text-xl font-semibold mb-2">
              AI Receptionist vs Traditional Answering Service
            </h3>
            <p className="text-muted-foreground text-sm">
              A comprehensive comparison of AI and human answering services in 2026.
            </p>
          </Card>

          <Card className="p-6 hover:shadow-card-hover transition-shadow">
            <div className="bg-surface-100 h-48 rounded-lg mb-4"></div>
            <h3 className="text-xl font-semibold mb-2">
              Why HVAC Companies Need an AI Receptionist
            </h3>
            <p className="text-muted-foreground text-sm">
              Discover how HVAC companies are using AI to capture emergency calls and book more appointments.
            </p>
          </Card>
        </div>

        <p className="text-center mt-12 text-muted-foreground">
          Blog posts coming soon. Check back for industry insights and tips.
        </p>
      </div>
    </div>
  );
}
