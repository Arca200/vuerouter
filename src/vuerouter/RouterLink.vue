<template>
  <a :href="href">
    <slot></slot>
  </a>
</template>
<script setup>
import { inject } from 'vue'
import { RouterSymbol } from './symbol.js'

const props = defineProps({
  to: {
    type: String,
    required: true
  }
})
const router = inject(RouterSymbol)
const href = router.mode === 'hash' ? '#' + props.to : props.to
</script>


<style scoped>
a {
  text-decoration: none;
  color: black;
}

a:hover {
  color: #a3a3a3;
}
</style>