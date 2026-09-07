import workPompaPowietrzeWoda from "@/assets/work-pompa-powietrze-woda.png";
import workKotlowniaHydrobox from "@/assets/work-kotlownia-hydrobox.png";
import workPompaUruchomienie from "@/assets/work-pompa-uruchomienie.png";
import workPompaZasobnik from "@/assets/work-pompa-zasobnik.png";
import workAcSplit from "@/assets/work-ac-split-sypialnia.png";
import workAcMultisplit from "@/assets/work-ac-multisplit.png";
import workAcSalon from "@/assets/work-ac-salon.png";
import workAcBiuro from "@/assets/work-ac-biuro.png";
import workKotly from "@/assets/service-kotly.png";
import workRozdzielacz from "@/assets/work-rozdzielacz-podlogowki.png";
import workPodlogoweAutomatyka from "@/assets/work-podlogowe-automatyka.png";
import workPodlogowePompa from "@/assets/work-podlogowe-pompa.png";
import workPodlogowePetle from "@/assets/work-podlogowe-petle.png";
import workRecupCentrala from "@/assets/work-recup-centrala.png";
import workRecupKanaly from "@/assets/work-recup-kanaly.png";
import workRecupNowyDom from "@/assets/work-recup-nowy-dom.png";
import workRecupAnemostat from "@/assets/work-recup-anemostat.png";
import workSerwisPompa from "@/assets/work-serwis-pompa.png";
import workSerwisKlima from "@/assets/work-serwis-klima.png";
import workSerwisOutdoor from "@/assets/work-serwis-outdoor.png";
import workSerwisRecup from "@/assets/work-serwis-recup.png";

export type RealizationCard = {
  title: string;
  year: string;
  scope: string;
  image: string;
  alt: string;
};

/** Unique curated cards per service — no cross-service reuse / keyword mixing. */
const BY_SERVICE: Record<string, RealizationCard[]> = {
  "pompy-ciepla": [
    {
      title: "Pompa ciepła powietrze-woda",
      year: "2025",
      scope: "Jednostka zewnętrzna przy domu jednorodzinnym.",
      image: workPompaPowietrzeWoda,
      alt: "Jednostka zewnętrzna pompy ciepła przy domu",
    },
    {
      title: "Kotłownia z hydroboxem",
      year: "2025",
      scope: "Hydrobox i rozdzielacz podłogówki po montażu pompy ciepła.",
      image: workKotlowniaHydrobox,
      alt: "Hydrobox pompy ciepła i rozdzielacz w kotłowni",
    },
    {
      title: "Zasobnik CWU i hydrobox",
      year: "2024",
      scope: "Zasobnik ciepłej wody i hydrobox w pomieszczeniu technicznym.",
      image: workPompaZasobnik,
      alt: "Hydrobox i zasobnik CWU w kotłowni",
    },
    {
      title: "Uruchomienie instalacji",
      year: "2024",
      scope: "Uruchomienie i ustawienie krzywych grzania po montażu.",
      image: workPompaUruchomienie,
      alt: "Jednostka zewnętrzna pompy ciepła po uruchomieniu",
    },
  ],
  klimatyzacja: [
    {
      title: "Klimatyzacja split",
      year: "2024",
      scope: "Jednostka ścienna w sypialni.",
      image: workAcSplit,
      alt: "Klimatyzator ścienny w sypialni",
    },
    {
      title: "Multi-split na elewacji",
      year: "2024",
      scope: "Jednostki zewnętrzne multi-split przy domu.",
      image: workAcMultisplit,
      alt: "Jednostki zewnętrzne klimatyzacji na elewacji",
    },
    {
      title: "Klima w salonie",
      year: "2025",
      scope: "Estetyczny montaż freonu i skroplin w salonie.",
      image: workAcSalon,
      alt: "Klimatyzacja split w nowoczesnym salonie",
    },
    {
      title: "Klimatyzacja w biurze",
      year: "2025",
      scope: "Cicha jednostka ścienna w przestrzeni biurowej.",
      image: workAcBiuro,
      alt: "Klimatyzator ścienny w biurze",
    },
  ],
  kotly: [
    {
      title: "Kocioł kondensacyjny",
      year: "2025",
      scope: "Montaż kotła gazowego w kotłowni domu jednorodzinnego.",
      image: workKotly,
      alt: "Nowoczesny kocioł gazowy kondensacyjny w kotłowni",
    },
    {
      title: "Kotłownia po montażu",
      year: "2025",
      scope: "Urządzenie grzewcze i orurowanie w pomieszczeniu technicznym.",
      image: workKotlowniaHydrobox,
      alt: "Kotłownia z urządzeniem grzewczym po montażu",
    },
    {
      title: "Zasobnik i instalacja",
      year: "2024",
      scope: "Zasobnik c.w.u. i podłączenia przy kotle.",
      image: workPompaZasobnik,
      alt: "Zasobnik i instalacja w pomieszczeniu technicznym",
    },
    {
      title: "Uruchomienie kotłowni",
      year: "2024",
      scope: "Rozruch i ustawienia po montażu kotła.",
      image: workPompaUruchomienie,
      alt: "Uruchomienie instalacji w kotłowni",
    },
  ],
  "ogrzewanie-podlogowe": [
    {
      title: "Rozdzielacz podłogówki",
      year: "2025",
      scope: "Rozdzielacz i pętle w kotłowni.",
      image: workRozdzielacz,
      alt: "Rozdzielacz ogrzewania podłogowego",
    },
    {
      title: "Pętle przed wylewką",
      year: "2025",
      scope: "Ułożenie pętli na izolacji przed zalaniem.",
      image: workPodlogowePetle,
      alt: "Pętle ogrzewania podłogowego przed wylewką",
    },
    {
      title: "Rozdzielacz i automatyka",
      year: "2024",
      scope: "Strefy grzewcze i uruchomienie po wylewce.",
      image: workPodlogoweAutomatyka,
      alt: "Rozdzielacz i automatyka podłogówki",
    },
    {
      title: "Podłogówka z pompą ciepła",
      year: "2025",
      scope: "Niskotemperaturowy układ z hydroboxem.",
      image: workPodlogowePompa,
      alt: "Hydrobox pompy ciepła z rozdzielaczem podłogówki",
    },
  ],
  rekuperacja: [
    {
      title: "Centrala rekuperacji",
      year: "2024",
      scope: "Centrala i kanały w pomieszczeniu technicznym.",
      image: workRecupCentrala,
      alt: "Centrala rekuperacji z kanałami",
    },
    {
      title: "Montaż kanałów i czerpni",
      year: "2025",
      scope: "Prowadzenie kanałów i regulacja przepływów.",
      image: workRecupKanaly,
      alt: "Kanały i czerpnia rekuperacji po montażu",
    },
    {
      title: "Anemostaty nawiewne",
      year: "2025",
      scope: "Nawiewniki sufitowe po regulacji instalacji.",
      image: workRecupAnemostat,
      alt: "Anemostat nawiewny rekuperacji w suficie",
    },
    {
      title: "Rekuperacja w nowym domu",
      year: "2025",
      scope: "Dobór centrali do kubatury i filtracja powietrza.",
      image: workRecupNowyDom,
      alt: "Centrala rekuperacji w nowym domu",
    },
  ],
  serwis: [
    {
      title: "Przegląd pompy ciepła",
      year: "2025",
      scope: "Kontrola jednostki zewnętrznej i parametrów pracy.",
      image: workSerwisPompa,
      alt: "Przegląd jednostki zewnętrznej pompy ciepła",
    },
    {
      title: "Serwis klimatyzacji",
      year: "2025",
      scope: "Czyszczenie i przegląd jednostek split.",
      image: workSerwisKlima,
      alt: "Serwis jednostki klimatyzacji split",
    },
    {
      title: "Przegląd jednostek zewnętrznych",
      year: "2024",
      scope: "Kontrola freonu, skroplin i automatyki.",
      image: workSerwisOutdoor,
      alt: "Przegląd jednostek zewnętrznych klimatyzacji",
    },
    {
      title: "Serwis rekuperacji",
      year: "2025",
      scope: "Wymiana filtrów i przegląd centrali rekuperacji.",
      image: workSerwisRecup,
      alt: "Serwis centrali rekuperacji i filtrów",
    },
  ],
};

export function getServiceRealizationCards(slug: string): RealizationCard[] {
  return (BY_SERVICE[slug] ?? []).slice(0, 4);
}
