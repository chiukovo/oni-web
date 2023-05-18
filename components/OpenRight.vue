<template>
  <Transition name="fadeInRight" appear>
    <Video :code="mainStore.videoCode" v-if="mainStore.videoCode != '' && type == 'video'"></Video>
    <EveryDay v-else-if="type == 'everyDay'"></EveryDay>
    <Search v-else-if="type == 'search'"></Search>
  </Transition>
</template>

<script setup>
import { useMainStore } from '@/stores/main'
const mainStore = useMainStore()

const props = defineProps({
  type: {
    type: String,
    required: true
  }
})

</script>