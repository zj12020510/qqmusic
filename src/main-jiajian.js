import Vue from 'vue'
import App from './components/jiajian/App.vue'//同步异步加一减一
import Vuex from "vuex";
Vue.use(Vuex);
const store = new Vuex.Store({
  state: {
    count: 1
  },
  
  mutations: {
    JIAN(state, payload) {
      console.log(state.count, "同步减");
      state.count -= payload
    },
    JIA(state, payload) {
      console.log(state.count, "同步加");
      state.count += payload
    }
  },
  actions: {
    async JI(context, payload) {
      console.log("异步", payload)
      var { a } = await fetch("./data.json").then(res => res.json())
      console.log("a------:", a)
      context.commit(payload,a)
    }
  }
})

Vue.config.productionTip = false

// new Vue({
//   store,
//   render: h => h(App),
// }).$mount('#app')
