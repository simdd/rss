import Vue from 'vue'

import App from './index.vue'
import apis from './apis'
import router from './router'
import store from '../store'

window.apis = apis

const vue = new Vue({
  render: h => h(App),
  store,
  router
}).$mount('#app')

export default vue
