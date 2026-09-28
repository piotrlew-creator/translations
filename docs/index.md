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
  nav:
    - { label: Specjalizacje, href: "#specjalizacje" }
    - { label: Cennik, href: "#cennik" }
    - { label: O mnie, href: "#o-mnie" }
    - { label: FAQ, href: "#faq" }
    - { label: Kontakt, href: "#kontakt" }
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
  eyebrow: Tłumacz języka angielskiego · Łódź i zdalnie
  title: "Tłumaczenia, na których możesz <em>polegać</em>."
  lead: "Umowy, dokumenty podatkowe, teksty biznesowe i prace naukowe — z angielskiego na polski i z polskiego na angielski."
  primary: Wyślij plik do wyceny
  trust:
    - 20 lat doświadczenia
    - Bezpłatna wycena
    - Poufność (NDA)
    - Faktura

card:
  label: Szybki kontakt
  phone_note: Zadzwoń · pon.–pt. 8:00–18:00
  email_note: Napisz lub wyślij plik
  copy: Kopiuj adres
  vcard: Zapisz kontakt w telefonie

services:
  kicker: Specjalizacje
  title: "Teksty, od których <em>wiele zależy</em>"
  items:
    - icon: file-sign
      title: Umowy i dokumenty prawne
      text: Umowy, NDA, regulaminy, pełnomocnictwa, statuty.
    - icon: bank-outline
      title: Podatki i finanse
      text: Interpretacje, sprawozdania, raporty, pisma do urzędów.
    - icon: handshake-outline
      title: Tłumaczenia handlowe
      text: Oferty, specyfikacje, katalogi, korespondencja.
    - icon: briefcase-outline
      title: Biznes i zarządzanie
      text: Prezentacje, biznesplany, procedury, raporty.
    - icon: school-outline
      title: Prace naukowe
      text: Artykuły, abstrakty, rozprawy, wnioski grantowe.
    - icon: web
      title: Strony www i marketing
      text: Treści stron, broszury, newslettery, opisy produktów.
  more: "Inny rodzaj tekstu? <a href=\"#kontakt\">Napisz</a> — najpewniej też pomogę."

pricing:
  kicker: Cennik
  title: "Przejrzyste <em>stawki</em>"
  intro: Ceny orientacyjne za stronę rozliczeniową (1800 znaków ze spacjami). Dokładną cenę i termin podaję w bezpłatnej wycenie.
  from: od
  per: / str.
  cards:
    - { key: en_pl, title: "Angielski → polski", short: "EN → PL" }
    - { key: pl_en, title: "Polski → angielski", short: "PL → EN" }
    - { key: proofreading, title: "Korekta i weryfikacja", short: "Korekta" }
  express: "Tryb ekspresowy: +{express}%"
  minimum: "Minimalne zlecenie: {minimum} strona"
  calc:
    summary: Policz orientacyjny koszt swojego tekstu
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

process:
  title: Jak zamówić tłumaczenie?
  steps:
    - title: Wyślij plik
      text: Mailem, w dowolnym formacie — Word, PDF, Excel, skan.
    - title: Otrzymaj wycenę
      text: Cena i termin — bezpłatnie i bez zobowiązań.
    - title: Odbierz tłumaczenie
      text: W formacie i układzie oryginału, gotowe do użycia.

about:
  kicker: O mnie
  title: "Jeden tłumacz. <em>Pełna odpowiedzialność.</em>"
  points:
    - icon: account-tie-outline
      title: Bez pośredników
      text: Rozmawiasz z osobą, która tłumaczy Twój tekst.
    - icon: shield-lock-outline
      title: Poufność
      text: Na życzenie podpisuję umowę NDA.
    - icon: clock-fast
      title: Terminowość
      text: Termin ustalamy przed startem — i dotrzymuję go.
    - icon: receipt-text-outline
      title: Faktura
      text: Do każdego zlecenia wystawiam fakturę.

faq:
  kicker: Pytania i odpowiedzi
  title: "Warto <em>wiedzieć</em>"
  items:
    - q: Czym jest strona rozliczeniowa?
      a: To 1800 znaków ze spacjami, czyli ok. 250–300 słów. Płacisz za faktyczną ilość tekstu, a nie za liczbę stron w pliku.
    - q: Jak szybko otrzymam tłumaczenie?
      a: Termin zależy od objętości i stopnia specjalizacji tekstu — zawsze podaję go razem z wyceną, zanim zaczniemy. Pilne zlecenia realizuję w trybie ekspresowym.
    - q: Czy wykonujesz tłumaczenia przysięgłe?
      a: Nie. Wykonuję tłumaczenia specjalistyczne (zwykłe), które w większości sytuacji biznesowych w pełni wystarczają. Jeśli sąd lub urząd wymaga tłumaczenia poświadczonego, potrzebny jest tłumacz przysięgły.
    - q: W jakich formatach przyjmujesz pliki?
      a: Word, Excel, PowerPoint, PDF, a także skany i zdjęcia dokumentów. Tłumaczenie oddaję w edytowalnym pliku, z zachowaniem układu oryginału.
    - q: Jak wygląda płatność?
      a: Przelewem na podstawie faktury. Termin płatności ustalamy przy przyjęciu zlecenia.

contact:
  kicker: Kontakt
  title: "Porozmawiajmy o <em>Twoim tekście</em>"
  lead: Wyślij plik — odpowiem z ceną i terminem.
  email_label: E-mail
  phone_label: Telefon
  copy: Kopiuj
  vcard: Zapisz kontakt w telefonie
  hours: "Pon.–pt. 8:00–18:00"
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

Nazywam się **Piotr Lewandowski** i od 20 lat tłumaczę teksty, w których liczy się każde słowo: umowy, dokumenty podatkowe i finansowe, korespondencję handlową oraz publikacje naukowe.

Prowadzę własną działalność w Łodzi i pracuję zdalnie z klientami z całej Polski i z zagranicy. Każde zlecenie wykonuję osobiście — od wyceny do oddania gotowego tekstu.
