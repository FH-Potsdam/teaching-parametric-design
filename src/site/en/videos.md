---
title: Video Library
layout: default
eleventyNavigation:
  title: Video Library
  key: en_video_library
  parent: en
  order: 200
locale: en
---

<p>This page collects every embedded video from the site so you can quickly see what is available and which clips you have already watched.</p>

<script id="nav-data" type="application/json">{{ collections.all | eleventyNavigation | dump | safe }}</script>
<div class="video-library" data-video-library>
  <p class="video-library__loading">Collecting videos…</p>
</div>
<script src="/js/video-library.js"></script>
