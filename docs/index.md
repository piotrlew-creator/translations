---
# =====================================================================
#  WERSJA POLSKA — tu zmieniasz wszystkie teksty strony głównej.
#  Zasady: nie ruszaj nazw przed dwukropkiem, zmieniaj tylko tekst po nim.
#  Tekst w cudzysłowie "..." może zawierać proste HTML (np. <em>, <br>).
#  Dane kontaktowe i ceny są w pliku mkdocs.yml (sekcja extra).
# =====================================================================
template: home.html
lang: pl
title: Tłumacz angielskiego dla firm — umowy, podatki, biznes | Piotr Lewandowski, Łódź
description: Tłumacz angielskiego dla firm z 20-letnim doświadczeniem. Umowy, dokumenty podatkowe i finansowe, tłumaczenia handlowe i biznesowe. Wycena w 2 godziny, stała współpraca dla firm.
currency: zł

ui:
  role: Tłumacz języka angielskiego
  skip: Przejdź do treści
  menu: Menu
  nav:
    - { label: Specjalizacje, href: "#specjalizacje" }
    - { label: Cennik, href: "#cennik" }
    - { label: Dla firm, href: "#dla-firm" }
    - { label: O mnie, href: "#o-mnie" }
    - { label: FAQ, href: "#faq" }
    - { label: Kontakt, href: "#kontakt" }
  cta: Bezpłatna wycena
  switch_label: EN
  switch_title: English version
  switch_to: en/
  call: Zadzwoń
  write: E-mail
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
  title: "Tłumacz angielskiego <em>dla firm</em> — umowy, podatki, biznes"
  lead: "Precyzyjne tłumaczenia z angielskiego na polski i z polskiego na angielski. 20 lat doświadczenia, faktura VAT, pełna poufność."
  primary: Wyślij plik do wyceny
  trust:
    - 20 lat doświadczenia
    - Wycena w 2 godziny
    - Poufność (NDA)
    - Faktura VAT

card:
  label: Szybki kontakt
  phone_note: Zadzwoń · pon.–pt. 8:00–18:00
  email_note: Napisz lub wyślij plik
  promise: Wycena w ciągu 2 godzin w dni robocze
  wa_note: Szybka wiadomość z telefonu
  wa_text: Dzień dobry, proszę o wycenę tłumaczenia.
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
  intro: Ceny netto za stronę rozliczeniową (1800 znaków ze spacjami) — do cen doliczany jest 23% VAT. Dokładną cenę i termin podaję w bezpłatnej wycenie.
  from: od
  per: netto / str.
  turnaround: "Do 5 stron — zwykle na następny dzień roboczy"
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
    net: netto
    gross: "{gross} brutto (z VAT {vat}%)"
    privacy: Tekst nie jest nigdzie wysyłany — liczenie odbywa się w Twojej przeglądarce.
    cta: Poproś o dokładną wycenę

b2b:
  kicker: Dla firm
  title: "Stała współpraca <em>dla firm</em>"
  intro: Regularnie potrzebujesz tłumaczeń? Zaproponuję stałe warunki, dzięki którym oszczędzasz czas i pieniądze, a dokumenty Twojej firmy są spójne.
  items:
    - icon: book-alphabet
      title: Wspólny glosariusz
      text: Słownik terminów Twojej firmy — spójne nazewnictwo we wszystkich dokumentach.
    - icon: rocket-launch-outline
      title: Priorytetowe terminy
      text: Zlecenia stałych klientów realizuję w pierwszej kolejności.
    - icon: calendar-month-outline
      title: Zbiorcza faktura miesięczna
      text: Jedna faktura VAT za wszystkie zlecenia z danego miesiąca.
    - icon: percent-outline
      title: Rabaty za wolumen
      text: Niższe stawki przy większej liczbie stron miesięcznie.
    - icon: file-sign
      title: Umowa ramowa i NDA
      text: Gotowe wzory umowy ramowej i umowy o zachowaniu poufności.
  cta: Zapytaj o warunki współpracy
  note: Warunki ustalamy indywidualnie, bez zobowiązań.
  mail_subject: Stała współpraca — zapytanie
  mail_body: |-
    Dzień dobry,

    jesteśmy zainteresowani stałą współpracą w zakresie tłumaczeń.

    Firma:
    Rodzaj dokumentów:
    Szacunkowa liczba stron miesięcznie:
    Kierunek (EN→PL / PL→EN):

    Pozdrawiam

process:
  title: Jak zamówić tłumaczenie?
  steps:
    - title: Wyślij plik
      text: Mailem, w dowolnym formacie — Word, PDF, Excel, skan.
    - title: Otrzymaj wycenę
      text: Cena i termin w ciągu 2 godzin w dni robocze — bezpłatnie.
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
      a: Tekst do 5 stron zwykle oddaję na następny dzień roboczy. Przy większych zleceniach termin podaję razem z wyceną, którą wysyłam w ciągu 2 godzin w dni robocze. Pilne teksty realizuję w trybie ekspresowym.
    - q: Czy wykonujesz tłumaczenia przysięgłe?
      a: Nie. Wykonuję tłumaczenia specjalistyczne (zwykłe), które w większości sytuacji biznesowych w pełni wystarczają. Jeśli sąd lub urząd wymaga tłumaczenia poświadczonego, potrzebny jest tłumacz przysięgły.
    - q: W jakich formatach przyjmujesz pliki?
      a: Word, Excel, PowerPoint, PDF, a także skany i zdjęcia dokumentów. Tłumaczenie oddaję w edytowalnym pliku, z zachowaniem układu oryginału.
    - q: Jak wygląda płatność?
      a: Przelewem na podstawie faktury VAT. Podane ceny są cenami netto — doliczany jest 23% VAT. Stałym klientom mogę wystawiać jedną zbiorczą fakturę miesięczną.

contact:
  kicker: Kontakt
  title: "Porozmawiajmy o <em>Twoim tekście</em>"
  lead: Wyślij plik — cenę i termin dostaniesz w ciągu 2 godzin w dni robocze.
  wa_value: Napisz wiadomość
  wa_note: Najszybszy kontakt z telefonu
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
