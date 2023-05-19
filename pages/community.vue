<template>
  <div class="wrap community__wrap">
    <!--fadeInRight-->
    <OpenRight :type="mainStore.openRightType" v-show="mainStore.openRightType"></OpenRight>
    <div class="container">
      <Header></Header>
      <div class="featuredTab" :class="mainStore.hideHeaderFooter ? 'none' : ''">

        <div class="featuredTab__list">
          <ul class="list">
            <li :class="featuredTab == n ? 'current' : ''" v-for="(type, n) in groups">
              <a href="#" class="btn" @click="featuredTabChange(n, type.name)">
                <span>{{ type }}</span>
              </a>
            </li>
          </ul>
        </div>
      </div>
      <main class="main" @scroll="onBodyScroll">
        <Transition appear>
          <swiper
            class="firstMainSwiper"
            @swiper="onSwiper"
            @slideChange="onSlideChange"
          >
            <swiper-slide v-for="(type, n) in groups">
              <div class="content" v-if="featuredTab == n">
                <section class="section sectionCommunity">
                  <div class="community__list">
                    <div class="list">
                      <div class="item" v-for="data in images">
                        <div class="info">
                          <div class="avatar">
                            <img class="img" v-lazy="'/img/default.png'">
                          </div>
                          <div class="title">
                            <div class="name">
                              <p>{{ data.user_name }}</p>
                            </div>
                            <span>{{ data.post_date }}</span>
                          </div>
                        </div>
                        <div class="description">
                          <p><a href="#" @click.prevent="clickTabChange(data.title_group)">{{ data.title_group }}</a></p>
                          <p>{{ data.title }}</p>
                        </div>
                        <div class="preview">
                          <ul class="img__list">
                            <li class="img" v-lazy:background-image="data.finish_preview_url"></li>
                            <li class="img" v-lazy:background-image="content.finish_img_url" v-for="(content, index) in data.content">
                              <div class="number" v-if="index == 5">{{ data.dt_count }}</div>
                            </li>
                          </ul>
                        </div>
                        <div class="tags">
                          <ul class="tag__list">
                            <li class="list__item" v-for="tag in data.tags">
                              <a href="#" class="btn">
                                <div class="title">
                                  <div class="tag">{{ tag }}</div>
                                </div>
                              </a>
                            </li>
                          </ul>
                        </div>
                        <div class="interaction">
                          <a href="#" class="btn">
                            <i class="icon icon__view"></i>
                            <span>{{ data.watch }}</span>
                          </a>
                          <a href="#" class="btn">
                            <i class="icon icon__great"></i>
                            <span>{{ data.like }}</span>
                          </a>
                          <a href="#" class="btn">
                            <i class="icon icon__message"></i>
                            <span>{{ data.reply }}</span>
                          </a>
                        </div>
                      </div>
                      <InfiniteLoading @infinite="loadList">
                        <template #complete style="text-center">
                          <span>查看更多 ٩(^ᴗ^)۶</span>
                        </template>
                      </InfiniteLoading>
                    </div>
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

const clickTabChange = (name) => {
  tabName.value = name

  if (groups.value) {
    groups.value.forEach((data, index) => {
      if (name == data) {
        featuredTab.value = index

        if (mainSwiper != null) {
          mainSwiper.value.slideTo(index)
        }
      }
    })
  }

  page.value = 1
  loadList()
}

const onSlideChange = (t) => {
  featuredTab.value = t.activeIndex
  getTabName(t.activeIndex)
}

const getTabName = (n) => {
  if (groups.value) {
    groups.value.forEach((data, index) => {
      if (n == index) {
        tabName.value = data
      }
    })
    page.value = 1
    loadList()
  }
}

const images = ref([])
const groups = ref([])
const page = ref(1)

const loadList = async ($state) => {
  const parmas = {
    page: page.value,
    tabName: tabName.value,
  }

  const { data, error } = await getAvImageList(parmas)

  if (!Array.isArray(data.value.data)) {
    return
  }

  if (typeof $state != 'undefined') {
    if (!data.value.data.length) {
      $state.complete();
    } else {
      page.value++
      $state.loaded();
    }
  }

  groups.value = data.value.groups
  images.value.push(...data.value.data)
}

loadList()
</script>