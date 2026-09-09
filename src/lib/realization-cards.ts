import ajmPompaPanasonic from "@/assets/ajm-pompa-panasonic-aquarea.jpg";
import ajmPompaMideaDach from "@/assets/ajm-pompa-midea-dach.jpg";
import ajmPompaStiebel from "@/assets/ajm-pompa-stiebel-outdoor.jpg";
import ajmJednostkiDuo from "@/assets/ajm-jednostki-zew-midea-duo.jpg";
import ajmKotlowniaPanasonic from "@/assets/ajm-kotlownia-panasonic-galmet.jpg";
import ajmKotlowniaRotenso from "@/assets/ajm-kotlownia-rotenso-filtry.jpg";
import ajmKociolHlazar from "@/assets/ajm-kociol-hlazar-pellet.jpg";
import ajmKotlowniaPellet from "@/assets/ajm-kotlownia-pellet-zasobniki.jpg";
import ajmPodlogowka from "@/assets/ajm-podlogowka-petle.jpg";

export type RealizationCard = {
  title: string;
  year: string;
  scope: string;
  image: string;
  alt: string;
  /** object-position - kadr na urządzenie */
  focus?: string;
};

/** Domyślne kadry po pliku zdjęcia (wspólne dla usług). */
const FOCUS: Record<string, string> = {
  [ajmPompaPanasonic]: "50% 40%",
  [ajmPompaMideaDach]: "50% 36%",
  [ajmPompaStiebel]: "58% 40%",
  [ajmJednostkiDuo]: "36% 28%",
  [ajmKotlowniaPanasonic]: "48% 40%",
  [ajmKotlowniaRotenso]: "55% 32%",
  [ajmKociolHlazar]: "64% 36%",
  [ajmKotlowniaPellet]: "52% 38%",
  [ajmPodlogowka]: "50% 68%",
};

function withFocus(card: Omit<RealizationCard, "focus">): RealizationCard {
  return { ...card, focus: FOCUS[card.image] ?? "50% 42%" };
}

/**
 * Tylko realne zdjęcia klienta dopasowane do danej usługi.
 * Brak pozycji = sekcja realizacji na podstronie się nie pokazuje.
 */
const BY_SERVICE: Record<string, Omit<RealizationCard, "focus">[]> = {
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
      title: "Montaż dachowy Midea",
      year: "2025",
      scope: "Montaż jednostki zewnętrznej na dachu.",
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
      title: "Kocioł Lazar Smart Fire",
      year: "2025",
      scope: "Montaż kotła pelletowego w kotłowni.",
      image: ajmKociolHlazar,
      alt: "Kocioł pelletowy Lazar Smart Fire w kotłowni",
    },
    {
      title: "Kotłownia z zasobnikami",
      year: "2025",
      scope: "Kocioł pelletowy, zasobnik CWU i bufor.",
      image: ajmKotlowniaPellet,
      alt: "Kotłownia z kotłem pelletowym i zasobnikami",
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
  ],
  klimatyzacja: [
    {
      title: "Jednostki zewnętrzne Midea",
      year: "2023",
      scope: "Dwie jednostki zewnętrzne na bloczkach betonowych.",
      image: ajmJednostkiDuo,
      alt: "Dwie jednostki zewnętrzne Midea przy elewacji",
    },
  ],
  "instalacje-wodne": [],
  "instalacje-sanitarne": [],
  "instalacje-przemyslowe": [],
  rekuperacja: [],
  "uzdatnianie-wody": [
    {
      title: "Filtracja przy kotłowni",
      year: "2025",
      scope: "Stacja filtrów i orurowanie przy zasobniku.",
      image: ajmKotlowniaRotenso,
      alt: "Filtry wody i hydrobox w kotłowni",
    },
  ],
};

export function getServiceRealizationCards(slug: string): RealizationCard[] {
  return (BY_SERVICE[slug] ?? []).slice(0, 4).map(withFocus);
}
