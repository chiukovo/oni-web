<template>
  <div class="wrap">
    <div class="container">
      <Header></Header>
      <div class="featuredTab" :class="mainStore.hideHeaderFooter ? 'none' : ''">

        <div class="featuredTab__list">
          <ul class="list">
            <li :class="featuredTab == n ? 'current' : ''" v-for="(type, n) in titleGroup">
              <a href="#" class="btn" @click="featuredTabChange(n, type.name)">
                <span>{{ type.name }}</span>
              </a>
            </li>
          </ul>
        </div>
        <a href="#" class="featuredTab__btn" @click="discoverMenu = !discoverMenu">
          <img src="~/assets/img/ic_menu.svg" alt="更多推荐">
        </a>
      </div>
      <main class="main" @scroll="onBodyScroll">
        <Transition appear>
          <swiper
            class="firstMainSwiper"
            @swiper="onSwiper"
            @slideChange="onSlideChange"
          >
            <swiper-slide v-for="(type, n) in titleGroup">
              <div class="content" v-if="featuredTab == n">
                <section class="section sectionVideoFocus">
                  <div class="featuredVideoFocus">
                    <Posts :tabName="tabName"></Posts>
                  </div>
                </section>
              </div>
            </swiper-slide>
          </swiper>
        </Transition>
      </main>
    </div>
    <FooterTabbar></FooterTabbar>
    <!--video detail-->
    <Video :code="mainStore.videoCode" v-if="mainStore.videoCode != ''"></Video>
  </div>
</template>

<script setup>
import { useMainStore } from '@/stores/main'
const mainStore = useMainStore()
const { onBodyScroll } = usePublic()

const mainSwiper = ref(null)
const onSwiper = (swiper) => {
  mainSwiper.value = swiper
}

const featuredTab = ref(0)
const tabName = ref('')
const featuredTabChange = (n, name) => {
  featuredTab.value = n
  tabName.value = name

  if (mainSwiper != null) {
    mainSwiper.value.slideTo(n)
  }
}
const onSlideChange = (t) => {
  featuredTab.value = t.activeIndex
  getTabName(t.activeIndex)
}

const getTabName = (n) => {
  if (titleGroup.value) {
    titleGroup.value.forEach((data, index) => {
      if (n == index) {
        tabName.value = data.name
      }
    })
  }
}

const discoverMenu = ref(false)
const { data: titleGroup, error } = await getTitleGroup()

</script>