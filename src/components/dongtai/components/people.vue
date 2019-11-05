<template>
  <div class="people">
    <div class="top">
      <span class="iconfont icon-fanhuizuojiantou" @click="goback"></span>
      <span class="iconfont icon-fenxiang" @click="showPopup"></span>
    </div>
    <van-popup v-model="show"  position="bottom" :style="{ height: '30%' }">
      <ul>
        <li>分享</li>
        <li>删除我的访问记录</li>
        <li>举报</li>
        <li @click="close">取消</li>
      </ul>
    </van-popup>
    <div class="top-img">
      <figure>
        <img
          src="//y.gtimg.cn/music/photo_new/T001R300x300M000001Adim81gp2Kf.jpg?max_age=2592000"
          alt
        />
        <figcaption>上海彩虹室内合唱团</figcaption>
      </figure>
      <div class="menu">
        <span>关注</span>
        <span>私信</span>
      </div>
      <!-- <div class="bottom-menu"> -->
      <ul>
        <li>
          <b>4</b>
          <div>关注</div>
        </li>
        <li>|</li>
        <li>
          <b>114.5万</b>
          <div>粉丝</div>
        </li>
        <li>|</li>
        <li>
          <b>30.5万</b>
          <div>访客</div>
        </li>
      </ul>
      <!-- </div> -->
    </div>
    <div class="main">
      <div class="main-top">
        <span>官方认证：彩虹合唱团官方账号，...</span>
        <span class="iconfont icon-changyongtubiao-xianxingdaochu-zhuanqu-"></span>
        <span @click="singer">查看歌手主页</span>
      </div>
      <div class="main-list" v-for="(item,index) in mainlist" :key="index">
        <div class="list">
          <div>
            <img :src="item.img" alt />
            <div>
              <span>{{item.txt}}</span>
            </div>
          </div>

          <span class="iconfont icon-changyongtubiao-xianxingdaochu-zhuanqu-"></span>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      show: false,
      mainlist: [
        {
          img:
            "//y.gtimg.cn/music/photo_new/T001R300x300M000001Adim81gp2Kf.jpg?max_age=2592000",
          txt: "喜欢"
        },
        {
          img:
            "//y.gtimg.cn/music/photo_new/T001R300x300M000001Adim81gp2Kf.jpg?max_age=2592000",
          txt: "评论"
        },
        {
          img:
            "//y.gtimg.cn/music/photo_new/T001R300x300M000001Adim81gp2Kf.jpg?max_age=2592000",
          txt: "歌单"
        },
        {
          img:
            "//y.gtimg.cn/music/photo_new/T001R300x300M000001Adim81gp2Kf.jpg?max_age=2592000",
          txt: "歌单"
        }
      ]
    };
  },
  components: {},
  methods: {
    goback() {
      this.$router.go(-1);
    },
    singer() {
      this.$router.push("/singer");
    },
    showPopup() {
      this.show = true;
    },
    close(){
      this.show = false;
    }
  }
};
</script>

<style scoped lang='stylus'>
.people {
  width: 100%;
  height: 100%;
  position: absolute;
  top: 0px;
  background: white;
  z-index: 1;
  overflow-y: auto;

  .top {
    width: 90%;
    display: flex;
    justify-content: space-between;
    padding: 15px 5%;
    position: fixed;

    span.icon-fanhuizuojiantou {
      font-size: 25px;
    }

    span.icon-fenxiang {
      font-size: 23px;
    }
  }

  .top-img {
    background: rgba(149, 242, 142, 0.72);
    width: 100%;
    height: 40%;

    figure {
      margin-top: 0;
      padding-top: 15%;
      text-align: center;

      img {
        width: 80px;
        height: 80px;
        border-radius: 50%;
      }

      figcaption {
        color: white;
        font-size: 20px;
      }
    }

    .menu {
      text-align: center;

      span {
        padding: 2px 25px;
        color: white;
        border: solid 1px;
        border-radius: 25%;
      }

      span:last-of-type {
        margin-left: 10px;
      }
    }

    ul {
      display: flex;
      justify-content: space-around;
      padding: 15px 15px;
      text-align: center;
      color: white;

      b {
        font-size: 18px;
      }

      div {
        font-size: 10px;
      }
    }
  }
  ul{
      text-align center;
      li{
        height 50px;
        line-height 50px;
      }
    }

  .main {
    .main-top {
      display: flex;
      justify-content: space-between;
      padding: 15px;
      font-size: 14px;
      line-height: 1.3;

      span:last-of-type {
        padding: 3px 10px;
        border: solid 0.5px gray;
        border-radius: 10px;
      }
    }
    

    .main-list {
      .list {
        display: flex;
        justify-content: space-between;
        line-height: 100px;
        padding: 5px 10px;

        div {
          display: flex;
          justify-content: space-between;

          div {
            margin-left: 10px;
          }
        }

        img {
          width: 100px;
          height: 100px;
          vertical-align: middle;
        }
      }
    }
  }
}
</style>