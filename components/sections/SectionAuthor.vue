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
    },
    mounted() {
    }
}
</script>


<template>
    <section id="section-author" class="section section-description fp-auto-height-responsive" data-section="author">
        <div class="section-title text-center">
          <h1 class="title-bg">{{ $t("author.index") }}</h1>
        </div>

        <div class="slide">
            <div class="section-wrapper twoside center-vh dir-col">
                <div class="item row justify-content-between">
                    <div class="col-12 col-sm-6">
                        <div class="section-content anim translateUp">
                            <div class="images text-center">
                                <div class="img-frame-legend-alpha">

                                    <img src="~assets/images/author-dev.png" alt="Kevin UNFRICHT" class="img img-responsive">

                                    <div class="legend">
                                        <h2 class="display-4">
                                            <strong>Développeur</strong>
                                        </h2>
                                        <p>Web - Unity - 3D</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div class="col-12 col-sm-6 col-md-5">
                        <div class="section-content anim">
                            <div class="title-desc">
                                <p>Bonjour, je suis Kevin UNFRICHT</p>
                                <p>
                                    Développeur web enthousiaste avec <strong>+7 ans d'expériences professionnelles</strong>. Je souhaite mettre à profit toute mon expertise pour
                                    offrir à <mark>Hajime</mark> la meilleure expérience possible pour la communauté Kendo internationale. 
                                </p>
                            </div>
                        </div>

                        <ul class="nav">
                            <li class="nav-item">
                                <a class="nav-link" href="https://www.linkedin.com/in/kevinunfricht/" target="_blank">
                                    <i class="fab fa-linkedin"></i>
                                </a>
                            </li>
                            <li class="nav-item">
                                <a class="nav-link" href="https://www.malt.fr/profile/kevinunfricht/" target="_blank">
                                    MALT
                                </a>
                            </li>
                            <li class="nav-item">
                                <a class="nav-link" href="https://maus3rsr.artstation.com/" target="_blank">
                                    <i class="fab fa-artstation"></i>
                                </a>
                            </li>
                        </ul>

                        <a class="btn btn-transp-arrow btn-outline btn-primary btn-round" @click="$emit('on-slide-next')">
                            <span class="icon arrow-right"></span>
                            <span class="text">Dans l'ombre je suis également...</span>
                        </a>
                    </div>
                </div>
            </div>
        </div>

        <div class="slide">
            <div class="section-wrapper twoside center-vh dir-col">
                <div class="item row justify-content-between">
                    <div class="col-12 col-sm-6 col-md-5">
                        <div class="section-content anim">
                            <div class="title-desc">
                                <p>Bonjour, je suis Kevin UNFRICHT</p>
                                <p>
                                    Développeur web enthousiaste avec <strong>+7 ans d'expériences professionnelles</strong>. Je souhaite mettre à profit toute mon expertise pour
                                    offrir à <mark>Hajime</mark> la meilleure expérience possible pour la communauté Kendo internationale. 
                                </p>
                            </div>
                        </div>

                        <ul class="nav">
                            <li class="nav-item">
                                <a class="nav-link" href="https://www.budokai-metz.fr/kendo/" target="_blank">
                                    Budokaï Metz Haku-Un-Kan
                                </a>
                            </li>
                        </ul>

                        <a class="btn btn-transp-arrow btn-outline btn-primary btn-round" @click="$emit('on-slide-previous')">
                            <span class="icon arrow-left"></span>
                            <span class="text">À la lumière je suis également...</span>
                        </a>
                    </div>

                    <div class="col-12 col-sm-6">
                        <div class="section-content anim translateUp">
                            <div class="images text-center">
                                <div class="img-frame-legend-alpha">

                                    <img src="~assets/images/author-kendo.png" alt="Kevin UNFRICHT" class="img img-responsive">

                                    <div class="legend">
                                        <h2 class="display-4">
                                            <strong>Kenshi</strong>
                                        </h2>
                                        <p>3ème DAN</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>

        <footer class="section-footer scrolldown">
            <a class="down" @click="$emit('on-section-next')">
                <span class="icon"></span>
                <span class="txt">{{ $t("feature.index") }}</span>
            </a>
        </footer>
    </section>
</template>

<style lang="scss" scoped>
.section {
    &.active {
        
    }
}
</style>

<style>
#section-author .fp-controlArrow {
    display: none;
}
</style>