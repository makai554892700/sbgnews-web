// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import Vuex from 'vuex'
import VueRouter from 'vue-router'
import App from './App.vue'
import Axios from 'axios'
import ElementUI from 'element-ui'
import Joke from './components/Joke.vue'
import Photo from './components/bsbdj/Photo.vue'
import Punster from './components/bsbdj/Punster.vue'
import Video from './components/bsbdj/Video.vue'
import Voice from './components/bsbdj/Voice.vue'
import Login from './components/Login.vue'
import Mine from './components/Mine.vue'

import 'element-ui/lib/theme-chalk/index.css'

Vue.use(ElementUI)
Vue.use(VueRouter)
Vue.use(Vuex)

Vue.config.productionTip = false
Vue.prototype.$http = Axios

// 设置路由
const router = new VueRouter({
  routes: [
    {name: '/', path: '/', redirect: '/joke'},
    {name: '/login', path: '/login', component: Login},
    {name: '/mine', path: '/mine', component: Mine},
    {name: '/joke', path: '/joke', component: Joke},
    {name: '/photo', path: '/photo', component: Photo},
    {name: '/punster', path: '/punster', component: Punster},
    {name: '/video', path: '/video', component: Video},
    {name: '/voice', path: '/voice', component: Voice}
  ]
})
const store = new Vuex.Store({
  state: {
    count: 0
  },
  mutations: {
    increment (state) {
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
