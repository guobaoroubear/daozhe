import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/pages/home/home'
import List from '@/pages/list/list'
import OnedayList from '@/pages/onedaylist/onedaylist'
import CityList from '@/pages/citylist/citylist'
import Detail from '@/pages/detail/detail'
import Detailswiper from '@/pages/detail/components/detailswiper'
import Scenicmap from '@/pages/detail/components/scenicmap'
import Scenicintroduction from '@/pages/detail/components/scenicintroduction'

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
      path: "/onedaylist",
      name: "onedaylist",
      component: OnedayList,
    },{
      path: "/citylist",
      name: "citylist",
      component: CityList,
    },{
      path: "/detail",
      name: "detail",
      component: Detail,
    },{
      path: "/detail/detailswiper",
      name: "detailswiper",
      component: Detailswiper,
    },
    {
      path: "/detail/scenicmap",
      name: "scenicmap",
      component: Scenicmap,
    },
    {
      path: "/detail/scenicintroduction",
      name: "scenicintroduction",
      component: Scenicintroduction,
    }

  ]
})
