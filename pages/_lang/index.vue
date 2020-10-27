<script>
export default {
    methods: {
        nextSection() {
            this.$refs.fullpage.api.moveSectionDown()
        },
        previousSlide() {
            this.$refs.fullpage.api.moveSlideLeft()
        },
        nextSlide() {
            this.$refs.fullpage.api.moveSlideRight()
        },
        fillAnchors() {
            this.options.anchors = []
            this.sectionList.forEach(section => this.options.anchors.push(section.dataset.section))
        },
        afterSectionLoad(origin, destination) {

            if (destination.anchor !== null && destination.anchor !== "home")
                this.$ga.screenview(destination.anchor)

            if (destination.anchor === "feature" && this.loopSlideInterval === null)
                this.loopSlideInterval = setInterval(() => this.$refs.fullpage.api.moveSlideRight(), this.interval)
            else {
                clearInterval(this.loopSlideInterval)
                this.loopSlideInterval = null
            }
        },
        
    },
    data: function() {
        return {
            interval: 6000,
            loopSlideInterval: null,
            sectionList: [],
            options: {
                licenseKey: "800D1B93-C2C74D36-8E0392D6-8365BDFF",
                menu: '#qmenu',
                normalScrollElements: '.section .scrollable',
                verticalCentered: false,
                navigation: true,
                slidesNavigation: true,
                slidesNavPosition: 'bottom',
				responsiveWidth: 601,
                responsiveHeight: 480,
                anchors: [],
                afterLoad: this.afterSectionLoad
            },
        }
    },
    mounted() {
        this.sectionList = [...document.getElementsByClassName('section')]
        this.fillAnchors()
    }
}
</script>

<template>
    <div>
        <div class="page-header-alpha">
            <nav class="navbar-sidebar">
                <ul class="navbar-nav" id="qmenu">
                    <li class="nav-item" data-menuanchor="home">
                        <a href="#home">
                            <span class="txt">Hajime</span>
                        </a>
                    </li>
                    <li class="nav-item" data-menuanchor="about">
                        <a href="#about">
                            <span class="txt">{{ $t("about.index") }}</span>
                        </a>
                    </li>
                    <li class="nav-item" data-menuanchor="feature">
                        <a href="#feature">
                            <span class="txt">{{ $t("feature.index") }}</span>
                        </a>
                    </li>
                    <li class="nav-item" data-menuanchor="author">
                        <a href="#author">
                            <span class="txt">{{ $t("author.index") }}</span>
                        </a>
                    </li>
                    <li class="nav-item" data-menuanchor="support">
                        <a href="#support">
                            <span class="txt">{{ $t("support.index") }} Hajime</span>
                        </a>
                    </li>
                    <li class="nav-item" data-menuanchor="contact">
                        <a href="#contact">
                            <span class="txt">{{ $t("contact.index") }}</span>
                        </a>
                    </li>
                </ul>
            </nav>
        </div>
        
        <full-page
            id="fullpage"
            ref="fullpage"
            
            :options="options"
        >
            <section-hajime
                @on-section-next="nextSection()"
            />

            <section-about />

            <section-feature @on-hover="" />

            <section-author
                @on-slide-previous="previousSlide()"
                @on-slide-next="nextSlide()"
            />

            <section-support />

            <section-contact />

        </full-page>
    </div>
</template>