import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/:id',
      name: 'Home',
      component: require('@/views/Home.vue')
    },
    {
      path: '*',
      redirect: '/hello'
    }
  ]
})
