---
title: Operationen
eleventyNavigation:
  title: Operationen
  key: de_3d_operations
  parent: de_3d
  order: 5
layout: default
locale: de
---

{% from "../../_includes/parts/macros.njk" import video, h2, definition, img, task, inspiration, link3d, github %}

{{h2('Align')}}

Nachdem man mehrere Objekte erstellt hat, kann man diese an ihren Kanten ausrichten, ähnlich wie wir dies auch Grafikanwendungen kenn. Hierbei können wir auf den drei Achsen auswählen, ob die Objekte mittig (center), am kleinsten (min) oder größten Punkt (max)  ausgerichtet werden. Die Objekte werden einfach als Array übergeben:

```js
const shapes = [
  cube({center: [0, 0, 10]}),
  cube({center: [0, 10, 20]}),
  cube({center: [10, 0, 30]})
];

const alignedShapes = align(
  {
    modes: ['center', 'max', 'none'], // align along axis: center, min, max, none
    realtiveTo: [0,0,0]
  },
  shapes
);
```

{{h2('Boolsche Operationen')}}

```js
const {union, subtract, intersect, scission} = jscad.booleans;
```
{{video("https://fhpcloud.fh-potsdam.de/s/H6pxGHAK3L2toz8/download/de_3d_operations_intro.mp4", "/images/thumbnails/de_3d_operations_intro.png", "de_3d_operations_intro", translations.subtitles[locale], locale)}}
<!--
de: https://fhpcloud.fh-potsdam.de/s/H6pxGHAK3L2toz8
en: https://fhpcloud.fh-potsdam.de/s/CTpg3ZoW4MeTbg4
-->

{{img('boolean.png', 'Die unterschiedlichen boolschen Operation')}}

### Union

{{video("https://fhpcloud.fh-potsdam.de/s/Qx4nJMdWEMZJcLH/download/de_3d_operations_union.mp4", "/images/thumbnails/de_3d_operations_union.png", "de_3d_operations_union", translations.subtitles[locale], locale)}}
<!--
de: https://fhpcloud.fh-potsdam.de/s/Qx4nJMdWEMZJcLH
en: https://fhpcloud.fh-potsdam.de/s/W7nGNox8GxSgaZx
-->

{{img('union.png', 'Union: Mehrere Objekt miteinander kombinieren')}}

Mit `union` können wir ein Array mit Objekten zu einem neuen zusammenführen. Hierbei werden die genauen Schnittkanten berechnet und es entsteht eine komplett neue Geometrie:

```js
const shapes = [
  cube({size: 4}),
  sphere({radius: 2, center: [2, 2, 2]})
];
const unionShape = union(shapes);
return unionShape;
```

### Subtract

{{video("https://fhpcloud.fh-potsdam.de/s/tNptWrS8MsR8Wgc/download/de_3d_operations_subtract.mp4", "/images/thumbnails/de_3d_operations_subtract.png", "de_3d_operations_subtract", translations.subtitles[locale], locale)}}
<!--
de: https://fhpcloud.fh-potsdam.de/s/tNptWrS8MsR8Wgc
en: https://fhpcloud.fh-potsdam.de/s/YBSTc2sotQqjjL4
-->

{{img('subtract.png', 'Subtract: Von einem 3D-Objekt andere 3D-Objekte abziehen')}}

Übergeben wird wie bei `union` ein Array mit Elementen. Vom ersten Objekt im Array, werden alle weiteren abgezogen:

```js
const shapes = [
  cube({size: 4}),
  sphere({radius: 2, center: [2, 2, 2]})
];
const subtractShape = subtract(shapes);
return subtractShape;
```

### Intersect

{{video("https://fhpcloud.fh-potsdam.de/s/AbTmmBszxJebZSf/download/de_3d_operations_intersect.mp4", "/images/thumbnails/de_3d_operations_intersect.png", "de_3d_operations_intersect", translations.subtitles[locale], locale)}}
<!--
de: https://fhpcloud.fh-potsdam.de/s/AbTmmBszxJebZSf
en: https://fhpcloud.fh-potsdam.de/s/aagrSLH7RxbPQnD
-->

{{img('intersect.png', 'Intersect: Überschneidung mehrer Objekte')}}

Auch hier wird wieder ein Array mit mehreren Objekten übergeben. Dabei versucht `intersect` eine Überschneidungsfläche oder -volumen zu finden, an der sich alle Formen im Array überlappen:

```js
const shapes = [
  cube({size: 4}),
  sphere({radius: 2, center: [2, 2, 2]})
];
const intersectShape = intersect(shapes);
return intersectShape;
```

### Scission

{{video("https://fhpcloud.fh-potsdam.de/s/YsaMsWnaqQYDfQr/download/de_3d_operations_scission.mp4", "/images/thumbnails/de_3d_operations_scission.png", "de_3d_operations_scission", translations.subtitles[locale], locale)}}

<!--
de: https://fhpcloud.fh-potsdam.de/s/YsaMsWnaqQYDfQr
en: https://fhpcloud.fh-potsdam.de/s/iPkWfwqLNzFFQyA
-->

Ein Objekt kann in Theorie auch aus mehreren nicht mit einander verbundenen Formen bestehen. Dies kann passieren wenn wir über `union` zwei Formen vereinigen die sich nicht berühren, oder wenn wir `subtract` benutzen und durch das Entfernen eines Bereiches mehrere nicht mehr mit einander verbundene Elemente entstehen. In solchen Fällen können wir `scission` nutzen, um diese Ansammlung nicht verbundener Elemente wieder voneinander zu trennen. Scission akzeptiert ein Objekt und gibt mehrere Objekte zurück (falls es mehrere nicht mit einander Verbundene Elemente gibt):

```js
const cubeShape = cube({size: 4});
const sphereShape = sphere({radius: 2, center: [2, 2, 2]});

const cut1 = subtract([cubeShape, sphereShape]);
const cut2 = subtract([sphereShape, cubeShape]);
const unionShape = union([
  translate([0,0,0], cut1),
  translate([0,0,5], cut2)
]);

const scissionShapes = scission(unionShape);
```

Im obigen Beispiel gibt `scission` ein Array mit zwei Elementen zurück (also die ursprünglichen Elemente vor dem Union-Befehl).

{{task('Aufgabe: Union & Subtract', 'Erstelle zuerst ein Objekt in dem du mehrere Körper mit einander kombinierst (**union**). Nutze dann die **subtract**-Funktion, um vom ersten Körper weitere abzuziehen.')}}

{{inspiration('Raspberry Pi Gehäuse')}}

Das Gehäuse basiert auf den [technischen Zeichnungen](https://www.raspberrypi.com/documentation/computers/raspberry-pi.html) des Raspberry Pi, besonders die Position der Schraublöcher. Das Gehäuse wird durch Variablen definiert und kann so einfach auch an andere Micro-Computer-Typen angepasst werden.

{{link3d('/code/3d/case', 'Open "Raspi Case"')}}

{{img('example3d-case.png', 'Ein Gehäuse für den Raspberry Pi, mit Schraublöchern')}}

{{github('https://github.com/FH-Potsdam/learning-parametric-design/blob/main/lectures/3d/case')}}