<template>
    <section class="section section-description fp-auto-height-responsive" data-section="about">
        <div class="section-wrapper">
            <div class="section-title text-center">
                <h1 class="title-bg">{{ $t("about.index") }}</h1>
            </div>

            <div class="section-content reduced anim text-center anim-2">
                <h2 class="display-4 display-title anim-2">{{ $t("about.subtitle") }}</h2>
                <div class="title-desc anim-3">
                    <i18n tag="p" path="about.description.index">
                        <strong>{{ $t("about.description.optimize") }}</strong>
                        <strong><mark>{{ $t("about.description.event") }}</mark></strong>
                    </i18n>
                </div>
            </div>

            <footer class="section-footer scrolldown">
                <a class="down" @click="$emit('on-section-next')">
                    <span class="icon"></span>
                    <span class="txt">{{ $t("author.index") }}</span>
                </a>
            </footer>
        </div>
    </section>
</template>