// Setting Plugin
import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

// Importing Templates

const products = () => import(`./../pages/productsList.vue`)

// Setting Routes

const routes = [
  {
    path: '/',
    name: 'products',
    component: products
  },
  {
    path: '/:category',
    name: 'products-category',
    component: products
  }
]


// Setting VueRouter
const router = new VueRouter({
  routes // short for `routes: routes`
})

// Exporting Routes -> src/main.js
export default router