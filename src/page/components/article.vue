<template>
  <ul class="component-article">
    <template v-if="list && list.length">
      <li
        class="article"
        :class="{'active': aidx === index}"
        :key="index"
        v-for="(item, index) in list"
        @click="$emit('select', item, index)"
      >{{item.title}}</li>
    </template>
    <v-skeleton></v-skeleton>
  </ul>
</template>

<script>
import Skeleton from './skeleton.vue'

export default {
  name: 'articles',

  components: {
    'v-skeleton': Skeleton
  },

  props: {
    aidx: {
      type: Number,
      default: -1
    },

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
  overflow-y: auto;

  .article {
    display: flex;
    justify-content: flex-start;
    align-items: center;
    flex-shrink: 0;
    font-size: 12px;
    color: #666666;
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

  .active {
    color: #444444;
    font-weight: 600;
  }
}
</style>