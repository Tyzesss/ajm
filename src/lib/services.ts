import { REALIZATIONS, SERVICE_AREA } from "./site";

export type Service = {
  slug: string;
  title: string;
  /** Dopełniacz: "Nasze realizacje {titleOf}" */
  titleOf: string;
  /** H1 na podstronie (z frazą lokalną). */
  headline: string;
  /** Title w <title> / OG. */
  seoTitle: string;
  /** Meta description. */
  seoDescription: string;
  short: string;
  intro: string;
  /** Krótki blok „teren działania”. */
  area: string;
  sections: { heading: string; body: string }[];
  bullets: string[];
  faq: { q: string; a: string }[];
  /** Frazy do dopasowania realizacji (title + scope). */
  match: string[];
};

export const SERVICE_PROCESS = [
  {
    step: "01",
    title: "Oględziny i konsultacja",
    body: "Oglądamy budynek, ustalamy potrzeby i kierunek - bez zobowiązań.",
  },
  {
    step: "02",
    title: "Wycena",
    body: "Jasny kosztorys zakresu i urządzeń, bez niespodzianek.",
  },
  {
    step: "03",
    title: "Montaż i uruchomienie",
    body: "Montaż, uruchomienie na miejscu i instrukcja obsługi.",
  },
  {
    step: "04",
    title: "Serwis",
    body: "Przeglądy, regulacja i wsparcie po oddaniu instalacji.",
  },
] as const;

const AREA_DEFAULT = `Działamy w ${SERVICE_AREA}. Dojazd poza listę miejscowości uzgadniamy indywidualnie.`;

export const SERVICES: Service[] = [
  {
    slug: "pompy-ciepla",
    title: "Pompy ciepła",
    titleOf: "pomp ciepła",
    headline: "Pompy ciepła w Namysłowie i Opolu",
    seoTitle: "Pompy ciepła Namysłów i Opole | montaż | AJM Technika",
    seoDescription:
      "Montaż pomp ciepła powietrze-woda w Namysłowie, Opolu i okolicach. Dobór mocy, uruchomienie i serwis. Bezpłatna konsultacja i wycena.",
    short: "Dobór i montaż pomp powietrze-woda: ogrzewanie, chłodzenie i ciepła woda.",
    intro:
      "Dobór i montaż pomp ciepła powietrze-woda dla domów i budynków użytkowych. Niższe koszty ogrzewania, chłodzenie i ciepło użytkowe w jednym systemie, z uruchomieniem i instruktażem. Montaż pomp ciepła Namysłów, Opole i okolice.",
    area: AREA_DEFAULT,
    sections: [
      {
        heading: "Dlaczego warto wybrać pompę ciepła",
        body: "Jedna instalacja ogrzewa zimą i często chłodzi latem. Niższe koszty eksploatacji niż przy wielu tradycyjnych źródłach ciepła, stabilny komfort i dobre sparowanie z podłogówką. Moc liczymy do konkretnego budynku, nie na oko z metrażu.",
      },
      {
        heading: "Technologie, marki i montaż",
        body: "Dobieramy jednostkę zewnętrzną i hydrobox, prowadzimy instalację i automatykę, ustawiamy krzywe grzania. Pracujemy na sprawdzonych urządzeniach (m.in. Midea). Po rozruchu zostajesz z jasną instrukcją i opieką serwisową.",
      },
    ],
    bullets: [
      "Obliczenie mocy do strat ciepła budynku",
      "Jednostka zewnętrzna + hydrobox / bufor",
      "Podłączenie do c.o., podłogówki i CWU",
      "Krzywa grzania i ustawienia automatyki",
      "Uruchomienie z protokołem i instruktażem",
      "Przeglądy sezonowe i wsparcie serwisowe",
    ],
    faq: [
      {
        q: "Czy pompa ciepła ma sens w starszym domu?",
        a: "Często tak, po sprawdzeniu izolacji, grzejników i rozprowadzenia. Czasem doradzamy dopracowanie instalacji albo inne źródło ciepła. Decyzja po oględzinach, nie z katalogu.",
      },
      {
        q: "Jak głośna jest jednostka zewnętrzna?",
        a: "Nowoczesne pompy są znacznie cichsze niż starsze generacje. Lokalizację dobieramy tak, by nie przeszkadzać domownikom i sąsiadom. Omawiamy to na miejscu.",
      },
    ],
    match: ["pomp", "pompa ciepła", "hydrobox"],
  },
  {
    slug: "kotly-pelletowe",
    title: "Kotły pelletowe",
    titleOf: "kotłów pelletowych",
    headline: "Kotły pelletowe w Namysłowie i na Opolszczyźnie",
    seoTitle: "Kotły pelletowe Namysłów | montaż kotła na pellet Opole | AJM Technika",
    seoDescription:
      "Montaż kotłów na pellet w Namysłowie i Opolu. Dobór mocy, zbiornik na paliwo, integracja z CO. Bezpłatna konsultacja i wycena.",
    short: "Kotły na pellet: dobór mocy, montaż i podłączenie do instalacji CO.",
    intro:
      "Montaż kotłów na pellet jako ekologiczne i wygodne źródło ciepła. Pomagamy dobrać moc, zbiornik na paliwo i integrację z instalacją CO. Kotły pelletowe Namysłów, montaż kotła na pellet Opole i okolice.",
    area: AREA_DEFAULT,
    sections: [
      {
        heading: "Dlaczego kocioł na pellet",
        body: "Pellet to odnawialne paliwo z wygodnym, zautomatyzowanym podawaniem. Nowoczesny kocioł utrzymuje komfort przy rozsądnych kosztach eksploatacji i dobrze współpracuje z istniejącą instalacją grzewczą.",
      },
      {
        heading: "Dobór, kotłownia i uruchomienie",
        body: "Dobieramy moc do strat ciepła budynku, planujemy miejsce na kocioł i magazyn pelletu, podłączamy instalację i uruchamiamy urządzenie z ustawieniami na miejscu.",
      },
    ],
    bullets: [
      "Dobór mocy kotła do strat ciepła",
      "Układ kotłowni i magazynu pelletu",
      "Podłączenie do instalacji c.o. i CWU",
      "Automatyka podawania i sterowanie",
      "Pierwszy rozruch i instruktaż obsługi",
      "Czyszczenie, przeglądy i serwis",
    ],
    faq: [
      {
        q: "Pellet czy pompa ciepła?",
        a: "Zależy od budynku, budżetu inwestycyjnego i kosztów energii. Często porównujemy oba warianty na oględzinach i pomagamy wybrać sensowniej dla Twojej sytuacji.",
      },
      {
        q: "Ile miejsca potrzeba na kocioł i pellet?",
        a: "Potrzebujesz kotłowni lub pomieszczenia technicznego oraz miejsca na zbiornik lub magazyn paliwa. Na wizycie mierzymy i proponujemy układ.",
      },
    ],
    match: ["kotł", "kocioł", "pellet", "kotlown"],
  },
  {
    slug: "ogrzewanie-podlogowe",
    title: "Ogrzewanie podłogowe",
    titleOf: "ogrzewania podłogowego",
    headline: "Ogrzewanie podłogowe w Namysłowie",
    seoTitle: "Ogrzewanie podłogowe Namysłów | montaż | AJM Technika",
    seoDescription:
      "Projekt i montaż ogrzewania podłogowego wodnego w Namysłowie i okolicach. Komfort, równomierna temperatura, współpraca z pompą ciepła lub kotłem.",
    short: "Podłogówka wodna: równomierne ciepło, także z pompą ciepła lub kotłem.",
    intro:
      "Projekt i montaż ogrzewania podłogowego wodnego: komfort termiczny, równomierna temperatura, dobre sparowanie z pompą ciepła lub kotłem. Ogrzewanie podłogowe Namysłów, Opole i okolice.",
    area: AREA_DEFAULT,
    sections: [
      {
        heading: "Komfort bez zimnych stref",
        body: "Podłogówka oddaje ciepło całą powierzchnią. Mniej zimnych kątów, swoboda aranżacji bez grzejników na ścianach i bardzo dobre sparowanie z pompą ciepła.",
      },
      {
        heading: "Pętle, rozdzielacz, uruchomienie",
        body: "Układamy pętle, montujemy rozdzielacz i automatykę stref. Po wylewce i sezonowaniu uruchamiamy układ, odpowietrzamy i ustawiamy obiegi.",
      },
    ],
    bullets: [
      "Projekt pętli i rozstawu na pomieszczenia",
      "Izolacja, folia i mocowanie rur",
      "Rozdzielacz ze strefami / siłownikami",
      "Sparowanie z pompą ciepła lub kotłem",
      "Próba ciśnieniowa przed wylewką",
      "Regulacja obiegów po sezonowaniu",
    ],
    faq: [
      {
        q: "Podłogówka tylko do nowego domu?",
        a: "Najczęściej przy wylewce w nowym budownictwie. W modernizacji da się wybrane pomieszczenia lub system dostosowany do warunków. Decyzja po oględzinach.",
      },
      {
        q: "Czy podłogówka wymaga pompy ciepła?",
        a: "Nie, ale z pompą działa szczególnie dobrze. Może też współpracować z kotłem przy odpowiednio niskiej temperaturze zasilania.",
      },
    ],
    match: ["podłogow", "rozdzielacz", "pętl"],
  },
  {
    slug: "klimatyzacja",
    title: "Klimatyzacja",
    titleOf: "klimatyzacji",
    headline: "Klimatyzacja w Namysłowie i Opolu",
    seoTitle: "Klimatyzacja Namysłów | montaż klimatyzacji Opole | AJM Technika",
    seoDescription:
      "Montaż klimatyzacji split i multi-split w Namysłowie i Opolu. Chłodzenie, dogrzewanie, uruchomienie. Bezpłatna wycena.",
    short: "Split i multi-split: chłodzenie latem i dogrzewanie poza sezonem.",
    intro:
      "Klimatyzacja split i multi-split: chłodzenie latem, dogrzewanie w przejściowych porach, montaż z odprowadzeniem skroplin i uruchomieniem. Klimatyzacja Namysłów, montaż klimatyzacji Opole i okolice.",
    area: AREA_DEFAULT,
    sections: [
      {
        heading: "Komfort przez cały rok",
        body: "Dobrze dobrana klima to nie tylko chłód w upały. Wiele jednostek też dogrzewa, gdy na zewnątrz jest jeszcze chłodno. Dobieramy moc do pomieszczeń, nasłonecznienia i układu ścian.",
      },
      {
        heading: "Montaż i uruchomienie",
        body: "Prowadzimy freon i skropliny estetycznie, ustawiamy jednostki i uruchamiamy instalację. Pokazujemy obsługę pilota i podstawowe tryby pracy.",
      },
    ],
    bullets: [
      "Dobór mocy do metrażu i nasłonecznienia",
      "Układy split i multi-split",
      "Trasowanie freonu, skroplin i zasilania",
      "Montaż jednostek wewnętrznych i zewnętrznych",
      "Próżnia, napełnienie i pomiar parametrów",
      "Przeglądy, czyszczenie i serwis",
    ],
    faq: [
      {
        q: "Split czy multi-split?",
        a: "Split: jedno pomieszczenie, jedna jednostka zewnętrzna. Multi: kilka pokoi na jednej zewnętrznej. Dobieramy po metrażu i układzie budynku.",
      },
      {
        q: "Czy klimatyzacja też grzeje?",
        a: "Tak, większość nowoczesnych jednostek pracuje w trybie grzania. To dobra opcja uzupełniająca poza sezonem, nie zawsze zastępstwo pełnego c.o.",
      },
    ],
    match: ["klimatyz", "multi-split", "split"],
  },
  {
    slug: "instalacje-wodne",
    title: "Instalacje wodne",
    titleOf: "instalacji wodnych",
    headline: "Instalacje wodne w Namysłowie",
    seoTitle: "Instalacje wodne Namysłów | montaż | AJM Technika",
    seoDescription:
      "Instalacje wody użytkowej w Namysłowie i okolicach: przyłącza, rozprowadzenie, modernizacje. Bezpłatna konsultacja i wycena.",
    short: "Woda użytkowa: przyłącza, rozprowadzenie i modernizacje.",
    intro:
      "Instalacje wody użytkowej i obiegów w budynkach mieszkalnych oraz użytkowych: od przyłączy po rozprowadzenie i modernizacje. Instalacje wodne Namysłów, Opole i okolice.",
    area: AREA_DEFAULT,
    sections: [
      {
        heading: "Sprawna woda w całym budynku",
        body: "Prawidłowo zaprojektowana instalacja wodna to stabilne ciśnienie, mniej awarii i łatwiejszy serwis. Dobieramy przekroje i trasę pod realne zużycie i układ pomieszczeń.",
      },
      {
        heading: "Nowe instalacje i modernizacje",
        body: "Robimy nowe rozprowadzenia oraz wymiany w istniejących budynkach. Po pracach sprawdzamy szczelność i zostawiamy przejrzysty opis wykonanego zakresu.",
      },
    ],
    bullets: [
      "Projekt rozprowadzenia zimnej i ciepłej wody",
      "Przyłącze, zawory i zabezpieczenia",
      "Wymiana odcinków lub całej instalacji",
      "Dobór średnic pod ciśnienie i zużycie",
      "Próby szczelności przed zabudową",
      "Przygotowanie pod zmiękczacz / filtrację",
    ],
    faq: [
      {
        q: "Czy wymieniacie tylko fragment instalacji?",
        a: "Tak, od punktu w łazience po większy zakres w budynku. Zakres ustalamy po oględzinach.",
      },
      {
        q: "Czy łączycie instalację wodną z uzdatnianiem?",
        a: "Tak. Często przy twardej wodzie od razu planujemy zmiękczanie lub filtrację, żeby chronić instalację i AGD.",
      },
    ],
    match: ["wodn", "woda użytk", "przyłącz"],
  },
  {
    slug: "instalacje-sanitarne",
    title: "Instalacje sanitarne",
    titleOf: "instalacji sanitarnych",
    headline: "Instalacje sanitarne w Namysłowie i Opolu",
    seoTitle: "Instalacje sanitarne Namysłów i Opole | AJM Technika",
    seoDescription:
      "Kompleksowe instalacje sanitarne w Namysłowie i Opolu: kanalizacja, podejścia, piony, modernizacja łazienek w zakresie instalacji.",
    short: "Kanalizacja, podejścia, piony i instalacje pod łazienki.",
    intro:
      "Kompleksowe instalacje sanitarne: kanalizacja, podejścia, wymiana pionów i modernizacja łazienek w zakresie instalacji. Instalacje sanitarne Namysłów, Opole i okolice.",
    area: AREA_DEFAULT,
    sections: [
      {
        heading: "Solidna instalacja sanitarna",
        body: "Dobrze wykonana kanalizacja i podejścia to mniej problemów z odpływami, hałasem i dostępem serwisowym. Planujemy trasę pod komfort użytkowania i przyszłe remonty.",
      },
      {
        heading: "Modernizacje i nowe budynki",
        body: "Pracujemy przy nowych inwestycjach i wymianach w istniejących obiektach. Koordynujemy zakres z innymi instalacjami (woda, ogrzewanie), gdy to potrzebne.",
      },
    ],
    bullets: [
      "Kanalizacja sanitarna i odpływy",
      "Podejścia pod umywalki, WC, prysznic",
      "Wymiana pionów w budynkach istniejących",
      "Syfony, rewizje i dostęp serwisowy",
      "Koordynacja z wodą i ogrzewaniem",
      "Próby szczelności przed glazurą",
    ],
    faq: [
      {
        q: "Czy robicie samą instalację bez wykończenia łazienki?",
        a: "Tak, skupiamy się na instalacji. Wykończenie może wykonać ekipa glazurnicza lub generalny wykonawca.",
      },
      {
        q: "Jak zaplanować prace przy remoncie?",
        a: "Najpierw oględziny i ustalenie kolejności (demontaż, nowe podejścia, próby). Dzięki temu unikasz poprawek pod płytkami.",
      },
    ],
    match: ["sanitar", "kanaliz", "łazien", "pion"],
  },
  {
    slug: "instalacje-przemyslowe",
    title: "Instalacje przemysłowe",
    titleOf: "instalacji przemysłowych",
    headline: "Instalacje przemysłowe w Opolu i Namysłowie",
    seoTitle: "Instalacje przemysłowe Opole i Namysłów | AJM Technika",
    seoDescription:
      "Instalacje dla obiektów firmowych i przemysłowych w Opolu, Namysłowie i regionie. Zakres po oględzinach. Bezpłatna konsultacja.",
    short: "Instalacje dla firm i obiektów przemysłowych. Zakres po oględzinach.",
    intro:
      "Instalacje dla obiektów firmowych i przemysłowych: dobór rozwiązań pod ciągłość pracy, serwis i wymagania obiektu. Zakres ustalany po oględzinach. Instalacje przemysłowe Opole, Namysłów i okolice.",
    area: AREA_DEFAULT,
    sections: [
      {
        heading: "Rozwiązania pod obiekt, nie z katalogu",
        body: "W obiektach firmowych liczy się niezawodność, dostęp serwisowy i jasny zakres prac. Ustalamy potrzeby techniczne na miejscu i proponujemy realny plan montażu.",
      },
      {
        heading: "Od konsultacji do uruchomienia",
        body: "Po konsultacji przygotowujemy wycenę, realizujemy uzgodniony zakres i uruchamiamy instalację. Możliwa dalsza opieka serwisowa według ustaleń.",
      },
    ],
    bullets: [
      "Kotłownie i hydroboxy w obiektach firmowych",
      "Pompy ciepła / klima pod kubaturę hali",
      "Instalacje c.o., CWU i woda użytkowa",
      "Harmonogram prac poza szczytem produkcji",
      "Dokumentacja powykonawcza i rozruch",
      "Umowy serwisowe i przeglądy okresowe",
    ],
    faq: [
      {
        q: "Jakie obiekty obsługujecie?",
        a: "Obiekty firmowe i przemysłowe o różnej skali. Konkretny zakres (HVAC, woda, inne instalacje) ustalamy indywidualnie.",
      },
      {
        q: "Czy pracujecie poza godzinami biurowymi obiektu?",
        a: "Gdy obiekt tego wymaga, planujemy prace tak, by ograniczyć przestoje. Szczegóły w wycenie.",
      },
    ],
    match: ["przemysł", "firmow", "obiekt"],
  },
  {
    slug: "rekuperacja",
    title: "Rekuperacja",
    titleOf: "rekuperacji",
    headline: "Rekuperacja w Namysłowie i Opolu",
    seoTitle: "Rekuperacja Namysłów i Opole | montaż | AJM Technika",
    seoDescription:
      "Wentylacja mechaniczna z odzyskiem ciepła w Namysłowie i Opolu. Świeże powietrze, mniej wilgoci, lepszy komfort. Bezpłatna wycena.",
    short: "Wentylacja z odzyskiem ciepła: świeże powietrze bez strat energii.",
    intro:
      "Wentylacja mechaniczna z odzyskiem ciepła: świeże powietrze bez wychładzania budynku, mniej wilgoci i lepszy komfort. Rekuperacja Namysłów, rekuperacja Opole i okolice.",
    area: AREA_DEFAULT,
    sections: [
      {
        heading: "Świeże powietrze bez strat ciepła",
        body: "W szczelnym budynku bez wentylacji mechanicznej pojawia się wilgoć i „stare” powietrze. Rekuperator wymienia powietrze i odzyskuje ciepło z wywiewu.",
      },
      {
        heading: "Centrala, kanały, regulacja",
        body: "Dobieramy centralę, prowadzimy kanały, czerpnie i wyrzutnie. Po montażu regulujemy przepływy i pokazujemy wymianę filtrów.",
      },
    ],
    bullets: [
      "Dobór centrali do kubatury i liczby osób",
      "Trasy kanałów, anemostaty, czerpnia / wyrzutnia",
      "Wymiennik ciepła (odzysk z wywiewu)",
      "Filtry i łatwy dostęp do wymiany",
      "Regulacja przepływów na pomieszczenia",
      "Pomiary po rozruchu i instruktaż filtrów",
    ],
    faq: [
      {
        q: "Czy rekuperacja ma sens w starym domu?",
        a: "Ma, jeśli dom jest ocieplony i szczelny albo planujesz termomodernizację. W nieszczelnym budynku najpierw izolacja, potem wentylacja mechaniczna.",
      },
      {
        q: "Jak często wymieniać filtry?",
        a: "Zwykle co 3-6 miesięcy, zależnie od lokalizacji. Pokazujemy to przy odbiorze.",
      },
    ],
    match: ["rekuper", "wentylac", "centrala"],
  },
  {
    slug: "uzdatnianie-wody",
    title: "Uzdatnianie wody",
    titleOf: "uzdatniania wody",
    headline: "Uzdatnianie wody w Namysłowie i Opolu",
    seoTitle: "Uzdatnianie wody Namysłów | zmiękczacz wody Opole | AJM Technika",
    seoDescription:
      "Stacje uzdatniania, zmiękczanie i filtracja w Namysłowie i Opolu. Ochrona instalacji i AGD, lepsza woda w domu. Bezpłatna konsultacja.",
    short: "Zmiękczanie i filtracja: ochrona instalacji, AGD i lepsza woda.",
    intro:
      "Stacje uzdatniania, zmiękczanie i filtracja: ochrona instalacji i AGD, lepsza jakość wody w domu. Uzdatnianie wody Namysłów, zmiękczacz wody Opole i okolice.",
    area: AREA_DEFAULT,
    sections: [
      {
        heading: "Dlaczego uzdatniać wodę",
        body: "Twarda woda zostawia kamień, skraca życie bojlerów, baterii i sprzętów. Dobrze dobrane uzdatnianie ogranicza te problemy i poprawia jakość wody w kranie.",
      },
      {
        heading: "Dobór stacji i montaż",
        body: "Na podstawie parametrów wody i zużycia dobieramy zmiękczacz lub filtrację, montujemy na instalacji i uruchamiamy urządzenie z instruktażem obsługi.",
      },
    ],
    bullets: [
      "Dobór na podstawie twardości i zużycia",
      "Zmiękczacze, filtry i stacje uzdatniania",
      "Montaż na instalacji zimnej wody",
      "Ustawienie regeneracji i instruktaż soli",
      "Ochrona bojlera, baterii i AGD",
      "Serwis, wymiana wkładów i przeglądy",
    ],
    faq: [
      {
        q: "Czy najpierw trzeba zbadać wodę?",
        a: "Przy doborze zmiękczacza i filtracji warto znać twardość i podstawowe parametry. Pomożemy ustalić, co jest potrzebne w Twoim przypadku.",
      },
      {
        q: "Czy uzdatnianie łączycie z nową instalacją wodną?",
        a: "Tak, często planujemy to razem przy modernizacji lub nowym rozprowadzeniu wody.",
      },
    ],
    match: ["uzdatnian", "zmiękcz", "filtr"],
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
