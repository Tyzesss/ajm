import { Link, createFileRoute, notFound } from "@tanstack/react-router";
import {
  useCallback,
  useEffect,
  useLayoutEffect,
  useRef,
  useState,
  type CSSProperties,
} from "react";
import { ArrowRight, ArrowUpRight, Check, CircleHelp, Hammer, Phone } from "lucide-react";
import { Header } from "@/components/landing/Header";
import { Footer } from "@/components/landing/Footer";
import { StickyCallBar } from "@/components/landing/StickyCallBar";
import { MobileCarousel } from "@/components/landing/MobileCarousel";
import { DarkEyebrow } from "@/components/landing/DarkEyebrow";
import { Button } from "@/components/ui/button";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { getService, SERVICE_PROCESS, SERVICES, type Service } from "@/lib/services";
import { getServiceRealizationCards } from "@/lib/realization-cards";
import { ServiceRealizations } from "@/components/landing/ServiceRealizations";
import { Reveal } from "@/components/landing/Reveal";
import { PHONE_DISPLAY, PHONE_HREF, SITE_NAME } from "@/lib/site";
import { motion, useReducedMotion } from "framer-motion";
import thumbPompy from "@/assets/ajm-pompa-panasonic-aquarea.jpg";
import thumbKlima from "@/assets/ajm-jednostki-zew-midea-duo.jpg";
import thumbKotly from "@/assets/ajm-kociol-hlazar-pellet.jpg";
import thumbPodlogowe from "@/assets/ajm-podlogowka-petle.jpg";
import thumbRecup from "@/assets/ajm-kotlownia-rotenso-filtry.jpg";
import thumbSerwis from "@/assets/ajm-pompa-midea-dach.jpg";
import thumbHydro from "@/assets/ajm-kotlownia-midea-czerwone.jpg";
import thumbWoda from "@/assets/ajm-kotlownia-galmet-pompy.jpg";
import faqBgPompy from "@/assets/faq-bg-pompy-ciepla.png";
import faqBgKotly from "@/assets/faq-bg-kotly-pelletowe.png";
import faqBgPodlogowe from "@/assets/faq-bg-ogrzewanie-podlogowe.png";
import faqBgKlima from "@/assets/faq-bg-klimatyzacja.png";
import faqBgWodne from "@/assets/faq-bg-instalacje-wodne.png";
import faqBgSanitarne from "@/assets/faq-bg-instalacje-sanitarne.png";
import faqBgPrzemyslowe from "@/assets/faq-bg-instalacje-przemyslowe.png";
import faqBgRekuperacja from "@/assets/faq-bg-rekuperacja.png";
import faqBgUzdatnianie from "@/assets/faq-bg-uzdatnianie-wody.png";
import heroPompy from "@/assets/service-hero-pompy-ciepla.png";
import heroKotly from "@/assets/service-hero-kotly-pelletowe.png";
import heroPodlogowe from "@/assets/service-hero-ogrzewanie-podlogowe.png";
import heroKlima from "@/assets/service-hero-klimatyzacja.png";
import heroWodne from "@/assets/service-hero-instalacje-wodne.png";
import heroSanitarne from "@/assets/service-hero-instalacje-sanitarne.png";
import heroPrzemyslowe from "@/assets/service-hero-instalacje-przemyslowe.png";
import heroRekuperacja from "@/assets/service-hero-rekuperacja.png";
import heroUzdatnianie from "@/assets/service-hero-uzdatnianie-wody.png";

const HERO_IMAGES: Record<string, { src: string; position?: string }> = {
  "pompy-ciepla": { src: heroPompy, position: "65% 45%" },
  "kotly-pelletowe": { src: heroKotly, position: "55% 40%" },
  "ogrzewanie-podlogowe": { src: heroPodlogowe, position: "60% 45%" },
  klimatyzacja: { src: heroKlima, position: "70% 40%" },
  "instalacje-wodne": { src: heroWodne, position: "55% 45%" },
  "instalacje-sanitarne": { src: heroSanitarne, position: "55% 40%" },
  "instalacje-przemyslowe": { src: heroPrzemyslowe, position: "60% 40%" },
  rekuperacja: { src: heroRekuperacja, position: "55% 45%" },
  "uzdatnianie-wody": { src: heroUzdatnianie, position: "55% 45%" },
};

const FAQ_BACKGROUNDS: Record<string, { src: string; alt: string; position?: string }> = {
  "pompy-ciepla": {
    src: faqBgPompy,
    alt: "Pompa ciepła przy nowoczesnym domu o zmierzchu",
    position: "70% 45%",
  },
  "kotly-pelletowe": {
    src: faqBgKotly,
    alt: "Kotłownia z kotłem pelletowym",
    position: "55% 40%",
  },
  "ogrzewanie-podlogowe": {
    src: faqBgPodlogowe,
    alt: "Pętle ogrzewania podłogowego",
    position: "50% 55%",
  },
  klimatyzacja: {
    src: faqBgKlima,
    alt: "Klimatyzacja w nowoczesnym salonie",
    position: "60% 35%",
  },
  "instalacje-wodne": {
    src: faqBgWodne,
    alt: "Instalacja wodna z armaturą",
    position: "50% 45%",
  },
  "instalacje-sanitarne": {
    src: faqBgSanitarne,
    alt: "Instalacja sanitarna przed wykończeniem",
    position: "50% 40%",
  },
  "instalacje-przemyslowe": {
    src: faqBgPrzemyslowe,
    alt: "Instalacje przemysłowe HVAC",
    position: "45% 40%",
  },
  rekuperacja: {
    src: faqBgRekuperacja,
    alt: "Centrala rekuperacji z kanałami",
    position: "55% 45%",
  },
  "uzdatnianie-wody": {
    src: faqBgUzdatnianie,
    alt: "Stacja uzdatniania wody",
    position: "50% 45%",
  },
};

const IMAGES: Record<
  string,
  { src: string; alt: string; position: string; heroPosition?: string; heroZoom?: number }
> = {
  "pompy-ciepla": {
    src: thumbPompy,
    alt: "Jednostka zewnętrzna Panasonic Aquarea przy domu",
    position: "50% 45%",
  },
  "kotly-pelletowe": {
    src: thumbKotly,
    alt: "Kocioł pelletowy Lazar Smart Fire w kotłowni",
    position: "55% 45%",
  },
  "ogrzewanie-podlogowe": {
    src: thumbPodlogowe,
    alt: "Pętle ogrzewania podłogowego przed wylewką",
    position: "50% 55%",
  },
  klimatyzacja: {
    src: thumbKlima,
    alt: "Jednostki zewnętrzne klimatyzacji Midea przy elewacji",
    position: "50% 45%",
  },
  "instalacje-wodne": {
    src: thumbHydro,
    alt: "Kotłownia z instalacją wodną i grzewczą",
    position: "50% 45%",
  },
  "instalacje-sanitarne": {
    src: thumbHydro,
    alt: "Instalacje w pomieszczeniu technicznym",
    position: "50% 45%",
  },
  "instalacje-przemyslowe": {
    src: thumbSerwis,
    alt: "Jednostka zewnętrzna na dachu obiektu",
    position: "48% 45%",
  },
  rekuperacja: {
    src: thumbRecup,
    alt: "Pomieszczenie techniczne po montażu instalacji",
    position: "50% 40%",
  },
  "uzdatnianie-wody": {
    src: thumbWoda,
    alt: "Zasobnik i instalacja wodna w kotłowni",
    position: "52% 40%",
  },
};

/** Tight crops for „Inne usługi” cards - not the wide hero frames. */
const CARD_THUMBS: Record<string, { src: string; position: string }> = {
  "pompy-ciepla": { src: thumbPompy, position: "50% 45%" },
  "kotly-pelletowe": { src: thumbKotly, position: "55% 40%" },
  "ogrzewanie-podlogowe": { src: thumbPodlogowe, position: "50% 55%" },
  klimatyzacja: { src: thumbKlima, position: "50% 45%" },
  "instalacje-wodne": { src: thumbHydro, position: "50% 45%" },
  "instalacje-sanitarne": { src: thumbHydro, position: "50% 45%" },
  "instalacje-przemyslowe": { src: thumbSerwis, position: "48% 45%" },
  rekuperacja: { src: thumbRecup, position: "50% 40%" },
  "uzdatnianie-wody": { src: thumbWoda, position: "52% 40%" },
};

function OtherServiceCard({ item }: { item: (typeof SERVICES)[number] }) {
  const thumb = CARD_THUMBS[item.slug];

  return (
    <Link
      to="/uslugi/$slug"
      params={{ slug: item.slug }}
      resetScroll
      className="group flex h-full flex-col overflow-hidden rounded-3xl border border-border/70 bg-card max-md:shadow-none md:transition-all md:duration-300 md:hover:border-accent/40 md:hover:shadow-card"
    >
      {thumb ? (
        <img
          src={thumb.src}
          alt=""
          className="aspect-[16/10] w-full object-cover md:transition-transform md:duration-500 md:group-hover:scale-[1.03]"
          style={{ objectPosition: thumb.position }}
        />
      ) : null}
      <span className="flex flex-1 flex-col p-5 text-left">
        <span className="flex items-center justify-between gap-3">
          <span className="font-semibold text-foreground">{item.title}</span>
          <span
            aria-hidden
            className="inline-flex size-9 shrink-0 items-center justify-center rounded-xl bg-accent/12 text-accent transition-all duration-300 group-hover:bg-gradient-cyan group-hover:text-white"
          >
            <ArrowUpRight className="size-4" />
          </span>
        </span>
        <span className="mt-1.5 line-clamp-2 text-sm text-muted-foreground">{item.short}</span>
      </span>
    </Link>
  );
}

function ServiceFaq({ service }: { service: Service }) {
  const leftRef = useRef<HTMLDivElement>(null);
  const [openItem, setOpenItem] = useState("");
  const [ctaHeight, setCtaHeight] = useState<number>();
  const openRef = useRef(openItem);
  openRef.current = openItem;
  const faqBg = FAQ_BACKGROUNDS[service.slug];

  const measureClosed = useCallback(() => {
    const el = leftRef.current;
    if (!el || openRef.current) return;
    setCtaHeight(el.getBoundingClientRect().height);
  }, []);

  useLayoutEffect(() => {
    setOpenItem("");
    openRef.current = "";
    const id = window.requestAnimationFrame(() => measureClosed());
    return () => window.cancelAnimationFrame(id);
  }, [service.slug, measureClosed]);

  useEffect(() => {
    const onResize = () => measureClosed();
    window.addEventListener("resize", onResize);
    return () => window.removeEventListener("resize", onResize);
  }, [measureClosed]);

  return (
    <section className="relative isolate overflow-hidden bg-navy py-16 sm:py-20 lg:py-24">
      {faqBg ? (
        <div className="absolute inset-0 z-0 overflow-hidden">
          <img
            src={faqBg.src}
            alt=""
            width={1536}
            height={864}
            className="size-full object-cover"
            style={{ objectPosition: faqBg.position ?? "50% 45%" }}
          />
        </div>
      ) : null}
      <div
        className="absolute inset-0 z-[1]"
        style={{ backgroundImage: "var(--gradient-hero)" }}
        aria-hidden
      />

      <div className="relative z-10 mx-auto max-w-[1360px] px-5 lg:px-8">
        <div className="grid items-start gap-10 lg:grid-cols-[minmax(0,1fr)_minmax(20rem,28rem)] lg:gap-12">
          <div ref={leftRef} className="flex min-w-0 flex-col">
            <DarkEyebrow icon={CircleHelp}>FAQ</DarkEyebrow>
            <h2 className="mt-5 font-display text-3xl font-bold tracking-tight text-navy-foreground sm:text-4xl lg:text-[2.75rem] lg:leading-[1.15]">
              Często zadawane <span className="text-gradient-cyan">pytania</span>
            </h2>
            <Accordion
              type="single"
              collapsible
              value={openItem}
              onValueChange={setOpenItem}
              className="mt-8 w-full"
            >
              {service.faq.map((item, i) => (
                <AccordionItem
                  key={item.q}
                  value={`faq-${i}`}
                  className="border-navy-foreground/20 last:border-b-0"
                >
                  <AccordionTrigger className="py-5 text-left text-[0.95rem] font-bold text-navy-foreground transition-colors hover:no-underline data-[state=open]:text-accent sm:py-6 sm:text-base [&>svg]:size-4 [&>svg]:text-navy-foreground/55 data-[state=open]:[&>svg]:text-accent">
                    {item.q}
                  </AccordionTrigger>
                  <AccordionContent className="pb-5 text-sm leading-relaxed text-navy-foreground/70">
                    {item.a}
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </div>

          <div
            className="flex min-h-[14rem] flex-col justify-between gap-6 self-start overflow-hidden rounded-3xl bg-gradient-cyan p-7 text-white sm:p-8 lg:h-[var(--service-cta-h,auto)] lg:min-h-0 lg:p-9"
            style={
              ctaHeight
                ? ({ "--service-cta-h": `${ctaHeight}px` } as CSSProperties)
                : undefined
            }
          >
            <div>
              <h2 className="font-display text-2xl font-black sm:text-3xl">Potrzebujesz wyceny?</h2>
              <p className="mt-3 text-sm leading-relaxed text-white/85 sm:text-base">
                Napisz albo zadzwoń. Pierwsza konsultacja i wycena nic nie kosztują.
              </p>
            </div>
            <Button
              asChild
              variant="ghost"
              size="xl"
              className="w-full bg-white font-semibold text-navy shadow-none hover:scale-100 hover:bg-white/90 hover:text-navy"
            >
              <Link to="/" hash="kontakt-formularz">
                Formularz kontaktowy <ArrowRight className="size-4" />
              </Link>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}

export const Route = createFileRoute("/uslugi/$slug")({
  loader: ({ params }) => {
    const service = getService(params.slug);
    if (!service) throw notFound();
    return { service };
  },
  head: ({ params }) => {
    const service = getService(params.slug);
    const title = service?.seoTitle ?? SITE_NAME;
    const description = service?.seoDescription ?? service?.intro ?? "";
    return {
      meta: [
        { title },
        { name: "description", content: description },
        { property: "og:title", content: title },
        { property: "og:description", content: description },
      ],
    };
  },
  component: ServicePage,
});

function ServicePage() {
  const { service } = Route.useLoaderData();
  const media = IMAGES[service.slug];
  const hero = HERO_IMAGES[service.slug];
  const others = SERVICES.filter((s) => s.slug !== service.slug);
  const related = getServiceRealizationCards(service.slug);
  const reduce = useReducedMotion();
  const ease = [0.22, 1, 0.36, 1] as const;
  const headlineParts = service.headline.match(/^(.+?)\s+w\s+(.+)$/i);

  return (
    <div className="min-h-screen bg-background">
      <Header alwaysSolid />
      <main>
        <section className="relative isolate overflow-hidden bg-navy">
          {hero ? (
            <div className="absolute inset-0 overflow-hidden">
              <motion.img
                src={hero.src}
                alt=""
                initial={reduce ? false : { opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: reduce ? 0 : 1.05, ease }}
                className="size-full object-cover"
                style={{ objectPosition: hero.position ?? "50% 45%" }}
              />
            </div>
          ) : null}
          <div
            className="absolute inset-0"
            style={{ backgroundImage: "var(--gradient-service-hero)" }}
            aria-hidden
          />
          <div
            className="absolute inset-0"
            style={{ backgroundImage: "var(--gradient-service-hero-side)" }}
            aria-hidden
          />

          <div className="relative mx-auto flex min-h-[28rem] max-w-[1360px] flex-col justify-end px-5 pt-32 pb-14 sm:min-h-[32rem] sm:pt-36 sm:pb-16 lg:min-h-[36rem] lg:px-8 lg:pb-20">
            <motion.div
              initial={reduce ? false : { opacity: 0, y: 18 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: reduce ? 0 : 0.7, ease }}
            >
              <h1 className="max-w-3xl font-display text-4xl font-black tracking-tight text-navy-foreground sm:text-5xl lg:text-6xl">
                {headlineParts ? (
                  <>
                    {headlineParts[1]} w{" "}
                    <span className="text-gradient-cyan">{headlineParts[2]}</span>
                  </>
                ) : (
                  service.headline
                )}
              </h1>
              <p className="mt-5 max-w-2xl text-base leading-relaxed text-navy-foreground/92 sm:text-lg">
                {service.intro}
              </p>
              <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:items-center">
                <Button asChild variant="cyan" size="xl">
                  <Link to="/" hash="kontakt-formularz">
                    Bezpłatna wycena <ArrowRight className="size-4" />
                  </Link>
                </Button>
                <Button asChild variant="hero" size="xl">
                  <a href={PHONE_HREF}>
                    <Phone className="size-4 text-accent" /> {PHONE_DISPLAY}
                  </a>
                </Button>
              </div>
            </motion.div>
          </div>
        </section>

        <div className="bg-background">
          <div className="mx-auto max-w-[1360px] px-5 py-14 sm:py-16 lg:px-8 lg:py-20">
            <div className="grid gap-8 lg:grid-cols-12 lg:items-stretch lg:gap-12">
              <div className="flex flex-col justify-start gap-8 lg:col-span-6 xl:col-span-7 xl:gap-10">
                {service.sections.map((section, i) => (
                  <Reveal key={section.heading} delay={i * 0.08}>
                    <section>
                      <h2 className="flex items-center gap-3 font-display text-2xl font-black text-foreground sm:text-3xl">
                        <span className="h-8 w-1 shrink-0 rounded-full bg-gradient-cyan" aria-hidden />
                        {section.heading}
                      </h2>
                      <p className="mt-3 max-w-prose pl-4 text-base leading-relaxed text-muted-foreground sm:mt-4 sm:text-[1.05rem] sm:leading-8">
                        {section.body}
                      </p>
                    </section>
                  </Reveal>
                ))}

                <Reveal delay={0.08} scale>
                  <div className="rounded-3xl border border-accent/25 bg-accent/[0.06] p-6 sm:p-7">
                    <span className="font-display text-xs font-semibold tracking-[0.18em] text-gradient-cyan uppercase">
                      Oferta
                    </span>
                    <h2 className="mt-2 font-display text-xl font-black text-foreground">Zakres prac</h2>
                    <ul className="mt-5 grid gap-3 sm:grid-cols-2 lg:grid-cols-1 xl:grid-cols-2">
                      {service.bullets.map((item) => (
                        <li
                          key={item}
                          className="flex items-center gap-3 text-sm leading-snug text-foreground/80"
                        >
                          <span className="flex size-6 shrink-0 items-center justify-center rounded-full bg-accent/20">
                            <Check className="size-3.5 text-accent" />
                          </span>
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>
                    <div className="mt-6 border-t border-accent/20 pt-5">
                      <h3 className="font-display text-base font-bold text-foreground">
                        Teren działania
                      </h3>
                      <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                        {service.area}
                      </p>
                    </div>
                  </div>
                </Reveal>
              </div>

              {media ? (
                <Reveal delay={0.1} className="relative lg:col-span-6 xl:col-span-5" scale>
                  <div
                    className="absolute -inset-3 rounded-[2rem] bg-gradient-cyan opacity-25 blur-2xl"
                    aria-hidden
                  />
                  <img
                    src={media.src}
                    alt={media.alt}
                    className="relative h-56 w-full rounded-3xl object-cover shadow-card ring-2 ring-accent/35 sm:h-72 lg:h-full lg:min-h-[18rem]"
                    style={{ objectPosition: media.position }}
                  />
                </Reveal>
              ) : null}
            </div>
          </div>
        </div>

        <div className="bg-navy">
          <div className="mx-auto max-w-[1360px] px-5 py-16 sm:py-20 lg:px-8 lg:py-24">
            <section>
              <Reveal>
                <DarkEyebrow icon={Hammer}>Proces</DarkEyebrow>
                <h2 className="mt-5 font-display text-3xl font-bold text-navy-foreground sm:text-5xl">
                  Jak <span className="text-gradient-cyan">pracujemy</span>
                </h2>
              </Reveal>
              <ol className="mt-8 grid gap-5 sm:grid-cols-2 lg:grid-cols-4 sm:gap-6">
                {SERVICE_PROCESS.map((item, i) => (
                  <Reveal key={item.step} delay={0.06 + i * 0.07} y={16} scale className="h-full">
                    <li className="flex h-full flex-col rounded-3xl bg-navy-foreground/8 p-7 ring-1 ring-navy-foreground/15 sm:p-8">
                      <span className="font-display text-xs font-semibold tracking-[0.18em] text-accent uppercase">
                        {item.step}
                      </span>
                      <p className="mt-4 font-semibold text-navy-foreground">{item.title}</p>
                      <p className="mt-2 text-sm leading-relaxed text-navy-foreground/65">{item.body}</p>
                    </li>
                  </Reveal>
                ))}
              </ol>
            </section>
          </div>
        </div>

        <ServiceRealizations titleOf={service.titleOf} items={related} />

        <ServiceFaq service={service} />

        <section className="relative isolate overflow-hidden bg-white pt-12 pb-8 text-center sm:py-16 lg:py-20">
          <div
            className="pointer-events-none absolute inset-x-0 bottom-0 z-0 h-[min(36rem,70%)] bg-[linear-gradient(180deg,transparent_0%,oklch(0.59_0.14_242/0.02)_30%,oklch(0.59_0.14_242/0.06)_60%,oklch(0.59_0.14_242/0.11)_100%)] max-md:h-[min(28rem,75%)] max-md:bg-[linear-gradient(180deg,transparent_0%,oklch(0.59_0.14_242/0.03)_28%,oklch(0.59_0.14_242/0.07)_58%,oklch(0.59_0.14_242/0.12)_100%)]"
            aria-hidden
          />
          <div className="relative z-10 mx-auto max-w-[1360px] px-5 lg:px-8">
            <Reveal>
              <span className="font-display text-xs font-semibold tracking-[0.18em] text-gradient-cyan uppercase">
                Oferta
              </span>
              <h2 className="mt-3 font-display text-3xl font-bold text-foreground sm:text-5xl">
                Inne <span className="text-gradient-cyan">usługi</span>
              </h2>
            </Reveal>
            <div className="mt-8">
              <MobileCarousel
                key={service.slug}
                items={others}
                renderItem={(item) => <OtherServiceCard item={item} />}
              />
              <ul className="hidden gap-5 md:grid md:grid-cols-2 lg:grid-cols-4">
                {others.map((item, i) => (
                  <li key={item.slug} className="min-w-0">
                    <Reveal delay={Math.min(i, 7) * 0.05} scale className="h-full">
                      <OtherServiceCard item={item} />
                    </Reveal>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </section>
      </main>
      <Footer />
      <StickyCallBar />
    </div>
  );
}
