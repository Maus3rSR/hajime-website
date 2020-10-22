<script>
export default {
    methods: {
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
        this.menuInit()
    }
}
</script>

<template>
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

        <NuxtLink :to="$i18n.path('')" class="navbar-brand" exact>
            <span class="logo">
                <img class="light-logo" src="~assets/images/logo.png" alt="Logo">
            </span>
        </NuxtLink>

        <div class="all-menu-wrapper" id="navbarMenu">
            <!-- <nav class="navbar-topmenu">
                <ul class="navbar-nav navbar-nav-actions"></ul>
            </nav> -->

            <nav class="navbar-mainmenu">
                <ul class="navbar-nav mr-auto">
                    <li class="nav-item">
                        <NuxtLink :to="$i18n.path('')" class="nav-link" exact>
                            Hajime
                        </NuxtLink>
                    </li>
                    <li class="nav-item">
                        <NuxtLink :to="$i18n.path('download')" class="nav-link" exact>
                            {{ $t("download.title") }}
                        </NuxtLink>
                    </li>
                    <li class="nav-item">
                        <NuxtLink :to="$i18n.path('donation')" class="nav-link" exact>
                            {{ $t("donation.title") }}
                        </NuxtLink>
                    </li>
                </ul>
            </nav>
        </div>
    </header>
</template>