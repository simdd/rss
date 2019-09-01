<template>
  <section class="component-preview">{{text}}</section>
</template>

<script>
export default {
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

<style lang="less" scoped>
.component-preview {
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 100%;
  background: #ffffff;
}
</style>