# Atelier — Studio di architettura

Sito web one-page per uno studio di architettura fittizio. Progetto didattico realizzato come esercizio della settimana 6.

## Demo

Apri `index.html` nel browser per visualizzare il sito.

## Struttura del progetto

```
Progetto Settimana 6/
├── index.html
└── assets/
    ├── css/
    │   └── style.css          # CSS compilato (output di SCSS)
    ├── scss/
    │   └── style.scss         # Sorgente SCSS con variabili e nesting
    └── js/
        └── script.js          # Logica dark mode e validazione form
```

## Funzionalità

- **Navbar sticky** con menu collassabile (hamburger) su mobile
- **Hero section** con call-to-action e link di ancoraggio
- **Cards dei servizi** con hover animato (translate + scale + shadow)
- **Form di contatto** con validazione lato client (campi obbligatori, regex email)
- **Dark mode** toggle con persistenza via `localStorage`
- **Layout responsive** tramite griglia Bootstrap 5

## Tecnologie

| Tecnologia | Uso |
|---|---|
| HTML5 | Struttura semantica della pagina |
| SCSS / CSS3 | Stile con variabili, nesting e media query |
| JavaScript (ES6) | Dark mode, validazione form |
| Bootstrap 5.3 | Griglia, navbar, componenti UI |

## Sezioni della pagina

1. **Studio** (`#studio`) — Hero con titolo e CTA
2. **Servizi** (`#servizi`) — Tre card: residenziale, interior design, ristrutturazioni
3. **Contatti** (`#contatti`) — Form con nome, email, tipo progetto e messaggio
4. **Footer** — Indirizzo, link di navigazione e contatti

## Come avviare

Non richiede build né dipendenze. Basta aprire `index.html` direttamente nel browser.

Per compilare lo SCSS (opzionale, il CSS compilato è già incluso):

```bash
sass assets/scss/style.scss assets/css/style.css --watch
```

## Autore

Progetto sviluppato come esercitazione front-end — settimana 6.
