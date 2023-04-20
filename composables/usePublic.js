import { useMainStore } from '@/stores/main'

export default function() {
    const mainStore = useMainStore()
    const router = useRouter()

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

    const doOpenRight = (params, type) => {
        mainStore.openRightType = type

        switch (type) {
            case 'video':
                mainStore.videoCode = params.code

                break;
            default:
                break;
        }
    }

    return {
        onBodyScroll,
        doOpenRight
    }
}