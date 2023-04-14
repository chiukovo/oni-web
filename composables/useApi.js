import { useMainStore } from '@/stores/main'

export const testApi = async () => {
    const { data, error } = await useFetch('/api/test', {
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

export const getTitleGroup = async () => {
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
}

export const getVideoList = async () => {
    const { data, error } = await useFetch('/api/video/list', {
        method: 'GET',
        onRequest({ request, options }) {
            // Set the request headers
            options.headers = options.headers || {}
            options.params = {
              tabName: props.tabName,
              page: page.value
            }
        },
    })

    return {
        data,
        error
    }
}