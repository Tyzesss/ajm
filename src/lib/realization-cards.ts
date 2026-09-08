import ajmPompaPanasonic from "@/assets/ajm-pompa-panasonic-aquarea.jpg";
import ajmPompaMideaDach from "@/assets/ajm-pompa-midea-dach.jpg";
import ajmPompaStiebel from "@/assets/ajm-pompa-stiebel-outdoor.jpg";
import ajmJednostkiDuo from "@/assets/ajm-jednostki-zew-midea-duo.jpg";
import ajmKotlowniaMidea from "@/assets/ajm-kotlownia-midea-czerwone.jpg";
import ajmKotlowniaPanasonic from "@/assets/ajm-kotlownia-panasonic-galmet.jpg";
import ajmKotlowniaHydrobox from "@/assets/ajm-kotlownia-hydrobox-r32.jpg";
import ajmKotlowniaRotenso from "@/assets/ajm-kotlownia-rotenso-filtry.jpg";
import ajmKotlowniaZbiorniki from "@/assets/ajm-kotlownia-zbiorniki.jpg";
import ajmKotlowniaGalmet from "@/assets/ajm-kotlownia-galmet-pompy.jpg";
import ajmInstalacjaWilo from "@/assets/ajm-instalacja-pompy-wilo.jpg";
import ajmKociolHlazar from "@/assets/ajm-kociol-hlazar-pellet.jpg";
import ajmKotlowniaPellet from "@/assets/ajm-kotlownia-pellet-zasobniki.jpg";
import ajmPodlogowka from "@/assets/ajm-podlogowka-petle.jpg";
import ajmSterownikStiebel from "@/assets/ajm-sterownik-stiebel.jpg";

export type RealizationCard = {
  title: string;
  year: string;
  scope: string;
  image: string;
  alt: string;
};

/** Zdjęcia z realnych realizacji AJM Technika. */
const BY_SERVICE: Record<string, RealizationCard[]> = {
  "pompy-ciepla": [
    {
      title: "Panasonic Aquarea",
      year: "2025",
      scope: "Jednostka zewnętrzna na stopach betonowych.",
      image: ajmPompaPanasonic,
      alt: "Jednostka zewnętrzna Panasonic Aquarea na stopach betonowych",
    },
    {
      title: "Kotłownia z hydroboxem",
      year: "2025",
      scope: "Hydrobox, zasobnik Galmet i naczynie wzbiorcze.",
      image: ajmKotlowniaPanasonic,
      alt: "Kotłownia z jednostką Panasonic i zasobnikiem Galmet",
    },
    {
      title: "Midea na dachu",
      year: "2025",
      scope: "Montaż jednostki zewnętrznej na dachu płaskim.",
      image: ajmPompaMideaDach,
      alt: "Jednostka zewnętrzna Midea zamontowana na dachu",
    },
    {
      title: "Stiebel Eltron",
      year: "2025",
      scope: "Jednostka zewnętrzna na budowie przy elewacji.",
      image: ajmPompaStiebel,
      alt: "Jednostka zewnętrzna Stiebel Eltron na cegłach",
    },
  ],
  "kotly-pelletowe": [
    {
      title: "Kocioł Hlazar Smart Fire",
      year: "2025",
      scope: "Montaż kotła pelletowego w kotłowni.",
      image: ajmKociolHlazar,
      alt: "Kocioł pelletowy Hlazar Smart Fire w kotłowni",
    },
    {
      title: "Kotłownia z zasobnikami",
      year: "2025",
      scope: "Kocioł pelletowy, zasobnik CWU i bufor.",
      image: ajmKotlowniaPellet,
      alt: "Kotłownia z kotłem pelletowym i zasobnikami",
    },
    {
      title: "Orurowanie kotłowni",
      year: "2024",
      scope: "Pompy obiegowe i izolowane przewody.",
      image: ajmInstalacjaWilo,
      alt: "Instalacja z pompami Wilo w pomieszczeniu technicznym",
    },
    {
      title: "Zasobnik i pompy",
      year: "2024",
      scope: "Galmet z rozdzielaniem i pompami obiegowymi.",
      image: ajmKotlowniaGalmet,
      alt: "Zasobnik Galmet z pompami i armaturą",
    },
  ],
  "ogrzewanie-podlogowe": [
    {
      title: "Pętle przed wylewką",
      year: "2025",
      scope: "Ułożenie pętli na izolacji refleksyjnej.",
      image: ajmPodlogowka,
      alt: "Pętle ogrzewania podłogowego przed wylewką",
    },
    {
      title: "Rozdzielacz i pompy",
      year: "2025",
      scope: "Rozdzielanie obiegów z pompami Wilo.",
      image: ajmInstalacjaWilo,
      alt: "Rozdzielacz i pompy obiegowe podłogówki",
    },
    {
      title: "Kotłownia z podłogówką",
      year: "2024",
      scope: "Hydrobox i orurowanie pod niską temperaturę.",
      image: ajmKotlowniaHydrobox,
      alt: "Hydrobox i instalacja pod ogrzewanie podłogowe",
    },
    {
      title: "Automatyka kotłowni",
      year: "2024",
      scope: "Sterowanie i zabezpieczenia po montażu.",
      image: ajmSterownikStiebel,
      alt: "Sterownik i rozdzielnica przy instalacji grzewczej",
    },
  ],
  klimatyzacja: [
    {
      title: "Jednostki zewnętrzne Midea",
      year: "2023",
      scope: "Dwie jednostki zewnętrzne na bloczkach betonowych.",
      image: ajmJednostkiDuo,
      alt: "Dwie jednostki zewnętrzne Midea przy elewacji",
    },
    {
      title: "Midea na dachu",
      year: "2025",
      scope: "Jednostka zewnętrzna na dachu płaskim.",
      image: ajmPompaMideaDach,
      alt: "Jednostka zewnętrzna Midea na dachu",
    },
    {
      title: "Panasonic Aquarea",
      year: "2025",
      scope: "Jednostka zewnętrzna przy domu.",
      image: ajmPompaPanasonic,
      alt: "Jednostka zewnętrzna Panasonic przy domu",
    },
    {
      title: "Stiebel Eltron outdoor",
      year: "2025",
      scope: "Montaż jednostki zewnętrznej na budowie.",
      image: ajmPompaStiebel,
      alt: "Jednostka zewnętrzna Stiebel Eltron",
    },
  ],
  "instalacje-wodne": [
    {
      title: "Kotłownia Midea",
      year: "2023",
      scope: "Hydrobox, orurowanie i zasobnik CWU.",
      image: ajmKotlowniaMidea,
      alt: "Kotłownia z jednostką Midea i czerwonym orurowaniem",
    },
    {
      title: "Zasobniki w kotłowni",
      year: "2025",
      scope: "Bufor i zasobnik z izolowanym orurowaniem.",
      image: ajmKotlowniaZbiorniki,
      alt: "Zbiorniki buforowe i CWU w kotłowni",
    },
    {
      title: "Galmet i pompy",
      year: "2025",
      scope: "Zasobnik CWU z pompami obiegowymi.",
      image: ajmKotlowniaGalmet,
      alt: "Zasobnik Galmet z instalacją wodną",
    },
    {
      title: "Hydrobox R32",
      year: "2023",
      scope: "Moduł hydrauliczny i podłączenia wodne.",
      image: ajmKotlowniaHydrobox,
      alt: "Hydrobox pompy ciepła z instalacją wodną",
    },
  ],
  "instalacje-sanitarne": [
    {
      title: "Pomieszczenie techniczne",
      year: "2025",
      scope: "Rozprowadzenie i podejścia w kotłowni.",
      image: ajmKotlowniaZbiorniki,
      alt: "Instalacje w pomieszczeniu technicznym",
    },
    {
      title: "Orurowanie i armatura",
      year: "2024",
      scope: "Izolowane przewody, zawory i pompy.",
      image: ajmInstalacjaWilo,
      alt: "Orurowanie z pompami w kotłowni",
    },
    {
      title: "Kotłownia po montażu",
      year: "2025",
      scope: "Kompletna instalacja grzewczo-wodna.",
      image: ajmKotlowniaMidea,
      alt: "Kotłownia po montażu instalacji",
    },
    {
      title: "Zasobnik CWU",
      year: "2024",
      scope: "Podłączenia sanitarne przy zasobniku.",
      image: ajmKotlowniaGalmet,
      alt: "Zasobnik CWU z podłączeniami",
    },
  ],
  "instalacje-przemyslowe": [
    {
      title: "Jednostka na dachu",
      year: "2025",
      scope: "Montaż urządzenia na dachu obiektu.",
      image: ajmPompaMideaDach,
      alt: "Jednostka zewnętrzna na dachu obiektu",
    },
    {
      title: "Jednostki zewnętrzne",
      year: "2023",
      scope: "Montaż urządzeń przy elewacji.",
      image: ajmJednostkiDuo,
      alt: "Jednostki zewnętrzne przy budynku",
    },
    {
      title: "Zaplecze techniczne",
      year: "2025",
      scope: "Kotłownia z zasobnikami i orurowaniem.",
      image: ajmKotlowniaZbiorniki,
      alt: "Zaplecze techniczne instalacji",
    },
    {
      title: "Sterowanie i rozdzielnica",
      year: "2025",
      scope: "Automatyka i zabezpieczenia instalacji.",
      image: ajmSterownikStiebel,
      alt: "Sterownik i rozdzielnica instalacji",
    },
  ],
  rekuperacja: [
    {
      title: "Kotłownia z automatyką",
      year: "2025",
      scope: "Pomieszczenie techniczne po montażu instalacji.",
      image: ajmKotlowniaRotenso,
      alt: "Pomieszczenie techniczne z automatyką",
    },
    {
      title: "Instalacja w kotłowni",
      year: "2024",
      scope: "Orurowanie i urządzenia w części technicznej.",
      image: ajmKotlowniaHydrobox,
      alt: "Instalacja w pomieszczeniu technicznym",
    },
    {
      title: "Sterowanie instalacją",
      year: "2025",
      scope: "Sterownik i rozdzielnica przy montażu.",
      image: ajmSterownikStiebel,
      alt: "Sterownik instalacji w kotłowni",
    },
    {
      title: "Zbiorniki i kanały techniczne",
      year: "2025",
      scope: "Zaplecze techniczne budynku.",
      image: ajmKotlowniaZbiorniki,
      alt: "Zaplecze techniczne z zasobnikami",
    },
  ],
  "uzdatnianie-wody": [
    {
      title: "Filtracja przy kotłowni",
      year: "2025",
      scope: "Stacja filtrów i orurowanie przy zasobniku.",
      image: ajmKotlowniaRotenso,
      alt: "Filtry wody i hydrobox w kotłowni",
    },
    {
      title: "Ochrona instalacji",
      year: "2025",
      scope: "Uzdatnianie jako ochrona urządzeń grzewczych.",
      image: ajmKotlowniaMidea,
      alt: "Kotłownia z instalacją wodną",
    },
    {
      title: "Zasobnik CWU",
      year: "2024",
      scope: "Podłączenia wodne przy zasobniku Galmet.",
      image: ajmKotlowniaGalmet,
      alt: "Zasobnik Galmet z instalacją wodną",
    },
    {
      title: "Kotłownia po montażu",
      year: "2024",
      scope: "Kompletny układ wodny w pomieszczeniu technicznym.",
      image: ajmKotlowniaPanasonic,
      alt: "Kotłownia z zasobnikiem i instalacją wodną",
    },
  ],
};

export function getServiceRealizationCards(slug: string): RealizationCard[] {
  return (BY_SERVICE[slug] ?? []).slice(0, 4);
}
