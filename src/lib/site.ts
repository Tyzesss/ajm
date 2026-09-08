export const SITE_NAME = "AJM Technika";
export const SITE_TITLE =
  "AJM Technika - pompy ciepła, klimatyzacja, kotły | Namysłów";
export const COMPANY_LEGAL_NAME = "AJM Sp. z o.o.";
export const EMAIL = "kontakt@ajmtechnika.pl";
export const EMAIL_HREF = `mailto:${EMAIL}`;

export const PHONE_DISPLAY = "793 570 967";
export const PHONE_E164 = "+48793570967";
export const PHONE_HREF = `tel:${PHONE_E164}`;

const WHATSAPP_TEXT = encodeURIComponent("Dzień dobry, chciałbym zgłosić zlecenie serwisowe.");
export const WHATSAPP_HREF = `https://wa.me/${PHONE_E164.replace("+", "")}?text=${WHATSAPP_TEXT}`;

export const ADDRESS = "Łączańska 22C, 46-100 Namysłów";
export const SERVICE_AREA = "Namysłów, Opole i okolice";
export const MAPS_URL = "https://maps.app.goo.gl/BDcWmc6Xc1RwhVsj9";
export const MAPS_EMBED_URL =
  "https://maps.google.com/maps?q=51.0732554,17.7261595&z=16&output=embed";
/** Robocza lista miejscowości (do wglądu / zmiany). */
export const SERVICE_TOWNS = [
  "Namysłów",
  "Byczyna",
  "Wołczyn",
  "Kluczbork",
  "Domaszowice",
  "Świerczów",
  "Pokój",
  "Murów",
  "Brzeg",
  "Lewin Brzeski",
  "Opole",
  "Oława",
  "Bierutów",
  "Oleśnica",
  "Dobrzeń Wielki",
] as const;
export const SERVICE_COUNTIES = [
  "namysłowski",
  "kluczborski",
  "brzeski",
  "opolski",
] as const;
export const NIP = "5562796248";
export const REGON = "521998239";
export const HOURS = "Pn-Sb: 8:00-20:00, Nd: zamknięte";

export const GOOGLE_REVIEWS_URL = MAPS_URL;
export const GOOGLE_RATING = "5.0";
export const GOOGLE_REVIEW_COUNT = 5;

/** Realizacje do podstron usług (dopasowanie po `match` w services.ts). */
export const REALIZATIONS = [
  {
    title: "Pompa ciepła powietrze-woda",
    year: "2025",
    scope: "Jednostka zewnętrzna i hydrobox w domu jednorodzinnym.",
  },
  {
    title: "Ogrzewanie podłogowe z rozdzielaczem",
    year: "2025",
    scope: "Pętle podłogówki i hydrobox pompy ciepła w kotłowni.",
  },
  {
    title: "Klimatyzacja split",
    year: "2024",
    scope: "Jednostka ścienna w sypialni, freon i odprowadzenie skroplin.",
  },
  {
    title: "Jednostki zewnętrzne multi-split",
    year: "2024",
    scope: "Dwie jednostki zewnętrzne klimatyzacji na elewacji domu.",
  },
  {
    title: "Kocioł pelletowy",
    year: "2025",
    scope: "Montaż kotła na pellet i uruchomienie kotłowni w domu jednorodzinnym.",
  },
  {
    title: "Rekuperacja z odzyskiem ciepła",
    year: "2024",
    scope: "Centrala rekuperacji i zaizolowane kanały w pomieszczeniu technicznym.",
  },
] as const;
