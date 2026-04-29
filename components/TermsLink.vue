<template>
  <a :href="href" target="_blank" rel="noopener noreferrer">
    <slot>Terms</slot>
  </a>
</template>

<script setup lang="ts">
const href = `${import.meta.env.BASE_URL}terms.html`
</script>
