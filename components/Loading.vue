<template>
<div class="loading__wrap">
  <div class="spinner"></div>
</div>
</template>

<script setup>
import { useMainStore } from '@/stores/main'
const mainStore = useMainStore()

//關
// mainStore.pageLoading = false

</script>