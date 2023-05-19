<template>
  <header class="searchHeader" :class="mainStore.hideHeaderFooter ? 'none' : ''">
    <div class="searchHeader__everyday" @click.prevent="doOpenRight('', 'everyDay')">
      <a href="#!" class="btn everyday__btn">
        <img src="/img/ic_searchHeader_1.svg" alt="每日精选">
      </a>
    </div>
    <a href="#" class="searchHeader__search" @click.prevent="doOpenRight('', 'search')">
      <div class="search__input">
        <span>找你所爱视频</span>
        <img src="/img/ic_search.svg">
      </div>
    </a>
    <div class="searchHeader__recharge">
      <NuxtLink to="/_template/shop" class="btn recharge__btn">
        <img src="/img/ic_searchHeader_2.svg" alt="充值">
      </NuxtLink>
    </div>
  </header>
</template>

<script setup>
import { useMainStore } from '@/stores/main'
const mainStore = useMainStore()
const { doOpenRight } = usePublic()

</script>