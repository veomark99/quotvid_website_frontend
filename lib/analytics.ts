/**
 * Marketing-site analytics IDs.
 * NEXT_PUBLIC_* values are inlined at build time. If Vercel is missing a var,
 * fall back to the production project IDs so PostHog/Clarity/GA keep running
 * alongside AdSense. These IDs are public (they ship in the browser anyway).
 */

function trimEnv(value: string | undefined): string | null {
  const v = (value ?? "").trim();
  return v || null;
}

export function getGaId(): string | null {
  return trimEnv(process.env.NEXT_PUBLIC_GA_ID) ?? "G-G518KSV7TX";
}

export function getPostHogKey(): string | null {
  return trimEnv(process.env.NEXT_PUBLIC_POSTHOG_KEY) ?? "phc_onqc9ECdDMFCWXL2EZKkGcnNzoNZ68E2taq5Jdt8CPxV";
}

export function getPostHogHost(): string {
  return trimEnv(process.env.NEXT_PUBLIC_POSTHOG_HOST) ?? "https://us.i.posthog.com";
}

export function getClarityProjectId(): string | null {
  return trimEnv(process.env.NEXT_PUBLIC_CLARITY_PROJECT_ID) ?? "wo1ureiflp";
}
