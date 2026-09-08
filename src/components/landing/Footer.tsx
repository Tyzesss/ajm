import type { MouseEvent } from "react";
import { Link } from "@tanstack/react-router";
import { BrandMark } from "./BrandMark";
import { Reveal } from "./Reveal";
import { scrollToSection } from "@/lib/scroll-to-section";
import { SERVICES } from "@/lib/services";
import {
  ADDRESS,
  COMPANY_LEGAL_NAME,
  EMAIL,
  EMAIL_HREF,
  NIP,
  PHONE_DISPLAY,
  PHONE_HREF,
  SITE_NAME,
} from "@/lib/site";

const LINKS = [
  { label: "O nas", href: "/#o-nas" },
  { label: "Usługi", href: "/#uslugi" },
  { label: "Realizacje", href: "/#realizacje" },
  { label: "Opinie", href: "/#opinie" },
  { label: "Obszar działania", href: "/#obszar" },
  { label: "Kontakt", href: "/#kontakt" },
];

const goTo = (href: string) => (e: MouseEvent<HTMLAnchorElement>) => {
  const id = href.includes("#") ? href.slice(href.indexOf("#") + 1) : href.replace("#", "");
  if (!document.getElementById(id)) return;
  e.preventDefault();
  scrollToSection(`#${id}`);
};

export function Footer() {
  return (
    <footer className="bg-navy pt-16 pb-[max(2rem,calc(2rem+env(safe-area-inset-bottom)))] text-navy-foreground">
      <div className="mx-auto max-w-[1360px] px-5 lg:px-8">
        <Reveal>
          <div className="grid gap-10 md:grid-cols-2 lg:grid-cols-4">
            <div>
              <BrandMark />
              <p className="mt-5 max-w-xs text-sm text-navy-foreground/60">
                Instalacje grzewcze, chłodnicze i sanitarne w Namysłowie i na
                Opolszczyźnie: pompy ciepła, klimatyzacja, kotły pelletowe i więcej.
                Montaż i serwis.
              </p>
            </div>

            <div>
              <h3 className="text-sm font-semibold tracking-wide uppercase">Nawigacja</h3>
              <ul className="mt-5 space-y-3">
                {LINKS.map((link) => (
                  <li key={link.href}>
                    <a
                      href={link.href}
                      onClick={goTo(link.href)}
                      className="text-sm text-navy-foreground/60 transition-colors duration-300 hover:text-accent"
                    >
                      {link.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <h3 className="text-sm font-semibold tracking-wide uppercase">Usługi</h3>
              <ul className="mt-5 space-y-3">
                {SERVICES.map((service) => (
                  <li key={service.slug}>
                    <Link
                      to="/uslugi/$slug"
                      params={{ slug: service.slug }}
                      className="text-sm text-navy-foreground/60 transition-colors duration-300 hover:text-accent"
                    >
                      {service.title}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <h3 className="text-sm font-semibold tracking-wide uppercase">Dane firmy</h3>
              <ul className="mt-5 space-y-3 text-sm text-navy-foreground/60">
                <li>{COMPANY_LEGAL_NAME}</li>
                <li>{ADDRESS}</li>
                <li>NIP {NIP}</li>
                <li>
                  <a href={PHONE_HREF} className="transition-colors duration-300 hover:text-accent">
                    {PHONE_DISPLAY}
                  </a>
                </li>
                <li>
                  <a href={EMAIL_HREF} className="transition-colors duration-300 hover:text-accent">
                    {EMAIL}
                  </a>
                </li>
              </ul>
            </div>
          </div>

          <div className="mt-12 flex flex-col items-center gap-3 border-t border-navy-foreground/10 pt-6 text-center text-xs text-navy-foreground/45">
            <Link
              to="/polityka-prywatnosci"
              className="transition-colors duration-300 hover:text-accent"
            >
              Polityka Prywatności (RODO)
            </Link>
            <p>
              © {new Date().getFullYear()} {SITE_NAME}. Wszelkie prawa zastrzeżone.
            </p>
          </div>
        </Reveal>
      </div>
    </footer>
  );
}
