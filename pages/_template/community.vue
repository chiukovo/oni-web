<template>
  <div class="wrap community__wrap">
    <div class="container">
      <header class="pageHeader" :class="none ? 'none' : ''">
        <div class="pageHeader__everyday">
          <a href="/_template/everyDay" class="btn everyday__btn">
            <img src="/_nuxt/assets/img/ic_searchHeader_1.svg" alt="每日精选">
          </a>
        </div>
        <div class="pageHeader__title">
          <div class="title">社區</div>
        </div>
        <div class="pageHeader__recharge">
          <a href="#" class="btn recharge__btn">
            <img src="/_nuxt/assets/img/ic_searchHeader_2.svg" alt="充值">
          </a>
        </div>
      </header>
      <main class="main">
        <Transition appear>
          <div class="content" @scroll="scroll">
            <section class="section sectionCommunity">
              <div class="community__list">
                <div class="list">
                  <div class="item" v-for="n in 10">
                    <div class="info">
                      <div class="avatar">
                        <img class="img" src="https://imagedelivery.net/wZHPgs2OG1Jdmm2gsKzHiA/5f6e4b9d-fdaa-4b81-4b91-656ead864200/public">
                      </div>
                      <div class="title">
                        <div class="name">
                          <p>露脸女朋友</p>
                        </div>
                        <span>2021-08-30</span>
                      </div>
                      <button class="btn btn__focus">关注</button>
                    </div>
                    <div class="preview">
                      <ul class="img__list">
                        <li class="img" style="background-image: url(https://imagedelivery.net/wZHPgs2OG1Jdmm2gsKzHiA/5f6e4b9d-fdaa-4b81-4b91-656ead864200/public)"></li>
                        <li class="img" style="background-image: url(https://imagedelivery.net/wZHPgs2OG1Jdmm2gsKzHiA/233b26a3-3af1-45c3-4317-49b9b5974100/public)"></li>
                        <li class="img" style="background-image: url(https://imagedelivery.net/wZHPgs2OG1Jdmm2gsKzHiA/937606ee-f5b8-4d92-5975-f71ccbf24300/public)"></li>
                        <li class="img" style="background-image: url(https://imagedelivery.net/wZHPgs2OG1Jdmm2gsKzHiA/101aed23-7b58-490c-f46a-3fb41bd0de00/public)"></li>
                      </ul>
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
        </Transition>
      </main>
    </div>
    <div class="footerTabbar" :class="none ? 'none' : ''">
      <NuxtLink class="btn" to="/_template/demo">
        <div class="icon icon__1"></div>
        <div class="title">精选</div>
      </NuxtLink>
      <NuxtLink class="btn" to="/_template/discover">
        <div class="icon icon__2"></div>
        <div class="title">发现</div>
      </NuxtLink>
      <NuxtLink class="btn">
        <div class="icon icon__3"></div>
        <div class="title">上传</div>
      </NuxtLink>
      <NuxtLink class="btn current" to="/_template/community">
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
  export default {
    data() {
      return {
        height: '',
        none: false,
        tab: 1
      }
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