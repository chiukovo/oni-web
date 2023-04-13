import { defineStore } from 'pinia'

export const useMainStore = defineStore('main', {
    state: () => ({
        hideHeaderFooter: false,
        contentHeight: 0,
        nowHeight: 0,
    }),
    actions: {
        async getTitleGroup() {
            const { data, error } = await useFetch('/api/video/titleGroup', {
                method: 'GET',
                onRequest({ request, options }) {
                    // Set the request headers
                    options.headers = options.headers || {}
                },
            })

            return {
                data,
                error
            }
        },
    },
})