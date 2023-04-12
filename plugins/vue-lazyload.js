import { defineNuxtPlugin } from '#app';
import VueLazyload from 'vue-lazyload';

const errorImage = '/error-image.gif'
const loadingImage = '/loading.png'

export default defineNuxtPlugin((nuxtApp) => {
    nuxtApp.vueApp.use(VueLazyload, {
        preLoad: 1.33,
        error: errorImage,
        loading: loadingImage,
        throttleWait: 3000
    });
});