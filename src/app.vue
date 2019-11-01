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
    <div class="music" :class="{bofangqi: show}" @click="bfq_top">
      <ul class="bfq_weiba">
        <li>
          <img src="http://y.gtimg.cn/music/photo_new/T002R300x300M000003oD0L12HrK8c.jpg?max_age=2592000" alt />
          <span>野狼disco</span>
        </li>
        <li>
          <van-icon name="play-circle-o" />
          <van-icon name="wap-nav" />
        </li>
      </ul>
      <Bofangqi v-show="show" />
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