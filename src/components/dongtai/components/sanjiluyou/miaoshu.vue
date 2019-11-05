<template>
  <div class="maipiao">
    <div class="top">
      <span class="iconfont icon-fanhuizuojiantou" @click="goback"></span>

      <span class="iconfont icon-fenxiang" @click="showPopup"></span>
    </div>
    <van-popup v-model="show" position="bottom" :style="{ height: '30%' }">
      <table>
        <tr>
          <td>微信好友</td>
          <td>朋友圈</td>
          <td>QQ好友</td>
          <td>QQ空间</td>
        </tr>
        <tr>
          <td>新浪微博</td>
          <td>私信</td>
          <td>复制链接</td>
          <td>二维码</td>
        </tr>
        <tr>
          <td colspan="4" @click="close">取消</td>
        </tr>
      </table>
    </van-popup>
    <div class="main">
      <figure>
        <img src="https://y.gtimg.cn/music/photo_new/T017M000002gPesM3hjA1n.jpg" alt />
        <figcaption>何大河《Lily,Barry》2019巡演 北京站</figcaption>
      </figure>
    </div>
    <div class="yuding">
      <span>
        ￥
        <b>100</b>起
      </span>
      <span>预定</span>
    </div>
    <div class="lvzuan">
      <span>买票即赠1个月豪华绿钻</span>
      <span class="iconfont icon-changyongtubiao-xianxingdaochu-zhuanqu-"></span>
    </div>
    <div class="shijian">
      <span class="iconfont icon-ziyuanldpi"></span>
      <span>2019.11.01 20:00</span>
    </div>
    <div class="dizhi">
      <span class="iconfont icon-dituzuobiao"></span>
      <span>MAOLivehouse</span>
    </div>
    <h5>演出介绍</h5>
    <div class="foot">
      <button>立即购票</button>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      show: false
    };
  },
  methods: {
    goback() {
      this.$router.go(-1);
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
.maipiao {
  width: 100%;
  height: 100%;
  overflow: hidden;
  background-color: white;
  position: absolute;
  top: 0px;
  z-index: 6;

  .top {
    display: flex;
    justify-content: space-between;
    padding: 20px 20px 0 20px;

    span.icon-fanhuizuojiantou, span.icon-fenxiang {
      font-size: 23px;
    }
  }
  table{
    width 100%;
    text-align center;
    tr,td{
      padding 20px 10px;
      border solid 1px;
    }
  }
  .main {
    text-align: center;

    img {
      width: 40%;
      height: 100%;
    }

    figcaption {
      font-size: 18px;
      padding: 20px;
    }
  }

  .yuding {
    padding: 20px;

    span:first-of-type {
      color: red;
      font-size: 15px;

      b {
        font-size: 24px;
        font-weight: 400;
        padding: 0 5px;
      }
    }

    span:last-of-type {
      padding: 2px 5px;
      background: black;
      color: white;
      font-size: 12px;
      margin-left: 20px;
      line-height: 0.5;
    }
  }

  .lvzuan {
    margin: 0 20px;
    padding: 10px;
    background-color: #e3e3e3;
    display: flex;
    justify-content: space-between;
  }

  .shijian {
    margin: 0 20px;
    padding: 10px 0;

    span:last-of-type {
      margin-left: 10px;
    }
  }

  .dizhi {
    margin: 0 20px;

    span:last-of-type {
      margin-left: 10px;
    }
  }

  h5 {
    font-size: 25px;
    text-align: center;
    font-weight: 400;
    // padding-top 30px
  }

  .foot {
    width: 100%;
    height: 60px;
    text-align: center;
    position: fixed;
    bottom: 0px;
    z-index: 10;

    button {
      margin-top: 20px;
      padding: 8px 90px;
      border: none;
      background: green;
      border-radius: 15%;
      color: white;
    }
  }
}
</style>