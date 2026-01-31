'use client';

import { useEffect, useRef } from 'react';
import { usePathname, useRouter } from 'next/navigation';

export default function RefreshRedirect() {
  const pathname = usePathname();
  const router = useRouter();
  const hasChecked = useRef(false);

  useEffect(() => {
    // Only check once on initial mount
    if (hasChecked.current) return;
    hasChecked.current = true;

    // Check if this is a page refresh/reload
    const navigationEntries = performance.getEntriesByType('navigation') as PerformanceNavigationTiming[];
    const isReload = navigationEntries.length > 0 && navigationEntries[0].type === 'reload';
    
    // If it's a reload and not on landing page, redirect to landing page
    if (isReload && pathname !== '/') {
      router.push('/');
    }
  }, [pathname, router]);

  return null;
}
