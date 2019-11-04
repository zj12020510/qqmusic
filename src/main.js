import Vue from "vue"
import App from "./app.vue"
import Vuex from "vuex"
import router from './components/router'

import Vant from 'vant';
import 'vant/lib/index.css';

Vue.use(Vant);
Vue.use(Vuex);
const store = new Vuex.Store({
    state: {
        home: [],
        bfq_isplay:false
    },
    
    mutations: {

        HOME(state, payload) {
            // console.log(payload)
            state.home = payload
        },
        BFQ_ISPLAY(state, payload){
            state.bfq_isplay = payload
        }
    },
    actions: {
        async HOME({commit},payload) {
            var home = await fetch("./musichome.json").then(res => res.json());
            // console.log(home)
            commit("HOME", home)
        }
    },
})

Vue.config.productionTip = false

new Vue({
    router,
    store,
    render: h => h(App),
}).$mount("#app")
