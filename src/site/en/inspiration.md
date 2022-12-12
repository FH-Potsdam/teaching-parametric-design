---
title: Inspiration
eleventyNavigation:
  title: Inspiration
  key: en_inspiration
  order: 2
  parent: en
---

List of digital and analog artists for inspiration

{% from "../_includes/parts/inspiration.njk" import filter, list %}

<div id="inspiration-filter">
{{filter(inspiration, translations, locale)}}
</div>

<div id="inspiration-list">
{{list(inspiration, translations, locale)}}
</div>