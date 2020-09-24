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

                <span class="text">
                    <span class="line">Simpleux</span>
                    <span class="line sub">Portfolio Template</span>
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
            <div class="cover-bg bg-img" data-image-src="img/bg-default1.jpg"></div>
            <div class="cover-bg-mask bg-color" data-bgcolor="rgba(2, 3, 10, 0.7)"></div>
        </div>

        <main class="page-main page-fullpage main-anim" id="mainpage">
            <Nuxt />
        </main>

        <footer id="site-footer" class="page-footer">
            <div class="footer-left">
                <p>PORTFOLIO BY
                    <a href="http://highhay.com">
                    <span class="marked">BRAND</span>
                    </a>
                </p>
            </div>

            <div class="footer-right">
                <ul class="social">
                    <li>
                        <a href="">
                            <i class="icon fa fa-facebook"></i>
                        </a>
                    </li>
                    <li>
                        <a href="">
                            <i class="icon fa fa-twitter"></i>
                        </a>
                    </li>
                    <li>
                        <a href="">
                            <i class="icon fa fa-linkedin"></i>
                        </a>
                    </li>
                    <li>
                        <a href="">
                            <i class="icon fa fa-instagram"></i>
                        </a>
                    </li>
                </ul>
            </div>
        </footer>
    </div>
</template>
