<script>
export default {
    methods: {
        lerp(start, end, amt){
            return (1 - amt ) * start + amt * end
        },
        onEnter(e) {
            this.oldValues.offsetLeftContent = this.leftContent.offsetLeft
            this.oldValues.offsetRightContent = this.oldValues.offsetLeftContent
        },
        onMove(e) {
            const mouseRatio = (e.pageX - this.sectionContent.offsetLeft) / this.sectionContent.clientWidth
            console.log(this.sectionContent.clientWidth)

            this.leftContent.style.left = `${this.oldValues.offsetLeftContent + this.lerp(-this.oldValues.offsetLeftContent, this.oldValues.offsetLeftContent, 1 - mouseRatio)}px`
            this.rightContent.style.right = `${this.oldValues.offsetRightContent + this.lerp(-this.oldValues.offsetRightContent, this.oldValues.offsetRightContent, mouseRatio)}px`
        },
        onLeave() {
            this.leftContent.style.left = null
            this.rightContent.style.right = null
        }
    },
    computed: {
        author_url() {
            return process.env.authorUrl
        },
        malt_url() {
            return process.env.maltUrl
        }
    },
    data() {
        return {
            sectionContent: null,
            leftContent: null,
            rightContent: null,
            oldValues: {
                offsetLeftContent: null,
                offsetRightContent: null,
            }
        }
    }
}
</script>


<template>
    <section id="section-author" class="section fp-auto-height-responsive" data-section="author">
        <div class="section-title text-center">
          <h1 class="title-bg">{{ $t("author.index") }}</h1>
        </div>

        <div class="slide">
            <div class="section-wrapper twoside center-vh dir-col">
                <div class="item row justify-content-between">
                    <div class="col-12 col-sm-4 center-vh">
                        <div class="section-content anim translateUp">
                            <div class="images text-center">
                                <div class="img-avatar-alpha">
                                    <div class="img-1 shadow">
                                        <img class="img" src="~assets/images/author/dev.jpg" alt="Kevin UNFRICHT">
                                    </div>
                                    <div class="legend text-center pos-abs">
                                        <h2>Kevin UNFRICHT</h2>
                                        <p class="small">{{ $t("author.developer") }}</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div class="col-12 col-md-8">
                        <div class="section-content anim">
                            <div class="title-desc">
                                <i18n tag="p" path="author.description.index">
                                    <strong>{{ $t("author.description.experience") }}</strong>
                                    <mark>Hajime</mark>
                                </i18n>
                            </div>
                        </div>
                        <a class="btn btn-outline btn-primary btn-round" :href="author_url" target="_blank">
                            <i class="fab fa-linkedin"></i>
                            Linkedin
                        </a>
                        <a class="btn btn-outline btn-primary btn-round" :href="malt_url" target="_blank">
                            MALT
                        </a>
                        <a class="btn btn-transp-arrow btn-outline btn-primary btn-round" @click="$emit('on-slide-next')">
                            <span class="icon arrow-right"></span>
                            <span class="text">{{ $t("author.button") }}</span>
                        </a>
                    </div>
                </div>
            </div>
        </div>

        <div class="slide">
            <div class="section-wrapper twoside center-vh dir-col">
                <div class="item row justify-content-between">
                    <div class="col-12 col-md-8">
                        <div class="section-content anim">
                            <div class="title-desc">
                                <p>{{ $t("author.description-kendo.kenshi") }}</p>
                                <i18n tag="p" path="author.description-kendo.experience">
                                    <mark>Hajime</mark>
                                </i18n>
                            </div>
                        </div>

                        <a class="btn btn-transp-arrow btn-outline btn-primary btn-round" @click="$emit('on-slide-previous')">
                            <span class="icon arrow-left"></span>
                            <span class="text">{{ $t("author.button") }}</span>
                        </a>

                        <a class="btn btn-outline btn-primary btn-round" href="https://www.budokai-metz.fr/kendo/" target="_blank">
                            Budokaï Metz Haku-Un-Kan
                        </a>
                    </div>

                    <div class="col-12 col-sm-4 center-vh">
                        <div class="section-content anim translateUp">
                            <div class="images text-center">
                                <div class="img-avatar-alpha">
                                    <div class="img-1 shadow">
                                        <img class="img" src="~assets/images/author/kendo.jpg" alt="Kevin UNFRICHT">
                                    </div>
                                    <div class="legend text-center pos-abs">
                                        <h2>Kenshi</h2>
                                        <p class="small"><p>{{ $t("number.third") }} DAN</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
</template>

<style>
#section-author .fp-controlArrow {
    display: none;
}

#section-author .fp-slidesNav {
    display: none;
}
</style>