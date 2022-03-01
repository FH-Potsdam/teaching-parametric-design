---
title: Introduction
eleventyNavigation:
  title: Intro
  key: de_introduction
  order: 0
  parent: de
---

{% from "../_includes/parts/macros.njk" import h2, definition %}

{{h2('Introduction to Parametric Design')}}

Video with lecture and link to slides.

{{h2('How to use the website')}}

The material for this course is not only offered in different languages, but also offers you the choice to choose between your preferred learning style. You can just *read* all the text, you can *watch* the videos or download the code examples and learn by *experimenting* with the code.

All videos come with subtitles. Use the little button in the lower right to activate them. If you cannot activate them, switch to a different browser. For privacy reasons we are not using a video hosting service like YouTube. We are using the browser's native video player, which is slightly different depending on which browser you use. Underneath each video, you find a link to the code shown in the video.

SUBTITLE IMAGE

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

Under [Extras](extras/index.md) you will find additional material, which might be helpful, but it is not mandatory to finish the course. The [Bonus-section](bonus/index.md) contains thematic deep dives, which were based on discussions or questions, for example how to use audio-files as input. The bonus material will likely increase over time and is only available in written German and English.