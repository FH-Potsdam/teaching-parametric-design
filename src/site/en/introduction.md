---
title: Introduction
eleventyNavigation:
  title: Intro
  key: en_introduction
  order: 0
  parent: en
---

{% from "../_includes/parts/macros.njk" import h2, definition, video, img %}

{{h2('Introduction to Parametric Design')}}

{{video("https://fhpcloud.fh-potsdam.de/s/soZc2mA9kSpRxxL/download/en_introduction.mp4", "/images/thumbnails/en_introduction.png", "en_introduction", translations.subtitles[locale], locale)}}

<!--
de: https://fhpcloud.fh-potsdam.de/s/GGGf4jo8z927c9x
en: https://fhpcloud.fh-potsdam.de/s/soZc2mA9kSpRxxL
-->

{{h2('How to use the website')}}

The material for this course is not only offered in different languages, but also offers you the choice to choose between your preferred learning style. You can just *read* all the text, you can *watch* the videos or download the code examples and learn by *experimenting* with the code.

All videos come with subtitles. Use the little button in the lower right to activate them. If you cannot activate them, switch to a different browser. For privacy reasons we are not using a video hosting service like YouTube. We are using the browser's native video player, which is slightly different depending on which browser you use.

{{ img('subtitles.png', 'Enabling subtitles.') }}

Whenever a new function/command is introduced, we will provide a short definition, followed by an example:

{{ definition('createCanvas', [
  { name: 'width', type: 'number' },
  { name: 'height', type: 'number' },
  { name: 'renderer', type: 'string', optional: true }
]) }}

```js
function setup() {
  createCanvas(400, 400);
}
```

The first line shows the parameters this function accepts. This definition explains how many and of which type the parameters must be. If a parameter has an **\***, then this parameter is optional. The most common parameter types are:

- **number**: 1, 2, 0.5, -10.4
- **string**: 'Any kind of text'
- **boolean**: true, false

> Additional useful coding advice is highlighted in these blue boxes.

{{h2('Editor', 'Editor')}}

For p5js an inline editor allows you to quickly experiment with code directly in the website. To execute the code, click the left button in the upper right corner. To copy the code and use it in your own project, use the button in the upper right. A link to the source code is provided below the editor. 

{{ img('editor.png', 'Inline Code Editor.') }}

The JSCAD preview is a lot more resource intensive, therefore, we open the JSCAD previews in a new tab/window, instead of an inline preview.

### Extras & Bonus

Under [Extras](/en/extras/) you will find additional material, which might be helpful, but it is not mandatory to finish the course. The [Bonus-section](/en/bonus/) contains thematic deep dives, which were based on discussions or questions, for example how to use audio-files as input. The bonus material will likely increase over time and is only available in written German and English.

{{h2('Understanding Code', 'Understanding Code')}}

The [CodeBot](/en/enhance/) helps you read and understand p5js code, whether it is an example from this course, a sketch you found online or your own project. Paste your code into the text field and click **Enhance**. Every p5js function in your code is then turned into a link:

- If a function is covered in this course, the link leads directly to the matching chapter and video on this website.
- All other functions link to the official [p5js reference](https://p5js.org/reference/) and the [Mozilla reference](https://developer.mozilla.org).

Hover over a link to see a small preview of the video. Next to the code, a list collects all the functions used in your sketch, so you can work through them one by one. The **Copy** button copies the code to your clipboard.

> The list also shows you which videos you have already watched.

{{ img('enhance.jpg', 'Code enriched with links to the course material and the p5js reference.', '75%') }}
