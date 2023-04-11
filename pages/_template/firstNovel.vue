<template>
  <div class="wrap">
    <!-- footer_設置 -->
    <Transition name="pops" duration="550" appear>
      <div class="pops articleFooterSettings" v-if="articleFooterSettings === true">
        <div class="pops__overlay">
          <div class="pops__container">
            <div class="pops__header">
              <div class="pops__title pops__title-center">
                <div class="title">设置文字大小</div>
              </div>
              <div class="pops__close">
                <div class="btn btn__close" @click="articleFooterSettings = false">
                  <img src="/_nuxt/assets/img/ic_close.svg">
                </div>
              </div>
            </div>
            <div class="pops__body">
              <div class="content">
                <div class="section sectionFontSize">
                  <div class="fontsize__list">
                    <ul class="list">
                      <li class="item fontsize-lg">
                        <a href="#">半山別墅，夜幕降臨</a>
                        <span class="icon"></span>
                      </li>
                      <li class="item fontsize-l">
                        <a href="#">半山別墅，夜幕降臨</a>
                        <span class="icon"></span>
                      </li>
                      <li class="item current fontsize-m">
                        <a href="#">半山別墅，夜幕降臨</a>
                        <span class="icon"></span>
                      </li>
                      <li class="item">
                        <a href="#">半山別墅，夜幕降臨</a>
                        <span class="icon"></span>
                      </li>
                      <li class="item fontsize-s">
                        <a href="#">半山別墅，夜幕降臨</a>
                        <span class="icon"></span>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
              <div class="pops__footer">
                <div class="button__group">
                  <button class="btn btn__cancel">取消</button>
                  <button class="btn btn__checked" @click="articleFooterSettings = false">确认</button>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="pops__mask" @click="articleFooterSettings = false"></div>
      </div>
    </Transition>
    <!-- footer_書籤 -->
    <Transition name="pops" duration="550" appear>
      <div class="pops pops-full pops-bottom articleFooterBookmarks" v-if="articleFooterBookmarks === true">
        <div class="pops__overlay">
          <div class="pops__container">
            <div class="pops__header">
              <div class="pops__title pops__title-center">
                <div class="title">書籤</div>
              </div>
              <div class="pops__close">
                <div class="btn btn__close" @click="articleFooterBookmarks = false">
                  <img src="/_nuxt/assets/img/ic_close.svg">
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
    <!-- footer_目錄 -->
    <Transition name="pops" duration="550" appear>
      <div class="pops pops-full pops-bottom articleFooterContents" v-if="articleFooterContents === true">
        <div class="pops__overlay">
          <div class="pops__container">
            <div class="pops__header">
              <div class="pops__title">
                <div class="title">小說名称小說名称小說名称小說名称小說名称</div>
              </div>
              <div class="pops__close">
                <div class="btn btn__close" @click="articleFooterContents = false">
                  <img src="/_nuxt/assets/img/ic_close.svg">
                </div>
              </div>
            </div>
            <div class="pops__body">
              <div class="content">
                <section class="section sectionNoveContents">
                  <div class="section__title">
                    <div class="title">
                      連載中
                      <span>(週五) 更新至124話</span>
                    </div>
                    <a href="#" class="btn btn__sort" @click="sort = !sort">
                      <img src="/_nuxt/assets/img/ic_sort_up.svg" alt="正序" v-if="sort === true">
                      <img src="/_nuxt/assets/img/ic_sort_down.svg" alt="反序" v-else>
                    </a>
                  </div>
                  <div class="contents__list">
                    <ul class="list" :class="sort ? '' : 'list__reverse'">
                      <li class="item read">
                        <a href="#">
                          <p>第1話(已讀)</p>
                        </a>
                      </li>
                      <li class="item">
                        <a href="#">
                          <p>第2話</p>
                        </a>
                      </li>
                      <li class="item vip" v-for="n in 32">
                        <a href="#">
                          <p>第{{ n + 2 }}話</p>
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
    <!-- 小說專區 -->
    <Transition name="fadeInLeft" appear>
      <div class="dialog full firstNovel" v-if="firstNovel === true">
        <div class="dialog__overlay">
          <div class="dialog__header">
            <header class="pageHeader">
              <div class="pageHeader__back">
                <a href="/_template/demo" class="btn btn__back" @click="firstNovel = false">
                  <img src="/_nuxt/assets/img/ic_back.svg">
                </a>
              </div>
              <div class="pageHeader__title">
                <div class="title">小说专区</div>
              </div>
            </header>
          </div>
          <div class="dialog__body">
            <div class="featuredTab" :class="none ? 'none' : ''">
              <div class="featuredTab__list">
                <ul class="list">
                  <li class="current">
                    <a href="#" class="btn">
                      <span>标签</span>
                    </a>
                  </li>
                  <li v-for="n in 10">
                    <a href="#" class="btn">
                      <span>标签</span>
                    </a>
                  </li>
                </ul>
              </div>
            </div>
            <div class="content" @scroll="scroll">
              <section class="section sectionNove" v-for="n in 4">
                <div class="section__title">
                  <div class="title">最新新作</div>
                  <a href="#" class="btn btn__more">更多</a>
                </div>
                <div class="novel__list">
                  <div class="list">
                    <div class="item" v-for="n in 6" @click="novelDetails = true">
                      <div class="preview">
                        <div class="img" style="background-image: url(https://cdn0.po18.tw/bc/120/678776/O20221001171301.jpg);"></div>
                      </div>
                      <div class="info">
                        <div class="title">
                          <p>《招惹（1V1H）》</p>
                        </div>
                        <div class="interaction">
                          <div class="btn">
                            <i class="icon icon__view"></i>
                            <span>14 132</span>
                          </div>
                          <a href="#" class="btn">
                            <span>共 5 話</span>
                          </a>
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
    <!-- 詳情 details -->
    <Transition name="fadeInRight" appear>
      <div class="dialog full novelDetails" v-if="novelDetails === true">
        <div class="dialog__overlay">
          <div class="dialog__header">
            <section class="sectionNoveDetails">
              <div class="novelDetail__top">
                <div class="detailHeader">
                  <div class="detailback">
                    <a href="#" class="btn btn__back" @click="novelDetails = false">
                      <img src="/_nuxt/assets/img/ic_back.svg">
                    </a>
                  </div>
                  <div class="detailTitle">
                    <div class="title">小说名称小說名称小說名称小說名称小說名称小說名称小說名称</div>
                  </div>
                </div>
                <div class="preview">
                  <div class="preview__left">
                    <div class="img" style="background-image: url(https://cdn0.po18.tw/bc/120/678776/O20221001171301.jpg);">
                    </div>
                  </div>
                  <div class="preview__right">
                    <ul class="info">
                      <li>
                        <div class="state">
                          <span>连载中</span>
                        </div>
                      </li>
                      <li>連載</li>
                      <li><span>124</span>話</li>
                    </ul>
                  </div>
                  <div class="bg" style="background-image: url(https://cdn0.po18.tw/bc/120/678776/O20221001171301.jpg);">
                  </div>
                </div>
              </div>
              <div class="detailTab">
                <div class="detailTab__list">
                  <ul class="list">
                    <li :class="novelDetailtab == '0' ? 'current' : ''">
                      <a href="#" class="btn" @click="novelDetailtab = 0">
                        <span>简介</span>
                      </a>
                    </li>
                    <li :class="novelDetailtab == '1' ? 'current' : ''">
                      <a href="#" class="btn" @click="novelDetailtab = 1">
                        <span>目录</span>
                      </a>
                    </li>
                  </ul>
                </div>
                <div class="btn btn__reports">举报</div>
              </div>
            </section>
          </div>
          <div class="dialog__body">
            <div class="content" @scroll="scroll" v-if="novelDetailtab === 0">
              <section class="sectionNoveDetails">
                <div class="novelInfo">
                  <div class="description">
                    <p>为了维持夫妻关系，她打扮得花枝招展，可那位新婚老公并没拿正眼瞧过她，每晚不是睡在客房就是睡在书房。也是，连娶她都是被迫的，更别说拿她当顾太太了。她收起心思，离他远远的，一心只想过好眼前的日子。谁知道他竟也恼了。后来在电梯，露天泳池，车顶，办公室……只有她想不到，没有他做不到的。* 已完结* 先婚后爱 甜宠文* 论傲娇别扭霸总如何追妻火葬场的故事 ：）嗯，真香定律   所有完结文皆已上架爱发电(* ￣3)(ε￣ *)详见微博置顶。   微博：橘也秀也避雷：作者早期作品，有不足之处还望见谅最新连载：《犬齿（校园 骨科）》《不熟（高H）》最新完结（多肉）：《心动狙击》《药引》《弄潮》《涂鸢》</p>
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
                    <div class="view"><span>102</span>次观看</div>
                    <i class="dot"></i>
                    <div class="love"><span>13</span>个收藏</div>
                    <i class="dot"></i>
                    <div class="updated">2023-03-07 19:26:08 最后更新</div>
                  </div>
                  <div class="interaction">
                    <a href="#" class="btn"  @click="addTags = true">
                      <i class="icon icon__love-w"></i>
                      <span>收藏</span>
                    </a>
                    <a href="#" class="btn">
                      <i class="icon icon__share-w"></i>
                      <span>分享</span>
                    </a>
                  </div>
                </div>
              </section>
              <section class="section sectionNoveContents">
                <div class="section__title">
                  <div class="title">
                    連載中
                    <span>(週五) 更新至124話</span>
                  </div>
                  <a href="#" class="btn btn__more" @click="novelDetailtab = 1">全部</a>
                </div>
                <div class="contents__list">
                  <ul class="list">
                    <li class="item vip">
                      <a href="#">
                        <p>第124話</p>
                      </a>
                    </li>
                    <li class="item read vip">
                      <a href="#">
                        <p>第123話(已讀)</p>
                      </a>
                    </li>
                    <li class="item read vip">
                      <a href="#">
                        <p>第122話(已讀)</p>
                      </a>
                    </li>
                    <li class="item read vip">
                      <a href="#">
                        <p>第121話(已讀)</p>
                      </a>
                    </li>
                  </ul>
                </div>
              </section>
              <section class="sectionMoney p:10">
                <img src="/_nuxt/assets/img/not-use/slider.jpg" alt="">
              </section>
              <section class="section sectionNove">
                <div class="section__title">
                  <div class="title">为您推荐</div>
                </div>
                <div class="novel__list">
                  <div class="list">
                    <div class="item" v-for="n in 6">
                      <div class="preview">
                        <div class="img" style="background-image: url(https://cdn0.po18.tw/bc/120/678776/O20221001171301.jpg);"></div>
                      </div>
                      <div class="info">
                        <div class="title">
                          <p>《招惹（1V1H）》</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </section>
            </div>
            <div class="content" @scroll="scroll" v-else>
              <section class="section sectionNoveContents">
                <div class="section__title">
                  <div class="title">
                    連載中
                    <span>(週五) 更新至124話</span>
                  </div>
                  <a href="#" class="btn btn__sort" @click="sort = !sort">
                    <img src="/_nuxt/assets/img/ic_sort_up.svg" alt="正序" v-if="sort === true">
                    <img src="/_nuxt/assets/img/ic_sort_down.svg" alt="反序" v-else>
                  </a>
                </div>
                <div class="contents__list">
                  <ul class="list" :class="sort ? '' : 'list__reverse'">
                    <li class="item read">
                      <a href="#" @click="novelArticle = true">
                        <p>第1話(已讀)</p>
                      </a>
                    </li>
                    <li class="item">
                      <a href="#">
                        <p>第2話</p>
                      </a>
                    </li>
                    <li class="item vip" v-for="n in 32">
                      <a href="#">
                        <p>第{{ n + 2 }}話</p>
                      </a>
                    </li>
                  </ul>
                </div>
              </section>
            </div>
          </div>
          <div class="dialog__footer" :class="none ? 'none' : ''">
            <div class="footerContents">
              <div class="footerContents__left">
                <div class="interaction">
                  <a href="#" class="btn"  @click="addTags = true">
                    <i class="icon icon__love-w"></i>
                    <span>收藏</span>
                  </a>
                  <a href="#" class="btn">
                    <i class="icon icon__share-w"></i>
                    <span>分享</span>
                  </a>
                </div>
              </div>
              <div class="footerContents__right">
                <a href="#" class="btn btn__starread" @click="novelArticle = true">开始阅读</a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Transition>
    <!-- 內容 content -->
    <Transition name="fadeInRight" appear>
      <div class="dialog full novelArticle" v-if="novelArticle === true">
        <div class="dialog__overlay">
          <div class="dialog__header" :class="none ? 'none' : ''">
            <header class="pageHeader">
              <div class="pageHeader__back">
                <a href="#" class="btn btn__back" @click="novelArticle = false">
                  <img src="/_nuxt/assets/img/ic_back.svg">
                </a>
              </div>
              <div class="pageHeader__title">
                <div class="title">第1話</div>
              </div>
            </header>
          </div>
          <div class="dialog__body">
            <div class="content" @scroll="scroll">
              <section class="sectionNoveArticle">
                <div class="preview fontsize-m">
                  <article class="article">半山別墅，夜幕降臨，透過落地窗可以看見點點星光。<br>
秦卿看著那張諾大的雙人床，心情很是複雜，跟顧邵銘結婚之後，這位新婚老公就沒拿正眼瞧過她，也不怪他，畢竟連娶她這件事情都是被迫，更別說真的拿她當顧太太了。<br>
一開始，秦卿還會努力維系兩人的夫妻關系，打扮得花枝招展的等著他，可是顧邵銘連見都不想見她，每晚不是睡在書房就是睡在客房。<br>
秦卿才剛躺在床上準備睡覺，就聽見有人轉動門把的聲音，沒有開燈，臥室裡僅有的光線就是從窗外灑進來的朦朧月色，可她卻能感覺到腳步聲正在漸漸接近……<br>
她正想起身，誰知道那來人已經一把掀開了床上的被子，徑直壓在了秦卿的身上，男人的身上帶著濃烈的酒氣，還有一絲淡淡的男士香水味兒。<br>
秦卿被嚇了一跳，正想喊人，耳畔便響起了一個聲音。<br>
“嗯……”<br>
低沉，富有磁性。<br>
她一下子就認出來，是顧邵銘的聲音。<br>
他那寬大的手掌按在了秦卿那纖細的腰身上，那炙熱的溫度似乎透過單薄的衣料傳了過來，秦卿下意識的掙了一下，他冷喝道：“別動。”<br>
在那一瞬間，秦卿對上了他的視線，眸光深邃，帶著點不近人情的冷漠。顧邵銘跟以往一樣肅著臉，可落在她身上的視線，卻讓秦卿覺得自己像是快到手的獵物一般，讓人沒來由的害怕。<br>
顧邵銘的手在她身上遊移，秦卿終於忍不住開口，“那個……顧先生，你先起來，我去給你倒杯醒酒茶吧，就這麽睡下去，明早該頭疼了。”<br>
她的聲音有著江南女子的軟糯，說話的時候輕聲細語，像是有羽毛輕柔的從你耳邊掃過，讓人心裡發癢。<br>
明明是夫妻了，卻還是以這種生疏的語氣對話。<br>
呵。<br>
顧邵銘抬手，毫不客氣的捏住了秦卿的下巴，他挑起劍眉，眼中是隱隱的怒火，“顧先生？你再仔細看清楚，我是誰？”<br>
喝醉的人，脾氣都這麽大的嗎？<br>
秦卿不想跟酒鬼在這種事情上糾纏，她將語氣放軟，勸道：“顧先生，你喝醉了，不如先去休息吧……”<br>
話音剛落，秦卿便感覺胸前一涼，顧邵銘將她的睡裙領口一把扯開，肩帶往兩肩滑落。<br>
“既然你不清楚，那我就親自告訴你！”顧邵銘一字一句的說道：“我是你老公！”<br>
在秦卿還怔然的時候，顧邵銘狂暴的吻就落了下來，兩人的唇瓣相貼，他身上那酒氣混雜著男士香水的味道也越發清晰，他的唇跟他的掌心一樣，炙熱滾燙，他見秦卿木納沒有半點反應，便轉吻為咬。<br>
秦卿吃痛，終於倒抽了一口氣，可薄唇才剛張開，顧邵銘那靈活的長舌便直驅進來，將嗆人的酒氣全都渡了過來，他的動作粗暴蠻橫，將秦卿堵得毫無退路，他用力的吸吮著她的香甜，將肺裡僅有的氧氣消耗殆盡。<br>
秦卿因為缺氧，腦袋有些發暈，她用手推了一下顧邵銘那健壯的胸膛，可他仍舊不放，直到她憋得小臉通紅，他才堪堪饒過她。<br>
可他似乎覺得不夠，手掌往下一探，從秦卿雙腿間擠進去，隔著蕾絲內褲擠壓著她敏感的陰蒂。</article>
                </div>
              </section>
            </div>
          </div>
          <div class="dialog__footer" :class="none ? 'none' : ''">
            <div class="footerArticle">
              <button class="btn">
                <div class="icon icon__prev"></div>
                <div class="title">上一頁</div>
              </button>
              <button class="btn" @click="articleFooterContents = true">
                <div class="icon icon__1"></div>
                <div class="title">目录</div>
              </button>
              <button class="btn" @click="articleFooterBookmarks = true">
                <div class="icon icon__5"></div>
                <div class="title">书签</div>
              </button>
              <button class="btn" @click="articleFooterSettings = true">
                <div class="icon icon__4"></div>
                <div class="title">设置</div>
              </button>
              <button class="btn">
                <div class="icon icon__next"></div>
                <div class="title">下一頁</div>
              </button>
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
        height: '',
        none: false,
        firstNovel: true,
        novelDetails: false,
        novelDetailtab: 0,
        novelArticle: false,
        articleFooterContents: false,
        articleFooterBookmarks: false,
        articleFooterSettings: false,
        sort: true,
      }
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