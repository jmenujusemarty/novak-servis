# CMS a produkční nasazení

Tento web je statický. Produkční obsah se načítá ze souboru `cms-content.json`.

## Úprava obsahu

1. Otevřete `admin.html`.
2. Upravte libovolný text, odkaz, alt text, položku seznamu, formulář, ceník, recenzi nebo cestu k obrázku.
3. Klikněte na `Uložit` pro lokální náhled v tomto prohlížeči.
4. Otevřete `Náhled webu` a zkontrolujte výsledek.
5. Klikněte na `Export JSON`.
6. Stažený soubor se jmenuje `cms-content.json`; nahraďte jím produkční `cms-content.json`.

## Soubory potřebné na produkci

Nahrajte celý obsah složky webu:

- `index.html`
- `admin.html`
- `cms.js`
- `cms-content.json`
- složku `assets/`

## Poznámka k zabezpečení

`admin.html` je statický editor bez serverového přihlášení. Pro veřejnou produkci ho buď nenasazujte, nebo ho chraňte přes hostingové Basic Auth / zaheslovanou administraci. Samotné uložení v adminu zapisuje jen do prohlížeče; veřejný web se změní až po nasazení nového `cms-content.json`.
