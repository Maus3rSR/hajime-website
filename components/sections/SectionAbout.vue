<script>
export default {
    methods: {
        refreshCarousel() {
            this.$nextTick(() => window.dispatchEvent(new Event('resize')))
        }
    },
    data() {
        return {
            screenshotList: [
                'fighter_list',
                'pool_list',
                'ranking_detail',
                'fight_list',
                'fight_board',
            ]
        }
    }
}
</script>

<template>
    <section class="section fp-auto-height-responsive" data-section="about">
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

                    <div class="col-8 software-preview-col m-auto" v-b-modal.modal-preview-software>
                        <img class="img img-fluid" src="~assets/images/about/pc_mockup.png" alt="Software preview">

                        <div class="btn btn-round" v-b-modal.modal-preview-software>
                            <i class="fas fa-images"></i>
                            {{ $t("about.see-more") }}
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

            @shown="refreshCarousel"
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
    .btn {
        position: absolute;
        right: 0;
        top: 0;
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