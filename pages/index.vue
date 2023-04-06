<template>
  <div class="wrap">
    <div class="container">
      <Header></Header>
      <FeaturedTab></FeaturedTab>
      <main class="main">
        <Transition name="style1">
          <Swiper>
            <swiper-slide :key="1">
              <Swiper
                :direction="'vertical'"
                :slides-per-view="'auto'"
                :freeMode="true"
                :mousewheel="true"
                :scrollbar="{ draggable: true }"
              >
                <swiper-slide :key="'in'">
                  <div class="content" @scroll="onBodyScroll">
                    <section class="section sectionVideoFocus">
                      <div class="featuredVideoFocus">
                        <div class="list">
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
                        </div>
                      </div>
                    </section>
                  </div>
                </swiper-slide>
              </Swiper>
            </swiper-slide>
            <swiper-slide :key="2">
              <div class="content" @scroll="onBodyScroll">
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
                    <div class="list">
                      <NuxtLink class="item" v-for="n in 2" to="/_template/videoDetail">
                        <div class="preview">
                          <div class="title">
                            <p>3/1露脸女朋友 大一女生爱露脸 直播镜头 露脸女朋友</p>
                          </div>
                          <div class="view"><span>5w</span>次播放</div>
                          <div class="time"><span>2:12</span></div>
                          <img class="img" src="https://api.bcyapp005.com/storage/files/shares/HH/3/f533de42-4806-4108-beec-612bc6e47b5c.jpg">
                        </div>
                        <div class="info">
                          <div class="avatar">
                            <img class="img" src="https://api.bcyapp005.com/storage/files/shares/HH/3/f533de42-4806-4108-beec-612bc6e47b5c.jpg">
                          </div>
                          <div class="title">
                            <div class="name">
                              <p>露脸女朋友 大一女生爱露脸 直拨镜头 露脸女朋友 露脸女朋友</p>
                              <button class="btn btn__focus">关注</button>
                            </div>
                            <span>88888888关注<i class="dot"></i>2551视频</span>
                          </div>
                          <div class="interaction">
                            <a href="#" class="btn">
                              <i class="icon icon__message"></i>
                              <span>1w</span>
                            </a>
                            <a href="#" class="btn">
                              <i class="icon icon__share"></i>
                            </a>
                          </div>
                        </div>
                      </NuxtLink>
                    </div>
                  </div>
                </section>
              </div>
            </swiper-slide>
            <swiper-slide :key="3">
              <div class="content" @scroll="onBodyScroll">
                <section class="sectionMoney">
                  <img src="/_nuxt/assets/img/not-use/slider.jpg" alt="">
                </section>
                <section class="section sectionVideo mt:10">
                  <div class="featuredVideo">
                    <div class="list">
                      <div class="item" v-for="n in 20">
                        <div class="preview">
                          <div class="title">
                            <p>3/1露脸女朋友 大一女生爱露脸 直播镜头 露脸女朋友</p>
                          </div>
                          <div class="view"><span>5w</span>次播放</div>
                          <div class="time"><span>2:12</span></div>
                          <img class="img" src="https://api.bcyapp005.com/storage/files/shares/HH/3/f533de42-4806-4108-beec-612bc6e47b5c.jpg">
                        </div>
                        <div class="info">
                          <div class="avatar">
                            <img class="img" src="https://api.bcyapp005.com/storage/files/shares/HH/3/f533de42-4806-4108-beec-612bc6e47b5c.jpg">
                          </div>
                          <div class="title">
                            <div class="name">
                              <p>露脸女朋友 大一女生爱露脸 直拨镜头 露脸女朋友 露脸女朋友</p>
                              <button class="btn btn__focus">关注</button>
                            </div>
                            <span>88888888关注<i class="dot"></i>2551视频</span>
                          </div>
                          <div class="interaction">
                            <a href="#" class="btn">
                              <i class="icon icon__message"></i>
                              <span>1w</span>
                            </a>
                            <a href="#" class="btn">
                              <i class="icon icon__share"></i>
                            </a>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </section>
              </div>
            </swiper-slide>
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