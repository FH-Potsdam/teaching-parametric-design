---
title: Typography
eleventyNavigation:
  title: Typography
  key: en_2d_typography
  parent: en_2d
  order: 2.2
locale: en
layout: default
---

{% from "../../_includes/parts/macros.njk" import video %}
{% from "../../_includes/parts/macros.njk" import h2 %}
{% from "../../_includes/parts/macros.njk" import definition %}
{% from '../../_includes/parts/macros.njk' import editor %}

{{h2('Text')}}

Similar to how we were [drawing shapes](../02_1-drawing) in the previous section, we can also draw text. The positioning and sizing of text works with the same pixel numbers, as for drawing [shapes](../02_1-drawing) like circles or squares. Besides the origin of our text (x/y), we can also define at what point our text breaks into a new line:

VIDEO COMING SOON

{{ definition('text', [
  { name: 'text', type: 'string' },
  { name: 'x', type: 'number' },
  { name: 'y', type: 'number' },
  { name: 'width', type: 'number', optional: true }
]) }}

```js
function draw() {
  text("Hello World", 50, 50, 500);
}
```

Like in every other graphic editing software, we have various options to modify the layout and appearance of our text. With `textAlign` we can define (LEFT/RIGHT/CENTER) in which direct our text flows from the origin (x/y):

{{ definition('textAlign', [
  { name: 'alignment', type: 'LEFT|RIGHT|CENTER' }
]) }}

```js
function draw() {
  textAlign(LEFT);
}
```

The font size `textSize`, the line height `textLeading` and font style `textStyle` can also be defined. Similar to color definitions, everything is read and applied from top to bottom of the code, once a setting is defined, it is being used until overwritten by another setting.

{{ definition('textSize', [
  { name: 'font size', type: 'number' }
]) }}

{{ definition('textLeading', [
  { name: 'line height', type: 'number' }
]) }}

{{ definition('textStyle', [
  { name: 'font style', type: 'NORMAL|ITALIC|BOLD|BOLDITALIC' }
]) }}

```js
function draw() {
  textSize(20);
  textLeading(24);
  textStyle(ITALIC);
  text("Hello World", 50, 50);
}
```

{{h2('Line breaks')}}

Line breaks cannot simply be added in the `text` function. Instead, we need to use a special character (`\n`) to indicate a line break:

```js
function draw() {
  text("Hello\nWorld", 50, 50);
}
```

{{h2('Loading fonts')}}

Over the years, a couple of system fonts have become ubiquitous on all systems (<span style="font-family:Arial;">Arial</span>, <span style="font-family:Verdana;">Verdana</span>, <span style="font-family:Tahoma;">Tahoma</span>, <span style="font-family:Trebuchet MS;">Trebuchet MS</span>, <span style="font-family:Times New Roman;">Times New Roman</span>, <span style="font-family:Georgia;">Georgia</span>, <span style="font-family:Courier New;">Courier New</span>, <span style="font-family:Brush Script M7;">Brush Script M7</span>, <span style="font-family:Impact;">Impact</span>). These can be used very easily:


{{ definition('textFont', [
  { name: 'font family', type: 'string|font-variable' }
]) }}
```js
function draw() {
  textFont("Times New Roman");
  text("Hello World", 50, 50);
}
```

Other fonts need to be loaded first, to be used in our code. This needs to happen in the `preload` function:

{{ definition('loadFont', [
  { name: 'path/file name', type: 'string' }
]) }}
```js
let myFont;
function preload() {
  myFont = loadFont('FHP-Bold.ttf');
}

function draw() {
    textFont(myFont);
    text("Hello World", 50, 50);
}
```

> The path to the font file needs to be set correctly. If you are unsure about this part, simply copy your font file into the same folder as your `index.html` file, then you only need to use the correct file name. Sometimes there are problems with spaces in file names or other special characters.

{{h2('Text width')}}

If you need to know the width of your text, for example to put a colored rectangle underneath your text, there is a simple function to get the width of your text, which is dependent on the font family, font size, etc.:

{{ definition('textWidth', [
  { name: 'text', type: 'string' }
]) }}

```js
function draw() {
  let widthOfText = textWidth("Hello World");
  rect(0, 0, widthOfText, 10);
}
```