import { useMainStore } from '@/stores/main'

export default function() {
    const mainStore = useMainStore()

    const onBodyScroll = (e) => {
        const contentHeight = mainStore.contentHeight
        mainStore.nowHeight = e.target.scrollTop
        let num = mainStore.hideHeaderFooter ? 60 : 0

        if (mainStore.nowHeight == contentHeight) {
            mainStore.contentHeight = mainStore.nowHeight
            return
        }

        if (mainStore.nowHeight > 100) {
            if (mainStore.nowHeight > contentHeight - num) {
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