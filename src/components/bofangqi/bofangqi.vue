<template>
  <!-- 播放器页面 -->
  <div class="bfq">
    <!-- 播放器头部 -->
    <div class="bfq_top">
      <span>
        <van-icon name="arrow-down" @click.stop="bfq_down" />
      </span>
      <p>野狼disco</p>
      <span class="iconfont icon-more-vert" @click="bfq_shezhi_isshow = true"></span>
      <!-- 音量 -->
      <van-overlay :show="bfq_shezhi_isshow" @click="bfq_shezhi_isshow = false">
        <div class="bfq_shezhiye">
          <span class="iconfont icon-weibiaoti-1">
            </span> <van-slider v-model="volume" @change="yinliang"  :min="0" :max="1" :step="0.01"/>
            <span></span>
        </div>
      </van-overlay>
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
        <img src="/img/野狼Disco_宝石.jpg" :class="{zhuanquan: bfq_isplay}">
      </div>
      <div class="bfq_geci">野狼disco</div>
    </div>
    <!-- 播放器下方功能模块 -->
    <div class="bfq_gongneng">
      <div class="bfq_audio">
        <span>{{cTime | zhuanhuan}}</span>
        <div class="bfq_bofangtiao"  @click="bfq_tiaojindu($event)">
          <!-- 播放进度条 -->
          <div class="bfq_jindu" :style="{width: cTime / dTime * 100 + '%'}"></div>
        </div>
        <span>{{dTime | zhuanhuan}}</span>
        <!-- 音频资源 -->
        <audio class="yinpinyuan" ref="bfq_yinpin"
         @playing="playing"
         @timeupdate="timeupdate"
         @ended="ended"
          src="./Music/宝石Gem_陈伟霆_野狼Disco.mp3"></audio>
      </div>
      <div class="bfq_bnt">
        <ul>
          <li>
            <!-- 循环模式按钮 -->
            <span class="iconfont" :class="xunhuan[xunhuanindex]" @click="bfq_xh"></span>
            <!-- 上一曲按钮 -->
            <span class="iconfont icon-previous" @click="bfq_shangyiqu(-1)"></span>
            <!-- 播放/暂停按钮 -->
            <span class="iconfont"
            :class="bfq_isplay ? 'icon-pause-20' : 'icon-bofang'"
             @click="bforzt(bfq_isplay ? 0 : 1)"
             ></span>
            <!-- 下一曲按钮 -->
            <span class="iconfont icon-next"  @click="bfq_shangyiqu(1)"></span>
            <!-- 播放列表按钮 -->
            <span class="iconfont icon-zhankaicaidan"></span>
          </li>
          <li class="bfq_fenxiang">
            <!-- 收藏按钮 -->
            <span class="iconfont icon-xin1"></span>
            <!-- 下载按钮 -->
            <span class="iconfont icon-icon--"></span>
            <!-- 分享按钮 -->
            <span class="iconfont icon-fenxiang1"></span>
            <!-- 评论按钮 -->
            <span class="iconfont icon-BAI-pinglun"></span>
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script src="./bofangqi.js"></script>

<style lang="stylus" scoped>
@import './bofangqi.stylus';
</style>