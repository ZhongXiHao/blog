<script>
import HeaderWithTitleAndIcon from "@/components/HeaderWithTitleAndIcon.vue";
import {mapActions, mapGetters} from 'vuex';
import FooterWithPrevAndNextBlog from "@/components/FooterWithPrevAndNextBlog.vue";

export default {
  name: 'BlogPageView',
  components: {FooterWithPrevAndNextBlog, HeaderWithTitleAndIcon},
  data () {
    return {
      blogDetails: {},
      renderedBlogContent: '',
    }
  },
  async mounted () {

  },
  async created () {
    try {
      await this.getBlogDetailsAction(this.$route.params.id);
      this.blogDetails = this.getBlogDetails
      console.log(this.blogDetails)
      this.renderBlogContent()
    } catch (error) {
      if (error.code === 404) {
        await this.$router.push('/404')
      } else {
        console.error('Failed to fetch blog details:', error);
      }
    }
  },
  watch: {
    '$route.params.id': async function (newId) {
      await this.getBlogDetailsAction(newId);
      this.blogDetails = this.getBlogDetails
      this.renderBlogContent()
    }
  },
  methods: {
    ...mapActions('Blog', ['getBlogDetailsAction', 'getBlogListAction']),
    renderBlogContent: function () {
      // console.log(this.blogDetails);
      const tmpRenderedBlogContent = document.createElement('div');
      this.blogDetails.content.split('\n').forEach(paragraph => {
        paragraph = "　　" + paragraph.replace(/\n/g, "<br>　　");
        const p = document.createElement('p');
        p.innerHTML = paragraph;
        tmpRenderedBlogContent.appendChild(p);
      })
      this.renderedBlogContent = tmpRenderedBlogContent.innerHTML;
    },
  },
  computed: {
    ...mapGetters('Blog', ['getBlogDetails', 'getBlogList']),
  }

}
</script>

<template>
  <div class="blog-details">
    <div v-if="renderedBlogContent">
      <header-with-title-and-icon>
        <template #header-title>
          {{ blogDetails.title }}
        </template>
      </header-with-title-and-icon>
      <p class="blog-meta">Last Edited At {{ blogDetails.formattedUpdatedAt }}</p>
      <div class="blog-content" v-html="renderedBlogContent"></div>
      <FooterWithPrevAndNextBlog
          :prev-blog="blogDetails.prevBlog"
          :next-blog="blogDetails.nextBlog"
      >
      </FooterWithPrevAndNextBlog>
    </div>
  </div>
</template>

<style scoped lang="less">
.blog-details {
  max-width: 900px;
  margin: 20px auto;
  //padding: 0 20px;

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

@media (max-width: 768px) {
  .blog-details {
    .blog-content {
      font-size: 1rem;
    }
  }
}
</style>