<script>
export default {
    data() {
        return {
            screenshotList: [
                'fighter_list',
                'pool_list',
                'ranking_detail',
                'pool_list',
                'fight_board',
            ]
        }
    }
}
</script>

<template>
    <section class="section section-description fp-auto-height-responsive" data-section="about">
        <div class="section-wrapper">
            <div class="section-title text-center">
                <h1 class="title-bg">{{ $t("about.index") }}</h1>
            </div>

            <div class="section-content reduced anim text-center anim-2">
                <h2 class="display-4 display-title anim-2">{{ $t("about.subtitle") }}</h2>
                <div class="title-desc anim-3 row">

                    <div class="col-12">
                        <i18n tag="p" path="about.description.index">
                            <strong>{{ $t("about.description.optimize") }}</strong>
                            <strong><mark>{{ $t("about.description.event") }}</mark></strong>
                        </i18n>
                    </div>

                    <div class="col-8 software-preview-col" v-b-modal.modal-preview-software>
                        <img class="img img-fluid" src="~assets/images/about/pc_mockup.png" alt="Software preview">
                        <div id="see-more-preview">
                            <p class="display-5">{{ $t("about.see-more") }}</p>
                            <img class="arrow" src="~assets/images/about/arrow.svg" alt="Arrow">
                        </div>
                    </div>
                </div>
            </div>
        </div>

        <b-modal
            id="modal-preview-software"
            size="xl"
            header-bg-variant="dark"
            body-bg-variant="dark"
            title="Preview"
        >
            <carousel
                :per-page="1"
                :autoplay="true"
                :autoplay-hover-pause="true"
            >
                <slide v-for="(screenshot, index) in screenshotList" :key="index">
                    <img class="img img-fluid" :src="require(`~/assets/images/screenshots/${screenshot}.jpg`)" alt="Software preview">
                </slide>
            </carousel>

            <template slot="modal-footer">&nbsp;</template>
        </b-modal>
    </section>
</template>

<style lang="scss" scoped>
.software-preview-col {
    &:hover {
        #see-more-preview {
            p {
                &:after {
                    width: 80px;
                }
            }
        }
    }
}

#see-more-preview {
    position: absolute;
    right: -180px;
    top: 0px;   

    p {
        margin: 0;

        &:after {
            content: "";
            display: block;
            position: relative;
            top: -10px;
            height: 3px;
            width: 0;
            background: #fff;
            transition: all 500ms ease;
        }
    }

    img {
        width: 80px;
        margin-top: -10px;
        margin-left: -50px;
    }
}
</style>

<style lang="scss">
#modal-preview-software {
    text-align: center;

    img {
        height: auto;
        width: 100%;
    }

    @media (min-width: 768px) {
        img {
            height: 60vh;
            width: auto;
        }
    }

    footer {
        display: none;
    }
}
</style>