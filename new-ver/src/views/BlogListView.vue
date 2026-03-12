<script>
import BlogListView from './BlogListView.vue'
import request from "@/utils/request";
import {getBlogListApi} from "@/api/blogApi";
import BlogItem from "@/components/BlogItem.vue";
import {mapActions, mapGetters} from "vuex";

export default {
  name: 'BlogListView',
  components: {
    BlogItem,
    BlogListView
  },

  created () {
    this.getBlogListAction()
  },
  data () {
    return {
      blogs: []
    }
  },
  methods:{
    ...mapActions('Blog', ['getBlogListAction']),
  },
  computed:{
    ...mapGetters('Blog', ['getBlogList']),
  }
}
</script>

<template>
  <div class="blog-list">
    <h1 class="blog-list-title">Blog List</h1>
    <div class="blog-items">
      <BlogItem v-for="blog in getBlogList" :key="blog.id">
        <!--    left slot for title-->
        <template #title>
          {{ blog.title }}
        </template>
        <!--    right slot for timestamp-->
        <template #timestamp>
          {{ blog.time }}
        </template>
      </BlogItem>
    </div>
  </div>
</template>

<style scoped lang="less">
.blog-list {
  max-width: 900px;
  margin: 20px auto;
  padding: 0 20px;
}

.blog-list-title {
  font-size: 36px;
  font-family: "Times New Roman", serif;
  color: #333;
  margin-bottom: 24px;
}
</style>