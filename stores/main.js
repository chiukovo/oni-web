import { defineStore } from 'pinia'

export const useMainStore = defineStore('main', {
    state: () => ({
        hideHeaderFooter: false,
        contentHeight: 0,
        nowHeight: 0,
        videoCode: '',
        openRightType: '',
    })
})