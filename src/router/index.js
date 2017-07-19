import Vue from 'vue'
import Router from 'vue-router'
import Hello from '@/components/Hello'
import LatestDynamic  from '@/page/latestDynamic/latestDynamic'
import App from '@/App'
Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Hello',
      component: Hello,
    },
    {
        path: '/latestDynamic',
        component: LatestDynamic
    },
  ]
})
