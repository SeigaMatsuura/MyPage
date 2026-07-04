---
layout: page
title: research
permalink: /research/
description: Research topics. Click a card to open its detail page (with figures and animations).
nav: true
nav_order: 4
horizontal: false
---

<!-- pages/research.md -->
<div class="projects">

{% assign sorted_projects = site.projects | sort: "importance" %}

  <!-- Generate cards for each research topic -->

  <div class="row row-cols-1 row-cols-md-2">
    {% for project in sorted_projects %}
      {% include projects.liquid %}
    {% endfor %}
  </div>

</div>
