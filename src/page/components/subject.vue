<template>
  <ul class="component-subjects">
    <template v-if="list && list.length">
      <li
        class="subject"
        :class="{'active': sid === item._id}"
        :key="item._id"
        v-for="item in list"
        @click="$emit('select', item)"
      >{{item.title}}</li>
    </template>
  </ul>
</template>

<script>
export default {
  name: 'subject',

  props: {
    sid: {
      type: String,
      default: ''
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
.component-subjects {
  display: flex;
  flex-direction: column;
  flex-shrink: 0;
  width: 100%;
  height: 100%;
  background: #dddddd;
  overflow-y: auto;

  .subject {
    display: flex;
    justify-content: flex-start;
    align-items: center;
    flex-shrink: 0;
    width: 100%;
    height: 40px;
    color: #666666;
    font-size: 12px;
    border-bottom: 1px dashed #aaaaaa;
    padding-left: 10px;
    padding-right: 10px;
    cursor: pointer;
    transition: 300ms;

    &:hover {
      background: #cccccc;
    }
  }

  .active {
    color: #444444;
    font-weight: 600;
  }
}
</style>