<template>
  <div class="wrap">
    <div class="container">
      <div class="videoDetail">
        <div class="pageBack">
          <div class="btn btn__back">
            <a href="#" class="btn btn__back" @click="authorMore = false">
              <img src="/_nuxt/assets/img/ic_back.svg">
            </a>
          </div>
        </div>
        <div class="detail__item">
          <!-- 未開通VIP -->
          <!-- <div class="previewLock">
            <div class="lock">
              <p>開通VIP解鎖完整版<span>></span></p>
            </div>
            <div class="time"><span>2:12</span></div>
            <img class="img" src="https://api.bcyapp005.com/storage/files/shares/HH/3/f533de42-4806-4108-beec-612bc6e47b5c.jpg">
          </div> -->
          <!-- 開通VIP -->
          <div class="preview">
            <div class="time"><span>2:12</span></div>
            <img class="img" src="https://api.bcyapp005.com/storage/files/shares/HH/3/f533de42-4806-4108-beec-612bc6e47b5c.jpg">
          </div>
          <div class="videoTab">
            <div class="videoTab__list">
              <ul class="list">
                <li class="current">
                  <a href="#" class="btn">
                    <span>简介</span>
                  </a>
                </li>
                <li>
                  <a href="#" class="btn">
                    <span>评论199999</span>
                  </a>
                </li>
              </ul>
            </div>
            <div class="btn btn__reports">举报</div>
          </div>
          <div class="info">
            <div class="avatar">
              <img class="img" src="https://api.bcyapp005.com/storage/files/shares/HH/3/f533de42-4806-4108-beec-612bc6e47b5c.jpg">
            </div>
            <div class="title">
              <div class="name">
                <p>露脸女朋友 大一女生爱露脸 直拨镜头 露脸女朋友 露脸女朋友</p>
              </div>
              <span>88888888关注<i class="dot"></i>2551视频</span>
            </div>
            <button class="btn btn__focus">关注</button>
          </div>
          <div class="videoInfo">
            <div class="title">
              <p>露脸女朋友 大一女生爱露脸 直拨镜头 露脸女朋友 露脸女朋友</p>
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
              <div class="view">102次播放</div>
              <i class="dot"></i>
              <div class="great">13个赞</div>
              <i class="dot"></i>
              <div class="date">2023-03-07 19:26:08 发布</div>
            </div>
            <div class="interaction">
              <a href="#" class="btn">
                <i class="icon icon__love-w"></i>
                <span>喜欢</span>
              </a>
              <a href="#" class="btn">
                <i class="icon icon__money-w"></i>
                <span>打赏</span>
              </a>
              <a href="#" class="btn">
                <i class="icon icon__share-w"></i>
                <span>分享</span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  import '@master/normal.css';
  import '@master/css';

  export default {
    data() {
      return {
        tab: 0
      }
    },
  };
</script>