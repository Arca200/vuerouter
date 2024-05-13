import createRouter from '../vuerouter/index.js'
import about from '../components/about.vue'
import parent from '../components/parent.vue'
import child from '../components/child.vue'

const routes = [
  {
    path: '/about',
    name: 'About',
    component: about,
  },
  {
    path: '/parent',
    name: 'Parent',
    component: parent,
    children: [
      {
        path: 'child',
        name: 'Child',
        component: child
      }
    ]
  }
]
const router = new createRouter({
  mode: 'hash',
  routes
})
export default router