<template>
  <!-- 推薦 -->
  <div class="container">
    <van-sticky class="header">
      <header class="searchHeader">
        <div class="searchHeader__everyday">
          <a href="#" class="everyday__btn">
            btn
            <!-- <img src="img/btn_everyday.png" alt="每日精选"> -->
          </a>
        </div>
        <a href="#" class="searchHeader__search">
          <div class="search__input">
            <!-- <img src="img/ic_search.png"> -->
            <span>视频｜创作者</span>
          </div>
        </a>
        <div class="search__recharge">
          <a href="#" class="recharge__btn">
            btn
            <!-- <img src="img/btn_everyday.png" alt="充值"> -->
          </a>
        </div>
      </header>
      <div class="featuredTab">
        <div class="featuredTab__list">
          <ul class="list">
            <li>
              <a href="/_template/focus" class="btn">
                <span>關注</span>
              </a>
            </li>
            <li class="active">
              <a href="/_template/demo" class="btn">
                <span>推薦</span>
              </a>
            </li>
            <li v-for="n in 10">
              <a href="#" class="btn">
                <span>標籤</span>
              </a>
            </li>
          </ul>
        </div>
        <a href="#" class="featuredTab__btn">
          btn
        </a>
      </div>
    </van-sticky>
    <main>
      <section class="sectionMoney">
        <van-swipe :height="170">
          <van-swipe-item v-for="n in 2">{{ n }}</van-swipe-item>
        </van-swipe>
      </section>
      <section class="sectionButton">
        <div class="featuredPart">
          <a href="#" class="btn">1</a>
          <a href="#" class="btn">2</a>
          <a href="#" class="btn">3</a>
        </div>
      </section>
      <section class="sectionVideo">
        <div class="featuredVideo">
          <div class="list">
            <div class="item" v-for="n in 20">
              <div class="preview">
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