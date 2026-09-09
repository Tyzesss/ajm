# AJM Technika — brief personalizacji (demo → klient)

Status: **Etap 1–4 wdrożone** (rebrand, usługi, sekcje home, treści/SEO podstron usług). Kolejne (Etap 5): mapa, GA4, sitemap, realny formularz.

Źródła: ustalenia mailowe, [Google Maps](https://maps.app.goo.gl/ksyT4XjYrnGUiFpv6), logo lokalne, KRS / stara strona, decyzje z czatu.

---

## Decyzje zamknięte

| #   | Temat                 | Decyzja                                                                                                                   |
| --- | --------------------- | ------------------------------------------------------------------------------------------------------------------------- |
| 1   | Adres na stronie      | **Namysłów** — Łączańska 22C, 46-100 Namysłów                                                                             |
| 2   | Godziny               | Z wizytówki / agregatorów Maps: **Pn–Sb 8:00–20:00, Nd zamknięte** (do weryfikacji przy wdrożeniu, jeśli Maps się zmieni) |
| 3   | Obszar / miejscowości | Poniższa lista **10–15 sąsiednich** — **robocza, do wglądu i zmiany**                                                     |
| 4   | Treści                | Drafty poniżej — wg usług z ustaleń + wyszukiwań branżowych                                                               |
| 5   | Logotypy marek        | Przykładowe (+ **Midea** obowiązkowo) — do podmiany na oficjalne                                                          |
| 6   | Opinie Google         | **Wolno cytować** na stronie                                                                                              |
| 7   | NIP / faktura         | **Tak** — AJM Sp. z o.o., NIP **5562796248**                                                                              |
| 8   | Zdjęcia               | **Podmienione na zdjęcia klienta** (`src/assets/ajm-*.jpg`) — home Realizacje + karty na podstronach usług                |

Dodatkowo z ustaleń mailowych:

- Bez bloga, bez panelu CMS.
- Realizacje i Kontakt na home (osobne podstrony tylko jeśli później uznamy, że trzeba).
- Usługi = osobne podstrony.
- Cena / czas / hosting — poza zakresem tego briefu technicznego.

---

## Dane firmy (do `site.ts` / stopki / SEO)

| Pole                      | Wartość                                                                                       |
| ------------------------- | --------------------------------------------------------------------------------------------- |
| Marka (UI)                | **AJM Technika**                                                                              |
| Nazwa wizytówki Google    | Pompy ciepła AJM Namysłów                                                                     |
| Nazwa prawna              | **AJM Sp. z o.o.**                                                                            |
| NIP                       | 5562796248                                                                                    |
| REGON                     | 521998239                                                                                     |
| KRS                       | 0000971177                                                                                    |
| Adres (strona + mapa)     | Łączańska 22C, 46-100 Namysłów                                                                |
| Telefon                   | 793 570 967 (`+48793570967`)                                                                  |
| E-mail                    | kontakt@ajmtechnika.pl                                                                        |
| Godziny                   | Pn–Sb 8:00–20:00, Nd zamknięte                                                                |
| Maps / opinie             | https://maps.app.goo.gl/ksyT4XjYrnGUiFpv6                                                     |
| Ocena (orientacyjnie)     | 5.0 / 5 (kilka opinii Google)                                                                 |
| Logo                      | `Downloads/Logo AJMTechnika/` → preferowane **PNG** (wordmark AJM niebieski + Technika szary) |
| Stara strona (referencja) | https://ajmtechnika.pl/                                                                       |

Uwaga: w KRS siedziba to Oleśnica (Lwowska 31/101). **Na stronie kontaktowej używamy Namysłowa** (decyzja). Siedzibę KRS można ewentualnie wspomnieć w polityce prywatności / stopce prawnej — do decyzji przy wdrożeniu.

---

## Obszar działania — lista robocza (DO WGLĄDU / ZMIANY)

Fokus: **woj. opolskie**, baza **Namysłów** + sąsiedztwo.

1. Namysłów
2. Byczyna
3. Wołczyn
4. Kluczbork
5. Domaszowice
6. Świerczów
7. Pokój
8. Murów
9. Brzeg
10. Lewin Brzeski
11. Opole
12. Oława
13. Bierutów
14. Oleśnica
15. Dobrzeń Wielki

**Powiaty do wzmianki (roboczo):** namysłowski, kluczborski, brzeski, opolski (+ dojazd w regionie).

**Frazy lokalne (przykłady SEO):**  
„montaż pomp ciepła Namysłów”, „pompy ciepła Opole”, „klimatyzacja Namysłów”, „kotły pelletowe woj. opolskie”, „rekuperacja Brzeg” itd. — wpinane w H1/H2 i body podstron usług.

---

## Usługi (lista docelowa z ustaleń)

Każda = osobny URL `/uslugi/{slug}`.

| Usługa                 | Proponowany slug         |
| ---------------------- | ------------------------ |
| Pompy ciepła           | `pompy-ciepla`           |
| Kotły pelletowe        | `kotly-pelletowe`        |
| Ogrzewanie podłogowe   | `ogrzewanie-podlogowe`   |
| Klimatyzacja           | `klimatyzacja`           |
| Instalacje wodne       | `instalacje-wodne`       |
| Instalacje sanitarne   | `instalacje-sanitarne`   |
| Instalacje przemysłowe | `instalacje-przemyslowe` |
| Rekuperacja            | `rekuperacja`            |
| Uzdatnianie wody       | `uzdatnianie-wody`       |

**Do usunięcia z dema:** „Kotły gazowe”, osobna podstrona „Serwis” (serwis zostaje jako krok procesu na podstronach).

### Schemat podstrony usługi (z ustaleń)

1. Nagłówek + krótki opis + CTA wycena / telefon
2. Opisy: dlaczego warto, technologie/marki, zdjęcia
3. Zakres prac (punkty) + teren działania
4. Proces: oględziny i bezpłatna konsultacja → wycena → montaż i uruchomienie → serwis
5. Realizacje tej usługi
6. FAQ usługi
7. Kontakt / formularz wyceny + telefon
8. Odnośniki do pozostałych usług

---

## Strona główna — sekcje (kolejność docelowa)

1. Hero
2. **O nas**
3. Usługi (skrót + linki)
4. Realizacje (zdjęcie, opis, lokalizacja, rodzaj instalacji) — zdjęcia klienta AJM
5. Opinie (cytaty Google OK)
6. **Dlaczego my**
7. Marki i producenci (przykładowe + Midea)
8. FAQ (ogólne)
9. **Obszar działania**
10. Kontakt + Bezpłatna wycena (mapa Namysłów, Zadzwoń/Napisz)

---

## Treści — drafty (do wglądu / edycji)

### Hero (propozycja)

- **Marka:** AJM Technika
- **Nagłówek:** Komfortowe instalacje HVAC w Namysłowie i na Opolszczyźnie
- **Lead:** Pompy ciepła, klimatyzacja, kotły pelletowe, rekuperacja i instalacje wodno-sanitarne — od doradztwa po montaż i serwis.
- **CTA:** Bezpłatna wycena · Zadzwoń 793 570 967

### O nas

AJM Technika to lokalny partner instalacji grzewczych, chłodniczych i sanitarnych z bazą w Namysłowie. Pomagamy właścicielom domów i firmom dobrać rozwiązanie dopasowane do budynku, budżetu i kosztów eksploatacji — od pompy ciepła i klimatyzacji, przez ogrzewanie podłogowe i rekuperację, po instalacje wodne, sanitarne oraz uzdatnianie wody.

Stawiamy na czytelny proces: oględziny i bezpłatna konsultacja, konkretna wycena, solidny montaż z uruchomieniem oraz wsparcie serwisowe. Działamy na terenie województwa opolskiego i w sąsiednich miejscowościach.

### Dlaczego my

1. **Kompleksowa oferta** — ogrzewanie, chłodzenie, wentylacja i woda w jednym zespole.
2. **Bezpłatna konsultacja i wycena** — najpierw oględziny, potem decyzja.
3. **Lokalny dojazd** — Namysłów, Opole i okolice.
4. **Sprawdzone marki** — urządzenia znanych producentów, m.in. Midea.
5. **Montaż i uruchomienie** — nie zostawiamy instalacji „w połowie”.
6. **Serwis i opieka** — wsparcie także po oddaniu instalacji.

### FAQ — ogólne (home)

**Czy dojazd i pierwsza konsultacja są płatne?**  
Pierwsze oględziny i konsultacja w naszym obszarze działania są bezpłatne. Na ich podstawie przygotowujemy wycenę.

**Jak długo trwa montaż pompy ciepła lub klimatyzacji?**  
Zależy od zakresu i przygotowania budynku. Po oględzinach podajemy realistyczny termin — od kilku dni roboczych przy typowych instalacjach.

**Czy pomagacie z dofinansowaniem (np. Czyste Powietrze)?**  
Doradzamy przy wyborze rozwiązania pod kątem programów wsparcia. Szczegóły aktualnych programów omawiamy indywidualnie.

**Na jakim terenie działacie?**  
Głównie województwo opolskie — Namysłów, Opole, Kluczbork, Brzeg i okoliczne miejscowości. Szczegóły w sekcji Obszar działania.

**Czy robicie też serwis istniejących instalacji?**  
Tak — przeglądy, uruchomienia i wsparcie pogwarancyjne w ramach oferty serwisowej powiązanej z montażami.

### Opinie (cytaty Google — dozwolone)

Źródło: wizytówka [Pompy ciepła AJM Namysłów](https://maps.app.goo.gl/ksyT4XjYrnGUiFpv6). Ocena zbiorcza ok. **5.0**. Przycisk: „Zobacz wszystkie opinie” → ten sam link.

| Imię      | Treść                                                                  | Ocena | Rodzaj instalacji (do uzupełnienia / roboczo) |
| --------- | ---------------------------------------------------------------------- | ----- | --------------------------------------------- |
| Agata P.  | Szczerze polecam, naprawdę firma godna polecenia                       | 5★    | Pompa ciepła (roboczo)                        |
| M t       | Firmę cechuje profesjonalizm i doświadczenie w instalacji pomp ciepła. | 5★    | Pompa ciepła                                  |
| Adrian P. | Super! Gorąco polecam                                                  | 5★    | Pompa ciepła (roboczo)                        |

Miejscowość przy opiniach: **Namysłów** / okolice — jeśli brak w Google, nie zmyślać; można pominąć lub „Klient Google”.

### Bezpłatna wycena — pola formularza

Imię · Telefon · E-mail · Wybór usługi · Wiadomość (oczekiwania) · Zgoda na kontakt.

### Kontakt — bloki

Telefon, e-mail, adres Namysłów, godziny, mapa (link Maps), przyciski **Zadzwoń** / **Napisz**.

---

## Treści skrótowe — usługi (home + hero podstron)

### Pompy ciepła

Dobór i montaż pomp ciepła powietrze-woda dla domów i budynków użytkowych. Niższe koszty ogrzewania, chłodzenie i ciepło użytkowe w jednym systemie — z uruchomieniem i instruktażem.

**FAQ (przykład):** Czy pompa ciepła ma sens w starszym domu? / Jak głośna jest jednostka zewnętrzna?

**Fraza:** montaż pomp ciepła Namysłów · pompy ciepła Opole

### Kotły pelletowe

Montaż kotłów na pellet jako ekologiczne i wygodne źródło ciepła. Pomagamy dobrać moc, zbiornik na paliwo i integrację z instalacją CO.

**Fraza:** kotły pelletowe Namysłów · montaż kotła na pellet Opole

### Ogrzewanie podłogowe

Projekt i montaż ogrzewania podłogowego wodnego — komfort termiczny, równomierna temperatura, dobre sparowanie z pompą ciepła lub kotłem.

**Fraza:** ogrzewanie podłogowe Namysłów

### Klimatyzacja

Klimatyzacja split i multi-split: chłodzenie latem, dogrzewanie w przejściowych porach, montaż z odprowadzeniem skroplin i uruchomieniem.

**Fraza:** klimatyzacja Namysłów · montaż klimatyzacji Opole

### Instalacje wodne

Instalacje wody użytkowej i obiegów w budynkach mieszkalnych oraz użytkowych — od przyłączy po rozprowadzenie i modernizacje.

**Fraza:** instalacje wodne Namysłów

### Instalacje sanitarne

Kompleksowe instalacje sanitarne: kanalizacja, podejścia, wymiana pionów i modernizacja łazienek w zakresie instalacji.

**Fraza:** instalacje sanitarne Namysłów · Opole

### Instalacje przemysłowe

Instalacje dla obiektów firmowych i przemysłowych — dobór rozwiązań pod ciągłość pracy, serwis i wymagania obiektu. Zakres ustalany po oględzinach.

**Fraza:** instalacje przemysłowe Opole · Namysłów

### Rekuperacja

Wentylacja mechaniczna z odzyskiem ciepła — świeże powietrze bez wychładzania budynku, mniej wilgoci i lepszy komfort.

**Fraza:** rekuperacja Namysłów · rekuperacja Opole

### Uzdatnianie wody

Stacje uzdatniania, zmiękczanie i filtracja — ochrona instalacji i AGD, lepsza jakość wody w domu.

**Fraza:** uzdatnianie wody Namysłów · zmiękczacz wody Opole

### Proces współpracy (wspólny na podstronach)

1. Oględziny i bezpłatna konsultacja
2. Wycena
3. Montaż i uruchomienie
4. Serwis

---

## Marki — przykładowe logotypy (DO PODMIANY)

Cel: wiarygodność oferty, nie oficjalne partnerstwo (chyba że klient potwierdzi).

| Obszar          | Przykłady                                                        |
| --------------- | ---------------------------------------------------------------- |
| Pompy / klima   | **Midea** (wymagane), Daikin, Panasonic, LG, Mitsubishi Electric |
| Kotły / grzanie | Defro, Kostrzewa, Viessmann, Bosch                               |
| Rekuperacja     | Zehnder, Vasco, Pro-Vent                                         |
| Woda            | BWT, Honeywell (zawory/filtry) — orientacyjnie                   |

Na starcie: nazwy jak w obecnym demie **+ Midea na pierwszym miejscu**. Docelowo pliki SVG/PNG od klienta lub z oficjalnych kitów prasowych (z zachowaniem wytycznych marek).

---

## Logo — pliki źródłowe

Ścieżka lokalna (u właściciela projektu):

`c:\Users\Tymek\Downloads\Logo AJMTechnika\`

- `Logo AJMTechnika.png` — preferowane na web
- `Logo AJMTechnika.jpg` — wariant na jasnym tle
- `.pdf` / `.cdr` — archiwum / druk

Kolory brandu (z logo klienta, lekko ożywione): AJM azure ≈ `#007CC0` / `#1494D2`, Technika cool silver ≈ `#D0D4DC`. Tokeny CSS w `styles.css` (accent / navy / gradienty) dopasowane do tej palety — bez neonu.

---

## SEO / analityka (z ustaleń — na wdrożenie)

- GA4 + Search Console
- Tytuły, opisy, H1–H2 z frazami lokalnymi
- Przyjazne URL usług
- sitemap.xml, alt zdjęć, mobile, HTTPS, szybkie ładowanie
- NAP spójne z Namysłowem

---

## Checklist wdrożenia (później — nie teraz)

- [x] Rebrand KLIMATPRO → AJM Technika + logo
- [x] `site.ts`: telefon, mail, adres Namysłów, godziny, NIP, Maps
- [x] Nowe sekcje home: O nas, Dlaczego my, Obszar działania
- [x] Lista usług wg tabeli (pellet + wodne/sanitarne/przemysłowe/uzdatnianie; drop gaz/serwis page)
- [x] Treści z tego pliku (home)
- [x] Opinie Google + link „wszystkie”
- [x] Marki: Midea + przykłady
- [x] Treści / SEO podstron usług (H1, meta, intro, teren, FAQ)
- [ ] Zdjęcia: zostają z dema
- [ ] Mapa embed / link Maps
- [ ] GA4, sitemap
- [ ] Formularz wyceny → realna wysyłka

---

## Historia decyzji

- 2026-09-07 — zebranie danych z Maps/logo/KRS; decyzje 1–8 zapisane w tym pliku; treści draft; bez kodowania.
- 2026-09-08 — **Etap 1 wdrożony:** rebrand AJM Technika, logo, dane firmy (`site.ts`), SEO title home, Hero/geo placeholdery → Namysłów; bez nowych sekcji/usług.
- 2026-09-08 — Logo: balans bliżej oryginału klienta (azure + cool silver) + tokeny CSS dopasowane do logo (navy/accent/gradienty).
- 2026-09-08 — **Etap 2:** 9 usług, proces 4-krokowy.
- 2026-09-08 — **Etap 3:** O nas, Dlaczego my, Obszar działania, kolejność home, FAQ, opinie Google, Midea w markach.
- 2026-09-08 — **Etap 4:** treści podstron usług (schemat maila): H1/meta z frazami Namysłów/Opole, intro z briefu, blok terenu działania, pełne FAQ.
