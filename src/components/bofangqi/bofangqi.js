export default {
  props:["bfq_down"],
    data() {
      return {
        // 音乐
        musiclist: [
          {
            title: "野狼disco",
            touxiang:"/img/野狼Disco_宝石.jpg",
            url:"/Music/宝石Gem_陈伟霆_野狼Disco.mp3"
          },
          {
            title: "嚣张",
            zuozhe: "en",
            touxiang:"/img/许嵩_青年晚报_4.jpg",
            brijing: "rgb(39, 62, 91)",
            url:"/Music/en - 嚣张.mp3"
          }
        ],
        //播放器设置
        bfq_shezhi_isshow:false,
        // 音乐播放进度
        cTime: 0,
        // 音乐总时长
        dTime: 0,
        // 音效
        zz: false,
        // 默认进度
        volume: 0.3,
        // 当前播放的列表位置
        musiclist_index:0,
        // 循环模式
        xunhuan:["icon-bofangye-caozuolan-suijibofang","icon-xunhuan","icon-singlecycle"],
        xunhuanindex:0,
        //音效设置
        actions: [{ name: "标准品质(4.9MB)" }, { name: "HQ高品质(12.2MB)💎🎶" }]
      };
    },

    computed:{
      bfq_isplay(){
        //音频是否在播放
        return this.$store.state.bfq_isplay
      }
    },
    methods: {
      onSelect(item) {
        // 默认情况下，点击选项时不会自动关闭菜单
        // 可以通过 close-on-click-action 属性开启自动关闭
        this.zz = false;
        // Toast(item.name);
        console.log(item);
      },
      dd() {
        // 音效设置模块显示
        this.zz = true;
      },
      bfq_xh(){
        if(this.xunhuanindex < 2){
          this.xunhuanindex = this.xunhuanindex + 1
          console.log(this.xunhuanindex)
        }else{
          this.xunhuanindex = 0
          console.log(this.xunhuanindex)

        }
      },
      bfq_shangyiqu(val){
        let index = this.musiclist_index + val;
        if(index < 0){
          index = this.musiclist.length - 1
        }
        if(index >= this.musiclist.length){
          index = 0
        }
        console.log("音乐单中的音乐",index)
        this.musiclist_index = index
        $('.yinpinyuan').attr("src",this.musiclist[index].url)
        $('.yinpinyuan')[0].play()
      },
      bforzt(val) {
        // 点击播放或暂停按钮时
        if(val){
          this.$store.commit("BFQ_ISPLAY",!this.bfq_isplay)
          this.$refs.bfq_yinpin.play()
        }else{
          this.$store.commit("BFQ_ISPLAY",!this.bfq_isplay)
          this.$refs.bfq_yinpin.pause()

        }
        
      },
      ended(){
        // 播放结束时
        console.log(123);
        // this.$store.commit("BFQ_ISPLAY",!this.bfq_isplay)
        this.bfq_shangyiqu(1)
      },
      playing(){
        // 当音频播放时
        this.dTime = this.$refs.bfq_yinpin.duration
      },
      timeupdate(){
        // 当音频进度改变时
        this.cTime = this.$refs.bfq_yinpin.currentTime
      },
      yinliang(){
        // 音量
        this.$refs.bfq_yinpin.volume = this.volume
      },
      bfq_tiaojindu(e){
        // 进度调节函数
        // this.$refs.bfq_yinpin.
        let zuojuli = $('.bfq_bofangtiao').offset().left;
        let tiaochang = $('.bfq_bofangtiao')[0].clientWidth;
        let shijianweizhi = e.clientX;
        this.$refs.bfq_yinpin.currentTime = (shijianweizhi - zuojuli)/tiaochang * this.dTime
       
      }
    },
    filters: {
      // 来源 https://www.cnblogs.com/100qianduan/p/7171456.html
      zhuanhuan(s) {
          var t;
          if (s > -1) {
              var min = Math.floor(s / 60) % 60;
              var sec = s % 60;

              if (min < 10) {
                  t += "0";
              }
              t = min + ":";
              if (sec < 10) {
                  t += "0";
              }
              t += sec | 0;
          }
          return t;
      }
  }
  };