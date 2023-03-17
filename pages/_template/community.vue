<template>
  <div class="wrap community__wrap">
    <!-- footer_留言 -->
    <Transition name="pops" duration="550" appear>
      <div class="pops pops-full pops-bottom footerMessage" v-if="footerMessage === true">
        <div class="pops__overlay">
          <div class="pops__container">
            <div class="pops__header">
              <div class="pops__title">
                <div class="title">Aika Sawaguchi 沢口愛華, FRIDAY 2022.09.16 (フライデー 2022年9月16日號)</div>
              </div>
              <div class="pops__close">
                <div class="btn btn__close" @click="footerMessage = false">
                  <img src="/_nuxt/assets/img/ic_close.svg">
                </div>
              </div>
            </div>
            <div class="pops__body">
              <div class="content">
                <section class="sectionMessage">
                  <div class="featuredMessage">
                    <div class="message__list">
                      <ul class="list">
                        <li class="item" v-for="n in 10">
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
                          <div class="msg">
                            <p>从提她阿产用，注于南男台所方天希为，门实完花是笑向配，细可叫常学们当叫了型得进、和北不内的此主艺生要几过惊下，推事决花天去水、正排一业的，儿出是要记质子民我连知区，青园线性……增深月那之整给不重然华？</p>
                          </div>
                          <div class="interaction">
                            <div class="interaction__left">
                              <a href="#" class="btn">
                                <i class="icon icon__great-g"></i>
                                <span>88</span>
                              </a>
                              <a href="#" class="btn">
                                <i class="icon icon__nogood-g"></i>
                                <span></span>
                              </a>
                              <a href="#" class="btn">
                                <i class="icon icon__message-g"></i>
                                <span>回覆</span>
                              </a>
                            </div>
                            <a href="#" class="btn btn__regreat">
                              作者已點讚
                            </a>
                          </div>
                          <div class="resmsg">
                            <ul class="resmsg__list">
                              <li class="item">
                                <div class="name">其他ID</div>
                                <div class="content">园实形、众了样产情进品算下外片他，门说保子，能公动向其导习，背电学车！</div>
                              </li>
                            </ul>
                          </div>
                        </li>
                        <li class="item">
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
                          <div class="msg">
                            <p>从提她阿产用，注于南男台所方天希为，门实完花是笑向配，细可叫常学们当叫了型得进、和北不内的此主艺生要几过惊下，推事决花天去水、正排一业的，儿出是要记质子民我连知区，青园线性……增深月那之整给不重然华？</p>
                          </div>
                          <div class="interaction">
                            <div class="interaction__left">
                              <a href="#" class="btn">
                                <i class="icon icon__great-g"></i>
                                <span>88</span>
                              </a>
                              <a href="#" class="btn">
                                <i class="icon icon__nogood-g"></i>
                                <span></span>
                              </a>
                              <a href="#" class="btn">
                                <i class="icon icon__message-g"></i>
                                <span>回覆</span>
                              </a>
                            </div>
                          </div>
                        </li>
                      </ul>
                    </div>
                  </div>
                </section>
              </div>
            </div>
            <div class="pops__footer">
              <div class="footerComments">
                <div class="comments">
                  <div class="form">
                    <div class="form__input">
                      <img src="/_nuxt/assets/img/ic_edit.svg">
                      <input type="text" placeholder="优质评论优先展示">
                    </div>
                    <div class="form__button">
                      <a href="#" class="btn btn__submit">确定</a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="pops__mask" @click="footerMessage = false"></div>
      </div>
    </Transition>
    <!-- 詳情 details -->
    <Transition name="fadeInRight" appear>
      <div class="dialog full communityDetails" v-if="communityDetails === true">
        <div class="dialog__overlay">
          <div class="dialog__header">
            <header class="pageHeader" :class="none ? 'none' : ''">
              <div class="pageHeader__back">
                <a href="#" class="btn btn__back" @click="communityDetails = false">
                  <img src="/_nuxt/assets/img/ic_back.svg">
                </a>
              </div>
              <div class="pageHeader__title">
                <div class="title">帖子詳情</div>
              </div>
            </header>
          </div>
          <div class="dialog__body">
            <div class="content" @scroll="scroll" v-if="communityDetailtab === 0">
              <section class="section sectionCommunityDetail">
                <div class="community__top">
                  <div class="item">
                    <div class="info">
                      <div class="avatar">
                        <img class="img" src="https://imagedelivery.net/wZHPgs2OG1Jdmm2gsKzHiA/5f6e4b9d-fdaa-4b81-4b91-656ead864200/public">
                      </div>
                      <div class="title">
                        <div class="name">
                          <p>露脸女朋友</p>
                        </div>
                        <span>2023-03-07</span>
                      </div>
                      <button class="btn btn__focus">关注</button>
                    </div>
                    <div class="description">
                      <p><a href="#">Aidol</a></p>
                      <p>Aika Sawaguchi 沢口愛華, FRIDAY 2022.09.16 (フライデー 2022年9月16日號)</p>
                    </div>
                    <div class="preview">
                      <ul class="img__list">
                        <li>
                          <img src="https://imagedelivery.net/wZHPgs2OG1Jdmm2gsKzHiA/5f6e4b9d-fdaa-4b81-4b91-656ead864200/public">
                        </li>
                        <li>
                          <img src="https://imagedelivery.net/wZHPgs2OG1Jdmm2gsKzHiA/233b26a3-3af1-45c3-4317-49b9b5974100/public">
                        </li>
                        <li>
                          <img src="https://imagedelivery.net/wZHPgs2OG1Jdmm2gsKzHiA/937606ee-f5b8-4d92-5975-f71ccbf24300/public">
                        </li>
                        <li>
                          <img src="https://imagedelivery.net/wZHPgs2OG1Jdmm2gsKzHiA/101aed23-7b58-490c-f46a-3fb41bd0de00/public">
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
                <div class="community__content">
                  <div class="communityDetailInfo">
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
                      <div class="updated">2023-03-07 19:26:08 发布</div>
                    </div>
                  </div>
                </div>
              </section>
              <section class="sectionMoney p:10">
                <img src="/_nuxt/assets/img/not-use/slider.jpg" alt="">
              </section>
              <section class="section sectionVideoPersonal">
                <div class="section__title">
                  <div class="title">关联作品</div>
                </div>
                <div class="featuredVideoPersonal">
                  <div class="list">
                    <div class="item" v-for="n in 6">
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
            </div>
            <div class="content" @scroll="scroll" v-else>
              <section class="section sectionNoveContents">
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
                      <a href="#" @click="novelArticle = true">
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
                  <a href="#" class="btn">
                    <i class="icon icon__love-w"></i>
                    <span>收藏</span>
                  </a>
                  <a href="#" class="btn" @click="footerMessage = true">
                    <i class="icon icon__message-w"></i>
                    <span>116</span>
                  </a>
                </div>
              </div>
              <div class="footerContents__right">
                <a href="#" class="btn btn__starread" @click="novelArticle = true">
                  <i class="icon icon__money-w"></i>
                  <span>我要打赏</span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Transition>
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
                        <span>2023-03-07</span>
                      </div>
                      <button class="btn btn__focus">关注</button>
                    </div>
                    <div class="description">
                      <p><a href="#">Aidol</a></p>
                      <p>Aika Sawaguchi 沢口愛華, FRIDAY 2022.09.16 (フライデー 2022年9月16日號)</p>
                    </div>
                    <div class="preview" @click="communityDetails = true">
                      <ul class="img__list">
                        <li class="img" style="background-image: url(https://imagedelivery.net/wZHPgs2OG1Jdmm2gsKzHiA/5f6e4b9d-fdaa-4b81-4b91-656ead864200/public)"></li>
                        <li class="img" style="background-image: url(https://imagedelivery.net/wZHPgs2OG1Jdmm2gsKzHiA/233b26a3-3af1-45c3-4317-49b9b5974100/public)"></li>
                        <li class="img" style="background-image: url(https://imagedelivery.net/wZHPgs2OG1Jdmm2gsKzHiA/937606ee-f5b8-4d92-5975-f71ccbf24300/public)"></li>
                        <li class="img" style="background-image: url(https://imagedelivery.net/wZHPgs2OG1Jdmm2gsKzHiA/101aed23-7b58-490c-f46a-3fb41bd0de00/public)">
                        <div class="number">86</div></li>
                      </ul>
                    </div>
                    <div class="tags">
                      <ul class="tag__list">
                        <li class="list__item" v-for="n in 10">
                          <a href="#" class="btn">
                            <div class="title">
                              <div class="tag">{{ n }} 橫向</div>
                            </div>
                          </a>
                        </li>
                      </ul>
                    </div>
                    <div class="interaction">
                      <a href="#" class="btn">
                        <i class="icon icon__view"></i>
                        <span>5w</span>
                      </a>
                      <a href="#" class="btn">
                        <i class="icon icon__great"></i>
                        <span>11</span>
                      </a>
                      <a href="#" class="btn" @click="footerMessage = true">
                        <i class="icon icon__message"></i>
                        <span>116</span>
                      </a>
                      <a href="#" class="btn">
                        <i class="icon icon__reports"></i>
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
        tab: 1,
        communityDetails: true,
        communityDetailtab: 0,
        footerMessage: false
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