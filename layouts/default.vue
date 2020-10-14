<script>
export default {
    computed: {
        github_url() {
            return process.env.githubUrl
        },
        patreon_url() {
            return process.env.patreonUrl
        },
        discord_url() {
            return process.env.discordUrl
        }
    },
    methods: {
        getUri(filename) {
            return require(`../assets/images/${filename}`)
        },
        pageLoad() {
            document.getElementById("page-loader").classList.add("p-hidden")
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
        },
        menuInit() {
            let mainPage = document.getElementById("mainpage")
            let menuIcon = document.getElementById("navMenuIcon")
            let menuBlock = document.getElementById("navbarMenu")
            let menuItems = [...menuBlock.getElementsByClassName("nav-link")]
            let menuSideBar = [...document.getElementsByClassName("navbar-sidebar")]
            let reactToMenu = [...document.getElementsByClassName("page-cover")]

            // Menu icon clicked
            menuIcon.onclick = function () {
                menuIcon.classList.toggle('menu-visible')
                menuIcon.firstChild.classList.toggle('menu-visible')
                menuBlock.classList.toggle('menu-visible')
                mainPage.classList.toggle('menu-visible')
                menuItems.forEach(item => item.classList.toggle('menu-visible'))
                menuSideBar.forEach(item => item.classList.toggle('menu-visible'))
                reactToMenu.forEach(item => item.classList.toggle('menu-visible'))
            }

            // Hide menu after a menu item clicked
            menuItems.forEach(item => item.onclick = function() {
                menuIcon.classList.remove('menu-visible')
                menuIcon.firstChild.classList.remove('menu-visible')
                menuBlock.classList.remove('menu-visible')
                mainPage.classList.remove('menu-visible')
                menuItems.forEach(item => item.classList.remove('menu-visible'))
                menuSideBar.forEach(item => item.classList.remove('menu-visible'))
                reactToMenu.forEach(item => item.classList.remove('menu-visible'))
            })
        }
    },
    mounted() {
        window.onload = this.pageLoad
        this.backgroundInit()
        this.menuInit()
    }
}
</script>

<template>
    <div>
        <div class="page-loader" id="page-loader">
            <div>
                <img width="80px" src="~assets/images/logo.png">
            </div>
        </div>

        <header class="page-header navbar page-header-alpha scrolled-white menu-right topmenu-right">

            <button class="navbar-toggler site-menu-icon" id="navMenuIcon">
                <span class="menu-icon menu-icon-random">
                    <span class="bars">
                    <span class="bar1"></span>
                    <span class="bar2"></span>
                    <span class="bar3"></span>
                    </span>
                </span>
            </button>

            <a class="navbar-brand" href="#">
                <span class="logo">
                    <img class="light-logo" src="~assets/images/logo.png" alt="Logo">
                </span>
            </a>

            <div class="all-menu-wrapper" id="navbarMenu">
                <!-- <nav class="navbar-topmenu">
                    <ul class="navbar-nav navbar-nav-actions"></ul>
                </nav> -->

                <nav class="navbar-mainmenu">
                    <ul class="navbar-nav mr-auto">
                        <li class="nav-item active">
                            <a class="nav-link" href="">
                                Downloads
                                <span class="sr-only">(current)</span>
                            </a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link" href="">Donation history</a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link" href="">Roadmap</a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link" href="">Release notes</a>
                        </li>
                    </ul>
                </nav>
            </div>
        </header>

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
                    <a href="https://www.linkedin.com/in/kevinunfricht/" target="_blank">
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

<style lang="scss" scoped>
.page-loader {
    background: black;
}
</style>