<template>
  <div class="wrap">
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
          <div class="content" @scroll="scroll">
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
                          <!-- icon__level4: 至尊卡 / level3: 帝王卡 / level2: 终身会员 / level1: 月卡会员 -->
                          <div class="icon icon__level icon__level1"></div>
                          <span class="mem__level">月卡会员</span>
                          <!-- 只有月卡會員會顯示日期 -->
                          <span class="expiry__date">2023-04-08</span>
                        </div>
                      </div>
                      <!-- <div class="balance">
                        <div class="mem__balance">0 金币</div>
                      </div> -->
                    </div>
                  </div>
                </div>
              </section>
              <section class="section sectionShop">
                <div class="sectionShop__card">
                  <swiper
                    :slidesPerView="1.5"
                    :spaceBetween="-20"
                    :centeredSlides="true"
                    :speed="600"
                    :loop="true"
                    class="shopSwiper"
                  >
                    <swiper-slide>
                      <div class="card card_shop card_shop1"></div>
                      <!-- <img src="~/assets/img/card_shop1.png"> -->
                    </swiper-slide>
                    <swiper-slide>
                      <!-- <img src="~/assets/img/card_shop2.png"> -->
                      <div class="card card_shop card_shop2"></div>
                    </swiper-slide>
                    <swiper-slide>
                      <!-- <img src="~/assets/img/card_shop3.png"> -->
                      <div class="card card_shop card_shop3"></div>
                    </swiper-slide>
                    <swiper-slide>
                      <!-- <img src="~/assets/img/card_shop4.png"> -->
                      <div class="card card_shop card_shop4"></div>
                    </swiper-slide>
                  </swiper>
                </div>
                <div class="sectionShop__cardInfo">
                  <div class="cardInfo__header">
                    <div class="level">
                      <div class="icon icon__level icon__level1"></div>
                      <span class="mem__level">月卡会员</span>
                    </div>
                    <div class="describe">
                      <p>使用期限： 2023-4-23</p>
                    </div>
                  </div>
                  <div class="cardInfo__body">
                    <div class="hr">
                      <span>VIP特权</span>
                    </div>
                    <ul class="right__list">
                      <li class="item">
                        <div class="icon icon__right icon__right1"></div>
                        <div class="title">VIP资源</div>
                      </li>
                      <li class="item">
                        <div class="icon icon__right icon__right2"></div>
                        <div class="title">高速加载</div>
                      </li>
                      <li class="item">
                        <div class="icon icon__right icon__right3"></div>
                        <div class="title">评论吐槽</div>
                      </li>
                      <li class="item">
                        <div class="icon icon__right icon__right4"></div>
                        <div class="title">免广告</div>
                      </li>
                      <li class="item">
                        <div class="icon icon__right icon__right5"></div>
                        <div class="title">解锁轮盘</div>
                      </li>
                      <li class="item">
                        <div class="icon icon__right icon__right6"></div>
                        <div class="title">解锁高级通行证</div>
                      </li>
                    </ul>
                  </div>
                  <div class="cardInfo__footer">
                    <button class="btn btn__payment">立即支付</button>
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

  import { Swiper, SwiperSlide } from 'swiper/vue';
  import { Pagination } from 'swiper';

  export default {
    data() {
      return {
        height: '',
        none: false,
        shopTab: 0,
      }
    },
    components: {
      Swiper,
      SwiperSlide,
    },
    setup() {
      return {
        modules: [Pagination],
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


<style>
  .swiper {
    width: 100%;
    height: 100%;
  }
</style>