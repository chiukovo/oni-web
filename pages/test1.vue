<template>
  <div class="wrap">
    <div class="container">
      <Header></Header>
      <FeaturedTab></FeaturedTab>
      <main class="main">
        <Transition name="style1">
          <Swiper>
            <SwiperSlide :key="1">
              <Swiper
                :direction="'vertical'"
                :slides-per-view="'auto'"
                :freeMode="true"
                :mousewheel="true"
                :scrollbar="{ draggable: true }"
              >
                <SwiperSlide :key="'in'">
                  <div class="item" v-for="n in 10">
                            <div class="info">
                              <div class="avatar">
                                <img class="img" src="https://api.bcyapp005.com/storage/files/shares/HH/3/f533de42-4806-4108-beec-612bc6e47b5c.jpg">
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
                              <img class="img" src="https://api.bcyapp005.com/storage/files/shares/HH/3/f533de42-4806-4108-beec-612bc6e47b5c.jpg">
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
                </SwiperSlide>
              </Swiper>
            </SwiperSlide>
            <SwiperSlide :key="2">
              <div class="item" v-for="n in 10">
                            <div class="info">
                              <div class="avatar">
                                <img class="img" src="https://api.bcyapp005.com/storage/files/shares/HH/3/f533de42-4806-4108-beec-612bc6e47b5c.jpg">
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
                              <img class="img" src="https://api.bcyapp005.com/storage/files/shares/HH/3/f533de42-4806-4108-beec-612bc6e47b5c.jpg">
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
            </SwiperSlide>
            <SwiperSlide :key="3">
<div class="item" v-for="n in 10">
                            <div class="info">
                              <div class="avatar">
                                <img class="img" src="https://api.bcyapp005.com/storage/files/shares/HH/3/f533de42-4806-4108-beec-612bc6e47b5c.jpg">
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
                              <img class="img" src="https://api.bcyapp005.com/storage/files/shares/HH/3/f533de42-4806-4108-beec-612bc6e47b5c.jpg">
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
            </SwiperSlide>
          </Swiper>
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
const tab = ref(1)

</script>

<style lang="sass">
.swiper
  width: 100%
  height: 100%
</style>