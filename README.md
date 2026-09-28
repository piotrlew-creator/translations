# angielskitlumacz.pl

Strona-wizytówka: **Piotr Lewandowski — tłumacz języka angielskiego**.
Material for MkDocs → GitHub Pages (GitHub Actions) → domena angielskitlumacz.pl (Viperhost) z DNS w Cloudflare.

## Gdzie co zmieniać

| Co chcesz zmienić | Plik |
|---|---|
| E-mail, telefon, NIP, LinkedIn, zdjęcie | `mkdocs.yml` → `extra: contact:` |
| Stawki (zł za stronę), dopłata ekspresowa | `mkdocs.yml` → `extra: rates:` |
| Wszystkie teksty wersji polskiej | `docs/index.md` (góra pliku) |
| Tekst „O mnie” (PL) | `docs/index.md` (dół pliku, pod `---`) |
| Wersja angielska | `docs/en/index.md` |
| Kolory | `docs/assets/css/site.css` → sekcja `:root` |

Zmieniasz tylko tekst **po dwukropku**. Nie usuwaj wcięć (spacji na początku linii) — w plikach YAML mają znaczenie.

**Zdjęcie:** wrzuć plik (np. `piotr.jpg`, pionowe, ok. 800×930 px) do `docs/assets/img/` i w `mkdocs.yml` wpisz `photo: "assets/img/piotr.jpg"`.

## Publikacja

Każdy *commit + push* do gałęzi `main` automatycznie publikuje stronę (zakładka **Actions** w repozytorium pokazuje postęp, ok. 1–2 min).

## Podgląd na własnym komputerze (opcjonalnie)

```
pip install -r requirements.txt
mkdocs serve
```
i otwórz http://127.0.0.1:8000
