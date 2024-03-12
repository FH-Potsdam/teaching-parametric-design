---
title: Typographie
eleventyNavigation:
  title: Typographie
  key: de_2d_typography
  parent: de_2d
  order: 2.2
locale: de
layout: default
---

{% from "../../_includes/parts/macros.njk" import video %}
{% from "../../_includes/parts/macros.njk" import h2 %}
{% from "../../_includes/parts/macros.njk" import definition %}
{% from '../../_includes/parts/macros.njk' import editor %}

{{h2('Text')}}

Genauso wie wir in unserem Koordinatensystem [Formen zeichnen](../02_1-drawing) können, ist es auch möglich Schrift zu setzen. Die Positionierung basiert auf den selben Pixelangaben, wie sie bei [Formen](../02_1-drawing) wie Kreisen und Quadraten genutzt wurden. Neben dem Nullpunkt unseres Textes (x/y), können wir mit dem dritten Parameter angeben, wie breit der Text maximal laufen darf, bis es zu einem Umbruch kommt:

{{video("https://fhpcloud.fh-potsdam.de/s/nQt9fdnTZQA2BsN/download/de_2d_typography_intro.mp4", "/images/thumbnails/de_2d_typography_intro.png", "de_2d_typography", translations.subtitles[locale], locale, "https://fhpcloud.fh-potsdam.de/s/nQt9fdnTZQA2BsN/download/de_2d_typography_intro.mp4")}}

<!-- DG MISSING! -->

{{ definition('text', [
  { name: 'Text', type: 'Text' },
  { name: 'x', type: 'Zahl' },
  { name: 'y', type: 'Zahl' },
  { name: 'Breite', type: 'Zahl', optional: true }
]) }}

```js
function draw() {
  text("Hello World", 50, 50, 500);
}
```

Wie in jedem anderen Grafikprogramm, haben wir verschiedene Möglichkeiten das Aussehen und das Layout unseres Textes zu beeinflussen. Durch `textAlign` kann definiert werden (LEFT/RIGHT/CENTER) in welche Richtung von der angegebenen Koordinate aus (x/y) der Text verläuft:

{{ definition('textAlign', [
  { name: 'Ausrichtung', type: 'LEFT|RIGHT|CENTER' }
]) }}

```js
function draw() {
  textAlign(LEFT);
}
```

Die Schriftgröße `textSize`, der Zeilenabstand `textLeading` und der Schnitt `textStyle` können ebenfalls definiert werden. Wie bei den Farbangaben ist zu beachten, dass die Definitionen von oben nach unten bearbeitet werden und so lange fortbestand haben, bis diese durch eine andere Vorgabe überschrieben werden.

{{ definition('textSize', [
  { name: 'Schriftgröße', type: 'Zahl' }
]) }}

{{ definition('textLeading', [
  { name: 'Zeilenabstand', type: 'Zahl' }
]) }}

{{ definition('textStyle', [
  { name: 'Schriftschnitt', type: 'NORMAL|ITALIC|BOLD|BOLDITALIC' }
]) }}

```js
function draw() {
  textSize(20);
  textLeading(24);
  textStyle(ITALIC);
  text("Hello World", 50, 50);
}
```

{{h2('Zeilenumbrüche')}}

Zeilenumbrüche können nicht einfach in der `text` Funktion eingegeben werden. Diese müssen mit einer Art Sonderzeichen (`\n`) angezeigt werden:

```js
function draw() {
  text("Hello\nWorld", 50, 50);
}
```

{{h2('Schriften laden')}}

Über die Jahre haben sich einige Schriften auf allen Systemen durchgesetzt (<span style="font-family:Arial;">Arial</span>, <span style="font-family:Verdana;">Verdana</span>, <span style="font-family:Tahoma;">Tahoma</span>, <span style="font-family:Trebuchet MS;">Trebuchet MS</span>, <span style="font-family:Times New Roman;">Times New Roman</span>, <span style="font-family:Georgia;">Georgia</span>, <span style="font-family:Courier New;">Courier New</span>, <span style="font-family:Brush Script M7;">Brush Script M7</span>, <span style="font-family:Impact;">Impact</span>). Diese können einfach genutzt werden:


{{ definition('textFont', [
  { name: 'Schriftfamilie', type: 'Text|Font-Variable' }
]) }}
```js
function draw() {
  textFont("Times New Roman");
  text("Hello World", 50, 50);
}
```

{{video("https://fhpcloud.fh-potsdam.de/s/DzSm9CWCaDt8Pnt/download/de_2d_typography_fonts.mp4", "/images/thumbnails/de_2d_typography_fonts.png", "de_2d_typography", translations.subtitles[locale], locale, "https://fhpcloud.fh-potsdam.de/s/nQt9fdnTZQA2BsN/download/de_2d_typography_fonts.mp4")}}

<!-- DG MISSING! -->

Andere Schriften müssen erst geladen werden, damit diese genutzt werden können. Dies muss in der `preload` Funktion passieren:

{{ definition('loadFont', [
  { name: 'Pfad/Dateiname', type: 'Text' }
]) }}
```js
let meineSchrift;
function preload() {
  meineSchrift = loadFont('FHP-Bold.ttf');
}

function draw() {
    textFont(meineSchrift);
    text("Hello World", 50, 50);
}
```

> Der Pfad zu den Schriftdateien muss korrekt angegeben werden. Wenn du dir unsicher bist, kopiere dein Schriften in den selben Ordner wie deine `index.html` Datei, dann musst du nur den korrekten Dateinamen angeben. Es kann manchmal Probleme geben, wenn Dateinamen Leerzeichen oder andere Sonderzeichen enthalten.

{{h2('Textbreite')}}

Wenn wir z.B. einen Text farbig hinterlegen wollen, müssen wir wissen wie breit der Text tatsächlich ist, da dies abhängig von Schriftgröße, Schriftschnitt, etc. ist, gibt es hierfür eine einfache Funktion um dies herauszufinden:

{{ definition('textWidth', [
  { name: 'Text', type: 'Text' }
]) }}

```js
function draw() {
  let textBreite = textWidth("Hello World");
  rect(0, 0, textBreite, 10);
}
```