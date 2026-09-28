"""Tworzy plik kontakt.vcf ("Zapisz kontakt w telefonie") z danych w mkdocs.yml -> extra.contact."""
import os


def on_post_build(config, **kwargs):
    c = config["extra"]["contact"]
    name = c["name"].strip()
    first, _, last = name.partition(" ")
    lines = [
        "BEGIN:VCARD",
        "VERSION:3.0",
        f"N:{last};{first};;;",
        f"FN:{name}",
        "TITLE:Tłumacz języka angielskiego / English translator",
        f"TEL;TYPE=WORK,VOICE:{c['phone_link']}",
        f"EMAIL;TYPE=WORK:{c['email']}",
        f"URL:{config['site_url']}",
        f"ADR;TYPE=WORK:;;;{c.get('city', '')};;;Polska",
        "END:VCARD",
    ]
    path = os.path.join(config["site_dir"], "kontakt.vcf")
    with open(path, "w", encoding="utf-8", newline="\r\n") as f:
        f.write("\n".join(lines) + "\n")
