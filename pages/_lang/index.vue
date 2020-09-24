<script>
export default {
    head: {
        title: "Hajime - Kendo competition software management",
        meta: [
            { charset: "utf-8" },
            { name: "viewport", content: "width=device-width, initial-scale=1" },
            {
                hid: "description",
                name: "description",
                content: "Hajime is a software to help organizers to speed up Kendo competition management and focus to what is really matters: the Kendo event",
            },
        ],
        link: [{ rel: "icon", type: "image/x-icon", href: "/favicon.ico" }],
    },
    data() {
        return {
            options: {
                licenseKey: "800D1B93-C2C74D36-8E0392D6-8365BDFF",
                menu: '#qmenu',
                navigation: true,
				responsiveWidth: 601,
                responsiveHeight: 480,
                anchors: pageAnchors,
            }
        }
    }
}
</script>

<template>
    <full-page ref="fullpage" :options="options" id="fullpage">
        
        <section class="section section-home fullscreen-md fp-auto-height-responsive " data-section="home">
            <!-- Begin of section wrapper -->
            <div class="section-wrapper">

                <!-- content -->
                <div class="section-content anim">
                    <!-- title and description -->
                    <div class="title-desc">
                        <h2 class="display-4 display-title">Simpleux is my
                            <br>
                            <strong>Portfolio</strong>
                        </h2>
                        <h4>A Bootstrap 4 based portfolio template, ready for modern and beautiful websites easily.</h4>
                    </div>

                    <!-- Action button -->
                    <div class="btns-action">
                        <a class="btn btn-outline-white btn-round" href="#services">
                            Get started
                        </a>
                    </div>
                </div>

                <!-- Arrows scroll down/up -->
                <footer class="section-footer scrolldown">
                    <a class="down">
                        <span class="icon"></span>
                        <span class="txt">Scroll Down</span>
                    </a>
                </footer>
            </div>
            <!-- End of section wrapper -->
        </section>

        <section class="section section-description fp-auto-height-responsive " data-section="about">
            <!-- Begin of section wrapper -->
            <div class="section-wrapper">
                <!-- title -->
                <div class="section-title text-center">
                    <h5 class="title-bg">About</h5>
                    <h2 class="display-4 display-title">Modern Website for your business</h2>
                </div>

                <!-- content -->
                <div class="section-content reduced anim text-center">
                    <!-- title and description -->
                    <div class="title-desc">
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris aliquet malesuada feugiat. Curabitur fermentum
                            bibendum nulla, non dictum ipsum tincidunt non. Quisque convallis pharetra tempor. Donec id pretium leo.
                            Pellentesque luctus massa non elit viverra pellentesque. Cras vitae neque molestie, rhoncus ipsum sit
                            amet, lobortis dui. Fusce in urna sem.</p>
                    </div>

                </div>

                <!-- Arrows scroll down/up -->
                <footer class="section-footer scrolldown">
                    <a class="down">
                        <span class="icon"></span>
                        <span class="txt">Our Services</span>
                    </a>
                </footer>
            </div>
            <!-- End of section wrapper -->
        </section>

    </full-page>
</template>