<template>
  <div id="box">
    <div class="changxiao4">
      <div class="changxiao1">
      <div class="changxiao2"></div>
      </div>
      <div class="changxiao3">
        <van-icon name="arrow-left" @click="yigou" />
        <van-icon name="share" />
        <span>数字专辑</span>
        <font>— 畅销榜 —</font>
      </div>
      <ul>
        <li v-for="(item,index) in list" :key="index"  @click="tabClick(index)" :class="{'bianse' : item.done}"><span>{{item.title}}</span></li>
      </ul>
      <div v-show="this.tabIndex === 0" class="cx1">
        <div v-for="(item,index) in bang" :key=index>
          <van-image
                width="7rem"
                height="7rem"
                :src=item.src
          />
          <span class="s1">{{item.name}}</span>
          <span class="s2">{{item.zhuanji}}</span>
          <span class="s3">{{item.shuliang}}</span>
          <span class="s4">{{item.mingci}}</span>
          <span class="s5">{{item.gang}}</span>
          <span class="s6">{{item.dabang}}</span>
       </div>
     </div>
    <div v-show="this.tabIndex === 1" class="cx1">
        <div v-for="(item,index) in bang" :key=index>
          <van-image
                width="7rem"
                height="7rem"
                :src=item.src
          />
          <span class="s1">{{item.name}}</span>
          <span class="s2">{{item.zhuanji}}</span>
          <span class="s3">{{item.shuliang}}</span>
          <span class="s4">{{item.mingci}}</span>
          <span class="s5">{{item.gang}}</span>
          <span class="s6">{{item.dabang}}</span>
       </div>
     </div>
    <div v-show="this.tabIndex === 2" class="cx1">
        <div v-for="(item,index) in bang" :key=index>
          <van-image
                width="7rem"
                height="7rem"
                :src=item.src
          />
          <span class="s1">{{item.name}}</span>
          <span class="s2">{{item.zhuanji}}</span>
          <span class="s3">{{item.shuliang}}</span>
          <span class="s4">{{item.mingci}}</span>
          <span class="s5">{{item.gang}}</span>
          <span class="s6">{{item.dabang}}</span>
       </div>
     </div>
    <div v-show="this.tabIndex === 3" class="cx1">
        <div v-for="(item,index) in bang" :key=index>
          <van-image
                width="7rem"
                height="7rem"
                :src=item.src
          />
          <span class="s1">{{item.name}}</span>
          <span class="s2">{{item.zhuanji}}</span>
          <span class="s3">{{item.shuliang}}</span>
          <span class="s4">{{item.mingci}}</span>
          <span class="s5">{{item.gang}}</span>
          <span class="s6">{{item.dabang}}</span>
       </div>
     </div>
  </div>
  </div>
</template>

<script>
export default {
    data(){
      return{
        list:[
          {
            title:'日榜',
            done:true
          },
          {
            title:'周榜',
            done:false
          },{
            title:'年榜',
            done:false
          },{
            title:'总榜',
            done:false
          }
        ],
        tabIndex : 0,
        bang:[
          {
            name:'陈情令 国风音乐专辑',
            zhuanji:'华语音乐群星',
            shuliang:'2679张>',
            mingci:1,
            gang:'—',
            dabang:'打榜',
            src:'////y.gtimg.cn/music/photo_new/T002R300x300M000002Tryw33HIGNP.jpg?max_age=2592000'
          },
          {
            name:'Purpose - The 2nd Album',
            zhuanji:'한국어(太妍)',
            shuliang:'648张>',
            mingci:2,
            gang:'—',
            dabang:'打榜',
            src:'//y.gtimg.cn/music/photo_new/T002R300x300M000001JpKXH2KJQiG.jpg?max_age=2592000'
          },
          {
            name:'Come to Me',
            zhuanji:'王晰',
            shuliang:'2820张>',
            mingci:3,
            gang:'—',
            dabang:'打榜',
            src:'//y.gtimg.cn/music/photo_new/T002R300x300M000003usAqc4D5NyW_2.jpg?max_age=2592000'
          },
          {
            name:'年轮说',
            zhuanji:'杨丞琳',
            shuliang:'4599张>',
            mingci:4,
            gang:'—',
            dabang:'打榜',
            src:'////y.gtimg.cn/music/photo_new/T002R300x300M000004ciegP39o1BK_1.jpg?max_age=2592000'
          },
          {
            name:'没有秘密的你 电视剧OTS',
            zhuanji:'华语群星',
            shuliang:'2781张>',
            mingci:5,
            gang:'—',
            dabang:'打榜',
            src:'//y.gtimg.cn/music/photo_new/T002R300x300M00000241tTR3hvZQi_2.jpg?max_age=2592000'
          },
           {
            name:'Lover',
            zhuanji:'Taylor Swift(泰勒·斯威夫特)',
            shuliang:'6618张>',
            mingci:6,
            gang:'—',
            dabang:'打榜',
            src:'//y.gtimg.cn/music/photo_new/T002R300x300M000002MRY88057AhY_1.jpg?max_age=2592000'
          },
          {
            name:'Time_Slip — the 9th...',
            zhuanji:'SUPER JUNIOR(kanbudong)',
            shuliang:'288张>',
            mingci:7,
            gang:'—',
            dabang:'打榜',
            src:'//y.gtimg.cn/music/photo_new/T002R300x300M000000H3CIo2BRJCl_2.jpg?max_age=2592000'
          },
          {
            name:'我们很好',
            zhuanji:'林俊杰',
            shuliang:'1705张>',
            mingci:8,
            gang:'—',
            dabang:'打榜',
            src:'//y.gtimg.cn/music/photo_new/T002R300x300M0000010AYuF3nqxhw_1.jpg?max_age=2592000'
          },
          {
            name:'蓝色天空',
            zhuanji:'张云雷',
            shuliang:'390张>',
            mingci:9,
            gang:'—',
            dabang:'打榜',
            src:'//y.gtimg.cn/music/photo_new/T002R300x300M000003d636i2FSP7z.jpg?max_age=2592000'
          },
          {
            name:'破晓',
            zhuanji:'吴亦凡',
            shuliang:'1287张>',
            mingci:10,
            gang:'—',
            dabang:'打榜',
            src:'//y.gtimg.cn/music/photo_new/T002R300x300M000004COjBT25RdIp_1.jpg?max_age=2592000'
          },
          {
            name:'UGLY BEAUTY',
            zhuanji:'蔡依林',
            shuliang:'192张>',
            mingci:11,
            gang:'—',
            dabang:'打榜',
            src:'//y.gtimg.cn/music/photo_new/T002R300x300M000004KHjpn0p4Az7_1.jpg?max_age=2592000'
          },
          {
            name:'CROSS',
            zhuanji:'WINNER',
            shuliang:'213张>',
            mingci:12,
            gang:'—',
            dabang:'打榜',
            src:'//y.gtimg.cn/music/photo_new/T002R300x300M000000Qu1t01KG0AU_2.jpg?max_age=2592000'
          },
          {
            name:'讲故事写生我们',
            zhuanji:'林俊杰',
            shuliang:'996张>',
            mingci:13,
            gang:'—',
            dabang:'打榜',
            src:'//y.gtimg.cn/music/photo_new/T002R300x300M000003MVnC94cNKbM.jpg?max_age=2592000'
          },
          {
            name:'HONEY',
            zhuanji:'张艺兴',
            shuliang:'366张>',
            mingci:14,
            gang:'—',
            dabang:'打榜',
            src:'//y.gtimg.cn/music/photo_new/T002R300x300M000004M8HLn4QOyyn_1.jpg?max_age=2592000'
          },
           {
            name:'哇',
            zhuanji:'李宇春',
            shuliang:'129张>',
            mingci:15,
            gang:'—',
            dabang:'打榜',
            src:'//y.gtimg.cn/music/photo_new/T002R300x300M000000d4ZXm4JElgo_1.jpg?max_age=2592000'
          },
           {
            name:'就要掷地有声的炸裂',
            zhuanji:'R1SE',
            shuliang:'209张>',
            mingci:16,
            gang:'—',
            dabang:'打榜',
            src:'//y.gtimg.cn/music/photo_new/T002R300x300M000002WAzsK3zOPmi.jpg?max_age=2592000'
          },
           {
            name:'YOUNG',
            zhuanji:'蔡虚昆',
            shuliang:'3张>',
            mingci:17,
            gang:'—',
            dabang:'打榜',
            src:'//timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1572692042681&di=bd63aac66f860c2ed0a598a74b79a8e8&imgtype=0&src=http%3A%2F%2Finews.gtimg.com%2Fnewsapp_bt%2F0%2F10344905423%2F1000.jpg'
          },
           {
            name:'UNUSUAL',
            zhuanji:'UNINE',
            shuliang:'244张>',
            mingci:18,
            gang:'—',
            dabang:'打榜',
            src:'//y.gtimg.cn/music/photo_new/T002R300x300M0000008jbEA4ePxVf_4.jpg?max_age=2592000'
          },
           {
            name:'Wonderland',
            zhuanji:'林俊杰',
            shuliang:'667张>',
            mingci:19,
            gang:'—',
            dabang:'打榜',
            src:'//y.gtimg.cn/music/photo_new/T002R300x300M000000XEFal22lEwn.jpg?max_age=2592000'
          },
           {
            name:'1989(Deluxe)',
            zhuanji:'Tsylor Swift',
            shuliang:'1793张>',
            mingci:20,
            gang:'—',
            dabang:'打榜',
            src:'//y.gtimg.cn/music/photo_new/T002R300x300M000002Kz5Jo1uzHjz_1.jpg?max_age=2592000'
          },
        ]
      }
    },
    methods:{
      yigou(){
        this.$router.push('/yigou')
      },
      tabClick(index){
        this.tabIndex=index;
        this.list.forEach(item => {
          item.done = false;
        });
        this.list[index].done=true
      }
    }
}
</script>

<style scoped>
.changxiao4 ul{
  display: flex;
  width: 100%;
  justify-content: space-between;
  height: 3rem;
  position: absolute;
  top: 17rem;
  background: #ffffff
}
.changxiao4 ul li{
  padding: 5px 0;
  width: 25%;
  text-align: center
}
.bianse span{
  color: #23D599;
  padding-bottom: 10px;
  border-bottom: 2px solid #23D599
}
.changxiao4{
  width: 100%;
  height: 50rem;
  position: relative;
}
.changxiao1{
  width: 100%;
  height: 20rem;
  background: url('//y.gtimg.cn/music/photo_new/T002R300x300M000002Tryw33HIGNP_2.jpg?max_age=2592000') round;
}
.changxiao2{
  width: 100%;height: 100%;
  background: #000;
  opacity: 0.5;
}
.changxiao3 .van-icon-arrow-left{
  color: #ffffff;
  position: absolute;
}
.changxiao3 .van-icon-share{
  color: #ffffff;
  font-size: 2rem;
  right: 2px;
  position: absolute;
}
.changxiao3 {
  width: 100%;
  height: 10rem;
  position: absolute;
  top: 1rem
}
.changxiao3 span{
  color: #ffffff;
  font-size: 3rem;
  position: absolute;
  top: 3rem;
  left: 25%
}
.changxiao3 font{
  color: #ffffff;
  font-size: 22px;
  position: absolute;
  left: 32%;
  top: 7rem;
}
.cx1 div{
  position: relative;
  width: 100%;
  height: 118px;
}
.cx1 .s1{
  position: absolute;
  top: 1rem;
  left: 34%;
  width: 50%;
}
.cx1 .s2{
  position: absolute;
  top: 55px;
  left: 34%;
  font-size: 13px;
  color: #666
}
.cx1 .s3{
  position: absolute;
  top: 81px;
  left: 34%;
  font-size: 13px;
  color: #666
}
.cx1 .s4{
  position: absolute;
  top: 1rem;
  right: 5%;
  font-size: 26px;
  color: #c54848
}
.cx1 .s5{
  position: absolute;
  top: 48%;
  right: 5%;
  font-size: 12px;
  color: #666
}
.cx1 .s6{
  position: absolute;
  bottom: 5px;
  padding: 3px 13px;
  right: 0;
  font-size: 14px;
  border: 1px solid #aaa
}
</style>