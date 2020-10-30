<script>
export default {
    layout: 'post',
    computed: {
        software_version() {
            return process.env.softwareVersion
        },
        release_link() {
            return process.env.releaseUrl
        },
        latest_release_api_url() {
            return process.env.latestReleaseApiUrl
        }
    },
    methods: {
        trackEvent(label) {
            this.$ga.event('Download', 'Click', label)
        },
    },
    data() {
        return {
            releaseMap: {
                "windows_download_link": ".exe",
                "mac_download_link": ".dmg",
                "linux_download_link": ".AppImage",
            },
            windows_download_link: null,
            mac_download_link: null,
            linux_download_link: null,
        }
    },
    async mounted() {
        const latest_release = (await this.$axios.get(this.latest_release_api_url)).data
        
        latest_release.assets.forEach(asset => {
            for (let os_link in this.releaseMap) {
                if (this[os_link] !== null) continue
                if (!asset.name.includes(this.releaseMap[os_link])) continue
                    
                this[os_link] = asset.browser_download_url
                break
            }
        })
    }
}
</script>

<template>
    <div class="item row">
        <div class="col-12 col-md-4"></div>

        <div class="col-12 col-md-8">
            <div class="section-content scrollable">
                <div class="wrapper">
                    <h1>
                        {{ $t("download.title") }}
                        ({{ software_version }})
                    </h1>

                    <div class="alert alert-warning">
                        <i class="fas fa-exclamation-triangle"></i>
                        <i18n tag="span" path="download.warning">
                            <b>PRE-ALPHA</b>
                        </i18n>
                    </div>

                    <div class="alert alert-warning">
                        <i class="fas fa-exclamation-triangle"></i>
                        {{ $t("download.warning2") }}
                    </div>

                    <div class="row mt-4">
                        <div class="col-12 col-sm-3">
                            <a v-if="windows_download_link !== null" class="btn btn-outline-primary btn-round" @click="trackEvent('Windows')" :href="windows_download_link">
                                <i class="fab fa-windows" />
                                Windows
                            </a>
                        </div>
                        
                        <div class="col-12 col-sm-3">
                            <a v-if="mac_download_link !== null" class="btn btn-outline-primary btn-round" @click="trackEvent('MacOsx')" :href="mac_download_link">
                                <i class="fab fa-apple" />
                                Mac OSX
                            </a>
                        </div>

                        <div class="col-12 col-sm-3">
                            <a v-if="linux_download_link !== null" class="btn btn-outline-primary btn-round" @click="trackEvent('Linux')" :href="linux_download_link">
                                <i class="fab fa-linux" />
                                Linux
                            </a>
                        </div>
                    </div>

                    <div class="row mt-4">
                        <div class="col-12">
                            <a :href="release_link" target="_blank">
                                {{ $t("download.oldVersion") }}
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>