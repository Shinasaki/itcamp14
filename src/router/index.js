// App Section
import Vue from 'vue'
import Router from 'vue-router'

// Layout Section
import Header from '@components/Layouts/Header'
import Body from '@components/Layouts/Body'

// Body Section
import Index from '@components/Bodys/Index'
import Highlight from '@components/Bodys/Highlight'
import Camp from '@components/Bodys/Camp'
import Schedule from '@components/Bodys/Schedule'
import Register from '@components/Bodys/Register'


import Backend from '@components/Bodys/Backend'


Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      components: {
        header: Header,
        body: Body
      },
      children: [
        { path: '', component: Index, name: 'Index' },
        { path: 'highlight', component: Highlight, name: 'Highlight' },
        { path: 'camp', component: Camp, name: 'Camp' },
        { path: 'schedule', component: Schedule, name: 'Schedule' },
        { path: 'register', component: Register, name: 'Register' },
        { path: 'backend', component: Backend, name: 'Backend' },
      ]
    }
  ]
})
