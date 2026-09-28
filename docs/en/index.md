---
# =====================================================================
#  ENGLISH VERSION — wersja angielska strony głównej.
#  Te same zasady co w docs/index.md: zmieniaj tylko tekst po dwukropku.
# =====================================================================
template: home.html
lang: en
title: Piotr Lewandowski — English–Polish translator | Łódź, Poland
description: English–Polish and Polish–English translator with 20 years of experience. Contracts, tax and financial documents, business and commercial texts, academic papers. Free quote.
currency: PLN

ui:
  role: English–Polish translator
  skip: Skip to content
  menu: Menu
  close: Close
  nav:
    - { label: Expertise, href: "#specjalizacje" }
    - { label: About, href: "#o-mnie" }
    - { label: How it works, href: "#jak-pracuje" }
    - { label: Rates, href: "#cennik" }
    - { label: FAQ, href: "#faq" }
  cta: Free quote
  switch_label: PL
  switch_title: Wersja polska
  switch_to: ../
  call: Call
  write: Send a file
  copied: Email address copied

mail:
  subject: Translation enquiry
  body: |-
    Hello,

    I would like a quote for a translation.

    Direction (EN→PL / PL→EN):
    Type of text (e.g. contract, report, paper):
    Required deadline:

    The file is attached.

    Kind regards

hero:
  eyebrow: Łódź, Poland · working remotely worldwide
  title: "Translations you can <em>rely on</em>."
  lead: "For 20 years I have been translating contracts, tax documents, business texts and academic papers — from English into Polish and from Polish into English. Accurate, confidential and on time."
  primary: Send a file for a quote
  secondary: Call me
  badges:
    - Free quote
    - Invoice
    - Confidentiality (NDA)
  card_label: Examples from practice
  samples:
    - tag: Contract
      en: "This Agreement shall enter into force on the date of its signature by both Parties."
      pl: "Umowa wchodzi w życie z dniem jej podpisania przez obie Strony."
    - tag: Tax
      en: "The taxpayer is entitled to deduct input VAT within the statutory time limit."
      pl: "Podatnikowi przysługuje prawo do odliczenia podatku naliczonego w ustawowym terminie."
    - tag: Academic
      en: "The results indicate a statistically significant correlation between the variables."
      pl: "Wyniki wskazują na istotną statystycznie korelację między zmiennymi."
    - tag: Business
      en: "We look forward to a long and mutually beneficial partnership."
      pl: "Liczymy na długą i obopólnie korzystną współpracę."

facts:
  - { value: "20", suffix: "+", label: "years of translation experience" }
  - { value: "2", suffix: "", label: "directions: EN → PL and PL → EN" }
  - { value: "1", suffix: "", label: "person from quote to final text — no middlemen" }
  - { value: "0", suffix: " PLN", label: "for a quote — always free" }

services:
  kicker: Expertise
  title: "Texts where <em>a lot is at stake</em>"
  intro: I translate documents where every word matters — for companies, accounting firms, law firms, universities and private clients.
  items:
    - icon: file-sign
      title: Contracts and legal documents
      text: Commercial agreements, NDAs, terms and conditions, powers of attorney, articles of association and corporate documents — precise, with correct legal terminology.
      tags: [Contracts, NDAs, T&Cs, Resolutions]
    - icon: bank-outline
      title: Tax and finance
      text: Tax rulings and opinions, financial statements, reports, correspondence with authorities and accounting documentation.
      tags: [VAT / CIT, Statements, Reports, Audit]
    - icon: handshake-outline
      title: Commercial translation
      text: Offers, requests for quotation, specifications, catalogues and correspondence with partners — so your company sounds professional.
      tags: [Offers, Correspondence, Specs]
    - icon: briefcase-outline
      title: Business and management
      text: Presentations, business plans, procedures, internal policies, board reports and investor materials.
      tags: [Presentations, Procedures, Plans]
    - icon: school-outline
      title: Academic papers
      text: Journal articles, abstracts, theses, grant applications and reviews — with care for academic style.
      tags: [Articles, Abstracts, Grants]
    - icon: web
      title: Websites and marketing
      text: Website content, brochures, newsletters and product descriptions — natural-sounding for your audience.
      tags: [Websites, Brochures, Copy]
  more: "Don't see your type of text? <a href=\"#kontakt\">Get in touch</a> — I can most likely help."

about:
  kicker: About me
  title: "One translator. <em>Full responsibility.</em>"
  photo_alt: Piotr Lewandowski
  points:
    - icon: account-tie-outline
      title: No middlemen
      text: You talk directly to the person translating your text. Fast and to the point.
    - icon: shield-lock-outline
      title: Confidentiality
      text: Your documents are safe with me. I am happy to sign a non-disclosure agreement.
    - icon: clock-fast
      title: On time
      text: We agree the deadline before I start — and I meet it. Urgent texts in express mode.
    - icon: receipt-text-outline
      title: Invoice
      text: I run a registered business in Poland and issue an invoice for every order.

process:
  kicker: How it works
  title: "Four simple steps"
  steps:
    - title: Send your text
      text: By email, in any format — Word, PDF, Excel, PowerPoint, even a scan or a photo.
    - title: Get a quote
      text: Free and with no obligation — price and deadline, usually the same day.
    - title: I translate and check
      text: Translation, editing and final proofreading. I read every sentence at least twice.
    - title: Receive the final text
      text: In the same format and layout as the original — ready to sign, send or publish.

pricing:
  kicker: Rates
  title: "Clear <em>pricing</em>"
  intro: Indicative rates per standard page of 1,800 characters including spaces (approx. 250–300 words). You always get the exact price in a free quote.
  from: from
  per: / page
  cards:
    - { key: en_pl, title: "English → Polish", text: "Contracts, company documents, reports, articles." }
    - { key: pl_en, title: "Polish → English", text: "Texts for partners, publications, websites.", featured: true }
    - { key: proofreading, title: "Proofreading & review", text: "Checking an existing translation or a text in English." }
  express: "Express mode: +{express}%"
  minimum: "Minimum order: {minimum} page"
  calc:
    title: Quick calculator
    lead: Paste your text or enter the number of pages — I'll estimate the cost.
    direction: Service
    paste: Paste your text
    paste_ph: Paste a fragment or the whole document here…
    or: or
    pages: Number of standard pages
    express: Express mode
    chars: characters
    pages_unit: pages
    result: Estimated cost
    privacy: Your text is not sent anywhere — everything is calculated in your browser.
    cta: Ask for an exact quote

faq:
  kicker: Questions & answers
  title: "Good to <em>know</em>"
  cta: Didn't find your answer? Email or call me — happy to help.
  items:
    - q: What is a standard page?
      a: It is 1,800 characters including spaces, i.e. approx. 250–300 words. This way the price does not depend on font size or margins — you pay for the actual amount of text.
    - q: How quickly will I get my translation?
      a: The deadline depends on the length and complexity of the text — I always give it together with the quote, before we start. Urgent orders are handled in express mode.
    - q: Do you provide certified (sworn) translations?
      a: No. I specialise in professional (non-certified) translations, which are fully sufficient in most business situations. If a court or public authority requires a certified translation, you will need a sworn translator.
    - q: Which file formats do you accept?
      a: Word, Excel, PowerPoint, PDF, as well as scans and photos of documents. I deliver the translation as an editable file that keeps the original layout.
    - q: Are my documents safe?
      a: Yes. All materials are treated as confidential and are never shared with third parties. I am happy to sign a non-disclosure agreement (NDA).
    - q: How do I pay?
      a: By bank transfer against an invoice. Payment terms are agreed when the order is accepted.
    - q: Do you translate other languages?
      a: No — I work exclusively with English and Polish. This lets me guarantee the highest quality.

contact:
  kicker: Contact
  title: "Let's talk about <em>your text</em>"
  lead: The fastest way — email me your file. I'll reply with a price and a deadline.
  email_label: Email
  phone_label: Phone
  copy: Copy
  vcard: Save contact to your phone
  hours: "Mon–Fri 8:00–18:00 (CET) · urgent matters also at weekends"
  location: "Łódź, Poland · working remotely with clients in Poland and abroad"

footer:
  tagline: English–Polish translation
  nip: VAT ID
  top: Back to top
---

<!-- "About me" text. Plain text — separate paragraphs with an empty line. -->

My name is **Piotr Lewandowski** and I have been working as an English translator for over 20 years. I work with texts where every word counts: contracts, tax and financial documents, business correspondence and academic publications.

I run my own business in Łódź, Poland, and work remotely with clients across Poland and abroad. I handle every order personally — from the first message to delivering the finished text.

A good translation is more than correct words. It is a text that reads naturally, preserves the meaning of the original and does its job — whether that is signing a contract, closing a deal or getting published in an international journal.
