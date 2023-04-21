<template>
  <div class="floating openRight">
    <Transition name="pops" duration="550" appear>
      <div v-if="payMoney || addTags">
        <div class="pops payMoney" v-if="payMoney">
          <div class="pops__overlay">
            <div class="pops__container">
              <div class="pops__header">
                <div class="pops__title pops__title-center">
                  <div class="title">打赏</div>
                </div>
                <div class="pops__close">
                  <div class="btn btn__close" @click="payMoney = false">
                    <img src="/_nuxt/assets/img/ic_close.svg">
                  </div>
                </div>
              </div>
              <div class="pops__body">
                <div class="content">
                  <section class="section sectionPayMoney">
                    <div class="top">
                      <ul class="tag__list">
                        <li class="list__item current">
                          <div class="btn">
                            <div class="title">
                              <div class="tag">5 币</div>
                            </div>
                          </div>
                        </li>
                        <li class="list__item" v-for="n in 5">
                          <div class="btn">
                            <div class="title">
                              <div class="tag">{{ n * 10}} 币</div>
                            </div>
                          </div>
                        </li>
                      </ul>
                    </div>
                    <div class="bottom">
                      <!-- 當使用者填寫金額時，tag會自動移除current -->
                      <!-- 反之點擊快速按鈕時，金幣金額會移除 -->
                      <div class="form">
                        <div class="form__input">
                          <img class="form__icon" src="/_nuxt/assets/img/ic_edit.svg">
                          <input type="text" placeholder="想要打赏更多">
                        </div>
                      </div>
                    </div>
                  </section>
                </div>
                <div class="pops__footer">
                  <div class="button__group">
                    <button class="btn btn__cancel">取消</button>
                    <button class="btn btn__checked" @click="payMoney = false">确认</button>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div class="pops__mask" @click="payMoney = false"></div>
        </div>
      </div>
    </Transition>
    <div class="dialog full pageVideoDetail" v-if="pageVideoDetail && videoDetail.detail != ''">
      <div class="dialog__overlay">
        <div class="dialog__body">
          <section class="sectionVideoDetail">
            <div class="videoDetail">
              <div class="item">
                <div class="videoDetail__top">
                  <div class="detailHeader">
                    <div class="detailback">
                      <a href="#" class="btn btn__back" @click.prevent="doOpenRight('', '')">
                        <img src="/_nuxt/assets/img/ic_back.svg">
                      </a>
                    </div>
                  </div>
                  <div class="preview" :class="useVIP ? '' : 'previewLock'">
                    <div class="lock" v-if="!useVIP">
                      <p>開通VIP解鎖完整版<span class="hasIcon">></span></p>
                    </div>
                    <div id="video">
                      <video-player
                        class="video-player vjs-theme-forest"
                        controls
                        playsinline
                        :fluid="true"
                        :src="videoDetail.detail.finish_video_preview_url"
                        :poster="videoDetail.detail.finish_preview_url"
                      />
                    </div>
                  </div>
                </div>
                <div class="detailTab">
                  <div class="detailTab__list">
                    <ul class="list">
                      <li :class="videoDetailtab == '0' ? 'current' : ''">
                        <a href="#" class="btn" @click="videoDetailtab = 0">
                          <span>简介</span>
                        </a>
                      </li>
                      <li :class="videoDetailtab == '1' ? 'current' : ''">
                        <a href="#" class="btn" @click="videoDetailtab = 1">
                          <span>评论{{ videoDetail.detail.reply }}</span>
                        </a>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </section>
          <div ref="detailContent" class="content" @scroll="scroll" v-if="videoDetailtab == 0">
            <section class="sectionVideoDetail">
              <div class="videoDetail">
                <div class="item">
                  <div class="info">
                    <div class="avatar">
                      <img class="img" v-lazy="'https://api.bcyapp005.com/storage/files/shares/HH/3/f533de42-4806-4108-beec-612bc6e47b5c.jpg'">
                    </div>
                    <div class="title title-center">
                      <div class="name">
                        <p>偶是誰</p>
                      </div>
                      <span>666关注<i class="dot"></i>2551视频</span>
                    </div>
                    <button class="btn btn__focus">关注</button>
                  </div>
                  <div class="videoInfo">
                    <div class="title">
                      <p>{{ videoDetail.detail.title }}</p>
                    </div>
                    <ul class="tag__list">
                      <li class="list__item" v-for="tag in videoDetail.detail.tags">
                        <a href="#" class="btn">
                          <div class="title">
                            <div class="tag">#{{ tag }}</div>
                          </div>
                        </a>
                      </li>
                    </ul>
                    <div class="detail">
                      <div class="view"><span>{{ videoDetail.detail.watch }}</span>次播放</div>
                      <i class="dot"></i>
                      <div class="updated">{{ videoDetail.detail.post_date }} 发布</div>
                    </div>
                    <div class="interaction">
                      <a href="#" class="btn">
                        <i class="icon icon__love-w"></i>
                        <span>收藏</span>
                      </a>
                      <a href="#" class="btn" @click="payMoney = true">
                        <i class="icon icon__money-w"></i>
                        <span>打赏</span>
                      </a>
                      <a href="#" class="btn">
                        <i class="icon icon__share-w"></i>
                        <span>分享</span>
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </section>
            <section class="sectionMoney p:10">
              <img src="/_nuxt/assets/img/not-use/slider.jpg" alt="">
            </section>
            <section class="section sectionVideoPersonal">
              <div class="section__title">
                <div class="title">为您推荐</div>
              </div>
              <div class="featuredVideoPersonal">
                <div class="list">
                  <div class="item" v-for="recommend in videoDetail.recommend" @click="clickRecommend(recommend.code)">
                    <div class="preview">
                      <img class="img" v-lazy="recommend.finish_preview_url">
                    </div>
                    <div class="info">
                      <div class="title">
                        <p>{{ recommend.title }}</p>
                      </div>
                      <div class="info__bottom">
                        <div class="name">
                          <p>偶是誰</p>
                        </div>
                        <div class="interaction">
                          <a href="#" class="btn">
                            <i class="icon icon__view"></i>
                            <span>{{ recommend.watch }}</span>
                          </a>
                          <a href="#" class="btn">
                            <i class="icon icon__love"></i>
                            <span>{{ recommend.like }}</span>
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
            <section class="sectionMessage">
              <div class="section__title">
                <div class="title">热门评论</div>
              </div>
              <div class="featuredMessage">
                <div class="message__list">
                  <ul class="list">
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
                    <li class="item" v-for="n in 4">
                      <div class="info">
                        <div :class="'avatar vip vip__level' + n">
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
                  </ul>
                </div>
              </div>
            </section>
          </div>
        </div>
        <div class="footerTabbar footerComments" :class="none ? 'none' : ''">
          <Transition name="fadeInUp" appear>
            <div class="comments" v-if="comments">
              <div class="form">
                <div class="form__input">
                  <img class="form__icon" src="/_nuxt/assets/img/ic_edit.svg">
                  <input type="text" placeholder="优质评论优先展示">
                </div>
                <div class="form__button">
                  <a href="#" class="btn btn__submit" @click="comments = false">确定</a>
                </div>
              </div>
            </div>
          </Transition>
          <div class="footerComments__left">
            <a href="#" class="btn__comments" @click="comments = true">
              <div class="form">
                <div class="form__input">
                  <img class="form__icon" src="/_nuxt/assets/img/ic_edit.svg">
                  <span>优质评论优先展示</span>
                </div>
              </div>
            </a>
            <a href="#" class="btn__love" @click="addTags = true">
              <img src="/_nuxt/assets/img/ic_love_w.svg">
            </a>
          </div>
          <a href="/_template/shop" class="btn btn__unlimited">无限看</a>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { useMainStore } from '@/stores/main'
const mainStore = useMainStore()
const { onBodyScroll, doOpenRight } = usePublic()
const props = defineProps({
  code: {
    type: String,
    required: true
  }
})

const none = ref(false),
  videoDetailtab = ref(0),
  useVIP = ref(true),
  addTags= ref(false),
  payMoney= ref(false),
  pageVideoDetail= ref(true),
  comments= ref(false),
  detailContent = ref(null)

const videoDetail = reactive({
  detail: '',
  recommend: [],
})

const initVideoDetail = async (code) => {
  const { data, error } = await getVideoDetail(code)
  videoDetail.detail = data.value.detail
  videoDetail.recommend = data.value.recommend
  videoDetailtab.value = 0
  
  if (detailContent.value != null) {
    detailContent.value.scrollTo(0, 0)
  }

  setTimeout(() => {
    mainStore.pageLoading = false
  }, 500)
}

const clickRecommend = (code) => {
  mainStore.pageLoading = true
  videoDetail.recommend = []
  initVideoDetail(code)
}

initVideoDetail(props.code)
</script>