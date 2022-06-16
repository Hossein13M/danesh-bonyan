import * as React from 'react';
import Image from 'next/image';

export default function EmptyState() {
  return <Image src="/assets/preview.png" alt="dastan" width={800} height={418} className="gray-filter hover:no-filter" />;
}
