<template>
  <router-view></router-view>
</template>

<script>
import Vue from 'vue'
const shell = window.require('electron').shell

export default Vue.extend({
  name: 'app',

  mounted() {
    document.addEventListener('click', function(event) {
      if (event.target.nodeName === 'A' && event.target.href) {
        event.preventDefault()
        shell.openExternal(event.target.href)
      }
    })
  }
})
</script>

<style lang="less">
</style>