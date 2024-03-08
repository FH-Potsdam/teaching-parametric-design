---
title: Transformationen
eleventyNavigation:
  title: Transformationen
  key: de_3d_transformations
  parent: de_3d
  order: 3.5
layout: default
locale: de
---

{% from "../../_includes/parts/macros.njk" import video, h2, definition, img, task, inspiration %}

Jede **Transformation** eines 2D- oder 3D-Objekts generiert eine neue Instanz dieses Objektes. Dies bedeutet, dass wenn wir unser Objekt an eine Funktion übergeben, gibt uns diese dann ein neues zurück, welches wir dann in eine Variable speichern können. Dies hat den Vorteil, dass wir ein und das selbe Objekte mehrfach benutzen können (siehe am Ende der Seite einen Input für effizientes Vorgehen bei vielen Transformationen).

{{h2('Farben')}}

{{video("https://fhpcloud.fh-potsdam.de/s/48gsXjqzbbLxGmz/download/de_3d_transformations_colorize.mp4", "/images/thumbnails/de_3d_transformations_colorize.png", "de_3d_transformations_colorize", translations.subtitles[locale], locale)}}

<!--
de: https://fhpcloud.fh-potsdam.de/s/48gsXjqzbbLxGmz
en: https://fhpcloud.fh-potsdam.de/s/J4yoWNnmawzrYQM
-->

```js
const {colorize, colorNameToRgb} = jscad.colors;
```

> Farben können uns bei der Entwicklung und beim Prototypen helfen, um z.B. verschiedene Teil von einander unterscheiden zu können. Dabei sollte man aber im Hinterkopf haben, dass die Farben in der Regel beim Export verloren gehen und man diese dann eventuell in einer anderen Software erneut anwenden muss.

Wir können entweder RGB-Werte nutzen:

```js
const shape = colorize([R, G, B], cube());
```

> Wichtig: Der RGB-Bereich geht nicht von 0 bis 255, sondern von 0 bis 1.

Oder wir können auch CSS Farbnamen nutzen:

```js
const shape = colorize(colorNameToRgb('black'), cube());
```

{{h2('Transformationen')}}

{{video("https://fhpcloud.fh-potsdam.de/s/QPkkPMNra3GcfJT/download/de_3d_transformations_transformations.mp4", "/images/thumbnails/de_3d_transformations_transformations.png", "de_3d_transformations_transformations", translations.subtitles[locale], locale)}}

<!--
de: https://fhpcloud.fh-potsdam.de/s/QPkkPMNra3GcfJT
en: https://fhpcloud.fh-potsdam.de/s/ycBJZ2a88Y8gc5i
-->

```js
const {translate, rotate, scale, center, align} = jscad.transforms;
```


Die Dokumentation aller Transformationen gibt es [hier](https://openjscad.xyz/docs/module-modeling_transforms.html).

Ähnlich zu den Transformationen die wir bereits vom p5js Koordinatensystem kennen, können wir bei JSCAD individuelle Objekte transformieren. In JSCAD beziehen sich die Transformation also immer nur auf das Objekt welches wir übergeben und nicht auf alle die wir danach generieren.

### Verschieben

Ein Objekt entlang der x/y/z-Achsen verschieben:

```js
const shape = translate([0, 0, 5], cube());
```

### Drehung

Ähnlich wie bei p5js, wird das Objekt um den Nullpunkt gedreht (entlang der x/y/z-Achse). Soll sich das Objekt um sich selber drehen, müssen wir erst eine Rotation durchführen und danach eventuelle Verschiebungen, etc.:

```js
const shape = rotate([0, 0, Math.PI / 2], cube());
```

### Skalieren

Vergrößern oder verkleinern eines Objektes, entlang der 3 Achsen. Die Werte werden mit der aktuellen Größe multipliziert (2 > doppelt so groß, 0.5 > halb so groß):

```js
const shape = scale([0, 2, 0], cube());
```

### Zentrieren

Über die `center`-Funktion kann ein Objekt auf einer Achse zentriert werden. Werden entsprechend alle Achsen auf `true` gesetzt, liegt das Objekt nachher auf `[0,0,0]`:

```js
const shape = center([true, true, true], cube());
```

{{h2('Schleifen')}}

Jede Transformation generiert eine neue Instanz, zu Beginn ist es am einfachsten, dies einfach in eine neue Variable zu speichern. Aber umso mehr Transformationen und Objekte generiert werden, umso unübersichtlicher wird dies. Zum einen können wir unsere Objekte natürlich in Arrays & Objects speichern und zum anderen können wir auch Variablen einfach überschreiben und ersparen uns so unnötig viele Variablen:

{{video("https://fhpcloud.fh-potsdam.de/s/3gpzE9x3CiHFySf/download/de_3d_transformations_loops.mp4", "/images/thumbnails/de_3d_transformations_loops.png", "de_3d_transformations_loops", translations.subtitles[locale], locale)}}

<!--
de: https://fhpcloud.fh-potsdam.de/s/3gpzE9x3CiHFySf
en: https://fhpcloud.fh-potsdam.de/s/HyCYdBfaWi49Lzm
-->

{{task('Aufgabe: Mehrere Transformationen', 'Das Transformieren ist ähnlich wie bei p5js, aber doch irgendwie ganz anders. Versuche einen Loop zu generieren in dem einfache 3D-Körper transformiert werden (z.B. translate and rotate). Versuche dann aus der Schleife heraus ein Muster zu generieren.')}}