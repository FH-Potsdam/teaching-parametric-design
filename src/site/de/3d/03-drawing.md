---
title: Zeichnen
eleventyNavigation:
  title: Zeichnen
  key: de_3d_drawing
  parent: de_3d
  order: 3
---

{% from "../../_includes/parts/macros.njk" import video, h2, definition, img, task, inspiration %}

## 2D Basisformen

{{video("https://fhpcloud.fh-potsdam.de/s/gJSXCSgYinskq6X/download/de_3d_drawing_2d.mp4", "/images/thumbnails/de_3d_drawing_2d.png", "de_3d_drawing_2d", translations.subtitles[locale], locale)}}

<!--
de: https://fhpcloud.fh-potsdam.de/s/gJSXCSgYinskq6X
en: https://fhpcloud.fh-potsdam.de/s/6wEjNRJBkRz5Xmd
-->

```js
const {line, arc, circle, ellipse, rectangle} = jscad.primitives;
```

2D-Formen (2D primitives) sind ein guter Startpunkt. Man kann später Extrusion- oder ExpansionFunktionen nutzen, um aus den 2D-Formen 3D-Körper zu generieren (siehe 3D / Extrusion).

Die Dokumentation aller 2D Primitives findet sich [hier](https://openjscad.xyz/docs/module-modeling_primitives.html). 

{{h2('Linie')}}

Der `line`-Befehl benötigt ein Array mit x/y-Koordinaten:

```js
const shape = line([
  [x1, y1],
  [x2, y2]
]);
```

> Man kann auch mehr Punkte übergeben, um einen Pfad zu generieren.

{{h2('Kreisbogen')}}

Der `arc`-Befehl generiert ebenfalls eine Linie und funktioniert ähnliche wie der `arc`-Befehl bei p5js:

```js
const shape = arc({
  center: [0, 0],
  radius: 1,
  startAngle: 0,
  endAngle: Math.PI * 2, //full arc
  segments: 32 // level of detail
});
```

> Fast alle Attribute der Parameter-Objekte sind optional, jede Funktion hat immer Standardwerte die bei fehlenden Attributen eingesetzt werden.

{{h2('Kreis')}}

```js
const shape = circle({
  center: [0, 0],
  radius: 1,
  startAngle: 0,
  endAngle: Math.PI * 2, //full arc
  segments: 32 // level of detail
});
```

> Das `circle`-Kommando sieht genauso aus, wie das `arc`-Kommando, der Unterschied ist, dass `arc` einen Pfad zurückgibt und `circle` ein Polygon.

{{h2('Ellipse')}}

Der `circle`-Befehl und der `ellipse`-Befehl akzeptieren ähnliche Parameter, im Gegensatz zum Kreis, kann man bei der Ellipse den Radius als Array angeben, um unterschiedliche Breiten- und Höhenangaben zu machen:

```js
const shape = ellipse({
  center: [0, 0],
  radius: [1,1],
  startAngle: 0,
  endAngle: Math.PI * 2, //full arc
  segments: 32 // level of detail
});
```

> Alle Formen oder Körper die Rundungen aufweisen, haben ein `segments`-Attribut. Hierüber können wir den Detailgrad / Rundung der Kurven definieren. Mehr Segmente generieren rundere Kurven, gleichzeitig führen mehr Segmente auch zu mehr Vertices (größere Dateien, längere Renderingzeiten, etc.).

{{h2('Rechteck')}}

```js
const shape = rectangle({
  size: [2, 2],
  center: [0, 0, 0]
});
```


## 3D-Körper (primitives)

{{video("https://fhpcloud.fh-potsdam.de/s/LxYHETDD3QJayF9/download/de_3d_drawing_3d.mp4", "/images/thumbnails/de_3d_drawing_3d.png", "de_3d_drawing_3d", translations.subtitles[locale], locale)}}

<!--
de: https://fhpcloud.fh-potsdam.de/s/LxYHETDD3QJayF9
en: https://fhpcloud.fh-potsdam.de/s/rBCA9q9MfK7LtxB
-->

```js
const {cube, sphere, cylinder} = jscad.primitives;
```

Die Dokumentation aller Primitives gibt es [hier](https://openjscad.xyz/docs/module-modeling_primitives.html).

{{h2('Würfel')}}

```js
const shape = cube({
  size: 1,
  center: [0, 0, 0]
});
```

{{h2('Kugel')}}

```js
const shape = sphere({
  radius: 1,
  center: [0, 0, 0]
});
```

{{h2('Zylinder')}}

```js
const shape = cylinder({
  center: [0, 0, 0],
  height: 2,
  radius: 1,
  segments: 32
});
```

Hier sind ein paar weitere 3D primitives, Beispiele dafür wie man diese Konstruiert sind in der Boilerplate enthalten:

- [cuboid](https://openjscad.xyz/docs/module-modeling_primitives.html#.cuboid)
- [roundedCuboid](https://openjscad.xyz/docs/module-modeling_primitives.html#.roundedCuboid)
- [geodesicSphere](https://openjscad.xyz/docs/module-modeling_primitives.html#.geodesicSphere)
- [ellipsoid](https://openjscad.xyz/docs/module-modeling_primitives.html#.ellipsoid)
- [roundedCylinder](https://openjscad.xyz/docs/module-modeling_primitives.html#.roundedCylinder)
- [cylinderElliptic](https://openjscad.xyz/docs/module-modeling_primitives.html#.cylinderElliptic)
- [torus](https://openjscad.xyz/docs/module-modeling_primitives.html#.torus)

{{task('Aufgabe: JSCAD kennenlernen', 'Erkunde die verschiedenen 2D und 3D primitives. Experimenteire mit den veschiedenen Properties und wie diese den output verändern.')}}