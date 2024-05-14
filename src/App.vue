<template>
    <div id="outer">
        <div style="margin-bottom: 20px;margin-top: 20px">
            <RouterLink to="/">Home</RouterLink>
            &nbsp;|&nbsp;
            <RouterLink to="/about">About</RouterLink>
            &nbsp;|&nbsp;
            <RouterLink to="/parent">Parent</RouterLink>
            &nbsp;|&nbsp;
            <RouterLink to="/parent/child">Child</RouterLink>
        </div>

        <RouterView></RouterView>
    </div>
</template>
<script setup>

</script>
<style scoped>
#outer {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    font-family: Menlo;
}
</style>
