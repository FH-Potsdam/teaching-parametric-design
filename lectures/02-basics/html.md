**Parametric Design**
# Basics
## HTML Super Quick Introduction

This is a very very short introduction to HTML explaining what happens in the p5js' `index.html` file. If you want to try the code in this tutorial, simply create a file with an `.html` extension somewhere and open it in your browser.

*Did you know, you can see the HTML code of every website? Simply right-click on a site open in your browser and select "view page source" (slightly different depending on browser).*

### HTML?

HTML stands for *Hyper Text Markup Language*. Sometimes HTML files also only have an `.htm` file extension. HTML is not a programming language, but a markup language. It is used to describe static documents. 

### Tags

The syntaxt of HTML is not very complex. An HTML document consists of so called **tags**.

```html
<h1>Hello World</h1>
```

*In many tutorials you will find the words "Hello World", this has become kind of a "lorem ipsum" in the coding world.*

A tag usually consists of two parts, the opening `<h1>` and the closing `</h1>` element. The closing is indicated by the forward slash. Each tag has a certain meaning. **h1** for example is a headline tag, used to highlight the main headline of the page. A good website is build in a semantic manner. You use specific tags for specific types of content. This makes for example sure search engines understand your website.

There are lots of different tags. Good websites to search for tags and learn more about HTML are:
- [SelfHTML (german only)](https://wiki.selfhtml.org/wiki/HTML)
- [Mozilla](https://developer.mozilla.org/en-US/docs/Web/HTML/Reference)

Here are the most important tags:
- **html** the all surrounding element
- **head** this includes information for the browser that is not shown on the website
- **title** used in **head** to tell the browser what to show in the title of the browser window
- **body** here goes everything you want people to see
- **h1,h2,h3,h4** headlines
- **p** a paragraph of text
- **strong** make something bold
- **i** make something italic
- **img** an image
- **div** generic container element
- **a** an anchor element to create a link to another page

### Nested Tags

To create more complex structures you can nest tags inside one another.

```html
<!DOCTYPE html>
<html>
  <head>
    <title>My first title</title>
  </head>
  <body>
    <h1>Hello World</h1>
  </body>
</html>
```

Above is the most basic setup of an HTML page. You might notice, that the first tag looks a bit weird and has no closing tag. This is a special tag, which tells the browser that this file is an HTML file.

### Attributes

Every tag-type can receive certain attributes. For example we can let the browser know in which (natural) language the document is, by adding a **lang** attribute to the **html** tag.

```html
<html lang="en">...</html>
```

### Tags without closing element

Tags usually consist of two elements, so we can place content inside the tag. But for some elements that makes no sense. Then developers will sometimes not add a closing element, but instead add a slash to the end of the opening tag:

```html
<img src="test.png" width="100" height="100" />
```

*"src" describes the path to the image you want to show, with "width" / "height" you can define how big the image should be.*

### Note on paths

Sometimes you will run into the problem, that you want to include an image, but the browser tells you, that it cannot find the image. In coding in general there are **absolute** and **relative** paths. 

```
https://www.fh-potsdam.de/some-folder/some-other-folder/hello.png
```

The above is an absolute path, it describes the full path to an image.

In constrast `some-other-folder/hello.png` is a relative path, it will only work if the HTML file is inside the `https://www.fh-potsdam.de/some-folder` folder.

Relative paths can also go up the folder structure. Imagine you have this HTML file: 

`https://www.fh-potsdam.de/some-folder/another-folder/index.html` 

and your want to reference: 

`https://www.fh-potsdam.de/some-folder/some-other-folder/hello.png`

Than you can write `../some-other-folder/hello.png`. The `../` goes up one folder. You can go up as many folders as you want.

*By the way: you don't need to call all your HTML files index.html. If you call a file index.html and open the enclosing folder with a browser, the browser will automatically look for an index.html file to display. Besides this nice trick, the name does not matter.*

### Comments

If you want to add a comment anywhere in your HTML file use the following syntax:

```html
<!-- Here goes the comment. -->
```

### Adding a stylesheet

If you only create an HTML file and load it in your browser things might not look like you want them to look like. Every browser has a default setting for how things should look like (things look slightly different on every browser, thank you internet). If you want to style the elements (font-size, font-family, color, etc.) you can include a so called stylesheet or in full a Cascading Style Sheet (CSS). To do so, simply add this to your **head**:

```html
<head>
  <link rel="stylesheet" type="text/css" href="style.css">
</head>
```

Inside your `style.css` file you can define how your HTML should look like. Here are some links to get you started:
- [SelfHTML (german only)](https://wiki.selfhtml.org/wiki/CSS)
- [Mozilla](https://developer.mozilla.org/en-US/docs/Learn/CSS/First_steps)

### Adding JavaScript

Similar to the stylesheet we can tell the browser to load a javascript file into our website. But instead of the head we load our JavaScript at the end of the **body** tag. This makes sure that all the content of our HTML site is loaded before we start executing our JavaScript. If you are loading multiple JavaScript files, make sure you load them in the right order, so that if one depends on another, that one is loaded first. In our p5js case, we first load the p5js library, then any plugins and then our own code.

```html
<body>
  <script src="../libraries/p5.min.js"></script>
  <!-- libraries go here -->
  <script src="sketch.js"></script>
</body>
```

### Next Steps

This was a really short introduction to HTML, there is obviously a lot more to learn, but its some basic principles so you know what happens inside that p5js `index.html` file.