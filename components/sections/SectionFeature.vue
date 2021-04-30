<template>
    <section id="section-feature" class="section fp-auto-height-responsive" data-section="feature">
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
                                    <i class="icon fas fa-sitemap"></i>
                                </div>
                                <div class="media-body">
                                    <h2>{{ $t("feature.competitionFormula.title") }}</h2>
                                    <p>
                                        {{ $t("feature.competitionFormula.description") }}
                                        <span class="badge badge-warning">
                                            <i class="fas fa-exclamation-triangle"></i>
                                            {{ $t("feature.alert.tree") }}
                                        </span>
                                    </p>
                                </div>
                            </div>

                            <div class="media">
                                <div class="img d-flex mr-3">
                                    <i class="icon fas fa-users"></i>
                                </div>
                                <div class="media-body">
                                    <h2>{{ $t("feature.team.title") }}</h2>
                                    <p>
                                        {{ $t("feature.team.description") }}
                                    </p>
                                </div>
                            </div>

                        </div>
                    </div>

                    <div class="col-12 col-md-6 col-lg-6">
                        <div class="section-content">

                            <div class="media">
                                <div class="img d-flex mr-3">
                                    <i class="icon fas fa-file-csv"></i>
                                </div>
                                <div class="media-body">
                                    <h2>{{ $t("feature.fighterImport.title") }}</h2>
                                    <p>
                                        {{ $t("feature.fighterImport.description") }}
                                    </p>
                                </div>
                            </div>

                            <div class="media">
                                <div class="img d-flex mr-3">
                                    <i class="icon fas fa-language"></i>
                                </div>
                                <div class="media-body">
                                    <h2>{{ $t("feature.i18n.title") }}</h2>
                                    <i18n tag="p" path="feature.i18n.description">
                                        <span class="flag-icon flag-icon-fr" />
                                        <span class="flag-icon flag-icon-gb" />
                                        <span class="flag-icon flag-icon-it" />
                                        <a href="#contact" class="btn btn-white btn-sm btn-round">{{ $t("contact.us") }}</a>
                                    </i18n>

                                    <p>
                                        {{ $t("feature.i18n.lokalise") }}
                                        <a href="https://lokalise.com/" target="_blank">
                                            <img width="150" src="~assets/images/sponsors/lokalise.svg" alt="Lokalise">
                                        </a>
                                    </p>
                                </div>
                            </div>

                        </div>
                    </div>
                </div>
            </div>

            <div class="slide">
                <div class="item row justify-content-between">

                    <div class="col-12 col-md-6 col-lg-6">
                        <div class="section-content">

                            <div class="media">
                                <div class="img d-flex mr-3">
                                    <i class="icon fas fa-tv"></i>
                                </div>
                                <div class="media-body">
                                    <h2>{{ $t("feature.scoreBoard.title") }}</h2>
                                    <p>
                                        {{ $t("feature.scoreBoard.description") }}
                                        <span class="badge badge-warning">
                                            <i class="fas fa-exclamation-triangle"></i>
                                            {{ $t("alert.development") }}
                                        </span>
                                    </p>
                                </div>
                            </div>

                            <div class="media">
                                <div class="img d-flex mr-3">
                                    <i class="icon fas fa-random"></i>
                                </div>
                                <div class="media-body">
                                    <h2>{{ $t("feature.draw.title") }}</h2>
                                    <p>
                                        {{ $t("feature.draw.description") }}
                                    </p>
                                </div>
                            </div>

                        </div>
                    </div>

                    <div class="col-12 col-md-6 col-lg-6">
                        <div class="section-content">

                            <div class="media">
                                <div class="img d-flex mr-3">
                                    <i class="icon fas fa-file-pdf"></i>
                                </div>
                                <div class="media-body">
                                    <h2>{{ $t("feature.pdf.title") }}</h2>
                                    <p>
                                        {{ $t("feature.pdf.description") }}
                                        <span class="badge badge-warning">
                                            <i class="fas fa-exclamation-triangle"></i>
                                            {{ $t("feature.alert.pool") }}
                                        </span>
                                    </p>
                                </div>
                            </div>

                            <div class="media">
                                <div class="img d-flex mr-3">
                                    <i class="icon fas fa-vector-square"></i>
                                </div>
                                <div class="media-body">
                                    <h2>{{ $t("feature.multiShiaijo.title") }}</h2>
                                    <p>
                                        {{ $t("feature.multiShiaijo.description") }}
                                        <span class="badge badge-warning">
                                            <i class="fas fa-exclamation-triangle"></i>
                                            {{ $t("alert.development") }}
                                        </span>
                                    </p>
                                </div>
                            </div>

                        </div>
                    </div>
                </div>
            </div>

            <div class="slide">
                <div class="item row justify-content-between">

                    <div class="col-12 col-md-6 col-lg-6">
                        <div class="section-content">

                            <div class="media">
                                <div class="img d-flex mr-3">
                                    <i class="icon fas fa-wifi"></i>
                                </div>
                                <div class="media-body">
                                    <h2>{{ $t("feature.noInternet.title") }}</h2>
                                    <p>
                                        {{ $t("feature.noInternet.description") }}
                                    </p>
                                </div>
                            </div>

                        </div>
                    </div>

                    <div class="col-12 col-md-6 col-lg-6">
                        <div class="section-content">

                            <div class="media">
                                <div class="img d-flex mr-3">
                                    <i class="icon far fa-chart-bar"></i>
                                </div>
                                <div class="media-body">
                                    <h2>{{ $t("feature.statistic.title") }}</h2>
                                    <p>
                                        {{ $t("feature.statistic.description") }}
                                        <span class="badge badge-warning">
                                            <i class="fas fa-exclamation-triangle"></i>
                                            {{ $t("alert.development") }}
                                        </span>
                                    </p>
                                </div>
                            </div>

                        </div>
                    </div>
                </div>
            </div>

        </div>
    </section>
</template>

<style lang="scss" scoped>
.media{
    .icon{
        font-size: 4rem;
        width: 1.3em;
    }
}
</style>

<style>
#section-feature .fp-controlArrow {
    display: none;
}
</style>