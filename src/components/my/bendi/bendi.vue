<template>
  <div id="box">
    <van-icon name="arrow-left" @click="my"/><span class="title">本地歌曲</span>
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
    <div class="zzc4">
       <a>听听这些音乐，你可能会喜欢</a>
       <span class="iconfont icon-shuaxin"></span>
       <span class="iconfont icon-guanbi"></span>
        <ul>
          <li v-for="(item,index) of gedan" :key="index">
             <van-image
                width="5rem"
                height="5rem"
                :src="item.src"
              />
              <font>{{item.name}}</font>
              <van-icon name="vip-card-o" />
              <span>{{item.zhuanji}}</span>
              <van-icon name="ellipsis" />
          </li>
        </ul>
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
      gedan:[
        {
          name:'可不可以(女声版)',
          zhuanji:'季彦霖·可不可以(女声版)',
          src:"http://qpic.y.qq.com/music_cover/8eiaDBJ27yYicpMibYZmmEdNPQU5zrE5SEbmcZbYN23HA1KvTYkBfn55A/300?n=1"
        },
        {
          name:'过命的兄弟',
          zhuanji:'隔壁老樊·过命的兄弟',
          src:"http://qpic.y.qq.com/music_cover/6pKF7XnkTESE8L7nkkbjXgQf3rhKjdUpeicRu5b9F5LvMptYc0DHqiaA/300?n=1"
        },
        {
          name:'年少有为',
          zhuanji:'李荣浩·年少有为',
          src:"//qpic.y.qq.com/music_cover/0LEDNpn4ryN9GyxYVoHffUxicEBzLvWasTaic1p0A6zREWw2DQf0cNYA/300?n=1"
        },
        {
          name:'来自天堂的魔鬼',
          zhuanji:'邓紫棋·新的心跳',
          src:"//qpic.y.qq.com/music_cover/Hepa6V8aXWj4x9UyxSztnSxMrTAh9wIHra4zo6z0AEJXRPMBsF5aEw/300?n=1"
        },
         {
          name:'暗示分离',
          zhuanji:'en·暗示分离',
          src:"//qpic.y.qq.com/music_cover/KetjXWSVppvyrVJfzfdpibicIiapI2YDTPgaWsztnt9Ww5kVezbhjEhzw/300?n=1"
        },
         {
          name:'那个女孩',
          zhuanji:'张泽熙·那个女孩',
          src:"//qpic.y.qq.com/music_cover/Uj77DagTFgiccudSicYvppRutw2ib06z89ndAwqgOo5EHxaYJ56EKqBIQ/300?n=1"
        },
         {
          name:'红色高跟鞋',
          zhuanji:'蔡健雅·红色高跟鞋',
          src:"//qpic.y.qq.com/music_cover/J64lA7tSFnxIxyd7FrKy5utpgnlqXBHFIZnJ7mVRDhkiaKCiaiaXoBqMQ/300?n=1"
        },
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
</script>

<style scoped>
.zzc4 .van-icon-vip-card-o{
  position: absolute;
  left: 7rem;
  font-size: 1rem;
  top: 3rem;
}
.zzc4 ul{
  margin-top: 2rem
}
.zzc4 ul span{
  position: absolute;
  left: 135px;
  font-size: 14px;
  top: 46px;
  color: #666
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
.zzc4 .van-icon-ellipsis{
  position: absolute;
  left: 21rem;
  font-size: 24px;
  top: 2rem;
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
.zzc4 {
  margin-top: 1rem;
  width: 100;
  height: 48rem;
}
.zzc4 a {
  margin-left: 1rem;
}
.zzc4 .icon-shuaxin {
  font-size: 22px;
  padding-left: 5rem;
  color: #666
}
.zzc4 .icon-guanbi {
  font-size: 20px;
  padding-left: 1rem;
  color: #666;
}
.zzc4 ul li{
  padding-left: 1rem;
  position: relative;
  margin-bottom: 1rem;
}
.zzc4 ul font{
  position: absolute;
  left: 7rem;
  top: 22px;
  font-size: 18px;
}
</style>