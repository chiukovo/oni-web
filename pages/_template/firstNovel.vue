<template>
  <div class="wrap">
    <!-- 小说专区 -->
    <Transition name="fadeInLeft" appear>
      <div class="dialog full firstNovel" v-if="firstNovel === true">
        <div class="dialog__overlay">
          <div class="dialog__header">
            <header class="pageHeader">
              <div class="pageHeader__back">
                <a href="/_template/demo" class="btn btn__back" @click="firstNovel = false">
                  <img src="/_nuxt/assets/img/ic_back.svg">
                </a>
              </div>
              <div class="pageHeader__title">
                <div class="title">小说专区</div>
              </div>
            </header>
          </div>
          <div class="dialog__body">
            <div class="featuredTab" :class="none ? 'none' : ''">
              <div class="featuredTab__list">
                <ul class="list">
                  <li :class="tab == '0' ? 'current' : ''">
                    <a href="#" class="btn" @click="tab = 0">
                      <span>关注</span>
                    </a>
                  </li>
                  <li :class="tab == '1' ? 'current' : ''">
                    <a href="#" class="btn" @click="tab = 1">
                      <span>推荐</span>
                    </a>
                  </li>
                  <li v-for="n in 10" :class="tab == '3' ? 'current' : ''">
                    <a href="#" class="btn" @click="tab = 3">
                      <span>标签</span>
                    </a>
                  </li>
                </ul>
              </div>
              <a href="/_template/discoverMenu" class="featuredTab__btn" @click="discoverMenu = !discoverMenu">
                <img src="/_nuxt/assets/img/ic_menu.svg" alt="更多推荐">
              </a>
            </div>
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
              <section class="section sectionfirstNovel">
                <div class="firstNovel__list">
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
        firstNovel: true
      }
    },
  };
</script>