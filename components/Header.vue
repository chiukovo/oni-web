<template>
  <header class="searchHeader" :class="mainStore.hideHeaderFooter ? 'none' : ''">
    <div class="searchHeader__everyday">
      <a href="/_template/everyDay" class="btn everyday__btn">
        <img src="~/assets/img/ic_searchHeader_1.svg" alt="每日精选">
      </a>
    </div>
    <a href="#" class="searchHeader__search">
      <div class="search__input">
        <span>视频｜创作者</span>
        <img src="~/assets/img/ic_search.svg">
      </div>
    </a>
    <div class="searchHeader__recharge">
      <a href="/_template/shop" class="btn recharge__btn">
        <img src="~/assets/img/ic_searchHeader_2.svg" alt="充值">
      </a>
    </div>
  </header>
</template>

<script setup>
import { useMainStore } from '@/stores/main'
const mainStore = useMainStore()

</script>