---
title: Inspiration
eleventyNavigation:
  title: Inspiration
  key: en_inspiration
  order: 2
  parent: en
---

This page contains a list of selected works closely realted to the content of this seminar. The following list of artists and developers does not claim to be complete, but merely a window into this world:

{% from "../_includes/parts/macros.njk" import h2 %}
{% from "../_includes/parts/inspiration.njk" import filter, list, bookList %}

<div id="inspiration-filter">
{{filter(inspiration, translations, locale)}}
</div>

<div id="inspiration-list">
{{list(inspiration, translations, locale)}}
</div>

{{h2("Continue reading")}}

<div id="book-list">
{{bookList(books, translations, locale)}}
</div>