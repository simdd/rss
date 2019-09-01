<template>
  <ul class="component-article" v-if="list && list.length">
    <li class="article" :key="index" v-for="(item, index) in list" @click="$emit('select', item)">{{item.title}}</li>
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
.component-article {
  display: flex;
  flex-direction: column;
  flex-shrink: 0;
  width: 100%;
  height: 100%;
  background: #eeeeee;

  .article {
    display: flex;
    justify-content: flex-start;
    align-items: center;
    flex-shrink: 0;
    font-size: 12px;
    color: #444444;
    width: 100%;
    height: 80px;
    border-bottom: 1px dashed #aaaaaa;
    padding-left: 10px;
    padding-right: 10px;
    cursor: pointer;
    transition: 300ms;

    &:hover {
      background: #dddddd;
    }
  }
}
</style>