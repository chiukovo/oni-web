import VueVideoPlayer from '@videojs-player/vue'
import 'video.js/dist/video-js.css'
import '@videojs/themes/dist/forest/index.css'

export default defineNuxtPlugin(nuxtApp => {
    nuxtApp.vueApp.use(VueVideoPlayer)
})