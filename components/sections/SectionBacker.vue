<script>
export default {}
</script>

<template>
    <section class="section fp-auto-height-responsive" data-section="backer">
        <div class="section-wrapper">
            <div class="section-title text-center">
                <h1 class="title-bg">{{ $t("backer.index") }}</h1>
            </div>

            <div class="section-content reduced anim text-center anim-2">
                <div class="title-desc anim-3 row">
                    
                    <div class="col-12 mb-4">
                        <h3>{{ $t("backer.special") }}</h3>
                    </div>

                    <div class="col">
                        <a href="https://lokalise.com/" target="_blank">
                            <img width="150" src="~assets/images/sponsors/lokalise.svg" alt="Lokalise">
                        </a>
                        <p>{{ $t("backer.description.lokalise") }}</p>
                    </div>
                </div>
            </div>
        </div>
    </section>
</template>