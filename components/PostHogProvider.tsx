'use client';

import * as React from 'react';
import { usePathname, useSearchParams } from 'next/navigation';
import { PostHogProvider as PHProvider, usePostHog } from 'posthog-js/react';
import { getPostHogHost, getPostHogKey } from '@/lib/analytics';

function PostHogPageview(): React.JSX.Element {
  const posthog = usePostHog();
  const pathname = usePathname();
  const searchParams = useSearchParams();

  React.useEffect(() => {
    if (!pathname || !posthog) return;
    let url = window.origin + pathname;
    const q = searchParams?.toString();
    if (q) url += `?${q}`;
    posthog.capture('$pageview', { $current_url: url });
  }, [pathname, searchParams, posthog]);

  return <></>;
}

export function PostHogProvider({ children }: { children: React.ReactNode }): React.JSX.Element {
  const apiKey = getPostHogKey();
  const apiHost = getPostHogHost();

  if (!apiKey || !apiHost) return <>{children}</>;

  return (
    <PHProvider
      apiKey={apiKey}
      options={{
        api_host: apiHost,
        person_profiles: 'always',
        capture_pageview: false,
        capture_pageleave: true,
        persistence: 'localStorage+cookie',
      }}
    >
      <React.Suspense fallback={null}>
        <PostHogPageview />
      </React.Suspense>
      {children}
    </PHProvider>
  );
}
