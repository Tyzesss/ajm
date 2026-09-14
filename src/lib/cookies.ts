export const COOKIE_CONSENT_KEY = "ajm-cookie-consent-v1";
export const COOKIE_CONSENT_EVENT = "ajm-cookie-consent";
export const COOKIE_OPEN_SETTINGS_EVENT = "ajm-cookie-open-settings";

export type CookieConsent = {
  necessary: true;
  analytics: boolean;
  updatedAt: string;
};

export function getCookieConsent(): CookieConsent | null {
  if (typeof window === "undefined") return null;
  try {
    const raw = window.localStorage.getItem(COOKIE_CONSENT_KEY);
    if (!raw) return null;
    const parsed = JSON.parse(raw) as Partial<CookieConsent>;
    if (typeof parsed.analytics !== "boolean") return null;
    return {
      necessary: true,
      analytics: parsed.analytics,
      updatedAt: typeof parsed.updatedAt === "string" ? parsed.updatedAt : new Date().toISOString(),
    };
  } catch {
    return null;
  }
}

export function setCookieConsent(analytics: boolean): CookieConsent {
  const value: CookieConsent = {
    necessary: true,
    analytics,
    updatedAt: new Date().toISOString(),
  };
  window.localStorage.setItem(COOKIE_CONSENT_KEY, JSON.stringify(value));
  window.dispatchEvent(new CustomEvent(COOKIE_CONSENT_EVENT, { detail: value }));
  return value;
}

export function openCookieSettings() {
  window.dispatchEvent(new Event(COOKIE_OPEN_SETTINGS_EVENT));
}
