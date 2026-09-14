import { useEffect, useState } from "react";
import { COOKIE_CONSENT_EVENT, getCookieConsent } from "@/lib/cookies";
import { GA4_MEASUREMENT_ID } from "@/lib/site";

declare global {
  interface Window {
    dataLayer?: unknown[];
    gtag?: (...args: unknown[]) => void;
  }
}

function loadGtag(id: string) {
  if (document.getElementById("ga4-gtag")) return;

  window.dataLayer = window.dataLayer || [];
  // Same queue semantics as Google's snippet (`push(arguments)`).
  window.gtag = function gtag() {
    // eslint-disable-next-line prefer-rest-params
    window.dataLayer?.push(arguments);
  };
  window.gtag("js", new Date());
  window.gtag("config", id);

  const script = document.createElement("script");
  script.id = "ga4-gtag";
  script.async = true;
  script.src = `https://www.googletagmanager.com/gtag/js?id=${id}`;
  document.head.appendChild(script);
}

/** GA4 — tylko po zgodzie na cookies analityczne. */
export function GoogleAnalytics() {
  const [allowed, setAllowed] = useState(false);

  useEffect(() => {
    const sync = () => setAllowed(getCookieConsent()?.analytics === true);
    sync();
    window.addEventListener(COOKIE_CONSENT_EVENT, sync);
    return () => window.removeEventListener(COOKIE_CONSENT_EVENT, sync);
  }, []);

  useEffect(() => {
    if (!allowed || !GA4_MEASUREMENT_ID) return;
    loadGtag(GA4_MEASUREMENT_ID);
  }, [allowed]);

  return null;
}
