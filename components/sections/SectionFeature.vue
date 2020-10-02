<template>
    <section id="section-feature" class="section section-description fp-auto-height-responsive" data-section="feature">
        <div class="section-title text-center">
            <h1 class="title-bg">{{ $t("feature.index") }}</h1>
        </div>
        
        <div class="section-wrapper">

            <div class="slide">
                <div class="item row justify-content-between">

                    <div class="col-12 col-md-6 col-lg-6">
                        <div class="section-content">

                            <div class="media">
                                <div class="img d-flex mr-3">
                                    <i class="icon ion-ios-grid-view-outline"></i>
                                </div>
                                <div class="media-body">
                                    <h2>Concept</h2>
                                    <p>
                                        Nulla vel metus scelerisque ante sollicitudin. Cras purus odio,
                                        vestibulum in vulputate at.
                                    </p>
                                </div>
                            </div>

                            <div class="media">
                                <div class="img d-flex mr-3">
                                    <i class="icon ion-ios-grid-view-outline"></i>
                                </div>
                                <div class="media-body">
                                    <h2>Concept</h2>
                                    <p>
                                        Nulla vel metus scelerisque ante sollicitudin. Cras purus odio,
                                        vestibulum in vulputate at.
                                    </p>
                                </div>
                            </div>

                        </div>
                    </div>

                    <div class="col-12 col-md-6 col-lg-6">
                        <div class="section-content">

                            <div class="media">
                                <div class="img d-flex mr-3">
                                    <i class="icon ion-ios-grid-view-outline"></i>
                                </div>
                                <div class="media-body">
                                    <h2>Concept</h2>
                                    <p>
                                        Nulla vel metus scelerisque ante sollicitudin. Cras purus odio,
                                        vestibulum in vulputate at.
                                    </p>
                                </div>
                            </div>

                            <div class="media">
                                <div class="img d-flex mr-3">
                                    <i class="icon ion-ios-grid-view-outline"></i>
                                </div>
                                <div class="media-body">
                                    <h2>Concept</h2>
                                    <p>
                                        Nulla vel metus scelerisque ante sollicitudin. Cras purus odio,
                                        vestibulum in vulputate at.
                                    </p>
                                </div>
                            </div>

                        </div>
                    </div>
                </div>
            </div>

            <div class="slide">

            </div>

        </div>

        <footer class="section-footer scrolldown">
            <a class="down" @click="$emit('on-section-next')">
                <span class="icon"></span>
                <span class="txt">{{ $t("support.index") }}</span>
            </a>
        </footer>
    </section>
</template>

<style>
#section-feature .fp-controlArrow {
    display: none;
}
</style>