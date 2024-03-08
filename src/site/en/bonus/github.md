---
title: GitHub Pages
locale: en
layout: default
eleventyNavigation:
  title: GitHub Pages
  key: en_bonus_github
  parent: en_bonus
  order: 2
---

{% from "../../_includes/parts/macros.njk" import video, task, h2, definition, img %}

If you want to show people what you build, one of the easiest way to publish your code as a website is using GitHub Pages. Simply create a new repository. Add all the files you need for your website. Make sure when copying over files from your existing project the the paths to your libraries are correct. If you are not sure and your project is not complex, simply put everything in the main folder without any subfolders and update the `index.html` file accordingly. In the following images, you see a step by step example:

{{ img('github-1.jpg', 'Setup a new repository') }}

> When naming your repo, have in mind that the name will be part of the URL (see below)

{{ img('github-2.jpg', 'Upload your files') }}

{{ img('github-3.jpg', 'Wait for upload to complete') }}

{{ img('github-4.jpg', 'Make sure all files are here and edit index.html if neccessary') }}

{{ img('github-5.jpg', 'Check if the paths to the libraries are correct') }}

{{ img('github-6.jpg', 'Edit if neccessary') }}

{{ img('github-7.jpg', 'Go to settings > pages') }}

{{ img('github-8.jpg', 'Select the branch of your repo, if you have not changed anything, this should be "main"') }}

{{ img('github-9.jpg', 'Save and you are ready to go') }}

The URL where you can now find your website is: `https://YOUR-USERNAME.github.io/NAME-OF-YOUR-REPO/`

You can create as many of those repository websites as you want. Make sure that your website's HTML file is named `index.html`, if not you need to add it to your URL: `https://YOUR-USERNAME.github.io/NAME-OF-YOUR-REPO/hello.html`