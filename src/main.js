// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import Vuex from 'vuex'
import VueRouter from 'vue-router'
import App from './App.vue'
import Axios from 'axios'
import ElementUI from 'element-ui'
import routers from './common/routes'

import 'element-ui/lib/theme-chalk/index.css'

Vue.use(ElementUI)
Vue.use(VueRouter)
Vue.use(Vuex)

Vue.config.productionTip = false
Vue.prototype.$http = Axios

const router = new VueRouter(routers)
const store = new Vuex.Store({
  state: {
    count: 0
  },
  mutations: {
    increment: function (state) {
      state.count++
    }
  }
})
/* eslint-disable no-new */
new Vue({
  el: '#index',
  router,
  store,
  template: '<App/>',
  components: {App}
})
