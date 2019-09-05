<template>
  <section class="component-skeleton">
    <div class="skeleton-title"></div>
    <div class="skeleton-content"></div>
    <div class="skeleton-sub"></div>
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
    animation: skeleton-stretch 500ms -400ms linear infinite alternate;
  }

  .skeleton-content {
    width: 70%;
    height: 30px;
    margin-top: 10px;
    transform-origin: left;
    background: #dddccc;
    animation: skeleton-stretch 500ms -200ms linear infinite alternate;
  }

  .skeleton-sub {
    width: 90%;
    height: 20px;
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