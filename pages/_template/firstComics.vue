<template>
  <div class="wrap">
    <!-- footer_書籤 -->
    <Transition name="pops" duration="550" appear>
      <div class="pops pops-full pops-bottom articleFooterBookmarks" v-if="articleFooterBookmarks === true">
        <div class="pops__overlay">
          <div class="pops__container">
            <div class="pops__header">
              <div class="pops__title pops__title-center">
                <div class="title">書籤</div>
              </div>
              <div class="pops__close">
                <div class="btn btn__close" @click="articleFooterBookmarks = false">
                  <img src="/_nuxt/assets/img/ic_close.svg">
                </div>
              </div>
            </div>
            <div class="pops__body">
              <div class="content">
                <section class="section sectionFooterBookmark">
                  <div class="bookmark__list">
                    <ul class="list" :class="sort ? '' : 'list__reverse'">
                      <li class="item read">
                        <a href="#">
                          <p>第1話</p>
                        </a>
                        <a href="#" class="btn btn__delet">
                          刪除
                        </a>
                      </li>
                      <li class="item">
                        <a href="#">
                          <p>第2話</p>
                        </a>
                        <a href="#" class="btn btn__delet">
                          刪除
                        </a>
                      </li>
                    </ul>
                  </div>
                </section>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Transition>
    <!-- footer_目錄 -->
    <Transition name="pops" duration="550" appear>
      <div class="pops pops-full pops-bottom articleFooterContents" v-if="articleFooterContents === true">
        <div class="pops__overlay">
          <div class="pops__container">
            <div class="pops__header">
              <div class="pops__title">
                <div class="title">成人漫画名称成人漫画名称成人漫画名称成人漫画名称成人漫画名称</div>
              </div>
              <div class="pops__close">
                <div class="btn btn__close" @click="articleFooterContents = false">
                  <img src="/_nuxt/assets/img/ic_close.svg">
                </div>
              </div>
            </div>
            <div class="pops__body">
              <div class="content">
                <section class="section sectionComicsContents">
                  <div class="section__title">
                    <div class="title">
                      連載中
                      <span>(週五) 更新至124話</span>
                    </div>
                    <a href="#" class="btn btn__sort" @click="sort = !sort">
                      <img src="/_nuxt/assets/img/ic_sort_up.svg" alt="正序" v-if="sort === true">
                      <img src="/_nuxt/assets/img/ic_sort_down.svg" alt="反序" v-else>
                    </a>
                  </div>
                  <div class="contents__list">
                    <ul class="list" :class="sort ? '' : 'list__reverse'">
                      <li class="item read">
                        <a href="#">
                          <p>第1話(已讀)</p>
                        </a>
                      </li>
                      <li class="item">
                        <a href="#">
                          <p>第2話</p>
                        </a>
                      </li>
                      <li class="item vip" v-for="n in 32">
                        <a href="#">
                          <p>第{{ n + 2 }}話</p>
                        </a>
                      </li>
                    </ul>
                  </div>
                </section>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Transition>
    <!-- 成人漫画 -->
    <Transition name="fadeInLeft" appear>
      <div class="dialog full firstComics" v-if="firstComics === true">
        <div class="dialog__overlay">
          <div class="dialog__header">
            <header class="pageHeader">
              <div class="pageHeader__back">
                <a href="/_template/demo" class="btn btn__back" @click="firstComics = false">
                  <img src="/_nuxt/assets/img/ic_back.svg">
                </a>
              </div>
              <div class="pageHeader__title">
                <div class="title">成人漫画</div>
              </div>
            </header>
          </div>
          <div class="dialog__body">
            <div class="featuredTab" :class="none ? 'none' : ''">
              <div class="featuredTab__list">
                <ul class="list">
                  <li class="current">
                    <a href="#" class="btn">
                      <span>标签</span>
                    </a>
                  </li>
                  <li v-for="n in 10">
                    <a href="#" class="btn">
                      <span>标签</span>
                    </a>
                  </li>
                </ul>
              </div>
            </div>
            <div class="content" @scroll="scroll">
              <section class="section sectionComics" v-for="n in 4">
                <div class="section__title">
                  <div class="title">最新新作</div>
                  <a href="#" class="btn btn__more">更多</a>
                </div>
                <div class="comics__list">
                  <div class="list">
                    <div class="item" v-for="n in 6" @click="comicsDetails = true">
                      <div class="preview">
                        <div class="img" style="background-image: url(&quot;https://imagedelivery.net/wZHPgs2OG1Jdmm2gsKzHiA/32a3b2eb-070b-4b57-59fd-0b2811bf8300/public&quot;);"></div>
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
    <!-- 詳情 details -->
    <Transition name="fadeInRight" appear>
      <div class="dialog full comicsDetails" v-if="comicsDetails === true">
        <div class="dialog__overlay">
          <div class="dialog__header">
            <section class="sectionComicsDetails">
              <div class="comicsDetail__top">
                <div class="detailHeader">
                  <div class="detailback">
                    <a href="#" class="btn btn__back" @click="comicsDetails = false">
                      <img src="/_nuxt/assets/img/ic_back.svg">
                    </a>
                  </div>
                  <div class="detailTitle">
                    <div class="title">成人漫画名称成人漫画名称成人漫画名称成人漫画名称成人漫画名称</div>
                  </div>
                </div>
                <div class="preview">
                  <div class="preview__left">
                    <div class="img" style="background-image: url(https://imagedelivery.net/wZHPgs2OG1Jdmm2gsKzHiA/32a3b2eb-070b-4b57-59fd-0b2811bf8300/public);">
                    </div>
                  </div>
                  <div class="preview__right">
                    <ul class="info">
                      <li>
                        <div class="state">
                          <span>连载中</span>
                        </div>
                      </li>
                      <li>連載</li>
                      <li><span>124</span>話</li>
                    </ul>
                  </div>
                  <div class="bg" style="background-image: url(https://imagedelivery.net/wZHPgs2OG1Jdmm2gsKzHiA/32a3b2eb-070b-4b57-59fd-0b2811bf8300/public);">
                  </div>
                </div>
              </div>
              <div class="detailTab">
                <div class="detailTab__list">
                  <ul class="list">
                    <li :class="comicsDetailtab == '0' ? 'current' : ''">
                      <a href="#" class="btn" @click="comicsDetailtab = 0">
                        <span>简介</span>
                      </a>
                    </li>
                    <li :class="comicsDetailtab == '1' ? 'current' : ''">
                      <a href="#" class="btn" @click="comicsDetailtab = 1">
                        <span>目录</span>
                      </a>
                    </li>
                  </ul>
                </div>
                <div class="btn btn__reports">举报</div>
              </div>
            </section>
          </div>
          <div class="dialog__body">
            <div class="content" @scroll="scroll" v-if="comicsDetailtab === 0">
              <section class="sectionComicsDetails">
                <div class="comicsInfo">
                  <div class="description">
                    <p>议儿北一三高不车。子空年儿功，夫他我政就高师我统？议儿北一三高不车。子空年儿功，夫他我政就高师我统？议儿北一三高不车。子空年儿功，夫他我政就高师我统</p>
                  </div>
                  <ul class="tag__list">
                    <li class="list__item">
                      <a href="#" class="btn">
                        <div class="title">
                          <div class="tag">#美腿</div>
                        </div>
                      </a>
                    </li>
                    <li class="list__item">
                      <a href="#" class="btn">
                        <div class="title">
                          <div class="tag">#苗条</div>
                        </div>
                      </a>
                    </li>
                    <li class="list__item">
                      <a href="#" class="btn">
                        <div class="title">
                          <div class="tag">#约砲</div>
                        </div>
                      </a>
                    </li>
                  </ul>
                  <div class="detail">
                    <div class="view"><span>102</span>次观看</div>
                    <i class="dot"></i>
                    <div class="love"><span>13</span>个收藏</div>
                    <i class="dot"></i>
                    <div class="updated">2023-03-07 19:26:08 最后更新</div>
                  </div>
                  <div class="interaction">
                    <a href="#" class="btn"  @click="addTags = true">
                      <i class="icon icon__love-w"></i>
                      <span>收藏</span>
                    </a>
                    <a href="#" class="btn">
                      <i class="icon icon__share-w"></i>
                      <span>分享</span>
                    </a>
                  </div>
                </div>
              </section>
              <section class="section sectionComicsContents">
                <div class="section__title">
                  <div class="title">
                    連載中
                    <span>(週五) 更新至124話</span>
                  </div>
                  <a href="#" class="btn btn__more" @click="comicsDetailtab = 1">全部</a>
                </div>
                <div class="contents__list">
                  <ul class="list">
                    <li class="item vip">
                      <a href="#">
                        <p>第124話</p>
                      </a>
                    </li>
                    <li class="item read vip">
                      <a href="#">
                        <p>第123話(已讀)</p>
                      </a>
                    </li>
                    <li class="item read vip">
                      <a href="#">
                        <p>第122話(已讀)</p>
                      </a>
                    </li>
                    <li class="item read vip">
                      <a href="#">
                        <p>第121話(已讀)</p>
                      </a>
                    </li>
                  </ul>
                </div>
              </section>
              <section class="sectionMoney p:10">
                <img src="/_nuxt/assets/img/not-use/slider.jpg" alt="">
              </section>
              <section class="section sectionComics">
                <div class="section__title">
                  <div class="title">为您推荐</div>
                </div>
                <div class="comics__list">
                  <div class="list">
                    <div class="item" v-for="n in 1">
                      <div class="preview">
                        <div class="img" style="background-image: url(&quot;https://imagedelivery.net/wZHPgs2OG1Jdmm2gsKzHiA/32a3b2eb-070b-4b57-59fd-0b2811bf8300/public&quot;);"></div>
                      </div>
                      <div class="info">
                        <div class="title">
                          <p>露脸女朋友 大一女生爱露脸 直拨镜头 露脸女朋友 露脸女朋友</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </section>
            </div>
            <div class="content" @scroll="scroll" v-else>
              <section class="section sectionComicsContents">
                <div class="section__title">
                  <div class="title">
                    連載中
                    <span>(週五) 更新至124話</span>
                  </div>
                  <a href="#" class="btn btn__sort" @click="sort = !sort">
                    <img src="/_nuxt/assets/img/ic_sort_up.svg" alt="正序" v-if="sort === true">
                    <img src="/_nuxt/assets/img/ic_sort_down.svg" alt="反序" v-else>
                  </a>
                </div>
                <div class="contents__list">
                  <ul class="list" :class="sort ? '' : 'list__reverse'">
                    <li class="item read">
                      <a href="#" @click="comicsArticle = true">
                        <p>第1話(已讀)</p>
                      </a>
                    </li>
                    <li class="item">
                      <a href="#">
                        <p>第2話</p>
                      </a>
                    </li>
                    <li class="item vip" v-for="n in 32">
                      <a href="#">
                        <p>第{{ n + 2 }}話</p>
                      </a>
                    </li>
                  </ul>
                </div>
              </section>
            </div>
          </div>
          <div class="dialog__footer" :class="none ? 'none' : ''">
            <div class="footerContents">
              <div class="footerContents__left">
                <div class="interaction">
                  <a href="#" class="btn"  @click="addTags = true">
                    <i class="icon icon__love-w"></i>
                    <span>收藏</span>
                  </a>
                  <a href="#" class="btn">
                    <i class="icon icon__share-w"></i>
                    <span>分享</span>
                  </a>
                </div>
              </div>
              <div class="footerContents__right">
                <a href="#" class="btn btn__starread" @click="comicsArticle = true">开始阅读</a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Transition>
    <!-- 內容 content -->
    <Transition name="fadeInRight" appear>
      <div class="dialog full comicsArticle" v-if="comicsArticle === true">
        <div class="dialog__overlay">
          <div class="dialog__header" :class="none ? 'none' : ''">
            <header class="pageHeader">
              <div class="pageHeader__back">
                <a href="#" class="btn btn__back" @click="comicsArticle = false">
                  <img src="/_nuxt/assets/img/ic_back.svg">
                </a>
              </div>
              <div class="pageHeader__title">
                <div class="title">第1話</div>
              </div>
            </header>
          </div>
          <div class="dialog__body">
            <div class="content" @scroll="scroll">
              <section class="sectioncomicsArticle">
                <div class="preview">
                  <img class="img" src="https://imagedelivery.net/wZHPgs2OG1Jdmm2gsKzHiA/32a3b2eb-070b-4b57-59fd-0b2811bf8300/public" v-for="n in 20">
                </div>
              </section>
            </div>
          </div>
          <div class="dialog__footer" :class="none ? 'none' : ''">
            <div class="footerArticle">
              <button class="btn">
                <div class="icon icon__prev"></div>
                <div class="title">上一頁</div>
              </button>
              <button class="btn" @click="articleFooterContents = true">
                <div class="icon icon__1"></div>
                <div class="title">目录</div>
              </button>
              <button class="btn" @click="articleFooterBookmarks = true">
                <div class="icon icon__5"></div>
                <div class="title">书签</div>
              </button>
              <button class="btn">
                <div class="icon icon__next"></div>
                <div class="title">下一頁</div>
              </button>
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
        height: '',
        none: false,
        firstComics: true,
        comicsDetails: false,
        comicsDetailtab: 0,
        comicsArticle: false,
        articleFooterContents: false,
        articleFooterBookmarks: false,
        sort: true,
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