<template>
  <ul class="component-subjects" v-if="list && list.length">
    <li class="subject" :key="index" v-for="(item, index) in list">{{item.title}}</li>
  </ul>
</template>

<script>
export default {
  props: {
    list: {
      type: Array,
      default: () => []
    }
  },
  data() {
    return {}
  }
}
</script>

<style lang="less" scoped>
.component-subjects {
  display: flex;
  flex-direction: column;
  flex-shrink: 0;
  width: 100%;
  height: 100%;
  background: #dddddd;

  .subject {
    display: flex;
    justify-content: flex-start;
    align-items: center;
    flex-shrink: 0;
    width: 100%;
    height: 40px;
    font-size: 12px;
    border-bottom: 1px dashed #aaaaaa;
    padding-left: 10px;
    padding-right: 10px;
    cursor: pointer;
  }
}
</style>