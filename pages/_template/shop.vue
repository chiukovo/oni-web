<template>
  <div class="wrap">
    <!-- footer_付款 -->
    <Transition name="pops" duration="550" appear>
      <div class="pops pops-full pops-bottom footerPayment" v-if="footerPayment === true">
        <div class="pops__overlay">
          <div class="pops__container">
            <div class="pops__header">
              <div class="pops__title">
                <div class="title">選擇支付方式</div>
              </div>
              <div class="pops__close">
                <div class="btn btn__close" @click="footerPayment = false">
                  <img src="/_nuxt/assets/img/ic_close.svg">
                </div>
              </div>
            </div>
            <div class="pops__body">
              <div class="content">
                <section class="sectionPayment">
                  <div class="section__title">
                    <div class="title">¥100</div>
                  </div>
                  <div class="section__body">
                    <div class="payment__list">
                      <div class="item">
                        <label for="r1" class="label">
                          <div class="left">
                            <div class="icon">
                              <img src="~/assets/img/ic_payment_alipay.png" alt="支付宝">
                            </div>
                            <div class="title"><span>支付宝</span></div>
                          </div>
                          <div class="right">
                            <input type="radio" name="radio" id="r1" value="alipay" checked>
                          </div>
                        </label>
                        <div class="channel">
                          <div class="channel__group">
                            <button class="btn btn__select active">龙支付</button>
                            <button class="btn btn__select">芙蓉支付</button>
                            <button class="btn btn__select">蚂蚁支付</button>
                          </div>
                        </div>
                      </div>
                      <div class="item">
                        <label for="r2" class="label">
                          <div class="left">
                            <div class="icon">
                              <img src="~/assets/img/ic_payment_weixin.png" alt="微信">
                            </div>
                            <div class="title"><span>微信</span></div>
                          </div>
                          <div class="right">
                            <input type="radio" name="radio" id="r2" value="weixin">
                          </div>
                        </label>
                      </div>
                    </div>
                  </div>
                  <div class="section__footer">
                    <button class="btn btn__payment">立即支付</button>
                  </div>
                </section>
              </div>
            </div>
          </div>
        </div>
        <div class="pops__mask" @click="footerPayment = false"></div>
      </div>
    </Transition>
    <!-- 充值明細 details -->
    <Transition name="fadeInRight" appear>
      <div class="dialog full shopDetails" v-if="shopDetails === true">
        <div class="dialog__overlay">
          <div class="dialog__header">
            <header class="pageHeader">
              <div class="pageHeader__back">
                <a href="#" class="btn btn__back" @click="shopDetails = false">
                  <img src="/_nuxt/assets/img/ic_back.svg">
                </a>
              </div>
              <div class="pageHeader__title">
                <div class="title">充值明细</div>
              </div>
              <div class="pageHeader__right">
                <a href="#" class="btn btn-right" @click="getMoney = true">
                  <img src="/_nuxt/assets/img/ic_getMoney.svg" alt="马上赚钱">
                </a>
              </div>
            </header>
          </div>
          <div class="dialog__body">
            <div class="content" @scroll="scroll">
              <section class="sectionShopDetails">
                <table class="table">
                  <tr>
                    <td>
                      <div class="info">支付寶充值月卡會員</div>
                      <div class="expirationDate">有效期限 2023-3-30~2023-4-30</div>
                      <div class="date">2023-3-30 13:20:11</div>
                    </td>
                    <td class="text-right">¥100</td>
                    <td class="text-center"><span class="btn__tags">未付款</span></td>
                  </tr>
                  <tr>
                    <td>
                      <div class="info">微信充值至尊卡</div>
                      <div class="date">2023-3-30 13:20:11</div>
                    </td>
                    <td class="text-right">¥500</td>
                    <td class="text-center"><span class="btn__tags btn__tags-green">已付款</span></td>
                  </tr>
                  <tr>
                    <td>
                      <div class="info">微信充值金幣1,000</div>
                      <div class="date">2023-3-30 13:20:11</div>
                    </td>
                    <td class="text-right">¥1,000</td>
                    <td class="text-center"><span class="btn__tags btn__tags-gray">訂單失效</span></td>
                  </tr>
                </table>
              </section>
            </div>
          </div>
        </div>
      </div>
    </Transition>
    <!-- 馬上賺錢 getMoney -->
    <Transition name="fadeInRight" appear>
      <div class="dialog full dialogGetMoney" v-if="getMoney === true">
        <div class="dialog__overlay">
          <div class="dialog__header">
            <header class="pageHeader">
              <div class="pageHeader__back">
                <a href="#" class="btn btn__back" @click="getMoney = false">
                  <img src="/_nuxt/assets/img/ic_back.svg">
                </a>
              </div>
              <div class="pageHeader__right">
                <a href="#" class="btn btn-right" @click="getMoneyDetails = true">
                  <img src="/_nuxt/assets/img/ic_getMoneyDetail.svg" alt="推广纪录">
                </a>
              </div>
            </header>
          </div>
          <div class="dialog__body">
            <div class="content" @scroll="scroll">
              <section class="section sectionGetMoney">
                <div class="getMoney">
                  <div class="getMoney__header">
                    <img src="/_nuxt/assets/img/getMoney_header.png" alt="邀请好朋友看片赚钱">
                  </div>
                  <div class="getMoney__body">
                    <div class="qrcode">
                      <div class="title">我的推广码</div>
                      <div class="code">F0W8EY</div>
                      <div class="describe">*好友也可在注册时直接填写你的邀请码</div>
                      <div class="qrcode__img">
                        <img src="/_nuxt/assets/img/not-use/qrcode.png">
                      </div>
                    </div>
                    <div class="button__group">
                      <button class="btn btn__share">复制链接分享</button>
                      <button class="btn btn__share">保存图片分享</button>
                    </div>
                  </div>
                  <div class="getMoney__footer">
                    <img src="/_nuxt/assets/img/getMoney_stepHeader1.png" class="img_getMoneystepHeader1">
                    <img src="/_nuxt/assets/img/getMoney_step.png" class="img_getMoneystep">
                    <img src="/_nuxt/assets/img/getMoney_stepHeader2.png" class="img_getMoneystepHeader2">
                    <div class="qand">
                      <ul>
                        <li>
                          <div class="qand__q">怎样才算邀请成功？</div>
                          <div class="qand__a">发送推广链接给其他新用户，用户第一次安装并打开app后算 邀请成功，或在个人中心输入您的推广码。</div>
                        </li>
                        <li>
                          <div class="qand__q">为什么推广链接别人打不开？</div>
                          <div class="qand__a">请勿使用微信或者QQ等第三方内置浏览器打开，因为包含色情内容导致被屏蔽，推荐使用自带浏览器或UC等浏览器打开。</div>
                        </li>
                        <li>
                          <div class="qand__q">分享到什么平台？</div>
                          <div class="qand__a">复制推广链接或推广图转发3个tg群(重复群无效)、微信群、 qq群、抖音、今日头条、微博、陌陌等平台，联系在线客服并 发出截图，即可领取【3天VIP】，可无限叠加！</div>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </section>
            </div>
          </div>
        </div>
      </div>
    </Transition>
    <!-- 推廣紀錄 getMoneyDetails -->
    <Transition name="fadeInRight" appear>
      <div class="dialog full getMoneyDetails" v-if="getMoneyDetails === true">
        <div class="dialog__overlay">
          <div class="dialog__header">
            <header class="pageHeader">
              <div class="pageHeader__back">
                <a href="#" class="btn btn__back" @click="getMoneyDetails = false">
                  <img src="/_nuxt/assets/img/ic_back.svg">
                </a>
              </div>
              <div class="pageHeader__title">
                <div class="title">推广纪录</div>
              </div>
            </header>
          </div>
          <div class="dialog__body">
            <div class="content" @scroll="scroll">
              <section class="sectionGetMoney">
                <table class="table">
                  <tr>
                    <th class="text-left">被邀请者暱称</th>
                    <th class="text-right">加入时间</th>
                  </tr>
                  <tr v-for="n in 10">
                    <td>小明{{ n }}</td>
                    <td class="text-right">2023-3-30 11:33:22</td>
                  </tr>
                </table>
              </section>
            </div>
          </div>
        </div>
      </div>
    </Transition>
    <div class="container">
      <header class="pageHeader" :class="none ? 'none' : ''">
        <div class="pageHeader__back">
          <a href="#" class="btn btn__back" @click="authorMore = false">
            <img src="/_nuxt/assets/img/ic_back.svg">
          </a>
        </div>
        <div class="pageHeader__titleTab">
          <button class="btn" :class="shopTab == '0' ? 'current' : ''" @click="shopTab = 0">
            <div class="title">会员VIP</div>
          </button>
          <button class="btn" :class="shopTab == '1' ? 'current' : ''" @click="shopTab = 1">
            <div class="title">充值币</div>
          </button>
        </div>
        <div class="pageHeader__right">
          <a href="#" class="btn btn-right" @click="shopDetails = true">
            <img src="/_nuxt/assets/img/ic_shopDetail.svg" alt="充值明細">
          </a>
        </div>
      </header>
      <main class="main">
        <Transition appear>
          <div class="content" @scroll="scroll" v-if="shopTab === 0">
            <div class="flex full flex-direction:column">
              <section class="section sectionShop">
                <div class="sectionShop__card">
                  <swiper
                    :slidesPerView="1.5"
                    :centeredSlides="true"
                    :loop="true"
                    :modules="[Thumbs]"
                    :thumbs="{ swiper: thumbsSwiper }"
                    class="shopSwiper__card"
                  >
                    <swiper-slide>
                      <div class="card card_shop card_shop1"></div>
                    </swiper-slide>
                    <swiper-slide>
                      <div class="card card_shop card_shop2"></div>
                    </swiper-slide>
                    <swiper-slide>
                      <div class="card card_shop card_shop3"></div>
                    </swiper-slide>
                    <swiper-slide>
                      <div class="card card_shop card_shop4"></div>
                    </swiper-slide>
                  </swiper>
                  <swiper
                    :modules="[Thumbs]"
                    watch-slides-progress
                    @swiper="setThumbsSwiper"
                    class="shopSwiper__cardInfo"
                  >
                    <swiper-slide>
                      <div class="sectionShop__cardInfo">
                        <div class="cardInfo__header">
                          <div class="level">
                            <div class="icon icon__level icon__level1"></div>
                            <span class="mem__level">月卡会员 ¥100</span>
                          </div>
                          <div class="describe">
                            <p>权限: 1个月会员</p>
                          </div>
                        </div>
                        <div class="cardInfo__body">
                          <div class="hr">
                            <span>VIP特权</span>
                          </div>
                          <ul class="vip__list vip__list1">
                            <li class="item">
                              <div class="icon icon__vip icon__vip1"></div>
                              <div class="title">VIP资源</div>
                            </li>
                            <li class="item">
                              <div class="icon icon__vip icon__vip2"></div>
                              <div class="title">高速加载</div>
                            </li>
                            <li class="item">
                              <div class="icon icon__vip icon__vip3"></div>
                              <div class="title">评论吐槽</div>
                            </li>
                            <li class="item">
                              <div class="icon icon__vip icon__vip4"></div>
                              <div class="title">免广告</div>
                            </li>
                          </ul>
                        </div>
                        <div class="cardInfo__footer">
                          <button class="btn btn__payment">立即支付</button>
                        </div>
                      </div>
                    </swiper-slide>
                    <swiper-slide>
                      <div class="sectionShop__cardInfo">
                        <div class="cardInfo__header">
                          <div class="level">
                            <div class="icon icon__level icon__level2"></div>
                            <span class="mem__level">終身會員 ¥200</span>
                          </div>
                          <div class="describe">
                            <p>权限: 永久会员</p>
                          </div>
                        </div>
                        <div class="cardInfo__body">
                          <div class="hr">
                            <span>VIP特权</span>
                          </div>
                          <ul class="vip__list vip__list1">
                            <li class="item">
                              <div class="icon icon__vip icon__vip1"></div>
                              <div class="title">VIP资源</div>
                            </li>
                            <li class="item">
                              <div class="icon icon__vip icon__vip2"></div>
                              <div class="title">高速加载</div>
                            </li>
                            <li class="item">
                              <div class="icon icon__vip icon__vip3"></div>
                              <div class="title">评论吐槽</div>
                            </li>
                            <li class="item">
                              <div class="icon icon__vip icon__vip4"></div>
                              <div class="title">免广告</div>
                            </li>
                          </ul>
                        </div>
                        <div class="cardInfo__footer">
                          <button class="btn btn__payment">立即支付</button>
                        </div>
                      </div>
                    </swiper-slide>
                    <swiper-slide>
                      <div class="sectionShop__cardInfo">
                        <div class="cardInfo__header">
                          <div class="level">
                            <div class="icon icon__level icon__level3"></div>
                            <span class="mem__level">帝王卡 ¥300</span>
                          </div>
                          <div class="describe">
                            <p>权限: 永久会员 + 转盘 10 连抽 30 次</p>
                          </div>
                        </div>
                        <div class="cardInfo__body">
                          <div class="hr">
                            <span>VIP特权</span>
                          </div>
                          <ul class="vip__list vip__list2">
                            <li class="item">
                              <div class="icon icon__vip icon__vip1"></div>
                              <div class="title">VIP资源</div>
                            </li>
                            <li class="item">
                              <div class="icon icon__vip icon__vip2"></div>
                              <div class="title">高速加载</div>
                            </li>
                            <li class="item">
                              <div class="icon icon__vip icon__vip3"></div>
                              <div class="title">评论吐槽</div>
                            </li>
                            <li class="item">
                              <div class="icon icon__vip icon__vip4"></div>
                              <div class="title">免广告</div>
                            </li>
                            <li class="item">
                              <div class="icon icon__vip icon__vip5"></div>
                              <div class="title">解锁轮盘</div>
                            </li>
                          </ul>
                        </div>
                        <div class="cardInfo__footer">
                          <button class="btn btn__payment">立即支付</button>
                        </div>
                      </div>
                    </swiper-slide>
                    <swiper-slide>
                      <div class="sectionShop__cardInfo">
                        <div class="cardInfo__header">
                          <div class="level">
                            <div class="icon icon__level icon__level4"></div>
                            <span class="mem__level">至尊卡 ¥500</span>
                          </div>
                          <div class="describe">
                            <p>权限: 永久会员 + 转盘 10 连抽 50 次</p>
                          </div>
                        </div>
                        <div class="cardInfo__body">
                          <div class="hr">
                            <span>VIP特权</span>
                          </div>
                          <ul class="vip__list vip__list2">
                            <li class="item">
                              <div class="icon icon__vip icon__vip1"></div>
                              <div class="title">VIP资源</div>
                            </li>
                            <li class="item">
                              <div class="icon icon__vip icon__vip2"></div>
                              <div class="title">高速加载</div>
                            </li>
                            <li class="item">
                              <div class="icon icon__vip icon__vip3"></div>
                              <div class="title">评论吐槽</div>
                            </li>
                            <li class="item">
                              <div class="icon icon__vip icon__vip4"></div>
                              <div class="title">免广告</div>
                            </li>
                            <li class="item">
                              <div class="icon icon__vip icon__vip5"></div>
                              <div class="title">解锁轮盘</div>
                            </li>
                            <li class="item">
                              <div class="icon icon__vip icon__vip6"></div>
                              <div class="title">解锁高级通行证</div>
                            </li>
                          </ul>
                        </div>
                        <div class="cardInfo__footer">
                          <button class="btn btn__payment">立即支付</button>
                        </div>
                      </div>
                    </swiper-slide>
                  </swiper>
                </div>
              </section>
            </div>
          </div>
          <div class="content" @scroll="scroll" v-else>
            <div class="flex full flex-direction:column">
              <section class="section sectionAuthor">
                <div class="author__info">
                  <div class="info">
                    <div class="avatar">
                      <img class="img" src="https://api.bcyapp005.com/storage/files/shares/HH/3/f533de42-4806-4108-beec-612bc6e47b5c.jpg">
                    </div>
                    <div class="title">
                      <div class="name">
                        <p>使用者名称使用者名称使用者名称使用者名称使用者名称</p>
                      </div>
                      <div class="level">
                        <div class="level__card">
                          <div class="icon icon__level icon__level1"></div>
                          <span class="mem__level">月卡会员</span>
                          <span class="expiry__date">2023-04-08</span>
                        </div>
                        <div class="balance">
                          <div class="mem__balance">0 金币</div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </section>
              <section class="section sectionShop">
                <div class="shop__list">
                  <div class="item" @click="footerPayment = true">
                    <div class="icon icon__coin icon__coin1"></div>
                    <div class="info">
                      <div class="money">100<span>币</span></div>
                      <div class="description">
                        <p>附有100币，再赠送20币</p>
                      </div>
                    </div>
                    <div class="btn btn__buy">¥200</div>
                  </div>
                  <div class="item" @click="footerPayment = true">
                    <div class="icon icon__coin icon__coin2"></div>
                    <div class="info">
                      <div class="money">200<span>币</span></div>
                      <div class="description">
                        <p>附有100币，再赠送40币</p>
                      </div>
                    </div>
                    <div class="btn btn__buy">¥200</div>
                  </div>
                  <div class="item" @click="footerPayment = true">
                    <div class="icon icon__coin icon__coin3"></div>
                    <div class="info">
                      <div class="money">500<span>币</span></div>
                      <div class="description">
                        <p>附有500币，再赠送100币</p>
                      </div>
                    </div>
                    <div class="btn btn__buy">¥200</div>
                  </div>
                  <div class="item" @click="footerPayment = true">
                    <div class="icon icon__coin icon__coin4"></div>
                    <div class="info">
                      <div class="money">1,000<span>币</span></div>
                      <div class="description">
                        <p>附有1,000币，再赠送120币</p>
                      </div>
                    </div>
                    <div class="btn btn__buy">¥100</div>
                  </div>
                </div>
              </section>
            </div>
          </div>
        </Transition>
      </main>
    </div>
  </div>
</template>

<script>
  import { ref } from 'vue';
  import { Thumbs } from 'swiper';
  import { Swiper, SwiperSlide } from 'swiper/vue';
  export default {
    data() {
      return {
        height: '',
        none: false,
        shopTab: 1,
        footerPayment: false,
        shopDetails: false,
        getMoney: false,
        getMoneyDetails: false
      }
    },
    components: {
      Swiper,
      SwiperSlide,
    },
    setup() {
      const thumbsSwiper = ref(null);
      const setThumbsSwiper = (swiper) => {
        thumbsSwiper.value = swiper;
      };
      return {
        Thumbs,
        thumbsSwiper,
        setThumbsSwiper,
      };
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

<style lang="sass">
.swiper.shopSwiper
  width: 100%
  height: 100%
.shopSwiper__cardInfo
  .swiper-slide
    height: auto
.swiper-slide
  display: flex
  flex-direction: column
</style>