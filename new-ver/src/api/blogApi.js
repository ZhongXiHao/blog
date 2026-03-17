// mock api for blog posts
import request from "@/utils/request";

const TIMEOUT = 20; // 模拟网络请求延迟
const mockBlogs = {
    status: 200,
    data: [
        {
            id: "1",
            title: "感往昔事 嘆今日情",
            time: "Feb 02, 2023, 00:37"
        },
        {
            id: "2",
            title: "致那一段暗無天日的歲月",
            time: "Apr 28, 2023, 23:35"
        },
        {
            id: "3",
            title: "人間愁",
            time: "Jun 29, 2024, 22:53"
        },
        {
            id: "4",
            title: "To be or not to be",
            time: "Jun 04, 2025, 22:35"
        },
        {
            id: "5",
            title: "Silence is the BEST",
            time: "Jul 11, 2025, 23:43"
        },
        {
            id: "6",
            title: "種一棵樹最好的時間是十年前，其次是現在",
            time: "Jan 15, 2026, 23:26"
        },
        {
            id: "7",
            title: "人們酷肖他的時代遠勝於酷肖他們的生身父母",
            time: "Mar 09, 2026, 00:11"
        }]
};

// import {blogCoreList, blogContentMap, formatTime} from '@/mock/blogMock';

//get blog list
export const getBlogListApi = async () => {
    console.log('Fetching blog list from API...');
    return await request.get('/blogs')
};

//get blog details by id
export const getBlogDetailsApi = async (id) => {
    return await request.get('/blogs/' + id);
};