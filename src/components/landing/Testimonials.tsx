import { ExternalLink, Quote, Star } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Reveal } from "./Reveal";
import { GOOGLE_REVIEWS_URL } from "@/lib/site";

const REVIEWS = [
  {
    name: "Agata P.",
    place: "Namysłów",
    service: "Pompa ciepła",
    text: "Szczerze polecam, naprawdę firma godna polecenia",
  },
  {
    name: "M t",
    place: "Namysłów",
    service: "Pompa ciepła",
    text: "Firmę cechuje profesjonalizm i doświadczenie w instalacji pomp ciepła.",
  },
  {
    name: "Adrian P.",
    place: "Namysłów",
    service: "Pompa ciepła",
    text: "Super! Gorąco polecam",
  },
];

function ReviewCard({ review }: { review: (typeof REVIEWS)[number] }) {
  const initial = review.name.trim().charAt(0).toUpperCase();

  return (
    <figure className="flex h-full flex-col rounded-2xl border border-border/60 bg-card p-6 shadow-card md:p-7">
      <div className="flex items-start justify-between gap-3">
        <div className="flex items-center gap-0.5" aria-label="5 na 5">
          {Array.from({ length: 5 }).map((_, s) => (
            <Star key={s} className="size-4 fill-accent text-accent" />
          ))}
        </div>
        <Quote className="size-8 shrink-0 text-accent/35" strokeWidth={1.5} aria-hidden />
      </div>

      <blockquote className="mt-5 flex-1 text-[0.95rem] leading-relaxed text-foreground/80 md:text-base">
        „{review.text}”
      </blockquote>

      <figcaption className="mt-6 flex items-center gap-3 border-t border-border/70 pt-5">
        <span
          aria-hidden
          className="flex size-10 shrink-0 items-center justify-center rounded-full bg-navy font-display text-sm font-bold text-navy-foreground"
        >
          {initial}
        </span>
        <div className="min-w-0">
          <span className="block truncate font-semibold text-foreground">{review.name}</span>
          <span className="mt-0.5 block truncate text-sm text-muted-foreground">
            {review.place}
            <span className="text-muted-foreground/50"> / </span>
            <span className="text-accent">{review.service}</span>
          </span>
        </div>
      </figcaption>
    </figure>
  );
}

export function Testimonials() {
  return (
    <section id="opinie" className="py-16 sm:py-20 md:py-24">
      <div className="mx-auto w-full max-w-[1360px] px-5 lg:px-8">
        <Reveal className="max-w-3xl text-left md:mx-auto md:text-center">
          <span className="block w-fit font-display text-xs font-semibold tracking-[0.18em] text-gradient-cyan uppercase md:mx-auto">
            Opinie klientów
          </span>
          <h2 className="mt-4 font-display text-3xl font-bold tracking-tight text-foreground sm:text-4xl lg:text-[2.75rem] lg:leading-[1.15]">
            Zaufało nam ponad <span className="text-gradient-cyan">20 klientów</span>
            <br className="hidden sm:block" /> z Namysłowa
            <br className="sm:hidden" />
            <span className="hidden sm:inline"> </span>i okolic
          </h2>
          <p className="mt-4 max-w-2xl text-base leading-relaxed text-muted-foreground sm:text-lg md:mx-auto">
            Profesjonalizm, terminowy montaż i realne wsparcie - to najczęstsze słowa w opiniach
            naszych klientów.
          </p>
        </Reveal>

        <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:mt-12 lg:grid-cols-3">
          {REVIEWS.map((review, i) => (
            <Reveal key={review.name} delay={0.05 + i * 0.06} y={16} scale className="h-full">
              <ReviewCard review={review} />
            </Reveal>
          ))}
        </div>

        <Reveal delay={0.2} className="mt-10 flex justify-center">
          <Button asChild variant="cyan" size="xl">
            <a href={GOOGLE_REVIEWS_URL} target="_blank" rel="noopener noreferrer">
              Zobacz wszystkie opinie <ExternalLink className="size-4" />
            </a>
          </Button>
        </Reveal>
      </div>
    </section>
  );
}
