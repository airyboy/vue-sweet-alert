import Vue from 'vue'
import App from './App.vue'
import SweetAlert from './SweetAlert.vue'
require('./sweetalert2.scss')

console.log(SweetAlert)

new Vue({
  el: '#app',
  render: h => h(App)
})
