import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

export default new Router({
  base: '/app1/',
  // mode: 'history',
  routes: [
    {
      path: '/',
      component: () => import(/* webpackChunkName: "Home" */ './views/Home.vue'),
    },
    {
      path: '/about',
      component: () => import(/* webpackChunkName: "About" */ './views/About.vue'),
    }
  ]
})
