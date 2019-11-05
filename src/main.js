import Vue from "vue"
import App from "./app.vue"
import Vuex from "vuex"
import router from './components/router'

import Vant from 'vant';
import 'vant/lib/index.css';
import { Swipe, SwipeItem } from 'vant';
import { Lazyload } from 'vant';
Vue.use(Lazyload);
Vue.use(Swipe).use(SwipeItem);

Vue.use(Vant);
Vue.use(Vuex);
const store = new Vuex.Store({
    state: {
        home: [],
        bfq_isplay: false,
        musiclist: [],
        musiclist_index: 0
    },
    mutations: {

        HOME(state, payload) {
            // console.log(payload)
            state.home = payload
        },
        BFQ_ISPLAY(state, payload) {
            state.bfq_isplay = payload
        },
        BFQ_LIST(state, payload) {
            state.musiclist = payload
        },
        MUSICLIST_INDEX(state, payload) {
            state.musiclist_index = payload.index;
            state.bfq_isplay = payload.bfq_isplay
        }
    },
    actions: {
        async HOME({ commit }, payload) {
            var home = await fetch("./musichome.json").then(res => res.json());
            // console.log(home)
            commit("HOME", home)
        },
        async BFQ_LIST({ commit }, payload) {
            var { musiclist } = await fetch("./musiclist.json").then(res => res.json());
            // console.log(musiclist)
            commit("BFQ_LIST", musiclist)
        }
    },
})

Vue.config.productionTip = false

new Vue({
    router,
    store,
    render: h => h(App),
}).$mount("#app")
