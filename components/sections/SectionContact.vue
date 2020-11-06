<script>
export default {
    computed: {
        discord_url() {
            return process.env.discordUrl
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

            <div class="section-content">
                <div class="item row justify-content-between">
                    <div class="col-sm-6 col-12">
                        <h2 class="display-4 display-title">
                            {{ $t("contact.email.title") }}
                        </h2>

                        <p>{{ $t("contact.email.description") }}</p>

                        <div class="btns-action">
                            <a :href="`mailto:${email}`" target="_blank" class="btn btn-round btn-white btn-full">
                                <i class="fas fa-envelope-open-text" />
                                {{ $t("contact.email.button") }}
                            </a>
                        </div>
                    </div>

                    <div class="col-sm-6 col-12 text-right">
                        <h2 class="display-4 display-title">
                            {{ $t("contact.discord.title") }}
                        </h2>

                        <p>
                            <a href="https://discord.com/" target="_blank">Discord</a> {{ $t("contact.discord.description") }}
                        </p>

                        <div class="btns-action">
                            <a :href="discord_url" target="_blank" class="btn btn-round btn-full">
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