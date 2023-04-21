<template>
  <div id="root">
    <Loading v-show="mainStore.pageLoading"></Loading>
    <slot />
  </div>
</template>

<script setup>
import { useMainStore } from '@/stores/main'
const mainStore = useMainStore()

onMounted(() => {
  setTimeout(() => {
    mainStore.pageLoading = false
  }, 500)
})
</script>

<style>
.style1-enter-active,
.style1-leave-active {
  transition: opacity 0.3s ease;
}

.style1-enter-from,
.style1-leave-to {
  opacity: 0;
}

@-webkit-keyframes fadeIn {
  from {
      opacity: 0;
  }
  to {
      opacity: 1;
  }
}
@keyframes fadeIn {
  from {
      opacity: 0;
  }
  to {
      opacity: 1;
  }
}
.img[lazy=loaded] {
  -webkit-animation-duration: 1s;
  animation-duration: 1s;
  -webkit-animation-fill-mode: both;
  animation-fill-mode: both;
  -webkit-animation-name: fadeIn;
  animation-name: fadeIn;
}
.img[lazy=loading] {
  margin: auto;
}
.img[lazy-progressive=true] {
  width: 100%!important;
  margin: auto;
}
.img[lazy=error] {
  border-radius: 2px;
  -webkit-animation-duration: 1s;
  animation-duration: 1s;
  -webkit-animation-fill-mode: both;
  animation-fill-mode: both;
  -webkit-animation-name: fadeIn;
  animation-name: fadeIn;
}
</style>