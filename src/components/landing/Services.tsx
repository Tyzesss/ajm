import type { LucideIcon } from "lucide-react";
import {
  ArrowUpRight,
  Fan,
  Flame,
  Gauge,
  Snowflake,
  Thermometer,
  Wrench,
} from "lucide-react";
import { Link } from "@tanstack/react-router";
import { Reveal } from "./Reveal";
import { SERVICES } from "@/lib/services";

const ICONS: Record<string, LucideIcon> = {
  "pompy-ciepla": Thermometer,
  klimatyzacja: Snowflake,
  kotly: Flame,
  "ogrzewanie-podlogowe": Gauge,
  rekuperacja: Fan,
  serwis: Wrench,
};

function ServiceCard({ service }: { service: (typeof SERVICES)[number] }) {
  const Icon = ICONS[service.slug] ?? Thermometer;

  return (
    <article className="group flex h-full flex-col rounded-2xl border border-border/70 bg-card p-7 max-md:shadow-none md:overflow-hidden md:shadow-card md:transition-all md:duration-500 md:ease-[cubic-bezier(0.22,1,0.36,1)] md:hover:-translate-y-1 md:hover:border-accent/40 md:hover:shadow-lift">
      <div className="flex items-center gap-3.5 md:block">
        <span className="inline-flex size-11 shrink-0 items-center justify-center rounded-xl bg-gradient-cyan text-white transition-all duration-500 ease-[cubic-bezier(0.22,1,0.36,1)] md:size-12 md:bg-navy md:text-navy-foreground md:group-hover:bg-gradient-cyan md:group-hover:text-white">
          <Icon className="size-5" />
        </span>
        <h3 className="text-xl font-semibold md:mt-6">{service.title}</h3>
      </div>
      <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{service.short}</p>
      <Link
        to="/uslugi/$slug"
        params={{ slug: service.slug }}
        resetScroll
        className="mt-auto inline-flex items-center gap-1.5 pt-6 text-sm font-semibold text-accent-foreground/80 transition-all duration-300 ease-out hover:gap-2.5 hover:text-accent"
      >
        Dowiedz się więcej <ArrowUpRight className="size-4" />
      </Link>
    </article>
  );
}

export function Services() {
  return (
    <section id="uslugi" className="pt-24 pb-20 max-md:pb-10 sm:pt-28">
      <div className="mx-auto max-w-[1360px] px-5 lg:px-8">
        <Reveal className="max-w-4xl md:mx-auto">
          <div className="flex flex-col items-start text-left md:items-center md:text-center">
            <span
              data-scroll-target
              className="font-display text-xs font-semibold tracking-[0.18em] text-gradient-cyan uppercase"
            >
              Nasze Usługi
            </span>
            <h2 className="mt-5 font-display text-3xl font-bold sm:text-4xl md:whitespace-nowrap lg:text-5xl">
              Wszystko czego potrzebuje
              <span className="hidden md:inline"> </span>
              <br className="md:hidden" />
              <span className="text-gradient-cyan">Twój dom</span>
            </h2>
            <p className="mt-4 max-w-2xl text-muted-foreground">
              Jeden zespół specjalistów odpowiada za dobór, montaż i opiekę nad Twoją instalacją.
            </p>
          </div>
        </Reveal>

        <div className="mt-10 grid grid-cols-1 gap-5 md:mt-14 md:grid-cols-2 md:gap-6 lg:grid-cols-3">
          {SERVICES.map((service, i) => (
            <Reveal key={service.slug} delay={i * 0.06} className="h-full" y={16} scale>
              <ServiceCard service={service} />
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
