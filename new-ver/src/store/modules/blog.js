import {getBlogDetailsApi, getBlogListApi} from "@/api/blogApi";
import {Toast} from "vant";
import {formatTime} from '@/utils/timeFormatting';

export default {
    namespaced: true,
    methods: {},
    state () {
        return {
            blogList: [],
            blogDetails: {}
        }
    },
    mutations: {
        setBlogList (state, blogList) {
            state.blogList = blogList
        },
        setBlogDetails (state, blogDetails) {
            state.blogDetails = blogDetails
        }
    },
    actions: {
        async getBlogListAction (context) {
            try {
                const res = await getBlogListApi()
                const data = res.data || []
                // console.log(data)
                const filteredData = data.map(item => (
                    {
                        ...item,
                        formattedPostedAt: formatTime(item.postedAt)
                    })
                )
                // console.log(filteredData)
                context.commit('setBlogList', filteredData)
            } catch (error) {
                Toast(error.message || 'Failed to fetch blog list')
            }
        },
        async getBlogDetailsAction (context, blogId) {
            try {
                const res = await getBlogDetailsApi(blogId)
                if (res) {
                    await context.dispatch('getBlogListAction')
                    context.commit('setBlogDetails',
                        {
                            id: blogId,
                            title: res.data.title,
                            content: res.data.content,
                            formattedUpdatedAt: formatTime(res.data.updatedAt),
                            prevBlog: res.data.prevBlog,
                            nextBlog: res.data.nextBlog,
                        })
                }
            }finally {

            }
            // return context.state.blogDetails
        }
    },
    getters: {
        getBlogList: state => state.blogList,
        getBlogDetails: state => state.blogDetails,
    }
}


