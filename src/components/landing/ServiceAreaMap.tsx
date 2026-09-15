import { motion, useInView, useReducedMotion } from "framer-motion";
import { useRef } from "react";
import { cn } from "@/lib/utils";
import {
  AREA_MAP_TOWNS,
  AREA_MAP_VIEWBOX,
  DOLNOSLASKIE_PATH,
  OPOLSKIE_PATH,
} from "./service-area-map-data";

const EASE = [0.22, 1, 0.36, 1] as const;

function RegionPath({
  d,
  play,
  reduce,
}: {
  d: string;
  play: boolean;
  reduce: boolean | null;
}) {
  return (
    <motion.path
      d={d}
      fill="var(--accent)"
      fillRule="evenodd"
      stroke="var(--accent)"
      strokeWidth={2}
      strokeLinejoin="round"
      strokeLinecap="round"
      initial={false}
      animate={
        reduce || play
          ? { fillOpacity: 0.08, opacity: 1 }
          : { fillOpacity: 0, opacity: 0.35 }
      }
      transition={{ duration: reduce ? 0 : 1.05, ease: EASE }}
    />
  );
}

/** Mapa woj. dolnośląskiego + opolskiego z miejscowościami z oferty. */
export function ServiceAreaMap({ className }: { className?: string }) {
  const reduce = useReducedMotion();
  const rootRef = useRef<HTMLDivElement>(null);
  const inView = useInView(rootRef, { once: true, amount: 0.35 });
  const play = Boolean(reduce) || inView;

  return (
    <div ref={rootRef} className={cn("w-full max-w-[22rem] sm:max-w-[26rem] lg:max-w-none", className)}>
      <svg
        viewBox={AREA_MAP_VIEWBOX}
        preserveAspectRatio="xMidYMid meet"
        role="img"
        aria-label="Mapa województw dolnośląskiego i opolskiego z zaznaczonymi miejscowościami"
        className="mx-auto block aspect-[640/520] h-auto w-full"
      >
        <RegionPath d={DOLNOSLASKIE_PATH} play={play} reduce={reduce} />
        <RegionPath d={OPOLSKIE_PATH} play={play} reduce={reduce} />

        {AREA_MAP_TOWNS.map((town, i) => {
          const baseR = town.hub ? 6.5 : 4.5;
          const pulseDelay = 1.15 + (i % 6) * 0.4;
          const pulseGap = 1.1 + (i % 4) * 0.35;
          const dx = town.labelDx ?? 9;
          const dy = town.labelDy ?? 4;

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
                      ? { delay: 1.05, duration: 2.8, repeat: Infinity, ease: "easeInOut" }
                      : { delay: reduce ? 0 : 1.05, duration: reduce ? 0 : 0.4 }
                  }
                />
              ) : null}

              {town.label ? (
                <motion.text
                  x={town.x + dx}
                  y={town.y + dy}
                  textAnchor={dx < 0 ? "end" : "start"}
                  className="fill-foreground"
                  style={{ fontSize: 20, fontFamily: "Manrope, sans-serif", fontWeight: 700 }}
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
