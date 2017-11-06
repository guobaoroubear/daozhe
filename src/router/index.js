import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/pages/home/home'
import List from '@/pages/list/list'
import CityList from '@/pages/citylist/citylist'
import Detail from '@/pages/detail/detail'

Vue.use(Router)

export default new Router({
  routes: [
      {
      path: '/',
      name: 'home',
      component: Home,
    },{
      path: "/list",
      name: "list",
      component: List,
    },{
      path: "/citylist",
      name: "citylist",
      component: CityList,
    },{
      path: "/detail",
      name: "detail",
      component: Detail,
    }
  ]
})
