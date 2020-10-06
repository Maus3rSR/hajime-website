<script>
export default {
    computed: {
        patreon_url() {
            return process.env.patreonUrl
        },
        paypal_url() {
            return process.env.paypalUrl
        }
    }
}
</script>

<template>
    <section class="section section-description fp-auto-height-responsive" data-section="support">
        <div class="section-wrapper">
            <div class="section-title text-center">
                <h1 class="title-bg">{{ $t("support.index") }}</h1>
            </div>

            <div class="section-content reduced anim text-center anim-2 mb-5">
                <h2 class="display-4 display-title anim-2">
                    Support Hajime, why?
                </h2>
                <div class="title-desc anim-3">
                    Hajime is an MIT licensed open-source and completely free to use. However, the amount of effort needed to maintain and develop new features for the project is not sustainable without proper financial backing. Currently, more than 600h (~ 4 months of work time) has been invest into this software from his author. You can support Hajime development via the following methods:
                </div>
            </div>

            <div class="btns-action text-center">
                <a :href="patreon_url" target="_blank" class="btn btn-white btn-round btn-full">
                    <i class="fab fa-patreon"></i> Patreon (recurring pledge)
                </a>

                <a :href="paypal_url" target="_blank" class="btn btn-round btn-full">
                    <i class="fab fa-paypal"></i> Paypal (one time donation)
                </a>
            </div>
        </div>
    </section>
</template>