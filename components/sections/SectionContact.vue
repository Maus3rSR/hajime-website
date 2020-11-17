<script>
export default {
    computed: {
        discord_url() {
            return process.env.discordUrl
        },
        facebook_url() {
            return process.env.facebookUrl
        },
        email() {
            return process.env.contactEmail
        }
    }
}
</script>

<template>
    <section class="section fp-auto-height-responsive" data-section="contact">
        <div class="section-wrapper">
            <div class="section-title text-center">
                <h1 class="title-bg">{{ $t("contact.index") }}</h1>
            </div>

            <!-- EMAIL -->
            <div class="section-content">
                <div class="item row justify-content-between mb-5">
                    <div class="col-sm-6 col-12 text-right">
                        <p>{{ $t("contact.email.description") }}</p>
                    </div>
                    <div class="col-sm-6 col-12">
                        <div class="btns-action">
                            <a :href="`mailto:${email}`" target="_blank" class="btn btn-round btn-white btn-full">
                                <i class="fas fa-envelope-open-text" />
                                {{ $t("contact.email.button") }}
                            </a>
                        </div>
                    </div>
                </div>
                <!-- FACEBOOK -->
                <div class="item row justify-content-between mb-5">
                    <div class="col-sm-6 col-12">
                        <div class="btns-action float-right">
                            <a :href="facebook_url" target="_blank" class="btn btn-round btn-full">
                                <i class="fab fa-facebook" />
                                {{ $t("contact.facebook.button") }}
                            </a>
                        </div>
                    </div>
                    <div class="col-sm-6 col-12">
                        <p>{{ $t("contact.facebook.description") }}</p>
                    </div>
                </div>
                <!-- DISCORD -->
                <div class="item row justify-content-between mb-5">
                    <div class="col-sm-6 col-12 text-right">
                        <p>
                            <a href="https://discord.com/" target="_blank">Discord</a>
                            {{ $t("contact.discord.description") }}
                        </p>
                    </div>
                    <div class="col-sm-6 col-12">
                        <div class="btns-action">
                            <a :href="discord_url" target="_blank" class="btn btn-round btn-white btn-full">
                                <i class="fab fa-discord" />
                                {{ $t("contact.discord.button") }}
                            </a>
                        </div>
                    </div>
                </div>
            </div>

        </div>
    </section>
</template>