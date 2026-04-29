<template>
  <footer
    class="deck-global-footer pointer-events-none absolute bottom-2 left-4 right-4 z-30 flex flex-wrap items-center justify-between gap-x-4 gap-y-1 text-[11px] leading-snug"
    aria-label="Copyright and license"
  >
    <span class="pointer-events-auto">© 2026 Dhaval Thakkar · CC&nbsp;BY‑NC‑ND&nbsp;4.0</span>
    <a
      class="pointer-events-auto underline decoration-from-font underline-offset-2 transition-opacity"
      :href="termsHref"
      target="_blank"
      rel="noopener noreferrer"
    >
      Terms
    </a>
  </footer>
</template>

<script setup lang="ts">
const termsHref = `${import.meta.env.BASE_URL}terms.html`
</script>
