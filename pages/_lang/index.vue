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
				responsiveWidth: 601,
                responsiveHeight: 480,
                anchors: [],
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
    <full-page
        id="fullpage"
        ref="fullpage"
        
        :options="options"
    >
        
        <section class="section section-home fullscreen-md fp-auto-height-responsive" data-section="home">
            <div class="section-wrapper">

                <div class="section-title text-center">
                    <h1 class="title-bg">Hajime</h1>
                </div>

                <div class="section-content anim">
                    <div class="title-desc">
                        <h2 class="display-4 display-title anim-1">Simpleux is my
                            <br>
                            <strong>Portfolio</strong>
                        </h2>
                        <h3 class="anim-2">A Bootstrap 4 based portfolio template, ready for modern and beautiful websites easily.</h3>
                    </div>

                    <div class="btns-action">
                        <a class="btn btn-outline-white btn-round" href="#services">
                            Get started
                        </a>
                    </div>
                </div>

                <footer class="section-footer scrolldown">
                    <a class="down" @click="$refs.fullpage.api.moveSectionDown()">
                        <span class="icon"></span>
                        <span class="txt">Scroll Down</span>
                    </a>
                </footer>
            </div>
        </section>

        <section class="section section-description fp-auto-height-responsive" data-section="about">
            <div class="section-wrapper">
                <div class="section-title text-center">
                    <h1 class="title-bg">About</h1>
                </div>

                <div class="section-content reduced anim text-center anim-2">
                    <h2 class="display-4 display-title anim-2">Modern Website for your business</h2>
                    <div class="title-desc anim-3">
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris aliquet malesuada feugiat. Curabitur fermentum
                            bibendum nulla, non dictum ipsum tincidunt non. Quisque convallis pharetra tempor. Donec id pretium leo.
                            Pellentesque luctus massa non elit viverra pellentesque. Cras vitae neque molestie, rhoncus ipsum sit
                            amet, lobortis dui. Fusce in urna sem.</p>
                    </div>
                </div>

                <footer class="section-footer scrolldown">
                    <a class="down" @click="$refs.fullpage.api.moveSectionDown()">
                        <span class="icon"></span>
                        <span class="txt">Our Services</span>
                    </a>
                </footer>
            </div>
        </section>

    </full-page>
</template>