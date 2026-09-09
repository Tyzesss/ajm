import { motion, useReducedMotion } from "framer-motion";
import { ArrowRight, ChevronDown, Phone, ShieldCheck } from "lucide-react";
import type { MouseEvent } from "react";
import { Button } from "@/components/ui/button";
import { scrollToSection } from "@/lib/scroll-to-section";
import { PHONE_HREF, SERVICE_AREA } from "@/lib/site";
import { Counter } from "./Counter";
import heroImage from "@/assets/hero-hvac.png";
import heroRightFill from "@/assets/hero-hvac-right.png";
import { SERVICES } from "@/lib/services";

/** Unikalne zdjęcia realizacji klienta (`ajm-*.jpg` w assets). */
const INSTALLATION_PHOTOS = 20;

const STATS = [
  { value: 4, suffix: "+", label: "Lat doświadczenia" },
  { value: INSTALLATION_PHOTOS, suffix: "+", label: "Instalacji" },
  { value: 5, suffix: ".0", label: "Ocena Google" },
  { value: SERVICES.length, suffix: "", label: "Usług w ofercie" },
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
      className="relative z-20 isolate overflow-x-clip bg-navy max-md:min-h-[118svh] md:h-[108svh] md:min-h-[108svh]"
    >
      <div className="absolute inset-0 z-0 overflow-hidden">
        {/* Same crop as demo-v4; right fill is glued outside the photo so framing stays identical */}
        <div className="relative size-full origin-[80%_65%] scale-[1.2] -translate-x-[1%] translate-y-[2%] max-md:origin-[80%_42%] max-md:scale-[1.2] max-md:translate-x-0 max-md:-translate-y-[10%] lg:scale-[1.18] lg:translate-x-[1%]">
          <motion.img
            src={heroImage}
            alt="Nowoczesny dom z pompą ciepła o zmierzchu"
            width={1280}
            height={720}
            initial={reduce ? false : { opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: reduce ? 0 : 1.1, ease: [0.22, 1, 0.36, 1] }}
            className="size-full object-cover object-[70%_45%] max-md:object-[72%_35%]"
          />
          <div
            className="pointer-events-none absolute inset-y-0 left-full w-[18%] max-md:hidden"
            aria-hidden
          >
            <img
              src={heroRightFill}
              alt=""
              width={276}
              height={720}
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
        <div className="relative z-0 mx-auto flex w-full max-w-[1360px] flex-1 flex-col justify-center gap-6 px-5 pb-10 max-md:justify-start max-md:gap-0 max-md:pt-[calc(8rem+env(safe-area-inset-top,0px))] max-md:pb-6 md:pt-20 md:pb-32 lg:px-8 lg:pt-24 lg:pb-32 sm:gap-10">
          <motion.div
            initial={reduce ? false : { opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: reduce ? 0 : 0.7, ease: [0.22, 1, 0.36, 1] }}
            className="mx-auto flex w-full max-w-2xl flex-col items-center text-center sm:max-w-4xl md:-translate-y-3 lg:max-w-5xl lg:-translate-y-4"
          >
            <span className="glass-panel inline-flex items-center gap-2 rounded-full px-4 py-1.5 text-xs font-semibold tracking-wide text-navy-foreground uppercase md:text-[0.8125rem]">
              <ShieldCheck className="size-3.5 text-accent" />
              Certyfikowany instalator
            </span>

            <h1 className="mt-4 font-display text-[clamp(2.7rem,7.8vw+0.55rem,3.5rem)] leading-[1.05] font-extrabold tracking-tight text-navy-foreground sm:mt-5 sm:text-7xl sm:tracking-normal lg:text-[5rem]">
              <span className="sm:whitespace-nowrap">Instalacje grzewcze,</span>
              <br />
              <span className="text-gradient-cyan sm:whitespace-nowrap">
                chłodnicze i&nbsp;sanitarne.
              </span>
            </h1>

            <p className="mt-4 max-w-xl text-sm text-navy-foreground/75 sm:mt-5 sm:max-w-3xl sm:text-lg md:text-[1.2rem]">
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

            {/* Mobile stats - 2 badges */}
            <div className="mt-10 flex w-full flex-wrap items-start justify-center gap-x-14 gap-y-5 px-2 md:hidden">
              {STATS.slice(0, 2).map((stat) => (
                <div
                  key={stat.label}
                  className="flex min-w-[8.5rem] flex-col items-center text-center"
                >
                  <div className="font-display text-3xl font-bold">
                    <Counter to={stat.value} suffix={stat.suffix} />
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

      {/* Desktop scroll cue - within first 100vh fold */}
      <motion.a
        href="#o-nas"
        aria-label="Przewiń dalej"
        onClick={goTo("#o-nas")}
        initial={reduce ? false : { opacity: 0 }}
        animate={reduce ? { opacity: 1 } : { opacity: 1, y: [0, 10, 0] }}
        transition={
          reduce
            ? { duration: 0 }
            : {
                opacity: { duration: 0.6, delay: 1 },
                y: { duration: 1.7, repeat: Infinity, ease: "easeInOut" },
              }
        }
        className="absolute top-[calc(100svh-5.75rem)] left-1/2 z-20 hidden -translate-x-1/2 flex-col items-center gap-1 text-navy-foreground/55 transition-colors duration-300 hover:text-navy-foreground/90 md:flex"
      >
        <span className="font-display text-[10px] font-semibold tracking-[0.18em] uppercase">
          Przewiń
        </span>
        <ChevronDown className="size-6 stroke-[1.5]" />
      </motion.a>

      {/* Desktop / tablet white trust card - fully below 100vh fold */}
      <motion.div
        initial={reduce ? false : { opacity: 0, y: 32 }}
        whileInView={reduce ? undefined : { opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.35 }}
        transition={{ duration: reduce ? 0 : 0.65, ease: [0.22, 1, 0.36, 1] }}
        className="absolute inset-x-0 bottom-0 z-30 hidden translate-y-1/2 px-3 sm:px-5 md:block lg:px-6"
      >
        <div className="mx-auto grid max-w-6xl grid-cols-2 overflow-hidden rounded-2xl bg-background shadow-[0_6px_18px_-8px_oklch(0.155_0.045_242/0.1),0_2px_8px_-4px_oklch(0.155_0.045_242/0.05)] sm:grid-cols-4 sm:rounded-3xl">
          {STATS.map((stat, i) => (
            <motion.div
              key={stat.label}
              initial={reduce ? false : { opacity: 0, y: 18 }}
              whileInView={reduce ? undefined : { opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.5 }}
              transition={{
                duration: reduce ? 0 : 0.5,
                delay: reduce ? 0 : 0.08 + i * 0.1,
                ease: [0.22, 1, 0.36, 1],
              }}
              className={
                i >= 2
                  ? "hidden flex-col items-center justify-center border-r border-accent/20 px-1.5 py-5 text-center last:border-r-0 sm:flex sm:px-4 sm:py-5 md:px-6 md:py-6"
                  : i === 0
                    ? "flex flex-col items-center justify-center border-r border-accent/20 px-1.5 py-5 text-center sm:px-4 sm:py-5 md:px-6 md:py-6"
                    : "flex flex-col items-center justify-center border-accent/20 px-1.5 py-5 text-center sm:border-r sm:px-4 sm:py-5 md:px-6 md:py-6"
              }
            >
              <div className="font-display text-2xl font-bold tracking-tight sm:text-3xl md:text-4xl">
                <Counter to={stat.value} suffix={stat.suffix} />
              </div>
              <p className="mt-1.5 max-w-[9rem] text-[9px] leading-snug font-medium tracking-[0.06em] text-muted-foreground uppercase sm:mt-1.5 sm:text-[10px] md:text-xs">
                {stat.label}
              </p>
              <span className="mt-2.5 h-0.5 w-7 rounded-full bg-accent/75 sm:mt-3" aria-hidden />
            </motion.div>
          ))}
        </div>
      </motion.div>
    </section>
  );
}
