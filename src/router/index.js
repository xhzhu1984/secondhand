import Vue from 'vue'
import Router from 'vue-router'
import Index from 'components/Index'
import ProductDetail from 'components/ProductDetail'
import Sale from 'components/Sale'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Index',
      component: Index
    },
    {
      path: '/ProductDetail',
      name: 'ProductDetail',
      component: ProductDetail
    },
    {
      path: '/Sale',
      name: 'Sale',
      component: Sale
    }
  ]
})
