import Vue from 'vue'
import VueRouter from 'vue-router'

import tj_router from '../tuijian/tj_router'
import my_router from '../my/my_router'
import muh_router from '../musichome/muh_router'
import dt_router from '../dongtai/dt_router'
import bf_router from '../bofangqi/bf_router'

// https://www.cnblogs.com/lxk0301/p/11671256.html
// 解决莫名其妙的报错 重写了一个push方法
const routerPush = VueRouter.prototype.push
VueRouter.prototype.push = function push(location) {
    return routerPush.call(this, location).catch(error => error)
}
Vue.use(VueRouter)

// 2. 定义路由
// 每个路由应该映射一个组件。 其中"component" 可以是
// 通过 Vue.extend() 创建的组件构造器，
// 或者，只是一个组件配置对象。
// 我们晚点再讨论嵌套路由。
const H_Routes = [
    {
        path: '/musichome', component: () => import ("../musichome/musichome.vue")
    },
    {
        path: '/tuijian', component: () => import ("../tuijian/tuijian.vue")
    },
    {
        path: '/dongtai', component: () => import ("../dongtai/dongtai.vue")
    },
    {
        path: '/my', component: () => import ("../my/my.vue")
    }
]
const routes = H_Routes.concat(tj_router, my_router, muh_router, dt_router, bf_router, [{
        path: '/*', redirect: '/musichome'
}])

// 3. 创建 router 实例，然后传 `routes` 配置
// 你还可以传别的配置参数, 不过先这么简单着吧。
const router = new VueRouter({
    mode: "history",//去除地址栏#号
    routes // (缩写) 相当于 routes: routes
})

export default router
