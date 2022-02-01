module.exports = {
    images: {
        loader: 'imgix',
        path: 'https://cdn.chec.io'
    },
    env: {
        NEXT_APP_CHEC_PUBLIC_API_KEY: process.env.NEXT_APP_CHEC_PUBLIC_API_KEY,
        NEXT_APP_STRIPE_PUBLIC_API_KEY: process.env.NEXT_APP_STRIPE_PUBLIC_API_KEY
    }
}
