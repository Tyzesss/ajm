import { MapPinned } from "lucide-react";
import { motion, useInView, useReducedMotion } from "framer-motion";
import { useEffect, useRef, useState, type MouseEvent } from "react";
import { SERVICE_COUNTIES, SERVICE_TOWNS } from "@/lib/site";
import { scrollToSection } from "@/lib/scroll-to-section";
import { MAP_TOWNS, OPOLSKIE_PATH, OPOLSKIE_VIEWBOX } from "./opolskie-map-data";
import { Reveal } from "./Reveal";

const EASE = [0.22, 1, 0.36, 1] as const;

const goTo = (href: string) => (e: MouseEvent<HTMLAnchorElement>) => {
  e.preventDefault();
  scrollToSection(href);
};

function AreaMap() {
  const reduce = useReducedMotion();
  const rootRef = useRef<HTMLDivElement>(null);
  const pathRef = useRef<SVGPathElement>(null);
  const inView = useInView(rootRef, { once: true, amount: 0.4 });
  const [pathLen, setPathLen] = useState(0);
  const play = Boolean(reduce) || inView;

  useEffect(() => {
    const node = pathRef.current;
    if (!node) return;
    setPathLen(node.getTotalLength());
  }, []);

  return (
    <div ref={rootRef} className="w-full">
      <svg
        viewBox={OPOLSKIE_VIEWBOX}
        role="img"
        aria-label="Mapa województwa opolskiego z zaznaczonymi miejscowościami"
        className="mx-auto h-auto w-full max-w-[22rem] sm:max-w-[26rem] lg:max-w-none"
      >
        <motion.path
          ref={pathRef}
          d={OPOLSKIE_PATH}
          fill="oklch(0.59 0.14 242)"
          stroke="oklch(0.59 0.14 242)"
          strokeWidth={2}
          strokeLinejoin="round"
          strokeLinecap="round"
          strokeDasharray={pathLen || 1}
          initial={false}
          animate={
            reduce
              ? { strokeDashoffset: 0, fillOpacity: 0.07, opacity: 1 }
              : play && pathLen > 0
                ? { strokeDashoffset: 0, fillOpacity: 0.07, opacity: 1 }
                : { strokeDashoffset: pathLen || 1, fillOpacity: 0, opacity: 0.35 }
          }
          transition={{ duration: reduce ? 0 : 1.35, ease: EASE }}
        />

        {MAP_TOWNS.map((town, i) => {
          const baseR = town.hub ? 6.5 : 4.5;
          const pulseDelay = 1.2 + (i % 6) * 0.45;
          const pulseGap = 1.1 + (i % 4) * 0.35;

          return (
            <g key={town.name}>
              {play && !reduce ? (
                <motion.circle
                  cx={town.x}
                  cy={town.y}
                  fill="none"
                  className={town.hub ? "stroke-accent/55" : "stroke-accent/40"}
                  strokeWidth={town.hub ? 1.6 : 1.25}
                  initial={{ r: baseR, opacity: 0 }}
                  animate={{
                    r: [baseR, town.hub ? 20 : 15],
                    opacity: [0.55, 0],
                  }}
                  transition={{
                    delay: pulseDelay,
                    duration: town.hub ? 2.4 : 2.1,
                    repeat: Infinity,
                    ease: "easeOut",
                    repeatDelay: pulseGap,
                  }}
                />
              ) : null}

              <motion.circle
                cx={town.x}
                cy={town.y}
                r={baseR}
                className={town.hub ? "fill-accent" : "fill-accent/65"}
                initial={false}
                animate={
                  play
                    ? reduce
                      ? { opacity: 1 }
                      : { opacity: town.hub ? [1, 0.55, 1] : [0.85, 0.45, 0.85] }
                    : { opacity: 0 }
                }
                transition={
                  play && !reduce
                    ? {
                        delay: 0.85 + i * 0.04,
                        duration: town.hub ? 2.6 : 3.2,
                        repeat: Infinity,
                        ease: "easeInOut",
                        times: [0, 0.5, 1],
                      }
                    : {
                        delay: reduce ? 0 : 0.85 + i * 0.04,
                        duration: reduce ? 0 : 0.35,
                        ease: EASE,
                      }
                }
              />

              {town.hub ? (
                <motion.circle
                  cx={town.x}
                  cy={town.y}
                  r={11}
                  fill="none"
                  className="stroke-accent/40"
                  strokeWidth={1.5}
                  initial={false}
                  animate={
                    play
                      ? reduce
                        ? { opacity: 1 }
                        : { opacity: [0.45, 0.85, 0.45] }
                      : { opacity: 0 }
                  }
                  transition={
                    play && !reduce
                      ? {
                          delay: 1.05,
                          duration: 2.8,
                          repeat: Infinity,
                          ease: "easeInOut",
                        }
                      : { delay: reduce ? 0 : 1.05, duration: reduce ? 0 : 0.4 }
                  }
                />
              ) : null}

              {town.label ? (
                <motion.text
                  x={town.x + 9}
                  y={town.y + 4}
                  className="fill-muted-foreground"
                  style={{ fontSize: 12, fontFamily: "Manrope, sans-serif", fontWeight: 600 }}
                  initial={false}
                  animate={play ? { opacity: 1 } : { opacity: 0 }}
                  transition={{ delay: reduce ? 0 : 1.1, duration: reduce ? 0 : 0.35 }}
                >
                  {town.name}
                </motion.text>
              ) : (
                <title>{town.name}</title>
              )}
            </g>
          );
        })}
      </svg>
    </div>
  );
}

export function ServiceArea() {
  return (
    <section id="obszar" className="pt-20 pb-16 sm:pt-24 sm:pb-20">
      <div className="mx-auto max-w-[1360px] px-5 lg:px-8">
        <div className="grid items-start gap-8 lg:grid-cols-12 lg:items-center lg:gap-x-14 lg:gap-y-8">
          <Reveal
            delay={0.08}
            className="order-1 lg:col-span-7 lg:col-start-6 lg:row-start-1"
          >
            <span
              data-scroll-target
              className="font-display text-xs font-semibold tracking-[0.18em] text-gradient-cyan uppercase"
            >
              Obszar działania
            </span>
            <h2 className="mt-5 font-display text-3xl font-bold sm:text-4xl lg:text-5xl">
              Namysłów, Opole{" "}
              <span className="text-gradient-cyan">i okolice</span>
            </h2>
            <p className="mt-4 text-muted-foreground">
              Działamy głównie w województwie opolskim. Lista miejscowości jest robocza i może się
              zmieniać.
            </p>
            <p className="mt-3 flex items-start gap-2 text-sm text-muted-foreground">
              <MapPinned className="mt-0.5 size-4 shrink-0 text-accent" />
              <span>Powiaty: {SERVICE_COUNTIES.join(", ")}.</span>
            </p>
          </Reveal>

          <div className="order-2 lg:col-span-5 lg:col-start-1 lg:row-span-2 lg:row-start-1">
            <AreaMap />
          </div>

          <Reveal delay={0.12} className="order-3 lg:col-span-7 lg:col-start-6 lg:row-start-2">
            <ul className="grid grid-cols-3 gap-2 sm:gap-3">
              {SERVICE_TOWNS.map((town) => (
                <li
                  key={town}
                  className="flex flex-col items-center justify-center gap-1.5 rounded-lg border border-accent/20 bg-accent/[0.08] px-1.5 py-2.5 text-center transition-colors duration-300 hover:border-accent/35 hover:bg-accent/12 sm:gap-2 sm:rounded-xl sm:px-3.5 sm:py-3"
                >
                  <span className="text-[11px] font-semibold leading-tight text-foreground sm:text-sm sm:leading-snug">
                    {town}
                  </span>
                  <span
                    className="h-0.5 w-5 rounded-full bg-accent/70 sm:w-6"
                    aria-hidden
                  />
                </li>
              ))}
            </ul>

            <p className="mt-6 text-center text-sm text-muted-foreground sm:text-left sm:text-base">
              Nie ma Twojej lokalizacji?{" "}
              <a
                href="#kontakt"
                onClick={goTo("#kontakt")}
                className="font-medium text-foreground underline-offset-4 hover:text-accent hover:underline"
              >
                Napisz lub zadzwoń
              </a>
              , sprawdzimy dojazd.
            </p>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
