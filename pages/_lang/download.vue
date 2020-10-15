<script>
export default {
    layout: 'post'
}
</script>

<template>
    <div class="item row">
        <div class="col-12 col-md-4"></div>

        <div class="col-12 col-md-8">
            <div class="section-content scrollable">

                <article class="article article-light">
                    <div class="article-content">
                        <div class="wrapper">
                            <h1>{{ $t("download.title") }}</h1>

                            <div class="alert alert-warning">
                                <i class="fas fa-exclamation-triangle"></i>
                                <i18n tag="span" path="download.warning">
                                    <b>PRE-ALPHA</b>
                                </i18n>
                            </div>

                            <h2>Windows</h2>

                            <div class="item row mt-4">
                                <div class="col-12 col-sm-3">
                                    <div class="section-content">
                                        <a class="btn btn-outline-primary btn-round" href="#link">
                                            <i class="fab fa-windows" />
                                            32 Bits
                                        </a>
                                    </div>
                                </div>

                                <div class="col-12 col-sm-3">
                                    <div class="section-content">
                                        <a class="btn btn-outline-primary btn-round" href="#link">
                                            <i class="fab fa-windows" />
                                            64 Bits
                                        </a>
                                    </div>
                                </div>
                            </div>

                            <h2>Mac</h2>

                            <div class="item row mt-4">
                                <div class="col-12 col-sm-3">
                                    <div class="section-content">
                                        <a class="btn btn-outline-primary btn-round" href="#link">
                                            <i class="fab fa-apple" />
                                            Mac OSX
                                        </a>
                                    </div>
                                </div>
                            </div>

                            <h2>Linux</h2>

                            <div class="item row mt-4">
                                <div class="col-12 col-sm-3">
                                    <div class="section-content">
                                        <a class="btn btn-outline-primary btn-round" href="#link">
                                            <i class="fab fa-linux" />
                                            Linux
                                        </a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </article>
            </div>
        </div>
    </div>
</template>