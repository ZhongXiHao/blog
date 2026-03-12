import Vue from 'vue'
import VueRouter from 'vue-router'
import BlogListView from "@/views/BlogListView.vue";

Vue.use(VueRouter)

const routes = [
    {
        path: '/',
        name: 'list',
        component: BlogListView
    },

]

const router = new VueRouter({
    mode: 'history',
    base: process.env.BASE_URL,
    routes
})

export default router
