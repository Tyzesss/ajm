import { useEffect } from "react";
import { COOKIE_CONSENT_EVENT, getCookieConsent } from "@/lib/cookies";
import { GA4_MEASUREMENT_ID } from "@/lib/site";

declare global {
  interface Window {
    dataLayer?: unknown[];
    gtag?: (...args: unknown[]) => void;
  }
}

function ensureGtag() {
  if (typeof window.gtag === "function") return;

  window.dataLayer = window.dataLayer || [];
  window.gtag = function gtag() {
    // eslint-disable-next-line prefer-rest-params
    window.dataLayer?.push(arguments);
  };
}

/** Consent Mode v2 - tag zawsze obecny; storage dopiero po zgodzie. */
function initGa4(id: string) {
  if (document.getElementById("ga4-gtag")) return;

  ensureGtag();

  const granted = getCookieConsent()?.analytics === true;

  window.gtag!("consent", "default", {
    ad_storage: "denied",
    ad_user_data: "denied",
    ad_personalization: "denied",
    analytics_storage: granted ? "granted" : "denied",
    wait_for_update: 500,
  });

  window.gtag!("js", new Date());
  window.gtag!("config", id);

  const script = document.createElement("script");
  script.id = "ga4-gtag";
  script.async = true;
  script.src = `https://www.googletagmanager.com/gtag/js?id=${id}`;
  document.head.appendChild(script);
}

function syncConsent() {
  if (typeof window.gtag !== "function") return;
  const granted = getCookieConsent()?.analytics === true;
  window.gtag("consent", "update", {
    analytics_storage: granted ? "granted" : "denied",
  });
}

/** GA4 z Consent Mode - widoczny dla narzędzi Google; tracking po zgodzie. */
export function GoogleAnalytics() {
  useEffect(() => {
    if (!GA4_MEASUREMENT_ID) return;
    initGa4(GA4_MEASUREMENT_ID);
    syncConsent();
    window.addEventListener(COOKIE_CONSENT_EVENT, syncConsent);
    return () => window.removeEventListener(COOKIE_CONSENT_EVENT, syncConsent);
  }, []);

  return null;
}
