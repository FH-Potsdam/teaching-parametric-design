---
title: Inspiration
eleventyNavigation:
  title: Inspiration
  key: de_inspiration
  order: 2
  parent: de
---

Liste digitaler and analoger Künstler*innen zur Inspiration

{% from "../_includes/parts/inspiration.njk" import filter, list %}

<div id="inspiration-filter">
{{filter(inspiration, translations, locale)}}
</div>

<div id="inspiration-list">
{{list(inspiration, translations, locale)}}
</div>