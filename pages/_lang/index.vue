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
            },
        ],
        link: [{ rel: "icon", type: "image/x-icon", href: "/favicon.ico" }],
        bodyAttrs: {
            id: "menu",
            class: "body-page fp-viewing-home fp-responsive"
        }
    },
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
        }
    },
    data: function() {
        return {
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
            },
        }
    },
    mounted() {
        this.sectionList = [...document.getElementsByClassName('section')]
        this.fillAnchors()

        // if (document.readyState === "complete") {
        //     this.$refs.fullpage.destroy("all")
        //     this.$refs.fullpage.init()
        // }
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

            <section-feature />

            <section-author
                @on-slide-previous="previousSlide()"
                @on-slide-next="nextSlide()"
            />

            <section-support />

            <section-contact />

        </full-page>
    </div>
</template>