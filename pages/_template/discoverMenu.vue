<template>
  <div class="wrap">
    <!-- 搜索 -->
    <Transition name="fadeInRight" appear>
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
                  <input type="text" placeholder="视频｜创作者" value="B站洛里塔">
                  <img src="/_nuxt/assets/img/ic_clear.svg">
                </div>
                <div class="search__submit">
                  <a href="#" class="btn btn__submit" @click="searchResults = 1">搜索</a>
                </div>
              </div>
            </header>
          </div>
          <div class="dialog__body">
            <div class="content" v-if="searchResults === 0">
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
                  <a href="#" class="btn btn__clear">清除</a>
                </div>
                <div class="tags">
                  <ul class="tag__list {w:auto!}>li">
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
            <!-- 搜尋結果 -->
            <div class="content" v-else>
              <div class="pageTab pageTab-center mt:10">
                <div class="pageTab__list">
                  <ul class="list">
                    <li :class="searchResultTab == '0' ? 'current' : ''">
                      <a href="#" class="btn" @click="searchResultTab = 0">
                        <span>视频</span>
                      </a>
                    </li>
                    <li :class="searchResultTab == '1' ? 'current' : ''">
                      <a href="#" class="btn" @click="searchResultTab = 1">
                        <span>用户</span>
                      </a>
                    </li>
                    <li :class="searchResultTab == '2' ? 'current' : ''">
                      <a href="#" class="btn" @click="searchResultTab = 2">
                        <span>漫画</span>
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
              <section class="section sectionVideoPersonal" v-if="searchResultTab === 0">
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
                        <div class="info__bottom">
                          <div class="name">
                            <p>作者ID作者ID作者ID作者ID作者ID作者ID作者ID作者ID作者ID作者ID作者ID作者ID</p>
                          </div>
                          <div class="interaction">
                            <a href="#" class="btn">
                              <i class="icon icon__view"></i>
                              <span>5w</span>
                            </a>
                            <a href="#" class="btn">
                              <i class="icon icon__love"></i>
                              <span>116</span>
                            </a>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </section>
              <section class="section" v-else-if="searchResultTab === 1">
                <div class="featuredAuthor">
                  <div class="list">
                    <div class="item" v-for="n in 1">
                      <div class="info">
                        <div class="avatar">
                          <img class="img" src="https://api.bcyapp005.com/storage/files/shares/HH/3/f533de42-4806-4108-beec-612bc6e47b5c.jpg">
                        </div>
                        <div class="title">
                          <div class="name">
                            <p>B次元</p>
                          </div>
                          <span>88888888关注<i class="dot"></i>2551视频</span>
                        </div>
                        <button class="btn btn__focus hasFocus">已关注</button>
                      </div>
                    </div>
                    <div class="item" v-for="n in 12">
                      <div class="info">
                        <div class="avatar">
                          <img class="img" src="https://api.bcyapp005.com/storage/files/shares/HH/3/f533de42-4806-4108-beec-612bc6e47b5c.jpg">
                        </div>
                        <div class="title">
                          <div class="name">
                            <p>B次元</p>
                          </div>
                          <span>88888888关注<i class="dot"></i>2551视频</span>
                        </div>
                        <button class="btn btn__focus">关注</button>
                      </div>
                    </div>
                  </div>
                </div>
              </section>
              <section class="section sectionComics" v-else>
                <div class="comics__list">
                  <div class="list">
                    <div class="item" v-for="n in 20">
                      <div class="preview">
                        <img class="img" src="https://imagedelivery.net/wZHPgs2OG1Jdmm2gsKzHiA/32a3b2eb-070b-4b57-59fd-0b2811bf8300/public">
                      </div>
                      <div class="info">
                        <div class="title">
                          <p>露脸女朋友 大一女生爱露脸 直拨镜头 露脸女朋友 露脸女朋友</p>
                        </div>
                        <div class="interaction">
                          <div class="btn">
                            <i class="icon icon__view"></i>
                            <span>14 132</span>
                          </div>
                          <a href="#" class="btn">
                            <span>共 5 話</span>
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
    <!-- 熱門創作者: 查看全部 -->
    <Transition name="fadeInRight" appear>
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
                          <i class="icon icon__love"></i>
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
                          <i class="icon icon__love"></i>
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
    <Transition name="fadeInRight" appear>
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
                              <i class="icon icon__love"></i>
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
    <div class="container discoverMenu">
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
      <main class="main">
        <Transition appear>
          <div class="content" @scroll="scroll" v-if="discoverMenuTab === 0">
            <section class="section sectionVideoType" v-for="n in 4">
              <div class="section__title">
                <div class="title">原创微剧</div>
                <a href="#" class="btn btn__more">更多</a>
              </div>
              <div class="featuredVideoType">
                <div class="list">
                  <div class="item" v-for="n in 5">
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
                        <i class="icon icon__love"></i>
                        <span>116</span>
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </section>
          </div>
          <div class="content flex" v-else>
            <div class="content__left">
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
            <div class="content__right">
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
        </Transition>
      </main>
    </div>
    <div class="footerTabbar" :class="none ? 'none' : ''">
      <button class="btn current">
        <div class="icon icon__1"></div>
        <div class="title">精选</div>
      </button>
      <button class="btn">
        <div class="icon icon__2"></div>
        <div class="title">发现</div>
      </button>
      <button class="btn">
        <div class="icon icon__3"></div>
        <div class="title">上传</div>
      </button>
      <button class="btn">
        <div class="icon icon__4"></div>
        <div class="title">社区</div>
      </button>
      <button class="btn">
        <div class="icon icon__5"></div>
        <div class="title">我的</div>
      </button>
    </div>
  </div>
</template>

<script>
  import '@master/normal.css';
  import '@master/css';

  export default {
    data() {
      return {
        height: '',
        none: false,
        discoverMenuTab: 1,
        discoverSearch: false,
        searchResults: 0,
        searchResultTab: 0,
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