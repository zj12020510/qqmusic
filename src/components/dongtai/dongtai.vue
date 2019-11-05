<template>
  <div>
    <div class="header">
      <van-swipe>
        <van-swipe-item v-for="(item,index) in header" :key="index">
          <figure>
            <h4>{{item.music_biaoti}}</h4>
            <a :href="item.music_lianjie">
              <img :src="item.music_img" alt />
            </a>
            <figcaption>{{item.music_txt}}</figcaption>
          </figure>
        </van-swipe-item>
        <div class="custom-indicator" slot="indicator"></div>
      </van-swipe>
    </div>
    <div class="mune">
      <van-swipe :width="80">
        <van-swipe-item @click="bendi">
          <figure>
            <img
              src="//y.gtimg.cn/music/photo_new/T001R150x150M000000pLwpw25Og4A.jpg?max_age=2592000"
              alt
            />
            <b>
              <van-icon name="location-o" />
            </b>
            <figcaption>本地演出</figcaption>
          </figure>
        </van-swipe-item>
        <van-swipe-item v-for="(item,index) in mune" :key="index" @click="people">
          <figure>
            <img :src="item.imgUrl" alt />
            <figcaption>{{item.name}}</figcaption>
          </figure>
        </van-swipe-item>
        <div class="custom-indicator" slot="indicator"></div>
      </van-swipe>
    </div>

    <div class="main" v-for="(item,index) in main" :key="index">
      <div>
        <div class="top">
          <span>
            <img :src="item.main_touxiang" alt />
            <h6>{{item.main_name}}</h6>
          </span>
          <!-- 关注 -->
          <span @click="guanzhu">{{content}}</span>
        </div>
        <div></div>
        <p>
          <i>{{item.main_huati}}</i>
          {{item.main_pinglun1}}
        </p>
        <p>{{item.main_pinglun2}}</p>
        <p>{{item.main_pinglun3}}</p>
        <a :href=" item.main_lianjie">
          <img :src="item.mian_img" alt />
        </a>
      </div>
      <div class="xiabiao">
        <span>{{item.main_shijian}}</span>
        <span>
          <van-icon name="video-o" color="gray" />
          {{item.main_yueduliang}}
        </span>
      </div>
      <div class="buttom">
        <span>为你推荐</span>
        <span>
          <van-icon name="other-pay" />21
          <van-icon name="good-job-o" />293
          <van-icon name="ellipsis" />
        </span>
      </div>
      <hr />
    </div>
    <!-- 24小时快讯 -->

    <div class="kuaixun">
      <h3>24小时快讯</h3>
      <van-swipe :width="180">
        <van-swipe-item v-for="(item,index) in kuaixun" :key="index">
          <div>
            <a :href="item.kuaixun_lianjie">
              <img :src="item.kuaixun_img" alt />
            </a>
            <p>{{item.kuaixun_biaoti}}</p>
            <span>{{item.kuaixun_txt}}</span>
          </div>
        </van-swipe-item>
        <div class="custom-indicator" slot="indicator"></div>
      </van-swipe>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      liked: false,
      content: "+关注",
      header: [
        {
          music_biaoti: "发现·视频",
          music_lianjie: "https://c.y.qq.com/base/fcgi-bin/u?__=ki1kRfG",
          music_img:
            "https://y.gtimg.cn/music/photo_new/T023R500x500M000002Vmge32vGJZ2.jpg?max_age=2592000",
          music_txt: "《悬溺》"
        },
        {
          music_biaoti: "发现·视频",
          music_lianjie: "https://c.y.qq.com/base/fcgi-bin/u?__=O3LHZfi",
          music_img:
            "https://y.gtimg.cn/music/common/upload/t_topic_detail/1806574.jpg",
          music_txt: "钻进吉他里来一次节奏畅游"
        },
        {
          music_biaoti: "发现·视频",
          music_lianjie: "https://c.y.qq.com/base/fcgi-bin/u?__=O7JGIfN",
          music_img:
            "https://y.gtimg.cn/music/photo_new/T023R500x500M000003RGkja036de4.jpg?max_age=2592000",
          music_txt: "源式音乐的惊喜探索"
        },
        {
          music_biaoti: "发现·视频",
          music_lianjie: "https://c.y.qq.com/base/fcgi-bin/u?__=MF976f7",
          music_img:
            "https://y.gtimg.cn/music/photo_new/T023R500x500M000002tAXp223cCjz.jpg?max_age=2592000",
          music_txt: "沉醉在哥哥的蜜嗓中了！"
        },
        {
          music_biaoti: "发现·文章",
          music_lianjie: "https://c.y.qq.com/base/fcgi-bin/u?__=mRN7HOQ",
          music_img:
            "//y.gtimg.cn/music/photo_new/T023R750x750M000002hknUl45DqRf.jpg?max_age=31536000",
          music_txt: "坠入无尽感受光亮"
        }
      ],
      mune: [
        {
          imgUrl:
            "http://y.gtimg.cn/music/photo_new/T001R300x300M000001MZL4g2hpd6i.jpg?max_age=2592000",
          name: "付小远"
        },
        {
          imgUrl:
            "//y.gtimg.cn/music/photo_new/T001R150x150M000004ABIFV1EZUAj.jpg?max_age=2592000",
          name: "The Chainsmokers"
        },
        {
          imgUrl:
            "//y.gtimg.cn/music/photo_new/T001R150x150M000003ihUzC1icy0O.jpg?max_age=2592000",
          name: "Steve"
        },
        {
          imgUrl:
            "//y.gtimg.cn/music/photo_new/T001R300x300M0000023dQD40to8NP.jpg?max_age=2592000",
          name: "永彬"
        },
        {
          imgUrl:
            "//y.gtimg.cn/music/photo_new/T001R150x150M0000032Z65z2ihgEW.jpg?max_age=2592000",
          name: "beatrich"
        },
        {
          imgUrl:
            "//y.gtimg.cn/music/photo_new/T001R150x150M000001Adim81gp2Kf.jpg?max_age=2592000",
          name: "上海彩虹室内合唱团"
        },
        {
          imgUrl:
            "//y.gtimg.cn/music/photo_new/T001R150x150M000002ENWny2U8OrG.jpg?max_age=2592000",
          name: "西彬呀"
        },
        {
          imgUrl:
            "//y.gtimg.cn/music/photo_new/T001R150x150M000004WDNFi2FPDVF.jpg?max_age=2592000",
          name: "王童语"
        },
        {
          imgUrl:
            "//y.gtimg.cn/music/photo_new/T001R150x150M000003bQEFA3KrvLI.jpg?max_age=2592000",
          name: "Marshmello"
        },
        {
          imgUrl:
            "//y.gtimg.cn/music/photo_new/T001R300x300M000003T09nh37Pq4N.jpg?max_age=2592000",
          name: "刘瑞琦"
        },
        {
          imgUrl:
            "//y.gtimg.cn/music/photo_new/T001R150x150M0000045p4Sz0LIwL5.jpg?max_age=2592000",
          name: "Ed Sheeran"
        },
        {
          imgUrl:
            "//y.gtimg.cn/music/photo_new/T001R150x150M000000o1UTy1SzsfO.jpg?max_age=2592000",
          name: "Ayasa"
        },
        {
          imgUrl:
            "//y.gtimg.cn/music/photo_new/T001R150x150M000002NPJoN18FayY.jpg?max_age=2592000",
          name: "KAskade"
        }
      ],
      main: [
        {
          main_touxiang:
            "http://y.gtimg.cn/music/common/upload/t_celebrity_certification/1621675.png",
          main_name: "商大喵",
          main_huati: "#独家·探乐空间站#",
          main_pinglun1: "【喵乐评】深度赏析许嵩全新《雨幕》，9年羁绊大催泪！",
          main_pinglun2: "我们的青春在慢慢老去，可好在许嵩还在！",
          main_pinglun3: "(PS:本视频雨幕MV来自UP主:吃哈露的零食)",
          main_lainjie: "https://c.y.qq.com/base/fcgi-bin/u?__=ta50Ifg",
          mian_img:
            "https://y.gtimg.cn/music/photo_new/T023R500x500M000001ZR4TK0JlrWK.jpg?max_age=2592000",
          main_shijian: "01:07",
          main_yueduliang: "5.7万"
        },
        {
          main_touxiang:
            "https://y.gtimg.cn/music/photo_new/T025R500x500M004002l54No0GoNx8.png",
          main_name: "西彬呀",
          main_huati: "#QQ音乐独家",
          main_pinglun1: "第一次翻唱前男友的歌",
          main_pinglun2: "西彬-其实我想说的还有很多(Cover.前男友)",
          main_lainjie: "https://c.y.qq.com/base/fcgi-bin/u?__=sC8Svfq",
          mian_img:
            "https://y.gtimg.cn/music/photo_new/T023R500x500M0000022FKfU4FeMT5.jpg?max_age=2592000",
          main_shijian: "01:07",
          main_yueduliang: "5.7万"
        }
      ],
      kuaixun: [
        {
          kuaixun_lianjie: "https://c.y.qq.com/base/fcgi-bin/u?__=dmFAafo",
          kuaixun_img:
            "//y.gtimg.cn/music/photo_new/T023R750x750M000000kNqZQ0kTHqv.jpg?max_age=2592000&nowebp=1",
          kuaixun_biaoti: "Hoody首张正规专辑公开",
          kuaixun_txt: "不愧是A社的小公主！"
        },
        {
          kuaixun_lianjie: "https://c.y.qq.com/base/fcgi-bin/u?__=2RFAaff",
          kuaixun_img:
            "//y.gtimg.cn/music/photo_new/T023R750x750M000003UrnSy41pYaY.jpg?max_age=2592000&nowebp=1",
          kuaixun_biaoti: "“行骗天下”剧照初公开",
          kuaixun_txt: "长泽雅美变装秀"
        },
        {
          kuaixun_lianjie: "https://c.y.qq.com/base/fcgi-bin/u?__=DxKAaf7",
          kuaixun_img:
            "//y.gtimg.cn/music/photo_new/T023R750x750M000002vq19Z3UxeiQ.jpg?max_age=2592000&nowebp=1",
          kuaixun_biaoti: "传奇哥X肥X",
          kuaixun_txt: "联手打造新单，引爆圣诞"
        },
        {
          kuaixun_lianjie: "https://c.y.qq.com/base/fcgi-bin/u?__=DxKAaf7",
          kuaixun_img:
            "//y.gtimg.cn/music/photo_new/T023R750x750M000002vq19Z3UxeiQ.jpg?max_age=2592000&nowebp=1",
          kuaixun_biaoti: "传奇哥X肥X",
          kuaixun_txt: "联手打造新单，引爆圣诞"
        },
        {
          kuaixun_lianjie: "https://c.y.qq.com/base/fcgi-bin/u?__=DxKAaf7",
          kuaixun_img:
            "//y.gtimg.cn/music/photo_new/T023R750x750M000002vq19Z3UxeiQ.jpg?max_age=2592000&nowebp=1",
          kuaixun_biaoti: "传奇哥X肥X",
          kuaixun_txt: "联手打造新单，引爆圣诞"
        },
        {
          kuaixun_lianjie: "https://c.y.qq.com/base/fcgi-bin/u?__=DxKAaf7",
          kuaixun_img:
            "//y.gtimg.cn/music/photo_new/T023R750x750M000002vq19Z3UxeiQ.jpg?max_age=2592000&nowebp=1",
          kuaixun_biaoti: "传奇哥X肥X",
          kuaixun_txt: "联手打造新单，引爆圣诞"
        }
      ]
    };
  },
  methods: {
    bendi() {
      this.$router.push("/bendi");
    },
    people() {
      this.$router.push("/people");
    },
    guanzhu() {
      this.liked = !this.liked;
      if (this.liked) {
        this.content = "已关注";
      } else {
        this.content = "+关注";
      }
      
        
      
    }
  }
};
</script>

<style scoped>
* {
  margin: 0;
  padding: 0;
  background: white;
}
.header img {
  width: 90%;
  height: 200px;
  padding: 0 5%;
  border-radius: 7%;
  position: relative;
}
.header h4 {
  position: absolute;
  top: 10px;
  left: 20px;
  color: white;
  background: none;
  z-index: 10;
}
.header figcaption {
  position: absolute;
  bottom: 25px;
  left: 15px;
  background: none;
  color: white;
}
.mune {
  margin: 20px 0;
}
.mune b {
  display: block;
  width: 60px;
  height: 60px;
  line-height: 60px;
  text-align: center;
  border-radius: 50%;
  background: rgba(0, 0, 0, 0.8);
  position: absolute;
  left: 0;
  top: 0;
}
.mune figure img {
  width: 60px;
  height: 60px;
  border-radius: 50%;
  position: relative;
}
.mune figcaption {
  text-align: center;
  width: 70px;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
}
.main .top img {
  width: 40px;
  height: 40px;
  border-radius: 50%;
  vertical-align: middle;
}
.main .top,
.main span {
  display: flex;
  justify-content: space-between;
}
.main .top {
  padding: 0 10px;
}
.main p {
  padding: 10px;
}
.main h6 {
  line-height: 40px;
  font-size: 18px;
  margin-left: 10px;
}
.main .top span:last-of-type {
  border-radius: 25%;
  border: solid 1px #d6c9c9;
  height: 20px;
  line-height: 20px;
  padding: 3px 8px;
}
.main p i {
  color: aqua;
}
.main a img {
  width: 94%;
  padding: 0 3%;
  border-radius: 5%;
}
.main .xiabiao {
  display: flex;
  justify-content: space-between;
  padding: 0 20px;
  position: relative;
  top: -40px;
  background: none;
}
.main .xiabiao span {
  background: none;
  color: white;
}
.main .buttom {
  display: flex;
  justify-content: space-between;
  padding: 0 10px;
  padding-bottom: 15px;
}
.main .buttom span:last-of-type {
  width: 40%;
  display: flex;
  justify-content: space-between;
}
.main hr {
  margin-bottom: 10px;
}
.kuaixun h3 {
  padding: 15px 10px;
}
.kuaixun van-swipe-item div {
  width: 190px;
  height: 100px;
}
.kuaixun div img {
  width: 180px;
  height: 100px;
  padding: 0 5%;
  border-radius: 10%;
}
.faxiannbendi {
  width: 100%;
  height: 100%;
}
</style>