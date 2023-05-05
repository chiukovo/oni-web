<template>
  <div class="floating openRight">
    <!-- 每日精選 -->
    <Transition name="pops" duration="550" appear>
      <div class="dialog full everyDay">
        <div class="dialog__overlay">
          <div class="dialog__header">
            <header class="pageHeader">
              <div class="pageHeader__back">
                <a href="/_template/demo" class="btn btn__back"  @click.prevent="doOpenRight('', '')">
                  <img src="/img/ic_back.svg">
                </a>
              </div>
              <div class="pageHeader__title">
                <div class="title">每日精选</div>
              </div>
            </header>
          </div>
          <div class="dialog__body">
            <div class="content">
              <section class="section sectionVideo">
                <div class="featuredVideo">
                  <div class="item" v-for="data in videoList">
                    <div class="info">
                      <div class="avatar">
                        <img class="img" v-lazy="'/img/default.png'">
                      </div>
                      <div class="title">
                        <div class="name">
                          <p>{{ data.title }}</p>
                        </div>
                        <span>{{ data.post_date }}</span>
                      </div>
                    </div>
                    <div class="preview" @click="doOpenRight({ code: data.code }, 'video')">
                      <div class="view"><span>{{ data.watch }}</span>次播放</div>
                      <img class="img" v-lazy="data.finish_preview_url">
                    </div>
                    <div class="interaction">
                      <a href="#" class="btn">
                        <i class="icon icon__love"></i>
                        <span>{{ data.like }}</span>
                      </a>
                      <a href="#" class="btn">
                        <i class="icon icon__message"></i>
                        <span>{{ data.reply }}</span>
                      </a>
                      <a href="#" class="btn">
                        <i class="icon icon__share"></i>
                        <span>分享</span>
                      </a>
                    </div>
                  </div>
                </div>
              </section>
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
const everyDay = ref(true)
const { doOpenRight } = usePublic()

const parmas = {
  tabName: 'today',
  page: 1
}

const { data: videoList, error } = await getVideoList(parmas)

</script>