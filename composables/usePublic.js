import { useMainStore } from '@/stores/main'

export default function() {
    const mainStore = useMainStore()

    const onBodyScroll = (e) => {
        const contentHeight = mainStore.contentHeight
        const nowHeight = e.target.scrollTop

        if (nowHeight > 100) {
            if (nowHeight > contentHeight) {
                mainStore.hideHeaderFooter = true
            } else {
                mainStore.hideHeaderFooter = false
            }
        } else {
            mainStore.hideHeaderFooter = false
        }

        mainStore.contentHeight = nowHeight
    }

    return {
        onBodyScroll
    }
}