/**推荐页面子路由 */
export default [
    {
        path: '/zujian', component: () => import("../components/zujian.vue")
    },
    {
        path: '/shipin', component: () => import("../components/shipin.vue")
    },
    {
        path: '/gedan', component: () => import("../components/gedan.vue")
    },
    {
        path: '/pinglun', component: () => import("../components/pinglun.vue")
    }
]