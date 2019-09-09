<template>
  <ul class="component-subjects">
    <template v-if="list && list.length">
      <li
        class="subject"
        :class="{'active': sid === item._id}"
        :key="item._id"
        v-for="item in list"
        @click="$emit('select', item)"
      >
        <span class="tit">{{item.title}}</span>
        <svg
          viewBox="64 64 896 896"
          focusable="false"
          class="delete"
          data-icon="close-circle"
          width="1em"
          height="1em"
          fill="currentColor"
          aria-hidden="true"
          @click.stop="$emit('delete', item)"
        >
          <path
            d="M685.4 354.8c0-4.4-3.6-8-8-8l-66 .3L512 465.6l-99.3-118.4-66.1-.3c-4.4 0-8 3.5-8 8 0 1.9.7 3.7 1.9 5.2l130.1 155L340.5 670a8.32 8.32 0 0 0-1.9 5.2c0 4.4 3.6 8 8 8l66.1-.3L512 564.4l99.3 118.4 66 .3c4.4 0 8-3.5 8-8 0-1.9-.7-3.7-1.9-5.2L553.5 515l130.1-155c1.2-1.4 1.8-3.3 1.8-5.2z"
          />
          <path
            d="M512 65C264.6 65 64 265.6 64 513s200.6 448 448 448 448-200.6 448-448S759.4 65 512 65zm0 820c-205.4 0-372-166.6-372-372s166.6-372 372-372 372 166.6 372 372-166.6 372-372 372z"
          />
        </svg>
      </li>
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
  position: relative;
  display: flex;
  flex-direction: column;
  flex-shrink: 0;
  width: 100%;
  height: 100%;
  background: #dddddd;
  overflow-y: auto;

  &::-webkit-scrollbar {
    width: 0;
  }

  .subject {
    position: relative;
    display: flex;
    justify-content: flex-start;
    align-items: center;
    flex-shrink: 0;
    width: 100%;
    height: 40px;
    border-bottom: 1px dashed #aaaaaa;
    padding-left: 10px;
    padding-right: 10px;
    cursor: pointer;
    transition: 300ms;

    &:hover {
      background: #cccccc;

      .delete {
        display: flex;
      }
    }

    .tit {
      color: #666666;
      font-size: 12px;
    }

    .delete {
      display: none;
      position: absolute;
      top: 50%;
      right: 6px;
      opacity: 0.3;
      transform: translateY(-50%);
      transition: 300ms;

      &:hover {
        opacity: 0.7;
      }
    }
  }

  .active {
    .tit {
      color: #444444;
      font-weight: 600;
    }
  }
}
</style>