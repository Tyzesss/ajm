import { useCallback, useEffect, useState } from "react";
import * as Dialog from "@radix-ui/react-dialog";
import { ChevronLeft, ChevronRight, MapPin, X, ZoomIn } from "lucide-react";
import { MobileCarousel } from "./MobileCarousel";
import { Reveal } from "./Reveal";
import { cn } from "@/lib/utils";
import type { RealizationCard } from "@/lib/realization-cards";

const IMG_GRADE = "[filter:brightness(0.97)_contrast(1.1)_saturate(0.9)_hue-rotate(4deg)]";

type GalleryItem = RealizationCard & {
  zoom?: number;
};

function toGalleryItems(items: RealizationCard[]): GalleryItem[] {
  return items.map((item) => ({
    ...item,
    zoom: 1.03,
  }));
}

function ProjectCard({ item, onOpen }: { item: GalleryItem; onOpen: () => void }) {
  const zoom = item.zoom ?? 1.03;
  const focus = item.focus ?? "50% 42%";

  return (
    <button
      type="button"
      onClick={onOpen}
      className={cn(
        "group relative isolate h-full w-full overflow-hidden rounded-2xl text-left",
        "aspect-[3/4] border border-navy-foreground/12 bg-navy max-md:shadow-none",
        "cursor-pointer focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent focus-visible:ring-offset-0",
        "md:transition-all md:duration-500 md:ease-[cubic-bezier(0.22,1,0.36,1)] md:hover:-translate-y-1 md:hover:border-accent/40",
      )}
    >
      <div className="absolute inset-0 overflow-hidden transition-transform duration-700 ease-out md:group-hover:scale-[1.03]">
        <img
          src={item.image}
          alt={item.alt}
          width={768}
          height={1024}
          loading="lazy"
          className={cn("absolute inset-0 size-full object-cover", IMG_GRADE)}
          style={{
            objectPosition: focus,
            transform: `scale(${zoom})`,
          }}
        />
      </div>
      <div
        className="absolute inset-0 bg-gradient-to-t from-navy/92 via-navy/40 to-navy/10"
        aria-hidden
      />
      <div
        className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,transparent_45%,rgba(8,16,32,0.35)_100%)]"
        aria-hidden
      />
      <div className="relative flex h-full flex-col justify-end p-4 sm:p-5">
        <span className="w-fit rounded-full bg-navy-foreground/15 px-2.5 py-1 font-display text-[10px] font-semibold tracking-[0.14em] text-navy-foreground uppercase backdrop-blur-sm sm:text-[11px]">
          Realizacja
        </span>
        <h3 className="mt-2 font-display text-sm font-semibold text-navy-foreground max-md:text-lg sm:text-base">
          {item.title}
        </h3>
        <p className="mt-1 flex items-start gap-1 text-xs text-navy-foreground/75">
          <MapPin className="mt-0.5 size-3 shrink-0" />
          <span>{item.scope}</span>
        </p>
      </div>
      <span
        className="absolute top-3 right-3 inline-flex size-9 items-center justify-center rounded-full bg-navy-foreground/15 text-navy-foreground opacity-100 backdrop-blur-sm transition-all duration-500 ease-out md:opacity-0 md:group-hover:opacity-100"
        aria-hidden
      >
        <ZoomIn className="size-4" />
      </span>
    </button>
  );
}

export function ServiceRealizations({
  titleOf,
  items,
}: {
  titleOf: string;
  items: RealizationCard[];
}) {
  const projects = toGalleryItems(items);
  const [active, setActive] = useState<number | null>(null);
  const current = active != null ? projects[active] : null;

  const close = () => setActive(null);
  const openAt = (idx: number) => setActive(idx);

  const showPrev = useCallback(() => {
    setActive((i) => (i == null ? i : (i - 1 + projects.length) % projects.length));
  }, [projects.length]);

  const showNext = useCallback(() => {
    setActive((i) => (i == null ? i : (i + 1) % projects.length));
  }, [projects.length]);

  useEffect(() => {
    if (active == null) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "ArrowLeft") showPrev();
      if (e.key === "ArrowRight") showNext();
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [active, showPrev, showNext]);

  if (projects.length === 0) return null;

  return (
    <section className="relative isolate overflow-hidden bg-white pt-16 pb-8 md:pt-20 md:pb-10 lg:pt-24 lg:pb-12">
      <div
        className="pointer-events-none absolute inset-x-0 top-0 z-0 h-[min(28rem,70%)] bg-[linear-gradient(180deg,oklch(0.59_0.14_242/0.14)_0%,oklch(0.59_0.14_242/0.07)_35%,oklch(0.59_0.14_242/0.02)_70%,transparent_100%)] max-md:h-[min(22rem,65%)] max-md:bg-[linear-gradient(180deg,oklch(0.59_0.14_242/0.12)_0%,oklch(0.59_0.14_242/0.06)_40%,transparent_100%)]"
        aria-hidden
      />
      <div className="relative z-10 mx-auto max-w-[1360px] px-5 lg:px-8">
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

        <div className="mt-10 md:mt-14">
          <MobileCarousel
            items={projects}
            className="animate-in fade-in duration-500 ease-out"
            renderItem={(project, i) => <ProjectCard item={project} onOpen={() => openAt(i)} />}
          />
          <div
            className={cn(
              "hidden gap-4 md:grid",
              projects.length === 1 && "md:mx-auto md:max-w-sm md:grid-cols-1",
              projects.length === 2 && "md:mx-auto md:max-w-3xl md:grid-cols-2",
              projects.length === 3 && "md:grid-cols-3",
              projects.length >= 4 && "md:grid-cols-4",
            )}
          >
            {projects.map((project, i) => (
              <Reveal
                key={`${project.title}-${i}`}
                delay={Math.min(i, 4) * 0.06}
                scale
                className="h-full"
              >
                <ProjectCard item={project} onOpen={() => openAt(i)} />
              </Reveal>
            ))}
          </div>
        </div>
      </div>

      <Dialog.Root open={current != null} onOpenChange={(open) => !open && close()}>
        <Dialog.Portal>
          <Dialog.Overlay className="fixed inset-0 z-[80] bg-navy/88 backdrop-blur-sm data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0" />
          <Dialog.Content
            aria-describedby={undefined}
            className="fixed inset-0 z-[81] flex flex-col outline-none data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0"
            onOpenAutoFocus={(e) => e.preventDefault()}
          >
            {current ? (
              <>
                <Dialog.Title className="sr-only">{current.title}</Dialog.Title>
                <div className="flex items-center justify-between gap-3 px-4 pt-[max(1rem,env(safe-area-inset-top))] pb-3 sm:px-6">
                  <div className="min-w-0">
                    <p className="font-display text-[10px] font-semibold tracking-[0.16em] text-accent uppercase">
                      Realizacja
                    </p>
                    <p className="truncate font-display text-base font-semibold text-navy-foreground sm:text-lg">
                      {current.title}
                    </p>
                  </div>
                  <Dialog.Close
                    className="inline-flex size-10 shrink-0 items-center justify-center rounded-full text-navy-foreground transition-colors hover:bg-navy-foreground/10"
                    aria-label="Zamknij"
                  >
                    <X className="size-5" />
                  </Dialog.Close>
                </div>

                <div className="relative flex min-h-0 flex-1 items-center justify-center px-4 pb-6 sm:px-16">
                  {projects.length > 1 ? (
                    <button
                      type="button"
                      onClick={showPrev}
                      aria-label="Poprzednie zdjęcie"
                      className="absolute top-1/2 left-2 z-10 hidden size-11 -translate-y-1/2 items-center justify-center rounded-full bg-navy-foreground/10 text-navy-foreground transition-colors hover:bg-navy-foreground/20 sm:inline-flex"
                    >
                      <ChevronLeft className="size-6" />
                    </button>
                  ) : null}
                  <figure className="flex max-h-full max-w-5xl flex-col items-center">
                    <img
                      src={current.image}
                      alt={current.alt}
                      width={768}
                      height={1024}
                      className={cn(
                        "max-h-[min(72vh,44rem)] w-auto max-w-full rounded-xl object-contain shadow-lift",
                        IMG_GRADE,
                      )}
                    />
                    <figcaption className="mt-4 flex items-center gap-1.5 text-sm text-navy-foreground/70">
                      <MapPin className="size-3.5 shrink-0" />
                      {current.scope}
                      {projects.length > 1 ? (
                        <span className="ml-2 text-navy-foreground/40">
                          {active! + 1} / {projects.length}
                        </span>
                      ) : null}
                    </figcaption>
                  </figure>
                  {projects.length > 1 ? (
                    <button
                      type="button"
                      onClick={showNext}
                      aria-label="Następne zdjęcie"
                      className="absolute top-1/2 right-2 z-10 hidden size-11 -translate-y-1/2 items-center justify-center rounded-full bg-navy-foreground/10 text-navy-foreground transition-colors hover:bg-navy-foreground/20 sm:inline-flex"
                    >
                      <ChevronRight className="size-6" />
                    </button>
                  ) : null}
                </div>

                {projects.length > 1 ? (
                  <div className="flex justify-center gap-3 px-4 pb-[max(1rem,env(safe-area-inset-bottom))] sm:hidden">
                    <button
                      type="button"
                      onClick={showPrev}
                      aria-label="Poprzednie zdjęcie"
                      className="inline-flex size-11 items-center justify-center rounded-full bg-navy-foreground/10 text-navy-foreground"
                    >
                      <ChevronLeft className="size-5" />
                    </button>
                    <button
                      type="button"
                      onClick={showNext}
                      aria-label="Następne zdjęcie"
                      className="inline-flex size-11 items-center justify-center rounded-full bg-navy-foreground/10 text-navy-foreground"
                    >
                      <ChevronRight className="size-5" />
                    </button>
                  </div>
                ) : null}
              </>
            ) : null}
          </Dialog.Content>
        </Dialog.Portal>
      </Dialog.Root>
    </section>
  );
}
