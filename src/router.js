import Vue from 'vue'
import Router from 'vue-router'
import Home from './views/Home.vue'
import About from './views/About.vue'
import Experience from './views/Experience.vue'
import Family from './views/personals/Family.vue'
import Pets from './views/personals/Pets.vue'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home
    },
    {
      path: '/about',
      name: 'about',
      component: About
    },
    {
      path: '/experience',
      name: 'experience',
      component: Experience
    },
    {
      path: '/personals/family',
      name: 'family',
      component: Family
    },
    {
      path: '/personals/pets',
      name: 'pets',
      component: Pets
    }
  ]
})
