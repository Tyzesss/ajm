import { motion, useReducedMotion } from "framer-motion";
import { ArrowRight, ChevronDown, Phone, ShieldCheck } from "lucide-react";
import type { MouseEvent } from "react";
import { Button } from "@/components/ui/button";
import { scrollToSection } from "@/lib/scroll-to-section";
import { PHONE_HREF, SERVICE_AREA } from "@/lib/site";
import { Counter } from "./Counter";
import heroImage from "@/assets/hero-ajm-technika.png";

const STATS = [
  { value: 15, suffix: "+", label: "Lat doświadczenia" },
  { value: 2500, suffix: "+", label: "Instalacji" },
  { value: 5, suffix: ".0", label: "Ocena Google" },
];

const goTo = (href: string) => (e: MouseEvent<HTMLAnchorElement>) => {
  e.preventDefault();
  scrollToSection(href);
};

export function Hero() {
  const reduce = useReducedMotion();

  return (
    <section
      id="top"
      className="relative z-20 isolate overflow-x-clip bg-navy max-md:min-h-[118svh] md:h-[calc(100svh-5rem)] md:min-h-[32rem] lg:h-[calc(100svh-5.5rem)]"
    >
      <div className="absolute inset-0 z-0 overflow-hidden">
        {/* Wider than viewport so scale + left shift never reveal bg-navy on the right */}
        <div className="absolute inset-y-0 left-[-12%] h-full w-[124%] origin-[75%_40%] scale-[1.08] -translate-x-[2%] max-md:left-[-8%] max-md:w-[116%] max-md:origin-[80%_32%] max-md:scale-[1.14] max-md:translate-x-0 max-md:-translate-y-[4%] lg:scale-[1.06] lg:-translate-x-[3%]">
          <motion.img
            src={heroImage}
            alt="Polski dom z pompą ciepła i klimatyzacją — montaż AJM Technika"
            width={1280}
            height={720}
            initial={reduce ? false : { opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: reduce ? 0 : 1.1, ease: [0.22, 1, 0.36, 1] }}
            className="size-full object-cover object-[78%_36%] max-md:object-[82%_30%]"
          />
        </div>
      </div>
      <div
        className="absolute inset-0 z-[1]"
        style={{ backgroundImage: "var(--gradient-hero)" }}
        aria-hidden
      />

      <div className="relative z-10 flex max-md:min-h-[118svh] flex-col md:h-full">
        <div className="relative z-0 mx-auto flex w-full max-w-7xl flex-1 flex-col justify-center gap-6 px-5 pb-10 max-md:justify-start max-md:gap-0 max-md:pt-[calc(8rem+env(safe-area-inset-top,0px))] max-md:pb-6 md:pt-24 md:pb-28 lg:px-8 lg:pt-24 lg:pb-28 sm:gap-10">
          <motion.div
            initial={reduce ? false : { opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: reduce ? 0 : 0.7, ease: [0.22, 1, 0.36, 1] }}
            className="flex w-full max-w-2xl flex-col items-center text-center sm:items-start sm:text-left lg:max-w-3xl"
          >
            <span className="glass-panel inline-flex items-center gap-2 rounded-full px-4 py-1.5 text-xs font-semibold tracking-wide text-navy-foreground uppercase">
              <ShieldCheck className="size-3.5 text-accent" />
              Certyfikowany instalator
            </span>

            <h1 className="mt-4 font-display text-[clamp(2.7rem,7.8vw+0.55rem,3.5rem)] leading-[1.05] font-extrabold tracking-tight text-navy-foreground sm:mt-5 sm:text-6xl sm:tracking-normal lg:text-[4.15rem]">
              Pompy ciepła.
              <br />
              Klimatyzacja.
              <br />
              <span className="text-gradient-cyan">Montaż z&nbsp;Namysłowa.</span>
            </h1>

            <p className="mt-4 max-w-xl text-sm text-navy-foreground/75 sm:mt-5 sm:text-lg">
              Jedna ekipa od doboru sprzętu po uruchomienie.
              <br /> {SERVICE_AREA}.
            </p>

            <div className="mt-6 flex w-full max-w-md flex-col items-stretch gap-3 sm:mt-8 sm:max-w-none sm:flex-row sm:flex-wrap sm:items-center sm:justify-start sm:gap-4">
              <Button asChild variant="cyan" size="xl">
                <a
                  href="#uslugi"
                  onClick={goTo("#uslugi")}
                  className="w-full rounded-full uppercase sm:w-auto sm:rounded-xl sm:normal-case"
                >
                  Sprawdź ofertę <ArrowRight className="size-4" />
                </a>
              </Button>
              <Button asChild variant="hero" size="xl">
                <a
                  href={PHONE_HREF}
                  className="w-full rounded-full uppercase sm:w-auto sm:rounded-xl sm:normal-case"
                >
                  <Phone className="size-4 text-accent" /> Zadzwoń teraz
                </a>
              </Button>
            </div>
          </motion.div>

          {/* Mobile stats */}
          <motion.div
            initial={reduce ? false : { opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: reduce ? 0 : 0.7, delay: reduce ? 0 : 0.18, ease: [0.22, 1, 0.36, 1] }}
            className="mx-auto mt-10 grid w-full max-w-[58rem] shrink-0 grid-cols-2 gap-x-6 gap-y-3.5 md:hidden"
          >
            {STATS.slice(0, 2).map((stat) => (
              <div key={stat.label} className="flex flex-col items-center justify-center text-center">
                <div className="font-display text-3xl font-bold text-accent">
                  <Counter to={stat.value} />
                  <span>{stat.suffix}</span>
                </div>
                <p className="mt-1 text-[11px] leading-snug font-medium tracking-wide text-navy-foreground/70 uppercase">
                  {stat.label}
                </p>
                <span className="mt-2.5 h-0.5 w-7 rounded-full bg-accent/75" aria-hidden />
              </div>
            ))}
          </motion.div>

          <motion.a
            href="#o-nas"
            aria-label="Przewiń dalej"
            onClick={goTo("#o-nas")}
            initial={reduce ? false : { opacity: 0 }}
            animate={reduce ? { opacity: 1 } : { opacity: 1, y: [0, 8, 0] }}
            transition={
              reduce
                ? { duration: 0 }
                : {
                    opacity: { duration: 0.6, delay: 0.8 },
                    y: { duration: 1.6, repeat: Infinity, ease: "easeInOut" },
                  }
            }
            className="relative z-20 mx-auto mt-10 mb-2 flex w-fit items-center justify-center text-navy-foreground/55 transition-colors duration-300 hover:text-navy-foreground/90 md:hidden"
          >
            <ChevronDown className="size-7 stroke-[1.5]" />
          </motion.a>
        </div>
      </div>

      {/* Desktop / tablet trust card */}
      <motion.div
        initial={reduce ? false : { opacity: 0, y: 16 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: reduce ? 0 : 0.7, delay: reduce ? 0 : 0.2, ease: [0.22, 1, 0.36, 1] }}
        className="absolute inset-x-0 bottom-0 z-30 hidden translate-y-1/2 px-3 sm:px-5 md:block lg:px-6"
      >
        <div className="mx-auto grid max-w-6xl grid-cols-3 overflow-hidden rounded-2xl bg-background shadow-card ring-1 ring-accent/25 sm:rounded-3xl">
          {STATS.map((stat, i) => (
            <div
              key={stat.label}
              className={
                i < STATS.length - 1
                  ? "flex flex-col items-center justify-center border-r border-accent/20 px-1.5 py-5 text-center sm:px-4 sm:py-5 md:px-6 md:py-6"
                  : "flex flex-col items-center justify-center px-1.5 py-5 text-center sm:px-4 sm:py-5 md:px-6 md:py-6"
              }
            >
              <div className="text-gradient-cyan font-display text-2xl font-bold tracking-tight sm:text-3xl md:text-4xl">
                <Counter to={stat.value} />
                <span>{stat.suffix}</span>
              </div>
              <p className="mt-1.5 max-w-[9rem] text-[9px] leading-snug font-medium tracking-[0.06em] text-muted-foreground uppercase sm:mt-1.5 sm:text-[10px] md:text-xs">
                {stat.label}
              </p>
              <span className="mt-2.5 h-0.5 w-7 rounded-full bg-accent/75 sm:mt-3" aria-hidden />
            </div>
          ))}
        </div>
      </motion.div>
    </section>
  );
}
