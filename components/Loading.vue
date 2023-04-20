<template>
<div class="loading__wrap">
  <div class="loader">
    <div>
      loading
    </div>
    <div class="loader--dot"></div>
    <div class="loader--dot"></div>
    <div class="loader--dot"></div>
    <div class="loader--dot"></div>
    <div class="loader--dot"></div>
    <div class="loader--dot"></div>
  </div>
</div>
</template>

<script setup>
import { useMainStore } from '@/stores/main'
const mainStore = useMainStore()

//關
//mainStore.pageLoading = false

</script>