<script>
export default {
    computed: {
        patreon_url() {
            return process.env.patreonUrl
        },
        paypal_url() {
            return process.env.paypalUrl
        }
    },
    methods: {
        trackEvent(label) {
            this.$ga.event('Support', 'Click', label)
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
                    {{ $t("support.title") }}
                </h2>
                <div class="title-desc anim-3">
                    {{ $t("support.description", [`600h (~4 ${$tc("time.month", 4)} ${$t("time.work")})`]) }}
                </div>
            </div>

            <div class="btns-action text-center mb-3">
                <a :href="patreon_url" target="_blank" @click="trackEvent('Patreon')" class="btn btn-white btn-round btn-full">
                    <i class="fab fa-patreon"></i> Patreon ({{ $t("support.patreon") }})
                </a>

                <a :href="paypal_url" target="_blank" @click="trackEvent('Paypal')" class="btn btn-round btn-full">
                    <i class="fab fa-paypal"></i> Paypal ({{ $t("support.paypal") }})
                </a>
            </div>

            <div class="btns-action text-center">
                <NuxtLink :to="$i18n.path('donation')" exact>
                    {{ $t("donation.title") }}
                </NuxtLink>
            </div>
        </div>
    </section>
</template>