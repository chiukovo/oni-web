<template>
  <div class="wrap">
    <!-- 黑料 -->
    <Transition name="swipe-left" appear>
      <div class="dialog full firstVideo" v-if="firstVideo === true">
        <div class="dialog__overlay">
          <div class="dialog__header">
            <header class="pageHeader">
              <div class="pageHeader__back">
                <a href="/_template/demo" class="btn btn__back" @click="firstVideo = false">
                  <img src="/_nuxt/assets/img/ic_back.svg">
                </a>
              </div>
              <div class="pageHeader__title">
                <div class="title">黑料</div>
              </div>
            </header>
          </div>
          <div class="dialog__body">
            <div class="content">
              <!-- 排序使用 -->
              <div class="pageTab pageTab-center">
                <div class="pageTab__list">
                  <ul class="list">
                    <li class="current">
                      <a href="#" class="btn">
                        <span>最新</span>
                      </a>
                    </li>
                    <li>
                      <a href="#" class="btn">
                        <span>最熱</span>
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
              <section class="section sectionfirstVideo">
                <div class="firstVideo__list">
                  <div class="list">
                    <div class="item" v-for="n in 20">
                      <div class="preview">
                        <div class="title">
                          <p>3/1露脸女朋友 大一女生爱露脸 直播镜头 露脸女朋友</p>
                          <p class="sum">共4個視頻</p>
                        </div>
                        <img class="img" src="https://api.bcyapp005.com/storage/files/shares/HH/3/f533de42-4806-4108-beec-612bc6e47b5c.jpg">
                      </div>
                    </div>
                  </div>
                </div>
              </section>
            </div>
          </div>
        </div>
      </div>
    </Transition>
  </div>
</template>

<script>
  import '@master/normal.css';
  import '@master/css';

  export default {
    data() {
      return {
        firstVideo: true
      }
    },
  };
</script>