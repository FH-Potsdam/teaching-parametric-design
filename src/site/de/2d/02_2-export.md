---
title: Export
eleventyNavigation:
  title: Export
  key: de_2d_more_export
  parent: de_2d
  order: 2.1
---

{% from "../../_includes/parts/macros.njk" import video %}
{% from "../../_includes/parts/macros.njk" import h2 %}
{% from "../../_includes/parts/macros.njk" import definition %}
{% from '../../_includes/parts/macros.njk' import editor %}

{{video("https://fhpcloud.fh-potsdam.de/s/NBKGd2Lg9WXcWNE/download/de_2d_export.mp4", "/images/thumbnails/de_2d_export.png", "de_2d_export", translations.subtitles[locale], locale)}}
<!--
dg: https://fhpcloud.fh-potsdam.de/s/ZJYJYJC7CpRPjwa
de: https://fhpcloud.fh-potsdam.de/s/NBKGd2Lg9WXcWNE
en: https://fhpcloud.fh-potsdam.de/s/bpimHLjWPYDmwi6
-->

{{h2('Pixel')}}

Die Idee hinter dem generieren von Designs durch Code ist diese dann auch in anderen Anwendungen weiternutzen zu können. Und so Design und Artefakte generieren zu können, die über den klassischen Gestaltungsweg nicht möglich oder nur mit sehr viel Aufwand möglich sind. Der einfachste Export sind Raster-Bild auf Pixelbasis. Um ein Bild zu exportieren müssen wir einfach nur das `save()` Kommando nutzen:

```js
function draw() {
  // drawing code
  noLoop();
  save();
}
```

Wenn man den `save`-Befehl aus der draw-Schleife heraus aufruft, sollte man den `noLoop()`-Befehl nicht vergessen. Anderenfalls versucht der Browser nämlich ganz viele Bilder (bei jedem Schleifendurchlauf) abzuspeichern. Alternativ ist es besser das Speichern einfach über ein Tastatur- oder Maus-Event auszulösen:

```js
function keyReleased() {
  save();
}
```

Wir können auch den Dateinamen unserer Datei angeben:
```js
save("myImage.png");
```

Wenn man eine Serie von Bilder exportieren möchte, sollte man diese am besten durchnummerieren:
```js
let counter = 1;
function draw() {
  // drawing code
  if (count < 10) {
    // use the if to stop after 10
    save("image" + counter + ".png");
  }
  counter += 1;
} 
```

{{h2('Vektordaten')}}

Rasterbilder sind für viele Anwendungsfälle ein guter Start, aber gerade wenn wir die Informatione weiterverarbeiten wollen, benötigen wir in der Regel Vektordaten. Hierzu können wir aus p5js heraus auch **SVGs** exportieren. SVGs sind ein standardisiertes Vektordatenformat, welches eigentlich von allen gängigen Anwendungen genutzt werden können (z.B. Illustrator, Sketch, Figma, etc. aber auch 3D-Anwendungen wie Blender, Fusion oder Rhino). Damit wir aus p5js SVGs exportieren können, müssen wir den sogenannten "Renderer" wechseln. Dies müssen wir lediglich angeben, wenn wir unsere Zeichenfläche erstellen:

```js
function setup() {
  createCanvas(400, 400, SVG);
}
```

> Nicht alle Funktionen funktionieren für den Vektor-Renderer (oder machen Sinn). Aber alle 2D-Befehle die wir bisher durchgenommen haben, können problemlos eingesetzt werden.

> Falls du dein eigenes p5js-Vektor-Projekt erstellst und nicht unsere Boilerplate nutzt, dann musst du sicherstellen, dass du auch die  [SVG-library](https://github.com/zenozeng/p5.js-svg) in der `index.html` eingebunden hast.

Als interessanten Bonus findet ihr im Bonus-Bereich ein Beispiel wie ihr auch animierte GIFs aus euren Design erstellen könnt. Hierfür wir die [createLoop](https://github.com/mrchantey/p5.createLoop#readme) library [genutzt](gif.md).

{{h2('Mehr p5js')}}

In den letzten Einheiten haben wir die Grundlagen von p5js kennengelernt, aber es gibt natürlich noch viel mehr zu entdecken:

- Im Bonus-Bereich der Website findet ihr weitere thematische Vertiefungen
- Mehr Befehle in der [Dokumentation](https://p5js.org/reference/)
- Zusätzliche [Libraries](https://p5js.org/libraries/) anderer Entwickler*innen für p5js
- Mehr und tiefergehende Tutorials gibt es beim großartigen [Coding Train](https://thecodingtrain.com/)
- Die Beispiele aus dem Buch "Generative Gestaltung", sind auch [online](http://www.generative-gestaltung.de/) verfügbar