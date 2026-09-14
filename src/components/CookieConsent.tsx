import { useEffect, useState } from "react";
import { Link } from "@tanstack/react-router";
import { Cookie, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  COOKIE_OPEN_SETTINGS_EVENT,
  getCookieConsent,
  setCookieConsent,
  type CookieConsent as Consent,
} from "@/lib/cookies";
import { cn } from "@/lib/utils";

export function CookieConsent() {
  const [visible, setVisible] = useState(false);
  const [details, setDetails] = useState(false);
  const [analytics, setAnalytics] = useState(false);

  useEffect(() => {
    const existing = getCookieConsent();
    if (!existing) {
      setVisible(true);
      document.body.dataset["cookieBanner"] = "open";
    } else {
      setAnalytics(existing.analytics);
      document.body.dataset["cookieBanner"] = "closed";
    }

    const onOpen = () => {
      const current = getCookieConsent();
      setAnalytics(current?.analytics ?? false);
      setDetails(true);
      setVisible(true);
      document.body.dataset["cookieBanner"] = "open";
    };
    window.addEventListener(COOKIE_OPEN_SETTINGS_EVENT, onOpen);
    return () => {
      window.removeEventListener(COOKIE_OPEN_SETTINGS_EVENT, onOpen);
      delete document.body.dataset["cookieBanner"];
    };
  }, []);

  const close = (consent: Consent) => {
    setAnalytics(consent.analytics);
    setVisible(false);
    setDetails(false);
    document.body.dataset["cookieBanner"] = "closed";
  };

  const acceptAll = () => close(setCookieConsent(true));
  const rejectOptional = () => close(setCookieConsent(false));
  const savePreferences = () => close(setCookieConsent(analytics));

  if (!visible) return null;

  return (
    <div
      className={cn(
        "fixed inset-x-0 z-[60] px-4",
        "bottom-[max(0.75rem,env(safe-area-inset-bottom))]",
        "md:bottom-4 md:left-auto md:right-4 md:w-[min(28rem,calc(100vw-2rem))] md:px-0",
      )}
      role="dialog"
      aria-labelledby="cookie-consent-title"
      aria-describedby="cookie-consent-desc"
    >
      <div className="rounded-2xl border border-border/70 bg-card p-4 shadow-lift sm:p-5">
        <div className="flex items-start gap-3">
          <span className="mt-0.5 flex size-9 shrink-0 items-center justify-center rounded-full bg-accent/10 text-accent">
            <Cookie className="size-4" aria-hidden />
          </span>
          <div className="min-w-0 flex-1">
            <h2 id="cookie-consent-title" className="font-display text-sm font-bold text-foreground">
              Pliki cookies
            </h2>
            <p id="cookie-consent-desc" className="mt-1.5 text-xs leading-relaxed text-muted-foreground sm:text-sm">
              Używamy niezbędnych cookies do działania strony oraz opcjonalnych cookies
              analitycznych (Vercel Analytics), by liczyć wizyty. Szczegóły w{" "}
              <Link
                to="/polityka-prywatnosci"
                className="font-medium text-accent underline underline-offset-2 hover:text-foreground"
              >
                Polityce prywatności
              </Link>
              .
            </p>
          </div>
          {details ? (
            <button
              type="button"
              onClick={() => setDetails(false)}
              className="inline-flex size-8 shrink-0 items-center justify-center rounded-full text-muted-foreground transition-colors hover:bg-foreground/5 hover:text-foreground"
              aria-label="Zamknij ustawienia"
            >
              <X className="size-4" />
            </button>
          ) : null}
        </div>

        {details ? (
          <div className="mt-4 space-y-3 rounded-xl border border-border/60 bg-background/80 p-3">
            <label className="flex items-start gap-3 text-xs text-muted-foreground sm:text-sm">
              <input
                type="checkbox"
                checked
                disabled
                className="mt-0.5 size-4 rounded border-border accent-accent"
              />
              <span>
                <span className="font-semibold text-foreground">Niezbędne</span>
                <span className="mt-0.5 block">
                  Wymagane do działania strony i zapamiętania Twojej decyzji o cookies.
                </span>
              </span>
            </label>
            <label className="flex items-start gap-3 text-xs text-muted-foreground sm:text-sm">
              <input
                type="checkbox"
                checked={analytics}
                onChange={(e) => setAnalytics(e.target.checked)}
                className="mt-0.5 size-4 rounded border-border accent-accent"
              />
              <span>
                <span className="font-semibold text-foreground">Analityczne</span>
                <span className="mt-0.5 block">
                  Pomagają nam zrozumieć, jak korzystasz ze strony (bez reklam).
                </span>
              </span>
            </label>
          </div>
        ) : null}

        <div className="mt-4 flex flex-col gap-2 sm:flex-row sm:flex-wrap sm:justify-end">
          {details ? (
            <Button type="button" variant="cyan" size="sm" className="w-full sm:w-auto" onClick={savePreferences}>
              Zapisz wybór
            </Button>
          ) : (
            <>
              <Button
                type="button"
                variant="outline"
                size="sm"
                className="w-full sm:w-auto"
                onClick={() => setDetails(true)}
              >
                Ustawienia
              </Button>
              <Button
                type="button"
                variant="outline"
                size="sm"
                className="w-full sm:w-auto"
                onClick={rejectOptional}
              >
                Tylko niezbędne
              </Button>
              <Button type="button" variant="cyan" size="sm" className="w-full sm:w-auto" onClick={acceptAll}>
                Akceptuję wszystkie
              </Button>
            </>
          )}
        </div>
      </div>
    </div>
  );
}
