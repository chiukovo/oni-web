<template>
  <div class="wrap login__wrap">
    <div class="container">
      <main class="main">
        <section class="section sectionLogin">
          <div class="logo">
            <img src="~/assets/img/logo.png" alt="WX微性">
          </div>
          <div class="login__form signin" :class="login ? 'show' : ''">
            <div class="login__title">
              登录
            </div>
            <div class="form">
              <div class="form__input">
                <img class="form__icon" src="/_nuxt/assets/img/ic_user.svg">
                <input type="email" placeholder="请输入账号或邮箱">
              </div>
              <div class="form__input">
                <button class="btn form__btn" @click="showPassword = !showPassword">
                  <img src="~/assets/img/ic_pw_eyes.svg" v-if="showPassword">
                  <img src="~/assets/img/ic_pw_eyes_h.svg" v-else>
                </button>
                <img class="form__icon" src="/_nuxt/assets/img/ic_lock.svg">
                <input :type="showPassword ? 'text' : 'password'" placeholder="请输入密码">
              </div>
              <div class="form__button">
                <button class="btn btn__checked">登录</button>
              </div>
            </div>
            <div class="login__link">
              <p>没有账号？</p><a href="#" class="btn__link" @click="login = false">去注册</a>
            </div>
          </div>
          <div class="login__form register" :class="login ? '' : 'show'">
            <div class="login__title">
              注册
            </div>
            <div class="form">
              <div class="form__input">
                <img class="form__icon" src="/_nuxt/assets/img/ic_user.svg">
                <input type="email" placeholder="请输入账号或邮箱">
              </div>
              <div class="form__input">
                <button class="btn form__btn" @click="showPassword = !showPassword">
                  <img src="~/assets/img/ic_pw_eyes.svg" v-if="showPassword">
                  <img src="~/assets/img/ic_pw_eyes_h.svg" v-else>
                </button>
                <img class="form__icon" src="/_nuxt/assets/img/ic_lock.svg">
                <input :type="showPassword ? 'text' : 'password'" placeholder="请输入密码">
              </div>
              <div class="form__input">
                <button class="btn form__btn" @click="showPassword = !showPassword">
                  <img src="~/assets/img/ic_pw_eyes.svg" v-if="showPassword">
                  <img src="~/assets/img/ic_pw_eyes_h.svg" v-else>
                </button>
                <img class="form__icon" src="/_nuxt/assets/img/ic_lock.svg">
                <input :type="showPassword ? 'text' : 'password'" placeholder="再次请输入密码">
              </div>
              <div class="form__button">
                <button class="btn btn__checked">注册</button>
              </div>
            </div>
            <div class="login__link">
              <p>已有账号？</p><a href="#" class="btn__link" @click="login = true">去登录</a>
            </div>
          </div>
        </section>
      </main>
    </div>
  </div>
</template>

<script>
  export default {
    data() {
      return {
        login: true,
        showPassword: false
      }
    },
  };
</script>