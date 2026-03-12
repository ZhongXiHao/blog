<script>
import BlogListView from './BlogListView.vue'
import BlogItem from "@/components/BlogItem.vue";
import HeaderWithTitleAndIcon from "@/components/HeaderWithTitleAndIcon.vue";
import {mapActions, mapGetters} from "vuex";

export default {
  name: 'BlogListView',
  components: {
    HeaderWithTitleAndIcon,
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
  methods: {
    ...mapActions('Blog', ['getBlogListAction']),
  },
  computed: {
    ...mapGetters('Blog', ['getBlogList']),
  }
}
</script>

<template>
  <div class="blog-list">
    <header-with-title-and-icon>
      <template #header-title>
        Blog List
      </template>
    </header-with-title-and-icon>
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

  .blog-items {
    display: flex;
    flex-direction: column;
    gap: 15px;
  }
}


</style>