'use client';

import dynamic from 'next/dynamic';

const SimpleForm = dynamic(() => import('./SimpleForm'), {
  ssr: false,
  loading: () => (
    <div className="min-h-screen bg-gray-50 flex items-center justify-center">
      <div className="text-center">
        <div className="w-16 h-16 border-4 border-green-600 border-t-transparent rounded-full animate-spin mx-auto mb-4"></div>
        <p className="text-gray-600">Loading form...</p>
      </div>
    </div>
  ),
});

export default function GetStartedPage() {
  return <SimpleForm />;
}
