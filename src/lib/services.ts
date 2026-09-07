import { REALIZATIONS } from "./site";

export type Service = {
  slug: string;
  title: string;
  /** Dopełniacz: "Nasze realizacje {titleOf}" */
  titleOf: string;
  short: string;
  intro: string;
  sections: { heading: string; body: string }[];
  bullets: string[];
  faq: { q: string; a: string }[];
  /** Frazy do dopasowania realizacji (title + scope). */
  match: string[];
};

export const SERVICE_PROCESS = [
  {
    step: "01",
    title: "Bezpłatna konsultacja",
    body: "Rozmawiamy o budynku, zużyciu energii i oczekiwaniach. Pierwsza wizyta lub audyt zdalny nic nie kosztują.",
  },
  {
    step: "02",
    title: "Dobór i wycena",
    body: "Dobieramy moc urządzeń i przygotowujemy jasny kosztorys - bez zbędnych pozycji i niespodzianek.",
  },
  {
    step: "03",
    title: "Montaż i uruchomienie",
    body: "Montujemy instalację, uruchamiamy ją na miejscu i zostawiamy instrukcję obsługi oraz warunki gwarancji.",
  },
] as const;

export const SERVICES: Service[] = [
  {
    slug: "pompy-ciepla",
    title: "Pompy ciepła",
    titleOf: "pomp ciepła",
    short: "Ogrzewanie i chłodzenie w jednym systemie. Montaż z gwarancją i pełnym doborem mocy.",
    intro:
      "Montujemy pompy ciepła powietrze-woda do ogrzewania domu i ciepłej wody. Dobór mocy po audycie, montaż w 2-3 dni, uruchomienie i ustawienia na miejscu.",
    sections: [
      {
        heading: "Dlaczego warto wybrać pompę ciepła",
        body: "Jedna instalacja ogrzewa zimą i często chłodzi latem. Niższe rachunki niż przy gazie czy oleju, stabilna temperatura i możliwość połączenia z podłogówką. Moc liczymy do konkretnego budynku - nie z metrażu „na oko”.",
      },
      {
        heading: "Dobór, montaż i opieka",
        body: "Dobieramy jednostkę zewnętrzną i hydrobox, prowadzimy rury i automatykę, ustawiamy krzywe grzania. Po rozruchu zostajesz z jasną instrukcją. Serwis gwarancyjny i pogwarancyjny robimy tą samą ekipą.",
      },
    ],
    bullets: [
      "Bezpłatna konsultacja techniczna z doradcą",
      "Bezpłatna wycena po oględzinach lub dokumentacji",
      "Dobór mocy do budynku i izolacji",
      "Montaż, uruchomienie i ustawienia",
      "Serwis i opieka po montażu",
      "Możliwość połączenia z kotłem i podłogówką",
    ],
    faq: [
      {
        q: "Czy pompa ciepła nadaje się do starego domu?",
        a: "Często tak - po sprawdzeniu izolacji, grzejników i rozprowadzenia. Czasem doradzamy dopracowanie instalacji albo hybrydę z kotłem. Decyzja po audycie, nie z katalogu.",
      },
      {
        q: "Ile trwa montaż?",
        a: "Zwykle 2-3 dni robocze przy typowym domu jednorodzinnym. Termin zależy od zakresu (sama pompa, podłogówka, przebudowa kotłowni).",
      },
    ],
    match: ["pomp", "pompa ciepła", "hydrobox"],
  },
  {
    slug: "klimatyzacja",
    title: "Klimatyzacja",
    titleOf: "klimatyzacji",
    short: "Split i Multi-split dla domu i biura. Ciche jednostki i estetyczny montaż.",
    intro:
      "Projektujemy i montujemy klimatyzację split oraz multi-split. Dobór mocy do pomieszczeń, estetyczny montaż i cicha praca - w domu i w biurze.",
    sections: [
      {
        heading: "Komfort latem i zimą",
        body: "Nowoczesne jednostki chłodzą, grzeją i osuszają powietrze. Multi-split pozwala obsłużyć kilka pomieszczeń jedną jednostką zewnętrzną. Dobieramy markę i moc tak, żeby nie było ani za głośno, ani za słabo.",
      },
      {
        heading: "Montaż bez chaosu",
        body: "Prowadzimy freon, skropliny i zasilanie tak, żeby elewacja i wnętrze wyglądały czysto. Po montażu sprawdzamy szczelność, uruchamiamy układ i pokazujemy sterowanie.",
      },
    ],
    bullets: [
      "Split i Multi-split",
      "Dobór mocy do pomieszczeń",
      "Ciche jednostki premium",
      "Estetyczny montaż freonu i skroplin",
      "Bezpłatna wycena",
      "Serwis i przeglądy okresowe",
    ],
    faq: [
      {
        q: "Split czy multi-split?",
        a: "Split - jedno pomieszczenie, jedna jednostka zewnętrzna. Multi - kilka pokoi na jednej zewnętrznej. Dobieramy po metrażu, nasłonecznieniu i układzie ścian.",
      },
      {
        q: "Czy klimatyzacja też grzeje?",
        a: "Tak, większość nowoczesnych jednostek pracuje w trybie grzania. To dobra uzupełniająca opcja poza sezonem, nie zawsze zastępstwo pełnego c.o.",
      },
    ],
    match: ["klimatyz", "multi-split"],
  },
  {
    slug: "kotly",
    title: "Kotły gazowe",
    titleOf: "kotłów gazowych",
    short: "Kondensacyjne kotły gazowe do c.o. i ciepłej wody. Dobór, montaż i uruchomienie.",
    intro:
      "Montujemy kotły gazowe kondensacyjne do ogrzewania domu i ciepłej wody. Dobór mocy do budynku, podłączenie do instalacji i uruchomienie z ustawieniami na miejscu.",
    sections: [
      {
        heading: "Kiedy kocioł ma sens",
        body: "Gdy masz przyłącze gazu i chcesz sprawdzone, przewidywalne ogrzewanie. Nowoczesny kocioł kondensacyjny jest cichy, kompaktowy i dobrze współpracuje z grzejnikami albo podłogówką. Dobieramy moc do realnych strat ciepła budynku.",
      },
      {
        heading: "Montaż i kotłownia",
        body: "Wymieniamy stary kocioł albo stawiamy nową kotłownię: podłączenia, spalinę, zawory bezpieczeństwa, automatykę. Po uruchomieniu zostawiamy instrukcję i jasne warunki gwarancji.",
      },
    ],
    bullets: [
      "Kotły kondensacyjne sprawdzonych marek",
      "Dobór mocy do budynku",
      "Wymiana starego kotła lub nowa kotłownia",
      "Podłączenie do c.o. i ciepłej wody",
      "Uruchomienie i ustawienia",
      "Bezpłatna wycena i konsultacja",
    ],
    faq: [
      {
        q: "Kocioł czy pompa ciepła?",
        a: "Zależy od przyłącza gazu, izolacji budynku i rachunków. Czasem hybrydę. Decyzja po audycie, nie z folderu.",
      },
      {
        q: "Ile trwa wymiana kotła?",
        a: "Przy typowej wymianie 1-2 dni. Nowa kotłownia albo przebudowa instalacji może potrwać dłużej.",
      },
    ],
    match: ["kotł", "kocioł", "gazow", "kotlown"],
  },
  {
    slug: "ogrzewanie-podlogowe",
    title: "Ogrzewanie podłogowe",
    titleOf: "ogrzewania podłogowego",
    short: "Komfort i oszczędność. Równomierne ciepło w całym domu przy niższych kosztach.",
    intro:
      "Montujemy ogrzewanie podłogowe mokre i systemy suche. Równomierne ciepło, niższa temperatura zasilania - idealnie z pompą ciepła.",
    sections: [
      {
        heading: "Komfort bez grzejników na ścianach",
        body: "Podłogówka oddaje ciepło całą powierzchnią. Brak „zimnych stref”, mniej kurzu unoszonego przy grzejnikach i swoboda aranżacji. Dobrze działa z pompą ciepła dzięki niskiej temperaturze wody.",
      },
      {
        heading: "Rozdzielacz, pętle, uruchomienie",
        body: "Układamy pętle, montujemy rozdzielacz, izolację i wylewkę albo system suchy. Po zalaniu i sezonowaniu uruchamiamy układ, odpowietrzamy i ustawiamy strefy.",
      },
    ],
    bullets: [
      "System mokry i suchy",
      "Dobór rozstawu pętli do pomieszczeń",
      "Rozdzielacze i automatyka strefowa",
      "Współpraca z pompą ciepła",
      "Montaż w nowym budownictwie i modernizacjach",
      "Bezpłatna wycena",
    ],
    faq: [
      {
        q: "Podłogówka tylko do nowego domu?",
        a: "Najczęściej tak - przy wylewce. W modernizacji da się iść w system suchy albo wybrane pomieszczenia. Decyzja po oględzinach.",
      },
      {
        q: "Czy podłogówka wymaga pompy ciepła?",
        a: "Nie, ale z pompą działa szczególnie dobrze. Może też iść z kotłem kondensacyjnym przy odpowiednio niskiej temperaturze zasilania.",
      },
    ],
    match: ["podłogow", "rozdzielacz", "pętl"],
  },
  {
    slug: "rekuperacja",
    title: "Rekuperacja",
    titleOf: "rekuperacji",
    short: "Czyste powietrze bez strat ciepła. Filtracja pyłów i stała wymiana powietrza.",
    intro:
      "Projektujemy i montujemy rekuperację z odzyskiem ciepła. Stała wymiana powietrza, filtracja pyłów i niższe straty energii w szczelnym domu.",
    sections: [
      {
        heading: "Świeże powietrze bez otwierania okien",
        body: "W szczelnym budynku bez wentylacji mechanicznej pojawia się wilgoć i „stare” powietrze. Rekuperator wymienia powietrze i odzyskuje ciepło z wywiewu, więc nie ogrzewasz ulicy.",
      },
      {
        heading: "Projekt kanałów i centrala",
        body: "Dobieramy centralę, prowadzimy kanały, czerpnie i wyrzutnie. Po montażu regulujemy przepływy i pokazujemy wymianę filtrów - to prosta czynność co kilka miesięcy.",
      },
    ],
    bullets: [
      "Dobór centrali do kubatury",
      "Kanały, czerpnie i wyrzutnie",
      "Filtracja pyłów i pyłków",
      "Odzysk ciepła z wywiewu",
      "Regulacja przepływów po montażu",
      "Bezpłatna konsultacja i wycena",
    ],
    faq: [
      {
        q: "Czy rekuperacja ma sens w starym domu?",
        a: "Ma, jeśli dom jest już ocieplony i szczelny albo planujesz termomodernizację. W dziurawym budynku najpierw izolacja, potem wentylacja mechaniczna.",
      },
      {
        q: "Jak często wymieniać filtry?",
        a: "Zwykle co 3-6 miesięcy, zależnie od lokalizacji i jakości powietrza. Pokazujemy to przy odbiorze.",
      },
    ],
    match: ["rekuper", "wentylac", "centrala"],
  },
  {
    slug: "serwis",
    title: "Serwis i konserwacja",
    titleOf: "serwisów",
    short: "Szybka reakcja, przeglądy okresowe oraz naprawy gwarancyjne i pogwarancyjne.",
    intro:
      "Serwisujemy pompy ciepła, kotły, klimatyzację i rekuperację. Przeglądy okresowe, diagnostyka i naprawy - gwarancyjne oraz pogwarancyjne.",
    sections: [
      {
        heading: "Lepiej przegląd niż awaria w sezonie",
        body: "Regularny przegląd przed zimą i latem ogranicza ryzyko postoju pompy albo klimy w szczycie sezonu. Sprawdzamy ciśnienia, filtry, skropliny, elektronikę i historię błędów.",
      },
      {
        heading: "Jedna ekipa od montażu do serwisu",
        body: "Znasz ten sam zespół, który montował instalację - albo wdrażamy się w cudzy montaż po diagnostyce. Jasna wycena naprawy przed startem prac.",
      },
    ],
    bullets: [
      "Przeglądy okresowe HVAC i kotłów",
      "Diagnostyka i usuwanie usterek",
      "Czyszczenie i wymiana filtrów",
      "Naprawy gwarancyjne i pogwarancyjne",
      "Szybka reakcja w sezonie grzewczym",
      "Umowy serwisowe na życzenie",
    ],
    faq: [
      {
        q: "Serwisujecie tylko własne montaże?",
        a: "Nie. Bierzemy też instalacje po innych firmach - po oględzinach i diagnostyce.",
      },
      {
        q: "Jak często robić przegląd pompy ciepła?",
        a: "Zalecamy raz w roku, najlepiej przed sezonem grzewczym. Klimatyzację - przed latem.",
      },
    ],
    match: ["serwis", "przegląd", "konserwac", "napraw"],
  },
];

export function getService(slug: string) {
  return SERVICES.find((s) => s.slug === slug);
}

export function getRelatedRealizations(slug: string, limit = 4) {
  const service = getService(slug);
  if (!service?.match.length) return [];
  const keys = service.match.map((k) => k.toLowerCase());
  return REALIZATIONS.filter((r) => {
    const hay = `${r.title} ${r.scope}`.toLowerCase();
    return keys.some((k) => hay.includes(k));
  }).slice(0, limit);
}
