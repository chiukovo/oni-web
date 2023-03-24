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
                </section>
              </div>
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
        <div class="pageHeader__recharge">
          <a href="#" class="btn recharge__btn">
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
                  <div class="item">
                    <div class="icon icon__coin icon__coin1"></div>
                    <div class="info">
                      <div class="money">100<span>币</span></div>
                      <div class="description">
                        <p>附有100币，再赠送20币</p>
                      </div>
                    </div>
                    <div class="btn btn__buy">¥200</div>
                  </div>
                  <div class="item">
                    <div class="icon icon__coin icon__coin2"></div>
                    <div class="info">
                      <div class="money">200<span>币</span></div>
                      <div class="description">
                        <p>附有100币，再赠送40币</p>
                      </div>
                    </div>
                    <div class="btn btn__buy">¥200</div>
                  </div>
                  <div class="item">
                    <div class="icon icon__coin icon__coin3"></div>
                    <div class="info">
                      <div class="money">500<span>币</span></div>
                      <div class="description">
                        <p>附有500币，再赠送100币</p>
                      </div>
                    </div>
                    <div class="btn btn__buy">¥200</div>
                  </div>
                  <div class="item">
                    <div class="icon icon__coin icon__coin4"></div>
                    <div class="info">
                      <div class="money">1000<span>币</span></div>
                      <div class="description">
                        <p>附有1000币，再赠送120币</p>
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
        footerPayment: true
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