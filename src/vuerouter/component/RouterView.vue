<template>
    <div id='RouterView'></div>
</template>
<script setup>
import {h, inject, reactive, render, watchEffect, markRaw, shallowRef} from "vue";
import {RouterSymbol} from "../symbol.js";
import _ from "lodash";

const router = inject(RouterSymbol)
const match = reactive({})
watchEffect(() => {
    const route = router.route.value
    if (route.matched) {
        match.value = route.matched[route.matched.length - 1]
        const normalObj = _.cloneDeep(match.value.components)
        const component = h(normalObj)
        render(component, document.getElementById('RouterView'))
    }
})
</script>
<style scoped>

</style>