---
layout: page
title: 月軌道デブリの衝突確率・回避マヌーバ
description: 月周回軌道上のスペースデブリに対する衝突確率評価と、燃料効率を考慮した回避マヌーバの設計
img: assets/img/research/lunar_debris.svg
importance: 1
category: research
related_publications: true
---

月周回軌道（LLO・NRHO など）の利用が国際的に拡大する一方で、シスルナ空間には地球低軌道のような組織的なデブリ監視網が存在しません。本研究では、月軌道上のデブリと運用衛星の**接近解析・衝突確率評価**を行い、リスクが閾値を超える場合の**回避マヌーバ**を燃料消費（ΔV）最小の観点から設計します。

主な取り組み:

- 月重力場・地球第三体摂動を考慮した軌道伝播に基づく接近解析
- 位置誤差共分散を用いた衝突確率 (Pc) の計算
- ΔV 最小化と回避後の再接近リスクを考慮したマヌーバ最適化

<div class="row justify-content-center">
    <div class="col-sm-8 mt-3 mt-md-0">
        {% include figure.liquid loading="eager" path="assets/img/research/lunar_debris.svg" title="月軌道デブリの衝突確率評価と回避マヌーバの概念図" class="img-fluid rounded z-depth-1" zoomable=true %}
    </div>
</div>
<div class="caption">
    月周回軌道上の衛星とデブリ雲の接近、および回避マヌーバ（緑矢印）の概念図。クリックで拡大できます。[実際の解析図に差し替え予定]
</div>

## 軌道アニメーション

回避マヌーバ前後の軌道の変化などを GIF / 動画で掲載するセクションです。`assets/video/` に mp4 を、`assets/img/` に GIF を置いて下のコードを差し替えてください。

<!--
GIF の場合:
<div class="row justify-content-center">
    <div class="col-sm-8 mt-3 mt-md-0">
        {% raw %}{% include figure.liquid loading="eager" path="assets/img/research/avoidance_maneuver.gif" class="img-fluid rounded z-depth-1" zoomable=true %}{% endraw %}
    </div>
</div>

mp4 動画の場合:
<div class="row justify-content-center">
    <div class="col-sm-8 mt-3 mt-md-0">
        {% raw %}{% include video.liquid path="assets/video/avoidance_maneuver.mp4" class="img-fluid rounded z-depth-1" controls=true autoplay=false %}{% endraw %}
    </div>
</div>
-->

<div class="caption">
    [軌道アニメーションを後で追加]
</div>
