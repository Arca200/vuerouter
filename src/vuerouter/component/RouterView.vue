<template>
    <div id='RouterView'></div>
</template>
<script setup>
import {h, inject, reactive, render, watchEffect, markRaw, shallowRef, getCurrentInstance} from "vue";
import {RouterSymbol} from "../symbol.js";
import _ from "lodash";

const router = inject(RouterSymbol)
const match = reactive({})
watchEffect(() => {
    const route = router.route.value
    const matched = route.matched
    const container = document.getElementById('RouterView')
    if (container) {
        while (container.firstChild) {
            container.removeChild(container.firstChild);
        }
    }
    if (matched) {
        for (let i = 0; i < matched.length; ++i) {
            const el = document.createElement('div')
            match.value = matched[i]
            const normalObj = _.cloneDeep(match.value.components)
            const component = h(normalObj)
            render(component, el)
            container.appendChild(el)
        }
    }
})
</script>
<style scoped>

</style>