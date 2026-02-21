'use client';

import { useEffect, useState } from 'react';
import dynamic from 'next/dynamic';

const GetStartedForm = dynamic(() => import('./GetStartedForm'), {
  ssr: false,
  loading: () => (
    <div className="min-h-screen bg-surface-50 flex items-center justify-center">
      <div className="text-muted-foreground">Loading...</div>
    </div>
  ),
});

export default function GetStartedPage() {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return (
      <div className="min-h-screen bg-surface-50 flex items-center justify-center">
        <div className="text-muted-foreground">Loading...</div>
      </div>
    );
  }

  return <GetStartedForm />;
}
