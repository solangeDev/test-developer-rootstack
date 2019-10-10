import Vue from 'vue'
import Router from 'vue-router'
import Container from '../components/container'
import Container2 from '../components/container2'
import Container3 from '../components/container3'
import Container4 from '../components/container4'
import Container5 from '../components/container5'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/exercise-1',
      name: 'container',
      component: Container
    },
    {
      path: '/exercise-2',
      name: 'container2',
      component: Container2
    },
    {
      path: '/exercise-3',
      name: 'container3',
      component: Container3
    },
    {
      path: '/exercise-4',
      name: 'container4',
      component: Container4
    },
     {
       path: '/exercise-5',
       name: 'container5',
       component: Container5
     }
  ]
})

