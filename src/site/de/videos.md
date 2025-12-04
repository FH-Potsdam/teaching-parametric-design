---
title: Videoübersicht
layout: default
eleventyNavigation:
  title: Videoübersicht
  key: de_video_library
  parent: de
  order: 200
locale: de
---

{% from "../_includes/parts/video-library.njk" import renderVideoLibrary %}
{% set videos = collections.videoLibrary | videosByLocale(locale) %}

<p>Diese Seite sammelt alle eingebetteten Videos der Website, damit du schnell sehen kannst, welche Inhalte es gibt und welche du bereits angesehen hast.</p>

{{ renderVideoLibrary(videos, locale) }}

<script src="/js/video-library.js"></script>
