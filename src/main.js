// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import VueRouter from 'vue-router'
import VueResource from 'vue-resource'
import Index from './components/index.vue'

Vue.use(VueRouter)
Vue.use(VueResource)

Vue.config.productionTip = false

// const routes = [
//   {path: '/', component: Index}
// ]

// 设置路由
const router = new VueRouter({
  routes: [
    {path: '/', component: Index}
  ]
})
/* eslint-disable no-new */
new Vue({
  el: '#index',
  router: router,
  render: c => c(Index)
})
// new Vue({
//   el: '#index',
//   router,
//   template: '<index/>',
//   component: {Index}
// }).$mount('#index')
