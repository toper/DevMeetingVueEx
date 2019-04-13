import Vue from 'vue'
import Router from 'vue-router'
import Home from './views/Home.vue'
import Vote from './views/Vote.vue'
import Score from './views/Score.vue'
import Setting from './views/Setting.vue'

Vue.use(Router)

export default new Router({
  routes: [{
    path: '/',
    name: 'home',
    component: Home
  },
  {
    path: '/about',
    name: 'about',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ './views/About.vue')
  },
  {
    path: '/vote',
    name: 'vote',
    component: Vote,
    beforeEnter: MyGuard
  },
  {
    path: '/score',
    name: 'score',
    component: Score
  },
  {
    path: '/setting',
    name: 'setting',
    component: () => import('@/views/Setting.vue')
  }
  ]
})

function MyGuard (to, from, next) {
  console.log(to, from)
  next({
    path: '/'
  })
};
