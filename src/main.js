// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import VueRouter from 'vue-router'
import VueResource from 'vue-resource'
import App from './App.vue'
import Joke from './components/Joke.vue'
import Photo from './components/bsbdj/Photo.vue'
import Punster from './components/bsbdj/Punster.vue'
import Video from './components/bsbdj/Video.vue'
import Voice from './components/bsbdj/Voice.vue'

Vue.use(VueRouter)
Vue.use(VueResource)

Vue.config.productionTip = false

// 设置路由
const router = new VueRouter({
  routes: [
    {path: '/', redirect: '/joke'},
    {path: '/joke', component: Joke},
    {path: '/photo', component: Photo},
    {path: '/punster', component: Punster},
    {path: '/video', component: Video},
    {path: '/voice', component: Voice}
  ]
})
/* eslint-disable no-new */
new Vue({
  el: '#index',
  router,
  template: '<App/>',
  components: {App}
})
