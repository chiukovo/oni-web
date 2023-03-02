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
          <div class="list">
            <NuxtLink to="/_template/focus" class="active"><span>关注</span></NuxtLink>
            <NuxtLink to="/_template/demo"><span>推荐</span></NuxtLink>
          </div>
        </div>
        <a href="#" class="featuredTab__btn">
          btn
        </a>
      </div>
    </van-sticky>
    <main>
      <section class="sectionVideoFocus">
        <div class="featuredVideoFocus">
          <div class="list">
            <div class="item" v-for="n in 20">
              <div class="info">
                <div class="avatar">
                  <img class="img" src="https://api.bcyapp005.com/storage/files/shares/HH/3/f533de42-4806-4108-beec-612bc6e47b5c.jpg">
                </div>
                <div class="title">
                  <div class="name">
                    <p>露脸女朋友 大一女生爱露脸 直拨镜头 露脸女朋友 露脸女朋友</p>
                  </div>
                  <span>2021-08-30</span>
                </div>
              </div>
              <div class="preview">
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
    </main>
    <van-tabbar v-model="active">
      <van-tabbar-item icon="wap-home"></van-tabbar-item>
      <van-tabbar-item icon="diamond">发现</van-tabbar-item>
      <van-tabbar-item icon="add">上传</van-tabbar-item>
      <van-tabbar-item icon="comment">社区</van-tabbar-item>
      <van-tabbar-item icon="manager">我的</van-tabbar-item>
    </van-tabbar>
  </div>
</template>

<script>
  import { createApp } from 'vue';
  import { Image as VanImage } from 'vant';
  import { Tabbar, TabbarItem } from 'vant';

  const app = createApp();
  app.use(VanImage);
  app.use(Tabbar);
  app.use(TabbarItem);
</script>