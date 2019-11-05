export default {
    data() {
      return {};
    },
    
    created(){
      this.$store.dispatch("HOME")
    },
    computed:{
      home_swiper(){
        let obj = this.$store.state.home[0];
        for(let i in obj){
          return obj[i]
        }
      },
      home_nav(){
        let obj = this.$store.state.home[1];
        for(let i in obj){
          return obj[i]
        }
      },
      home_xgsf(){
        let obj = this.$store.state.home[2];
        for(let i in obj){
          return obj[i]
        }
      },
      home_content(){
        let obj = this.$store.state.home[3];
        for(let i in obj){
          return obj[i]
        }
      }
    },
    methods: {
      h_geshou(){
        this.$router.push({path:"/h_geshou"});
      }
    }
  };