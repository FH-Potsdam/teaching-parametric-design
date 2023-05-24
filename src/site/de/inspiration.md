---
title: Inspiration
eleventyNavigation:
  title: Inspiration
  key: de_inspiration
  order: 2
  parent: de
locale: de
layout: default
---

Die folgende Seite enthält eine Auswahl von Arbeiten mit Beziehungen zu den Inhalten dieses Seminars. Die Liste der Künstler\*innen und Entwickler\*innen hat keinen Anspruch auf Vollständigkeit.

{% from "../_includes/parts/inspiration.njk" import filter, list %}

<div id="inspiration-filter">
{{filter(inspiration, translations, locale)}}
</div>

<div id="inspiration-list">
{{list(inspiration, translations, locale)}}
</div>

Noch mehr Beispiele für frühe Computerkunst, werden in [diesem Artikel](https://www.amygoodchild.com/blog/computer-art-50s-and-60s) von Amy Goodchild zusammengefasst.