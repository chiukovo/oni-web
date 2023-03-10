<template>
  <div class="wrap">
    <div class="container">
      <section class="sectionVideoDetail">
        <div class="videoDetail">
          <div class="item">
            <div class="videoGroup">
              <div class="pageBack">
                <div class="btn btn__back">
                  <a href="/_template/demo" class="btn btn__back" @click="authorMore = false">
                    <img src="/_nuxt/assets/img/ic_back.svg">
                  </a>
                </div>
              </div>
              <!-- 未開通VIP -->
              <!-- <div class="previewLock">
                <div class="lock">
                  <p>開通VIP解鎖完整版<span>></span></p>
                </div>
                <div class="time"><span>2:12</span></div>
                <img class="img" src="https://api.bcyapp005.com/storage/files/shares/HH/3/f533de42-4806-4108-beec-612bc6e47b5c.jpg">
              </div> -->
              <!-- 開通VIP -->
              <div class="preview">
                <div class="time"><span>2:12</span></div>
                <img class="img" src="https://api.bcyapp005.com/storage/files/shares/HH/3/f533de42-4806-4108-beec-612bc6e47b5c.jpg">
              </div>
            </div>
            <div class="videoTab">
              <div class="videoTab__list">
                <ul class="list">
                  <li :class="videoDetailtab == '0' ? 'current' : ''">
                    <a href="#" class="btn" @click="videoDetailtab = 0">
                      <span>简介</span>
                    </a>
                  </li>
                  <li :class="videoDetailtab == '1' ? 'current' : ''">
                    <a href="#" class="btn" @click="videoDetailtab = 1">
                      <span>评论199999</span>
                    </a>
                  </li>
                </ul>
              </div>
              <div class="btn btn__reports">举报</div>
            </div>
          </div>
        </div>
      </section>
      <main class="main">
        <Transition appear>
          <div class="content" @scroll="scroll" v-if="videoDetailtab === 0">
            <section class="sectionVideoDetail">
              <div class="videoDetail">
                <div class="item">
                  <div class="info">
                    <div class="avatar">
                      <img class="img" src="https://api.bcyapp005.com/storage/files/shares/HH/3/f533de42-4806-4108-beec-612bc6e47b5c.jpg">
                    </div>
                    <div class="title">
                      <div class="name">
                        <p>露脸女朋友 大一女生爱露脸 直拨镜头 露脸女朋友 露脸女朋友</p>
                      </div>
                      <span>88888888关注<i class="dot"></i>2551视频</span>
                    </div>
                    <button class="btn btn__focus">关注</button>
                  </div>
                  <div class="videoInfo">
                    <div class="title">
                      <p>露脸女朋友 大一女生爱露脸 直拨镜头 露脸女朋友 露脸女朋友</p>
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
                      <div class="view">102次播放</div>
                      <i class="dot"></i>
                      <div class="great">13个赞</div>
                      <i class="dot"></i>
                      <div class="date">2023-03-07 19:26:08 发布</div>
                    </div>
                    <div class="interaction">
                      <a href="#" class="btn">
                        <i class="icon icon__love-w"></i>
                        <span>喜欢</span>
                      </a>
                      <a href="#" class="btn">
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
                            <i class="icon icon__great"></i>
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
            <section class="sectionVideoMessage">
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
                          <span>2021-08-30</span>
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
                          <span>2021-08-30</span>
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
        </Transition>
      </main>
    </div>
  </div>
</template>

<script>
  import '@master/normal.css';
  import '@master/css';

  export default {
    data() {
      return {
        videoDetailtab: 0
      }
    },
  };
</script>