---
title: Video Library
layout: default
eleventyNavigation:
  title: Video Library
  key: dg_video_library
  parent: dg
  order: 200
locale: dg
---

{% from "../_includes/parts/video-library.njk" import renderVideoLibrary %}
{% set videos = collections.videoLibrary | videosByLocale(locale) %}

<p>This page collects every embedded video from the site so you can quickly see what is available and which clips you have already watched.</p>

{{ renderVideoLibrary(videos, locale) }}

<script src="/js/video-library.js"></script>
