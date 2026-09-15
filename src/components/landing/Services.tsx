import type { LucideIcon } from "lucide-react";
import {
  ArrowUpRight,
  BatteryCharging,
  ChevronDown,
  Droplets,
  Factory,
  Fan,
  Flame,
  Gauge,
  Pipette,
  Snowflake,
  Sun,
  Thermometer,
  Waves,
} from "lucide-react";
import { useState } from "react";
import { Link } from "@tanstack/react-router";
import { useReducedMotion } from "framer-motion";
import { Reveal } from "./Reveal";
import { SERVICES } from "@/lib/services";
import { cn } from "@/lib/utils";

const ICONS: Record<string, LucideIcon> = {
  "pompy-ciepla": Thermometer,
  fotowoltaika: Sun,
  "magazyny-energii": BatteryCharging,
  "kotly-pelletowe": Flame,
  "ogrzewanie-podlogowe": Gauge,
  klimatyzacja: Snowflake,
  "instalacje-wodne": Droplets,
  "instalacje-sanitarne": Pipette,
  "instalacje-przemyslowe": Factory,
  rekuperacja: Fan,
  "uzdatnianie-wody": Waves,
};

const DESKTOP_PREVIEW = 6;
const EXPAND_EASE = "cubic-bezier(0.22, 1, 0.36, 1)";

function ServiceCard({ service }: { service: (typeof SERVICES)[number] }) {
  const Icon = ICONS[service.slug] ?? Thermometer;

  return (
    <article className="group flex h-full min-w-0 flex-col rounded-2xl border border-border/70 bg-card p-7 shadow-[0_2px_8px_oklch(0.155_0.045_242/0.08),0_16px_40px_oklch(0.155_0.045_242/0.14)] max-md:shadow-[0_2px_6px_oklch(0.155_0.045_242/0.08),0_10px_24px_oklch(0.155_0.045_242/0.1)] md:overflow-hidden md:transition-all md:duration-500 md:ease-[cubic-bezier(0.22,1,0.36,1)] md:hover:-translate-y-1 md:hover:border-accent/40 md:hover:shadow-[0_4px_12px_oklch(0.155_0.045_242/0.1),0_28px_56px_oklch(0.155_0.045_242/0.2)]">
      <div className="flex min-w-0 items-center gap-3.5 md:block">
        <span className="inline-flex size-11 shrink-0 items-center justify-center rounded-xl bg-gradient-cyan text-white transition-all duration-500 ease-[cubic-bezier(0.22,1,0.36,1)] md:size-12 md:bg-navy md:text-navy-foreground md:group-hover:bg-gradient-cyan md:group-hover:text-white">
          <Icon className="size-5" />
        </span>
        <h3 className="min-w-0 text-xl font-semibold leading-snug md:mt-6">{service.title}</h3>
      </div>
      <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{service.short}</p>
      <Link
        to="/uslugi/$slug"
        params={{ slug: service.slug }}
        resetScroll
        className="mt-auto inline-flex items-center gap-1.5 pt-6 text-sm font-semibold text-foreground transition-all duration-300 ease-out hover:gap-2.5 hover:text-accent"
      >
        Dowiedz się więcej <ArrowUpRight className="size-4" />
      </Link>
    </article>
  );
}

export function Services() {
  const reduce = useReducedMotion();
  const head = SERVICES.slice(0, DESKTOP_PREVIEW);
  const rest = SERVICES.slice(DESKTOP_PREVIEW);
  const hasMore = rest.length > 0;
  const [open, setOpen] = useState(false);

  /** Ostatni rząd z 2 kartami w siatce 3-kolumnowej — wyśrodkowany. */
  const centerLastPairLg = SERVICES.length % 3 === 2;

  return (
    <section id="uslugi" className="relative z-10 overflow-x-clip pt-12 pb-12 max-md:pb-8 sm:pt-28 sm:pb-14">
      <div className="mx-auto max-w-[1360px] px-5 lg:px-8">
        <Reveal className="max-w-4xl md:mx-auto">
          <div className="flex flex-col items-start text-left md:items-center md:text-center">
            <span className="font-display text-xs font-semibold tracking-[0.18em] text-gradient-cyan uppercase">
              Nasze Usługi
            </span>
            <h2 className="mt-5 font-display text-3xl font-bold sm:text-4xl lg:text-5xl">
              Kompleksowe systemy
              <br />
              <span className="text-gradient-cyan">dla domu i biznesu</span>
            </h2>
            <p className="mt-4 max-w-2xl text-muted-foreground">
              Pompy ciepła, fotowoltaika, magazyny energii, klimatyzacja, pellet i instalacje.
              Dobór, montaż i serwis w woj. opolskim i dolnośląskim.
            </p>
          </div>
        </Reveal>

        {/* Mobile: wszystkie usługi */}
        <div className="mt-10 grid grid-cols-1 gap-5 md:hidden">
          {SERVICES.map((service, i) => (
            <Reveal key={service.slug} delay={i * 0.06} className="h-full min-w-0" y={16} scale>
              <ServiceCard service={service} />
            </Reveal>
          ))}
        </div>

        {/* Desktop / tablet: 6 + Pokaż więcej */}
        <div className="mt-14 hidden md:block">
          <ul className="grid gap-6 md:grid-cols-2 lg:grid-cols-6">
            {head.map((service, i) => (
              <li key={service.slug} className="min-w-0 lg:col-span-2">
                <Reveal delay={i * 0.06} className="h-full min-w-0" y={16} scale>
                  <ServiceCard service={service} />
                </Reveal>
              </li>
            ))}
          </ul>

          {hasMore ? (
            <div
              className={cn(
                "grid transition-[grid-template-rows] will-change-[grid-template-rows]",
                reduce ? "duration-0" : "duration-500",
                open ? "grid-rows-[1fr]" : "grid-rows-[0fr]",
              )}
              style={{ transitionTimingFunction: EXPAND_EASE }}
            >
              <div className="min-h-0 overflow-hidden">
                <ul className="mt-6 grid gap-6 md:grid-cols-2 lg:grid-cols-6" aria-hidden={!open}>
                  {rest.map((service, i) => {
                    const globalIndex = DESKTOP_PREVIEW + i;
                    const isFirstOfCenteredPair =
                      centerLastPairLg && globalIndex === SERVICES.length - 2;
                    return (
                      <li
                        key={service.slug}
                        className={cn(
                          "min-w-0 lg:col-span-2",
                          "transition-[opacity,transform]",
                          reduce ? "duration-0" : "duration-400",
                          open
                            ? "translate-y-0 opacity-100"
                            : "translate-y-3 opacity-0",
                          isFirstOfCenteredPair && "lg:col-start-2",
                        )}
                        style={{
                          transitionTimingFunction: EXPAND_EASE,
                          transitionDelay: reduce
                            ? "0ms"
                            : open
                              ? `${80 + i * 55}ms`
                              : `${Math.max(0, (rest.length - 1 - i) * 35)}ms`,
                        }}
                      >
                        <ServiceCard service={service} />
                      </li>
                    );
                  })}
                </ul>
              </div>
            </div>
          ) : null}

          {hasMore ? (
            <div className="mt-10 flex justify-center">
              <button
                type="button"
                onClick={() => setOpen((v) => !v)}
                className="inline-flex items-center gap-2 rounded-full bg-gradient-cyan px-5 py-2.5 text-sm font-semibold text-white shadow-glow transition-transform duration-300 hover:scale-[1.03] active:scale-[0.98]"
                aria-expanded={open}
              >
                {open ? "Zwiń" : "Pokaż więcej"}
                <ChevronDown
                  className={cn(
                    "size-4 transition-transform duration-400",
                    open && "rotate-180",
                  )}
                  style={{ transitionTimingFunction: EXPAND_EASE }}
                  aria-hidden
                />
              </button>
            </div>
          ) : null}
        </div>
      </div>
    </section>
  );
}
