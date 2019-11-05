<template>
  <div class="box">
    <div class="zujian_img">
      <span class="iconfont icon-fanhui" @click="fanhui"></span>
      <img
        src="//y.gtimg.cn/music/photo_new/T015R640x360M101001LROAZ3h2Q6x.jpg?max_age=2592000"
        alt
      />
      <div class="shoucang">
        <div class="shoucangtop">
          <p>
            <img src="http://y.qq.com/favicon.ico?max_age=2592000" alt />QQ音乐官方歌单
          </p>
          <p>11月1日更新</p>
        </div>
        <div class="shoucangcontent">QQ音乐根据你的私人号品味为你挑选，每日更新。</div>
        <div class="shoucangbot">
          <p>
            <span class="iconfont icon-xiangqu" @click="sc" :class="{cur:shoucang}"></span>收藏
          </p>
          <p>
            <span class="iconfont icon-fenxiang"></span>分享
          </p>
        </div>
      </div>
    </div>
    <div class="gedan">
      <div class="header">
        <p>
          <span class="iconfont icon-bofang"></span>全部播放(30)
        </p>
        <p>
          <span class="iconfont icon-iconfontjiantou"></span>
          <span class="iconfont icon-quanxuan"></span>
        </p>
      </div>
      <div class="content">
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
      <div class="content">
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
  data() {
    return {
      shoucang: false
    };
  },
  methods: {
    fanhui() {
      this.$router.push("/tuijian");
    },
    sc() {
      this.shoucang = !this.shoucang;
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
.zujian_img > span {
  color: #fff;
  position: absolute;
  width: 50px;
  height: 40px;
  line-height: 40px;
  font-size: 30px;
  text-align: center;
  left: 0;
  top: 0;
}
.zujian_img img {
  width: 100%;
}
.shoucang {
  width: 90%;
  height: 150px;
  margin: 0 auto;
  position: relative;
  top: -15px;
  background: #fff;
  box-shadow: 5px 5px 5px #ccc;
}
.shoucangtop img {
  width: 20px;
  height: 20px;
  margin: 0 10px;
  vertical-align: middle;
}
.shoucangtop {
  display: flex;
  justify-content: space-between;
  text-align: center;
  align-items: center;
  padding: 10px 0;
}
.shoucangtop p {
  width: 50%;
}
.shoucangtop p:nth-child(2) {
  text-align: right;
  border: 1px solid;
  width: 30%;
  text-align: center;
  border-radius: 15px;
  font-size: 13px;
  color: #fff;
  background: #000;
  margin-right: 10px;
}
.shoucangcontent {
  padding: 0 15px 15px 15px;
  color: #999;
}
.shoucangbot {
  width: 100%;
  display: flex;
  text-align: center;
  height: 50px;
  line-height: 50px;
  border-top: 1px solid #ccc;
}
.shoucangbot p {
  width: 50%;
}
.shoucangbot span {
  font-size: 25px;
  vertical-align: middle;
  font-weight: bold;
  padding-right: 5px;
}
.header {
  display: flex;
  justify-content: space-around;
}
.header p:nth-child(1) {
  height: 50px;
  line-height: 46px;
}
.header p:nth-child(1) span {
  color: green;
  width: 50%;
  font-size: 25px;
  vertical-align: middle;
  padding: 0 5px;
}
.header p:nth-child(2) {
  color: #999;
  width: 50%;
  text-align: right;
  height: 50px;
  line-height: 50px;
}
.header p:nth-child(2) span {
  padding: 0 10px;
}
.content {
  width: 100%;
  display: flex;
  height: 50px;
  align-items: center;
}
.content .xuhao {
  width: 13%;
  text-align: center;
}
.content ul {
  width: 87%;
}
.content li {
  display: flex;
  align-items: center;
  justify-content: space-between;
}
.content li span:nth-child(1) {
  width: 80%;
}
.content li span:nth-child(2) {
  width: 20%;
  text-align: center;
  font-size: 20px;
}
.content .rm {
  font-size: 13px;
  color: #999;
  padding: 4px 0;
}
.content .sq {
  border: 1px solid;
  color: orangered;
  font-size: 12px;
  padding: 0 4px;
}
.cur {
  color: red;
}
</style>