import {getBlogDetailsApi, getBlogListApi} from "@/api/blogApi";
import {Toast} from "vant";
import {formatTime} from '@/mock/blogMock';

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
                    const blogCore = context.state.blogList.find(blog => blog.id === parseInt(blogId))
                    const currentIndex = context.state.blogList.findIndex(blog => blog.id === parseInt(blogId));
                    // set the previous blog (only id and title)
                    let prevBlog = null; // null means no previous blog
                    if (currentIndex > 0) {
                        prevBlog = context.state.blogList[currentIndex - 1];
                    }
                    // set the next blog (only id and title)
                    let nextBlog = null; // null means no next blog
                    if (currentIndex < context.state.blogList.length - 1) {
                        nextBlog = context.state.blogList[currentIndex + 1];
                    }
                    context.commit('setBlogDetails',
                        {
                            id: blogId,
                            title: blogCore.title,
                            content: res.data.content,
                            formattedUpdatedAt: formatTime(blogCore.postedAt),
                            prevBlog: prevBlog,
                            nextBlog: nextBlog
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
        getBlogDetails: state => state.blogDetails,
    }
}


