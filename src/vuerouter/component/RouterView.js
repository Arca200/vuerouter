export default {
    name: "RouterView",
    functional: true, // 函数式组件
    render(h, {parent, data}) {
        // parent：对父组件的引用
        // data：传递给组件的整个数据对象，作为 createElement 的第二个参数传入组件

        // 标识当前渲染组件为router-view
        data.routerView = true

        let route = parent.$route
        let matched;
        if (route.matched) {
            matched = route.matched[route.matched.length - 1]
        }

        if (!matched) return h();

        return h(matched.components, data)
    }
}
