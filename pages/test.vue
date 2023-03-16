<template>
  <Swiper
    :direction="'vertical'"
    :slidesPerView="1"
    :mousewheel="true"
    :pagination="{
      clickable: true,
    }"
  >
    <SwiperSlide v-for="n in 3" :key="n">
      <div class="item">
        <div class="preview">
          <div class="view"><span>5w</span>次播放</div>
          <div class="time"><span>2:12</span></div>
          <img class="img" src="https://api.bcyapp005.com/storage/files/shares/HH/3/f533de42-4806-4108-beec-612bc6e47b5c.jpg">
        </div>
        <div class="info">
          <div class="avatar">
            <img class="img" src="https://api.bcyapp005.com/storage/files/shares/HH/3/f533de42-4806-4108-beec-612bc6e47b5c.jpg">
          </div>
          <div class="title">
            <div class="name">
              <p>露脸女朋友 大一女生爱露脸 直拨镜头 露脸女朋友 露脸女朋友</p>
              <button class="btn btn__focus">关注</button>
            </div>
            <span>88888888关注<i class="dot"></i>2551视频</span>
          </div>
        </div>
        <div class="videoTitle">
          <p>{{n}} 3/1露脸女朋友 大一女生爱露脸 直播镜头 露脸女朋友</p>
        </div>
      </div>
    </SwiperSlide>
  </Swiper>
</template>

<script setup>
  const active = ref(0)
  const beforeChange = (index) => {
    if (index === 5) {
      console.log('click')
      return false;
    }

    return new Promise((resolve) => {
      resolve(true);
    });
  }
</script>