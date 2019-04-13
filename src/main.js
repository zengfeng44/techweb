// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'

import $ from 'jquery' //jquery

import iView from 'iview'
import 'iview/dist/styles/iview.css'
Vue.use(iView)

import VueAwesomeSwiper from 'vue-awesome-swiper'
import 'swiper/dist/css/swiper.css'
Vue.use(VueAwesomeSwiper, /* { default global options } */)

import axios from "axios"
Vue.prototype.$axios=axios
Vue.prototype.HOSTS='/api'

import md5 from 'js-md5';
Vue.prototype.$md5 = md5;

import globCmd from './components/commond'
Vue.prototype.gCmd=globCmd


Vue.config.productionTip = false

/* eslint-disable no-new */

new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
