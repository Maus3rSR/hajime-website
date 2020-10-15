<script>
export default {
    computed: {
        github_url() {
            return process.env.githubUrl
        }
    },
    mounted() {
    }
}
</script>

<template>
    <kinesis-container tag="section" class="section section-home fullscreen-md fp-auto-height-responsive" data-section="home">
        <div class="section-wrapper">

            <kinesis-element class="kinesis-element" :strength="2">
                <img src="~assets/images/ornment_left.png" class="img ornment ornment--left">
            </kinesis-element>

            <kinesis-element class="kinesis-element" :strength="-2">
                <img src="~assets/images/ornment_right.png" class="img ornment ornment--right">
            </kinesis-element>

            <kinesis-element class="kinesis-element" :strength="-7">
                <img src="~assets/images/kenshi_left.png" class="img kenshi kenshi--left">
            </kinesis-element>

            <kinesis-element class="kinesis-element" :strength="7">
                <img src="~assets/images/kenshi_right.png" class="img kenshi kenshi--right">
            </kinesis-element>

            <div class="section-title text-center">
                <h1 class="title-bg">
                    Hajime
                </h1>
            </div>

            <div class="section-content anim">
                <div class="title-desc">
                    <h2 class="display-4 display-title anim-1">
                        Hajime
                        <span class="badge badge-warning">pre-alpha</span>
                    </h2>
                    <h3 class="anim-2">
                        {{ $t("home.subtitle") }}
                    </h3>
                </div>

                <div class="btns-action">
                    <NuxtLink :to="$i18n.path('download')" class="btn btn-white btn-round btn-full" exact>
                        {{ $t("home.download") }} <br/>
                        <i class="fab fa-windows" />
                        <i class="fab fa-apple" />
                        <i class="fab fa-linux" />
                    </NuxtLink>
                </div>

                <div class="btns-action">
                    <a :href="github_url" target="_blank">
                        {{ $t("home.view") }}
                    </a>
                </div>
                <div class="btns-action">
                    <a href="/fr">
                        <span class="flag-icon flag-icon-fr" />
                    </a>
                    <a href="/">
                        <span class="flag-icon flag-icon-gb" />
                    </a>
                </div>
            </div>

            <footer class="section-footer scrolldown">
                <a class="down" @click="$emit('on-section-next')">
                    <span class="icon"></span>
                    <span class="txt">Scroll</span>
                </a>
            </footer>
        </div>
    </kinesis-container>
</template>

<style lang="scss" scoped>
$offsetMarginTop: -15vh;
$offsetInitial: -200%;
$kenshiOffset: -15%;
$ornmentOffset: 0;

.kinesis-element {
    position: relative;
    z-index: -1;
}

.section {
    .kenshi {
        transition: all ease-out 1000ms;
        position: absolute;
        width: 50vw;
        height: auto;
        margin-top: $offsetMarginTop;

        &.kenshi--left {
            left: $offsetInitial;
        }

        &.kenshi--right {
            right: $offsetInitial;
        }
    }
    
    .ornment {
        transition: all ease 2000ms;
        position: absolute;
        width: 20vw;
        height: auto;
        margin-top: $offsetMarginTop;
        opacity: 0;

        &.ornment--left {
            left: $ornmentOffset;
        }

        &.ornment--right {
            right: $ornmentOffset;
        }
    }

    &.active {
        .kenshi {
            &.kenshi--left {
                left: $kenshiOffset;
            }

            &.kenshi--right {
                right: $kenshiOffset;
            }
        }

        .ornment {
            opacity: 100%;
        }
    }

    @media (max-width: 1045px) {
        $kenshiOffset: 0;
        $ornmentOffset: 15%;

        .ornment {
            &.ornment--left {
                left: $ornmentOffset;
            }

            &.ornment--right {
                right: $ornmentOffset;
            }
        }

        &.active {
            .kenshi {
                &.kenshi--left {
                    left: $kenshiOffset;
                }

                &.kenshi--right {
                    right: $kenshiOffset;
                }
            }
        }
    }

    @media (min-width: 1400px) and (max-width: 1599px) {
        $kenshiOffset: -30%;
        $ornmentOffset: -15%;

        .ornment {
            &.ornment--left {
                left: $ornmentOffset;
            }

            &.ornment--right {
                right: $ornmentOffset;
            }
        }

        &.active {
            .kenshi {
                &.kenshi--left {
                    left: $kenshiOffset;
                }

                &.kenshi--right {
                    right: $kenshiOffset;
                }
            }
        }
    }

    @media (min-width: 2100px) {
        $kenshiOffset: -30%;
        $ornmentOffset: -15%;

        .ornment {
            &.ornment--left {
                left: $ornmentOffset;
            }

            &.ornment--right {
                right: $ornmentOffset;
            }
        }

        &.active {
            .kenshi {
                &.kenshi--left {
                    left: $kenshiOffset;
                }

                &.kenshi--right {
                    right: $kenshiOffset;
                }
            }
        }
    }
}
</style>