import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { ArrowRight } from 'lucide-react';

interface GetStartedButtonProps {
  className?: string;
  size?: 'default' | 'sm' | 'lg' | 'icon';
}

export default function GetStartedButton({ className = '', size = 'lg' }: GetStartedButtonProps) {
  return (
    <Button asChild size={size} className={className}>
      <Link href="/get-started" className="group">
        Get Started Free
        <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
      </Link>
    </Button>
  );
}
