<script>

import {defineComponent} from "vue";
import HeaderWithTitleAndIcon from "@/components/HeaderWithTitleAndIcon.vue";

export default defineComponent({
  components: {HeaderWithTitleAndIcon}
})
</script>

<template>
  <div class="not-found-page">

    <HeaderWithTitleAndIcon>
      <template #header-title>
        404 Not Found
      </template>
    </HeaderWithTitleAndIcon>
    <p>
      Please check if the URL is correct or click the ICON to return to the homepage.
    </p>

  </div>
</template>

<style scoped lang="less">

</style>