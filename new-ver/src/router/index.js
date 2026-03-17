import Vue from 'vue'
import VueRouter from 'vue-router'
import BlogListView from "@/views/BlogListView.vue";
import BlogPageView from "@/views/BlogPageView.vue";
import NotFoundPage from "@/views/NotFoundPage.vue";

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
    },
    {
        path: '/404',
        name: 'not-found',
        component: NotFoundPage
    },
    {
        path: '*',
        redirect: '/404'
    }
]


const router = new VueRouter({
    mode: 'history',
    routes
})
router.beforeEach((to, from, next) => {
    // if path is /blog/:id, check if id is a valid number
    if (to.name === 'blog') {
        // console.log('blog page id:', to.params.id)
        const id = to.params.id
        if (!id || isNaN(Number(id)) || parseInt(id) <= 0) {
            next('/404');
            return;
        }
    }
    next();
})

export default router
