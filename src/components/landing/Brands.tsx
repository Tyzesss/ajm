import midea from "@/assets/brands/midea.svg";
import panasonic from "@/assets/brands/panasonic.svg";
import stiebel from "@/assets/brands/stiebel-eltron.svg";
import rotenso from "@/assets/brands/rotenso.svg";
import lazar from "@/assets/brands/lazar.svg";
import galmet from "@/assets/brands/galmet.svg";
import afriso from "@/assets/brands/afriso.svg";
import vilo from "@/assets/brands/vilo.svg";
import grundfos from "@/assets/brands/grundfos.svg";
import kaisai from "@/assets/brands/kaisai.svg";
import bosch from "@/assets/brands/bosch.svg";
import junkers from "@/assets/brands/junkers.svg";
import honeywell from "@/assets/brands/honeywell.svg";
import { Reveal } from "./Reveal";

/** Marki z montaży AJM — obecne + nowe z feedbacku klienta. */
const BRANDS = [
  { name: "Midea", src: midea },
  { name: "Panasonic", src: panasonic },
  { name: "Stiebel Eltron", src: stiebel },
  { name: "Rotenso", src: rotenso },
  { name: "Lazar", src: lazar },
  { name: "Galmet", src: galmet },
  { name: "Afriso", src: afriso },
  { name: "Vilo", src: vilo },
  { name: "Grundfos", src: grundfos },
  { name: "Kaisai", src: kaisai },
  { name: "Bosch", src: bosch },
  { name: "Junkers", src: junkers },
  { name: "Honeywell", src: honeywell },
] as const;

export function Brands() {
  const strip = [...BRANDS, ...BRANDS];

  return (
    <section
      className="relative z-10 overflow-x-clip pb-12 pt-2 sm:pb-14 md:pb-16"
      aria-label="Marki, które montujemy"
    >
      <div className="mx-auto flex max-w-[1360px] justify-center px-5 lg:px-8">
        <Reveal>
          <span className="font-display text-xs font-semibold tracking-[0.18em] text-gradient-cyan uppercase">
            Marki, które montujemy
          </span>
        </Reveal>
      </div>

      <div
        className="partners-marquee mt-7"
        aria-label={BRANDS.map((b) => b.name).join(", ")}
      >
        <ul className="partners-marquee__track">
          {strip.map((brand, i) => (
            <li
              key={`${brand.name}-${i}`}
              className="partners-marquee__item partners-marquee__item--logo"
              aria-hidden={i >= BRANDS.length}
            >
              <img
                src={brand.src}
                alt={i >= BRANDS.length ? "" : brand.name}
                className="h-8 w-auto max-w-[9.5rem] object-contain opacity-55 grayscale transition-[opacity,filter] duration-300 hover:opacity-90 hover:grayscale-0 sm:h-9"
                loading="lazy"
                decoding="async"
              />
            </li>
          ))}
        </ul>
        <div className="partners-marquee__fade partners-marquee__fade--left" aria-hidden />
        <div className="partners-marquee__fade partners-marquee__fade--right" aria-hidden />
      </div>
    </section>
  );
}
