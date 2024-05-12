<template>
  <div id="outer">
    <div>
      <RouterLink to="home">Home</RouterLink>
      &nbsp;
      <RouterLink to="about">About</RouterLink>
    </div>

    <RouterView></RouterView>
  </div>
</template>
<script setup>
import RouterView from './vuerouter/RouterView.vue'
</script>
<style scoped>
#outer {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}
</style>
