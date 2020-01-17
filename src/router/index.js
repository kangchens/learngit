import Vue from 'vue'
import VueRouter from 'vue-router'
// import Login from '../views/login.vue'
// import Main from '../views/page.vue'
Vue.use(VueRouter)
const routes = [
    {
        path:"/",
        component:()=>import('../views/login.vue')
    },
    {
        path:"/main",
        component:()=>import('../views/page.vue'),
        redirect: '/main/index',
        children:[
            {
                path:"index",
                component:()=>import('../views/index/index.vue')
            },
            {
                path:"book",
                component:()=>import('../views/book/book.vue')
            },
            {
                path:"mine",
                component:()=>import('../views/mine/mine.vue')
            },
            {
                path:"shop",
                component:()=>import('../views/shop/shop.vue')
            },
            {
                path:"team",
                component:()=>import('../views/team/team.vue')
            }
        ]
    },
    {
        path:'*',
        redirect:'/main'
    }
]
const router = new VueRouter({
    mode:"hash",
    routes
})
export default router

