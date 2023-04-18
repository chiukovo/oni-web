<template>
  <div class="list">
    <div class="item" v-for="data in videoList">
      <div class="info">
        <div class="avatar">
          <img class="img" v-lazy="'https://api.bcyapp005.com/storage/files/shares/HH/3/f533de42-4806-4108-beec-612bc6e47b5c.jpg'">
        </div>
        <div class="title">
          <div class="name">
            <p>{{ data.title }}</p>
          </div>
          <span>{{ data.post_date }}</span>
        </div>
      </div>
      <div class="preview" @click="router.push({ path: '/video/' + data.code })">
        <div class="view"><span>{{ data.watch }}</span>次播放</div>
        <img class="img" v-lazy="data.finish_preview_url">
      </div>
      <div class="interaction">
        <a href="#" class="btn">
          <i class="icon icon__love"></i>
          <span>{{ data.like }}</span>
        </a>
        <a href="#" class="btn">
          <i class="icon icon__message"></i>
          <span>{{ data.reply }}</span>
        </a>
        <a href="#" class="btn">
          <i class="icon icon__share"></i>
          <span>分享</span>
        </a>
      </div>
    </div>
    <InfiniteLoading @infinite="loadList">
      <template #complete style="text-center">
        <span>查看更多 ٩(^ᴗ^)۶</span>
      </template>
    </InfiniteLoading>
  </div>
</template>

<script setup>
import { useMainStore } from '@/stores/main'
const router = useRouter()

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
  const parmas = {
    tabName: props.tabName,
    page: page.value
  }

  const { data, error } = await getVideoList(parmas)
  
  if (!Array.isArray(data.value)) {
    return
  }

  if (!data.value.length) {
    $state.complete();
  } else {
    page.value++
    $state.loaded();
  }

  videoList.value.push(...data.value)
}

</script>