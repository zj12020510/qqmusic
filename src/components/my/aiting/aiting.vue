<template>
  <div id="box">
    <div class="enheng">
    <van-icon name="arrow-left"  @click="my" />   <van-image class="enheng1"
        width="7rem"
        height="7rem"
        src="./img/T002R300x300M000001DViXn26rVwz.jpg"
    />
    <font>我最爱听</font>
    <van-image round class="round" width="2rem" height="2rem" src="./img/cat.jpeg" />
      <span>DEVIL</span>
      <a>编辑简介 ></a>
    </div>
    <div class="zzc2">
       <p><van-icon name="play-circle" /><span>全部播放(8)</span><van-icon name="ascending" /><span class="iconfont icon-xiazai1"></span><van-icon name="descending" /></p>
    </div>
    <div class="zzc3">
      <span>恋人心</span><br>
      <van-icon name="vip-card-o" />
      <font>魏新雨·恋人心</font>
      <van-icon name="video-o" />
      <van-icon name="ellipsis" />
    </div>
  </div>
</template>

<script>
export default {
    methods: {
    my() {
      this.$router.push("/my");
    }
  }
}
</script>

<style scoped>
#box{
  width: 100%;
  overflow-x: hidden
}
.zzc3 .van-icon-video-o{
   position: absolute;
  left: 18rem;
  font-size: 24px;
  top: 13px
}
.zzc3 .van-icon-ellipsis{
  position: absolute;
  left: 21rem;
  font-size: 24px;
  top: 13px
}
.zzc3{
  position: relative;
  width:100rem;
  height: 3rem;
  margin-top: 1rem
}
.zzc3 span{
  position: absolute;
  left: 20px;
  font-size: 20px
}
.van-icon-vip-card-o{
  position: absolute;
  left: 20px;
  top: 25px;
}
.zzc3 font{
  position: relative;
  left: 40px;
  font-size: 14px;
  color:#666
}
.cur font{
  color: #23D599;
  padding-bottom: 10px;
  border-bottom: 2px solid #23D599
}
.zzc2{
  width:100%;
  height: 3rem
}
.van-icon-ascending,.icon-xiazai1,.van-icon-descending,.van-icon-play-circle{
  font-size: 2rem;
  vertical-align: middle;
  line-height:3rem;
  color:#666
}
.van-icon-play-circle{
  color: #23D599;
  margin-left: 1rem;
}
.van-icon-ascending{
    margin-left: 7rem;
}
.icon-xiazai1,.van-icon-descending{
  margin-left: 8px;
}
.enheng .van-icon-arrow-left {
  font-size: 2rem;
  color: #ffffff;
  position: absolute;
  top: 1rem;
}
.enheng{
    width: 100%;
    height: 15rem;
    padding-left: 1rem;
    background: url(//y.gtimg.cn/music/photo_new/T002R300x300M000001DViXn26rVwz.jpg?max_age=2592000) round;
    position: relative;
}
.enheng1{
    position: absolute;
    top:5rem;
    left: 2rem;
}
.enheng font{
    position: absolute;
    color: #ffffff;
    top: 5rem;
    left: 10rem
}
 .enheng .round{
  position: absolute;
  top: 7rem;
  left: 10rem
}
.enheng span{
    position: absolute;
    color: #ffffff;
    top: 116px;
    left: 199px
}
.enheng a{
    position: absolute;
    color: #ffffff;
    top: 11rem;
    left: 10rem;
    font-size: 13px
}
</style>