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
import { Contact } from "@/components/landing/Contact";
import { Footer } from "@/components/landing/Footer";
import { StickyCallBar } from "@/components/landing/StickyCallBar";
import { JsonLd } from "@/components/JsonLd";
import { scrollToSection } from "@/lib/scroll-to-section";
import {
  HOME_DESCRIPTION,
  HOME_TITLE,
  homeFaqJsonLd,
  localBusinessJsonLd,
  pageMeta,
  websiteJsonLd,
} from "@/lib/seo";

export const Route = createFileRoute("/")({
  head: () => pageMeta({ title: HOME_TITLE, description: HOME_DESCRIPTION, path: "/" }),
  component: Index,
});

function Index() {
  const hash = useRouterState({ select: (s) => s.location.hash });

  useEffect(() => {
    if (!hash || hash === "#" || hash === "#top") return;
    const id = hash.startsWith("#") ? hash.slice(1) : hash;
    const t = window.setTimeout(() => scrollToSection(`#${id}`), 50);
    return () => window.clearTimeout(t);
  }, [hash]);

  return (
    <div className="min-h-screen overflow-x-clip">
      <JsonLd data={[localBusinessJsonLd(), websiteJsonLd(), homeFaqJsonLd()]} />
      <Header />
      <main className="overflow-x-clip">
        <Hero />
        <div className="overflow-x-clip bg-white">
          <About />
          <Services />
          <Brands />
        </div>
        <div className="bg-navy">
          <Realizations />
        </div>
        <div className="bg-background">
          <Testimonials />
        </div>
        <WhyUs />
        <div className="bg-background">
          <Faq />
          <Contact />
        </div>
      </main>
      <Footer />
      <StickyCallBar />
    </div>
  );
}
