import { useEffect, useRef, useState } from "react";
import { useReducedMotion } from "framer-motion";
import { ChevronDown } from "lucide-react";
import { serviceTownsForTiles } from "@/lib/site";
import { cn } from "@/lib/utils";

/** Zgodne z `sm:` w Tailwind (640px) - 4 na mobile, 9 na PC. */
const SM_MQ = "(min-width: 640px)";
const FADE_MS = 280;

function usePreviewCount() {
  const [preview, setPreview] = useState(() =>
    typeof window !== "undefined" && window.matchMedia(SM_MQ).matches ? 9 : 4,
  );

  useEffect(() => {
    const mql = window.matchMedia(SM_MQ);
    const sync = () => setPreview(mql.matches ? 9 : 4);
    sync();
    mql.addEventListener("change", sync);
    return () => mql.removeEventListener("change", sync);
  }, []);

  return preview;
}

function TownTile({
  town,
  serviceTitle,
  centerLast,
  aloneOn2,
  aloneOn3,
  className,
}: {
  town: string;
  serviceTitle: string;
  centerLast?: boolean;
  aloneOn2?: boolean;
  aloneOn3?: boolean;
  className?: string;
}) {
  return (
    <li
      className={cn(
        "flex flex-col items-center justify-center gap-1.5 rounded-lg border border-accent/20 bg-accent/[0.08] px-2 py-2.5 text-center transition-colors duration-300 hover:border-accent/35 hover:bg-accent/12 sm:gap-2 sm:rounded-xl sm:px-3.5 sm:py-3",
        centerLast &&
          aloneOn2 &&
          "col-span-2 w-[calc((100%-0.5rem)/2)] justify-self-center",
        centerLast &&
          aloneOn3 &&
          "sm:col-span-3 sm:w-[calc((100%-1.5rem)/3)] sm:justify-self-center",
        centerLast && aloneOn2 && !aloneOn3 && "sm:col-span-1 sm:w-auto sm:justify-self-auto",
        className,
      )}
    >
      <span className="text-[11px] font-semibold leading-snug text-balance text-foreground sm:text-sm">
        {serviceTitle} {town}
      </span>
      <span className="h-0.5 w-5 rounded-full bg-accent/70 sm:w-6" aria-hidden />
    </li>
  );
}

/** Kafelki „Usługa Miasto” - 4 na mobile / 9 na PC, reszta pod „Zobacz wszystkie”. */
export function ServiceTownTiles({ serviceTitle }: { serviceTitle: string }) {
  const reduce = useReducedMotion();
  const preview = usePreviewCount();
  const towns = serviceTownsForTiles();
  const head = towns.slice(0, preview);
  const rest = towns.slice(preview);
  const headLast = head.length - 1;
  const restLast = rest.length - 1;

  /** `mounted` trzyma DOM; `open` steruje opacity - zwijanie: fade → potem unmount. */
  const [mounted, setMounted] = useState(false);
  const [open, setOpen] = useState(false);
  const closeTimer = useRef<ReturnType<typeof setTimeout> | null>(null);

  useEffect(() => {
    return () => {
      if (closeTimer.current) clearTimeout(closeTimer.current);
    };
  }, []);

  const toggle = () => {
    if (closeTimer.current) {
      clearTimeout(closeTimer.current);
      closeTimer.current = null;
    }

    if (open || mounted) {
      // Zwijanie: najpierw fade, potem ścięcie wysokości (gdy już niewidoczne).
      setOpen(false);
      if (reduce) {
        setMounted(false);
      } else {
        closeTimer.current = setTimeout(() => {
          setMounted(false);
          closeTimer.current = null;
        }, FADE_MS);
      }
      return;
    }

    // Rozwijanie: od razu w DOM, potem fade-in.
    setMounted(true);
    if (reduce) {
      setOpen(true);
    } else {
      requestAnimationFrame(() => {
        requestAnimationFrame(() => setOpen(true));
      });
    }
  };

  const fade = cn(
    "transition-opacity ease-[cubic-bezier(0.22,1,0.36,1)]",
    reduce ? "duration-0" : "duration-[280ms]",
    open ? "opacity-100" : "opacity-0",
  );

  return (
    <div>
      <ul className="grid grid-cols-2 gap-2 sm:grid-cols-3 sm:gap-3">
        {head.map((town, i) => (
          <TownTile
            key={town}
            town={town}
            serviceTitle={serviceTitle}
            centerLast={!mounted && i === headLast}
            aloneOn2={head.length % 2 === 1}
            aloneOn3={head.length % 3 === 1}
          />
        ))}

        {mounted
          ? rest.map((town, i) => (
              <TownTile
                key={town}
                town={town}
                serviceTitle={serviceTitle}
                centerLast={i === restLast}
                aloneOn2={rest.length % 2 === 1}
                aloneOn3={rest.length % 3 === 1}
                className={fade}
              />
            ))
          : null}
      </ul>

      <button
        type="button"
        onClick={toggle}
        className="mt-4 inline-flex w-full items-center justify-center gap-1.5 text-[11px] font-semibold tracking-[0.14em] text-muted-foreground uppercase transition-colors hover:text-accent sm:w-auto sm:justify-start"
        aria-expanded={open}
      >
        {open || mounted ? "Zwiń" : "Zobacz wszystkie"}
        <ChevronDown
          className={cn(
            "size-3.5 transition-transform duration-300",
            (open || mounted) && "rotate-180",
          )}
          aria-hidden
        />
      </button>

      {mounted ? (
        <p
          className={cn(
            "mt-5 text-sm text-muted-foreground lg:text-left",
            fade,
            !open && "pointer-events-none",
          )}
        >
          Dojazd poza listę uzgadniamy indywidualnie.
        </p>
      ) : null}
    </div>
  );
}
