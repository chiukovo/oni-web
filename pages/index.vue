<template>
  <div class="wrap">
    <!--fadeInRight-->
    <OpenRight :type="mainStore.openRightType" v-show="mainStore.openRightType"></OpenRight>
    <div class="container">
      <Header></Header>
      <main class="main" @scroll="onBodyScroll">
        <section class="sectionMoney">
          <swiper
            class="firstMainSwiper"
            :modules="[SwiperAutoplay, SwiperPagination]"
            :pagination="{clickable: true}"
            :autoHeight="true"
            :autoplay="{
              delay: 3000
            }"
          >
            <swiper-slide v-for="n in 10">
              <a href="" target="_blank">
                <img v-lazy="'/img/not-use/slider.jpg'">
              </a>
            </swiper-slide>
          </swiper>
        </section>
        <section class="sectionButton">
          <div class="featuredPart">
            <a href="#" class="btn" @click.prevent="doOpenRight('', 'everyDay')">
              <!--精选视频-->
              <img :src="'/img/btn_first_1.png'">
            </a>
            <a href="#" class="btn"  @click.prevent="doOpenRight('', 'randomVideo')">
              <!--站长推荐-->
              <img :src="'/img/btn_first_2.png'">
            </a>
            <a href="#" class="btn">
              <!--好站下载-->
              <img :src="'/img/btn_first_3.png'">
            </a>
          </div>
        </section>
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
  </div>
</template>

<script setup>
import { useMainStore } from '@/stores/main'
const mainStore = useMainStore()
const { onBodyScroll, doOpenRight } = usePublic()

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