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
        },
        initAuthorSection() {
            
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
        this.initAuthorSection()
    }
}
</script>

<template>
    <full-page
        id="fullpage"
        ref="fullpage"
        
        :options="options"
    >
        
        <section-hajime
            @on-section-next="nextSection()"
        />

        <section-about />

        <section-author
            @on-slide-previous="previousSlide()"
            @on-slide-next="nextSlide()"
        />

        <section-feature />

    </full-page>
</template>