---
title: JSCAD
eleventyNavigation:
  title: JSCAD
  key: de_3d_jscad
  parent: de_3d
  order: 2
layout: default
locale: de
---

{% from "../../_includes/parts/macros.njk" import video, h2, definition, img, inspiration, task %}

Aber manchmal wollen wir 3D-Körper direkt durch Code generieren. 2D Pixel- und Vektorgrafiken vergeben kleinere Fehler, wie Überlagerungen, nicht geschlossene Pfade oder Versätze. Auch wenn die Fehler visuell auffallen, ist es meist kein großes Problem. Bei 3D-Objekten sieht dies anders aus, z.B. wenn wir Objekte für Rapid Prototyping (wie z.B. 3D-Druck) konstruieren. Anderenfalls bekommen wir Probleme mit den Anwendungen, mit denen wir die Modelle an die Maschinen schicken.

{{h2('OpenSCAD')}}

{{video("https://fhpcloud.fh-potsdam.de/s/s6nWEmrsK8GtXbG/download/de_3d_jscad_openscad.mp4", "/images/thumbnails/de_3d_jscad_openscad.png", "de_3d_jscad_openscad", translations.subtitles[locale], locale)}}

<!--
de: https://fhpcloud.fh-potsdam.de/s/s6nWEmrsK8GtXbG
en: https://fhpcloud.fh-potsdam.de/s/w9egGf2MQ9KdbHe
-->

Die Open Source Community hat die Anwendung [OpenSCAD](https://openscad.org/) entwickelt. Im Unterschied zu traditionellen 3D-Anwendungen mit GUIs, wie z.B. Fusion 360, OpenSCADs Fokus liegt auf der code-basierten Gestaltung von 3D-Objekten. In den letzten Jahren wurde OpenSCAD in verschiedene andere Programmiersprachen portiert, wie z.B. [JavaScript](https://github.com/jscad/OpenJSCAD.org) und [Python](https://github.com/CadQuery/cadquery). Dank dieser Arbeite können wir unsere bisher erworbenen JavaScript-Fähigkeiten nutzen um 3D-Körper zu konstruieren. Ähnlich wie der Online-Editor von p5js, gibt es auch eine ähnliche Plattform für OpenSCAD: [cadhub.xyz](https://cadhub.xyz/) (dies ist ebenfalls ein Community-Projekt und befindet sich noch in der Entwicklung).


{{h2('JSCAD')}}

{{video("https://fhpcloud.fh-potsdam.de/s/YnZsQTeeQgafFJy/download/de_3d_jscad_jscad.mp4", "/images/thumbnails/de_3d_jscad_jscad.png", "de_3d_jscad_jscad", translations.subtitles[locale], locale)}}
<!--
de: https://fhpcloud.fh-potsdam.de/s/YnZsQTeeQgafFJy
en: https://fhpcloud.fh-potsdam.de/s/aDz5aNQ2Y5gqrbG
-->
## JSCAD Projekte im Browser

Um unser erstes 3D-Projekt zu erstellen, nutzen wir dasselbe Prinzip wie bei p5js, wir nutzen nur eine andere Boilerplate. Zu Beginn werden wir den `3D-example` Ordner nutzen. In der `index.js` Datei befinden sich bereits ein paar Beispiel-Befehle. Diese werden wir im nächsten Abschnitt Schritt für Schritt durchgehen. Um die Vorschau zu starten, wählt die `index.html` Datei aus und nutzt wieder die *Go Live* Erweiterung, um das ganze im Browser zu öffnen. Danach können wir in der  `index.js` arbeiten und sobald wir diese speichern, wird die Vorschau neugeladen. (Die Einstellungen des Viewports im Browser (rotation, zoom, etc.) werden beim Neuladen zurückgesetzt).

Innerhalb der Preview, kann man mit Hilfe der Maus oder das Trackpads die Vorschau rotieren, sowie rein- und raus-zoomen. Weitere Hinweis zum Interface verstecken sich unter dem Einstellungs-Button oben rechts. Über die Einstellungen kann auch die Sprache und das Theme angepasst werden. Das wichtigste Feature befindet sich oben links, die Export-Funktion. JSCAD bietet eine Auswahl an verschiedenen Export-Formaten, wir werden das binary STL format nutzen, da es von allen 3D-Anwendungen unterstützt wird.

Die vollständige Dokumentation für JSCAD ist [hier](https://openjscad.xyz/docs) zu finden.

{{h2('Boilerplate')}}


```js
// importing jscad functions
const jscad = require('@jscad/modeling');
// creating shortcuts
const {cube} = jscad.primitives;

// this is where we draw our shapes
const main = () => {
  const cubeObject = cube();

  // when we are done we return one shape or an array of shapes
  return cubeObject;
}

// this lets javascript know what to execute once we import this
module.exports = { main }
```

Fangen wir oben an. In unserer p5js Boilerplate sind alle Funktionen global verfügbar und ready to go. Hier müssen wir die JSCAD library erst laden: `const jscad = require('@jscad/modeling');`. Danach sind alle Befehle in der Variable `jscad` eingebettet, wie in einem großen verschachtelten Object (siehe 2D / Variablen II). Manche Befehle sind sehr tief in der Objektstruktur versteckt. Um z.B. einen Würfel zu erstellen, lautet das Kommando: `jscad.primitives.cube()`. Damit wir weniger schreiben müssen, werden einzelne Befehle am Anfang in globale Variablen geladen: `const {cube} = jscad.primitives;` dies erlaubt es uns dann einfach `cube()` zu schreiben. Ein weiteres Beispiel: `jscad.transforms.translate()` > `const { translate } = jscad.transforms;` `translate();`.

```js
const main = () => {
  // Here we draw
};
```

Ähnlich wie die `draw()`-Funktion bei p5js, ist bei JSCAD die `main()`-Funktion unsere Funktion zum Zeichnen der 3D-Objekte. Wichtig: die `main`-Funktion wird nur einmal aufgerufen. JSCAD ist keine Software um Animationen oder ähnliches zu erstellen, sonder primär statische 3D-Körper.

> `() => {}` ist kurz für `function () {}`

> `const main = () => {};` speichert die Funktion in der Variable: `main`, so können wir dies dann mit `main();` ausführen.

Die `main` Funktion muss etwas zurückgeben (siehe 2D / Funktionen). Die Rückgabe der `main`-Funktion (return) müssen die Körper und/oder Formen sein, die in der Vorschau für uns gerendert werden. Es kann sich bei der Rückgabe um einzelne Formen handeln oder Arrays mehrerer Formen:

```js
const main = () => {
  const shapes = [];
  shapes.push(cube());
  shapes.push(cube());
  return shapes;
};
```

{{h2('Funktions-Parameter')}}

In p5js haben Kommandos wie z.B. `rect` mehrere Parameters erhalten: `rect(x, y, width, height)`. In JSCAD erhalten die meisten Funktionen ein Objekt. Ein Objekt das mehrere Attribute enthält: `cube({center: [0,0,0], size: 2})`. Diese Art Funktionen zu gestalten hat mehrere Vorteile, z.B. können wir ein Parameter-Objekt erstellen und mehrfach benutzen:

```js
const main = () => {
  const shapes = [];
  const cubeProps = {
    size: 1,
    center: [0, 0, 0]
  };
  for (let c = 0; c < 10; c += 1) {
    shapes.push(translate([0, 0, c * 2], cube(cubeProps));
  }
  return shapes;
};
```