import { useMainStore } from '@/stores/main'

export default function() {
    const mainStore = useMainStore()

    const onBodyScroll = (e) => {
        const contentHeight = mainStore.contentHeight
        mainStore.nowHeight = e.target.scrollTop

        if (mainStore.nowHeight > 100) {
            if (mainStore.nowHeight > contentHeight) {
                mainStore.hideHeaderFooter = true
            } else {
                mainStore.hideHeaderFooter = false
            }
        } else {
            mainStore.hideHeaderFooter = false
        }

        mainStore.contentHeight = mainStore.nowHeight
    }

    return {
        onBodyScroll
    }
}