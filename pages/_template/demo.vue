<template>
  <div class="wrap">
    <div class="container">
      <header class="searchHeader" :class="none ? 'none' : ''">
        <div class="searchHeader__everyday">
          <a href="/_template/everyDay" class="btn everyday__btn">
            <img src="/_nuxt/assets/img/ic_searchHeader_1.svg" alt="每日精选">
          </a>
        </div>
        <a href="#" class="searchHeader__search">
          <div class="search__input">
            <span>视频｜创作者</span>
            <img src="/_nuxt/assets/img/ic_search.svg">
          </div>
        </a>
        <div class="searchHeader__recharge">
          <a href="#" class="btn recharge__btn">
            <img src="/_nuxt/assets/img/ic_searchHeader_2.svg" alt="充值">
          </a>
        </div>
      </header>
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
      <main class="main">
        <Transition appear>
          <div class="content" @scroll="scroll" v-if="tab === 0">
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
          <div class="content" @scroll="scroll" v-else-if="tab === 1">
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
          <div class="content" @scroll="scroll" v-else>
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
        </Transition>
      </main>
    </div>
    <div class="footerTabbar" :class="none ? 'none' : ''">
      <NuxtLink class="btn current" to="/_template/demo">
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
      <NuxtLink class="btn" to="/_template/community">
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