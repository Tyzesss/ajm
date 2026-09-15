import { Phone } from "lucide-react";
import type { MouseEvent } from "react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Button } from "@/components/ui/button";
import { Reveal } from "./Reveal";
import { CheckList } from "./CheckList";
import { scrollToSection } from "@/lib/scroll-to-section";
import { PHONE_DISPLAY, PHONE_HREF } from "@/lib/site";
import { HOME_FAQ } from "@/lib/seo";

const ITEMS = HOME_FAQ;

const goTo = (href: string) => (e: MouseEvent<HTMLAnchorElement>) => {
  e.preventDefault();
  scrollToSection(href);
};

export function Faq() {
  return (
    <section id="faq" className="relative isolate overflow-hidden pt-20 pb-8 md:py-24 lg:py-28">
      <div
        className="pointer-events-none absolute inset-x-0 top-0 z-0 h-[min(28rem,70%)] bg-[linear-gradient(180deg,oklch(0.685_0.166_243/0.14)_0%,oklch(0.685_0.166_243/0.07)_35%,oklch(0.685_0.166_243/0.02)_70%,transparent_100%)] max-md:h-[min(22rem,65%)] max-md:bg-[linear-gradient(180deg,oklch(0.685_0.166_243/0.12)_0%,oklch(0.685_0.166_243/0.06)_40%,transparent_100%)]"
        aria-hidden
      />
      <div className="relative z-10 mx-auto grid max-w-[1360px] gap-12 px-5 lg:grid-cols-2 lg:items-start lg:gap-16 lg:px-8">
        <Reveal className="flex flex-col items-center text-center lg:items-start lg:self-start lg:text-left">
          <span className="font-display text-xs font-semibold tracking-[0.18em] text-gradient-cyan uppercase">
            FAQ
          </span>
          <h2 className="mt-4 font-display text-3xl font-bold tracking-tight text-foreground sm:text-4xl lg:text-[2.75rem] lg:leading-[1.15]">
            Często zadawane <span className="text-gradient-cyan">pytania</span>
          </h2>
          <p className="mt-4 max-w-md text-base leading-relaxed text-muted-foreground sm:text-lg">
            Nie znalazłeś odpowiedzi?{" "}
            <a
              href="#kontakt"
              onClick={goTo("#kontakt")}
              className="font-medium text-foreground underline-offset-4 hover:text-accent hover:underline"
            >
              Napisz lub zadzwoń
            </a>
            , postaramy się odpowiedzieć jak najszybciej.
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
                <Phone className="size-4" /> Zadzwoń: {PHONE_DISPLAY}
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
