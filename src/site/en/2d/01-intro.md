---
title: Intro
eleventyNavigation:
  title: Intro
  key: en_2d_intro
  parent: en_2d
  order: 1
---

{% from "../../_includes/parts/macros.njk" import video, task, h2, definition, img %}

{{h2('p5js')}}

{{ img('p5js-logos.png', 'Logos of p5js (JavaScript) and the Java Processing ide / library.') }}

For creating our code-based design tools, we will be using the JavaScript framework [p5js](https://www.p5js.org). p5js is an offspring of the java-based [Processing](https://processing.org/) system. Why learn JavaScript? Isn't JavaScript for building websites? Yes and no. JavaScript was originally developed to allow developers build interactivity into websites (and it still is). But since then NodeJS emerged, which allows you to run JavaScript code indepently from any browser on your computer. In this context JavaScript has become a lot more powerfull. You can now use it for example to read, edit and create files on your computer. So JavaScript has become an extremely versatile programming language. In addition, its rather easy to get started with and quite "flexible" (more experienced coders hate JavaScript for its "flexibility", but for getting started, this is perfect, don't let them fool you).

There are a lots of frameworks / libraries / packages for JavaScript out there. Those tools are collections of so called functions, other people have written, so we can use them to do certain things, in the case of **p5js** for example the drawing and creation of shapes. You can think of libraries as little toolboxes. So every time you need to put a nail into a wall, you don't need to create a hammer from scratch, but instead you can simple take the hammer from the box and use it.

*So let's create our first p5js project!*

{{h2('New Project')}}

{{video("https://fhpcloud.fh-potsdam.de/s/geCyAfQbfg4P3Fe/download/en_new.mp4", "/images/thumbnails/en_2d_intro_new.png", "en_2d_intro_new", translations.subtitles[locale], locale)}}
<!--
de:https://fhpcloud.fh-potsdam.de/s/pSgDkqb8yGmeyiP/download/de_new.mp4
en:https://fhpcloud.fh-potsdam.de/s/geCyAfQbfg4P3Fe/download/en_new.mp4
-->

1. Go to the `code` folder.
2. Create a copy of the `code/example` folder and paste it into the `code` folder and rename it.
3. Click on the new `index.html` and click on the **Go Live** button at the bottom of VS Code.
4. Open `code/YOUR-NEW-FOLDER/script.js`
5. Let's go!


{{h2('Reference')}}

{{video("https://fhpcloud.fh-potsdam.de/s/rdnq32A7DzzttbF/download/en_reference.mp4", "/images/thumbnails/en_2d_intro_ref.png", "en_2d_intro_ref", translations.subtitles[locale], locale)}}
<!--
de:https://fhpcloud.fh-potsdam.de/s/JGYB3Dor9BRRaJ2/download/de_reference.mp4
en:https://fhpcloud.fh-potsdam.de/s/rdnq32A7DzzttbF/download/en_reference.mp4
-->

If you are not sure about the name of a function or what parameters to use. You can also take a look at the p5js [reference](https://p5js.org/reference/).

{{h2('Sketch')}}

In the p5js documentation you will sometimes read, that a project is called a **sketch**. This is a bit of a legacy from the former Processing tool. But let's stick with this for now. A sketch has at least two files `index.html` and `script.js`. In this seminar we will not edit the `index.html` file, this file basically tells the browser to load the p5js library and our `script.js` file and execute it.

For those who are interested, i have created a super [short introduction](html.md) to html. But you don't need any of this for this class.

### sketch.js

{{video("https://fhpcloud.fh-potsdam.de/s/mLDgRoAWRSiefNb/download/en_sketch.mp4", "/images/thumbnails/en_2d_intro_sketch.png", "en_2d_intro_ref", translations.subtitles[locale], locale)}}
<!--
de:https://fhpcloud.fh-potsdam.de/s/m6fSyAmSRJoMSRR/download/de_sketch.mp4
en:https://fhpcloud.fh-potsdam.de/s/mLDgRoAWRSiefNb/download/en_sketch.mp4
-->

The `sketch.js` file is where all the magic happens. Here we will write our code to generate our designs. When you create a fresh copy from the example directory your file should look like this:

```js
function preload() {
  // preloading
}

function setup() {
  createCanvas(400, 400);
  // preparations
}

function draw() {
  background(220);
  // drawing
}
```

There is already a lot going on. Above you see three so called functions (we will talk about functions more later). The **preload**, **setup** and the **draw** function. Everything that is written inside the two curly brackets `{` and `}` belongs to that function.

> In the videos and descriptions i sometimes use **function** and **command** interchangeably.

{{ img('p5js-cycle.svg', 'p5js\' program cycle') }}

### preload function

The **preload** function is called once before the rest is called. In this function we can load the assets we need later on, for example: images, fonts and data.


### setup function

The **setup** function is called only once in the beginning when our project starts. Inside the setup function we place preparations like creating the canvas that we want to draw on (`createCanvas`).

### draw function

The **draw** function is continously called once **setup** is finished. In the beginning this does not really matter as we are drawing static elements, but later on we will create moving elements, then this becomes very helpful.

{{h2('Comments')}}

{{video("https://fhpcloud.fh-potsdam.de/s/2HEDwNWoL6RNLHM/download/en_comments.mp4", "/images/thumbnails/en_2d_intro_comments.png", "en_2d_intro_comments", translations.subtitles[locale], locale)}}
<!--
de:https://fhpcloud.fh-potsdam.de/s/WsxqZSo4zPZkZgH/download/de_comments.mp4
en:https://fhpcloud.fh-potsdam.de/s/2HEDwNWoL6RNLHM/download/en_comments.mp4
-->

If you want to write a comment in your code or you want to temporarily disable a line of code, there are two ways:

1. Single line comment
```js
// this is a one line comment
```

2. Multi line comment
```js
/* 
inside this comment we can add
as many lines
as we like
*/
```

{{h2('Indenting')}}

{{video("https://fhpcloud.fh-potsdam.de/s/iHNiJ5XEs9iFGg8/download/en_indent.mp4", "/images/thumbnails/en_2d_intro_indent.png", "en_2d_intro_indent", translations.subtitles[locale], locale)}}
<!--
de:https://fhpcloud.fh-potsdam.de/s/kqDm5WMWY6Q2S2X/download/de_indent.mp4
en:https://fhpcloud.fh-potsdam.de/s/iHNiJ5XEs9iFGg8/download/en_indent.mp4
-->

> To indent code, simply use the tab-key. In VS Code you can also select multiple lines and indent them all at once. In the VS Code settings, you can set if a tab is 2 spaces or 4 spaces. The examples use 2 spaces.

In some coding languages like python, the indenting of code has meaning. In JavaScript it has not. You could write everything in one line. But indenting code helps keeps things organized. Especially later when have more `{}` brackets, its easy to loose track, so try to indent your code. For now, simple rule, after every open `{` indent and reverse when it closes `}`. If you are using VS Code the indenting will likely happen automatically.

```js
function setup() {
  createCanvas(
    400,
    400
  );
}
```


{{h2('Debugging')}}

{{video("https://fhpcloud.fh-potsdam.de/s/XAos9wLLNNaZ7Sb/download/en_debug.mp4", "/images/thumbnails/en_2d_intro_debug.png", "en_2d_intro_debug", translations.subtitles[locale], locale)}}
<!--
de:https://fhpcloud.fh-potsdam.de/s/WincbxLqmRB8Hac/download/de_debug.mp4
en:https://fhpcloud.fh-potsdam.de/s/XAos9wLLNNaZ7Sb/download/en_debug.mp4
-->

> It is generally recommended to use Firefox, Chrome, Edge or browsers based on similar engines. Safari and Internet Explorer are not recommended. If you are using Safari and you want to use the debugging features, you need to first [enable](https://developer.apple.com/library/archive/documentation/NetworkingInternetWeb/Conceptual/Web_Inspector_Tutorial/EnableWebInspector/EnableWebInspector.html) the developer tools. In Safari's settings is checkbox at the bottom, allowing you to activate the developer menu. Afterwards you can right-click inspect all websites.

<script>
console.log('Congrats. You found the secret message. 🎉');
console.log('');
console.log('%c...@@@@@@...@@@...@@@...@@@@@@@@@...', 'color: #D12229;');
console.log('%c...@@@......@@@...@@@...@@@...@@@...', 'color: #F68A1E;');
console.log('%c...@@@@@@...@@@@@@@@@...@@@@@@@@@...', 'color: #FDE01A;');
console.log('%c...@@@......@@@...@@@...@@@.........', 'color: #007940;');
console.log('%c...@@@......@@@...@@@...@@@.........', 'color: #24408E;');
console.log('%c------------------------------------', 'color: #732982;');
</script>

{{task('Task: Debugging', 'Try debugging this website and see if you can find the <strong>secret message</strong>.')}}