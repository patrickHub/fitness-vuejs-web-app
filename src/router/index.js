import { createRouter, createWebHashHistory } from 'vue-router'
import ProductCatalogView from '../views/ProductCatalogView.vue'
import ProductDetailView from '../views/ProductDetailView.vue'
// import Products from '../data/Products.json'

const routes = [
  {
    path: '/',
    name: 'default',
    component: ProductCatalogView
  },
  {
    path: '/products',
    name: 'products',
    component: ProductCatalogView
  },

  {
    path: '/products/:id',
    name: 'productDetail',
    component: ProductDetailView,
    props: true
  },
  {
    path: '/about',
    name: 'about',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/AboutView.vue')
  }
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router
