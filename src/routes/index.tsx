import { createFileRoute, useRouterState } from "@tanstack/react-router";
import { useEffect } from "react";
import { Header } from "@/components/landing/Header";
import { Hero } from "@/components/landing/Hero";
import { About } from "@/components/landing/About";
import { Services } from "@/components/landing/Services";
import { Realizations } from "@/components/landing/Realizations";
import { Brands } from "@/components/landing/Brands";
import { Testimonials } from "@/components/landing/Testimonials";
import { WhyUs } from "@/components/landing/WhyUs";
import { Faq } from "@/components/landing/Faq";
import { ServiceArea } from "@/components/landing/ServiceArea";
import { Contact } from "@/components/landing/Contact";
import { Footer } from "@/components/landing/Footer";
import { StickyCallBar } from "@/components/landing/StickyCallBar";
import { scrollToSection } from "@/lib/scroll-to-section";

const title = "AJM Technika - Pompy ciepła, klimatyzacja i kotły | Namysłów";
const description =
  "AJM Technika: instalacje HVAC w Namysłowie i na Opolszczyźnie: pompy ciepła, klimatyzacja, kotły i rekuperacja. Bezpłatna wycena, montaż i serwis.";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title },
      { name: "description", content: description },
      { property: "og:title", content: title },
      { property: "og:description", content: description },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Index,
});

function Index() {
  const hash = useRouterState({ select: (s) => s.location.hash });

  useEffect(() => {
    if (!hash || hash === "#" || hash === "#top") return;
    const id = hash.startsWith("#") ? hash.slice(1) : hash;
    const run = () => scrollToSection(`#${id}`);
    const t = window.setTimeout(run, 80);
    return () => window.clearTimeout(t);
  }, [hash]);

  return (
    <div className="min-h-screen scroll-smooth">
      <Header />
      <main>
        <Hero />
        <div className="bg-background">
          <About />
          <Services />
        </div>
        <div className="bg-navy">
          <Realizations />
          <Brands />
        </div>
        <div className="bg-background">
          <Testimonials />
          <WhyUs />
        </div>
        <div className="bg-navy">
          <Faq />
        </div>
        <div className="bg-background">
          <ServiceArea />
          <Contact />
        </div>
      </main>
      <Footer />
      <StickyCallBar />
    </div>
  );
}
