---
layout: page
title: 破片雲の密度伝播
description: NASA Standard Breakup Model による破片生成と、破片雲の密度分布の時間発展（位相肖像図・密度分布）
img: assets/img/research/debris_cloud.svg
importance: 2
category: research
related_publications: true
---

衛星の破砕（衝突・爆発）で生じる大量の破片を 1 個ずつ追跡するのは計算コストが高いため、破片雲を**密度分布として連続体的に伝播**させるアプローチを研究しています。破片の初期分布は **NASA Standard Breakup Model** により生成し、軌道要素空間での密度の時間発展を解析します。

主な取り組み:

- NASA Standard Breakup Model による破片のサイズ・速度増分 (ΔV) 分布の生成
- 位相空間（軌道要素空間）における破片雲密度の伝播
- 位相肖像図・密度分布図による破片雲の長期挙動の可視化

<div class="row">
    <div class="col-sm mt-3 mt-md-0">
        {% include figure.liquid loading="eager" path="assets/img/research/debris_cloud.svg" title="位相空間における破片雲の密度伝播" class="img-fluid rounded z-depth-1" zoomable=true %}
    </div>
</div>
<div class="caption">
    位相空間で引き伸ばされていく破片雲密度のイメージ。クリックで拡大できます。（位相肖像図・密度分布などの実際の図は準備中・後日更新）
</div>

複数の図を並べる場合は次のように 2〜3 カラムで配置できます（それぞれキャプション付き・クリック拡大対応）。

<div class="row">
    <div class="col-sm mt-3 mt-md-0">
        {% include figure.liquid loading="eager" path="assets/img/research/debris_cloud.svg" title="位相肖像図" class="img-fluid rounded z-depth-1" zoomable=true %}
    </div>
    <div class="col-sm mt-3 mt-md-0">
        {% include figure.liquid loading="eager" path="assets/img/research/debris_cloud.svg" title="密度分布" class="img-fluid rounded z-depth-1" zoomable=true %}
    </div>
</div>
<div class="caption">
    左: 位相肖像図（準備中・後日更新）。右: 破片雲の密度分布（準備中・後日更新）。
</div>
