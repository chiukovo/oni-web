<template>
  <div class="wrap">
    <!-- 每日精選 -->
    <Transition name="fadeInLeft" appear>
      <div class="dialog full everyDay" v-if="everyDay === true">
        <div class="dialog__overlay">
          <div class="dialog__header">
            <header class="pageHeader">
              <div class="pageHeader__back">
                <a href="/_template/demo" class="btn btn__back" @click="everyDay = false">
                  <img src="/_nuxt/assets/img/ic_back.svg">
                </a>
              </div>
              <div class="pageHeader__title">
                <div class="title">每日精选</div>
              </div>
            </header>
          </div>
          <div class="dialog__body">
            <div class="content">
              <section class="section sectionVideo">
                <div class="section__title">
                  <div class="title">3月9日 精选</div>
                </div>
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
                          </div>
                          <span>88888888关注<i class="dot"></i>2551视频</span>
                        </div>
                        <div class="interaction">
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
        everyDay: true
      }
    },
  };
</script>