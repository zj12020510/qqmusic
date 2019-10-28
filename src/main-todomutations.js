import Vue from 'vue'
import App from './components/todomutations/Todu.vue'//todu案例
import Vuex from "vuex";
Vue.use(Vuex);
const store = new Vuex.Store({
  state: {
    list: [
      {
        id: 1,
        title: "吃饭",
        done: true
      }, {
        id: 2,
        title: "睡觉",
        done: false
      }, {
        id: 3,
        title: "打豆豆",
        done: false
      },
    ]
  },
  mutations: {
    ADD(state, payload) {
      this.state.list = payload;
    },
    CHANGE(state, payload) {
      this.state.list = payload
    },
    DEL(state, payload) {
      this.state.list = payload
    }
  },
  getters: {
    yz(state) {
      return state.list.filter(item => item.done === true)
    },
    wz(state) {
      return state.list.filter(item => item.done === false)
    }
  }
})

Vue.config.productionTip = false

new Vue({
  store,
  render: h => h(App),
}).$mount('#app')
