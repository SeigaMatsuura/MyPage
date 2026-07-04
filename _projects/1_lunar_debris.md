---
layout: page
title: Collision Probability & Avoidance in Lunar Orbits
description: Collision probability assessment and fuel-efficient avoidance maneuver design for spacecraft against debris in lunar orbits
img: assets/img/research/lunar_debris.svg
importance: 1
category: research
related_publications: false
---

As the use of lunar orbits (LLO, NRHO, etc.) expands internationally, cislunar space still lacks the organized debris-monitoring networks that exist in low Earth orbit. In this work I perform **conjunction analysis and collision probability assessment** between debris and operational spacecraft in lunar orbit, and design **avoidance maneuvers** that minimize propellant cost (ΔV) when the risk exceeds a threshold.

Main topics:

- Conjunction analysis based on orbit propagation with lunar gravity and Earth third-body perturbations
- Collision probability (Pc) computation using position-error covariances
- Maneuver optimization for minimum ΔV while accounting for post-maneuver re-encounter risk

<div class="row justify-content-center">
    <div class="col-sm-8 mt-3 mt-md-0">
        {% include figure.liquid loading="eager" path="assets/img/research/lunar_debris.svg" title="Conceptual diagram of collision probability assessment and avoidance maneuvers for lunar-orbit debris" class="img-fluid rounded z-depth-1" zoomable=true %}
    </div>
</div>
<div class="caption">
    Conceptual diagram of a spacecraft encountering a debris cloud in lunar orbit and the avoidance maneuver (green arrow). Click to enlarge. (Actual analysis figures in preparation — to be updated.)
</div>

## Orbit animation

This section will host animations (GIF / video) of the orbit changes before and after an avoidance maneuver. Place an mp4 in `assets/video/` or a GIF in `assets/img/` and swap in the code below.

<!--
GIF:
<div class="row justify-content-center">
    <div class="col-sm-8 mt-3 mt-md-0">
        {% raw %}{% include figure.liquid loading="eager" path="assets/img/research/avoidance_maneuver.gif" class="img-fluid rounded z-depth-1" zoomable=true %}{% endraw %}
    </div>
</div>

mp4 video:
<div class="row justify-content-center">
    <div class="col-sm-8 mt-3 mt-md-0">
        {% raw %}{% include video.liquid path="assets/video/avoidance_maneuver.mp4" class="img-fluid rounded z-depth-1" controls=true autoplay=false %}{% endraw %}
    </div>
</div>
-->

<div class="caption">
    In preparation (to be updated).
</div>
