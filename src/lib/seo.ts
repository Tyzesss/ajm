import {
  ADDRESS_BRANCH,
  ADDRESS_HQ,
  COMPANY_LEGAL_NAME,
  EMAIL,
  GOOGLE_RATING,
  GOOGLE_REVIEW_COUNT,
  GOOGLE_REVIEWS_URL,
  NIP,
  PHONE_E164,
  SERVICE_AREA,
  SERVICE_TOWNS,
  SITE_NAME,
} from "./site";
import type { Service } from "./services";

export const SITE_URL = "https://ajmtechnika.com.pl";

export function absoluteUrl(path = "/") {
  if (path.startsWith("http")) return path;
  return `${SITE_URL}${path.startsWith("/") ? path : `/${path}`}`;
}

export const OG_IMAGE = absoluteUrl("/og-image.png");

export const HOME_TITLE = "AJM Technika - Pompy ciepła, klimatyzacja i kotły | Oleśnica";
export const HOME_DESCRIPTION =
  "AJM Technika: instalacje grzewcze, chłodnicze i sanitarne w woj. opolskim i dolnośląskim — pompy ciepła, klimatyzacja, kotły i rekuperacja. Siedziba Oleśnica, oddział Szadurczyce. Bezpłatna wycena.";

/** FAQ ze strony głównej — treść + schema. */
export const HOME_FAQ = [
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
    a: `Województwo opolskie i dolnośląskie — m.in. ${SERVICE_TOWNS.slice(0, 8).join(", ")} oraz pozostałe miejscowości z naszej listy. Dojazd poza listę uzgadniamy indywidualnie.`,
  },
  {
    q: "Czy robicie też serwis istniejących instalacji?",
    a: "Tak. Przeglądy, uruchomienia i wsparcie pogwarancyjne w ramach oferty serwisowej powiązanej z montażami.",
  },
] as const;

function faqEntities(items: readonly { q: string; a: string }[]) {
  return items.map((item) => ({
    "@type": "Question",
    name: item.q,
    acceptedAnswer: {
      "@type": "Answer",
      text: item.a,
    },
  }));
}

export function localBusinessJsonLd() {
  return {
    "@context": "https://schema.org",
    "@type": "HVACBusiness",
    "@id": `${SITE_URL}/#business`,
    name: SITE_NAME,
    legalName: COMPANY_LEGAL_NAME,
    url: SITE_URL,
    logo: OG_IMAGE,
    image: OG_IMAGE,
    telephone: PHONE_E164,
    email: EMAIL,
    taxID: NIP,
    description: HOME_DESCRIPTION,
    areaServed: [
      { "@type": "AdministrativeArea", name: "województwo opolskie" },
      { "@type": "AdministrativeArea", name: "województwo dolnośląskie" },
      ...SERVICE_TOWNS.map((town) => ({ "@type": "City", name: town })),
    ],
    address: {
      "@type": "PostalAddress",
      streetAddress: "ul. Lwowska 31/101",
      addressLocality: "Oleśnica",
      postalCode: "56-400",
      addressCountry: "PL",
    },
    location: [
      {
        "@type": "Place",
        name: "Siedziba",
        address: {
          "@type": "PostalAddress",
          streetAddress: "ul. Lwowska 31/101",
          addressLocality: "Oleśnica",
          postalCode: "56-400",
          addressCountry: "PL",
        },
      },
      {
        "@type": "Place",
        name: "Oddział woj. Opolskie",
        address: {
          "@type": "PostalAddress",
          streetAddress: ADDRESS_BRANCH,
          addressLocality: "Szadurczyce",
          addressRegion: "opolskie",
          addressCountry: "PL",
        },
      },
    ],
    openingHoursSpecification: [
      {
        "@type": "OpeningHoursSpecification",
        dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"],
        opens: "08:00",
        closes: "20:00",
      },
    ],
    aggregateRating: {
      "@type": "AggregateRating",
      ratingValue: GOOGLE_RATING,
      reviewCount: String(GOOGLE_REVIEW_COUNT),
      bestRating: "5",
    },
    sameAs: [GOOGLE_REVIEWS_URL],
    priceRange: "$$",
    knowsAbout: [
      "pompy ciepła",
      "klimatyzacja",
      "kotły pelletowe",
      "rekuperacja",
      "ogrzewanie podłogowe",
      SERVICE_AREA,
      ADDRESS_HQ,
    ],
  };
}

export function websiteJsonLd() {
  return {
    "@context": "https://schema.org",
    "@type": "WebSite",
    "@id": `${SITE_URL}/#website`,
    name: SITE_NAME,
    url: SITE_URL,
    publisher: { "@id": `${SITE_URL}/#business` },
    inLanguage: "pl-PL",
  };
}

export function homeFaqJsonLd() {
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqEntities(HOME_FAQ),
  };
}

export function servicePageJsonLd(service: Service) {
  const url = absoluteUrl(`/uslugi/${service.slug}`);
  return [
    {
      "@context": "https://schema.org",
      "@type": "Service",
      name: service.title,
      serviceType: service.title,
      description: service.seoDescription,
      url,
      provider: { "@id": `${SITE_URL}/#business` },
      areaServed: SERVICE_TOWNS.map((town) => ({ "@type": "City", name: town })),
    },
    {
      "@context": "https://schema.org",
      "@type": "BreadcrumbList",
      itemListElement: [
        {
          "@type": "ListItem",
          position: 1,
          name: "Strona główna",
          item: SITE_URL,
        },
        {
          "@type": "ListItem",
          position: 2,
          name: service.title,
          item: url,
        },
      ],
    },
    {
      "@context": "https://schema.org",
      "@type": "FAQPage",
      mainEntity: faqEntities(service.faq),
    },
  ];
}

export function pageMeta(opts: {
  title: string;
  description: string;
  path: string;
  type?: "website" | "article";
}) {
  const url = absoluteUrl(opts.path);
  return {
    meta: [
      { title: opts.title },
      { name: "description", content: opts.description },
      { property: "og:title", content: opts.title },
      { property: "og:description", content: opts.description },
      { property: "og:type", content: opts.type ?? "website" },
      { property: "og:url", content: url },
      { property: "og:image", content: OG_IMAGE },
      { property: "og:locale", content: "pl_PL" },
      { property: "og:site_name", content: SITE_NAME },
      { name: "twitter:card", content: "summary_large_image" },
      { name: "twitter:title", content: opts.title },
      { name: "twitter:description", content: opts.description },
      { name: "twitter:image", content: OG_IMAGE },
    ],
    links: [{ rel: "canonical", href: url }],
  };
}
