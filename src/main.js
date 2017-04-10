import Vue from 'vue'
import Layout from './components/layout'
import VueRouter from 'vue-router'
import IndexPage from './pages/index'
import VueResource from 'vue-resource'
import DetailPage from './pages/detail'
import DetailAnaPage from './pages/detail/analysis'
import DetailCouPage from './pages/detail/count'
import DetailForPage from './pages/detail/forecast'
import DetailPubPage from './pages/detail/publish'

Vue.use(VueRouter) //全局启用路由
Vue.use(VueResource)  //全局启用插件

//在这里写的path全局路由出口都可以用
let routes = [
   {
     path: '/',
     component: IndexPage
   },
   {
     path: '/detail',
     component: DetailPage,
     redirect: '/detail/analysis', //访问/detail重定向到/detail/analysis
     children: [
          {
            path:'analysis',
            component: DetailAnaPage
          },
          {
            path:'count',
            component: DetailCouPage
          },
          {
            path:'forecast',
            component: DetailForPage
          },
          {
            path:'publish',
            component: DetailPubPage
          }
     ]
   }
]     

let router = new VueRouter({
	mode: 'history', //H5路由模式
  routes:routes
})

new Vue({
  el: '#app',
  router,
  template: '<Layout/>',
  components: { Layout }
})
