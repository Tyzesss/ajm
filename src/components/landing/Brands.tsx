import { useState } from "react";
import { ArrowUpRight, X } from "lucide-react";
import * as Dialog from "@radix-ui/react-dialog";
import midea from "@/assets/brands/midea-mono.png";
import panasonic from "@/assets/brands/panasonic-mono.png";
import stiebel from "@/assets/brands/stiebel-eltron-mono.png";
import rotenso from "@/assets/brands/rotenso-mono.png";
import lazar from "@/assets/brands/lazar-mono.png";
import galmet from "@/assets/brands/galmet-mono.png";
import afriso from "@/assets/brands/afriso-mono.png";
import vilo from "@/assets/brands/vilo-mono.png";
import grundfos from "@/assets/brands/grundfos-mono.png";
import kaisai from "@/assets/brands/kaisai-mono.png";
import bosch from "@/assets/brands/bosch-mono.png";
import junkers from "@/assets/brands/junkers-mono.png";
import honeywell from "@/assets/brands/honeywell-mono.png";
import { Reveal } from "./Reveal";

/** Marki z montaży AJM - logotypy mono (kolor w *.png). */
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

const logoClass = "h-7 w-auto max-w-[85%] object-contain sm:h-8";

export function Brands() {
  const [open, setOpen] = useState(false);
  const strip = [...BRANDS, ...BRANDS];

  return (
    <section
      className="relative z-10 overflow-x-clip pb-8 pt-1 sm:pb-9"
      aria-label="Marki, które montujemy"
    >
      <div className="mx-auto flex max-w-[1360px] justify-center px-5 lg:px-8">
        <Reveal>
          <span className="font-display text-xs font-semibold tracking-[0.18em] text-gradient-cyan uppercase">
            Marki, które montujemy
          </span>
        </Reveal>
      </div>

      <div className="partners-marquee mt-4" aria-label={BRANDS.map((b) => b.name).join(", ")}>
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
                className="h-7 w-auto max-w-[9rem] object-contain opacity-80 transition-opacity duration-300 hover:opacity-100 sm:h-8"
                loading="lazy"
                decoding="async"
              />
            </li>
          ))}
        </ul>
        <div className="partners-marquee__fade partners-marquee__fade--left" aria-hidden />
        <div className="partners-marquee__fade partners-marquee__fade--right" aria-hidden />
      </div>

      <Reveal delay={0.06} className="mt-5 flex justify-center px-5">
        <button
          type="button"
          onClick={() => setOpen(true)}
          className="inline-flex items-center gap-1 text-[11px] font-semibold tracking-[0.14em] text-muted-foreground uppercase transition-all duration-300 hover:gap-1.5 hover:text-accent"
        >
          Zobacz wszystkie
          <ArrowUpRight className="size-3" />
        </button>
      </Reveal>

      <Dialog.Root open={open} onOpenChange={setOpen}>
        <Dialog.Portal>
          <Dialog.Overlay className="fixed inset-0 z-[80] bg-navy/70 backdrop-blur-sm data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0" />
          <Dialog.Content className="fixed top-1/2 left-1/2 z-[81] flex max-h-[min(88vh,40rem)] w-[min(calc(100vw-1.5rem),36rem)] -translate-x-1/2 -translate-y-1/2 flex-col overflow-hidden rounded-3xl border border-border/70 bg-background shadow-lift outline-none data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95">
            <div className="flex items-start justify-between gap-4 border-b border-border/70 px-5 py-4 sm:px-6">
              <div>
                <Dialog.Title className="font-display text-lg font-bold text-foreground sm:text-xl">
                  Marki, które montujemy
                </Dialog.Title>
                <Dialog.Description className="mt-1 text-sm text-muted-foreground">
                  Pełna lista producentów z naszej oferty.
                </Dialog.Description>
              </div>
              <Dialog.Close
                className="inline-flex size-9 shrink-0 items-center justify-center rounded-full text-muted-foreground transition-colors hover:bg-foreground/5 hover:text-foreground"
                aria-label="Zamknij"
              >
                <X className="size-4" />
              </Dialog.Close>
            </div>

            <ul className="grid grid-cols-2 gap-3 overflow-y-auto p-4 sm:grid-cols-3 sm:gap-4 sm:p-6">
              {BRANDS.map((brand) => (
                <li
                  key={brand.name}
                  className="flex flex-col items-center justify-center gap-3 rounded-2xl border border-border/70 bg-card px-5 py-5 last:col-span-2 last:w-[calc((100%-0.75rem)/2)] last:justify-self-center sm:px-6 sm:last:col-span-1 sm:last:col-start-2 sm:last:w-auto"
                >
                  <img
                    src={brand.src}
                    alt=""
                    className={logoClass}
                    loading="lazy"
                    decoding="async"
                  />
                  <span className="text-center text-xs font-semibold text-foreground/80">
                    {brand.name}
                  </span>
                </li>
              ))}
            </ul>
          </Dialog.Content>
        </Dialog.Portal>
      </Dialog.Root>
    </section>
  );
}
