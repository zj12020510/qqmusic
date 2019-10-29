<template>
  <div class="box">
    <header> <span>{{app_top}}</span><input type="search" name="" id=""><span><van-icon name="music-o" /></span> </header>
    <div class="content">
      <router-view></router-view>
    </div>
    <footer>
      <div v-for="(item, index) of app_nav" @click="gorouter(item.url, item.title)" :key="index">
        <span><van-icon :name="item.app_icon" /></span>
        <span>{{item.title}}</span> 
      </div>
    </footer>
  </div>
</template>

<script>
export default {
  data(){
    return{
      app_nav:[
        {
          title:"音乐馆",
          app_icon:"audio",
          url:"/musichome",
        },
        {
          title:"推荐",
          app_icon:"good-job-o",
          url:"/tuijian"
        },
        {
          title:"动态",
          app_icon:"browsing-history-o",
          url:"/dongtai"
        },
        {
          title:"我的",
          app_icon:"contact",
          url:"/my"
        },
      ],
      app_top:"音乐馆"
    }
  },
  methods: {
    gorouter(url, title) {
      this.$router.push({path:url});
      this.app_top = title;
    }
  }
};
</script>

<style lang="stylus" scoped>
.box {
  width: 100%;
  display grid ;
  grid-auto-columns 100%;
  grid-template-rows 3.125rem calc(100vh - 6.875rem) 3.75rem;
  header {
    width: 100%;
    height: 3.125rem;
    background: #F7F7F7;
    display flex;
    justify-content space-around;
    align-items center;
    input{
        width 50%;
        height 1.875rem;
        border-radius .9375rem;
        border none;
        outline none ;
        text-indent .625rem
        
    }
    span{
        font-size 30px;
        font-weight bold;
    }
  }
    .content{
      overflow scroll;
        width 100%;
        background #F7F7F7;
    }

  footer {
    width: 100%;
    display: flex;
    background: #fff;
    border-top: 1px solid #ccc;
    box-sizing border-box;
    overflow-x hidden;
    // position: fixed;
    // bottom: 0rem;
    // left: 0rem;
    color #646464;


    div {
      width: 25%;
      text-align center
      height 3.75rem;
      span{
          display block;
          width 100%;
          font-size .625rem;
          i{
              font-size 1.875rem;
              padding .3125rem 0 0 0;
              box-sizing border-box;
          }
      }
    }
  }
}
</style>