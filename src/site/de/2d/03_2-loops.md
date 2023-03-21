---
title: Schleifen
eleventyNavigation:
  title: Schleifen
  key: de_2d_loops
  parent: de_2d
  order: 4
---

{% from "../../_includes/parts/macros.njk" import video, h2, definition, editor, inspiration, task %}

Nach unseren ersten Experimente, werdet ihr festgestellt haben, dass wenn man komplexere Layouts generieren will, dass man dafür eine Menge Code schreiben muss. Während man natürlich immer etwas Code schreiben muss, können wir sich wiederholende und ähnliche Elemente sehr einfach durch eine Schleife generieren. Ähnlich wie unsere Draw-Schleife, wiederholt eine Schleife eine Reihe an Kommandos mehrfach:

{{h2('While-Schleife')}}

{{video("https://fhpcloud.fh-potsdam.de/s/Yt5xr8GX8RE6b6g/download/de_2d_loops_while.mp4", "/images/thumbnails/de_2d_loops_while.png", "de_2d_loops_while", translations.subtitles[locale], locale)}}
<!--
dg:https://fhpcloud.fh-potsdam.de/s/yWWgw3ni8cnzM7r
de:https://fhpcloud.fh-potsdam.de/s/Yt5xr8GX8RE6b6g/download/de_while.mp4
en:https://fhpcloud.fh-potsdam.de/s/onmYDyYM43GAMRS
-->

Um eine While-Schleife zu starten, müssen wir eine sogenannte "Condition" definieren. So lange diese "Condition" zutrifft läuft die Schleife weiter. Im folgenden Beispiel soll der Loop so lange weiterlaufen, bis die Variable `x` gleich oder größer 10 ist:

{{editor('/code/while', 'https://github.com/FH-Potsdam/learning-parametric-design/blob/main/lectures/2d/loops/while/sketch.js')}}

> Mit Schleifen muss man ein bisschen vorsichtig sein. Denn wenn die "Condition" niemals erreicht wird, läuft eine Schleife möglicherweise endlos weiter und bringt euren Code zum Absturz.

{{h2('Mehrere Schleifen')}}

Wir können Schleifen auch ineinander verschachteln. Wenn wir z.B. ein Raster von Kreisen zeichnen wollen, können wir zwei Schleifen kombinieren, eine für die `x` und eine für die `y` Variable:

{{editor('/code/while_nested', 'https://github.com/FH-Potsdam/learning-parametric-design/blob/main/lectures/2d/loops/whilenested/sketch.js')}}

{{h2('For-Schleife')}}

{{video("https://fhpcloud.fh-potsdam.de/s/dzWFAFiZiYes9HZ/download/de_for.mp4", "/images/thumbnails/de_2d_loops_for.png", "de_2d_loops_for", translations.subtitles[locale], locale)}}
<!--
dg:https://fhpcloud.fh-potsdam.de/s/4ogwmexL6WiDtj9
de:https://fhpcloud.fh-potsdam.de/s/2e55m4LqkzpYKPy/download/de_for.mp4
en:https://fhpcloud.fh-potsdam.de/s/dzWFAFiZiYes9HZ/download/de_for.mp4
-->

Die For-Schleife ist sehr ähnlich zu unserer While-Schleife:

```js
let i = 0;
while (i < 10) {
  i += 1;
}
// the same as:
for (let i = 0; i < 10; i += 1) {
}
```

Um eine For-Schleife zu starten, müssen wir drei Dinge definieren:

1. Den Startwert: `let i = 0;`
2. Die "Condition" wie lange die Schleife laufen soll: `i < 5;`
3. Was am Ende eines Schleifen-Durchlaufs passieren soll: `i += 1`

In den meisten Fällen ist die For-Schleife die schnellere und sauberere variante, da wir alles in einer Zeile definieren können.

{{editor('/code/for', 'https://github.com/FH-Potsdam/learning-parametric-design/blob/main/lectures/2d/loops/for/sketch.js')}}

In dem obigen Beispiel setzen wir die Variable `x` auf `1` wenn unsere Schleife starten. Und die Schleife soll so lange laufen wie `x < 20` ist. Wenn `x` größer `20` ist soll die Schleife stoppen. Bei jedem Schleifendurchlauf addieren wir `1` zu `x` dazu. Das Ergebnis ist, dass unsere Schleife *19*! mal läuft. Innerhalbs unserer Schleife (geschweifte Klammern > ein neuer Scope), können wir die `x`-Variable nutzen. Im obigen Beispiel verändern wir dadurch die x-Position unseres Kreises.

{{h2('Beispiele')}}

Folgend zwei Beispiele für Schleifen.

Ein Raster, welches die gesamte Zeichenfläche ausfüllt:

{{editor('/code/forfilling', 'https://github.com/FH-Potsdam/learning-parametric-design/blob/main/lectures/2d/loops/forfilling/sketch.js')}}

Wir müssen natürlich nicht immer nur einfach 1 dazu addieren, wir können auch andere Dinge mit unserer Variable anstellen (führe den Code mehrfach aus, für weitere Variationen):

{{editor('/code/forrandom', 'https://github.com/FH-Potsdam/learning-parametric-design/blob/main/lectures/2d/loops/forrandom/sketch.js')}}

Die While-Schleife ist z.B. interessant, wenn wir einen zufälligen Wert generieren wollen, der anders ist als eine bereits existierende Zahl:

```js
const num1 = Math.round(Math.random() * 10);
let num2 = num1;
while (num2 === num1) {
  num2 = Math.round(Math.random() * 10);
}
```
Im obigen Beispiel werden zwei Zahlen erstellt. Wenn die Zahlen gleich sind, dann wird der Loop so lange laufen, bis eine Zahl gefunden ist, die anders ist.

{{task("Aufgabe: Schleifen", "Erstelle ein Raster aus Formen und versuche die Random-Funktion dabei einzusetzen.")}}

{{inspiration('Farbvariationen II', 'Verändere die size oder color Variablen und beobachte wie sich das Ergebnis verändert.')}}

{{editor('/code/randomcolor2', 'https://github.com/FH-Potsdam/learning-parametric-design/blob/main/lectures/2d/loops/randomcolors/sketch.js', true)}}