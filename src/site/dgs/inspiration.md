---
title: Inspiration
eleventyNavigation:
  key: dgs_inspiration
  order: 2
  parent: dgs
---

Die folgende Seite enthält eine Auswahl von Arbeiten mit Beziehungen zu den Inhalten dieses Seminars. Die Liste der Künstler\*innen und Entwickler\*innen hat keinen Anspruch der Vollständigkeit.

{% from "../_includes/parts/inspiration.njk" import filter, list %}

<div id="inspiration-filter">
{{filter(inspiration, translations, locale)}}
</div>

<div id="inspiration-list">
{{list(inspiration, translations, locale)}}
</div>