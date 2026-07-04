---
layout: page
permalink: /publications/
title: publications
description: 業績一覧。_bibliography/papers.bib から自動生成されます（査読論文・国際会議・プレプリントの3分類）。
nav: true
nav_order: 3
---

<!-- _pages/publications.md -->

<!-- Bibsearch Feature -->

{% include bib_search.liquid %}

<div class="publications">

<h2 class="bibliography-section">査読論文 / Journal Papers</h2>

{% bibliography --query @article %}

<h2 class="bibliography-section">国際会議 / International Conferences</h2>

{% bibliography --query @inproceedings %}

<h2 class="bibliography-section">プレプリント / Preprints</h2>

{% bibliography --query @misc %}

</div>
