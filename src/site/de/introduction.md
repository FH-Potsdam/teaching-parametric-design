---
title: Einführung
eleventyNavigation:
  title: Intro
  key: de_introduction
  order: 0
  parent: de
locale: de
layout: default
---

{% from "../_includes/parts/macros.njk" import h2, definition, video, img %}

{{h2('Einführung ins Parametric Design')}}

{{video("https://fhpcloud.fh-potsdam.de/s/GGGf4jo8z927c9x/download/de_introduction.mp4", "/images/thumbnails/de_introduction.png", "de_introduction", translations.subtitles[locale], locale, "https://fhpcloud.fh-potsdam.de/s/c2sycB56EWTb5w9/download/de_introduction.mp4")}}

<!--
dg: https://fhpcloud.fh-potsdam.de/s/c2sycB56EWTb5w9
de: https://fhpcloud.fh-potsdam.de/s/GGGf4jo8z927c9x
en: https://fhpcloud.fh-potsdam.de/s/soZc2mA9kSpRxxL
-->

{{h2('Wie funktioniert diese Website')}}

Das Material dieses Seminars wird nicht nur in verschiedenen Sprachen angeboten, sondern bietet auch verschiedene Zugänge, um sich die Inhalte zu erarbeiten. Man kann alle Inhalte erlernen, indem man nur die Texte und Definitionen studiert, sich alternativ die Videos anschaut oder direkt die Code-Beispiele herunterlädt und durch das Experimentieren mit den Beispielen lernt.

Alle Videos in Deutsch und Englisch haben Untertitel. Die meisten Browser bieten unten rechts einen kleinen Button, über den man zusätzliche Optionen aufrufen kann und dort auch die Untertitel aktivieren kann. Wir nutzen kein Video-Hosting-Service, um die Privatsphäre der Studierenden zu schützen, deshalb setzen wir auf den nativen Video-Player des Browsers. Aussehen und Funktionalität können leicht voneinander abweichen.

{{ img('subtitles.png', 'Untertitel aktivieren.') }}

Wenn eine neue Funktion oder Kommando eingeführt wird, gibt es eine kurze Definition, die von einem Beispiel gefolgt wird: 

{{ definition('createCanvas', [
  { name: 'Breite', type: 'Zahl' },
  { name: 'Höhe', type: 'Zahl' },
  { name: 'Renderer', type: 'Text', optional: true }
]) }}

```js
function setup() {
  createCanvas(400, 400);
}
```

Die erste Zeile zeigt die Parameter, die eine Funktion akzeptiert. Die Definition erklärt, welche Parameter, welche Funktion haben. Wenn ein Parameter mit einem **\*** gekennzeichnet ist, dann handelt es sich bei dem Parameter um einen optionalen Parameter. Die meistgenutzten Parametertypen sind:

- **Zahl (number)**: 1, 2, 0.5, -10.4
- **Text (string)**: 'Any kind of text'
- **Boolescher Wert (boolean)**: true, false

> Zusätzliche, nützliche Hinweise werden in blauen Boxen hervorgehoben.

### Editor

Für die p5js Beispiele gibt es einen Editor, der es erlaubt Code-Beispiele direkt im Browser zu verändern. Um den Code auszuführen, muss der rechte Knopf oben links im Editor gedrückt werden. Um den Code zu kopieren und im eigenen Code-Editor weiterzunutzen, einfach den rechten Knopf oben rechts drücken. Ein Link zum Quellcode steht unter dem Editor zur Verfügung.

{{ img('editor.png', 'Inline Code Editor.') }}

Die Vorschau für JSCAD ist wesentlich ressourcenhungriger, deshalb werden die Previews für JSCAD in einem neuen Tab/Fenster geöffnet.

### Extras & Bonus

Unter [Extras](/de/extras/) befindet sich zusätzliches Material, das hilfreich für die Programmierung ist, aber nicht Pflicht ist. Im [Bonus-Bereich](/de/bonus/) der Seite gibt es konkrete Beispiele und thematische Vertiefungen, diese gehen meisten zurück auf Diskussionen im Kurs (z.B. wie kann man Audio-Files einbinden und analysieren). Der Bonus-Bereich wird weiter wachsen, deshalb können wir diesen Bereich aktuell nur in Deutsch und Englisch anbieten.