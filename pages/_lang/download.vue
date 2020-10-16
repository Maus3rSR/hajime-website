<script>
export default {
    layout: 'post',
    computed: {
        software_version() {
            return process.env.softwareVersion
        },
        old_release_link() {
            return process.env.oldReleaseUrl
        },
        download_link() {
            return process.env.downloadLatestReleaseLink
        },
        windows_download_link() {
            return `${this.download_link}hajime-Setup-${this.software_version}.exe`
        },
        mac_download_link() {
            return `${this.download_link}hajime-${this.software_version}-mac.zip`
        },
        linux_download_link() {
            return `${this.download_link}hajime-${this.software_version}.dmg`
        },
    },
    methods: {
        trackEvent(label) {
            this.$ga.event('Download', 'Click', label)
        },
    }
}
</script>

<template>
    <div class="item row">
        <div class="col-12 col-md-4"></div>

        <div class="col-12 col-md-8">
            <div class="section-content scrollable">
                <div class="wrapper">
                    <h1>{{ $t("download.title") }}</h1>

                    <div class="alert alert-warning">
                        <i class="fas fa-exclamation-triangle"></i>
                        <i18n tag="span" path="download.warning">
                            <b>PRE-ALPHA</b>
                        </i18n>
                    </div>

                    <div class="row mt-4">
                        <div class="col-12 col-sm-3">
                            <a class="btn btn-outline-primary btn-round" @click="trackEvent('Windows')" :href="windows_download_link">
                                <i class="fab fa-windows" />
                                Windows
                            </a>
                        </div>
                        
                        <div class="col-12 col-sm-3">
                            <a class="btn btn-outline-primary btn-round" @click="trackEvent('MacOsx')" :href="mac_download_link">
                                <i class="fab fa-apple" />
                                Mac OSX
                            </a>
                        </div>

                        <div class="col-12 col-sm-3">
                            <a class="btn btn-outline-primary btn-round" @click="trackEvent('Linux')" :href="linux_download_link">
                                <i class="fab fa-linux" />
                                Linux
                            </a>
                        </div>
                    </div>

                    <div class="row mt-4">
                        <div class="col-12">
                            <a :href="old_release_link" target="_blank">
                                {{ $t("download.oldVersion") }}
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>