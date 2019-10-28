const routes = [
    {
        path: '/h_geshou', component: () => import("../h_geshou/index.vue")
    },
    {
        path: '/h_paihang', component: () => import ("../h_paihang/index.vue")
    },
    {
        path: '/h_fenlei', component: () => import ("../h_fenlei/index.vue")
    },
    {
        path: '/h_diantai', component: () => import ("../h_diantai/index.vue")
    },
    {
        path: '/h_yiqiting', component: () => import ("../h_yiqiting/index.vue")
    }
]
export default routes