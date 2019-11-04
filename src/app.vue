<template>
  <div class="box">
    <header>
      <span>{{app_top}}</span>
      <input type="search" name id />
      <span>
        <van-icon name="music-o" />
      </span>
    </header>
    <div class="content">
      <router-view></router-view>
    </div>
    <!-- 全局播放条 -->
    <div class="music" :class="{bofangqi: show}" @click="bfq_top">
      <ul class="bfq_weiba">
        <li>
          <img src="/img/野狼Disco_宝石.jpg" alt />
          <span>野狼disco</span>
        </li>
        <li>
          <van-icon :name="bfq_isplay ? 'pause-circle-o' : 'play-circle-o'"   @click.stop="bforzt(bfq_isplay ? 0 : 1)"/> 
          <van-icon name="wap-nav" />
        </li>
      </ul>
      <Bofangqi v-show="show" :bfq_down="bfq_down" />
    </div>
    <footer>
      <div
        v-for="(item, index) of app_nav"
        @click="gorouter(item.url, index)"
        :key="index"
        :class="{bg: item.bg}"
      >
        <span>
          <van-icon :name="item.app_icon" />
        </span>
        <span>{{item.title}}</span>
      </div>
    </footer>
  </div>
</template>

<script src="./app.js"></script>

<style lang="stylus" scoped>
@import "./app.stylus";
</style>