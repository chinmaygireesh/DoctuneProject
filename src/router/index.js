import { createRouter, createWebHistory } from 'vue-router'
//import Home from '../views/Home.vue'
import login from '../components/login.vue'
import signup from '../components/signup.vue'

import admin from '../components/adminlogin'
import user from '../components/userpage'
const routes = [
    /* {
       path: '/',
       name: 'Home',
       component: Home
     },
     {
       path: '/about',
       name: 'About',
       // route level code-splitting
       // this generates a separate chunk (about.[hash].js) for this route
       // which is lazy-loaded when the route is visited.
       component: () => import( webpackChunkName: "about"  '../views/About.vue')
     }*/
    {
        path: '/login',
        name: 'login',
        component: login
    },

    {
        path: '/signup',
        name: 'signup',
        component: signup
    },

    {
        path: '/adminlogint',
        name: 'adminlogin',
        component: admin
    },
    {
        path: '/userpage/:id',
        name: 'userpage',
        component: user,
        props: true,
    },

]

const router = createRouter({
    history: createWebHistory(process.env.BASE_URL),
    routes
})

export default router