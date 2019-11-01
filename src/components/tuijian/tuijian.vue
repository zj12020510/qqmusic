<template>
  <div class="quanbu">
    <div class="diantai">
      <h4 class="list_title">Hi晚.,今日为你打造</h4>
      <!-- 滑动选推荐 -->
      <ul class="list_container">
        <van-swipe :show-indicators="false" :width="125" :loop="false">
          <van-swipe-item v-for="(item,index) in tuijian.tuijian1" :key="index">
            <li @click="huadong">
              <a class="list_main">
                <div class="list_media">
                  <img :src="item.music_img" alt />
                  <van-icon name="play-circle-o" class="list_icon" />
                  <div class="list_size">{{item.music_biaoti}}</div>
                </div>
                <div class="list_info">{{item.music_txt}}</div>
              </a>
            </li>
          </van-swipe-item>
        </van-swipe>
      </ul>
    </div>
    <!-- 更多为你推荐 -->
    <div class="gengduo">
      <h3 class="gengduo_list">更多为你推荐</h3>
      <ul>
        <li v-for="(item,index) in tuijian.tuijian2" :key="index" @click="weini">
          <a class="gengduo_main">
            <div class="gengduo_media">
              <img :src="item.music_img" alt />
              <div class="gengduo_num">
                <p class="gengduo_fio">
                  <van-icon name="service-o" class="gengduo_io" />
                  {{item.music_num}}万
                </p>
                <p class="gengduo_fvo">
                  <van-icon name="play-circle-o" class="gengduo_icon" />
                </p>
              </div>
            </div>
            <div class="gengduo_info">
              <span class="gengduo_txt">{{item.music_txt}}</span>
              <p class="gengduo_xin">{{item.music_biaoti}}</p>
              <p class="gengduo_del">
                <span>×</span>
              </p>
            </div>
          </a>
        </li>
      </ul>
      <!-- 视频播放 -->
      <div v-for="(item,index) in tuijian.tuijian3" :key="index">
        <div class="gengduo_vidio">
          <a href="https://y.qq.com/n/yqq/mv/v/o003234cw1j.html" class="gengduo_vidioa">
            <img :src="item.music_img" alt />
            <van-icon name="play-circle" class="gengduo_play" />
            <div class="gengduo_time">
              <p>05:45</p>
              <p>
                <van-icon name="video-o" />
                {{item.music_num}}万
              </p>
            </div>
          </a>
        </div>
        <div class="gengduo_vidioz">
          <p class="gengduo_hai">
            <span>{{item.music_txt}}</span>
          </p>
          <p class="gengduo_cuo">
            <span class="music">果酱音乐</span>
            <span class="gengduo_c">×</span>
          </p>
        </div>
      </div>
    </div>
    <!-- 个性专区 -->
    <div class="gengduo">
      <ul>
        <li v-for="(item,index) in gexing.gexing1" :key="index">
          <a class="gengduo_main">
            <div class="gengduo_media">
              <img :src="item.music_img" alt />
              <div class="gengduo_num">
                <p class="gengduo_fio">
                  <van-icon name="service-o" class="gengduo_io" />
                  {{item.music_num}}万
                </p>
                <p class="gengduo_fvo">
                  <van-icon name="play-circle-o" class="gengduo_icon" />
                </p>
              </div>
            </div>
            <div class="gengduo_info">
              <span class="gengduo_txt">{{item.music_txt}}</span>
              <p class="gengduo_xin">{{item.music_biaoti}}</p>
              <p class="gengduo_del">
                <span>×</span>
              </p>
            </div>
          </a>
        </li>
      </ul>
      <!-- 视频播放 -->
      <div v-for="(item,index) in gexing.gexing2" :key="index">
        <div class="gengduo_vidio">
          <a
            href="https://y.qq.com/n/yqq/mv/v/s0032iavsns.html#stat=y_new.mv_lib.mv_play"
            class="gengduo_vidioa"
          >
            <img :src="item.music_img" alt />
            <van-icon name="play-circle" class="gengduo_play" />
            <div class="gengduo_time">
              <p>05:45</p>
              <p>
                <van-icon name="video-o" />
                {{item.music_num}}万
              </p>
            </div>
          </a>
        </div>
        <div class="gengduo_vidioz">
          <p class="gengduo_hai">
            <span>{{item.music_txt}}</span>
          </p>
          <p class="gengduo_cuo">
            <span class="music">Ben Human</span>
            <span class="gengduo_c">×</span>
          </p>
        </div>
      </div>
    </div>
    <!-- 经典专区 -->
    <div class="gengduo">
      <ul>
        <li v-for="(item,index) in jingdian.jingdian1" :key="index">
          <a class="gengduo_main">
            <div class="gengduo_media">
              <img :src="item.music_img" alt />
              <div class="gengduo_num">
                <p class="gengduo_fio">
                  <van-icon name="service-o" class="gengduo_io" />
                  {{item.music_num}}万
                </p>
                <p class="gengduo_fvo">
                  <van-icon name="play-circle-o" class="gengduo_icon" />
                </p>
              </div>
            </div>
            <div class="gengduo_info">
              <span class="gengduo_txt">{{item.music_txt}}</span>
              <p class="gengduo_xin">{{item.music_biaoti}}</p>
              <p class="gengduo_del">
                <span>×</span>
              </p>
            </div>
          </a>
        </li>
      </ul>
      <!-- 视频播放 -->
      <div v-for="(item,index) in jingdian.jingdian2" :key="index">
        <div class="gengduo_vidio">
          <a
            href="https://y.qq.com/n/yqq/mv/v/e0032xu5qqc.html#stat=y_new.mv_lib.mv_play"
            class="gengduo_vidioa"
          >
            <img :src="item.music_img" alt />
            <van-icon name="play-circle" class="gengduo_play" />
            <div class="gengduo_time">
              <p>05:45</p>
              <p>
                <van-icon name="video-o" />
                {{item.music_num}}万
              </p>
            </div>
          </a>
        </div>
        <div class="gengduo_vidioz">
          <p class="gengduo_hai">
            <span>{{item.music_txt}}</span>
          </p>
          <p class="gengduo_cuo">
            <span class="music">Ben Human</span>
            <span class="gengduo_c">×</span>
          </p>
        </div>
      </div>
    </div>
    <!-- <Zujian></Zujian> -->
  </div>
</template>

<script>

export default {
  data() {
    return {
      tuijian: {
        tuijian1: [
          {
            music_img:
              "http://p.qpic.cn/music_cover/iaIf46VK3bQJQyJVo7VIllQhb05ryPgSl42XfEWT5sE8Z2ZmksL4JCg/300?n=1",
            music_txt: "晨起醒脑必备",
            music_biaoti: "个性电台"
          },
          {
            music_img:
              "//p.qpic.cn/music_cover/nvRBiaJHaPBvG00iczEYfbu0oibQl7aic4icaaibj4XpmCicyKkicBtTPOiba9w/300?n=1",
            music_txt: "热血Hard Bass",
            music_biaoti: "今日私享"
          },
          {
            music_img:
              "//p.qpic.cn/music_cover/Biax4WTSMic4N0bgPWDwUCs5s5T4wShl3bIUC8dibxkNQMqc8RFvTicdlQ/300?n=1",
            music_txt: "摇滚天堂",
            music_biaoti: "新发风向"
          },
          {
            music_img:
              "//qpic.y.qq.com/music_cover/x9DLyh0c10r7JMNsHc4d2G6kC9cZjuDLs9xvyk5yVG4XSXep5FLdMA/300?n=1",
            music_txt: "荧幕里的梦境歌声",
            music_biaoti: "今日私享"
          }
        ],
        tuijian2: [
          {
            music_img:
              "//y.gtimg.cn/music/photo_new/T002R90x90M000004fntiK1aaLHL.jpg?max_age=2592000",
            music_txt: "[KTV]实用麦霸养成歌单",
            music_biaoti: "听完 「新不了情」,快试试这个",
            music_num: 941
          },
          {
            music_img:
              "//y.gtimg.cn/music/photo_new/T002R90x90M000000sayxH00itmz.jpg?max_age=2592000",
            music_txt: "跟着这个节奏 宣泄自我",
            music_biaoti: "听完 「不醉」,试试这些",
            music_num: 22
          },
          {
            music_img:
              "//y.gtimg.cn/music/photo_new/T002R90x90M000000winjc49HBL0.jpg?max_age=2592000",
            music_txt: "沉浸有听觉渗入味蕾的美味爵士",
            music_biaoti: "爵士乐，自由的乐园",
            music_num: 12
          }
        ],
        tuijian3: [
          {
            music_img:
              "http://y.gtimg.cn/music/photo_new/T015R640x360M101000O74661Ie82Z.jpg",
            music_txt:
              "海藏(《四海鲸骑》动画第2季主题曲) - 周深海藏(《四海鲸骑》动画第2季主题曲) - 周深海藏(《四海鲸骑》动画第2季主题曲) - 周深",
            music_num: 4.5
          }
        ]
      },
      gexing: {
        gexing1: [
          {
            music_img:
              "//y.gtimg.cn/music/common/upload/t_musichall_pic/363459.jpg?max_age=2592000",
            music_txt: "德语音乐里最令人铭记的旋律",
            music_biaoti: "独享爵士时光",
            music_num: 15
          },
          {
            music_img:
              "//y.gtimg.cn/music/photo/radio/track_radio_101_10_4.jpg?max_age=2592000",
            music_txt: "致许姑娘 未央之夜的民谣",
            music_biaoti: "清凉夏日，来首民谣听听吧",
            music_num: 167
          },
          {
            music_img:
              "//y.gtimg.cn/music/photo/radio/track_radio_167_10_4.jpg?max_age=2592000",
            music_txt: "时光流逝|有书 有猫 有音乐",
            music_biaoti: "131人收藏",
            music_num: 26
          }
        ],
        gexing2: [
          {
            music_img:
              "//y.gtimg.cn/music/photo_new/T015R640x360M0000037Rrmy4LURgt.jpg?max_age=2592000",
            music_txt: "Single Superstar",
            music_num: 4.5
          }
        ]
      },
      jingdian: {
        jingdian1: [
          {
            music_img:
              "//qpic.y.qq.com/music_cover/qHVa7C6VF9SibnYtgb2SBrXnyCicwNXISmAm7KGibqqcMwwFSQrr6HWsQ/300?n=1",
            music_txt: "每日专属推荐",
            music_biaoti: "个性电台",
            music_num: 35
          },
          {
            music_img:
              "//qpic.y.qq.com/music_cover/x9DLyh0c10r7JMNsHc4d2G6kC9cZjuDLs9xvyk5yVG4XSXep5FLdMA/300?n=1",
            music_txt: "荧幕里的梦境歌声",
            music_biaoti: "今日私享",
            music_num: 66
          },
          {
            music_img:
              "//qpic.y.qq.com/music_cover/J64lA7tSFnxIxyd7FrKy5hs5kbAz65mnxI5PLRAu37t7HujG9p1f6w/300?n=1",
            music_txt: "搞笑魔性神曲",
            music_biaoti: "新发风向",
            music_num: 11
          }
        ],
        jingdian2: [
          {
            music_img:
              "//y.gtimg.cn/music/photo_new/T015R640x360M101003K6qK718CXij.jpg?max_age=2592000",
            music_txt: "玉女穿梭---陈珊妮",
            music_num: 4.5
          }
        ]
      }
    };
  },

  // computed: {

  // },
  methods: {
    huadong(){
       this.$router.push("/zujian")
    },
    weini(){
      this.$router.push("/shipin")
    }
  },
  components: {
  
  }
};
</script>
<style lang="stylus" scoped>
     @import './tuijian.stylus';
</style>
