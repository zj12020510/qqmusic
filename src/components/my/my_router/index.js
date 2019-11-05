export default[
    {
        path: '/like', component: () => import ("../like/like.vue"),
    },
    {
        path: '/my_bendi', component: () => import ("../bendi/bendi.vue")
    },
    {
        path: '/yigou', component: () => import ("../yigou/yigou.vue")
    },
    {
        path: '/zuijin', component: () => import ("../zuijin/zuijin.vue")
    },
    {
        path: '/aiting', component: () => import ("../aiting/aiting.vue")
    },
    {
        path: '/changxiao', component: () => import ('../yigou/changxiao/changxiao.vue')
    }
]