<template>
  <div class="wrap member__wrap">
    <!-- ! toasts -->
    <!-- 兌換碼/邀請碼 填寫後跳出提示訊息 -->
    <Transition name="toasts" appear>
      <div class="toast" v-if="toast === true">
        <div class="text">已经填写邀请码</div>
      </div>
    </Transition>
    <!-- ! pops -->
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
                  <img src="/img/ic_close.svg">
                </div>
              </div>
            </div>
            <div class="pops__body">
              <div class="content">
                <section class="section sectionForm">
                  <div class="form">
                    <div class="form__input">
                      <img class="form__icon" src="/img/ic_edit.svg">
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
                  <img src="/img/ic_close.svg">
                </div>
              </div>
            </div>
            <div class="pops__body">
              <div class="content">
                <section class="section sectionForm">
                  <div class="form">
                    <div class="form__input">
                      <img class="form__icon" src="/img/ic_lock.svg">
                      <input type="password" placeholder="请输入目前密码">
                    </div>
                    <div class="form__space"></div>
                    <div class="form__input">
                      <img class="form__icon" src="/img/ic_lock_new.svg">
                      <input type="password" placeholder="请输入新密码">
                    </div>
                    <div class="form__input">
                      <img class="form__icon" src="/img/ic_lock_new.svg">
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
                  <img src="/img/ic_close.svg">
                </div>
              </div>
            </div>
            <div class="pops__body">
              <div class="content">
                <section class="section sectionForm">
                  <div class="form">
                    <div class="form__input">
                      <img class="form__icon" src="/img/ic_phone.svg">
                      <input type="tel" placeholder="请输入手机号码" value="0912345678" disabled>
                    </div>
                    <div class="form__input">
                      <button class="getSecurityCode btn__tags btn__tags-white">獲得驗證碼</button>
                      <img class="form__icon" src="/img/ic_security.svg">
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
                  <img src="/img/ic_close.svg">
                </div>
              </div>
            </div>
            <div class="pops__body">
              <div class="content">
                <section class="section sectionForm">
                  <div class="form">
                    <div class="form__input">
                      <img class="form__icon" src="/img/ic_edit.svg">
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
    <!-- ! dialog -->
    <!-- 個人管理 -->
    <Transition name="fadeInRight" appear>
      <div class="dialog full authorSettings" v-if="authorSettings === true">
        <div class="dialog__overlay">
          <div class="dialog__header">
            <header class="pageHeader">
              <div class="pageHeader__back">
                <a href="#" class="btn btn__back" @click="authorSettings = false">
                  <img src="/img/ic_back.svg">
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
    <!-- 個人管理: 頻道設定 -->
    <Transition name="fadeInRight" appear>
      <div class="dialog full authorChannel" v-if="authorChannel === true">
        <div class="dialog__overlay">
          <div class="dialog__header">
            <header class="pageHeader">
              <div class="pageHeader__back">
                <a href="#" class="btn btn__back" @click="authorChannel = false">
                  <img src="/img/ic_back.svg">
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
                      <img src="/img/ic_channel_1.png" alt="我的频道">
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
                      <img src="/img/ic_channel_2.png" alt="添加更多頻道">
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
    <!-- 推薦服務 -->
    <!-- 推薦服務: 錢包 -->
    <Transition name="fadeInRight" appear>
      <div class="dialog full authorWallet" v-if="authorWallet === true">
        <div class="dialog__overlay">
          <div class="dialog__header">
            <header class="pageHeader">
              <div class="pageHeader__back">
                <a href="#" class="btn btn__back" @click="authorWallet = false">
                  <img src="/img/ic_back.svg">
                </a>
              </div>
              <div class="pageHeader__title">
                <div class="title">钱包</div>
              </div>
              <div class="pageHeader__right">
                <a href="#" class="btn btn-right" @click="shopDetails = true">
                  <img src="/img/ic_withdrawaly.svg" alt="提现明细">
                </a>
              </div>
            </header>
          </div>
          <div class="dialog__body">
            <div class="content" @scroll="scroll">
              <section class="sectionBalance">
                <div class="balance">
                  <div class="balance__title">
                    <div class="title">账户余额</div>
                    <button class="btn btn__reload">
                      <img src="/img/ic_reload.svg" alt="重新載入">
                    </button>
                  </div>
                  <div class="balance__number">155,464.01</div>
                  <a href="#" class="btn btn__checked">提现</a>
                </div>
              </section>
              <section class="sectionMemContent">
                <div class="mem__list">
                  <div class="title">更多服务</div>
                  <div class="list">
                    <a href="#" class="item">
                      <div class="icon icon__mem-list9"></div>
                      <div class="title">充值会员</div>
                    </a>
                    <a href="#" class="item">
                      <div class="icon icon__mem-list10"></div>
                      <div class="title">充值币</div>
                    </a>
                    <a href="#" class="item hasNext">
                      <div class="icon icon__mem-list11"></div>
                      <div class="title">全民赚钱</div>
                    </a>
                    <a href="#" class="item hasNext">
                      <div class="icon icon__mem-list12"></div>
                      <div class="title">分享无限看</div>
                    </a>
                  </div>
                </div>
              </section>
            </div>
          </div>
        </div>
      </div>
    </Transition>
    <!-- 推薦服務: 代理賺錢 -->
    <Transition name="fadeInRight" appear>
      <div class="dialog full authorAgent" v-if="authorAgent === true">
        <div class="dialog__overlay">
          <div class="dialog__header">
            <header class="pageHeader">
              <div class="pageHeader__back">
                <a href="#" class="btn btn__back" @click="authorAgent = false">
                  <img src="/img/ic_back.svg">
                </a>
              </div>
              <div class="pageHeader__title">
                <div class="title">代理赚钱</div>
              </div>
              <div class="pageHeader__right">
                <a href="#" class="btn btn-right">
                  <img src="/img/ic_getAgent.svg" alt="开始代理">
                </a>
              </div>
            </header>
          </div>
          <div class="dialog__body">
            <div class="content" @scroll="scroll">
              <section class="sectionBalance">
                <div class="balance">
                  <div class="balance__title">
                    <div class="title">总收益</div>
                    <button class="btn btn__reload">
                      <img src="/img/ic_reload.svg" alt="重新載入">
                    </button>
                  </div>
                  <div class="balance__number">155,464.01</div>
                  <a href="#" class="btn btn__checked">提现</a>
                </div>
                <div class="income">
                  <div class="item">
                    <div class="title">今日预计收益</div>
                    <div class="number">135.00</div>
                  </div>
                  <div class="item">
                    <div class="title">昨日收益</div>
                    <div class="number">68.18</div>
                  </div>
                  <div class="item">
                    <div class="title">当月推广人数</div>
                    <div class="number">15</div>
                  </div>
                </div>
              </section>
              <section class="sectionAgentContent">
                <div class="agent__joinInvitation">
                  <img src="/img/mem_agentButton.png" alt="查看活动规则" class="joinInvitation">
                </div>
                <div class="agent__total">
                  <div class="agent__title">推广人数统计</div>
                  <div class="total__list">
                    <div class="item">
                      <div class="number">12</div>
                      <div class="dot">
                        <img src="/img/mem_agentDot.svg">
                      </div>
                      <div class="title">一级推广</div>
                    </div>
                    <div class="item">
                      <div class="number">3</div>
                      <div class="dot">
                        <img src="/img/mem_agentDot.svg">
                      </div>
                      <div class="title">二级推广</div>
                    </div>
                    <div class="item">
                      <div class="number">0</div>
                      <div class="dot">
                        <img src="/img/mem_agentDot.svg">
                      </div>
                      <div class="title">三级推广</div>
                    </div>
                    <div class="item">
                      <div class="number">0</div>
                      <div class="dot">
                        <img src="/img/mem_agentDot.svg">
                      </div>
                      <div class="title">四级推广</div>
                    </div>
                  </div>
                </div>
                <div class="agent__details">
                  <div class="agent__title">业绩明细</div>
                  <div class="details__content">
                    <table class="table">
                      <tr>
                        <th class="text-left">昵称</th>
                        <th>推广级别</th>
                        <th class="text-right">加入时间</th>
                      </tr>
                      <tr v-for="n in 10">
                        <td>小明{{ n }}</td>
                        <td class="text-center">全站通卡</td>
                        <td class="text-right">2023-3-30 11:33:22</td>
                      </tr>
                    </table>
                  </div>
                </div>
              </section>
            </div>
          </div>
        </div>
      </div>
    </Transition>
    <!-- 推薦服務: 代理賺錢 → 活動規則 -->
    <Transition name="pops" duration="550" appear>
      <div class="pops pops-bottom authorAgentRules" v-if="authorAgentRules === true">
        <div class="pops__overlay">
          <div class="pops__container">
            <div class="pops__header">
              <div class="pops__title pops__title-center">
                <div class="title">書籤</div>
              </div>
              <div class="pops__close">
                <div class="btn btn__close" @click="authorAgentRules = false">
                  <img src="/img/ic_close.svg">
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
    <!-- ! member center -->
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
                <img src="/img/mem_headerButton.png" alt="开通VIP" class="joinVIP">
              </div>
              <div class="mem__toplist">
                <div class="title">推荐服务</div>
                <div class="list">
                  <a href="#" class="item" @click="authorWallet = true">
                    <div class="icon icon__mem-toplist1"></div>
                    <div class="title">钱包</div>
                  </a>
                  <a href="#" class="item">
                    <div class="icon icon__mem-toplist2"></div>
                    <div class="title">分享无限看</div>
                  </a>
                  <a href="#" class="item" @click="authorAgent = true">
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
        authorWallet: false,
        authorAgent: true,
        authorAgentRules: true,
        memExchangeName: false,
        memExchangePhone: false,
        memExchangePassword: false
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