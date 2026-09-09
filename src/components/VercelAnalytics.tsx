import { Analytics } from "@vercel/analytics/react";

/**
 * Vercel Web Analytics component.
 * This component should be placed in your root layout or App component.
 * It automatically tracks page views and web vitals.
 */
export function VercelAnalytics() {
  return <Analytics />;
}
