export default {
    components: true,
    router: { middleware: 'i18n' },
    generate: {
        routes: [ '/', '/fr' ]
    },
    modules: [ 'bootstrap-vue/nuxt' ],
    bootstrapVue: { css: false, bvCSS: false },
    plugins: [
        '~/plugins/i18n.js',
        { src:'~/plugins/fullPage.js', ssr: false },
        { src:'~/plugins/kinesis.js', ssr: false },
    ],
    css: [
        '~/assets/css/full-page.min.css',
        '~/assets/css/flag-icon.min.css',
        '~/assets/css/pageloader.css',
        '~/assets/fonts/font-awesome/font-awesome.min.css',
        '~/assets/fonts/ionicons/ionicons.min.css',
        '~/assets/fonts/bebas/stylesheet.css',
        '~/assets/fonts/opensans/stylesheet.css',
        '~/assets/sass/main.scss',
    ],
    env: {
        githubUrl: "https://github.com/Maus3rSR/Hajime",
        patreonUrl: "https://www.patreon.com/hajime_software",
        paypalUrl: "https://www.paypal.com/paypalme/mausersr",
        discordUrl: "https://discord.gg/EnhaESv",
        contactEmail: "ku@hajime.software"
    }
}
