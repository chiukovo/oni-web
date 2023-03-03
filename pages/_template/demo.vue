<template>
  <div class="container">
    <!-- 推荐 -->
    <van-sticky class="header">
      <header class="searchHeader">
        <div class="searchHeader__everyday">
          <a href="#" class="btn everyday__btn">
            <img src="/_nuxt/assets/img/ic_searchHeader_1.png" alt="每日精选">
          </a>
        </div>
        <a href="#" class="searchHeader__search">
          <div class="search__input">
            <span>视频｜创作者</span>
            <img src="/_nuxt/assets/img/ic_search.png">
          </div>
        </a>
        <div class="searchHeader__recharge">
          <a href="#" class="btn recharge__btn">
            <img src="/_nuxt/assets/img/ic_searchHeader_2.png" alt="充值">
          </a>
        </div>
      </header>
      <div class="featuredTab">
        <div class="featuredTab__list">
          <ul class="list">
            <li>
              <a href="/_template/focus" class="btn">
                <span>关注</span>
              </a>
            </li>
            <li class="active">
              <a href="/_template/demo" class="btn">
                <span>推荐</span>
              </a>
            </li>
            <li v-for="n in 10">
              <a href="#" class="btn">
                <span>标签</span>
              </a>
            </li>
          </ul>
        </div>
        <a href="#" class="featuredTab__btn">
          <img src="/_nuxt/assets/img/ic_menu.png" alt="更多推荐">
        </a>
      </div>
    </van-sticky>
    <main>
      <section class="sectionMoney">
        <van-swipe>
          <van-swipe-item v-for="n in 2">
            <img src="/_nuxt/assets/img/not-use/slider.jpg" alt="">
          </van-swipe-item>
        </van-swipe>
      </section>
      <section class="sectionButton">
        <div class="featuredPart">
          <a href="#" class="btn" v-for="n in 3">
            <img :src="'/_nuxt/assets/img/btn_first_' + n + '.png'">
          </a>
        </div>
      </section>
      <section class="sectionVideo">
        <div class="featuredVideo">
          <div class="list">
            <div class="item" v-for="n in 20">
              <div class="preview">
                <div class="title">3/1露脸女朋友 大一女生爱露脸 直播镜头 露脸女朋友</div>
                <div class="view"><span>5</span>万次播放</div>
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
                    <button class="btn">关注</button>
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
    </main>
    <van-tabbar v-model="active">
      <van-tabbar-item icon="wap-home">精选</van-tabbar-item>
      <van-tabbar-item icon="diamond">发现</van-tabbar-item>
      <van-tabbar-item icon="add">上传</van-tabbar-item>
      <van-tabbar-item icon="comment">社区</van-tabbar-item>
      <van-tabbar-item icon="manager">我的</van-tabbar-item>
    </van-tabbar>
  </div>
</template>

<script>
  import { ref } from 'vue';
  import { createApp } from 'vue';
  import { Image as VanImage } from 'vant';

  const app = createApp();
  app.use(VanImage);

  export default {
    setup() {
      const active = ref(0);
      return { active };
    },
  };
</script>