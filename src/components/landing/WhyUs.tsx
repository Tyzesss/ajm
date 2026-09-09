import type { LucideIcon } from "lucide-react";
import { BadgeCheck, ClipboardCheck, MapPinned } from "lucide-react";
import whyUsImage from "@/assets/why-us-hvac.png";
import { DarkEyebrow } from "./DarkEyebrow";
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
    <section
      id="dlaczego-my"
      className="relative isolate overflow-hidden bg-navy py-16 sm:py-20 md:py-24 lg:py-28"
    >
      <div className="absolute inset-0 z-0 overflow-hidden">
        <img
          src={whyUsImage}
          alt="Nowoczesny dom z pompą ciepła o zmierzchu"
          width={1536}
          height={864}
          className="size-full object-cover object-[62%_52%]"
        />
      </div>
      <div
        className="absolute inset-0 z-[1]"
        style={{ backgroundImage: "var(--gradient-hero)" }}
        aria-hidden
      />

      <div className="relative z-10 mx-auto max-w-[1360px] px-5 lg:px-8">
        <Reveal className="mx-auto flex max-w-3xl flex-col items-center text-center text-navy-foreground md:mx-0 md:items-start md:text-left">
          <DarkEyebrow icon={BadgeCheck}>Dlaczego my</DarkEyebrow>
          <h2 className="mt-5 font-display text-3xl font-bold tracking-tight sm:text-4xl lg:text-[2.75rem] lg:leading-[1.15]">
            Co zyskujesz, wybierając <span className="text-gradient-cyan">nas</span>
          </h2>
          <p className="mt-4 hidden max-w-2xl text-base leading-relaxed text-navy-foreground/70 sm:block sm:text-lg">
            Lokalny dojazd, czytelny proces i kompletna oferta instalacji grzewczych, chłodniczych i
            sanitarnych.
          </p>
        </Reveal>

        <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:mt-12 lg:grid-cols-3 lg:gap-5">
          {ITEMS.map((item) => {
            const Icon = item.icon;
            return (
              <Reveal key={item.title} className="h-full">
                <article className="glass-panel flex h-full flex-col rounded-2xl p-5 backdrop-blur-[3px] sm:p-6">
                  <span className="inline-flex size-10 items-center justify-center rounded-xl bg-gradient-cyan text-white">
                    <Icon className="size-5" />
                  </span>
                  <h3 className="mt-4 text-base font-semibold text-navy-foreground sm:text-lg">
                    {item.title}
                  </h3>
                  <p className="mt-2 text-sm leading-relaxed text-navy-foreground/70">
                    {item.body}
                  </p>
                </article>
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}
