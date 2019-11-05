<template>
<div class="fx">
  <div class="faxian">
    <div class="top_fx">
      <span class="iconfont icon-fanhui" @click="goback"></span>
      <span class="iconfont icon-fenxiang"  @click="showPopup"></span>
    </div>
    <van-popup v-model="show"  position="bottom" :style="{ height: '30%' }">
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
        <!-- <span @click="close">取消</li> -->
      
    </van-popup>
    <div class="biaoti">
      <h3>发现 · 本地演出</h3>
      <span class="iconfont icon-dituzuobiao">北京</span>
    </div>
    <button @click="all">
      全部
      <span class="iconfont icon-xiangxiajiantou"></span>
    </button>
    <!-- 图文 -->
    <div class="main_bendi" v-for="(item,index) in main_bendi" :key="index"  @click="miaoshu">
      <figure>
        <img :src="item.bendi_img" alt />
        <figcaption>
          <span>{{item.bendi_txt1}}</span>
          <p>{{item.bendi_txt2}}</p>
          <p>{{item.bendi_txt3}}</p>
        </figcaption>
      </figure>
    </div>


  </div>
  
</div>
</template>

<script>
export default {
  data() {
    return {
      show: false,
        main_bendi:[{
          bendi_img:"https://y.gtimg.cn/music/photo_new/T017M000002gPesM3hjA1n.jpg",
          bendi_txt1:"2019万圣化妆主题演唱会-北京站",
          bendi_txt2:"2019.10.31",
          bendi_txt3:"MAO Livehouse"
        },
        {
          bendi_img:"https://y.gtimg.cn/music/photo_new/T017M000002gPesM3hjA1n.jpg",
          bendi_txt1:"2019万圣化妆主题演唱会-北京站",
          bendi_txt2:"2019.10.31",
          bendi_txt3:"MAO Livehouse"
        },
        {
          bendi_img:"https://y.gtimg.cn/music/photo_new/T017M000002gPesM3hjA1n.jpg",
          bendi_txt1:"2019万圣化妆主题演唱会-北京站",
          bendi_txt2:"2019.10.31",
          bendi_txt3:"MAO Livehouse"
        }
        ]
    };
  },
  components: {},
  methods: {
    goback() {
        this.$router.go(-1)
    },
    
    all() {

    },
    zhuye(){
      console.log(123)
    },
    miaoshu(){
      this.$router.push("/miaoshu")
      console.log(111)
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
* {
  margin: 0;
  padding: 0;
}
html,
body {
  width: 100%;
  height: 100%;
  position: relative;
}
table{
  text-align center;
  width 100%;
}
tr,td{
   border solid 1px;
   padding  20px 10px;
}
.fx{
  width: 100%;
  height: 100%;
  overflow hidden;
  position: absolute;
  top: 0;
  z-index 1;
}
.faxian {
  width: 100%;
  height: 100%;
  background: white;
}
.main_bendi {
  padding: 0 5%;
}
.main_bendi figure {
  display: flex;
  justify-content: space-between;
  width: 100%;
  margin-top: 10px;
}
.main_bendi img {
  width: 35%;
  height: 100%;
}
.main_bendi figcaption {
  width: 60%;
  margin: auto;
}
.main_bendi p {
  color: gray;
  font-size: 14px;
}
span .icon-dituzuobiao {
  width: 100px;
  height: 70px;
}
.top_fx {
  display: flex;
  justify-content: space-between;
  padding: 15px 10px;
}
.top_fx span.icon-fanhuizuojiantou {
  font-size: 25px;
}
.top_fx span.icon-fenxiang {
  font-size: 23px;
}
.biaoti {
  display: flex;
  padding: 0 10px;
}
.biaoti h3 {
  font-size: 30px;
  font-weight: 400;
  padding: 0 10px;
}
.biaoti span {
  line-height: 3;
}
.biaoti .zuobiao{
    width: 100%;
    position: absolute;
    bottom: 0;
}
button {
  border: none;
  outline: none;
  background: none;
  padding: 5px 15px;
  border: solid 1px grey;
  margin-left: 20px;
}
button span.icon-up_x {
  padding-left: 5px;
  font-size: 23px;
  line-height: 0.5;
}
.maipiao{
  width 100%;
  height 100%;
  background-color white;
  // position absolute;
  bottom 0;
  z-index 3;
  .top{
    display flex;
    justify-content space-between;
    padding 20px 20px 0 20px;
    
    span.icon-fanhuizuojiantou,span.icon-fenxiang{
      font-size 23px;
    }
    
  }
  .main{
    text-align center;
    img{
      width 40%;
      height 100%;
    }
    figcaption{
      font-size 18px
      padding 20px
    }
  }
  .yuding{
    padding 20px
    span:first-of-type{
      color red
      font-size 15px
      b{
        font-size 24px
        font-weight 400
        padding 0 5px
      }
    }
    span:last-of-type{
      padding 2px 5px
      background black 
      color white 
      font-size 12px
      margin-left 20px
      line-height 0.5
    }
  }
  .lvzuan{
    margin 0 20px
    padding 10px
    background-color #e3e3e3 
    display flex
    justify-content space-between
  }
  .shijian{
    margin 0 20px
    padding 10px 0
    span:last-of-type{
      margin-left 10px
    }
  }
  .dizhi{
    margin 0 20px
    span:last-of-type{
      margin-left 10px
    }
  }
  h5{
    font-size 25px
    text-align center
    font-weight 400
    padding-top 30px
  }
  .foot{
    width 100%
    height 60px
    text-align center
    position fixed
    buttom 0
    button{
      margin-top 20px
      padding 8px 90px
      border none 
      background green
      border-radius 15%
      color white
    }
  }
}
</style>