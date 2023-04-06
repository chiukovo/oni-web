<template>
  <Html>
    <Body>
      <pull-refresh v-model="pullLoading" @refresh="onRefresh" :disabled="disabledPullLoading">
        <NuxtLayout>
          <NuxtLoadingIndicator :duration="3000" :throttle="400" />
          <NuxtPage />
        </NuxtLayout>
      </pull-refresh>
    </Body>
  </Html>
</template>

<script setup>
import { useMainStore } from '@/stores/main'
import { useWindowScroll } from '@vueuse/core'
const pullLoading = ref(false)
const disabledPullLoading = ref(false)
const mainStore = useMainStore()

watch(() => mainStore.nowHeight, function(newVal, oldVal) {
  if (newVal > 0) {
    disabledPullLoading.value = true
  } else {
    disabledPullLoading.value = false
  }
})

const onRefresh = () => {
  setTimeout(() => {
    pullLoading.value = false
  }, 1000)
}

</script>