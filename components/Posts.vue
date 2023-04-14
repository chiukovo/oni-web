<template>
  <div class="list">
    <div class="item" v-for="data in videoList">
      <div class="info">
        <div class="avatar">
          <img class="img" v-lazy="'https://api.bcyapp005.com/storage/files/shares/HH/3/f533de42-4806-4108-beec-612bc6e47b5c.jpg'">
        </div>
        <div class="title">
          <div class="name">
            <p>露脸女朋友 大一女生爱露脸 直拨镜头 露脸女朋友 露脸女朋友</p>
          </div>
          <span>2023-03-07</span>
        </div>
      </div>
      <div class="preview">
        <div class="view"><span>5w</span>次播放</div>
        <div class="time"><span>2:12</span></div>
        <img class="img" v-lazy="data.finish_preview_url">
      </div>
      <div class="interaction">
        <a href="#" class="btn">
          <i class="icon icon__love"></i>
          <span>14 132</span>
        </a>
        <a href="#" class="btn">
          <i class="icon icon__message"></i>
          <span>116</span>
        </a>
        <a href="#" class="btn">
          <i class="icon icon__share"></i>
          <span>分享</span>
        </a>
      </div>
    </div>
    <InfiniteLoading @infinite="loadList">
      <template #complete>
        <span>查看更多</span>
      </template>
    </InfiniteLoading>
  </div>
</template>

<script setup>
import { useMainStore } from '@/stores/main'
const mainStore = useMainStore()
const props = defineProps({
  tabName: {
    type: String,
    required: true
  }
})
const videoList = ref([])
const page = ref(1)

const loadList = async ($state) => {
  const { data, error } = await getVideoList()

  if (!data.length) {
    $state.complete();
  } else {
    page.value++
    $state.loaded();
  }

  videoList.value.push(...data)
}

</script>