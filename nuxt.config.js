const isProduction = process.env.NODE_ENV === 'production'

export default {
    components: true,
    router: {
        // ...isProduction && { base: '/hajime-website/' }, // Not necessary if custom domain is enabled
        middleware: 'i18n',
    },
    generate: {
        routes: [ '/', '/download', '/fr', '/fr/download' ]
    },
    modules: [ 'bootstrap-vue/nuxt', '@nuxt/content', '@nuxtjs/robots', '@nuxtjs/sitemap' ], // /!\ Alwas put sitemap at the end of the array
    buildModules: [ '@nuxtjs/google-analytics' ],
    plugins: [
        '~/plugins/i18n.js',
        { src:'~/plugins/fullPage.js', ssr: false },
        { src:'~/plugins/kinesis.js', ssr: false },
        { src:'~/plugins/carousel.js', ssr: false },
    ],
    css: [
        '~/assets/css/full-page.min.css',
        '~/assets/css/pageloader.css',
        '~/assets/fonts/font-awesome/font-awesome.min.css',
        '~/assets/fonts/ionicons/ionicons.min.css',
        '~/assets/fonts/bebas/stylesheet.css',
        '~/assets/fonts/opensans/stylesheet.css',
        '~/assets/sass/main.scss',
    ],
    env: {
        contactEmail: "hey@hajime.software",
        githubUrl: "https://github.com/Maus3rSR/Hajime",
        patreonUrl: "https://www.patreon.com/hajime_software",
        paypalUrl: "https://www.paypal.com/paypalme/mausersr",
        discordUrl: "https://discord.gg/EnhaESv",
        authorUrl: "https://www.linkedin.com/in/kevinunfricht",
        maltUrl: "https://www.malt.fr/profile/kevinunfricht",
        downloadLatestReleaseLink: "https://github.com/Maus3rSR/Hajime/releases/latest/download/",
        oldReleaseUrl:"https://github.com/Maus3rSR/Hajime/releases",
        softwareVersion: "0.1.0-prealpha",
        hoursInvested: 700,
        monthsInvested: 5
    },
    bootstrapVue: { css: false, bvCSS: false },
    googleAnalytics: {
        id: "UA-40325837-3",
        autoTracking: {
            skipSamePath: true
        },
        ...!isProduction && {
            debug: {
                enabled: true,
                trace: true,
                sendHitTask: false
            }
        }
    },
    sitemap: {
        hostname: "https://www.hajime.software/",
        path: '/sitemap.xml',
        cacheTime: 1000 * 60 * 60 * 2,
        trailingSlash: true,
        gzip: true
    },
    robots: {
        UserAgent: '*',
        Disallow: '/'
    }
}
