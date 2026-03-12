import {getBlogListApi} from "@/api/blogApi";
import {Toast} from "vant";

export default {
    namespaced: true,
    state () {
        return {
            blogList: []
        }
    },
    mutations: {
        setBlogList (state, blogList) {
            state.blogList = blogList
        }
    },
    actions: {
        async getBlogListAction (context) {
            try {
                const res = await getBlogListApi()
                context.commit('setBlogList', res.data)
            } catch (error) {
                Toast(error.message || 'Failed to fetch blog list')
            }
        }
    },
    getters: {
        getBlogList: state => state.blogList
    }
}