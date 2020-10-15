<script>
export default {
   head: {
        meta: [
            { charset: "utf-8" },
            { name: "viewport", content: "width=device-width, initial-scale=1" },
        ],
        // link: [{ rel: "icon", type: "image/x-icon", href: "/favicon.ico" }],
        bodyAttrs: {
            class: "body-page body-item"
        }
    },
    computed: {
        github_url() {
            return process.env.githubUrl
        },
        patreon_url() {
            return process.env.patreonUrl
        },
        discord_url() {
            return process.env.discordUrl
        },
        author_url() {
            return process.env.authorUrl
        }
    },
    methods: {
        getUri(filename) {
            return require(`../assets/images/${filename}`)
        },
        backgroundInit() {
            let list = document.getElementsByClassName('bg-img')
            for (var i = 0; i < list.length; i++) {
                var src = list[i].getAttribute('data-image-src')
                list[i].style.backgroundImage = "url('" + src + "')"
                list[i].style.backgroundRepeat = "no-repeat"
                list[i].style.backgroundPosition = "center"
                list[i].style.backgroundSize = "cover"
            }

            list = document.getElementsByClassName('bg-color')
            for (let i = 0; i < list.length; i++) {
                let src = list[i].getAttribute('data-bgcolor')
                list[i].style.backgroundColor = src
            }
        }
    },
    mounted() {
        this.backgroundInit()
    }
}
</script>

<template>
    <div>
        <PageLoader />
        <Header />

        <div class="page-cover">
            <div class="cover-bg bg-img" :data-image-src="getUri('bg-kendo.jpg')">
            </div>
            <div class="cover-bg-mask bg-color" data-bgcolor="rgba(2, 3, 10, 0.7)"></div>
        </div>

        <main class="page-main page-fullpage main-anim" id="mainpage">
            <Nuxt />
        </main>

        <footer id="site-footer" class="page-footer">
            <div class="footer-left">
                <p>
                    <a :href="author_url" target="_blank">
                        <img src="~assets/images/k.png" width="20" alt="Kevin UNFRICHT">
                    </a>

                    <i18n tag="span" path="footer.withLove">
                        <i class="fas fa-heart text-danger" />
                    </i18n>
                </p>
            </div>

            <div class="footer-right">
                <ul class="social">
                    <li>
                        <a :href="github_url" target="_blank" title="GITHub Page">
                            <i class="icon fab fa-github"></i>
                        </a>
                    </li>
                    <li>
                        <a :href="discord_url" target="_blank" title="Discord">
                            <i class="icon fab fa-discord"></i>
                        </a>
                    </li>
                    <li>
                        <a :href="patreon_url" target="_blank" title="Patreon Page">
                            <i class="icon fab fa-patreon"></i>
                        </a>
                    </li>
                </ul>
            </div>
        </footer>
    </div>
</template>