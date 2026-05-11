# henri-kiesel.github.io

Persönliche Website (Astro), deployed über **GitHub Actions** auf **GitHub Pages**.

## Lokale Entwicklung

```bash
npm install
npm run dev
```

Build prüfen:

```bash
npm run build
npm run preview
```

## Wo du deine Daten einträgst

| Datei | Inhalt |
|--------|--------|
| [`src/data/site.json`](src/data/site.json) | Name, Tagline DE/EN, **Standort** (`location_de` / `location_en`), Profilbild-Pfad, **GitHub/LinkedIn-URLs**, Link zum Repo (Footer) |
| [`src/data/cv.de.json`](src/data/cv.de.json) | Lebenslauf **Deutsch**: Abschnitte (`education`, `experience`, …) und Einträge |
| [`src/data/cv.en.json`](src/data/cv.en.json) | Gleiche Struktur wie `cv.de.json`, Texte **Englisch** |
| [`src/data/ui.de.json`](src/data/ui.de.json) / [`ui.en.json`](src/data/ui.en.json) | Meta-Titel, Navigation, Footer, **Lebenslauf-Sidebar** (`cvNavAria`, `cvNavHeading`) |
| [`public/favicon.svg`](public/favicon.svg) | Tab-Symbol (Initialen **HK**); bei Bedarf SVG anpassen |

### Profilbild

Bilder liegen unter [`public/assets/img/`](public/assets/img/). Dateiname in `site.json` unter `profileImage` anpassen (z. B. `/assets/img/henri_kiesel_profile_pic.jpg`).

### CV-Einträge

Jeder Eintrag in `cv.*.json` kann folgende Felder haben:

- `title`, `org`, `period`, `summary` (Pflicht sinnvoll)
- `programUrl` (optional) – Link **zum Studiengang / zur Programmseite**, erscheint am **Titel** (Ausbildung)
- `orgUrl` (optional) – Link zur **Organisation** (z. B. Arbeitgeber), erscheint am **Organisationsnamen**
- `location` (optional) – wird hinter der Organisation angezeigt
- `details` – längerer Text im **ausgeklappten** Bereich; Zeilenumbrüche mit `\n`
- `highlights` – Stichpunktliste im ausgeklappten Bereich

Neue Abschnitte: in `sections` ein neues Objekt mit `id`, `title` und `entries` anlegen.

### GitHub Pages

Unter **Repository → Settings → Pages**: Quelle **GitHub Actions** wählen (nicht „Deploy from a branch“ mit Jekyll). Nach Push auf `main` baut der Workflow und veröffentlicht `dist/`.
