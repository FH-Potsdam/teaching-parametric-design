---
title: Deutsch
layout: home
eleventyNavigation:
  key: en
  order: 0
---

{% from "../_includes/parts/macros.njk" import img %}

This is the companion website for the "Parametric Design" course at the [Design department](https://www.fh-potsdam.de/design/) at the University of Applied Sciences Potsdam ([FHP](https://www.fh-potsdam.de/)). This website provides a gentle introduction to code-driven design for beginners. Only using free open source technologies. The full course is designed to be taught through a mix of online videos and group activities. But the website 
itself should serve as a good starting point for your code-driven design journey.

<p class="start-button-container">
  <a href="/en/introduction" class="start-button"><span>Begin course &raquo;</span></a>
</p>

The course targets all designers or creative minds, that want to explore how to design digital and physical artifacts through code. At FHP we offer Interface, Product and Communication Design, which will play a central role in this course.

{{ img('potsdam-design.svg', 'Design disciplines at FHP.', '400px') }}

## What is this course about?

What makes this course different from other coding classes? This course has a strong focus on the interfaces between the output we generate through code and the possibilities to use this output in various fabrication or design applications (see overview below). We will use JavaScript for the whole course, as its a good language to start with. You will need no prior knowledge of coding. If you want to become a developer or computer scientist, this course might be a gentle introduction, but probably not what you are looking for. For creatives to get into coding, an important part is learning how to transfer ideas into code. In this course we primarily do this through group activities and discussions. This website will provide some exercises to get you started, but the most important part is to keep experimenting and playing with code, until it feels more natural.

<figure>
    <picture>
      <source srcset="/images/material/interfaces-dark.svg" media="(prefers-color-scheme: dark)">
      <img style="width:500px;" src="/images/material/interfaces.svg" alt="Possibilities of code-driven design." />
    </picture>
    <figcaption><span>Possibilities of code-driven design.</span></figcaption>
</figure>


## Algorithmic Thinking and Parameterization of Design

This course is more than an introduction to programming. Here, code is above all a tool for looking at design from a systematic, algorithmic perspective: instead of drawing a single object, a single layout or a single graphic, we describe the rules, relationships and variables from which they emerge.

Anyone who designs a 3D object parametrically defines not just one shape, but a whole family of shapes. By changing a few parameters (size, count, spacing, angle, rounding), variants can be generated, adapted and optimized for different requirements with ease. The same principle extends beyond individual objects: well-structured design systems with clearly named variables, dependencies and rules can be understood and further developed by humans, and at the same time processed, extended and applied automatically by machines.

{{ img('parametric-intro.jpg', 'Example for the deconstruction of a parametric fassade (Corbussier, Wohnmaschine, Berlin). Source: Matthias Süßen, License: CC BY-SA via <a href="https://commons.wikimedia.org/wiki/File:Corbusierhaus,_Berlin-msu-2021-2259-.jpg">Wikimedia Commons</a>') }}

Perhaps the most important skill here is deconstruction: breaking objects, interfaces, layouts and processes down into their underlying systems and structures. This way of thinking helps in many situations, far beyond code:

- **Teamwork:** A clearly described system (e.g. grid, components, naming conventions) creates a shared language and makes decisions traceable and easy to hand over.
- **Information hierarchies:** Content can be organized into levels, groups and relationships, for example in the structure of a website, a navigation, a document or an exhibition.
- **Typography and layout:** Font sizes, spacing and grids follow a scale or a rhythm, instead of values being guessed one by one.
- **UI and design systems:** Colors, spacing and components are defined as tokens and variants, so a single change applies consistently across the entire product.
- **Corporate design and identities:** A flexible system of rules produces many applications without having to design each one individually.
- **Data and visualization:** The same design rule can be applied to a thousand data points, and the result remains legible and comparable.
- **Production and fabrication:** Parametric models can be adapted for 3D printing, laser cutting or CNC without starting from scratch each time.
- **Customization and personalization:** Whether furniture, clothing or graphic design, a parametric system makes it possible to adapt products to body measurements, spaces, preferences or content, so that one design yields many individual variants.
- **Processes and workflows:** Even workflows, user journeys or workshops can be described and improved as a sequence of steps, conditions and repetitions.

Thinking about design in this way not only allows you to generate variants faster, but also to decide more consciously which elements of a design should be fixed and which should be changeable.

## The Team

<div class="col-2">
  <div>
    <figure>
        <picture>
          <source srcset="/images/material/sebastian.jpg">
          <img style="width:300px;" src="/images/material/sebastian.jpg" alt="Photo of Sebastian Meier" srcset="/images/material/sebastian@2xjpg 2x" />
        </picture>
        <figcaption class="title-caption"><span>Sebastian Meier</span></figcaption>
    </figure>
    <p>As a professor for the design of knowledge transfer at the <a href="https://www.fh-potsdam.de/hochschule-netzwerk/personen/sebastian-meier">Potsdam University of Applied Sciences</a>, I teach digital skills for design work with programming and AI tools in the Interface and Product Design courses. Together with my team, we research these topics in the <a href="https://idl.fh-potsdam.de">Interaction Design Lab.</a>.</p>
  </div>
  <div>
    <figure>
        <picture>
          <source srcset="/images/material/jolanta.jpg">
          <img style="width:300px;" src="/images/material/jolanta.jpg" alt="Photo of Jolanta Paliszewska" srcset="/images/material/jolanta@2xjpg 2x" />
        </picture>
        <figcaption class="title-caption"><span>Jolanta Paliszewska</span></figcaption>
    </figure>
    <p>I am Jolanta Paliszewska, a deaf designer and expert in accessibility, design for all and empowerment design. I currently work as a research assistant at the University of Applied Sciences Bremen and also teach as a lecturer (e.g. at the University of Applied Sciences Potsdam).<br /><a href="http://www.vispal.de">www.vispal.de</a></p>
  </div>
</div>


## Open Educational Resources

This course is licensed under CC BY-ND 4.0. This means you can reuse every part of this website, as well as the companion code repositories for your own teaching. You only need to provide attribution. Why not remix? There is a lot of video-material on this website, that we don't want remixed, as well as some of the graphics. If you are interested to remix a particular graphic get in touch. The code examples are under MIT licence, so no need for attribution and you can use it for whatever you want.

## Contribute

You like this project and would like to contribute? If you find an error, [report](https://github.com/FH-Potsdam/teaching-parametric-design/issues) it on GitHub. We are always excited to welcome additional translations. If you are interested in translating the content, please get in touch. You know more projects for the [Inspiration](inspiration.md) section? Just send us an email.

## Thank You!

I have never studied computer sciences (even though i have a CS PhD now). More than two decades ago the internet taught my teenage self how to code (particularly [SELFHTML](https://wiki.selfhtml.org)). So i am very grateful for all the great open educational resources out there. More recently i have been particularly been inspired to work on OERs by the works of [Tamara Munzner (Data Vis)](https://www.cs.ubc.ca/~tmm/) and [Daniel Shiffman (Creative Coding)](https://shiffman.net/). Thank you all open source and open educational resource contributors!!!

## Privacy first!

This website is designed privacy first. There is no tracking or cookies or anything alike. The website is hosted through Netlify. Videos are hosted on our university server. No other external bits and pieces. This by the way means, I have no clue if anyone besides my students is using this. So drop me line if you like this.


<p xmlns:cc="http://creativecommons.org/ns#" >This work is licensed under <a href="http://creativecommons.org/licenses/by-nd/4.0/?ref=chooser-v1" target="_blank" rel="license noopener noreferrer" style="display:inline-block;">CC BY-ND 4.0<img alt="CC" style="height:22px!important;margin-left:3px;vertical-align:text-bottom;" src="https://mirrors.creativecommons.org/presskit/icons/cc.svg?ref=chooser-v1"><img alt="BY" style="height:22px!important;margin-left:3px;vertical-align:text-bottom;" src="https://mirrors.creativecommons.org/presskit/icons/by.svg?ref=chooser-v1"><img style="height:22px!important;margin-left:3px;vertical-align:text-bottom;" alt="ND" src="https://mirrors.creativecommons.org/presskit/icons/nd.svg?ref=chooser-v1"></a></p>