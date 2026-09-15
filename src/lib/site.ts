export const SITE_NAME = "AJM Technika";
export const SITE_TITLE = "AJM Technika - Pompy ciepła, klimatyzacja i kotły | Oleśnica";
export const COMPANY_LEGAL_NAME = "AJM Sp. z o.o.";
export const EMAIL = "kontakt@ajmtechnika.com.pl";
export const EMAIL_HREF = `mailto:${EMAIL}`;

/** Google Analytics 4 */
export const GA4_MEASUREMENT_ID = "G-1FE38M6TNX";

/** Web3Forms - klucz publiczny (frontend). */
export const WEB3FORMS_ACCESS_KEY = "c5bc5acf-5fd9-47eb-8e8a-c19e3778b01f";
export const WEB3FORMS_ENDPOINT = "https://api.web3forms.com/submit";

export const PHONE_DISPLAY = "793 570 967";
export const PHONE_E164 = "+48793570967";
export const PHONE_HREF = `tel:${PHONE_E164}`;

const WHATSAPP_TEXT = encodeURIComponent("Dzień dobry, chciałbym zgłosić zlecenie serwisowe.");
export const WHATSAPP_HREF = `https://wa.me/${PHONE_E164.replace("+", "")}?text=${WHATSAPP_TEXT}`;

/** Siedziba firmy */
export const ADDRESS_HQ = "Oleśnica ul. Lwowska 31/101";
/** Oddział - woj. opolskie */
export const ADDRESS_BRANCH = "Szadurczyce 22a";
export const ADDRESS_BRANCH_LABEL = "Oddział woj. Opolskie";
/** Główny adres kontaktowy (mapa / skrót) = siedziba */
export const ADDRESS = ADDRESS_HQ;

export const SERVICE_AREA = "Województwo opolskie i dolnośląskie";
export const SERVICE_AREA_SHORT = "Opole, Wrocław i okolice";

/** Oficjalna wizytówka Google: Pompy ciepła AJM Sp.z o.o. (Oleśnica). */
export const MAPS_URL = "https://maps.app.goo.gl/Meb5wFKJMG7ojANK7";
export const MAPS_EMBED_URL =
  "https://maps.google.com/maps?q=51.2089668,17.3894881&hl=pl&z=16&output=embed";

/** Obszar działania - lista z feedbacku klienta (kolejność jak na kafelkach). */
export const SERVICE_TOWNS = [
  "Nysa",
  "Opole",
  "Niemodlin",
  "Paczków",
  "Otmuchów",
  "Grodków",
  "Namysłów",
  "Pokój",
  "Oleśnica",
  "Wrocław",
  "Oława",
  "Jelcz-Laskowice",
  "Strzelce Opolskie",
  "Krapkowice",
  "Głuchołazy",
] as const;

/** Kolejność kafelków = SERVICE_TOWNS. */
export function serviceTownsForTiles(): string[] {
  return [...SERVICE_TOWNS];
}

export const SERVICE_COUNTIES = ["opolskie", "dolnośląskie"] as const;
export const NIP = "5562796248";
export const REGON = "521998239";
export const HOURS_WEEKDAYS = "Pn-Sb: 8:00-20:00";
export const HOURS_SUNDAY = "Nd: zamknięte";
export const HOURS = `${HOURS_WEEKDAYS}, ${HOURS_SUNDAY}`;

export const GOOGLE_REVIEWS_URL = "https://maps.app.goo.gl/Meb5wFKJMG7ojANK7";
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
