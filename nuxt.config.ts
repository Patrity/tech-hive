// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
    runtimeConfig: {
        public: {
            siteUrl: 'https://takeoffhelper.com',
            runMode: process.env.NUXT_RUNMODE || 'production',
            siteName: 'TechHive Labs',
            siteDescription: 'Programming, Marketing, and Consulting',
            language: 'en-US',
            titleSeparator: '|',
            trailingSlash: true,
        },
    },
    app: {
        head: {
            titleTemplate: '%pageTitle %titleSeparator %siteName'
        }

    },
    modules: [
      '@nuxtjs/tailwindcss',
      '@nuxt/image',
      '@pinia/nuxt',
      '@nuxtjs/supabase'
    ],
    extends: [
        'nuxt-seo-kit'
    ],
    supabase: {
        redirect: false
    }
})