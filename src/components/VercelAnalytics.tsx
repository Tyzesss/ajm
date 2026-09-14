import { useEffect, useState } from "react";
import { Analytics } from "@vercel/analytics/react";
import { COOKIE_CONSENT_EVENT, getCookieConsent } from "@/lib/cookies";

/** Ładuje Vercel Analytics dopiero po zgodzie na cookies analityczne. */
export function VercelAnalytics() {
  const [allowed, setAllowed] = useState(false);

  useEffect(() => {
    const sync = () => setAllowed(getCookieConsent()?.analytics === true);
    sync();
    window.addEventListener(COOKIE_CONSENT_EVENT, sync);
    return () => window.removeEventListener(COOKIE_CONSENT_EVENT, sync);
  }, []);

  if (!allowed) return null;
  return <Analytics />;
}
