import Vue from 'vue'
import VueRouter from 'vue-router'
Vue.use(VueRouter)

import Root from "../components/Root.vue"
import Home from "../components/Home.vue"
import Cart from "../components/Cart.vue"
import Discover from "../components/Discover.vue"
import Sort from "../components/Sort.vue"
import Me from "../components/Me.vue"
import Search from "../components/Search.vue"
import Register from "../components/Register.vue"


const routes = [
    {
        path: "/",
        component: Root,
        redirect: '/home',
        children: [
            { path: '/home', component: Home },
            { path: '/sort', component: Sort},
            { path: '/discover', component: Discover },
            { path: '/cart', component: Cart },
            { path: '/me', component: Me }
        ]
    },
    {
        path: "/search",
        component: Search
    },
    {
        path:"/register",
        component:Register

    }
]

const router = new VueRouter({
    routes
})

export default router
