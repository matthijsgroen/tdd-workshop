# TDD Workshop

Welkom bij de TDD Workshop! Misschien raar om een README in het Nederlands te zien, maar dat is omdat deze opdracht over de Nederlandse taal gaat!

In deze workshop is het doel **niet** om te leren hoe je testen schrijft, maar om je implementatie te laten sturen door je testen.

## Opdracht

Kinderen met dyslexie zijn erg geholpen als ze bij woorden sneller weten hoe de uitspraak is. Een methode hiervoor is 'klankblokken' letters bij elkaar zetten en van een kleur voorzien zodat klanken die bij de letters horen sneller te herkennen zijn.

Hak woorden op in klanken / lettergroepen.
Klassificeer deze klanken.

Voor regels rondom klanken: https://www.beetjespellen.nl/website/index.php?pag=111

Wanneer een ‘e’, ‘ig’ of ‘lijk’ uitgesproken wordt als een ‘u’ dan heet het een ‘stomme e’. (bijv: katje, bezig, uiterlijk)

Begin met “makkelijke” woorden, en voeg dan steeds meer woorden toe aan de tests.

## Definities

```json
{
    "korteKlinker": ["a", "e", "i", "o", "u", "è"],
    "langeKlinker": [/aa+/, /ee+/, /oo+/, /uu+/, /é+/],
    "tweeKlank": ["ie", "oe", "eu", "ui", "ei", "ij", "ou", "au"],
    "letterGroep1": ["aai", "ooi", "oei", "eau"],
    "letterGroep2": ["eeuw", "ieuw", "uw"],
    "speciaal": ["th", "c", "y"],
    "rest": ["ng", "nk", "ch", "sch", "schr"]
}
```

![Image](https://www.taalinblokjes.nl/wp-content/uploads/2019/07/Screenshot-341.png)

## Starten

```
yarn test
```

> Denk aan de 'Rood', 'Groen', 'Refactor' lus!
