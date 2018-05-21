import Vue from 'vue'
import Router from 'vue-router'

import page_team_cur from '@/pages/teampage/page_team_cur.vue'
import nav_team from '@/components/nav_team'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/team-cur',
      components: {
        nav_view: nav_team,
        page_view: page_team_cur
      }
    }
  ]
})
