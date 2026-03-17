<script>
export default {
  name: 'FooterWithPrevAndNextBlog',
  props: {
    prevBlog: {
      type: Object,
      default: null
    },
    nextBlog: {
      type: Object,
      default: null
    }
  }
}
</script>

<template>
  <div class="footer">
    <!--    show prev blog link if prevBlog exists, otherwise show "No Previous Blog"-->
    <router-link v-if="prevBlog" :to="{ name: 'blog', params: { id: prevBlog.id } }" class="prev-link">
      <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg" class="icon">
        <path
            d="M29 16C29 16.2652 28.8946 16.5196 28.7071 16.7071C28.5196 16.8946 28.2652 17 28 17H11.4137L18.7075 24.2925C18.8004 24.3854 18.8741 24.4957 18.9244 24.6171C18.9747 24.7385 19.0006 24.8686 19.0006 25C19.0006 25.1314 18.9747 25.2615 18.9244 25.3829C18.8741 25.5043 18.8004 25.6146 18.7075 25.7075C18.6146 25.8004 18.5043 25.8741 18.3829 25.9244C18.2615 25.9747 18.1314 26.0006 18 26.0006C17.8686 26.0006 17.7385 25.9747 17.6171 25.9244C17.4957 25.8741 17.3854 25.8004 17.2925 25.7075L8.2925 16.7075C8.19952 16.6146 8.12576 16.5043 8.07544 16.3829C8.02512 16.2615 7.99921 16.1314 7.99921 16C7.99921 15.8686 8.02512 15.7385 8.07544 15.6171C8.12576 15.4957 8.19952 15.3854 8.2925 15.2925L17.2925 6.2925C17.3854 6.19959 17.4957 6.12589 17.6171 6.07561C17.7385 6.02532 17.8686 5.99944 18 5.99944C18.1314 5.99944 18.2615 6.02532 18.3829 6.07561C18.5043 6.12589 18.6146 6.19959 18.7075 6.2925C18.8004 6.38541 18.8741 6.49571 18.9244 6.6171C18.9747 6.7385 19.0006 6.86861 19.0006 7C19.0006 7.13139 18.9747 7.2615 18.9244 7.3829C18.8741 7.50429 18.8004 7.61459 18.7075 7.7075L11.4137 15H28C28.2652 15 28.5196 15.1054 28.7071 15.2929C28.8946 15.4804 29 15.7348 29 16ZM5 4C4.73478 4 4.48043 4.10536 4.29289 4.29289C4.10536 4.48043 4 4.73478 4 5V27C4 27.2652 4.10536 27.5196 4.29289 27.7071C4.48043 27.8946 4.73478 28 5 28C5.26522 28 5.51957 27.8946 5.70711 27.7071C5.89464 27.5196 6 27.2652 6 27V5C6 4.73478 5.89464 4.48043 5.70711 4.29289C5.51957 4.10536 5.26522 4 5 4Z"
            fill="var(--gray)"/>
      </svg>
      <h2 class="prev-blog-title">
        {{ prevBlog.title }}
      </h2>
    </router-link>

    <div class="no-prev-blog" v-else>
      <h2 class="prev-blog-title">
        No Previous Blog
      </h2>
    </div>

    <!--    show next blog link if nextBlog exists, otherwise show "No Next Blog"-->
    <router-link v-if="nextBlog" :to="{ name: 'blog', params: { id: nextBlog.id } }" class="next-link">
      <h2 class="next-blog-title">
        {{ nextBlog.title }}
      </h2>
      <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg" class="icon">
        <path
            d="M23.7075 15.2925C23.8005 15.3854 23.8742 15.4957 23.9246 15.6171C23.9749 15.7385 24.0008 15.8686 24.0008 16C24.0008 16.1314 23.9749 16.2615 23.9246 16.3829C23.8742 16.5043 23.8005 16.6146 23.7075 16.7075L14.7075 25.7075C14.6146 25.8004 14.5043 25.8741 14.3829 25.9244C14.2615 25.9747 14.1314 26.0006 14 26.0006C13.8686 26.0006 13.7385 25.9747 13.6171 25.9244C13.4957 25.8741 13.3854 25.8004 13.2925 25.7075C13.1996 25.6146 13.1259 25.5043 13.0756 25.3829C13.0253 25.2615 12.9994 25.1314 12.9994 25C12.9994 24.8686 13.0253 24.7385 13.0756 24.6171C13.1259 24.4957 13.1996 24.3854 13.2925 24.2925L20.5863 17H4C3.73478 17 3.48043 16.8946 3.29289 16.7071C3.10536 16.5196 3 16.2652 3 16C3 15.7348 3.10536 15.4804 3.29289 15.2929C3.48043 15.1054 3.73478 15 4 15H20.5863L13.2925 7.7075C13.1049 7.51986 12.9994 7.26536 12.9994 7C12.9994 6.73464 13.1049 6.48014 13.2925 6.2925C13.4801 6.10486 13.7346 5.99944 14 5.99944C14.2654 5.99944 14.5199 6.10486 14.7075 6.2925L23.7075 15.2925ZM27 4C26.7348 4 26.4804 4.10536 26.2929 4.29289C26.1054 4.48043 26 4.73478 26 5V27C26 27.2652 26.1054 27.5196 26.2929 27.7071C26.4804 27.8946 26.7348 28 27 28C27.2652 28 27.5196 27.8946 27.7071 27.7071C27.8946 27.5196 28 27.2652 28 27V5C28 4.73478 27.8946 4.48043 27.7071 4.29289C27.5196 4.10536 27.2652 4 27 4Z"
            fill="var(--gray)"/>
      </svg>
    </router-link>

    <div class="no-next-blog" v-else>
      <h2 class="next-blog-title">
        No Next Blog
      </h2>
    </div>
  </div>
</template>

<style scoped lang="less">
.footer {
  display: flex;
  justify-content: space-between;
  margin-top: 20px;

  .prev-link, .next-link, .no-prev-blog, .no-next-blog {
    text-decoration: none;
    color: var(--gray);
    width: 48%;
    border: 1px solid var(--gray);
    border-radius: 3px;
    padding: 1rem;
    display: flex;
    align-items: center;
    // transition for color and icon fill simultaneously when hovering
    transition: color 0.2s ease-out;


    .icon path {
      transition: fill 0.2s ease-out;
    }
  }


  .no-prev-blog, .no-next-blog {
    cursor: not-allowed;
  }

  .prev-link, .next-link {
    align-items: center;

    &:hover {
      color: var(--blue);

      .icon path {
        fill: var(--blue);
      }
    }

    .icon {
      min-width: 32px;
    }
  }

  .prev-link, .no-prev-blog {
    justify-content: flex-start;

    .prev-blog-title {
      margin-left: 0.5rem;
      font-weight: bold;
      //max-width: 70%;
    }
  }

  .next-link, .no-next-blog {
    justify-content: flex-end;

    .next-blog-title {
      margin-right: 0.5rem;
      font-weight: bold;
      //max-width: 70%;

    }
  }
}

@media (max-width: 768px) {
  .footer {
    gap: 10px;

    .prev-link, .next-link, .no-prev-blog, .no-next-blog {
      width: 100%;
      padding: 0.8rem;


    }

    .prev-link, .next-link {
      .icon {
        max-width: 24px !important;
      }
    }

    .prev-link {

      .prev-blog-title {
        margin-left: 0.25rem;
        font-weight: bold;
        font-size: 1.25rem;
        //max-width: 70%;
      }
    }

    .next-link {

      .next-blog-title {
        margin-right: 0.25rem;
        font-weight: bold;
        font-size: 1.25rem;
        //max-width: 70%;
      }
    }
  }
}

@media (max-width: 480px) {
  .footer {
    .prev-link, .next-link, .no-prev-blog, .no-next-blog {
      padding: 0.5rem;
    }

    .prev-link {
      .prev-blog-title {
        font-size: 1rem;
      }
    }

    .next-link {
      .next-blog-title {
        font-size: 1rem;
      }
    }
  }
}
</style>