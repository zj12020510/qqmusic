<template>
  <!-- 播放器页面 -->
  <div class="bfq">
    <!-- 播放器头部 -->
    <div class="bfq_top">
      <span>
        <van-icon name="arrow-down" />
      </span>
      <p>野狼disco</p>
      <span class="iconfont icon-more-vert">
      </span>
    </div>
    <!-- 播放器内容 -->
    <div class="bfq_content">
      <div class="zuozhe">
        忘记了
        <span>关注</span>
      </div>
      <div class="tiaoyin">
        <span @click="zz">
          标准
          <van-icon name="arrow-down" />
        </span>
        <span>音效 on</span>
        <van-action-sheet v-model="zz" :actions="actions" @select="onSelect" />
      </div>
      <div class="bfq_img">
        <img
          src="http://y.gtimg.cn/music/photo_new/T002R300x300M000003oD0L12HrK8c.jpg?max_age=2592000"
          alt
        />
      </div>
      <div class="bfq_geci">野狼disco</div>
    </div>
    <!-- 播放器下方功能模块 -->
    <div class="bfq_gongneng">
      <div class="bfq_audio">
        <span>{{cTime | zhuanhuan}}</span>
        <div class="bfq_bofangtiao">
          <div class="bfq_jindu"></div>
        </div>
        <span>{{dTime | zhuanhuan}}</span>
        <audio ref="bfq_yinpin" :autoplay="autoplay" src="./Music/宝石Gem _ 陈伟霆 - 野狼Disco（feat.陈伟霆）.mp3"></audio>
      </div>
      <div class="bfq_bnt">
        <ul>
          <li>
            <span class="iconfont icon-bofangye-caozuolan-suijibofang"></span>
            <span class="iconfont icon-previous"></span>
            <span class="iconfont icon-bofang" @click="paly"></span>
            <span class="iconfont icon-next"></span>
            <span class="iconfont icon-zhankaicaidan"></span>
          </li>
          <li class="bfq_fenxiang">
            <span class="iconfont icon-xin1"></span>
            <span class="iconfont icon-icon--"></span>
            <span class="iconfont icon-fenxiang1"></span>
            <span class="iconfont icon-BAI-pinglun"></span>
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script src="./bofangqi.js"></script>

<style lang="stylus" scoped>
@import "./bofangqi.stylus";
</style>