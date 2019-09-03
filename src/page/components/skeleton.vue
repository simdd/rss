<template>
  <section class="component-skeleton">
    <div class="skeleton-title"></div>
    <div class="skeleton-content"></div>
  </section>
</template>

<script>
export default {
  name: 'skeleton',

  data() {
    return {}
  }
}
</script>

<style lang="less" scoped>
.component-skeleton {
  padding-top: 20px;

  .skeleton-title {
    width: 80%;
    height: 40px;
    transform-origin: left;
    background: #cccccc;
    animation: skeleton-stretch 500ms -300ms linear infinite alternate;
  }

  .skeleton-content {
    width: 70%;
    height: 30px;
    margin-top: 10px;
    transform-origin: left;
    background: #dddddd;
    animation: skeleton-stretch 500ms linear infinite alternate;
  }

  @keyframes skeleton-stretch {
    from {
      transform: scalex(1);
    }
    to {
      transform: scalex(0.2);
    }
  }
}
</style>