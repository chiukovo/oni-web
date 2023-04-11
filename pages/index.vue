<template>
  <div class="wrap">
    <div class="container">
      <Header></Header>
      <div class="featuredTab" :class="mainStore.hideHeaderFooter ? 'none' : ''">
        <div class="featuredTab__list">
          <ul class="list">
            <li :class="featuredTab == n ? 'current' : ''" v-for="n in 10">
              <a href="#" class="btn" @click="featuredTabChange(n - 1)">
                <span>精选 {{ n }}</span>
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
            <swiper-slide>
              <div class="content">
                <section class="section sectionVideoFocus">
                  <div class="featuredVideoFocus">
                    <Posts></Posts>
                  </div>
                </section>
              </div>
            </swiper-slide>
            <swiper-slide>
              <div class="content">
                <section class="sectionMoney">
                  <img src="/_nuxt/assets/img/not-use/slider.jpg" alt="">
                </section>
                <section class="sectionButton">
                  <div class="featuredPart">
                    <a href="/_template/firstNovel" class="btn">
                      <img :src="'/_nuxt/assets/img/btn_first_1.png'">
                    </a>
                    <a href="/_template/firstVideo" class="btn">
                      <img :src="'/_nuxt/assets/img/btn_first_2.png'">
                    </a>
                    <a href="/_template/firstComics" class="btn">
                      <img :src="'/_nuxt/assets/img/btn_first_3.png'">
                    </a>
                  </div>
                </section>
                <section class="section sectionVideo">
                  <div class="section__title">
                    <div class="title">最新新作</div>
                    <a href="#" class="btn btn__more">更多</a>
                  </div>
                  <div class="featuredVideo">
                    <Posts></Posts>
                  </div>
                </section>
              </div>
            </swiper-slide>
            <swiper-slide>
              <div class="content">
                <section class="sectionMoney">
                  <img src="/_nuxt/assets/img/not-use/slider.jpg" alt="">
                </section>
                <section class="section sectionVideo mt:10">
                  <div class="featuredVideo">
                    <Posts></Posts>
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
const { onBodyScroll } = usePublic()

const mainSwiper = ref(null)
const onSwiper = (swiper) => {
  mainSwiper.value = swiper
}

const onSlideChange = (t) => {
  featuredTab.value = t.activeIndex + 1
}


const featuredTab = ref(1)
const featuredTabChange = (n) => {
  featuredTab.value = n

  if (mainSwiper != null) {
    mainSwiper.value.slideTo(n)
  }
}

const discoverMenu = ref(false)

const loadMore = () => {
  console.log('more')
}
</script>