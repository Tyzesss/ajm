import { cn } from "@/lib/utils";
import { Reveal } from "./Reveal";

const BRANDS = [
  { name: "Panasonic", className: "brand-wordmark--panasonic" },
  { name: "LG", className: "brand-wordmark--lg" },
  { name: "Daikin", className: "brand-wordmark--daikin" },
  { name: "Vaillant", className: "brand-wordmark--vaillant" },
  { name: "Mitsubishi", className: "brand-wordmark--mitsubishi" },
  { name: "Bosch", className: "brand-wordmark--bosch" },
] as const;

export function Brands() {
  const strip = [...BRANDS, ...BRANDS];

  return (
    <section className="bg-navy pb-8 pt-6 sm:pb-10 md:pt-8 md:pb-12" aria-label="Partnerzy">
      <div className="mx-auto flex max-w-[1360px] justify-center px-5 lg:px-8">
        <Reveal>
          <span className="font-display text-xs font-semibold tracking-[0.18em] text-gradient-cyan uppercase">
            Autoryzowany partner marek
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
        <ul className="mt-10 flex flex-wrap items-center justify-center gap-x-14 gap-y-6 lg:mt-12 lg:gap-x-16 xl:gap-x-20">
          {BRANDS.map((brand, i) => (
            <li key={brand.name}>
              <Reveal delay={0.04 + i * 0.05} y={12}>
                <span
                  className={cn(
                    "brand-wordmark text-3xl text-navy-foreground/55 transition-colors duration-300 hover:text-navy-foreground lg:text-4xl",
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
