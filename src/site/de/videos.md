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

<p>Diese Seite sammelt alle eingebetteten Videos der Website, damit du schnell sehen kannst, welche Inhalte es gibt und welche du bereits angesehen hast.</p>

<script id="nav-data" type="application/json">{{ collections.all | eleventyNavigation | dump | safe }}</script>
<div class="video-library" data-video-library>
  <p class="video-library__loading">Videos werden gesammelt …</p>
</div>
<script src="/js/video-library.js"></script>
