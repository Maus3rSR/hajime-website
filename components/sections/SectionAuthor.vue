<script>
export default {
    methods: {
        init() {

        }
    },
    mounted() {
        this.init()
    }
}
</script>


<template>
    <section class="section section-description fp-auto-height-responsive" data-section="author">
        <div class="section-wrapper">
            <div class="section-title text-center">
                <h1 class="title-bg">{{ $t("author.index") }}</h1>
            </div>

            <div class="section-content reduced">
                <div id="developer"></div>
                <div id="kendo"></div>
            </div>

            <footer class="section-footer scrolldown">
                <a class="down" @click="$emit('on-section-next')">
                    <span class="icon"></span>
                    <span class="txt">{{ $t("feature.index") }}</span>
                </a>
            </footer>
        </div>
    </section>
</template>