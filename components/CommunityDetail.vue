<template>
  <div class="floating openRight">
    <!-- 詳情 details -->
    <Transition name="fadeInRight" appear>
      <div class="dialog full communityDetails">
        <div class="dialog__overlay">
          <div class="dialog__header">
            <header class="pageHeader" :class="none ? 'none' : ''">
              <div class="pageHeader__back">
                <a href="#" class="btn btn__back" @click="communityDetails = false">
                  <img src="/img/ic_back.svg">
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
                <img src="/img/not-use/slider.jpg" alt="">
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
                    <img src="/img/ic_sort_up.svg" alt="正序" v-if="sort === true">
                    <img src="/img/ic_sort_down.svg" alt="反序" v-else>
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