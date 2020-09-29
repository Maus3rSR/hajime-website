<script>
export default {
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
        this.backgroundInit()
        this.menuInit()
    }
}
</script>

<template>
    <div>
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
                <nav class="navbar-topmenu">
                    <ul class="navbar-nav navbar-nav-actions">
                    <li class="nav-item">
                        <a class="btn btn-outline-white btn-round" target="_blank" href="https://themeforest.net/item/simpleux-beautiful-creative-website-template-for-agency-business-and-portfolio/20863111">
                        Buy Now
                        </a>
                    </li>
                    </ul>
                </nav>

                <nav class="navbar-mainmenu">
                    <ul class="navbar-nav mr-auto">
                    <li class="nav-item active">
                        <a class="nav-link" href="./index.html#home">Home
                        <span class="sr-only">(current)</span>
                        </a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link" href="./gallery.html">Gallery</a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link" href="./item.html">Item</a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link" href="./demo.html">Demo</a>
                    </li>
                    </ul>
                </nav>

                <nav class="navbar-sidebar ">
                    <ul class="navbar-nav" id="qmenu">
                        <li class="nav-item" data-menuanchor="home">
                            <a href="#home">
                            <i class="icon ion-ios-home-outline"></i>
                            <span class="txt">Home</span>
                            </a>
                        </li>
                        <li class="nav-item" data-menuanchor="about">
                            <a href="#about">
                            <i class="icon ion-ios-information-outline"></i>
                            <span class="txt">About</span>
                            </a>
                        </li>
                        <li class="nav-item" data-menuanchor="services">
                            <a href="#services">
                            <i class="icon ion-ios-list-outline"></i>
                            <span class="txt">Services</span>
                            </a>
                        </li>
                        <li class="nav-item" data-menuanchor="projects">
                            <a href="#projects">
                            <i class="icon ion-ios-albums-outline"></i>
                            <span class="txt">Projects</span>
                            </a>
                        </li>
                        <li class="nav-item" data-menuanchor="register">
                            <a href="#register">
                            <i class="icon ion-ios-compose-outline"></i>
                            <span class="txt">Register</span>
                            </a>
                        </li>
                        <li class="nav-item" data-menuanchor="contact">
                            <a href="#contact">
                            <i class="icon ion-ios-telephone-outline"></i>
                            <span class="txt">Contact</span>
                            </a>
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
                </p>
            </div>

            <div class="footer-right">
                <ul class="social">
                    <li>
                        <a href="https://github.com/Maus3rSR/Hajime" target="_blank">
                            <i class="icon fab fa-github"></i>
                        </a>
                    </li>
                    <li>
                        <a href="">
                            <i class="icon fab fa-patreon"></i>
                        </a>
                    </li>
                </ul>
            </div>
        </footer>
    </div>
</template>
