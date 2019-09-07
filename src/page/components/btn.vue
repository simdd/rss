<template>
  <section class="component-btn" @click.stop="add">
    <div class="btn">
      <span v-if="adding" class="load">
        <i></i>
        <i></i>
        <i></i>
        <i></i>
      </span>
      <span v-else class="add">+</span>
    </div>
    <input
      ref="ipt"
      class="link"
      :class="{'hide': !visible}"
      type="text"
      placeholder="输入要订阅的url"
      @keydown.enter="enter"
    />
  </section>
</template>

<script>
export default {
  name: 'btn',

  props: {
    adding: {
      type: Boolean,
      default: false
    }
  },

  data() {
    return {
      visible: false
    }
  },

  methods: {
    enter(e) {
      const url = e.target.value
      this.$emit('add', url)
      this.visible = false
    },

    add() {
      if (this.adding) {
        return
      }
      this.visible = true
      this.$refs.ipt.focus()
      this.$refs.ipt.value = ''
    }
  },

  mounted() {
    document.addEventListener('click', () => {
      this.visible = false
    })
  }
}
</script>

<style lang="less" scoped>
.component-btn {
  position: fixed;
  bottom: 10px;
  left: 10px;
  z-index: 10;

  .btn {
    display: flex;
    justify-content: center;
    align-items: center;
    width: 30px;
    height: 30px;
    border-radius: 50%;
    background: #cccccc;
    transition: 300ms;
    box-shadow: 1px 1px 1px #bbbbbb;

    &:hover {
      background: #bbbbbb;
    }

    .add {
      font-size: 14px;
      color: #777777;
      cursor: pointer;
    }

    .load {
      position: relative;
      display: inline-block;
      font-size: 20px;
      width: 14px;
      height: 14px;
      transform: rotate(45deg);
      animation: antRotate 1.2s infinite linear;
      cursor: not-allowed;

      i {
        width: 6px;
        height: 6px;
        border-radius: 100%;
        background-color: #999999;
        transform: scale(0.75);
        display: block;
        position: absolute;
        opacity: 0.3;
        animation: antSpinMove 1s infinite linear alternate;
        transform-origin: 50% 50%;
        &:nth-child(1) {
          left: 0;
          top: 0;
        }
        &:nth-child(2) {
          right: 0;
          top: 0;
          animation-delay: 0.4s;
        }
        &:nth-child(3) {
          right: 0;
          bottom: 0;
          animation-delay: 0.8s;
        }
        &:nth-child(4) {
          left: 0;
          bottom: 0;
          animation-delay: 1.2s;
        }
      }

      @keyframes antSpinMove {
        to {
          opacity: 1;
        }
      }
      @keyframes antRotate {
        to {
          transform: rotate(405deg);
        }
      }
    }
  }

  .link {
    position: absolute;
    bottom: 110%;
    left: 90%;
    display: flex;
    justify-content: flex-start;
    align-items: center;
    width: 200px;
    height: 30px;
    padding-left: 10px;
    padding-right: 10px;
    background: #dddddd;
    color: #333333;
    font-size: 12px;
    border: none;
    border-bottom: 1px dashed #777777;
    border-radius: 10px;
    box-shadow: 1px 1px 3px 1px #bbbbbb;
  }

  .hide {
    opacity: 0;
    width: 0;
    height: 0;
    overflow: hidden;
  }
}
</style>