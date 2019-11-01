export default {
    data() {
      return {
        // 音乐
        musiclist: [
          {
            title: "野狼disco",
            url:
              "http://aqqmusic.tc.qq.com/amobile.music.tc.qq.com/C4000000HxwU1V81tL.m4a?guid=6862437278&vkey=8344F29801F070D92C907B91DE92390D5B1D2DF90C672AB3B43BEBBFFE6F95E8DA89C38077914E2051FF6AC91EFD39C83386D2E6BDAA8938&uin=6054&fromtag=999"
          },
          {
            title: "嚣张",
            zuozhe: "en",
            touxiang:
              "https://y.gtimg.cn/music/photo_new/T002R300x300M000002lJJi244utqN.jpg?max_age=2592000",
            brijing: "rgb(39, 62, 91)",
            url:
              "http://ws.stream.qqmusic.qq.com/http://aqqmusic.tc.qq.com/amobile.music.tc.qq.com/C400001Hp44V3pCQ53.m4a?guid=6862437278&vkey=2757C71826AFEA9F9A161FCF3504C3C2E4BE1AD18FB2E7F3A6CF90C30DE1D0C2B8DC96C665A0C4B012C8A3D037A4EF382EFDE04641993526&uin=6054&fromtag=999"
          }
        ],
        // 音乐播放进度
        cTime: 0,
        // 音乐总时长
        dTime: 0,
        // 音效
        zz: false,
        //音频播放是否上下树
        autoplay: false,
        // 默认进度
        value: 0,
        //音效设置
        actions: [{ name: "标准品质(4.9MB)" }, { name: "HQ高品质(12.2MB)💎🎶" }]
      };
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
        this.zz = true;
      },
      paly() {
        console.log(123);
        this.autoplay = !this.autoplay;
        this.cTime = this.$refs.bfq_yinpin.currentTime
        this.dTime = this.$refs.bfq_yinpin.duration
        this.$refs.bfq_yinpin.play()
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