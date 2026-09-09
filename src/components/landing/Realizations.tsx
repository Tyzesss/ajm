import { useCallback, useEffect, useState } from "react";
import * as Dialog from "@radix-ui/react-dialog";
import { ChevronLeft, ChevronRight, Images, MapPin, X, ZoomIn } from "lucide-react";
import { DarkEyebrow } from "./DarkEyebrow";
import { cn } from "@/lib/utils";
import { Reveal } from "./Reveal";
import { MobileCarousel } from "./MobileCarousel";
import ajmPompaPanasonic from "@/assets/ajm-pompa-panasonic-aquarea.jpg";
import ajmKociolHlazar from "@/assets/ajm-kociol-hlazar-pellet.jpg";
import ajmJednostkiDuo from "@/assets/ajm-jednostki-zew-midea-duo.jpg";
import ajmKotlowniaMidea from "@/assets/ajm-kotlownia-midea-czerwone.jpg";
import ajmPodlogowka from "@/assets/ajm-podlogowka-petle.jpg";
import ajmPompaMideaDach from "@/assets/ajm-pompa-midea-dach.jpg";
import ajmKotlowniaRotenso from "@/assets/ajm-kotlownia-rotenso-filtry.jpg";
import ajmPompaStiebel from "@/assets/ajm-pompa-stiebel-outdoor.jpg";
import ajmSanitarnaSciana from "@/assets/ajm-instalacja-sanitarna-sciana.jpg";
import ajmKanalizacjaPex from "@/assets/ajm-instalacja-kanalizacja-pex.jpg";
import ajmGalmetInstalacja from "@/assets/ajm-kotlownia-galmet-instalacja.jpg";

type Category =
  | "Pompy ciepła"
  | "Klimatyzacja"
  | "Kotły pelletowe"
  | "Ogrzewanie podłogowe"
  | "Instalacje";

/** Zdjęcia portretowe - kafle bento: lg 2×2, tall 1×2, wide 2×1, sm 1×1. */
const PROJECTS: {
  image: string;
  imageMobile: string;
  category: Category;
  title: string;
  place: string;
  alt: string;
  focus: string;
  focusMobile?: string;
  zoom?: number;
  zoomMobile?: number;
  /** Rozmiar w siatce 4-kolumnowej (suma komórek musi być wielokrotnością 4). */
  span?: "lg" | "tall" | "wide" | "sm";
}[] = [
  {
    image: ajmPompaPanasonic,
    imageMobile: ajmPompaPanasonic,
    category: "Pompy ciepła",
    title: "Panasonic Aquarea",
    place: "Dom jednorodzinny, woj. opolskie",
    alt: "Jednostka zewnętrzna Panasonic Aquarea na stopach betonowych",
    focus: "50% 46%",
    focusMobile: "50% 44%",
    zoom: 1.02,
    zoomMobile: 1.03,
    span: "lg",
  },
  {
    image: ajmJednostkiDuo,
    imageMobile: ajmJednostkiDuo,
    category: "Klimatyzacja",
    title: "Jednostki zewnętrzne Midea",
    place: "Dom jednorodzinny, woj. opolskie",
    alt: "Dwie jednostki zewnętrzne Midea na bloczkach betonowych",
    focus: "42% 38%",
    focusMobile: "44% 36%",
    zoom: 1.05,
    zoomMobile: 1.04,
    span: "wide",
  },
  {
    image: ajmPompaMideaDach,
    imageMobile: ajmPompaMideaDach,
    category: "Pompy ciepła",
    title: "Montaż dachowy Midea",
    place: "Obiekt, woj. opolskie",
    alt: "Jednostka zewnętrzna Midea zamontowana na dachu",
    focus: "50% 28%",
    focusMobile: "50% 30%",
    zoom: 1.04,
    zoomMobile: 1.05,
    span: "sm",
  },
  {
    image: ajmKociolHlazar,
    imageMobile: ajmKociolHlazar,
    category: "Kotły pelletowe",
    title: "Kocioł Lazar Smart Fire",
    place: "Kotłownia, woj. opolskie",
    alt: "Kocioł pelletowy Lazar Smart Fire w kotłowni",
    focus: "82% 42%",
    focusMobile: "80% 40%",
    zoom: 1.02,
    zoomMobile: 1.03,
    span: "tall",
  },
  {
    image: ajmKotlowniaMidea,
    imageMobile: ajmKotlowniaMidea,
    category: "Pompy ciepła",
    title: "Kotłownia z hydroboxem Midea",
    place: "Pomieszczenie techniczne, woj. opolskie",
    alt: "Kotłownia z jednostką Midea, zasobnikiem Galmet i orurowaniem",
    focus: "42% 46%",
    focusMobile: "40% 44%",
    zoom: 1.03,
    zoomMobile: 1.03,
    span: "sm",
  },
  {
    image: ajmPodlogowka,
    imageMobile: ajmPodlogowka,
    category: "Ogrzewanie podłogowe",
    title: "Pętle przed wylewką",
    place: "Remont, woj. opolskie",
    alt: "Pętle ogrzewania podłogowego na izolacji refleksyjnej",
    focus: "52% 62%",
    focusMobile: "50% 58%",
    zoom: 1.06,
    zoomMobile: 1.05,
    span: "sm",
  },
  {
    image: ajmKotlowniaRotenso,
    imageMobile: ajmKotlowniaRotenso,
    category: "Pompy ciepła",
    title: "Rotenso z filtracją wody",
    place: "Kotłownia, woj. opolskie",
    alt: "Hydrobox Rotenso, zasobnik Galmet i stacja filtrów",
    focus: "48% 36%",
    focusMobile: "48% 34%",
    zoom: 1.03,
    zoomMobile: 1.04,
    span: "sm",
  },
  {
    image: ajmPompaStiebel,
    imageMobile: ajmPompaStiebel,
    category: "Pompy ciepła",
    title: "Stiebel Eltron",
    place: "Budowa, woj. opolskie",
    alt: "Jednostka zewnętrzna Stiebel Eltron na cegłach",
    focus: "58% 36%",
    focusMobile: "56% 34%",
    zoom: 1.04,
    zoomMobile: 1.05,
    span: "sm",
  },
  {
    image: ajmSanitarnaSciana,
    imageMobile: ajmSanitarnaSciana,
    category: "Instalacje",
    title: "Instalacja wodno-sanitarna",
    place: "Budowa, woj. opolskie",
    alt: "Rozprowadzenie wody i kanalizacji w ścianie na stelażu",
    focus: "55% 42%",
    focusMobile: "55% 40%",
    zoom: 1.03,
    zoomMobile: 1.04,
    span: "sm",
  },
  {
    image: ajmKanalizacjaPex,
    imageMobile: ajmKanalizacjaPex,
    category: "Instalacje",
    title: "Kanalizacja i podejścia",
    place: "Budowa, woj. opolskie",
    alt: "Kanalizacja w posadzce oraz podejścia wody ciepłej i zimnej",
    focus: "48% 48%",
    focusMobile: "48% 46%",
    zoom: 1.02,
    zoomMobile: 1.03,
    span: "sm",
  },
  {
    image: ajmGalmetInstalacja,
    imageMobile: ajmGalmetInstalacja,
    category: "Instalacje",
    title: "Zasobnik Galmet i pompy",
    place: "Kotłownia, woj. opolskie",
    alt: "Zasobnik Galmet z pompami obiegowymi i armaturą w kotłowni",
    focus: "42% 40%",
    focusMobile: "40% 38%",
    zoom: 1.03,
    zoomMobile: 1.04,
    span: "sm",
  },
];

const SPAN_CLASS: Record<NonNullable<(typeof PROJECTS)[number]["span"]>, string> = {
  lg: "md:col-span-2 md:row-span-2",
  tall: "md:col-span-1 md:row-span-2",
  wide: "md:col-span-2 md:row-span-1",
  sm: "md:col-span-1 md:row-span-1",
};

const IMG_GRADE = "[filter:brightness(0.97)_contrast(1.1)_saturate(0.9)_hue-rotate(4deg)]";

function ProjectCard({
  project,
  onOpen,
}: {
  project: (typeof PROJECTS)[number];
  onOpen: () => void;
}) {
  const zoom = project.zoom ?? 1.03;
  const zoomMobile = project.zoomMobile ?? project.zoom ?? 1.03;
  const span = project.span ?? "sm";
  const large = span === "lg" || span === "wide";

  return (
    <button
      type="button"
      onClick={onOpen}
      className={cn(
        "group relative isolate h-full min-h-[11rem] w-full overflow-hidden rounded-2xl text-left",
        "border border-navy-foreground/12 bg-navy max-md:aspect-[3/4] max-md:min-h-0 max-md:shadow-none",
        "cursor-pointer focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent focus-visible:ring-offset-0",
        "md:transition-all md:duration-500 md:ease-[cubic-bezier(0.22,1,0.36,1)] md:hover:-translate-y-1 md:hover:border-accent/40",
        span === "sm" && "md:aspect-[3/4]",
        span === "wide" && "md:aspect-[2/1] md:min-h-0",
        (span === "lg" || span === "tall") && "md:min-h-full md:aspect-auto",
      )}
    >
      <div className="absolute inset-0 overflow-hidden transition-transform duration-700 ease-out md:group-hover:scale-[1.03]">
        <img
          src={project.imageMobile}
          alt={project.alt}
          width={768}
          height={1024}
          loading="lazy"
          className={cn("absolute inset-0 size-full object-cover md:hidden", IMG_GRADE)}
          style={{
            objectPosition: project.focusMobile ?? project.focus,
            transform: `scale(${zoomMobile})`,
          }}
        />
        <img
          src={project.image}
          alt=""
          width={768}
          height={1024}
          loading="lazy"
          className={cn("absolute inset-0 hidden size-full object-cover md:block", IMG_GRADE)}
          style={{
            objectPosition: project.focus,
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
      <div className="relative flex h-full min-h-[inherit] flex-col justify-end p-4 sm:p-5">
        <span className="w-fit rounded-full bg-navy-foreground/15 px-2.5 py-1 font-display text-[10px] font-semibold tracking-[0.14em] text-navy-foreground uppercase backdrop-blur-sm sm:text-[11px]">
          {project.category}
        </span>
        <h3
          className={cn(
            "mt-2 font-display font-semibold text-navy-foreground max-md:text-lg",
            large ? "text-lg sm:text-2xl" : "text-sm sm:text-base",
          )}
        >
          {project.title}
        </h3>
        <p className="mt-1 flex items-center gap-1 text-xs text-navy-foreground/75">
          <MapPin className="size-3 shrink-0" />
          {project.place}
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

export function Realizations() {
  const [active, setActive] = useState<number | null>(null);

  const current = active != null ? PROJECTS[active] : null;

  const close = () => setActive(null);
  const openAt = (idx: number) => setActive(idx);

  const showPrev = useCallback(() => {
    setActive((i) => (i == null ? i : (i - 1 + PROJECTS.length) % PROJECTS.length));
  }, []);

  const showNext = useCallback(() => {
    setActive((i) => (i == null ? i : (i + 1) % PROJECTS.length));
  }, []);

  useEffect(() => {
    if (active == null) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "ArrowLeft") showPrev();
      if (e.key === "ArrowRight") showNext();
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [active, showPrev, showNext]);

  return (
    <section id="realizacje" className="pt-16 pb-8 md:pt-20 md:pb-10">
      <div className="mx-auto max-w-[1360px] px-5 lg:px-8">
        <Reveal className="max-w-3xl text-left text-navy-foreground">
          <DarkEyebrow icon={Images}>Realizacje</DarkEyebrow>
          <h2 className="mt-5 font-display text-3xl font-bold sm:text-5xl">
            Instalacje, które <br className="md:hidden" />
            <span className="text-gradient-cyan">już działają</span>
          </h2>
          <p className="mt-4 max-w-2xl text-navy-foreground/70">
            Pompy ciepła, klimatyzacja, kotły i instalacje u klientów z Namysłowa, Opola i okolic.
          </p>
        </Reveal>

        <div className="mt-10 md:mt-14">
          <MobileCarousel
            items={PROJECTS}
            dotsOnDark
            className="animate-in fade-in duration-500 ease-out"
            renderItem={(project, i) => (
              <ProjectCard project={project} onOpen={() => openAt(i)} />
            )}
          />
          <div className="hidden gap-4 md:grid md:grid-cols-4 md:grid-flow-dense md:auto-rows-[minmax(13.5rem,auto)]">
            {PROJECTS.map((project, i) => {
              const span = project.span ?? "sm";
              return (
                <Reveal
                  key={project.title}
                  delay={Math.min(i, 5) * 0.05}
                  scale
                  className={cn("h-full min-h-0", SPAN_CLASS[span])}
                >
                  <ProjectCard project={project} onOpen={() => openAt(i)} />
                </Reveal>
              );
            })}
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
                <Dialog.Title className="sr-only">
                  {current.title} - {current.category}
                </Dialog.Title>
                <div className="flex items-center justify-between gap-3 px-4 pt-[max(1rem,env(safe-area-inset-top))] pb-3 sm:px-6">
                  <div className="min-w-0">
                    <p className="font-display text-[10px] font-semibold tracking-[0.16em] text-accent uppercase">
                      {current.category}
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
                  {PROJECTS.length > 1 ? (
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
                      {current.place}
                      {PROJECTS.length > 1 ? (
                        <span className="ml-2 text-navy-foreground/40">
                          {active! + 1} / {PROJECTS.length}
                        </span>
                      ) : null}
                    </figcaption>
                  </figure>
                  {PROJECTS.length > 1 ? (
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

                {PROJECTS.length > 1 ? (
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
