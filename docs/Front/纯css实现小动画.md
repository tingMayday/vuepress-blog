---
title: 纯css实现的小动画
date: 2020-06-24
tags:
- css
- html
categories: 
- Front
---

<div class="box box-fox">
    <p>小狐狸</p>
    <Projects-Fox />
</div>
<div class="box box-rabbit">
    <p>吹泡泡的兔子</p>
    <Projects-Rabbit />
</div>
<div class="box box-cow">
    <p>飞天牛</p>
    <Projects-Cow />
</div>

<div class="box box-keepfit">
    <p>健身</p>
    <Projects-Keepfit />
</div>

<div class="box box-ghost">
    <p>鬼</p>
    <Projects-Ghost />
</div>

<div class="box box-skywheel">
    <p>摩天轮</p>
    <Projects-Skywheel />
</div>

<style lang="stylus" scoped>
.box {
    position: relative;
    width: 100%;
    height: 400px;
    text-align: center;
    overflow: hidden;

    &.box-fox{
        background: #f9ece8;
    }
    &.box-rabbit{
        background: #faf0e6;
        height: 500px;
    }
    &.box-cow{
        background: #bdd4f2;
        height: 550px;
    }
    &.box-keepfit{
        background: #b9ecff;
    }
    &.box-ghost{
        height: 520px;
        background: #2b998c;
    }

    &.box-skywheel{
        height: 750px;
        background: #FCE69D;
    }
    &.box-hamster{
        height: 650px;
        background: #c1f2ee;
    }
}
</style>