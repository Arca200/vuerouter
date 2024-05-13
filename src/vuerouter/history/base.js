import {START} from "../utils/route.js";

export class History {
    constructor(router) {
        this.router = router
        this.currentRoute = START
        this.listeners = []
    }

    setupListeners() {

    }

    transitionTo(location, onComplete) {
        let route = this.router.match(location);
        this.currentRoute = route;
        // 更新URL
        onComplete && onComplete(route)
        this.ensureURL()
    }

    uninstall() {
        this.listeners.forEach(listener => {
            listener()
        })
        this.listeners = []
        this.currentRoute = ''
    }
}