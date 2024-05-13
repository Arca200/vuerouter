export function createRoute(record, location) {
    let route = {
        name: location.name || (record && record.name),
        meta: (record && record.meta) || {},
        path: location.path || "/",
        hash: location.hash || "",
        query: location.query || {},
        params: location.params || {},
        fullPath: location.path || "/",
        matched: record && formatMatch(record),
    };
    return Object.freeze(route);
}

// 初始状态的起始路由
export const START = createRoute(null, {
    path: '/'
})

// 关联所有路由记录
function formatMatch(record) {
    const res = []
    while (record) {
        res.unshift(record)
        record = record.parent
    }
    return res
}