<template>
  <section class="component-preview">
    <div v-if="text.length" class="markdown" v-html="text"></div>
    <div v-else class="empty">
      <img draggable="false" class="img" src="../assets/empty.svg" alt />
    </div>
  </section>
</template>

<script>
export default {
  name: 'preview',

  props: {
    text: {
      type: String,
      default: ''
    }
  },

  data() {
    return {}
  }
}
</script>

<style lang="less">
.component-preview {
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 100%;
  overflow-y: auto;
  background: #ffffff;

  .empty {
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100%;
    height: 100%;

    .img {
      width: 100px;
      user-select: none;
      opacity: 0.6;
    }
  }
}
</style>

<style lang="less">
@import url(./markdown.less);
</style>