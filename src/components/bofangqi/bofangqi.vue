<template>
  <!-- 播放器页面 -->
  <div class="bfq" v-if="musiclist.length">
    <!-- 播放器头部 -->
    <div class="bfq_top">
      <span>
        <van-icon name="arrow-down" @click.stop="bfq_down" />
      </span>
      <p>{{musiclist[musiclist_index].title}}</p>
      <span class="iconfont icon-more-vert" @click="bfq_shezhi_isshow = true"></span>
      <!-- 音量 -->
      <van-overlay :show="bfq_shezhi_isshow" @click="bfq_shezhi_isshow = false">
        <div class="bfq_shezhiye">
          <span class="iconfont icon-weibiaoti-1"></span>
          <van-slider v-model="volume" @change="yinliang" :min="0" :max="1" :step="0.01" />
          <span></span>
        </div>
      </van-overlay>
    </div>
    <!-- 播放器内容 -->
    <div class="bfq_content">
      <div class="zuozhe">
        {{musiclist[musiclist_index].geshou}}
        <span>关注</span>
      </div>
      <div class="tiaoyin">
        <span>
          标准
          <van-icon name="arrow-down" />
        </span>
        <span>音效 on</span>
        <!-- <van-action-sheet v-model="zz" :actions="actions" @select="onSelect" /> -->
      </div>
      <div class="bfq_img">
        <img :src="musiclist[musiclist_index].img_src" :class="{zhuanquan: bfq_isplay}" />
      </div>
      <div class="bfq_geci">{{musiclist[musiclist_index].title}}</div>
    </div>
    <!-- 播放器下方功能模块 -->
    <div class="bfq_gongneng">
      <div class="bfq_audio">
        <span>{{cTime | zhuanhuan}}</span>
        <div class="bfq_bofangtiao" @click="bfq_tiaojindu($event)">
          <!-- 播放进度条 -->
          <div class="bfq_jindu" :style="{width: cTime / dTime * 100 + '%'}"></div>
        </div>
        <span>{{dTime | zhuanhuan}}</span>
        <!-- 音频资源 -->
        <audio
          class="yinpinyuan"
          ref="bfq_yinpin"
          autoplay
          @playing="playing"
          @timeupdate="timeupdate"
          @ended="ended"
          :src="musiclist[musiclist_index].mp3_src"
        ></audio>
      </div>
      <div class="bfq_bnt">
        <ul>
          <li>
            <!-- 循环模式按钮 -->
            <span class="iconfont" :class="xunhuan[xunhuanindex]" @click="bfq_xh"></span>
            <!-- 上一曲按钮 -->
            <span class="iconfont icon-previous" @click="bfq_shangyiqu(-1)"></span>
            <!-- 播放/暂停按钮 -->
            <span
              class="iconfont"
              :class="bfq_isplay ? 'icon-pause-20' : 'icon-bofang'"
              @click="bforzt(bfq_isplay ? 0 : 1)"
            ></span>
            <!-- 下一曲按钮 -->
            <span class="iconfont icon-next" @click="bfq_shangyiqu(1)"></span>
            <!-- 播放列表按钮 -->
            <span class="iconfont icon-zhankaicaidan" @click="bfq_bflist"></span>
          </li>
          <li class="bfq_fenxiang">
            <!-- 收藏按钮 -->
            <span
              class="iconfont icon-xin1"
              :class="{'shoucang' : bfq_dianzan}"
              @click="bfq_shoucang"
            ></span>
            <!-- 下载按钮 -->
            <a class="bfq_xiazai" :href="musiclist[musiclist_index].mp3_src" download>
              <span class="iconfont icon-icon--"></span>
            </a>
            <!-- 分享按钮 -->
            <span class="iconfont icon-fenxiang1"></span>
            <!-- 评论按钮 -->
            <span class="iconfont icon-BAI-pinglun"></span>
          </li>
        </ul>
      </div>
    </div>
    <div class="bfq_bflist" v-show="bflist" @click="bfq_bflist">
      <Bofanglist :musiclist="musiclist" :musiclist_index="musiclist_index" />
    </div>
  </div>
</template>

<script src="./bofangqi.js"></script>

<style lang="stylus" scoped>
@import './bofangqi.stylus';
</style>