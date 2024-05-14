import {History} from './base'

export class HTMLHistory extends History {
    constructor(router) {
        // 继承父类
        super(router);
    }

    setupListeners() {
        // 路由监听回调
        const handleRoutingEvent = () => {

            this.transitionTo(getLocation());
        };

        window.addEventListener("popstate", handleRoutingEvent);
        this.listeners.push(() => {
            window.removeEventListener("popstate", handleRoutingEvent);
        });
    }

    ensureURL() {
        if (getLocation() !== this.currentRoute.fullPath) {
            window.history.pushState(
                {key: Date.now().toFixed(3)},
                "",
                this.currentRoute.fullPath
            );
        }
    }

    push(location, onComplete) {
        this.transitionTo(location, onComplete)
    }

    go(n) {
        window.history.go(n)
    }

    replace(location, onComplete) {
        this.transitionTo(location, (route) => {
            window.history.replaceState(window.history.state, '', route.fullPath)
            onComplete && onComplete(route)
        })
    }

    getCurrentLocation() {
        return getLocation()
    }
}

function getLocation() {
    let path = window.location.pathname;
    return path;
}
