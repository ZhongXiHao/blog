<script>
import blog from "@/store/modules/blog";

export default {
  name: "BlogItem",
  computed: {
    blog () {
      return blog
    }
  },
  props: {
    blogId: {
      type: [Number, String],
      required: true
    }
  }
}
</script>

<template>
  <router-link :to="{ name: 'blog', params: { id: blogId } }" class="blog-item-link">
    <div class="blog-item">
      <!--    left slot for title-->
      <div class="blog-title">
        <slot name="title">default title</slot>
      </div>
      <!--    right slot for timestamp-->
      <div class="blog-timestamp">
        <slot name="timestamp">default timestamp</slot>
      </div>
    </div>
  </router-link>
</template>

<style scoped lang="less">
.blog-item-link {
  text-decoration: none;
  color: var(--gray);
  gap: 0.5rem;

  &:hover {
    color: var(--blue);
  }

  .blog-item {
    display: flex;
    justify-content: space-between;
    align-items: center;
    border: 1px solid var(--gray);
    transition: color 0.2s ease-out;
    border-radius: 3px;
    padding: 1.2rem;
    gap: 1rem;

    .blog-title {
      text-align: center;
      font-size: 1.2rem;
      font-weight: bold;
      letter-spacing: -0.5px;
    }


  }
}

@media (max-width: 768px) {
  .blog-item-link {
    .blog-item {
      flex-direction: column;
      gap: 0.25rem;

      .blog-title {
        font-size: 1.1rem;
      }
    }
  }
}

@media (max-width: 480px) {
  .blog-item-link {
    .blog-item {
      padding: 0.8rem;

      .blog-title {
        font-size: 1rem;
      }
    }
  }
}
</style>