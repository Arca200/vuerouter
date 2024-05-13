import {History} from "./base.js"

export class HashHistory extends History {
    constructor(router) {
        super(router)
    }

    setupListeners() {
        const handleRoutingEvent = () => {
            let location = getHash()
            this.transitionTo(location)
        }
        window.addEventListener('hashchange', handleRoutingEvent)
        this.listeners.push(() => {
            window.removeEventListener('hashchange', handleRoutingEvent)
        })
    }

    ensureURL() {
        window.location.hash = this.currentRoute.fullPath
    }

    // 路由跳转方法
    push(location, onComplete) {
        this.transitionTo(location, onComplete)
    }

// 路由前进后退
    go(n) {
        window.history.go(n)
    }

// 跳转到指定URL，替换history栈中最后一个记录,无记录的跳转
    replace(location, onComplete) {
        this.transitionTo(location, (route) => {
            window.location.replace(getUrl(route.fullPath))
            onComplete && onComplete(route)
        })
    }

// 获取当前路由
    getCurrentLocation() {
        return getHash()
    }
}

export function getHash() {
    let href = window.location.href
    const index = href.indexOf('#')
    if (index < 0) {
        return '/'
    }
    href = href.slice(index + 1)
    return href
}

export function getUrl(path) {
    const href = window.location.href
    const i = href.indexOf('#')
    const base = i >= 0 ? href.slice(0, i) : href
    return `${base}#${path}`
}