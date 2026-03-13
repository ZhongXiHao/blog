import {getBlogDetailsApi, getBlogListApi} from "@/api/blogApi";
import {Toast} from "vant";
import {formatTime} from '@/mock/blogMock';

export default {
    namespaced: true,
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
                const filteredList = res.filter(item => item.visible === true).map(item => (
                    {
                        ...item,
                        formattedPostedAt: formatTime(item.postedAt)
                    })
                )
                context.commit('setBlogList', filteredList)
            } catch (error) {
                Toast(error.message || 'Failed to fetch blog list')
            }
        },
        async getBlogDetailsAction (context, blogId) {
            try {
                const res = await getBlogDetailsApi(blogId)
                // console.log(context.getters.getBlogList)
                if (res) {
                    await context.dispatch('getBlogListAction')
                    const blogCore = context.state.blogList.find(blog => blog.id === parseInt(blogId))
                    context.commit('setBlogDetails',
                        {
                            title: blogCore.title,
                            content: res,
                            formattedUpdatedAt: formatTime(blogCore.updatedAt)
                        })
                } else {
                    Toast('Blog not found')
                }
                console.log(context.state.blogDetails)
            } catch (error) {
                Toast(error.message || 'Failed to fetch blog details')
            }
            return context.state.blogDetails
        }
    },
    getters: {
        getBlogList: state => state.blogList,
        getBlogDetails: state => state.blogDetails
    }
}