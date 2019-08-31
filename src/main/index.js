import Vue from 'vue'
const { ipcRenderer } = window.require('electron')

import App from './index.vue'
import router from './router'
import store from '../store'

const vue = new Vue({
  render: h => h(App),
  store,
  router
}).$mount('#app')

window.ipc = ipcRenderer

export default vue
