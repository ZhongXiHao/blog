<script>
export default {
  name: "HeaderWithTitleAndIcon",

}
</script>

<template>
  <div class="header">
    <div class="header-title">
      <slot name="header-title"></slot>
    </div>
    <router-link to="/" class="header-link">
      <svg class="header-icon" width="65.6" height="40" viewBox="0 0 65.6 40" xmlns="http://www.w3.org/2000/svg"><g id="svgGroup" stroke-linecap="round" fill-rule="evenodd" font-size="9pt" stroke="#444444" stroke-width="0.25mm" fill="#444444" style="stroke:#444444;stroke-width:0.25mm;fill:#444444"><path d="M 39.65 38 L 43.1 38 L 43.1 40 L 26.95 40 L 20.95 40 L 20.95 38 L 25.75 38 L 17.2 23.8 L 7 38 L 11.7 38 L 11.7 40 L 0 40 L 0 38 L 4.3 38 L 15.95 21.75 L 4.1 2 L 0.65 2 L 0.65 0 L 16.8 0 L 22.7 0 L 22.7 2 L 18 2 L 25.2 13.95 L 33.8 2 L 29 2 L 29 0 L 40.7 0 L 40.7 2 L 36.5 2 L 26.45 16 L 39.65 38 Z M 65.6 2 L 61.6 2 L 61.6 38 L 65.6 38 L 65.6 40 L 46.1 40 L 46.1 38 L 50.1 38 L 50.1 2 L 46.1 2 L 46.1 0 L 65.6 0 L 65.6 2 Z M 28.25 38 L 37.15 38 L 15.5 2 L 6.6 2 L 28.25 38 Z M 59.35 38 L 59.35 2 L 52.35 2 L 52.35 38 L 59.35 38 Z"/></g></svg>
    </router-link>
  </div>
</template>

<style scoped lang="less">

.header {
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 24px;
  gap: 20px;

  .header-link {
    //icon 在link中居中
    display: flex;
    justify-content: center;
    align-items: center;
    .header-icon {
      width: 100%;
      height: 2.25rem;
    }
  }

  .header-title {
    font-size: 2.25rem;
    font-family: "Times New Roman", serif;
    text-align: left;
    font-weight: bold;
  }
}

@media (max-width: 768px) {
  .header {
    gap: 10px;

    .header-icon{
      height: 2rem;
    }
    .header-title {
      font-size: 1.75rem;
    }
  }
}

@media (max-width: 480px) {
  .header {
    align-items: flex-start;
    margin-bottom: 16px;
    .header-link{
      .header-icon{
        height: 2rem;
      }
    }
    .header-title {
      font-size: 1.5rem;
    }
  }
}
</style>