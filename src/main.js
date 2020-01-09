import Vue from 'vue'
import app from './app.vue'
import './style/main.css'
import a from './js/a.js'

a()

new Vue({
  el: '#app',
  render: h => h(app)
})
