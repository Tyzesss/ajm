import type { LucideIcon } from "lucide-react";
import { BadgeCheck, ClipboardCheck, MapPinned } from "lucide-react";
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
];

export function WhyUs() {
  return (
    <section id="dlaczego-my" className="pt-8 pb-16 sm:pt-10 sm:pb-20">
      <div className="mx-auto max-w-[1360px] px-5 lg:px-8">
        <Reveal y={16} scale>
          <div className="rounded-3xl border border-accent/25 bg-accent/[0.06] p-7 sm:p-8 lg:p-10">
            <div className="max-w-3xl">
              <span
                data-scroll-target
                className="font-display text-xs font-semibold tracking-[0.18em] text-gradient-cyan uppercase"
              >
                Dlaczego my
              </span>
              <h2 className="mt-2 font-display text-2xl font-black text-foreground sm:text-3xl lg:text-4xl">
                Co zyskujesz, wybierając{" "}
                <span className="text-gradient-cyan">nas</span>
              </h2>
              <p className="mt-3 text-muted-foreground">
                Lokalny dojazd, czytelny proces i kompletna oferta instalacji HVAC.
              </p>
            </div>

            <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:mt-10 lg:grid-cols-3 lg:gap-5">
              {ITEMS.map((item) => {
                const Icon = item.icon;
                return (
                  <article
                    key={item.title}
                    className="flex h-full flex-col rounded-2xl border border-accent/20 bg-background/80 p-5 sm:p-6"
                  >
                    <span className="inline-flex size-10 items-center justify-center rounded-xl bg-gradient-cyan text-white">
                      <Icon className="size-5" />
                    </span>
                    <h3 className="mt-4 text-base font-semibold sm:text-lg">{item.title}</h3>
                    <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{item.body}</p>
                  </article>
                );
              })}
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
