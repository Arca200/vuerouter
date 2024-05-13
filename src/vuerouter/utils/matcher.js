import {routeMap} from './map.js'
import {createRoute} from "./route.js";

export function matcher(routes) {
    const pathMap = routeMap(routes)

    function addRoute(parentOrRoute, route) {
        const parent = (typeof parentOrRoute !== 'object') ? pathMap[parentOrRoute] : undefined
        routeMap([route || parentOrRoute], pathMap, parent)
    }

    function addRoutes(newRoutes) {
        routeMap(newRoutes, pathMap)
    }

    function getRoutes() {
        return pathMap
    }

    function match(location) {
        location = typeof location === 'string' ? {path: location} : location
        return createRoute(pathMap[location.path], location)
    }

    return {
        match,
        addRoute,
        getRoutes,
        addRoutes
    }
}
