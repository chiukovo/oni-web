<template>
  <div class="wrap member__wrap">
    <!-- 修改密碼 -->
    <Transition name="pops" duration="550" appear>
      <div class="pops memExchangePassword" v-if="memExchangePassword === true">
        <div class="pops__overlay">
          <div class="pops__container">
            <div class="pops__header">
              <div class="pops__title pops__title-center">
                <div class="title">修改密码</div>
              </div>
              <div class="pops__close">
                <div class="btn btn__close" @click="memExchangePassword = false; toast = false">
                  <img src="/_nuxt/assets/img/ic_close.svg">
                </div>
              </div>
            </div>
            <div class="pops__body">
              <div class="content">
                <section class="section sectionForm">
                  <div class="form">
                    <div class="form__input">
                      <img class="form__icon" src="/_nuxt/assets/img/ic_lock.svg">
                      <input type="password" placeholder="请输入目前密码">
                    </div>
                    <div class="form__space"></div>
                    <div class="form__input">
                      <img class="form__icon" src="/_nuxt/assets/img/ic_lock_new.svg">
                      <input type="password" placeholder="请输入新密码">
                    </div>
                    <div class="form__input">
                      <img class="form__icon" src="/_nuxt/assets/img/ic_lock_new.svg">
                      <input type="password" placeholder="请再次输入新密码">
                    </div>
                  </div>
                </section>
              </div>
              <div class="pops__footer">
                <div class="button__group">
                  <button class="btn btn__checked" @click="toast = true">确认</button>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="pops__mask" @click="memExchangePassword = false"></div>
      </div>
    </Transition>
    <!-- 綁定手機 -->
    <Transition name="pops" duration="550" appear>
      <div class="pops memExchangePhone" v-if="memExchangePhone === true">
        <div class="pops__overlay">
          <div class="pops__container">
            <div class="pops__header">
              <div class="pops__title pops__title-center">
                <div class="title">绑定手机</div>
              </div>
              <div class="pops__close">
                <div class="btn btn__close" @click="memExchangePhone = false; toast = false">
                  <img src="/_nuxt/assets/img/ic_close.svg">
                </div>
              </div>
            </div>
            <div class="pops__body">
              <div class="content">
                <section class="section sectionForm">
                  <div class="form">
                    <div class="form__input">
                      <img class="form__icon" src="/_nuxt/assets/img/ic_phone.svg">
                      <input type="tel" placeholder="请输入手机号码" value="0912345678" disabled>
                    </div>
                    <div class="form__input">
                      <button class="getSecurityCode btn__tags btn__tags-white">獲得驗證碼</button>
                      <img class="form__icon" src="/_nuxt/assets/img/ic_security.svg">
                      <input type="number" placeholder="驗證碼">
                    </div>
                  </div>
                </section>
              </div>
              <div class="pops__footer">
                <div class="button__group">
                  <button class="btn btn__checked" @click="toast = true">绑定</button>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="pops__mask" @click="memExchangePhone = false"></div>
      </div>
    </Transition>
    <!-- 暱稱 -->
    <Transition name="pops" duration="550" appear>
      <div class="pops memExchangeName" v-if="memExchangeName === true">
        <div class="pops__overlay">
          <div class="pops__container">
            <div class="pops__header">
              <div class="pops__title pops__title-center">
                <div class="title">昵称</div>
              </div>
              <div class="pops__close">
                <div class="btn btn__close" @click="memExchangeName = false; toast = false">
                  <img src="/_nuxt/assets/img/ic_close.svg">
                </div>
              </div>
            </div>
            <div class="pops__body">
              <div class="content">
                <section class="section sectionForm">
                  <div class="form">
                    <div class="form__input">
                      <img class="form__icon" src="/_nuxt/assets/img/ic_edit.svg">
                      <input type="text" placeholder="请输入昵称（不超过15字）" value="">
                    </div>
                  </div>
                </section>
              </div>
              <div class="pops__footer">
                <div class="button__group">
                  <button class="btn btn__checked" @click="toast = true">确认</button>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="pops__mask" @click="memExchangeName = false"></div>
      </div>
    </Transition>
    <!-- 個人管理 -->
    <Transition name="fadeInRight" appear>
      <div class="dialog full authorSettings" v-if="authorSettings === true">
        <div class="dialog__overlay">
          <div class="dialog__header">
            <header class="pageHeader">
              <div class="pageHeader__back">
                <a href="#" class="btn btn__back" @click="authorSettings = false">
                  <img src="/_nuxt/assets/img/ic_back.svg">
                </a>
              </div>
              <div class="pageHeader__title">
                <div class="title">个人管理</div>
              </div>
            </header>
          </div>
          <div class="dialog__body">
            <div class="content">
              <section class="sectionAuthorSettings">
                <div class="set__avatar">
                  <div class="avatar">
                    <div class="edit">编辑</div>
                    <img class="img" src="https://api.bcyapp005.com/storage/files/shares/HH/3/f533de42-4806-4108-beec-612bc6e47b5c.jpg">
                  </div>
                  <div class="title">
                    <div class="name">
                      <p>露臉女朋友 大一女生</p>
                    </div>
                    <div class="admin">
                      <p>@admin</p>
                    </div>
                  </div>
                </div>
                <div class="set__list">
                  <div class="list">
                    <a href="#" class="item hasNext" @click="memExchangeName = true">
                      <div class="title">昵称</div>
                      <div class="info">露脸女朋友 大一女生</div>
                    </a>
                    <a href="#" class="item hasNext" @click="memExchangePhone = true">
                      <div class="title">绑定手机</div>
                      <div class="info">09** *** ***</div>
                    </a>
                    <a href="#" class="item hasNext" @click="memExchangePassword = true">
                      <div class="title">修改密码</div>
                    </a>
                  </div>
                  <div class="list">
                    <a href="#" class="item hasNext">
                      <div class="title">邀请码</div>
                      <div class="info">Xdfsldj</div>
                    </a>
                    <a href="#" class="item hasNext">
                      <div class="title">兑换码</div>
                    </a>
                  </div>
                  <div class="list">
                    <a href="#" class="item hasNext" @click="authorChannel = true">
                      <div class="title">频道设定</div>
                    </a>
                  </div>
                </div>
              </section>
            </div>
          </div>
        </div>
      </div>
    </Transition>
    <!-- 頻道設定 -->
    <Transition name="fadeInRight" appear>
      <div class="dialog full authorChannel" v-if="authorChannel === true">
        <div class="dialog__overlay">
          <div class="dialog__header">
            <header class="pageHeader">
              <div class="pageHeader__back">
                <a href="#" class="btn btn__back" @click="authorChannel = false">
                  <img src="/_nuxt/assets/img/ic_back.svg">
                </a>
              </div>
              <div class="pageHeader__title">
                <div class="title">频道设定</div>
              </div>
              <div class="pageHeader__right">
                <a href="#" class="btn btn__primary">完成</a>
              </div>
            </header>
          </div>
          <div class="dialog__body">
            <div class="content">
              <section class="sectionAuthorChannel">
                <div class="channel__list">
                  <div class="title">
                    <div class="icon">
                      <img src="~/assets/img/ic_channel_1.png" alt="我的频道">
                    </div>
                    <span class="primary">我的频道</span>
                    <span class="secondary">长按拖动可排序</span>
                  </div>
                  <div class="tags">
                    <ul class="tag__list">
                      <li class="list__item">
                        <a href="#" class="btn disabled">
                          <div class="title">
                            <div class="tag">关注</div>
                          </div>
                        </a>
                      </li>
                      <li class="list__item">
                        <a href="#" class="btn disabled">
                          <div class="title">
                            <div class="tag">推荐</div>
                          </div>
                        </a>
                      </li>
                      <li class="list__item" v-for="n in 7">
                        <button class="icon icon__clear"></button>
                        <a href="#" class="btn">
                          <div class="title">
                            <div class="tag">频道 {{ n }}</div>
                          </div>
                        </a>
                      </li>
                    </ul>
                  </div>
                </div>
                <div class="channel__list">
                  <div class="title">
                    <div class="icon">
                      <img src="~/assets/img/ic_channel_2.png" alt="添加更多頻道">
                    </div>
                    <span class="primary">添加更多頻道</span>
                    <span class="secondary">按+可添加频道到首页</span>
                  </div>
                  <div class="tags">
                    <ul class="tag__list">
                      <li class="list__item" v-for="n in 9">
                        <button class="icon icon__add"></button>
                        <a href="#" class="btn">
                          <div class="title">
                            <div class="tag">频道 {{ n }}</div>
                          </div>
                        </a>
                      </li>
                    </ul>
                  </div>
                </div>
              </section>
            </div>
          </div>
        </div>
      </div>
    </Transition>
    <Transition name="toasts" appear>
      <div class="toast" v-if="toast === true">
        <div class="text">已经填写邀请码</div>
      </div>
    </Transition>
    <!-- 兌換碼、邀請碼 -->
    <Transition name="pops" duration="550" appear>
      <div class="pops memExchange" v-if="memExchange === true">
        <div class="pops__overlay">
          <div class="pops__container">
            <div class="pops__header">
              <div class="pops__title pops__title-center">
                <div class="title">兑换码</div>
              </div>
              <div class="pops__close">
                <div class="btn btn__close" @click="memExchange = false, toast = false">
                  <img src="/_nuxt/assets/img/ic_close.svg">
                </div>
              </div>
            </div>
            <div class="pops__body">
              <div class="content">
                <section class="section sectionForm">
                  <div class="form">
                    <div class="form__input">
                      <img class="form__icon" src="/_nuxt/assets/img/ic_edit.svg">
                      <input type="text" placeholder="请输入兑换码" value="">
                    </div>
                  </div>
                </section>
              </div>
              <div class="pops__footer">
                <div class="button__group">
                  <button class="btn btn__checked" @click="toast = true">确认</button>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="pops__mask" @click="memExchange = false"></div>
      </div>
    </Transition>
    <div class="container">
      <header class="pageHeader" :class="none ? 'none' : ''">
        <div class="pageHeader__title">
          <div class="title">會員中心</div>
        </div>
      </header>
      <main class="main">
        <Transition appear>
          <div class="content" @scroll="scroll">
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
                        <span class="mem__level">一般会员</span>
                      </div>
                      <div class="level__button">
                        <a href="#" class="btn" @click="userLogin = true" v-if="userLogin === false">登入/注册<span class="hasIcon">&gt;</span></a>
                        <a href="#" class="btn" @click="authorSettings = true" v-if="userLogin === true">个人管理<span class="hasIcon">&gt;</span></a>
                      </div>
                    </div>
                  </div>
                </div>
                <div class="total">
                  <div class="item">
                    <div class="number">831</div>
                    <div class="title">视频</div>
                  </div>
                  <div class="item">
                    <div class="number">11</div>
                    <div class="title">微头条</div>
                  </div>
                  <div class="item">
                    <div class="number">31 423</div>
                    <div class="title">被喜欢</div>
                  </div>
                </div>
              </div>
            </section>
            <section class="sectionMemContent">
              <div class="mem__joinVIP" v-if="userLogin === false">
                <img src="~/assets/img/mem_headerButton.png" alt="开通VIP" class="joinVIP">
              </div>
              <div class="mem__toplist">
                <div class="title">推荐服务</div>
                <div class="list">
                  <a href="/_template/wallet" class="item">
                    <div class="icon icon__mem-toplist1"></div>
                    <div class="title">钱包</div>
                  </a>
                  <a href="#" class="item">
                    <div class="icon icon__mem-toplist2"></div>
                    <div class="title">分享无限看</div>
                  </a>
                  <a href="#" class="item">
                    <div class="icon icon__mem-toplist3"></div>
                    <div class="title">代理赚钱</div>
                  </a>
                  <a href="#" class="item">
                    <div class="icon icon__mem-toplist4"></div>
                    <div class="title">我的喜欢</div>
                  </a>
                  <a href="#" class="item">
                    <div class="icon icon__mem-toplist5"></div>
                    <div class="title">我的微贴</div>
                  </a>
                </div>
              </div>
              <div class="mem__list">
                <div class="title">更多服务</div>
                <div class="list">
                  <a href="#" class="item hasNext">
                    <div class="icon icon__mem-list1"></div>
                    <div class="title">我的消息</div>
                  </a>
                  <a href="#" class="item hasNext">
                    <div class="icon icon__mem-list2"></div>
                    <div class="title">官方公告</div>
                  </a>
                  <a href="#" class="item">
                    <div class="icon icon__mem-list3"></div>
                    <div class="title">加入官方群</div>
                  </a>
                  <a href="#" class="item hasNext">
                    <div class="icon icon__mem-list4"></div>
                    <div class="title">应用中心</div>
                  </a>
                  <a href="#" class="item hasNext" @click="memExchange = true">
                    <div class="icon icon__mem-list5"></div>
                    <div class="title">兑换码</div>
                  </a>
                  <a href="#" class="item hasNext" @click="memExchange = true">
                    <div class="icon icon__mem-list6"></div>
                    <div class="title">邀请码</div>
                  </a>
                  <a href="#" class="item hasNext" v-if="userLogin === true">
                    <div class="icon icon__mem-list6"></div>
                    <div class="title">我的频道</div>
                  </a>
                  <a href="#" class="item hasNext" v-if="userLogin === true" @click="userLogin = false">
                    <div class="icon icon__mem-list6"></div>
                    <div class="title">登出</div>
                  </a>
                </div>
              </div>
            </section>
            <section class="sectionVersion">
              <p>当前版本<span>v1.3.0</span></p>
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
      <NuxtLink class="btn" to="/_template/community">
        <div class="icon icon__4"></div>
        <div class="title">社区</div>
      </NuxtLink>
      <NuxtLink class="btn current" to="/_template/member">
        <div class="icon icon__5"></div>
        <div class="title">我的</div>
      </NuxtLink>
    </div>
  </div>
</template>

<script>
  import { ref } from 'vue';
  import { Controller } from 'swiper';
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
        getMoneyDetails: false,
        userLogin: false,
        memExchange: false,
        toast: false,
        authorSettings: false,
        authorChannel: false,
        memExchangeName: false,
        memExchangePhone: false,
        memExchangePassword: false,
      }
    },
    components: {
      Swiper,
      SwiperSlide,
    },
    setup() {
      const cardSwiper = ref(null);
      const infoSwiper = ref(null);
      const setCardSwiper = (swiper) => {
        cardSwiper.value = swiper;
      };
      const setInfoSwiper = (swiper) => {
        infoSwiper.value = swiper;
      };

      return {
        Controller,
        cardSwiper,
        infoSwiper,
        setCardSwiper,
        setInfoSwiper,
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