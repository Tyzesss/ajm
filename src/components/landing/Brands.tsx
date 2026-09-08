import { cn } from "@/lib/utils";
import { Reveal } from "./Reveal";

const BRANDS = [
  { name: "Midea", className: "brand-wordmark--midea" },
  { name: "Daikin", className: "brand-wordmark--daikin" },
  { name: "Panasonic", className: "brand-wordmark--panasonic" },
  { name: "Defro", className: "brand-wordmark--defro" },
  { name: "LG", className: "brand-wordmark--lg" },
  { name: "Vaillant", className: "brand-wordmark--vaillant" },
  { name: "Mitsubishi", className: "brand-wordmark--mitsubishi" },
  { name: "Bosch", className: "brand-wordmark--bosch" },
] as const;

export function Brands() {
  const strip = [...BRANDS, ...BRANDS];

  return (
    <section className="pb-8 pt-6 sm:pb-10 md:pt-8 md:pb-12" aria-label="Partnerzy">
      <div className="mx-auto flex max-w-[1360px] justify-center px-5 lg:px-8">
        <Reveal>
          <span className="font-display text-xs font-semibold tracking-[0.18em] text-gradient-cyan uppercase">
            Marki w realizacjach
          </span>
        </Reveal>
      </div>

      <div
        className="partners-marquee partners-marquee--on-navy mt-7 md:hidden"
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
        <ul className="mt-10 flex flex-nowrap items-center justify-between gap-x-3 lg:mt-12 lg:gap-x-5 xl:gap-x-8">
          {BRANDS.map((brand, i) => (
            <li key={brand.name} className="shrink min-w-0">
              <Reveal delay={0.04 + i * 0.05} y={12}>
                <span
                  className={cn(
                    "brand-wordmark block truncate text-[clamp(1.05rem,1.6vw,2rem)] text-navy-foreground/55 transition-colors duration-300 hover:text-navy-foreground",
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
