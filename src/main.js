// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import Fuse from 'fuse.js'
//const $ = require('jquery')

require('milligram/dist/milligram.css')

var fuse = new Fuse(['jairo'], {})

console.log(fuse.search('jairo'))

Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  template: '<App/>',
  components: { App }
})
