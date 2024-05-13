export function routeMap(routes, oldPathMap, parentRoute) {
    const pathMap = oldPathMap || Object.create(null);
    routes.forEach(route => {
        addRouteRecord(pathMap, route, parentRoute)
    })
    return pathMap
}

// 添加路由记录
function addRouteRecord(pathMap, route, parent) {
    const {path, name} = route

    const normalizedPath = normalizePath(path, parent)

    const record = {
        path: normalizedPath, // 规范化后的路径
        regex: "", // 利用path-to-regexp包生成用来匹配path的增强正则对象，用来匹配动态路由 （/a/:b）
        components: route.component, // 保存路由组件，省略了命名视图解析
        name,
        parent, // 父路由记录
        redirect: route.redirect, // 重定向的路由配置对象
        beforeEnter: route.beforeEnter, // 路由独享的守卫
        meta: route.meta || {}, // 元信息
        props: route.props == null ? {} : route.props// 动态路由传参
    }

    if (route.children) {
        route.children.forEach(child => {
            addRouteRecord(pathMap, child, record)
        })
    }

    if (!pathMap[record.path]) {
        pathMap[record.path] = record
    }
}

// 规格化路径
function normalizePath(
    path,
    parent
) {
    if (path[0] === '/') return path
    if (!parent) return path
    return `${parent.path}/${path}`.replace(/\/\//g, '/')
}
