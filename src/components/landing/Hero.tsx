import { motion, useReducedMotion } from "framer-motion";
import { ArrowRight, ChevronDown, Phone, ShieldCheck } from "lucide-react";
import type { MouseEvent } from "react";
import { Button } from "@/components/ui/button";
import { scrollToSection } from "@/lib/scroll-to-section";
import { PHONE_HREF, SERVICE_AREA } from "@/lib/site";
import { Counter } from "./Counter";
import heroImage from "@/assets/hero-hvac.png";
import heroRightFill from "@/assets/hero-hvac-right.png";

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
      className="relative z-20 isolate overflow-x-clip bg-navy max-md:min-h-[118svh] md:h-svh md:min-h-svh"
    >
      <div className="absolute inset-0 z-0 overflow-hidden">
        {/* Same crop as demo-v4; right fill is glued outside the photo so framing stays identical */}
        <div className="relative size-full origin-[80%_65%] scale-[1.2] -translate-x-[1%] translate-y-[2%] max-md:origin-[80%_42%] max-md:scale-[1.2] max-md:translate-x-0 max-md:-translate-y-[10%] lg:scale-[1.18] lg:translate-x-[1%]">
          <motion.img
            src={heroImage}
            alt="Nowoczesny dom z pompą ciepła o zmierzchu"
            width={1536}
            height={1024}
            initial={reduce ? false : { opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: reduce ? 0 : 1.1, ease: [0.22, 1, 0.36, 1] }}
            className="size-full object-cover object-[88%_60%] max-md:object-[88%_38%]"
          />
          <div
            className="pointer-events-none absolute inset-y-0 left-full w-[18%] max-md:hidden"
            aria-hidden
          >
            <img
              src={heroRightFill}
              alt=""
              width={276}
              height={1024}
              className="size-full object-cover object-left"
            />
          </div>
        </div>
      </div>
      <div
        className="absolute inset-0 z-[1]"
        style={{ backgroundImage: "var(--gradient-hero)" }}
        aria-hidden
      />

      <div className="relative z-10 flex max-md:min-h-[118svh] flex-col md:h-full">
        <div className="relative z-0 mx-auto flex w-full max-w-[1360px] flex-1 flex-col justify-center gap-6 px-5 pb-10 max-md:justify-start max-md:gap-0 max-md:pt-[calc(8rem+env(safe-area-inset-top,0px))] max-md:pb-6 md:pt-24 md:pb-16 lg:px-8 lg:pt-28 lg:pb-16 sm:gap-10">
          <motion.div
            initial={reduce ? false : { opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: reduce ? 0 : 0.7, ease: [0.22, 1, 0.36, 1] }}
            className="mx-auto flex w-full max-w-2xl flex-col items-center text-center sm:max-w-4xl lg:max-w-5xl"
          >
            <span className="glass-panel inline-flex items-center gap-2 rounded-full px-4 py-1.5 text-xs font-semibold tracking-wide text-navy-foreground uppercase">
              <ShieldCheck className="size-3.5 text-accent" />
              Certyfikowany instalator
            </span>

            <h1 className="mt-4 font-display text-[clamp(2.7rem,7.8vw+0.55rem,3.5rem)] leading-[1.05] font-extrabold tracking-tight text-navy-foreground sm:mt-5 sm:text-7xl sm:tracking-normal lg:text-[4.85rem]">
              <span className="sm:whitespace-nowrap">Instalacje grzewcze,</span>
              <br />
              <span className="text-gradient-cyan sm:whitespace-nowrap">
                chłodnicze i&nbsp;sanitarne.
              </span>
            </h1>

            <p className="mt-4 max-w-xl text-sm text-navy-foreground/75 sm:mt-5 sm:max-w-3xl sm:text-lg">
              <span className="sm:whitespace-nowrap">
                Jedna ekipa od doboru sprzętu przez montaż po uruchomienie i&nbsp;serwis.
              </span>
              <br /> {SERVICE_AREA}.
            </p>

            <div className="mt-6 flex w-full max-w-md flex-col items-stretch gap-3 sm:mt-8 sm:max-w-none sm:flex-row sm:flex-wrap sm:items-center sm:justify-center sm:gap-4">
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

            <div className="mt-8 flex w-full flex-wrap items-start justify-center gap-x-8 gap-y-5 sm:mt-14 sm:gap-x-10 md:mt-16 md:gap-x-12">
              {STATS.map((stat, i) => (
                <div
                  key={stat.label}
                  className={
                    i === 2
                      ? "hidden flex-col items-center text-center sm:flex"
                      : "flex flex-col items-center text-center"
                  }
                >
                  <div className="text-gradient-cyan font-display text-3xl font-bold md:text-4xl">
                    <Counter to={stat.value} />
                    <span>{stat.suffix}</span>
                  </div>
                  <p className="mt-1 text-[11px] leading-snug font-medium tracking-wide text-navy-foreground/70 uppercase">
                    {stat.label}
                  </p>
                  <span className="mt-2.5 h-0.5 w-7 rounded-full bg-accent/75" aria-hidden />
                </div>
              ))}
            </div>
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
    </section>
  );
}
