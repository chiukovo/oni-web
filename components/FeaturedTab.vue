<template>
  <div class="featuredTab" :class="mainStore.hideHeaderFooter ? 'none' : ''">
    <div class="featuredTab__list">
      <ul class="list">
        <li :class="mainStore.featuredTab == '0' ? 'current' : ''">
          <a href="#" class="btn" @click="mainStore.featuredTab = '0'">
            <span>关注</span>
          </a>
        </li>
        <li :class="mainStore.featuredTab == '1' ? 'current' : ''">
          <a href="#" class="btn" @click="mainStore.featuredTab = '1'">
            <span>推荐</span>
          </a>
        </li>
        <li :class="mainStore.featuredTab == '2' ? 'current' : ''">
          <a href="#" class="btn" @click="mainStore.featuredTab = '2'">
            <span>推荐</span>
          </a>
        </li>
        <li :class="mainStore.featuredTab == '3' ? 'current' : ''">
          <a href="#" class="btn" @click="mainStore.featuredTab = '3'">
            <span>推荐</span>
          </a>
        </li>
      </ul>
    </div>
    <a href="#" class="featuredTab__btn" @click="discoverMenu = !discoverMenu">
      <img src="~/assets/img/ic_menu.svg" alt="更多推荐">
    </a>
  </div>
</template>

<script setup>
import { useMainStore } from '@/stores/main'
const mainStore = useMainStore()
const discoverMenu = ref(false)
</script>