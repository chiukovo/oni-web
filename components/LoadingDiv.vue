<template>
<div class="loading-div">
  <div class="circle"></div>
  <div class="container">
    <div class="dot dot1"></div>
    <div class="dot dot2"></div>
    <div class="dot dot3"></div>
  </div>
</div>
</template>

<script setup>
import { useMainStore } from '@/stores/main'
const mainStore = useMainStore()

//關
//mainStore.divLoading = false

</script>

<style scoped>
.loading-div {
  width: 100%;
  height: 50px;
  text-align: center;
  z-index: 999;
}
.dot{
  width: 10px;
  height: 10px;
  display: inline-block;
  border-radius: 100%;
}
.dot1{
  background-color: #1abc9c;
  animation: jump-up 0.6s 0.1s linear infinite;
}
.dot2{
  background-color: #ffd64a;
  animation: jump-up 0.6s 0.2s linear infinite;
}
.dot3{
  background-color: #e867af;
  animation: jump-up 0.6s 0.3s linear infinite;
}
@keyframes jump-up{
  50%{
    transform: translate(0,15px);
  }
}
</style>