<template>
  <div class="wrapper">
    <!-- 头部 -->
    <header>
      <span class="iconfont icon-fanhui"></span>
      <span>评论85</span>
    </header>
    <!-- 中间滚动区域 -->
    <section>
      <div class="pinglun-img">
         <div>
			 <img src="//qpic.y.qq.com/music_cover/HpqvGydoP3KRwVuBX6nXnmgULZ8TsXKW4IBbeQof91grgibI63Ko7KA/300?n=1" alt="">
			 <p class="iconfont icon-bofang"></p>
		 </div>
		 <div>
			 <p>来自柔情男嗓的细腻声线</p>
			 <p>R&B Man</p>
		 </div>
		 <div>&gt;</div>
	  </div>
      <keep-alive>
        <router-view></router-view>
      </keep-alive>
    </section>
    <!-- 底部 -->
    <footer>
      <input type="text" placeholder="发表评论" @touchstart.stop="show = true" />
      <van-icon name="smile-o" class="biao"/>
    </footer>
  </div>
</template>

<script>
export default {
  
};
</script>

<style scoped>
html,
body {
  height: 100%;
}
.wrapper {
  display: -webkit-box;
  display: -webkit-flex;
  display: -ms-flexbox;
  display: flex;
  -webkit-box-orient: vertical;
  -webkit-flex-direction: column;
  -ms-flex-direction: column;
  flex-direction: column;
  width: 100%;
  height: 100%;
  position: absolute;
  top: 0;
  background: #eee;
  z-index: 1;
}
header {
  width: 100%;
  display: flex;
  align-items: center;
  height: 40px;
  line-height: 40px;
  background-color: #fff;
  text-align: center;
}
header span:nth-child(1) {
  width: 50px;
  font-size: 30px;
}
header span:nth-child(2) {
  width: 70%;
  font-size: 18px;
}
.pinglun-img{width: 100%;display: flex;justify-content: space-around;align-items: center;background: #ccc;padding: 10px 0;}
.pinglun-img div:nth-child(1){width: 30%;position: relative;text-align: center;}
.pinglun-img img{width: 80px;height: 80px;border-radius: 5px;}
.pinglun-img div:nth-child(1) p{position: absolute;left: 43px;top: 26px;color:#fff;font-size: 25px;}
.pinglun-img div:nth-child(2){width: 60%}
.pinglun-img div:nth-child(2) p:nth-child(2){font-size: 13px;}
.pinglun-img div:nth-child(3){width: 10%;text-align: center;}
footer {
  height: 40px;
  line-height: 40px;
  background-color: #fff;
  display: flex;
  align-items:center;
  justify-content: space-around;
}
footer input {
  width: 80%;
  height: 20px;
  line-height: 20px;
  border-radius: 20px;
  border: none;
  background: #ccc;
  padding-left: 10px;
}
footer .biao{
	font-size: 25px;
}
section {
  -webkit-box-flex: 1;
  -webkit-flex: 1;
  -ms-flex: 1;
  flex: 1;
  width: 100%;
  overflow: auto; /* winphone8和android4+ */
  -webkit-overflow-scrolling: touch; /* ios5+ */
}
</style>