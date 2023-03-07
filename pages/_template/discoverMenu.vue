<template>
  <div class="wrap">
    <Transition name="swipe-right" appear>
      <div class="dialog discoverMenu" v-if="discoverMenu === true">
        <div class="dialog__overlay">
          <div class="dialog__header">
            <header class="searchHeader">
              <div class="searchHeader__everyday">
                <a href="#" class="btn everyday__btn" @click="discoverMenu = !discoverMenu">
                  <img src="/_nuxt/assets/img/ic_searchHeader_1.svg" alt="每日精选">
                </a>
              </div>
              <div class="searchHeader__titleTab">
                <button class="btn">
                  <div class="title">精选</div>
                </button>
                <button class="btn current">
                  <div class="title">分类</div>
                </button>
              </div>
              <a href="#" class="searchHeader__search">
                <div class="search__input">
                  <span>探索</span>
                  <img src="/_nuxt/assets/img/ic_search.png">
                </div>
              </a>
            </header>
          </div>
          <div class="dialog__body">
            <div class="content content__left">
              <div class="box">
                <ul class="list">
                  <li class="current">
                    <a href="#" class="btn">
                      <span>已選中</span>
                    </a>
                  </li>
                  <li v-for="n in 200">
                    <a href="#" class="btn">
                      <span>左邊 {{ n }}</span>
                    </a>
                  </li>
                </ul>
              </div>
            </div>
            <div class="content content__right">
              <div class="top">
                <div class="top__header">
                  <div class="title">热门创作者</div>
                  <a href="#" class="btn__more">查看全部</a>
                </div>
                <div class="top__content">
                  <ul class="list">
                    <li class="list__item" v-for="n in 10">
                      <a href="#" class="btn">
                        <div class="avatar">
                          <img class="img" src="https://imagedelivery.net/wZHPgs2OG1Jdmm2gsKzHiA/240f011d-cb42-4383-a73f-499eddc76d00/public">
                        </div>
                        <div class="title">
                          <div class="name">{{ n }}橫向橫向橫向橫向橫向橫向</div>
                        </div>
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
              <div class="bottom">
                <div class="bottom__header">
                  <div class="title">全部标签</div>
                </div>
                <div class="bottom__content">
                  <ul class="list">
                    <li class="list__item" v-for="n in 10">
                      <a href="#" class="btn">
                        <div class="title">
                          <div class="tag">{{ n }}橫向橫向橫向橫向橫向橫向</div>
                        </div>
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
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
        discoverMenu: true
      }
    },
  };
</script>