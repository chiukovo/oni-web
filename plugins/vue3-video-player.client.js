import vue3videoPlay from "vue3-video-play"
import "vue3-video-play/dist/style.css"

export default defineNuxtPlugin(nuxtApp => {
    nuxtApp.vueApp.use(vue3videoPlay)
})