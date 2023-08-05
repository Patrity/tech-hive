// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
    runtimeConfig: {
        public: {
            siteUrl: process.env.NUXT_PUBLIC_SITE_URL || 'https://techhivelabs.com',
            siteName: 'Awesome Site',
            siteDescription: 'Welcome to my awesome site!',
            language: 'en', // prefer more explicit language codes like `en-AU` over `en`
        }
    },
  modules: [
    '@nuxtjs/tailwindcss',
    '@nuxt/devtools',
    '@nuxt/image',
    '@pinia/nuxt',
    '@nuxtjs/supabase'
  ],
  extends: [
    'nuxt-seo-kit'
  ]
})