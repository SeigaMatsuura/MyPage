---
layout: page
permalink: /publications/
title: publications
description: Auto-generated from _bibliography/papers.bib, grouped into journal papers and international conferences.
nav: true
nav_order: 3
---

<!-- _pages/publications.md -->

<!-- Bibsearch Feature -->

{% include bib_search.liquid %}

<div class="publications">

<h2 class="bibliography-section">Journal Papers</h2>

{% bibliography --query @article %}

<h2 class="bibliography-section">International Conferences</h2>

{% bibliography --query @inproceedings %}

</div>
