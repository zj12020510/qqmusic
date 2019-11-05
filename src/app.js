import Bofangqi from './components/bofangqi/bofangqi.vue';

export default {
  data() {
    return {
      app_nav: [
        {
          title: "音乐馆",
          app_icon: "audio",
          url: "/musichome",
          bg: true
        },
        {
          title: "推荐",
          app_icon: "good-job-o",
          url: "/tuijian",
          bg: false
        },
        {
          title: "动态",
          app_icon: "browsing-history-o",
          url: "/dongtai",
          bg: false
        },
        {
          title: "我的",
          app_icon: "contact",
          url: "/my",
          bg: false
        }
      ],
      app_top: "音乐馆",
      show: false,

    };
  },
  created() {
    this.$store.dispatch("BFQ_LIST")
  },
  computed: {
    bfq_isplay() {
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
  components: {
    Bofangqi
  },

  methods: {
    gorouter(url, index) {
      this.app_nav.map((item, inde) => (this.app_nav[inde].bg = false));
      this.app_nav[index].bg = true;
      this.$router.push({ path: url });
      this.app_top = this.app_nav[index].title;
    },
    bfq_top() {
      this.show = true;
      // this.$router.push("/bofangqi")
    },
    bfq_down() {
      this.show = false
    },
    bforzt(val) {
      if (val) {
        this.$store.commit("BFQ_ISPLAY", !this.bfq_isplay)
        $('.yinpinyuan')[0].play()
      } else {
        this.$store.commit("BFQ_ISPLAY", !this.bfq_isplay)
        $('.yinpinyuan')[0].pause()

      }

    },
  },
  mounted() {
    let arr = this.app_nav;
    arr = arr.filter(item => item.title == this.app_top);
    this.$router.push({ path: arr[0].url });
  }
};
