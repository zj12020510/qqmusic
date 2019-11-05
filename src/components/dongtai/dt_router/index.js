var arr=[
    {
        path: '/bendi', component: () => import ("../components/bendi.vue"),
    },
    {
        path: '/miaoshu', component: () => import ("../components/sanjiluyou/miaoshu.vue")
    },
    {
        path: '/people', component: () => import ("../components/people.vue")
    },
    {
        path: '/singer', component: () => import ("../components/sanjiluyou/singer.vue")
    },
]
export default arr