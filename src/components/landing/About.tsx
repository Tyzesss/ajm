import aboutImage from "@/assets/about-ajm-real-tech.png";
import { Reveal } from "./Reveal";

const STEPS = [
  { n: "01", label: "Oględziny" },
  { n: "02", label: "Wycena" },
  { n: "03", label: "Montaż" },
  { n: "04", label: "Serwis" },
] as const;

export function About() {
  return (
    <section
      id="o-nas"
      className="pt-16 pb-8 sm:pt-20 sm:pb-20 md:pt-32 lg:pt-36 lg:pb-24"
    >
      <div className="mx-auto max-w-[1360px] px-5 lg:px-8">
        <div className="grid items-center gap-6 lg:grid-cols-12 lg:items-stretch lg:gap-x-12 lg:gap-y-7">
          <Reveal className="order-1 lg:order-2 lg:col-span-7">
            <div>
              <span
                className="font-display text-xs font-semibold tracking-[0.18em] text-gradient-cyan uppercase"
              >
                O nas
              </span>
              <h2 className="mt-3 font-display text-3xl font-bold leading-tight sm:text-4xl lg:text-[2.5rem] lg:leading-[1.15]">
                Lokalny partner
                <br />
                instalacji{" "}
                <span className="text-gradient-cyan">z Namysłowa</span>
              </h2>
            </div>
          </Reveal>

          <Reveal delay={0.04} className="order-2 lg:order-3 lg:col-span-7">
            <p className="text-base leading-relaxed text-muted-foreground sm:text-[1.05rem] lg:text-lg lg:leading-relaxed">
              <span className="font-semibold text-foreground">
                <span className="text-accent">AJM</span> Technika
              </span>{" "}
              to lokalny partner instalacji grzewczych, chłodniczych i sanitarnych z bazą w{" "}
              <span className="font-semibold text-foreground">Namysłowie</span>.
              <span className="hidden md:inline"> </span>
              <br className="md:hidden" />
              <br className="md:hidden" />
              Pomagamy właścicielom domów i firmom dobrać rozwiązanie pod budynek, budżet i koszty
              eksploatacji: od{" "}
              <span className="font-semibold text-foreground">pomp ciepła</span> i{" "}
              <span className="font-semibold text-foreground">klimatyzacji</span>, przez{" "}
              <span className="font-semibold text-foreground">ogrzewanie podłogowe</span> i{" "}
              <span className="font-semibold text-foreground">rekuperację</span>, po{" "}
              <span className="font-semibold text-foreground">instalacje wodne</span>,{" "}
              <span className="font-semibold text-foreground">sanitarne</span> oraz{" "}
              <span className="font-semibold text-foreground">uzdatnianie wody</span>.
            </p>
          </Reveal>

          <Reveal className="order-3 lg:order-1 lg:col-span-5 lg:row-span-3 lg:self-center">
            <figure className="relative h-[22rem] overflow-hidden rounded-2xl sm:h-[26rem] lg:h-[30rem]">
              <img
                src={aboutImage}
                alt="Nowoczesna pompa ciepła przy domu"
                width={1024}
                height={1365}
                className="absolute inset-0 size-full object-cover object-[72%_45%] [filter:brightness(0.97)_contrast(1.04)_saturate(0.96)]"
              />
              <div
                className="absolute inset-0 bg-gradient-to-t from-navy via-navy/50 to-navy/15"
                aria-hidden
              />
              <figcaption className="absolute inset-x-0 bottom-0 p-5 sm:p-6">
                <p className="font-display text-2xl font-bold text-navy-foreground sm:text-3xl">
                  <span className="text-accent">AJM</span> Technika
                </p>
                <p className="mt-1.5 text-sm font-medium text-navy-foreground/90 sm:text-base">
                  Dobór · Montaż · Serwis
                </p>
                <span className="mt-3 block h-0.5 w-10 rounded-full bg-accent" aria-hidden />
                <p className="mt-2.5 text-sm text-navy-foreground/70">
                  Namysłów · Opole · okolice
                </p>
              </figcaption>
            </figure>
          </Reveal>

          <Reveal
            delay={0.08}
            className="order-4 hidden flex-col gap-6 lg:order-4 lg:col-span-7 lg:flex lg:flex-col lg:gap-7"
          >
            <p className="text-base leading-relaxed text-muted-foreground sm:text-[1.05rem] lg:text-lg lg:leading-relaxed">
              Stawiamy na czytelny proces:{" "}
              <span className="font-semibold text-foreground">oględziny</span> i{" "}
              <span className="font-semibold text-foreground">bezpłatna konsultacja</span>,{" "}
              <span className="font-semibold text-foreground">konkretna wycena</span>,{" "}
              <span className="font-semibold text-foreground">solidny montaż</span> z
              uruchomieniem oraz{" "}
              <span className="font-semibold text-foreground">wsparcie serwisowe</span>.
              Działamy na terenie{" "}
              <span className="font-semibold text-foreground">województwa opolskiego</span> i w
              sąsiednich miejscowościach.
            </p>

            <ul className="grid grid-cols-2 gap-4 sm:grid-cols-4 sm:gap-5">
              {STEPS.map((step) => (
                <li key={step.n} className="flex flex-col items-start gap-1">
                  <span className="font-display text-xs font-semibold tracking-wider text-accent sm:text-sm">
                    {step.n}
                  </span>
                  <span className="text-sm font-semibold text-foreground sm:text-base">
                    {step.label}
                  </span>
                  <span className="h-0.5 w-6 rounded-full bg-accent/70" aria-hidden />
                </li>
              ))}
            </ul>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
