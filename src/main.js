import Vue from 'vue'
import App from './App.vue'
import router from './router'

require('./assets/css/global.css')

new Vue({
  el: '#app',
  router,
  render: h => h(App)
})
