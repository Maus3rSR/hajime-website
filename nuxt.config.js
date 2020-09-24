export default {
    router: {
        middleware: 'i18n'
    },
    css: [
        '~/assets/css/full-page.min.css',
        '~/assets/fonts/font-awesome.min.css',
        '~/assets/fonts/ionicons.css',
        '~/assets/fonts/bebas/stylesheet.css',
        '~/assets/fonts/opensans/stylesheet.css',
        '~/assets/sass/main.scss',
    ],
    modules: [ 'bootstrap-vue/nuxt' ],
    bootstrapVue: { css: false, bvCSS: false },
    plugins: [
        '~/plugins/i18n.js',
        { src:'~/plugins/fullPage.js', ssr: false },
    ],
    generate: {
        routes: [ '/', '/fr' ]
    }
}
