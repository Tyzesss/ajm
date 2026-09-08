import { cn } from "@/lib/utils";
import { Reveal } from "./Reveal";

/** Marki z montaży AJM (realizacje). */
const BRANDS = [
  { name: "Midea", className: "brand-wordmark--midea" },
  { name: "Panasonic", className: "brand-wordmark--panasonic" },
  { name: "Stiebel Eltron", className: "brand-wordmark--stiebel" },
  { name: "Rotenso", className: "brand-wordmark--rotenso" },
  { name: "Lazar", className: "brand-wordmark--lazar" },
  { name: "Galmet", className: "brand-wordmark--galmet" },
] as const;

export function Brands() {
  const strip = [...BRANDS, ...BRANDS];

  return (
    <section className="pb-10 pt-2 sm:pb-12 md:pb-14" aria-label="Marki, które montujemy">
      <div className="mx-auto flex max-w-[1360px] justify-center px-5 lg:px-8">
        <Reveal>
          <span className="font-display text-xs font-semibold tracking-[0.18em] text-gradient-cyan uppercase">
            Marki, które montujemy
          </span>
        </Reveal>
      </div>

      <div
        className="partners-marquee mt-7 md:hidden"
        aria-label={BRANDS.map((b) => b.name).join(", ")}
      >
        <ul className="partners-marquee__track">
          {strip.map((brand, i) => (
            <li
              key={`${brand.name}-${i}`}
              className={cn("partners-marquee__item brand-wordmark", brand.className)}
              aria-hidden={i >= BRANDS.length}
            >
              {brand.name}
            </li>
          ))}
        </ul>
        <div className="partners-marquee__fade partners-marquee__fade--left" aria-hidden />
        <div className="partners-marquee__fade partners-marquee__fade--right" aria-hidden />
      </div>

      <div className="mx-auto hidden max-w-[1360px] px-5 md:block lg:px-8">
        <ul className="mt-8 flex flex-nowrap items-center justify-between gap-x-3 lg:mt-10 lg:gap-x-5 xl:gap-x-8">
          {BRANDS.map((brand, i) => (
            <li key={brand.name} className="min-w-0 shrink">
              <Reveal delay={0.04 + i * 0.05} y={12}>
                <span
                  className={cn(
                    "brand-wordmark block truncate text-[clamp(1rem,1.5vw,1.75rem)] text-foreground/45 transition-colors duration-300 hover:text-foreground",
                    brand.className,
                  )}
                >
                  {brand.name}
                </span>
              </Reveal>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
