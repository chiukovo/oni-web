<template>
  <div class="floating openRight">
    <Transition name="pops" duration="550" appear>
      <div class="dialog full discoverSearch">
        <div class="dialog__overlay">
          <div class="dialog__header">
            <header class="searchHeader">
              <div class="searchHeader__back">
                <a href="#" class="btn btn__back" @click.prevent="doOpenRight('', '')">
                  <img src="/img/ic_back.svg">
                </a>
              </div>
              <div href="#" class="searchHeader__search">
                <div class="search__input">
                  <input type="text" placeholder="视频搜索" v-model="search">
                  <img src="/img/ic_clear.svg" @click="search = ''">
                </div>
                <div class="search__submit">
                  <a href="#" class="btn btn__submit" @click.prevent="doSearch">搜索</a>
                </div>
              </div>
            </header>
          </div>
          <div class="dialog__body">
            <div class="content">
              <section class="section">
                <div class="section__title">
                  <div class="title">大家都在搜</div>
                </div>
                <div class="tags">
                  <ul class="tag__list {w:auto!}>li">
                    <li class="list__item" v-for="list in results.everybody">
                      <a href="#" class="btn" @click.prevent="search = list; doSearch()">
                        <div class="title">
                          <div class="tag">{{ list }}</div>
                        </div>
                      </a>
                    </li>
                  </ul>
                </div>
              </section>
              <section class="section">
                <div class="section__title">
                  <div class="title">熱門標籤</div>
                </div>
                <div class="tags">
                  <ul class="tag__list">
                    <li class="list__item" v-for="list in results.tags">
                      <a href="#" class="btn" @click.prevent="search = list; doSearch()">
                        <div class="title">
                          <div class="tag">{{ list }}</div>
                        </div>
                      </a>
                    </li>
                  </ul>
                </div>
              </section>
            </div>
            <!-- 搜尋結果 -->
            <div class="content" v-if="results">
              <div class="pageTab pageTab-center mt:10">
                <div class="pageTab__list">
                  热门视频
                </div>
              </div>
              <section class="section sectionVideoPersonal">
                <div class="featuredVideoPersonal">
                  <div class="list">
                    <div class="item" v-for="data in results.video" >
                      <div class="preview" @click="doOpenRight({ code: data.code }, 'video')">
                        <img class="img" v-lazy="data.finish_preview_url">
                      </div>
                      <div class="info">
                        <div class="title" @click="doOpenRight({ code: data.code }, 'video')">
                          <p>{{ data.title }}</p>
                        </div>
                        <div class="info__bottom">
                          <div class="name">
                            <p>官方社群</p>
                          </div>
                          <div class="interaction">
                            <a href="#" class="btn">
                              <i class="icon icon__view"></i>
                              <span>{{ data.watch }}</span>
                            </a>
                            <a href="#" class="btn">
                              <i class="icon icon__love"></i>
                              <span>{{ data.like }}</span>
                            </a>
                          </div>
                        </div>
                      </div>
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
const search = ref('')
const results = ref([])

const doSearch = async () => {
  const { data, error } = await getSearchList(search.value)

  results.value = data.value
}

doSearch()

</script>