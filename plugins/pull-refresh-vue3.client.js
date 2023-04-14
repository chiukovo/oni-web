import PullRefresh from 'pull-refresh-vue3'

export default defineNuxtPlugin(nuxtApp => {
    nuxtApp.vueApp.use(PullRefresh)
})