<template>        
    <section class="section section-home fullscreen-md fp-auto-height-responsive" data-section="home">
        <div class="section-wrapper">

            <div class="section-title text-center">
                <h1 class="title-bg">
                    Hajime
                </h1>
            </div>

            <div class="section-content anim">
                <div class="title-desc">
                    <h2 class="display-4 display-title anim-1">
                        Hajime
                        <span class="badge badge-warning">pre-alpha</span>
                    </h2>
                    <h3 class="anim-2">
                        {{ $t("home.subtitle") }}
                    </h3>
                </div>

                <div class="btns-action">
                    <a class="btn btn-white btn-round btn-full" href="#services">
                        {{ $t("home.download") }}
                    </a>
                </div>

                <div class="btns-action">
                    <a href="https://github.com/Maus3rSR/Hajime" target="_blank">
                        {{ $t("home.view") }}
                    </a>
                </div>
                <div class="btns-action">
                    <a href="/fr">
                        <span class="flag-icon flag-icon-fr" />
                    </a>
                    <a href="/">
                        <span class="flag-icon flag-icon-gb" />
                    </a>
                </div>
            </div>

            <footer class="section-footer scrolldown">
                <a class="down" @click="$emit('on-section-next')">
                    <span class="icon"></span>
                    <span class="txt">Scroll</span>
                </a>
            </footer>
        </div>
    </section>
</template>