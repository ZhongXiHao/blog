import Vue from 'vue'
import VueRouter from 'vue-router'
import BlogListView from "@/views/BlogListView.vue";
import BlogPageView from "@/views/BlogPageView.vue";

Vue.use(VueRouter)

const routes = [
    {
        path: '/',
        name: 'list',
        component: BlogListView
    },
    {
        path: '/blog/:id',
        name: 'blog',
        component: BlogPageView
    }

]

const router = new VueRouter({
    mode: 'history',
    base: process.env.BASE_URL,
    routes
})

export default router
