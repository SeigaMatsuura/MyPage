---
layout: page
title: SGP4/TLE による軌道追跡
description: 二行軌道要素 (TLE) と SGP4 伝播モデルを用いたロケット上段の軌道追跡・解析
img: assets/img/research/sgp4_tracking.svg
importance: 3
category: research
related_publications: true
---

軌道上に残留する**ロケット上段**は大型デブリの主要な発生源です。公開されている**二行軌道要素 (TLE)** と **SGP4** 解析的伝播モデルを用いて、ロケット上段の軌道履歴を追跡し、軌道の長期変化や再突入・破砕イベントの解析に活用しています。

主な取り組み:

- TLE 時系列データの取得・クリーニングと軌道履歴の再構成
- SGP4 伝播と観測ベース TLE の比較による軌道精度の評価
- 破片雲研究（NASA Standard Breakup Model）と組み合わせた破砕イベント解析

<div class="row justify-content-center">
    <div class="col-sm-8 mt-3 mt-md-0">
        {% include figure.liquid loading="eager" path="assets/img/research/sgp4_tracking.svg" title="SGP4/TLE によるロケット上段の軌道追跡" class="img-fluid rounded z-depth-1" zoomable=true %}
    </div>
</div>
<div class="caption">
    TLE から SGP4 で伝播した軌道（実線）と更新された観測軌道（破線）の比較イメージ。クリックで拡大できます。[実際の解析図に差し替え予定]
</div>
