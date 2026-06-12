# Atelier

> *"Architettura per spazi che parlano"*

Sito web one-page per **Atelier**, uno studio di architettura fittizio con sede a Milano. Progetto front-end sviluppato come esercizio della settimana 6 del corso, focalizzato su layout responsive, SCSS, dark mode e interazione con il DOM.

---

## Anteprima

| Light mode | Dark mode |
|---|---|
| Navbar scura, hero marrone caldo, cards bianche | Sfondo `#1a1a1a`, cards `#333`, toni grigi |

---

## Cosa ho costruito

Una landing page completa con tre sezioni principali navigabili tramite ancoraggio:

### Studio (Hero)
Sezione introduttiva a piena altezza con headline, sottotitolo e link-ancora verso i contatti. Su schermi grandi il titolo scala da `2.8rem` a `3.5rem` via media query.

### Servizi
Tre card affiancate (griglia Bootstrap) per i servizi offerti:
- Progettazione residenziale
- Interior design
- Ristrutturazioni

Ogni card ha un'immagine icona con fallback emoji gestito via `onerror` inline, e un effetto hover che combina `translateY(-10px) + scale(1.02) + box-shadow`.

### Contatti
Form con quattro campi (nome, email, tipo progetto, messaggio). La validazione avviene lato client in JavaScript: controllo campi vuoti + regex sull'email. Nessun backend — al submit viene mostrato un alert e il form viene resettato.

---

## Dark mode

La preferenza viene salvata in `localStorage` così persiste tra le sessioni. Al caricamento della pagina lo script legge la chiave `theme` e applica (o meno) la classe `dark-mode` al `<body>`. Il toggle in navbar aggiorna sia la classe che l'icona (🌙 / ☀️).

---

## Struttura del progetto

```
Progetto Settimana 6/
├── index.html
└── assets/
    ├── css/
    │   └── style.css        ← CSS compilato (non modificare direttamente)
    ├── scss/
    │   └── style.scss       ← sorgente con variabili, nesting, dark mode
    └── js/
        └── script.js        ← dark mode toggle + validazione form
```

---

## Stack

- **HTML5** — struttura semantica con sezioni, nav, form, footer
- **SCSS** — variabili colore (`$primary-hero-btn`, `$brand-brown`…), nesting, `darken()`
- **JavaScript ES6** — `classList.toggle`, `localStorage`, regex, `querySelector`
- **Bootstrap 5.3** — griglia responsive, navbar collassabile, utility classes

---

## Avvio

Nessuna dipendenza da installare. Apri `index.html` nel browser.

Per ricompilare lo SCSS dopo modifiche:

```bash
sass assets/scss/style.scss assets/css/style.css --watch
```

---

## Note di sviluppo

- Il colore dominante è un **marrone caldo** (`hsl(20, 30%, 35%)`) che richiama materiali naturali coerenti col brand architettura
- La navbar è `sticky-top`: rimane visibile durante lo scroll
- Le immagini icona nelle card non sono incluse nel repo — il fallback emoji garantisce che il layout non si rompa in loro assenza

---

*Progetto didattico — settimana 6*
