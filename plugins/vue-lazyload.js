import { defineNuxtPlugin } from '#app';
import VueLazyload from 'vue-lazyload';

const errorImage = '/img/error-image.gif'
const loadingImage = '/img/loading.png'

export default defineNuxtPlugin((nuxtApp) => {
    nuxtApp.vueApp.use(VueLazyload, {
        preLoad: 1.3,
        error: errorImage,
        loading: loadingImage,
        throttleWait: 500
    });
});