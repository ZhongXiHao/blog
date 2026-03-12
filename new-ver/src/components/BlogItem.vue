<script>
export default {
  name: "BlogItem"
}
</script>

<template>
  <div class="blog-item">
    <!--    left slot for title-->
    <div class="blog-time">
      <slot name="title">default title</slot>
    </div>

    <!--    right slot for timestamp-->
    <div class="blog-timestamp">
      <slot name="timestamp">default timestamp</slot>
    </div>
  </div>
</template>

<style scoped lang="less">
.blog-item {
  display: flex;
  justify-content: space-between;
  align-items: flex-start; /* 适配多行标题 */
  border: 1px solid #999;
  border-radius: 4px;
  padding: 16px 20px;
  margin-bottom: 12px;
  background-color: #f5f5f5;
  font-family: "Times New Roman", serif;
}

.blog-title {
  font-size: 22px;
  color: #333;
  line-height: 1.5;
  max-width: 70%;
}

.blog-time {
  font-size: 18px;
  color: #333;
  white-space: nowrap;
  align-self: center; /* 单行时垂直居中 */
}
</style>