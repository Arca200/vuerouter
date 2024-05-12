import { RouterSymbol } from './symbol.js'
import RouterView from './RouterView.vue'
import RouterLink from './RouterLink.vue'

function createRouter (options) {
  const { mode, routes } = options
  const router = {
    mode,
    routes,
    install (vue) {
      vue.provide(RouterSymbol, router)
      vue.component('RouterView', RouterView)
      vue.component('RouterLink', RouterLink)
    }
  }
  return router
}

export default createRouter