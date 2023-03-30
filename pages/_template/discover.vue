<template>
  <div class="wrap discover__wrap">
    <div class="container">
      <header class="pageHeader" :class="none ? 'none' : ''">
        <div class="pageHeader__back">
          <a href="#" class="btn btn__back" @click="authorMore = false">
            <img src="/_nuxt/assets/img/ic_back.svg">
          </a>
        </div>
        <div class="pageHeader__titleTab">
          <button class="btn" :class="discoverTab == '0' ? 'current' : ''" @click="discoverTab = 0">
            <div class="title">原创短视频</div>
          </button>
          <button class="btn" :class="discoverTab == '1' ? 'current' : ''" @click="discoverTab = 1">
            <div class="title">创作者</div>
          </button>
        </div>
      </header>
      <main class="main">
        <Transition appear>
          <div class="content" @scroll="scroll" v-if="discoverTab == 0">
            <section class="section sectionDiscoverVideo">
              <Swiper
                :direction="'vertical'"
                class="discoverSwiper">
                <swiper-slide v-for="n in 5">
                    <div class="item">
                      <div class="floating">
                        <a href="#" class="floating__btn floating__love">
                          <i class="icon icon__love-w"></i>
                        </a>
                        <a href="#" class="floating__btn floating__money">
                          <i class="icon icon__money-w"></i>
                        </a>
                      </div>
                      <div class="preview">
                        <img class="img" src="/_nuxt/assets/img/getMoney_bg.jpg">
                      </div>
                      <div class="info">
                        <div class="avatar">
                          <img class="img" src="https://api.bcyapp005.com/storage/files/shares/HH/3/f533de42-4806-4108-beec-612bc6e47b5c.jpg">
                        </div>
                        <div class="title">
                          <div class="name">
                            <p>露脸女朋友 大一女生爱露脸 直拨镜头 露脸女朋友 露脸女朋友</p>
                          </div>
                          <span>88888888关注<i class="dot"></i>2551视频</span>
                        </div>
                      </div>
                      <div class="videoTitle">
                        <p>3/1露脸女朋友 大一女生爱露脸 直播镜头 露脸女朋友</p>
                      </div>
                    </div>
                </swiper-slide>
              </Swiper>
            </section>
          </div>
          <div class="content" @scroll="scroll" v-else>
            2
          </div>
        </Transition>
      </main>
    </div>
    <div class="footerTabbar" :class="none ? 'none' : ''">
      <NuxtLink class="btn" to="/_template/demo">
        <div class="icon icon__1"></div>
        <div class="title">精选</div>
      </NuxtLink>
      <NuxtLink class="btn current" to="/_template/discover">
        <div class="icon icon__2"></div>
        <div class="title">发现</div>
      </NuxtLink>
      <NuxtLink class="btn">
        <div class="icon icon__3"></div>
        <div class="title">上传</div>
      </NuxtLink>
      <NuxtLink class="btn">
        <div class="icon icon__4"></div>
        <div class="title">社区</div>
      </NuxtLink>
      <NuxtLink class="btn">
        <div class="icon icon__5"></div>
        <div class="title">我的</div>
      </NuxtLink>
    </div>
  </div>
</template>

<script>
  import { ref } from 'vue';
  import { Swiper, SwiperSlide } from 'swiper/vue';
  export default {
    data() {
      return {
        height: '',
        none: false,
        discoverTab: 0
      }
    },
    components: {
      Swiper,
      SwiperSlide,
    },
    methods: {
      scroll(e) {
        this.height = e.target.scrollTop;
      }
    },
    watch: {
      height: {
        handler(newValue, oldValue) {
          if(newValue > 100){
            if (newValue > oldValue) {
              this.none = true;
            } else {
              this.none = false;
            }
          }
        }
      }
    }
  };
</script>

<style lang="sass">
.swiper.discoverSwiper
  width: 100%
  height: 100%
</style>