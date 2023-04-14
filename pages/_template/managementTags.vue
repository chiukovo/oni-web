<template>
  <div class="wrap">
    <Transition name="pops" duration="550" appear>
      <div class="pops addTags" v-if="managementAddTags === true">
        <div class="pops__overlay">
          <div class="pops__container">
            <div class="pops__header">
              <div class="pops__title pops__title-center">
                <div class="title">编辑标签</div>
              </div>
            </div>
            <div class="pops__body">
              <div class="content">
                <section class="section sectionForm">
                  <div class="form">
                    <div class="form__input">
                      <img class="form__icon" src="/_nuxt/assets/img/ic_edit.svg">
                      <input type="text" placeholder="新增標籤" value="視頻">
                    </div>
                  </div>
                </section>
              </div>
              <div class="pops__footer">
                <div class="button__group">
                  <button class="btn btn__cancel">取消</button>
                  <button class="btn btn__checked" @click="managementAddTags = false">确认</button>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="pops__mask" @click="managementAddTags = false"></div>
      </div>
    </Transition>
    <!-- 管理分組 -->
    <Transition name="fadeInRight" appear>
      <div class="dialog full managementTags" v-if="managementTags === true">
        <div class="dialog__overlay">
          <div class="dialog__header">
            <header class="pageHeader">
              <div class="pageHeader__back">
                <a href="/_template/videoDetail" class="btn btn__back" @click="managementTags = false">
                  <img src="/_nuxt/assets/img/ic_back.svg">
                </a>
              </div>
              <div class="pageHeader__title">
                <div class="title">标签管理</div>
              </div>
              <div class="pageHeader__right">
                <a href="#" class="btn btn__primary" @click="managementAddTags = true">新增标签</a>
              </div>
            </header>
          </div>
          <div class="dialog__body">
            <div class="content">
              <section class="section sectionManagementTags">
                <div class="managementTags__list">
                  <ul class="list">
                    <li class="item" v-for="n in 20">
                      <div class="title">标签{{ n }} (數量: 13)</div>
                      <a href="#" class="btn btn__edit" @click="managementAddTags = true">编辑</a>
                    </li>
                  </ul>
                </div>
              </section>
            </div>
          </div>
        </div>
      </div>
    </Transition>
  </div>
</template>

<script>
  import '@master/normal.css';
  import '@master/css';

  export default {
    data() {
      return {
        managementTags: true,
        managementAddTags: true
      }
    },
  };
</script>