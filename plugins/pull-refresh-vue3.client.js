import PullRefresh from 'pull-refresh-vue3'

export default defineNuxtPlugin(nuxtApp => {
    nuxtApp.vueApp.use(PullRefresh)
    nuxtApp.vueApp.component('PullRefresh', PullRefresh);
})