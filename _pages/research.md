---
layout: page
title: research
permalink: /research/
description: 研究テーマ一覧。カードをクリックすると各テーマの詳細ページ（図・アニメーション付き）に移動します。
nav: true
nav_order: 4
horizontal: false
---

<!-- pages/research.md -->
<div class="projects">

{% assign sorted_projects = site.projects | sort: "importance" %}

  <!-- Generate cards for each research topic -->

  <div class="row row-cols-1 row-cols-md-3">
    {% for project in sorted_projects %}
      {% include projects.liquid %}
    {% endfor %}
  </div>

</div>
