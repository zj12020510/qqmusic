<template>
  <div id="box">
    <van-icon name="arrow-left" @click="my" />
    <span class="title">数字专辑</span>
    <font class="ku">专辑库</font>
    <div class="lunbo">
      <van-swipe :autoplay="3000">
      <van-swipe-item v-for="(image, index) in images" :key="index">
      <img v-lazy="image" />
      </van-swipe-item>
      </van-swipe>
    </div>
    <div class="changxiao">
      <ul>
          <li @click="changxiao">
            <van-icon name="bar-chart-o" />
            <span>畅销榜</span>
          </li>
          <li>
            <van-icon name="exchange" />
            <span>兑换中心</span>
          </li>
          <li>
            <van-icon name="apps-o" />
            <span>分类</span>
          </li>
          <li>
            <span class="iconfont icon-yigouzhuanji"></span>
            <span>已购</span>
          </li>
        </ul>
    </div>
    <div class="xianjing">
      <van-image
        width="4rem"
        height="4rem"
        src="//y.gtimg.cn/music/photo_new/T002R300x300M000001DViXn26rVwz.jpg?max_age=2592000"
      />
      <van-icon name="idcard" />
      <span>1.0圣所 2.0进阶 3.0也来了 ! ! !</span>
      <font>仙境3.0 jj带你闯进他的梦幻 [Wonderland]</font>
      <van-icon name="arrow" />
    </div>
    <div class="zuixin">
      <ul>
        <li>最</li>
        <li>新</li>
        <li>上</li>
        <li>架</li>
      </ul>
      <div class="zuixin1">
          <ul>
            <li v-for="(item,index) of zuixin" :key="index">
              <van-image
                width="7rem"
                height="7rem"
                :src="item.src"
              />
              <span>{{item.name}}</span><br />
              <font>{{item.shuliang}}</font><br />
              <a>￥{{item.danjia}}</a>
            </li>
          </ul>
        </div>
    </div>
    <div class="zuixin">
      <ul>
        <li>本</li>
        <li>周</li>
        <li>热</li>
        <li>销</li>
      </ul>
      <span class="iconfont icon-btndownarrow"></span>
      <div class="zuixin2">
          <ul>
            <li v-for="(item,index) of benzhou" :key="index">
              <van-image
                width="7rem"
                height="7rem"
                :src="item.src"
              />
              <span>{{item.name}}</span><br />
              <font>{{item.shuliang}}</font><br />
              <a>￥{{item.danjia}}</a>
            </li>
          </ul>
        </div>
    </div>
    <div class="zhuanlan">
       <ul>
        <li>专</li>
        <li>栏</li>
        <li>资</li>
        <li>讯</li>
      </ul>
      <span class="iconfont icon-btndownarrow"></span>
      <div class="zhuanlan1">
        <ul>
         <li v-for="(item,index) of zhuanlan" :key="index">
              <van-image
                width="6rem"
                height="6rem"
                :src="item.src"
              />
              <van-icon name="vip-card-o" />
              <span>{{item.name}}</span><br />
              <font>{{item.shuliang}}</font><br />
         </li>
        </ul>
      </div>
    </div>
    <div class="zhuanqu">
       <ul>
        <li>音</li>
        <li>乐</li>
        <li>人</li>
        <li>专</li>
        <li>区</li>
      </ul>
      <span class="iconfont icon-btndownarrow"></span>
      <div class="zuixin1">
          <ul>
            <li v-for="(item,index) of zhuanqu" :key="index">
              <van-image
                width="7rem"
                height="7rem"
                :src="item.src"
              />
              <span>{{item.name}}</span><br />
              <font>{{item.shuliang}}</font><br />
              <a>￥{{item.danjia}}</a>
            </li>
          </ul>
        </div>
    </div>
     <div class="mingxing">
       <ul>
        <li>明</li>
        <li>星</li>
        <li>博</li>
        <li>物</li>
        <li>馆</li>
      </ul>
       <div class="zuixin2">
          <ul>
            <li v-for="(item,index) of mingxing" :key="index">
              <van-image
                width="7rem"
                height="7rem"
                :src="item.src"
              />
              <span>{{item.name}}</span><br />
              <font>{{item.shuliang}}</font><br />
              <a>￥{{item.danjia}}</a>
            </li>
          </ul>
        </div>
    </div>
     <div class="zuixin">
      <ul>
        <li>2019</li>
        <li>新</li>
        <li>声</li>
        <li>力</li>
        <li>量</li>
      </ul>
      <div class="zuixin1">
          <ul>
            <li v-for="(item,index) of xinsheng" :key="index">
              <van-image
                width="7rem"
                height="7rem"
                :src="item.src"
              />
              <span>{{item.name}}</span><br />
              <font>{{item.shuliang}}</font><br />
              <a>￥{{item.danjia}}</a>
            </li>
          </ul>
        </div>
    </div>
    <div class="zuixin">
      <ul>
        <li>2019</li>
        <li>内</li>
        <li>地</li>
        <li>推</li>
        <li>荐</li>
      </ul>
      <div class="zuixin1">
          <ul>
            <li v-for="(item,index) of neidi" :key="index">
              <van-image
                width="7rem"
                height="7rem"
                :src="item.src"
              />
              <span>{{item.name}}</span><br />
              <font>{{item.shuliang}}</font><br />
              <a>￥{{item.danjia}}</a>
            </li>
          </ul>
        </div>
    </div>
    <div class="zuixin">
      <ul>
        <li>2019</li>
        <li>欧</li>
        <li>美</li>
        <li>推</li>
        <li>荐</li>
      </ul>
      <div class="zuixin2">
          <ul>
            <li v-for="(item,index) of oumei" :key="index">
              <van-image
                width="7rem"
                height="7rem"
                :src="item.src"
              />
              <span>{{item.name}}</span><br />
              <font>{{item.shuliang}}</font><br />
              <a>￥{{item.danjia}}</a>
            </li>
          </ul>
        </div>
    </div>
    <div class="zuixin">
      <ul>
        <li>2019</li>
        <li>港</li>
        <li>台</li>
        <li>推</li>
        <li>荐</li>
      </ul>
      <div class="zuixin2">
          <ul>
            <li v-for="(item,index) of gangtai" :key="index">
              <van-image
                width="7rem"
                height="7rem"
                :src="item.src"
              />
              <span>{{item.name}}</span><br />
              <font>{{item.shuliang}}</font><br />
              <a>￥{{item.danjia}}</a>
            </li>
          </ul>
        </div>
    </div>
    <div class="zuixin">
      <ul>
        <li>2019</li>
        <li>韩</li>
        <li>国</li>
        <li>推</li>
        <li>荐</li>
      </ul>
      <div class="zuixin1">
          <ul>
            <li v-for="(item,index) of hanguo" :key="index">
              <van-image
                width="7rem"
                height="7rem"
                :src="item.src"
              />
              <span>{{item.name}}</span><br />
              <font>{{item.shuliang}}</font><br />
              <a>￥{{item.danjia}}</a>
            </li>
          </ul>
        </div>
    </div>
    <div class="zuixin">
      <ul>
        <li>2019</li>
        <li>影</li>
        <li>视</li>
        <li>推</li>
        <li>荐</li>
      </ul>
      <div class="zuixin1">
          <ul>
            <li v-for="(item,index) of yingshi" :key="index">
              <van-image
                width="7rem"
                height="7rem"
                :src="item.src"
              />
              <span>{{item.name}}</span><br />
              <font>{{item.shuliang}}</font><br />
              <a>￥{{item.danjia}}</a>
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
     images: [
        '//y.gtimg.cn/music/common/upload/MUSIC_FOCUS/1818989.jpg?max_age=2592000',
        '//y.gtimg.cn/music/common/upload/MUSIC_FOCUS/1819685.jpg?max_age=2592000',
        '//y.gtimg.cn/music/common/upload/MUSIC_FOCUS/1821238.jpg?max_age=2592000',
        '//y.gtimg.cn/music/common/upload/MUSIC_FOCUS/1820016.jpg?max_age=2592000',
        '//y.gtimg.cn/music/common/upload/MUSIC_FOCUS/1820007.jpg?max_age=2592000',
        '//y.gtimg.cn/music/common/upload/MUSIC_FOCUS/1811863.jpg?max_age=2592000'
      ],
      zuixin:[
        {
          name:'Come to Me',
          shuliang:'王晰',
          danjia:'3',
          src:"//y.gtimg.cn/music/photo_new/T002R300x300M000003usAqc4D5NyW_2.jpg?max_age=2592000"
        },
        {
          name:'Purpose - The 2n...',
          shuliang:'하늘',
          danjia:'18',
          src:"//y.gtimg.cn/music/photo_new/T002R300x300M000001JpKXH2KJQiG.jpg?max_age=2592000"
        },
        {
          name:'CROSS',
          shuliang:'WINNER',
          danjia:'18',
          src:"//y.gtimg.cn/music/photo_new/T002R300x300M000000Qu1t01KG0AU_2.jpg?max_age=2592000"
        },
        {
          name:'UNUSUAL',
          shuliang:'UNINE',
          danjia:'9',
          src:"//y.gtimg.cn/music/photo_new/T002R300x300M0000008jbEA4ePxVf_4.jpg?max_age=2592000"
        },
        {
          name:'没有秘密的你 电视...',
          shuliang:'华语群星',
          danjia:'25',
          src:"//y.gtimg.cn/music/photo_new/T002R300x300M00000241tTR3hvZQi_2.jpg?max_age=2592000"
        },
        {
          name:'蓝色天空',
          shuliang:'张云雷',
          danjia:'10',
          src:"//y.gtimg.cn/music/photo_new/T002R300x300M000003d636i2FSP7z_2.jpg?max_age=2592000"
        }],
      benzhou:[
        {
          name:'蓝色天空',
          shuliang:'张云雷',
          danjia:'10',
          src:"//y.gtimg.cn/music/photo_new/T002R300x300M000003d636i2FSP7z_2.jpg?max_age=2592000"
        },
        {
          name:'Purpose - The 2n...',
          shuliang:'하늘',
          danjia:'18',
          src:"//y.gtimg.cn/music/photo_new/T002R300x300M000001JpKXH2KJQiG.jpg?max_age=2592000"
        },
        {
          name:'哇',
          shuliang:'李宇春',
          danjia:'20',
          src:"//y.gtimg.cn/music/photo_new/T002R300x300M000000d4ZXm4JElgo_1.jpg?max_age=2592000"
        }],
      zhuanlan:[
        {
          name:'Ugly Beauty 一场长达十年的噩梦之终曲',
          shuliang:'蔡依林',
          src:"//y.gtimg.cn/music/photo_new/T002R300x300M000004KHjpn0p4Az7_1.jpg?max_age=2592000"
        },
        {
          name:'陈立农《我是你的》 : 展现音乐“沉稳面”',
          shuliang:'陈立农',
          src:"//y.gtimg.cn/music/photo_new/T002R300x300M000000BT7a82jqNKM.jpg?max_age=2592000"
        },
        {
          name:'花样少年的心事告白TroyeSivan最美丽的绽放',
          shuliang:'戳爷',
          src:"//y.gtimg.cn/music/photo_new/T002R300x300M000000h66z521TUCT_1.jpg?max_age=2592000"
        }],
      zhuanqu:[
        {
          name:'玩',
          shuliang:'陈粒',
          danjia:'25',
          src:"//y.gtimg.cn/music/photo_new/T002R300x300M000003EHTi528PvZt_1.jpg?max_age=2592000"
        },
        {
          name:'十年之前和三个爱...',
          shuliang:'嘿！！！',
          danjia:'23.30',
          src:"//y.gtimg.cn/music/photo_new/T002R300x300M000003iPptk0JI1D5_1.jpg?max_age=2592000"
        },
        {
          name:'感+',
          shuliang:'旅行团乐队',
          danjia:'18',
          src:"//y.gtimg.cn/music/photo_new/T002R300x300M000004HxZdX4d8v9J_1.jpg?max_age=2592000"
        },
        {
          name:'敦煌定若远',
          shuliang:'汐音社',
          danjia:'20',
          src:"//y.gtimg.cn/music/photo_new/T002R300x300M000000BQx3u1M0SVw_1.jpg?max_age=2592000"
        },
        {
          name:'大自在',
          shuliang:'粒粒',
          danjia:'1',
          src:"//y.gtimg.cn/music/photo_new/T002R300x300M000004TSoOf1Ehr9l_1.jpg?max_age=2592000"
        },
        {
          name:'我愿意为你轻轻歌唱',
          shuliang:'好妹妹',
          danjia:'1',
          src:"//y.gtimg.cn/music/photo_new/T002R300x300M000001g04oF1j2YWC.jpg?max_age=2592000"
        }],
        mingxing:[
        {
          name:'LOVE SHOT',
          shuliang:'EXO',
          danjia:'22',
          src:"//y.gtimg.cn/music/photo_new/T002R300x300M000002PXZL92HpaNt.jpg?max_age=2592000"
        },
        {
          name:'DON NOT MESS',
          shuliang:'EXO',
          danjia:'20',
          src:"//y.gtimg.cn/music/photo_new/T002R300x300M000003hebqs0LdJ1E_1.jpg?max_age=2592000"
        },
        {
          name:'WOMAN — The',
          shuliang:'BoA',
          danjia:'12',
          src:"//y.gtimg.cn/music/photo_new/T002R300x300M000002ItWqK27KRLa_1.jpg?max_age=2592000"
        }],
        xinsheng:[
        {
          name:'GOUBI',
          shuliang:'蔡虚昆',
          danjia:'1',
          src:"//timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1572692042681&di=bd63aac66f860c2ed0a598a74b79a8e8&imgtype=0&src=http%3A%2F%2Finews.gtimg.com%2Fnewsapp_bt%2F0%2F10344905423%2F1000.jpg"
        },
        {
          name:'就要掷地有声的炸裂',
          shuliang:'RISE',
          danjia:'12',
          src:"//y.gtimg.cn/music/photo_new/T002R300x300M000002WAzsK3zOPmi.jpg?max_age=2592000"
        },
        {
          name:'立风',
          shuliang:'火箭少女101',
          danjia:'27',
          src:"//y.gtimg.cn/music/photo_new/T002R300x300M0000018oANt3Hd7ZE_4.jpg?max_age=2592000"
        },
        {
          name:'UNLOCK',
          shuliang:'UNINE',
          danjia:'9',
          src:"//y.gtimg.cn/music/photo_new/T002R300x300M0000040MnqD3iJQUW_1.jpg?max_age=2592000"
        },
        {
          name:'ESCAPE.',
          shuliang:'林彦俊',
          danjia:'4',
          src:"//y.gtimg.cn/music/photo_new/T002R300x300M000000SVLvW0snMWF_1.jpg?max_age=2592000"
        },
        {
          name:'Too Busy',
          shuliang:'BOY STORY',
          danjia:'3',
          src:"//y.gtimg.cn/music/photo_new/T002R300x300M000002nHjt102K1xt_1.jpg?max_age=2592000"
        }],
         neidi:[
        {
          name:'HONEY',
          shuliang:'张艺兴',
          danjia:'8',
          src:"//y.gtimg.cn/music/photo_new/T002R300x300M000004M8HLn4QOyyn.jpg?max_age=2592000"
        },
        {
          name:'哇',
          shuliang:'李宇春',
          danjia:'20',
          src:"//y.gtimg.cn/music/photo_new/T002R300x300M000000d4ZXm4JElgo.jpg?max_age=2592000"
        },
        {
          name:'shenmwanyi',
          shuliang:'鹿焊',
          danjia:'2',
          src:"//timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1572691936571&di=9fe114ed3f320f0b8231c0e21c53a4de&imgtype=0&src=http%3A%2F%2Fatt2.citysbs.com%2Ftiaozao%2F2013%2F03%2F13%2F15%2F154813_18861363160893727_9847e5d0db998b527b41e7d5d7daff2a.jpg"
        },
        {
          name:'破晓',
          shuliang:'吴亦凡',
          danjia:'3',
          src:"//y.gtimg.cn/music/photo_new/T002R300x300M000004COjBT25RdIp.jpg?max_age=2592000"
        },
        {
          name:'LUNAR',
          shuliang:'周笔畅',
          danjia:'20',
          src:"//y.gtimg.cn/music/photo_new/T002R300x300M000001xUYaL2nggfC_1.jpg?max_age=2592000"
        },
        {
          name:'末日飞船',
          shuliang:'唐含笑',
          danjia:'6',
          src:"//y.gtimg.cn/music/photo_new/T002R300x300M000000jD0Vg1qnfyQ.jpg?max_age=2592000"
        }],
         oumei:[
        {
          name:'Live Fast',
          shuliang:'Alan Walker',
          danjia:'8',
          src:"//y.gtimg.cn/music/photo_new/T002R300x300M000001zzkUO1ktxJY.jpg?max_age=2592000"
        },
        {
          name:'No.6 Collaboratio...',
          shuliang:'Ed Sheeran',
          danjia:'20',
          src:"//y.gtimg.cn/music/photo_new/T002R300x300M000000WDDPp0xUD4T_1.jpg?max_age=2592000"
        },
        {
          name:'thank u,next(Exp...',
          shuliang:'Ariana Grande',
          danjia:'20',
          src:"//y.gtimg.cn/music/photo_new/T002R300x300M0000018EiQq2GRc5b.jpg?max_age=2592000"
        }],
         gangtai:[
        {
          name:'SHOW THE WORLD',
          shuliang:'林俊杰',
          danjia:'3',
          src:"//y.gtimg.cn/music/photo_new/T002R300x300M000000ADcn52UzdWj.jpg?max_age=2592000"
        },
        {
          name:'我们很好',
          shuliang:'林俊杰',
          danjia:'3',
          src:"//y.gtimg.cn/music/photo_new/T002R300x300M0000010AYuF3nqxhw.jpg?max_age=2592000"
        },
        {
          name:'一般是我',
          shuliang:'陈立农',
          danjia:'3',
          src:"//y.gtimg.cn/music/photo_new/T002R300x300M000000lI2WE4F4K2p_1.jpg?max_age=2592000"
        }],
         hanguo:[
        {
          name:'What a life — The...',
          shuliang:'EXO-SC',
          danjia:'18',
          src:"//y.gtimg.cn/music/photo_new/T002R300x300M000004VaOJ60Mpgnw.jpg?max_age=2592000"
        },
        {
          name:'City Lights',
          shuliang:'伯贤',
          danjia:'18',
          src:"//y.gtimg.cn/music/photo_new/T002R300x300M000002ci94M4fMYjm_1.jpg?max_age=2592000"
        },
        {
          name:'True Colors',
          shuliang:'burenshi',
          danjia:'15',
          src:"//y.gtimg.cn/music/photo_new/T002R300x300M000002VTIh812VCc3_1.jpg?max_age=2592000"
        },
        {
          name:'WE',
          shuliang:'WINNER',
          danjia:'15',
          src:"//y.gtimg.cn/music/photo_new/T002R300x300M000002Ao9Zw1xJu7O_1.jpg?max_age=2592000"
        },
        {
          name:'KiLL THIS LOVE',
          shuliang:'BLACKPINK',
          danjia:'12',
          src:"//y.gtimg.cn/music/photo_new/T002R300x300M0000008jbEA4ePxVf_4.jpg?max_age=2592000"
        },
        {
          name:'A Walk to Remem...',
          shuliang:'meizi',
          danjia:'8',
          src:"//y.gtimg.cn/music/photo_new/T002R300x300M000003wwnm94gdbv4_1.jpg?max_age=2592000"
        }],
         yingshi:[
        {
          name:'陈情令 国风音乐',
          shuliang:'华语群星',
          danjia:'8',
          src:"//y.gtimg.cn/music/photo_new/T002R300x300M000002Tryw33HIGNP_2.jpg?max_age=2592000"
        },
        {
          name:'《时间都知道》电...',
          shuliang:'华语群星',
          danjia:'12',
          src:"//y.gtimg.cn/music/photo_new/T002R300x300M000000xbVpz2d56fc_1.jpg?max_age=2592000"
        },
        {
          name:'《灵笼》',
          shuliang:'张靓颖',
          danjia:'15',
          src:"//y.gtimg.cn/music/photo_new/T002R300x300M000003Klw1L2vgE4L_1.jpg?max_age=2592000"
        },
        {
          name:'我们很好',
          shuliang:'林俊杰',
          danjia:'3',
          src:"//y.gtimg.cn/music/photo_new/T002R300x300M0000010AYuF3nqxhw.jpg?max_age=2592000"
        },
        {
          name:'迟爱',
          shuliang:'郁可唯',
          danjia:'3',
          src:"//y.gtimg.cn/music/photo_new/T002R300x300M000003UP2BH2e4cXO.jpg?max_age=2592000"
        },
        {
          name:'日月',
          shuliang:'汪苏泷',
          danjia:'3',
          src:"//y.gtimg.cn/music/photo_new/T002R300x300M0000016PtaO1HiyMj.jpg?max_age=2592000"
        }],
    }
  },
  methods: {
    my() {
      this.$router.push("/my");
    },
    changxiao() {
      this.$router.push("/changxiao");
    }
  }
};
</script>

<style scoped>
.van-icon-arrow-left {
  font-size: 2rem;
  vertical-align: middle;
  margin-bottom: 1rem;
}
.title {
  margin-left: 8rem;
  font-size: 20px;
  font-weight: bold;
}
.ku {
  margin-left: 5rem;
}
.van-swipe{
  width: 100%;
  height: 10rem;
}
.van-swipe img{
  width: 100%;
}
.changxiao ul{
  width: 90%;
  margin: 0 auto;
  height: 5rem;
  display: flex;
  justify-content: space-around;
}
.changxiao li {
  width: 20%;
  height: 80%;
  list-style: none;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  align-content: space-between
}
.van-icon-bar-chart-o,.van-icon-exchange,.van-icon-apps-o{
  font-size: 26px;
  color: #31c27c;
}
.icon-yigouzhuanji {
  font-size: 30px;
  color: #31c27c;
}
.xianjing{
  padding-left: 8px;
  margin-top: 2rem;
  width: 100%;
  height: 5rem;
  position: relative;
}
.van-icon-idcard{
  position: absolute;
  color: #31c27c;
  font-size: 22px;
  left: 5rem;
  top: 17px;
}
.xianjing span{
  position: absolute;
  left: 108px;
  top: 17px;
}
.xianjing font{
  position: absolute;
  left: 5rem;
  font-size: 13px;
  top: 44px;
  color: #666
}
.xianjing .van-icon-arrow{
  position: absolute;
  left: 22rem;
  top: 30px;
}
.zuixin,.zhuanlan,.zhuanqu,.mingxing {
  position: relative
}
.zuixin>.icon-btndownarrow,.zhuanlan>.icon-btndownarrow,.zhuanqu>.icon-btndownarrow{
  position: absolute;
  left: 21rem;
  top: 5px;
}
.zuixin>ul,.zhuanlan>ul,.zhuanqu>ul,.mingxing>ul{
  width: 30%;
  margin: 0 auto;
  display: flex;
  justify-content: space-between;
  margin-bottom: 1rem;
  margin-top: 1rem;
}
.zuixin>ul li,.zhuanlan>ul li,.zhuanqu>ul li,.mingxing>ul li{
  display: inline-block;
  font-size: 18px;
}
.zuixin1 li,.zuixin2 li{
  padding: 0 0 0 5px;
  list-style: none;
  width: 32%;
  height: 13rem;
  overflow: hidden;
}
.zuixin1 ul {
  display: flex;
  width: 100%;
  height: 26rem;
  flex-flow: row wrap;
  justify-content: space-between;
}
.zuixin2 ul{
  display: flex;
  width: 100%;
  height: 12rem;
  flex-flow: row wrap;
  justify-content: space-between;
}
.zuixin1 li font,.zuixin1 li a,.zuixin2 li font,.zuixin2 li a{
  color: #888;
  font-size: 13px
}
.zuixin1 li span,.zuixin2 li span{
  font-size: 13px
}
.zhuanlan1 ul{
  width: 100%;
  height: 23rem;
}
.zhuanlan1 ul li{
  position: relative;
}
.zhuanlan1 li .van-icon-vip-card-o{
  position: absolute;
  left: 110px;
  top: 10px;
  font-size: 25px;
}
.zhuanlan1 li span{
  position: absolute;
  left: 110px;
  top: 42px;
  font-size: 14px
}
.zhuanlan1 li font{
  position: absolute;
  left: 110px;
  top: 5rem;
  font-size: 13px
}
</style>