<template>
  <div>
    <!-- 轮播 -->
    <div class="home_swiper">
      <van-swipe :autoplay="3000">
        <van-swipe-item v-for="(image, index) of home_swiper" :key="index">
          <img :src="image.img_src" />
        </van-swipe-item>
      </van-swipe>
    </div>
    <!-- 导航 -->
    <div class="home_nav">
      <ul>
        <li v-for="(item, index) of home_nav" :key="index">
          <a :href="item.url">
            <span>
              <van-icon :name="item.h_nav_icon" />
            </span>
            <span>{{item.title}}</span>
          </a>
        </li>
      </ul>
    </div>
    <!-- 新歌首发 -->
    <div class="home_xgsf">
      <div v-for="(item, index) of home_xgsf" :key="index">
        <dl>
          <dt>
            <img :src="item.img_src" alt />
          </dt>
          <dd>
            <h5>{{item.title}}</h5>
            <p>{{item.content}}</p>
          </dd>
        </dl>
      </div>
    </div>
    <!-- 官方歌单-->
    <div class="home_gfgd" v-for="(item,index) of home_content" :key="index">
      <div class="top">
        <div class="biaoti">{{item.top}}</div>
        <div class="gengduo">更多&gt;</div>
      </div>
      <div class="gd_content">
        <van-swipe :duration="0" :loop="false" :show-indicators="false" :width="115">
          <van-swipe-item v-for="(ite,ind) of item.content" :key="ind">
            <dl>
              <dt>
                <img :src="ite.img_src" alt srcset />
              </dt>
              <dd>{{ite.title}}</dd>
            </dl>
          </van-swipe-item>
        </van-swipe>
      </div>
    </div>
  </div>
</template>

<script src="./musichome.js"></script>

<style lang="stylus" scoped>
@import './musichome.stylus';
</style>