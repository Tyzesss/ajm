import { useCallback, useEffect, useState } from "react";
import useEmblaCarousel from "embla-carousel-react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { cn } from "@/lib/utils";
import { MobileCarousel } from "./MobileCarousel";
import { Reveal } from "./Reveal";
import type { RealizationCard } from "@/lib/realization-cards";

function loopOffset(index: number, selected: number, length: number) {
  let delta = index - selected;
  const half = length / 2;
  if (delta > half) delta -= length;
  if (delta < -half) delta += length;
  return delta;
}

function RealizationCardView({
  item,
  faded = false,
}: {
  item: RealizationCard;
  faded?: boolean;
}) {
  return (
    <article
      className={cn(
        "group relative flex h-full flex-col overflow-hidden rounded-2xl bg-white",
        faded
          ? "border border-transparent"
          : "border border-border/70 max-md:shadow-none md:border-border/40",
      )}
    >
      <div className="aspect-[16/10] overflow-hidden bg-navy">
        <img
          src={item.image}
          alt={item.alt}
          className="size-full scale-[1.05] object-cover transition-transform duration-700 ease-[cubic-bezier(0.22,1,0.36,1)] md:group-hover:scale-[1.08]"
          style={{ objectPosition: item.focus ?? "50% 42%" }}
        />
      </div>
      <div className="flex flex-1 flex-col p-5 sm:p-6">
        {item.year ? (
          <p className="text-[11px] font-semibold tracking-wide text-accent uppercase">{item.year}</p>
        ) : (
          <p className="text-[11px] font-semibold tracking-wide text-accent uppercase">Zakres prac</p>
        )}
        <h3 className="mt-2 font-display text-lg font-bold text-foreground md:text-xl">{item.title}</h3>
        <p className="mt-2 flex-1 text-sm leading-relaxed text-muted-foreground">{item.scope}</p>
      </div>
    </article>
  );
}

function loopSlides(items: RealizationCard[], min = 6) {
  if (items.length < 3) return items;
  if (items.length >= min) return items;
  const slides: RealizationCard[] = [];
  while (slides.length < min) slides.push(...items);
  return slides;
}

function RealizationFocusCarousel({ items }: { items: RealizationCard[] }) {
  const canLoop = items.length >= 3;
  const slides = canLoop ? loopSlides(items) : items;
  const [emblaRef, emblaApi] = useEmblaCarousel({
    align: "center",
    loop: canLoop,
    skipSnaps: false,
    containScroll: canLoop ? false : "trimSnaps",
    duration: 28,
  });
  const [selected, setSelected] = useState(0);
  const activeIndex = items.length ? (canLoop ? selected % items.length : selected) : 0;

  const onSelect = useCallback(() => {
    if (!emblaApi) return;
    setSelected(emblaApi.selectedScrollSnap());
  }, [emblaApi]);

  useEffect(() => {
    if (!emblaApi) return;
    onSelect();
    emblaApi.on("select", onSelect);
    emblaApi.on("reInit", onSelect);
    return () => {
      emblaApi.off("select", onSelect);
      emblaApi.off("reInit", onSelect);
    };
  }, [emblaApi, onSelect]);

  return (
    <div className="relative">
      {items.length > 1 ? (
        <>
          <button
            type="button"
            aria-label="Poprzednia realizacja"
            onClick={() => emblaApi?.scrollPrev()}
            className="absolute top-1/2 left-2 z-30 hidden size-12 -translate-y-1/2 cursor-pointer items-center justify-center rounded-xl border border-border/70 bg-white text-foreground shadow-card transition-all duration-500 ease-[cubic-bezier(0.22,1,0.36,1)] hover:border-transparent hover:bg-gradient-cyan hover:text-white hover:shadow-glow md:inline-flex lg:left-1"
          >
            <ChevronLeft className="size-5" strokeWidth={2} />
          </button>
          <button
            type="button"
            aria-label="Następna realizacja"
            onClick={() => emblaApi?.scrollNext()}
            className="absolute top-1/2 right-2 z-30 hidden size-12 -translate-y-1/2 cursor-pointer items-center justify-center rounded-xl border border-border/70 bg-white text-foreground shadow-card transition-all duration-500 ease-[cubic-bezier(0.22,1,0.36,1)] hover:border-transparent hover:bg-gradient-cyan hover:text-white hover:shadow-glow md:inline-flex lg:right-1"
          >
            <ChevronRight className="size-5" strokeWidth={2} />
          </button>
        </>
      ) : null}

      {canLoop ? (
        <>
          <div className="pointer-events-none absolute inset-y-0 left-0 z-20 w-16 bg-gradient-to-r from-white via-white/80 to-transparent md:w-28 lg:w-36" />
          <div className="pointer-events-none absolute inset-y-0 right-0 z-20 w-16 bg-gradient-to-l from-white via-white/80 to-transparent md:w-28 lg:w-36" />
        </>
      ) : null}

      <div className="overflow-hidden py-4 md:px-8 md:py-16 lg:px-10" ref={emblaRef}>
        <div className="flex items-center touch-pan-y">
          {slides.map((item, idx) => {
            const dist = canLoop
              ? Math.abs(loopOffset(idx, selected, slides.length))
              : Math.abs(idx - selected);
            const active = dist === 0;
            return (
              <div
                key={`${item.title}-${idx}`}
                className={cn(
                  "min-w-0 shrink-0 grow-0 px-1 md:px-0",
                  items.length === 2
                    ? "basis-[86%] sm:basis-[48%] md:basis-[46%] lg:basis-[42%]"
                    : "basis-[86%] sm:basis-[70%] md:basis-[46%] lg:basis-[42%]",
                )}
              >
                <div
                  role="button"
                  tabIndex={active ? -1 : 0}
                  onClick={() => {
                    if (!active) emblaApi?.scrollTo(idx);
                  }}
                  onKeyDown={(e) => {
                    if (!active && (e.key === "Enter" || e.key === " ")) {
                      e.preventDefault();
                      emblaApi?.scrollTo(idx);
                    }
                  }}
                  className={cn(
                    "origin-center cursor-pointer rounded-2xl transition-all duration-500 ease-[cubic-bezier(0.22,1,0.36,1)]",
                    active
                      ? "z-10 scale-100 opacity-100 shadow-[0_10px_28px_oklch(0.155_0.045_242/0.1)] md:scale-[1.14]"
                      : "z-0 scale-[0.88] opacity-35 md:scale-[0.68]",
                    canLoop && dist > 1 && "scale-[0.82] opacity-15 md:scale-[0.58]",
                  )}
                >
                  <RealizationCardView item={item} faded={!active} />
                </div>
              </div>
            );
          })}
        </div>
      </div>

      {items.length > 1 ? (
        <div className="mt-2 flex items-center justify-center gap-1.5 md:mt-4">
          {items.map((item, idx) => (
            <button
              key={`${item.title}-dot-${idx}`}
              type="button"
              aria-label={`Realizacja ${idx + 1}: ${item.title}`}
              aria-current={activeIndex === idx}
              onClick={() => {
                if (canLoop) {
                  const base = selected - activeIndex;
                  emblaApi?.scrollTo(base + idx);
                } else {
                  emblaApi?.scrollTo(idx);
                }
              }}
              className={cn(
                "transition-all duration-300 ease-out",
                activeIndex === idx
                  ? "h-1.5 w-8 rounded-full bg-accent"
                  : "h-1.5 w-1.5 rounded-full bg-muted-foreground/30",
              )}
            />
          ))}
        </div>
      ) : null}
    </div>
  );
}

export function ServiceRealizations({
  titleOf,
  items,
}: {
  titleOf: string;
  items: RealizationCard[];
}) {
  if (items.length === 0) return null;

  return (
    <section className="bg-white py-16 sm:py-20 lg:py-24">
      <div className="mx-auto w-full max-w-[1360px] px-5 lg:px-8">
        <Reveal className="mx-auto max-w-3xl text-center">
          <span className="mx-auto block w-fit font-display text-xs font-semibold tracking-[0.18em] text-gradient-cyan uppercase">
            Realizacje
          </span>
          <h2 className="mt-5 font-display text-3xl font-bold text-foreground sm:text-5xl">
            Nasze realizacje
            <br />
            <span className="text-gradient-cyan">{titleOf}</span>
          </h2>
        </Reveal>
        <div className="mt-8 md:mt-6">
          {items.length === 1 ? (
            <div className="mx-auto max-w-xl lg:max-w-2xl">
              <RealizationCardView item={items[0]!} />
            </div>
          ) : (
            <>
              <MobileCarousel
                items={items}
                renderItem={(item) => <RealizationCardView item={item} />}
              />
              <div className="hidden md:block">
                <RealizationFocusCarousel items={items} />
              </div>
            </>
          )}
        </div>
      </div>
    </section>
  );
}
