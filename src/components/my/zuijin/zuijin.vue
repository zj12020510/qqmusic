<template>
  <div id="box">
    <van-icon name="arrow-left" @click="my"/><span class="title">最近歌曲</span>
    <div class="zzc">
      <span v-for="(item,index) of list" :key="index" :class="{'cur' : item.done}" @click='tabClick(index)' ><font>{{item.title}}</font></span>
    </div>
    <div class="zzc1" v-show="tabIndex === 0">
        <span>近年歌曲</span><span>流行阵地</span><br><span>更多分类>></span>
    </div>
    <div class="zzc1"  v-show="tabIndex === 1">
        <span>近年专辑</span><span>火爆阵地</span><br><span>更多分类>></span>
    </div>
    <div class="zzc1"  v-show="tabIndex === 2">
        <span>近年歌单</span><span>炫酷阵地</span><br><span>更多分类>></span>
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
  data() {
    return {
      list: [
        {
          title: "歌曲",
          done: true
        },
        { 
          title: "专辑", 
          done: false
        },
        { 
          title: "歌单",
          done: false
        }
      ],
       tabIndex: 0
    };
  },
   methods:{
      tabClick(index){ 
          this.tabIndex = index
          this.list.forEach(item => {
              item.done = false
          })
          this.list[index].done = true
      },
      my() {
      this.$router.push("/my");
      }
  },
};
</script scoped>

<style>
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
.zzc{
  width: 100%;
  height: 2rem;
  display: flex;
  justify-content: space-between;
  margin-bottom: 1rem
}
.zzc span{
  width: 33%;
  text-align: center
}
.zzc1 span{
  background: #ffffff;
  margin-left:2rem;
  padding: 5px;
}
.zzc1{
  height: 4rem;
  position: relative;
}
.zzc1 span:last-child{
  position: absolute;
  bottom: 0;
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
.van-icon-arrow-left{
  font-size: 2rem;
  vertical-align: middle;
  margin-bottom: 1rem;
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
.title{
  margin-left: 8rem;
  font-size: 20px;
  font-weight: bold;
}
</style>