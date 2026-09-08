import { Phone } from "lucide-react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Button } from "@/components/ui/button";
import { Reveal } from "./Reveal";
import { CheckList } from "./CheckList";
import { PHONE_DISPLAY, PHONE_HREF } from "@/lib/site";

const ITEMS = [
  {
    q: "Czy dojazd i pierwsza konsultacja są płatne?",
    a: "Pierwsze oględziny i konsultacja w naszym obszarze działania są bezpłatne. Na ich podstawie przygotowujemy wycenę.",
  },
  {
    q: "Jak długo trwa montaż pompy ciepła lub klimatyzacji?",
    a: "Zależy od zakresu i przygotowania budynku. Po oględzinach podajemy realistyczny termin, zwykle od kilku dni roboczych przy typowych instalacjach.",
  },
  {
    q: "Czy pomagacie z dofinansowaniem (np. Czyste Powietrze)?",
    a: "Doradzamy przy wyborze rozwiązania pod kątem programów wsparcia. Szczegóły aktualnych programów omawiamy indywidualnie.",
  },
  {
    q: "Na jakim terenie działacie?",
    a: "Głównie województwo opolskie: Namysłów, Opole, Kluczbork, Brzeg i okoliczne miejscowości. Szczegóły w sekcji Obszar działania.",
  },
  {
    q: "Czy robicie też serwis istniejących instalacji?",
    a: "Tak. Przeglądy, uruchomienia i wsparcie pogwarancyjne w ramach oferty serwisowej powiązanej z montażami.",
  },
];

export function Faq() {
  return (
    <section id="faq" className="py-20 md:py-24 lg:py-28">
      <div className="mx-auto grid max-w-[1360px] gap-12 px-5 lg:grid-cols-2 lg:items-start lg:gap-16 lg:px-8">
        <Reveal className="flex flex-col items-start text-left lg:self-start">
          <span
            data-scroll-target
            className="font-display text-xs font-semibold tracking-[0.18em] text-gradient-cyan uppercase"
          >
            FAQ
          </span>
          <h2 className="mt-4 font-display text-3xl font-bold tracking-tight text-foreground sm:text-4xl lg:text-[2.75rem] lg:leading-[1.15]">
            Często zadawane <span className="text-gradient-cyan">pytania</span>
          </h2>
          <p className="mt-4 max-w-md text-base leading-relaxed text-muted-foreground sm:text-lg">
            Nie znalazłeś odpowiedzi? Zadzwoń, oddzwonimy w ciągu jednego dnia roboczego.
          </p>
          <CheckList
            items={[
              "Bezpłatne oględziny i konsultacja",
              "Pomoc przy programach wsparcia",
              "Wycena bez zobowiązań",
            ]}
          />
          <div className="mt-8 hidden w-full lg:block">
            <Button asChild variant="cyan" size="xl">
              <a href={PHONE_HREF}>
                <Phone className="size-4" /> Zadzwoń · {PHONE_DISPLAY}
              </a>
            </Button>
          </div>
        </Reveal>

        <Reveal delay={0.12} className="min-w-0">
          <Accordion type="single" collapsible className="w-full">
            {ITEMS.map((item) => (
              <AccordionItem
                key={item.q}
                value={item.q}
                className="border-accent/35 last:border-b-0"
              >
                <AccordionTrigger className="py-5 text-left text-[0.95rem] font-bold text-foreground transition-colors hover:no-underline data-[state=open]:text-accent sm:py-6 sm:text-base [&>svg]:size-4 [&>svg]:text-muted-foreground data-[state=open]:[&>svg]:text-accent">
                  {item.q}
                </AccordionTrigger>
                <AccordionContent className="pb-5 text-sm leading-relaxed text-muted-foreground">
                  {item.a}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </Reveal>
      </div>
    </section>
  );
}
