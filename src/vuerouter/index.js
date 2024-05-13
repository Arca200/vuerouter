import {RouterSymbol} from './symbol.js'
import RouterView from './component/RouterView.vue'
import RouterLink from './component/RouterLink.vue'
import {matcher} from "./utils/matcher.js"
import {HTMLHistory} from "./history/html.js"
import {HashHistory} from "./history/hash.js"
import {reactive} from "vue";
import {watchEffect} from "vue";

function createRouter(options) {
    const {mode, routes} = options
    const match = matcher(routes)

    const router = {
        mode,
        routes,
        history: reactive({}),
        route: reactive({}),
        addRoute: match.addRoute,
        addRoutes: match.addRoutes,
        getRoutes: match.getRoutes,
        match: match.match,
        install(vue) {
            vue.provide(RouterSymbol, router)
            vue.component('RouterView', RouterView)
            vue.component('RouterLink', RouterLink)
            router.history.value.setupListeners()
            watchEffect(() => {
                router.route.value = router.history.value.currentRoute
            })
        }
    }

    let history
    if (mode === 'hash') {
        history = new HashHistory(router)
    } else if (mode === 'history') {
        history = new HTMLHistory(router)
    }

    router.history.value = history
    return router
}

export default createRouter