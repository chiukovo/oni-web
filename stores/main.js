import { defineStore } from 'pinia'

export const useMainStore = defineStore('main', {
    state: () => ({
        hideHeaderFooter: false,
        contentHeight: 0,
        featuredTab: 0,
        nowHeight: 0,
    }),
    actions: {
        async getAN() {
            const { data, error } = await useFetch('http://127.0.0.1:8000/api/getAN', {
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
        }
    },
})