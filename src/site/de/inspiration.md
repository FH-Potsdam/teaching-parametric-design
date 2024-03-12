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

{% from "../_includes/parts/macros.njk" import h2 %}
{% from "../_includes/parts/inspiration.njk" import filter, list, bookList %}

<div id="inspiration-filter">
{{filter(inspiration, translations, locale)}}
</div>

<div id="inspiration-list">
{{list(inspiration, translations, locale)}}
</div>

{{h2("Weiterlesen")}}

<div id="book-list">
{{bookList(books, translations, locale)}}
</div>