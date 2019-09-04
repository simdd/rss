<template>
  <section class="component-btn" @click.stop="visible = true">
    <span class="btn">+</span>
    <input
      v-if="visible"
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
    font-size: 14px;
    color: #777777;
    background: #cccccc;
    transition: 300ms;
    cursor: pointer;
    box-shadow: 1px 1px 1px #bbbbbb;

    &:hover {
      background: #bbbbbb;
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
    display: none;
  }
}
</style>