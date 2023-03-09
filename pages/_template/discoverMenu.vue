<template>
  <div class="wrap">
    <Transition name="swipe-right" appear>
      <div class="dialog full discoverMenu" v-if="discoverMenu === true">
        <div class="dialog__overlay">
          <div class="dialog__header">
            <header class="searchHeader">
              <div class="searchHeader__everyday">
                <a href="/_template/everyDay" class="btn everyday__btn" @click="discoverMenu = !discoverMenu">
                  <img src="/_nuxt/assets/img/ic_searchHeader_1.svg" alt="每日精选">
                </a>
              </div>
              <div class="searchHeader__titleTab">
                <button class="btn" :class="discoverMenuTab == '0' ? 'current' : ''" @click="discoverMenuTab = 0">
                  <div class="title">国产原创</div>
                </button>
                <button class="btn" :class="discoverMenuTab == '1' ? 'current' : ''" @click="discoverMenuTab = 1">
                  <div class="title">分类</div>
                </button>
              </div>
              <a href="#" class="searchHeader__search" @click="discoverSearch = !discoverSearch">
                <div class="search__input">
                  <span>搜索</span>
                  <img src="/_nuxt/assets/img/ic_search.svg">
                </div>
              </a>
            </header>
          </div>
          <!-- 國產原創 -->
          <div class="dialog__body" v-if="discoverMenuTab === 0">
            <div class="content">
              <section class="section sectionVideoType" v-for="n in 4">
                <div class="section__title">
                  <div class="title">原创微剧</div>
                  <div class="btn btn__more">更多</div>
                </div>
                <div class="featuredVideoType">
                  <div class="list">
                    <div class="item" v-for="n in 4">
                      <div class="preview">
                        <div class="time"><span>2:12</span></div>
                        <img class="img" src="https://api.bcyapp005.com/storage/files/shares/HH/3/f533de42-4806-4108-beec-612bc6e47b5c.jpg">
                      </div>
                      <div class="title">
                        <p>露脸女朋友 大一女生爱露脸 直拨镜头 露脸女朋友 露脸女朋友</p>
                      </div>
                      <div class="interaction">
                        <a href="#" class="btn">
                          <i class="icon icon__view"></i>
                          <span>5w</span>
                        </a>
                        <a href="#" class="btn">
                          <i class="icon icon__great"></i>
                          <span>116</span>
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </section>
            </div>
          </div>
          <!-- 分類 -->
          <div class="dialog__body" v-if="discoverMenuTab === 1">
            <div class="content content__left">
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
            <div class="content content__right">
              <div class="top">
                <div class="top__header">
                  <div class="title">热门创作者</div>
                  <a href="#" class="btn btn__more" @click="authorMore = !authorMore">查看全部</a>
                </div>
                <div class="top__content">
                  <ul class="list">
                    <li class="list__item" v-for="n in 10">
                      <a href="#" class="btn" @click="authorPersonal = !authorPersonal">
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
                  <ul class="tag__list">
                    <li class="list__item" v-for="n in 100">
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
    <!-- 搜索 -->
    <Transition name="swipe-right" appear>
      <div class="dialog full discoverSearch" v-if="discoverSearch === true">
        <div class="dialog__overlay">
          <div class="dialog__header">
            <header class="searchHeader">
              <div class="searchHeader__back">
                <a href="#" class="btn btn__back" @click="discoverSearch = false">
                  <img src="/_nuxt/assets/img/ic_back.svg">
                </a>
              </div>
              <div href="#" class="searchHeader__search">
                <div class="search__input">
                  <input type="text" placeholder="视频｜创作者">
                  <img src="/_nuxt/assets/img/ic_search.svg">
                </div>
                <div class="search__submit">
                  <a href="#" class="btn btn__submit">搜索</a>
                </div>
              </div>
            </header>
          </div>
          <div class="dialog__body">
            <div class="content">
              <section class="section">
                <div class="section__title">
                  <div class="title">大家都在搜</div>
                </div>
                <div class="tags">
                  <ul class="tag__list {w:auto!}>li">
                    <li class="list__item" v-for="list in lists">
                      <a href="#" class="btn">
                        <div class="title">
                          <div class="tag">{{ list.tag }}</div>
                        </div>
                      </a>
                    </li>
                  </ul>
                </div>
              </section>
              <section class="section">
                <div class="section__title">
                  <div class="title">搜索歷史</div>
                </div>
                <div class="tags">
                  <ul class="tag__list">
                    <li class="list__item">
                      <a href="#" class="btn">
                        <div class="title">
                          <div class="tag">橫向橫向橫向橫向橫向橫向</div>
                        </div>
                      </a>
                    </li>
                  </ul>
                </div>
              </section>
              <section class="section">
                <div class="section__title">
                  <div class="title">熱門標籤</div>
                </div>
                <div class="tags">
                  <ul class="tag__list">
                    <li class="list__item" v-for="n in 100">
                      <a href="#" class="btn">
                        <div class="title">
                          <div class="tag">{{ n }}橫向橫向橫向橫向橫向橫向</div>
                        </div>
                      </a>
                    </li>
                  </ul>
                </div>
              </section>
            </div>
          </div>
        </div>
      </div>
    </Transition>
    <!-- 熱門創作者: 查看全部 -->
    <Transition name="swipe-right" appear>
      <div class="dialog full authorMore" v-if="authorMore === true">
        <div class="dialog__overlay">
          <div class="dialog__header">
            <header class="pageHeader">
              <div class="pageHeader__back">
                <a href="#" class="btn btn__back" @click="authorMore = false">
                  <img src="/_nuxt/assets/img/ic_back.svg">
                </a>
              </div>
              <div class="pageHeader__title">
                <div class="title">類型標題</div>
              </div>
            </header>
          </div>
          <div class="dialog__body">
            <div class="content">
              <!-- 排序使用 -->
              <!-- <div class="pageTab pageTab-center">
                <div class="pageTab__list">
                  <ul class="list">
                    <li class="current">
                      <a href="#" class="btn">
                        <span>最新排序</span>
                      </a>
                    </li>
                    <li>
                      <a href="#" class="btn">
                        <span>最熱排序</span>
                      </a>
                    </li>
                  </ul>
                </div>
              </div> -->
              <section class="section sectionVideoType">
                <div class="featuredVideoType">
                  <div class="list">
                    <div class="item">
                      <div class="preview">
                        <div class="time"><span>2:12</span></div>
                        <img class="img" src="https://api.bcyapp005.com/storage/files/shares/HH/3/f533de42-4806-4108-beec-612bc6e47b5c.jpg">
                      </div>
                      <div class="title">
                        <p>露脸女朋友 大一女生爱露脸 直拨镜头 露脸女朋友 露脸女朋友</p>
                      </div>
                      <div class="interaction">
                        <a href="#" class="btn">
                          <i class="icon icon__view"></i>
                          <span>5w</span>
                        </a>
                        <a href="#" class="btn current">
                          <i class="icon icon__great"></i>
                          <span>116</span>
                        </a>
                      </div>
                    </div>
                    <div class="item" v-for="n in 4">
                      <div class="preview">
                        <div class="time"><span>2:12</span></div>
                        <img class="img" src="https://api.bcyapp005.com/storage/files/shares/HH/3/f533de42-4806-4108-beec-612bc6e47b5c.jpg">
                      </div>
                      <div class="title">
                        <p>露脸女朋友 大一女生爱露脸 直拨镜头 露脸女朋友 露脸女朋友</p>
                      </div>
                      <div class="interaction">
                        <a href="#" class="btn">
                          <i class="icon icon__view"></i>
                          <span>5w</span>
                        </a>
                        <a href="#" class="btn">
                          <i class="icon icon__great"></i>
                          <span>116</span>
                        </a>
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
    <!-- 熱門創作者: 創作者 -->
    <Transition name="swipe-right" appear>
      <div class="dialog full authorPersonal" v-if="authorPersonal === true">
        <div class="dialog__overlay">
          <div class="dialog__header">
            <header class="pageHeader">
              <div class="pageHeader__back">
                <a href="#" class="btn btn__back" @click="authorPersonal = false">
                  <img src="/_nuxt/assets/img/ic_back.svg">
                </a>
              </div>
              <div class="pageHeader__title">
                <div class="title">創作者標題</div>
              </div>
            </header>
          </div>
          <div class="dialog__body">
            <div class="content">
              <div class="content__top">
                <div class="avatar">
                  <img class="img" src="https://api.bcyapp005.com/storage/files/shares/HH/3/f533de42-4806-4108-beec-612bc6e47b5c.jpg">
                </div>
                <div class="info">
                  <div class="interactionNum">
                    <span class="num">88888888</span>
                    <span class="title">关注</span>
                  </div>
                  <div class="interactionNum">
                    <span class="num">2551</span>
                    <span class="title">视频</span>
                  </div>
                  <button class="btn btn__focus">关注</button>
                </div>
              </div>
              <div class="content__bottom">
                <div class="pageTab">
                  <div class="pageTab__list">
                    <ul class="list">
                      <li class="current">
                        <a href="#" class="btn">
                          <span>视频</span>
                        </a>
                      </li>
                      <li>
                        <a href="#" class="btn">
                          <span>合集</span>
                        </a>
                      </li>
                      <li>
                        <a href="#" class="btn">
                          <span>微头条</span>
                        </a>
                      </li>
                    </ul>
                  </div>
                </div>
                <section class="section sectionVideoPersonal">
                  <div class="featuredVideoPersonal">
                    <div class="list">
                      <div class="item" v-for="n in 12">
                        <div class="preview">
                          <div class="time"><span>2:12</span></div>
                          <img class="img" src="https://api.bcyapp005.com/storage/files/shares/HH/3/f533de42-4806-4108-beec-612bc6e47b5c.jpg">
                        </div>
                        <div class="info">
                          <div class="title">
                            <p>露脸女朋友 大一女生爱露脸 直拨镜头 露脸女朋友 露脸女朋友</p>
                          </div>
                          <div class="interaction">
                            <a href="#" class="btn">
                              <i class="icon icon__view"></i>
                              <span>5w</span>
                            </a>
                            <a href="#" class="btn">
                              <i class="icon icon__great"></i>
                              <span>116</span>
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
        discoverMenu: true,
        discoverSearch: false,
        discoverMenuTab: 1,
        authorMore: false,
        authorPersonal: false,
        lists: [
          { tag:'利哥探花合集' },
          { tag:'警花张津瑜' },
          { tag:'原创微剧' },
          { tag:'抖音网红' },
          { tag:'B站洛丽塔' },
          { tag:'网红' },
          { tag:'360水滴' },
          { tag:'黑料福利' }
        ]
      }
    },
  };
</script>