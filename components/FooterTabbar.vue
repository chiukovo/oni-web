<template>
  <div class="footerTabbar" :class="mainStore.hideHeaderFooter ? 'none' : ''">
    <NuxtLink class="btn current" to="/_template/demo">
      <div class="icon icon__1"></div>
      <div class="title">精选</div>
    </NuxtLink>
    <NuxtLink class="btn" to="/_template/discover">
      <div class="icon icon__2"></div>
      <div class="title">发现</div>
    </NuxtLink>
    <NuxtLink class="btn">
      <div class="icon icon__3"></div>
      <div class="title">上传</div>
    </NuxtLink>
    <NuxtLink class="btn" to="/_template/community">
      <div class="icon icon__4"></div>
      <div class="title">社区</div>
    </NuxtLink>
    <NuxtLink class="btn">
      <div class="icon icon__5"></div>
      <div class="title">我的</div>
    </NuxtLink>
  </div>
</template>

<script setup>
import { useMainStore } from '@/stores/main'
const mainStore = useMainStore()
</script>