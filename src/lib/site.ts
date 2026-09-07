export const SITE_NAME = "KLIMATPRO";
export const SITE_TITLE = "KLIMATPRO - pompy ciepła, klimatyzacja, kotły";
export const COMPANY_LEGAL_NAME = "KLIMATPRO Instalacje Sp. z o.o.";
export const EMAIL = "kontakt@klimatpro.pl";
export const EMAIL_HREF = `mailto:${EMAIL}`;

export const PHONE_DISPLAY = "515 479 625";
export const PHONE_E164 = "+48515479625";
export const PHONE_HREF = `tel:${PHONE_E164}`;

const WHATSAPP_TEXT = encodeURIComponent("Dzień dobry, chciałbym zgłosić zlecenie serwisowe.");
export const WHATSAPP_HREF = `https://wa.me/${PHONE_E164.replace("+", "")}?text=${WHATSAPP_TEXT}`;

export const ADDRESS = "ul. Przykładowa 1, 00-000 Twoje miasto";
export const SERVICE_AREA = "Twoje miasto i okolice, dojazd do klienta";
export const NIP = "678-000-12-34";
export const REGON = "123456789";
export const HOURS = "Pn - Pt: 8:00 - 17:00";

export const MAPS_URL = "https://maps.google.com/?q=ul.+Przyk%C5%82adowa+1,+Twoje+miasto";
export const GOOGLE_REVIEWS_URL = MAPS_URL;
export const GOOGLE_RATING = "4.9";
export const GOOGLE_REVIEW_COUNT = 47;

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
    title: "Kocioł gazowy kondensacyjny",
    year: "2025",
    scope: "Montaż kotła i uruchomienie kotłowni w domu jednorodzinnym.",
  },
  {
    title: "Rekuperacja z odzyskiem ciepła",
    year: "2024",
    scope: "Centrala rekuperacji i zaizolowane kanały w pomieszczeniu technicznym.",
  },
] as const;
