import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '@/views/Home.vue'
import Meals from '@/views/Meals.vue'
import Restaurants from '@/views/Restaurants.vue'
import SecretRecipe from '@/views/SecretRecipe.vue'
import LandingPageOne from '@/views/LandingPageOne.vue'
import LandingPageTwo from '@/views/LandingPageTwo.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/meals',
    name: 'Meals',
    component: Meals
  },
  {
    path: '/restaurants',
    name: 'Restaurants',
    component: Restaurants
  },
  {
    path: '/recipe',
    name: 'SecretRecipe',
    component: SecretRecipe,
    props: true
  },
  {
    path: '/landingOne',
    name: 'LandingPageOne',
    component: LandingPageOne
  },
  {
    path: '/landingTwo',
    name: 'LandingPageTwo',
    component: LandingPageTwo
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
