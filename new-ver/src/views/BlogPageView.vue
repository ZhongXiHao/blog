<script>
import HeaderWithTitleAndIcon from "@/components/HeaderWithTitleAndIcon.vue";
import {mapActions, mapGetters} from 'vuex';

export default {
  name: 'BlogPageView',
  components: {HeaderWithTitleAndIcon},
  data () {
    return {
      blogDetails: {},
      renderedBlogContent: ''
    }
  },
  async created () {
    this.blogDetails = await this.getBlogDetailsAction(this.$route.params.id);
    this.renderBlogContent()
  },
  methods: {
    ...mapActions('Blog', ['getBlogDetailsAction']),
    renderBlogContent: function () {
      console.log(this.blogDetails);
      const tmpRenderedBlogContent = document.createElement('div');
      this.blogDetails.content.split('\n').forEach(paragraph => {
        paragraph = "　　" + paragraph.replace(/\n/g, "<br>　　");
        const p = document.createElement('p');
        p.innerHTML = paragraph;
        tmpRenderedBlogContent.appendChild(p);
      })
      this.renderedBlogContent = tmpRenderedBlogContent.innerHTML;

    }
  },
  computed: {
    ...mapGetters('Blog', ['getBlogDetails'])
  }

}
</script>

<template>
  <div class="blog-details">
    <header-with-title-and-icon>
      <template #header-title>
        {{ blogDetails.title }}
      </template>
    </header-with-title-and-icon>
    <p class="blog-meta">Last Edited At {{ blogDetails.formattedUpdatedAt }}</p>
    <div class="blog-content" v-html="renderedBlogContent"></div>
  </div>
</template>

<style scoped lang="less">
.blog-details {
  max-width: 900px;
  margin: 20px auto;
  padding: 0 20px;

  .blog-meta {
    color: #888;
    font-size: 1rem;
    margin-bottom: 20px;
  }

  .blog-content {
    font-size: 1.2rem;
    line-height: 1.5;
  }
}
</style>