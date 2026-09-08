import type { LucideIcon } from "lucide-react";
import {
  BadgeCheck,
  ClipboardCheck,
  Handshake,
  MapPinned,
  ShieldCheck,
  Wrench,
} from "lucide-react";
import { Reveal } from "./Reveal";

const ITEMS: { title: string; body: string; icon: LucideIcon }[] = [
  {
    title: "Kompleksowa oferta",
    body: "Ogrzewanie, chłodzenie, wentylacja i woda w jednym zespole.",
    icon: BadgeCheck,
  },
  {
    title: "Bezpłatna konsultacja i wycena",
    body: "Najpierw oględziny, potem decyzja. Bez zobowiązań na start.",
    icon: ClipboardCheck,
  },
  {
    title: "Lokalny dojazd",
    body: "Namysłów, Opole i okolice. Jesteśmy blisko inwestycji.",
    icon: MapPinned,
  },
  {
    title: "Sprawdzone marki",
    body: "Urządzenia znanych producentów, m.in. Midea.",
    icon: ShieldCheck,
  },
  {
    title: "Montaż i uruchomienie",
    body: "Nie zostawiamy instalacji w połowie. Uruchamiamy i instruujemy.",
    icon: Handshake,
  },
  {
    title: "Serwis i opieka",
    body: "Wsparcie także po oddaniu instalacji: przeglądy i pomoc.",
    icon: Wrench,
  },
];

export function WhyUs() {
  return (
    <section id="dlaczego-my" className="pt-20 pb-16 sm:pt-24 sm:pb-20">
      <div className="mx-auto max-w-[1360px] px-5 lg:px-8">
        <Reveal className="max-w-3xl md:mx-auto md:text-center">
          <span
            data-scroll-target
            className="font-display text-xs font-semibold tracking-[0.18em] text-gradient-cyan uppercase"
          >
            Dlaczego my
          </span>
          <h2 className="mt-5 font-display text-3xl font-bold sm:text-4xl lg:text-5xl">
            Co zyskujesz, wybierając{" "}
            <span className="text-gradient-cyan">AJM Technikę</span>
          </h2>
          <p className="mt-4 text-muted-foreground">
            Prosty proces, lokalny dojazd i kompletna oferta pod jeden dach.
          </p>
        </Reveal>

        <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:mt-14 lg:grid-cols-3">
          {ITEMS.map((item, i) => {
            const Icon = item.icon;
            return (
              <Reveal key={item.title} delay={i * 0.05} y={16} scale className="h-full">
                <article className="flex h-full flex-col rounded-2xl border border-border/70 bg-card p-6 md:p-7 md:shadow-card md:transition-all md:duration-500 md:hover:-translate-y-1 md:hover:border-accent/40 md:hover:shadow-lift">
                  <span className="inline-flex size-11 items-center justify-center rounded-xl bg-gradient-cyan text-white">
                    <Icon className="size-5" />
                  </span>
                  <h3 className="mt-5 text-lg font-semibold">{item.title}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{item.body}</p>
                </article>
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}
