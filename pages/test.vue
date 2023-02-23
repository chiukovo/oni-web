<template>
  <div>
    <ClientOnly>
      <van-tabs v-model:active="active"  :before-change="beforeChange">
        <van-tab v-for="index in 5" :title="'标签 ' + index">
          内容 {{ index }}
        </van-tab>
        <van-tab title="out">
          <template #title> <van-icon name="more-o" /></template>
        </van-tab>
      </van-tabs>
    </ClientOnly>
  </div>
</template>

<script setup>
  const active = ref(0)
  const beforeChange = (index) => {
    if (index === 5) {
      console.log('click')
      return false;
    }

    return new Promise((resolve) => {
      resolve(true);
    });
  }
</script>