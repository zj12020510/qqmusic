<template>
  <div id="box">
    <div class="my">
      <van-image round class="round" width="4rem" height="4rem" src="https://img.yzcdn.cn/vant/cat.jpeg" />
      <span>DEVIL</span>
      <span class="iconfont icon-lvzuanvip"></span>
      <van-icon name="music" />
      <span class="iconfont icon-xinfeng-copy"></span>
      <div class="huodong">
        <div class="huodong1">
          <van-icon name="bookmark" />
          <font class="font">活动中心</font>
          <span>新手好礼派发中</span>
        </div>
        <div class="huodong2">
          <van-icon name="bag" />
          <font class="font">会员中心</font>
          <span>6折开爱奇艺vip</span>
        </div>
      </div>
      <div class="xihuan">
        <ul>
          <li @click="like">
            <van-icon name="like" />
            <span>喜欢</span>
            <font>9</font>
          </li>
          <li @click="zuijin">
            <van-icon name="underway" />
            <span>最近</span>
            <font>1</font>
          </li>
          <li @click="bendi">
            <span class="iconfont icon-xiazai"></span>
            <span>本地</span>
            <font>1</font>
          </li>
          <li @click="yigou">
            <van-icon name="checked" />
            <span>已购</span>
            <font>1</font>
          </li>
        </ul>
      </div>
      <div class="gedan">
        <a @click="add">自建歌单</a>
        <a @click="del">收藏歌单</a>
        <span class="iconfont icon-jia1"></span>
        <van-icon name="bars" />
        <section v-show="this.tabIndex==2">
          <div class="aiting" v-for="(item,index) of zijian" :key="index">
            <van-image
              width="4rem"
              height="4rem"
              :src="item.src"
            />
            <span class="span">{{item.name}}</span>
            <font class="font">{{item.shuliang}}</font>
            <van-icon name="arrow" @click="aiting"/>
          </div>
        </section>
        <section v-show="this.tabIndex==3">
          <div class="aiting" v-for="(item,index) of shoucang" :key="index">
             <van-image
              width="4rem"
              height="4rem"
              :src="item.src"
            />
            <span class="span">{{item.name}}</span>
            <font class="font">{{item.shuliang}}</font>
            <van-icon name="arrow" @click="aiting"/>
          </div>
        </section>
      </div>
      <div class="tuijian">
        <a>推荐歌单</a>
        <span class="iconfont icon-shuaxin"></span>
        <span class="iconfont icon-guanbi"></span>
        <div class="tuijian1">
          <ul>
            <li v-for="(item,index) of tuijian" :key="index">
               <van-image
                width="7rem"
                height="7rem"
                :src="item.src"
              />
              <span>{{item.name}}</span>
              <br />
              <font>{{item.shuliang}}</font>
            </li>
          </ul>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      zijian:[
        {
          name: '我最爱听',
          shuliang: "0首",
          src: "//qpic.y.qq.com/music_cover/hDbfqbS6Op0fIVvW9zeKhvMEnA8Fk0UlXblKVn8xdqLV0CH1rHuMRQ/300?n=1"
        },
         {
          name: 'QQ炫舞',
          shuliang: "0首",
          src: "//qpic.y.qq.com/music_cover/3MLTH2k3HibTypyQfrdDcnGebkBvAbETgFPzCzfU2Qycr2rxa0oTepA/300?n=1"
        },
         {
          name: '默认列表',
          shuliang: "0首",
          src: "//qpic.y.qq.com/music_cover/NaYDCjF6oFDyCBFMbYpoK1q2LhZHf7lUkScFw0Rlw8A8ehQwVsvEaA/300?n=1"
        },
         {
          name: '导入外部歌单',
          shuliang: "0首",
          src: "//y.gtimg.cn/music/photo_new/T002R300x300M000001uFHOW2UQgFQ.jpg?max_age=2592000"
        }],
         shoucang:[
        {
          name: '憧憬',
          shuliang: "0首",
          src: "//y.gtimg.cn/music/photo_new/T002R300x300M000001aliLF2i7jCi.jpg?max_age=2592000"
        },
         {
          name: '也罢',
          shuliang: "0首",
          src: "//y.gtimg.cn/music/photo_new/T002R300x300M000003nQ6lC4Lb61U.jpg?max_age=2592000"
        },
         {
          name: '敷衍',
          shuliang: "0首",
          src: "//y.gtimg.cn/music/photo_new/T002R300x300M000000DYvLZ3BLUDW.jpg?max_age=2592000"
        },
        {
          name: '最进',
          shuliang: "0首",
          src: "//y.gtimg.cn/music/photo_new/T002R300x300M000000OI5W63ZXdCE.jpg?max_age=2592000"
        }],
        tuijian:[
        {
          name:'Netflix | 2019十大热门剧集原声',
          shuliang:'播放量：22.3万',
          src:"http://y.gtimg.cn/music/photo_new/T002R300x300M0000020JqLA0r25i4.jpg?max_age=2592000"
        },
        {
          name:'治愈女声｜总有温暖，不期而遇',
          shuliang:'播放量：8.9万',
          src:"http:////y.gtimg.cn/music/photo_new/T002R300x300M000001ykvse08Kiie.jpg?max_age=2592000"
        },
        {
          name:'华语摇滚：我只要最直接的疯狂',
          shuliang:'播放量：3.7万',
          src:"http://y.gtimg.cn/music/photo_new/T002R300x300M0000008VT6q13e7fz.jpg?max_age=2592000"
        },
        {
          name:'来听听，日式的孤独是什么滋味',
          shuliang:'播放量：3.6万',
          src:"http://y.gtimg.cn/music/photo_new/T002R300x300M000004EXF3A0bvkQU.jpg?max_age=2592000"
        },
        {
          name:'甜蜜日系：微风轻起，好喜欢你',
          shuliang:'播放量：4.1万',
          src:"http://y.gtimg.cn/music/photo_new/T002R300x300M000003YOZSJ32vtEx.jpg?max_age=2592000"
        },
        {
          name:'秋乏 • 晨起醒脑必备',
          shuliang:'播放量：12.0万',
          src:"//qpic.y.qq.com/music_cover/RNSWCLv1Lkhicst0TibgNyok1VZLbAQEaEjN26fuMRHjWZQeMeSqpUoA/300?n=1"
        }],
      tabIndex: 2,
    };
  },
  methods: {
    add() {
      this.tabIndex = 2;
    },
    del() {
      this.tabIndex = 3;
    },
    like() {
      this.$router.push('/like')
    },
     bendi() {
      this.$router.push('/my_bendi')
    },
     yigou() {
      this.$router.push('/yigou')
    },
    zuijin() {
      this.$router.push('/zuijin')
    },
    aiting(){
       this.$router.push('/aiting')
    }
  },
};
</script>

<style scoped>
i {
  color: #888;
}
.my .round {
  margin-left: 3rem;
  vertical-align: middle;
}
.gedan .van-image {
  margin-left: 2rem;
  margin-top: 1rem;
  vertical-align: middle;
}
.icon-xinfeng-copy {
  padding-left: 8rem;
  font-size: 20px;
  color: #888
}
.icon-lvzuanvip{
  font-size: 22px;
  color: #31c27c;
}
.van-icon-music {
  font-size: 22px;
  color: #dede23;
  padding-top:2px 
}
.van-icon-bookmark,
.van-icon-bag {
  padding-top: 2rem;
  padding-left: 2rem;
  font-size: 22px;
}
.huodong {
  width: 100%;
  height: 5rem;
  display: flex;
}
.xihuan ul {
  width: 90%;
  margin: 0 auto;
  height: 8rem;
  display: flex;
  justify-content: space-around;
}
.huodong1,
.huodong2 {
  width: 50%;
  height: 100%;
  position: relative;
}
.font {
  position: absolute;
  left: 4rem;
  top: 0.5rem;
}
.xihuan li {
  width: 20%;
  height: 80%;
  list-style: none;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
}
.van-icon-like,
.van-icon-underway,
.icon-xiazai,
.van-icon-checked {
  font-size: 40px;
  color: #31c27c;
}
.gedan a {
  color: black;
  margin-left: 10px;
}
.icon-jia1 {
  font-size: 27px;
  padding-left: 10rem;
}
.van-icon-bars {
  font-size: 22px;
  padding-left: 10px;
}
.aiting {
  position: relative;
  width: 100%;
  height: 6rem;
  margin-top: 1rem;
}
.aiting .span {
  position: absolute;
  left: 8rem;
  top: 20px;
}
.aiting .font {
  position: absolute;
  left: 8rem;
  top: 3rem;
}
.aiting .van-icon-arrow {
  position: absolute;
  right: 2rem;
  top: 2rem;
  font-size: 2rem;
}
.gedan {
  width: 100%;
  height: 30rem;
  position: relative;
}
section {
  width: 100%;
  position: absolute;
  left: 0px;
}
.tuijian {
  width: 100%;
  height: 29rem;
}
.tuijian a {
  margin-left: 1rem;
}
.icon-shuaxin {
  font-size: 22px;
  padding-left: 14rem;
}
.icon-guanbi {
  font-size: 19px;
  padding-left: 1rem;
}
.tuijian1 li {
  padding: 0 0 0 5px;
  list-style: none;
  width: 32%;
  height: 13rem;
  overflow: hidden;
}
.tuijian1 ul {
  display: flex;
  width: 100%;
  height: 26rem;
  flex-flow: row wrap;
  justify-content: space-between;
}
.tuijian1 li font {
  color: #888;
  font-size: 14px
}
.tuijian li span{
  font-size: 14px;
}
.tuijian1 {
  margin-top: 1rem;
}
</style>