export const fetcher = (...args) => fetch(...args, {
    next: {
        revalidate: 1
    }
}).then(res => res.json())  