---
# =====================================================================
#  WERSJA POLSKA — tu zmieniasz wszystkie teksty strony głównej.
#  Zasady: nie ruszaj nazw przed dwukropkiem, zmieniaj tylko tekst po nim.
#  Tekst w cudzysłowie "..." może zawierać proste HTML (np. <em>, <br>).
#  Dane kontaktowe i ceny są w pliku mkdocs.yml (sekcja extra).
# =====================================================================
template: home.html
lang: pl
title: Piotr Lewandowski — tłumacz języka angielskiego | Łódź
description: Tłumacz języka angielskiego z 20-letnim doświadczeniem. Umowy, dokumenty podatkowe i finansowe, tłumaczenia handlowe, biznesowe i prace naukowe. Bezpłatna wycena.
currency: zł

ui:
  role: Tłumacz języka angielskiego
  skip: Przejdź do treści
  menu: Menu
  close: Zamknij
  nav:
    - { label: Specjalizacje, href: "#specjalizacje" }
    - { label: O mnie, href: "#o-mnie" }
    - { label: Jak pracuję, href: "#jak-pracuje" }
    - { label: Cennik, href: "#cennik" }
    - { label: FAQ, href: "#faq" }
  cta: Bezpłatna wycena
  switch_label: EN
  switch_title: English version
  switch_to: en/
  call: Zadzwoń
  write: Wyślij plik
  copied: Adres e-mail skopiowany

mail:
  subject: Zapytanie o tłumaczenie
  body: |-
    Dzień dobry,

    proszę o wycenę tłumaczenia.

    Kierunek (EN→PL / PL→EN):
    Rodzaj tekstu (np. umowa, raport, artykuł):
    Oczekiwany termin:

    Plik przesyłam w załączniku.

    Pozdrawiam

hero:
  eyebrow: Łódź · zdalnie w całej Polsce i za granicą
  title: "Tłumaczenia, na których możesz <em>polegać</em>."
  lead: "Od 20 lat przekładam umowy, dokumenty podatkowe, teksty biznesowe i prace naukowe — z angielskiego na polski i z polskiego na angielski. Precyzyjnie, poufnie i w terminie."
  primary: Wyślij plik do wyceny
  secondary: Zadzwoń
  badges:
    - Bezpłatna wycena
    - Faktura
    - Poufność (NDA)

facts:
  - { value: "20", suffix: "+", label: "lat doświadczenia w tłumaczeniach" }
  - { value: "2", suffix: "", label: "kierunki: EN → PL i PL → EN" }
  - { value: "1", suffix: "", label: "osoba od wyceny do gotowego tekstu — bez pośredników" }
  - { value: "0", suffix: " zł", label: "za wycenę — zawsze bezpłatnie" }

services:
  kicker: Specjalizacje
  title: "Teksty, od których <em>wiele zależy</em>"
  intro: Tłumaczę dokumenty, w których liczy się każde słowo — dla firm, biur rachunkowych, kancelarii, uczelni i osób prywatnych.
  items:
    - icon: file-sign
      title: Umowy i dokumenty prawne
      text: Umowy handlowe, NDA, regulaminy, pełnomocnictwa, statuty i dokumenty korporacyjne — z zachowaniem precyzji i terminologii prawniczej.
      tags: [Umowy, NDA, Regulaminy, Uchwały]
    - icon: bank-outline
      title: Podatki i finanse
      text: Interpretacje i opinie podatkowe, sprawozdania finansowe, raporty, korespondencja z urzędami i dokumentacja księgowa.
      tags: [VAT / CIT, Sprawozdania, Raporty, Audyt]
    - icon: handshake-outline
      title: Tłumaczenia handlowe
      text: Oferty, zapytania ofertowe, specyfikacje, katalogi i korespondencja z kontrahentami — żeby Twoja firma brzmiała profesjonalnie.
      tags: [Oferty, Korespondencja, Specyfikacje]
    - icon: briefcase-outline
      title: Biznes i zarządzanie
      text: Prezentacje, biznesplany, procedury, polityki wewnętrzne, raporty dla zarządu i materiały dla inwestorów.
      tags: [Prezentacje, Procedury, Biznesplany]
    - icon: school-outline
      title: Prace naukowe
      text: Artykuły do czasopism, abstrakty, rozprawy, wnioski grantowe i recenzje — z dbałością o styl akademicki.
      tags: [Artykuły, Abstrakty, Granty]
    - icon: web
      title: Strony www i marketing
      text: Treści stron internetowych, broszury, newslettery i opisy produktów — naturalnie brzmiące dla odbiorcy.
      tags: [Strony www, Broszury, Opisy]
  more: "Nie widzisz swojego rodzaju tekstu? <a href=\"#kontakt\">Napisz</a> — najpewniej też pomogę."

about:
  kicker: O mnie
  title: "Jeden tłumacz. <em>Pełna odpowiedzialność.</em>"
  photo_alt: Piotr Lewandowski
  points:
    - icon: account-tie-outline
      title: Bez pośredników
      text: Rozmawiasz bezpośrednio z osobą, która tłumaczy Twój tekst. Szybko i konkretnie.
    - icon: shield-lock-outline
      title: Poufność
      text: Twoje dokumenty są bezpieczne. Na życzenie podpisuję umowę o zachowaniu poufności.
    - icon: clock-fast
      title: Terminowość
      text: Termin ustalamy przed startem — i dotrzymuję go. Pilne teksty w trybie ekspresowym.
    - icon: receipt-text-outline
      title: Faktura
      text: Prowadzę działalność gospodarczą — do każdego zlecenia wystawiam fakturę.

process:
  kicker: Jak pracuję
  title: "Cztery proste kroki"
  steps:
    - title: Wyślij tekst
      text: Mailem, w dowolnym formacie — Word, PDF, Excel, PowerPoint, a nawet skan lub zdjęcie.
    - title: Otrzymaj wycenę
      text: Bezpłatnie i bez zobowiązań — cena i termin, zwykle jeszcze tego samego dnia.
    - title: Tłumaczę i sprawdzam
      text: Przekład, redakcja i końcowa korekta. Każde zdanie czytam co najmniej dwa razy.
    - title: Odbierz gotowy tekst
      text: W tym samym formacie i układzie co oryginał — gotowy do podpisu, wysyłki lub publikacji.

pricing:
  kicker: Cennik
  title: "Przejrzyste <em>stawki</em>"
  intro: Ceny orientacyjne za stronę rozliczeniową, czyli 1800 znaków ze spacjami (ok. 250–300 słów). Dokładną cenę zawsze podaję w bezpłatnej wycenie.
  from: od
  per: / strona
  cards:
    - { key: en_pl, title: "Angielski → polski", text: "Umowy, dokumenty firmowe, raporty, artykuły." }
    - { key: pl_en, title: "Polski → angielski", text: "Teksty dla kontrahentów, publikacje, strony www." , featured: true }
    - { key: proofreading, title: "Korekta i weryfikacja", text: "Sprawdzenie istniejącego tłumaczenia lub tekstu po angielsku." }
  express: "Tryb ekspresowy: +{express}%"
  minimum: "Minimalne zlecenie: {minimum} strona"
  calc:
    title: Szybki kalkulator
    lead: Wklej tekst lub wpisz liczbę stron — policzę orientacyjny koszt.
    direction: Usługa
    paste: Wklej tekst
    paste_ph: Wklej tutaj fragment lub cały dokument…
    or: albo
    pages: Liczba stron rozliczeniowych
    express: Tryb ekspresowy
    chars: znaków
    pages_unit: str.
    result: Orientacyjny koszt
    privacy: Tekst nie jest nigdzie wysyłany — liczenie odbywa się w Twojej przeglądarce.
    cta: Poproś o dokładną wycenę

faq:
  kicker: Pytania i odpowiedzi
  title: "Warto <em>wiedzieć</em>"
  cta: Nie znalazłeś odpowiedzi? Napisz lub zadzwoń — chętnie pomogę.
  items:
    - q: Czym jest strona rozliczeniowa?
      a: To 1800 znaków ze spacjami, czyli ok. 250–300 słów. Dzięki temu cena nie zależy od wielkości czcionki czy marginesów — płacisz za faktyczną ilość tekstu.
    - q: Jak szybko otrzymam tłumaczenie?
      a: Termin zależy od objętości i stopnia specjalizacji tekstu — zawsze podaję go razem z wyceną, zanim zaczniemy. Pilne zlecenia realizuję w trybie ekspresowym.
    - q: Czy wykonujesz tłumaczenia przysięgłe?
      a: Nie. Specjalizuję się w tłumaczeniach specjalistycznych (zwykłych), które w większości sytuacji biznesowych w pełni wystarczają. Jeśli sąd lub urząd wymaga tłumaczenia poświadczonego, potrzebny jest tłumacz przysięgły.
    - q: W jakich formatach przyjmujesz pliki?
      a: Word, Excel, PowerPoint, PDF, a także skany i zdjęcia dokumentów. Gotowe tłumaczenie oddaję w edytowalnym pliku, z zachowaniem układu oryginału.
    - q: Czy moje dokumenty są bezpieczne?
      a: Tak. Wszystkie materiały traktuję jako poufne i nie przekazuję ich osobom trzecim. Na życzenie podpisuję umowę o zachowaniu poufności (NDA).
    - q: Jak wygląda płatność?
      a: Przelewem na podstawie faktury. Termin płatności ustalamy przy przyjęciu zlecenia.
    - q: Czy tłumaczysz także inne języki?
      a: Nie — pracuję wyłącznie z językiem angielskim. Dzięki temu mogę zagwarantować najwyższą jakość.

contact:
  kicker: Kontakt
  title: "Porozmawiajmy o <em>Twoim tekście</em>"
  lead: Najszybciej — wyślij plik mailem. Odpowiem z ceną i terminem.
  email_label: E-mail
  phone_label: Telefon
  copy: Kopiuj
  vcard: Zapisz kontakt w telefonie
  hours: "Pon.–pt. 8:00–18:00 · pilne sprawy także w weekend"
  location: "Łódź · pracuję zdalnie z klientami z całej Polski i zagranicy"

footer:
  tagline: Tłumaczenia języka angielskiego
  nip: NIP
  top: Na górę
---

<!--
  Poniżej tekst sekcji „O mnie". Zwykły tekst — akapity oddzielasz pustą linią.
  **pogrubienie** działa tak jak w Wordzie z gwiazdkami.
-->

Nazywam się **Piotr Lewandowski** i od ponad 20 lat zajmuję się tłumaczeniami języka angielskiego. Pracuję z tekstami, w których liczy się każde słowo: umowami, dokumentami podatkowymi i finansowymi, korespondencją handlową oraz publikacjami naukowymi.

Prowadzę własną działalność w Łodzi i współpracuję zdalnie z klientami z całej Polski i z zagranicy. Każde zlecenie wykonuję osobiście — od pierwszej wiadomości aż po oddanie gotowego tekstu.

Dobre tłumaczenie to nie tylko poprawne słowa. To tekst, który brzmi naturalnie, zachowuje sens oryginału i spełnia swój cel — czy to podpisanie umowy, zamknięcie transakcji, czy publikacja w międzynarodowym czasopiśmie.
