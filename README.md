# Longato Pizza Focaccia

Sito statico per **Longato Pizza Focaccia | Pizzeria Padova**.

Il progetto presenta una veste calda, artigianale e contemporanea, con accenti piu dinamici per promo, aperitivo e collegamenti social.

## Struttura

```text
.
├── index.html
├── menu.html
├── chi-siamo.html
├── contatti.html
├── css/
│   └── style.css
├── js/
│   └── script.js
└── img/
    ├── hero.jpg
    ├── pizza.jpg
    ├── focaccia.jpg
    ├── aperitivo.jpg
    ├── locale.jpg
    └── impasto.jpg
```

## Pagine

- `index.html`: home page con hero, prodotti, promo, menu preview, posizione e gallery.
- `menu.html`: menu diviso per categorie.
- `chi-siamo.html`: racconto del locale e valori.
- `contatti.html`: indirizzo, link Maps e Instagram.

## Come aprirlo

Il sito non richiede build o dipendenze.

Apri direttamente `index.html` nel browser, oppure avvia un server statico dalla cartella del progetto:

```bash
python3 -m http.server 8000
```

Poi visita:

```text
http://localhost:8000
```

## Link principali

- Google Maps: https://maps.app.goo.gl/9pMZTGRvnbkWnpCZ8
- Instagram: https://www.instagram.com/longatopizzafocaccia/

## Note

Il sito usa HTML, CSS e JavaScript vanilla. Lo stile principale si trova in `css/style.css`; il menu mobile e le animazioni leggere sono gestiti da `js/script.js`.
