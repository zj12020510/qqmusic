<template>
  <div class="box">
    <div class="zujian_img">
      <div class="header">
        <span class="iconfont icon-fanhui" @click="fanhui"></span>
        <span>歌单</span>
        <span class="iconfont icon-diandiandianshu"></span>
      </div>
      <div class="content">
          <div class="left">
              <img src="//qpic.y.qq.com/music_cover/txriciaUU4icrqvK87xMKhwyjacPq71H97hhrXpgPhS5NqF6eSTErk0LQ/300?n=1" alt="">
              <p><van-icon name="service-o" class="gengduo_io" /><span class="num">2.5万</span></p>
          </div>
          <div class="right">
              <span>另类摇滚&nbsp;|&nbsp;华人演绎的英式风潮</span>
              <p class="right-img">
                  <span><img src="//y.gtimg.cn/music/photo_new/T002R90x90M000001aliLF2i7jCi.jpg?max_age=2592000" alt=""></span>
                  <span>戒摇滚是不戒摇滚是不戒摇滚是不</span>
                  <span class="iconfont icon-guanzhu">关注</span>
              </p>
              <p class="right-jianjie"><span>简介:华人，总有一帮热血的摇滚风潮</span><span>&gt;</span></p>
          </div>
      </div>
      <div class="foot">
          <p><span class="iconfont icon-xiangqu"></span><span>411</span></p>
          <p @click="pinglun"><span class="iconfont icon-pinglunguanli"></span><span>评论</span></p>
          <p><span class="iconfont icon-fenxiang"></span><span>分享</span></p>
      </div>
    </div>
     <div class="gedan">
         <div class="search">
             <van-icon name="search" class="ss"/>
             <input type="text" placeholder="搜索此歌单的歌曲" disabled>
         </div>
      <div class="heade">
        <p>
          <span class="iconfont icon-bofang"></span>全部播放(30)
        </p>
        <p>
          <span class="iconfont icon-iconfontjiantou"></span>
          <span class="iconfont icon-quanxuan"></span>
        </p>
      </div>
      <div class="list">
        <span class="xuhao">1</span>
        <ul>
          <li>
            <span>
              <p>做什么给你</p>
              <p class="rm">
                <span class="sq">SQ</span>&nbsp;&nbsp;孙楠-楠得精选
              </p>
            </span>
            <span class="iconfont icon-diandiandianshu"></span>
          </li>
        </ul>
      </div>
      <div class="list">
        <span class="xuhao">2</span>
        <ul>
          <li>
            <span>
              <p>冬天的秘密</p>
              <p class="rm">
                <span class="sq">SQ</span>&nbsp;&nbsp;周传雄-恋人创世纪
              </p>
            </span>
            <span class="iconfont icon-diandiandianshu"></span>
          </li>
        </ul>
      </div>
      <div class="list">
        <span class="xuhao">2</span>
        <ul>
          <li>
            <span>
              <p>冬天的秘密</p>
              <p class="rm">
                <span class="sq">SQ</span>&nbsp;&nbsp;周传雄-恋人创世纪
              </p>
            </span>
            <span class="iconfont icon-diandiandianshu"></span>
          </li>
        </ul>
      </div>
      <div class="list">
        <span class="xuhao">2</span>
        <ul>
          <li>
            <span>
              <p>冬天的秘密</p>
              <p class="rm">
                <span class="sq">SQ</span>&nbsp;&nbsp;周传雄-恋人创世纪
              </p>
            </span>
            <span class="iconfont icon-diandiandianshu"></span>
          </li>
        </ul>
      </div>
      <div class="list">
        <span class="xuhao">2</span>
        <ul>
          <li>
            <span>
              <p>冬天的秘密</p>
              <p class="rm">
                <span class="sq">SQ</span>&nbsp;&nbsp;周传雄-恋人创世纪
              </p>
            </span>
            <span class="iconfont icon-diandiandianshu"></span>
          </li>
        </ul>
      </div>
      <div class="list">
        <span class="xuhao">2</span>
        <ul>
          <li>
            <span>
              <p>冬天的秘密</p>
              <p class="rm">
                <span class="sq">SQ</span>&nbsp;&nbsp;周传雄-恋人创世纪
              </p>
            </span>
            <span class="iconfont icon-diandiandianshu"></span>
          </li>
        </ul>
      </div>
      <div class="list">
        <span class="xuhao">2</span>
        <ul>
          <li>
            <span>
              <p>冬天的秘密</p>
              <p class="rm">
                <span class="sq">SQ</span>&nbsp;&nbsp;周传雄-恋人创世纪
              </p>
            </span>
            <span class="iconfont icon-diandiandianshu"></span>
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  methods: {
    fanhui() {
      this.$router.push("/tuijian");
    },
    pinglun(){
        this.$router.push("/pinglun")
    }
  }
};
</script>

<style scoped>
.box {
  position: absolute;
  top: 0;
  width: 100%;
  height: 100%;
  background: #fff;
  z-index: 1;
}
.zujian_img {
  width: 100%;
  height: 250px;
  background: url(../image/bgtp2.jpeg) no-repeat 100%;
}
.header {
  color: #fff;
  display: flex;
  align-items: center;
  height: 40px;
  line-height: 40px;
  text-align: center;
}
.header span:nth-child(1) {
  width: 50px;
  font-size: 30px;
}
.header span:nth-child(2) {
  flex: 1;
  font-size: 20px;
}
.header span:nth-child(3) {
  width: 50px;
  font-size: 30px;
}
.content{display: flex;justify-content: space-around;padding-top: 10px;}
.content .left{width: 40%;text-align: center;position: relative;}
.content .left img{width: 120px;height: 120px;border-radius: 10px;}
.content .left p{position: absolute;bottom: 10px;left: 60px;color: #fff;height: 20px;line-height: 20px;}
.content .left .num{padding: 0 5px;}
.content .right{width: 60%}
.content .right>span{font-size: 20px;color: #fff;}
.right-img{display: flex;width: 98%;align-items: center;color: #fff;padding-top: 5px;}
.right-img span:nth-child(1){width: 20%}
.right-img span:nth-child(2){width: 48%;white-space:nowrap;text-overflow:ellipsis;overflow: hidden;}
.right-img span:nth-child(3){width: 30%;border: 1px solid;text-align: center;border-radius: 25px;line-height: 21px;font-size: 12px;}
.right-img img{width: 35px;height: 35px;border-radius: 50%;}
.right-jianjie{width:100%;display: flex;color: #fff;font-size: 13px;padding-top: 10px;}
.right-jianjie span:nth-child(1){width: 90%;white-space:nowrap;text-overflow:ellipsis;overflow: hidden;}
.right-jianjie span:nth-child(2){width: 10%;}
.foot{width: 100%;display: flex;color: #fff;text-align: center;height: 80px;line-height: 80px;align-items: center;}
.foot p{flex: 1;width: 33.33%;}
.foot .iconfont{font-size: 25px !important;vertical-align: middle;padding: 0 5px;}
.search{text-align: center;margin-top: 8px;position: relative;}
.search input{width: 90%;text-align: center;border-radius: 20px;border: none;outline: none}
.search .ss{position: absolute;left: 110px;z-index: 5;top: 5px;font-size: 15px;}
.search input::-webkit-input-placeholder{color: #999;font-size: 15px;}
.heade {
  display: flex;
  justify-content: space-around;
}
.heade p:nth-child(1) {
  height: 50px;
  line-height: 46px;
}
.heade p:nth-child(1) span {
  color: green;
  width: 50%;
  font-size: 25px;
  vertical-align: middle;
  padding: 0 5px;
}
.heade p:nth-child(2) {
  color: #999;
  width: 50%;
  text-align: right;
  height: 50px;
  line-height: 50px;
}
.heade p:nth-child(2) span {
  padding: 0 10px;
}
.list {
  width: 100%;
  display: flex;
  height: 50px;
  align-items: center;
}
.list .xuhao {
  width: 13%;
  text-align: center;
}
.list ul {
  width: 87%;
}
.list li {
  display: flex;
  align-items: center;
  justify-content: space-between;
}
.list li span:nth-child(1) {
  width: 80%;
}
.list li span:nth-child(2) {
  width: 20%;
  text-align: center;
  font-size: 20px;
}
.list .rm {
  font-size: 13px;
  color: #999;
  padding: 4px 0;
}
.list .sq {
  border: 1px solid;
  color: orangered;
  font-size: 12px;
  padding: 0 4px;
}
</style>