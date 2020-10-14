<script>
export default {
    layout: 'post'
}
</script>

<template>
    <div class="section section-twoside fp-auto-height-responsive bg-black" data-section="item-alpha">
        <div class="section-cover-tier mask-black">
            <div class="cover-content">
                <div class="title-desc">
                    <h2 class="display-4 display-title">Simplicity</h2>
                    <p>A Bootstrap 4 based UI kit framework. Use it to build modern and beautiful websites easily.</p>
                </div>
            </div>
        </div>
        <!-- Begin of section wrapper -->
        <div class="section-wrapper largewidth">

            <!-- text or illustration order are manipulated via Bootstrap order-md-1, order-md-2 class -->


            <!-- begin of item -->
            <div class="item row">
                <!-- margi reservation -->
                <div class="col-12 col-md-4">
                </div>

                <!-- begin of text content -->
                <div class="col-12 col-md-8 center-vh">
                    <!-- content -->
                    <div class="section-content anim scrollable">

                        <article class="article article-light">
                            <div class="article-content">
                                <div class="wrapper">
                                    <h2>Introduction to UI Design</h2>
                                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris aliquet malesuada feugiat.
                                        Curabitur fermentum bibendum nulla, non dictum ipsum tincidunt non. Quisque convallis
                                        pharetra tempor. Donec id pretium leo. Pellentesque luctus massa non elit viverra pellentesque.
                                        Cras vitae neque molestie, rhoncus ipsum sit amet, lobortis dui. Fusce in urna sem. Vivamus
                                        vehicula dignissim augue et scelerisque. Etiam quam nisi, molestie ac dolor in, tincidunt
                                        tincidunt arcu. Praesent sed justo finibus, fringilla velit quis, porta erat. Donec blandit
                                        metus ut arcu iaculis iaculis.</p>
                                    <!-- begin of illustation -->
                                    <div class="item row justify-content-between mt-4">
                                        <!-- img-frame-normal demo -->
                                        <div class="col-12 col-md-6 center-vh">
                                            <div class="section-content anim">
                                                <div class="images text-center">
                                                    <div class="img-frame-normal">
                                                        <div class="legend text-left">
                                                            <h5>Computer Desktop</h5>
                                                            <p class="small">Art / Programing</p>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>

                                        <!-- img-frame-normal demo, portrait orientation -->
                                        <div class="col-12 col-md-6 col-lg-5 center-vh">
                                            <div class="section-content anim">
                                                <div class="images text-center">
                                                    <div class="img-frame-normal frame-small portrait">
                                                        <div class="legend text-right">
                                                            <h5>Computer Desktop</h5>
                                                            <p class="small">Art / Programing</p>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>

                                    </div>
                                    <!-- end of illustation -->

                                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris aliquet malesuada feugiat.
                                        Curabitur fermentum bibendum nulla, non dictum ipsum tincidunt non. Quisque convallis
                                        pharetra tempor. Donec id pretium leo. Pellentesque luctus massa non elit viverra pellentesque.
                                        Cras vitae neque molestie, rhoncus ipsum sit amet, lobortis dui. Fusce in urna sem.
                                    </p>

                                </div>
                            </div>
                        </article>

                        <!-- Action button -->
                        <div class="btns-action mt-4">
                            <a class="btn btn-outline-primary btn-round" href="#link">
                                Download
                            </a>
                            <a class="btn btn-transp-arrow btn-outline btn-primary btn-round" href="item.html">
                                <span class="icon arrow-right"></span>
                                <span class="text">Next</span>
                            </a>
                        </div>
                    </div>
                </div>
                <!-- end of text content -->
            </div>
            <!-- end of item -->

        </div>
        <!-- End of section wrapper -->
    </div>
</template>

<style lang="scss" scoped>
.section-cover-tier {
    background: url('~assets/images/bg-kendo.jpg');
    background-size: cover;
    background-position: center;
}
</style>