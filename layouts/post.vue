<script>
export default {
   head: {
        title: "Hajime - Kendo competition software management",
        meta: [
            { charset: "utf-8" },
            { name: "viewport", content: "width=device-width, initial-scale=1" },
            {
                hid: "description",
                name: "description",
                content: "Hajime is a software to help organizers to speed up Kendo competition management and focus to what is really matters: the Kendo event",
            }
        ],
        link: [{ rel: "icon", type: "image/x-icon", href: "/favicon.ico" }],
        bodyAttrs: {
            id: "menu",
            class: "body-page fp-viewing-home fp-responsive"
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
    }
}
</script>

<template>
    <div>
        <PageLoader />
        <Header />

        <main class="page-main" id="mainpage">
            <div class="section section-twoside fp-auto-height-responsive bg-black" data-section="item-alpha">
                <div class="section-cover-tier mask-black">
                    <div class="cover-content">
                        <div class="title-desc">
                            <span class="display-4 display-title">Hajime</span>
                            <footer>
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

                                <p>
                                    <a :href="author_url" target="_blank">
                                        <img src="~assets/images/k.png" width="20" alt="Kevin UNFRICHT">
                                    </a>

                                    <i18n tag="span" path="footer.withLove">
                                        <i class="fas fa-heart text-danger" />
                                    </i18n>
                                </p>
                            </footer>
                        </div>
                    </div>
                </div>

                <div class="section-wrapper largewidth">
                    <Nuxt />
                </div>
            </div>
        </main>
    </div>
</template>

<style lang="scss" scoped>
.section-cover-tier {
    z-index: 1;
    background: url('~assets/images/bg-kendo-2.jpg');
    background-size: cover;
    background-position: center;
}

.social {
    display: flex;
    padding: 0;
    font-size: 1.5rem;

    li {
        padding-right: 15px;
    }
}
</style>