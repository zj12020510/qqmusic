import Bofanglist from "../bofangqi/bfq_bofangliebiao/bfq_bofangliebiao.vue";
export default {
  props: ["bfq_down"],
  data() {
    return {
      // 音乐
      // musiclist: this.$store.musiclist,
      //播放器设置
      bfq_shezhi_isshow: false,
      // 音乐播放进度
      cTime: 0,
      // 音乐总时长
      dTime: 0,
      // 音效
      // zz: false,
      // 默认进度
      volume: 0.3,
      // 当前播放的列表位置
      // musiclist_index:this.$store.state.musiclist_index,
      // 评论
      // pinglun:false,
      // 点赞收藏
      bfq_dianzan: false,
      bflist: false,
      // 循环模式
      xunhuan: ["icon-bofangye-caozuolan-suijibofang", "icon-xunhuan", "icon-singlecycle"],
      xunhuanindex: 0,
      //音效设置
      actions: [{ name: "标准品质(4.9MB)" }, { name: "HQ高品质(12.2MB)💎🎶" }]
    };
  },
  created() {
    this.$store.dispatch("BFQ_LIST")
  },
  computed: {
    bfq_isplay() {
      //音频是否在播放
      return this.$store.state.bfq_isplay
    },
    musiclist_index() {
      // 当前播放的列表位置
      return this.$store.state.musiclist_index
    },
    musiclist() {
      // console.log(this.$store.state.musiclist);
      return this.$store.state.musiclist
    }
  },
  methods: {
    // onSelect(item) {
    //   // 默认情况下，点击选项时不会自动关闭菜单
    //   // 可以通过 close-on-click-action 属性开启自动关闭
    //   this.zz = false;
    //   // Toast(item.name);
    //   console.log(item);
    // },
    bfq_xh() {
      // 循环模式播放
      if (this.xunhuanindex < 2) {
        this.xunhuanindex = this.xunhuanindex + 1
      } else {
        this.xunhuanindex = 0
      }
    },
    bfq_shangyiqu(val) {
      // 上一曲或下一曲
      let index = this.musiclist_index + val;
      if (index < 0) {
        index = this.musiclist.length - 1
      }
      if (index >= this.musiclist.length) {
        index = 0
      }
      // this.musiclist_index = index
      
      this.$store.commit("MUSICLIST_INDEX", {
        index, 
        bfq_isplay:true
      })
    },
    bforzt(val) {
      // 点击播放或暂停按钮时
      // 随机模式下点击播放生成随机列表
      // if(this.xunhuanindex == 0){
      //   for (var i = 0; i < this.musiclist.length - 1; i++) {
      //     let j = Math.floor( Math.random() * (i++))
      //     let y = this.musiclist[i]
      //     this.musiclist[i] = this.musiclist[j]
      //     this.musiclist[j] = y
      //   }
      // }

      if (val) {
        this.$store.commit("BFQ_ISPLAY", !this.bfq_isplay)
        $('.yinpinyuan')[0].play()
      } else {
        this.$store.commit("BFQ_ISPLAY", !this.bfq_isplay)
        $('.yinpinyuan')[0].pause()
      }

    },
    ended() {
      // 播放结束时
      this.bfq_shangyiqu(1)

    },
    playing() {
      // 当音频播放时
      this.dTime = this.$refs.bfq_yinpin.duration
    },
    timeupdate() {
      // 当音频进度改变时
      this.cTime = this.$refs.bfq_yinpin.currentTime
    },
    yinliang() {
      // 音量
      this.$refs.bfq_yinpin.volume = this.volume
    },
    bfq_tiaojindu(e) {
      // 进度调节函数
      // this.$refs.bfq_yinpin.
      let zuojuli = $('.bfq_bofangtiao').offset().left;
      let tiaochang = $('.bfq_bofangtiao')[0].clientWidth;
      let shijianweizhi = e.clientX;
      this.$refs.bfq_yinpin.currentTime = (shijianweizhi - zuojuli) / tiaochang * this.dTime

    },
    bfq_shoucang() {
      // 收藏按钮
      this.bfq_dianzan = !this.bfq_dianzan
    },
    bfq_bflist() {
      // 播放列表
      this.bflist = !this.bflist
      // console.log(123)
    }
  },
  components: {
    Bofanglist
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
