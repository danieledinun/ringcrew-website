import { Card } from '@/components/ui/card';
import { Phone, Calendar, CheckCircle, AlertCircle, MessageSquare, BarChart3 } from 'lucide-react';
import { FEATURES } from '@/lib/constants';
import SectionHeader from '@/components/shared/SectionHeader';

const iconMap = {
  Phone,
  Calendar,
  CheckCircle,
  AlertCircle,
  MessageSquare,
  BarChart3,
};

export default function Features() {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeader
          title="Everything Your Front Desk Does — Without the Front Desk"
          centered
        />

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {FEATURES.map((feature, index) => {
            const Icon = iconMap[feature.icon as keyof typeof iconMap];
            return (
              <Card key={index} className="p-6 hover:shadow-card-hover transition-shadow">
                <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4">
                  <Icon className="h-6 w-6 text-primary" />
                </div>
                <h3 className="text-xl font-semibold text-foreground mb-3">
                  {feature.title}
                </h3>
                <p className="text-muted-foreground">
                  {feature.description}
                </p>
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
}
