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
                                    <i class="icon fas fa-sitemap"></i>
                                </div>
                                <div class="media-body">
                                    <h2>Formule de compétition</h2>
                                    <p>
                                        Choisissez votre type de compétition : poule, arbre éliminatoire, ou les deux
                                        <span class="badge badge-warning">
                                            <i class="fas fa-exclamation-triangle"></i>
                                            Arbre éliminatoire en développement
                                        </span>
                                    </p>
                                </div>
                            </div>

                            <div class="media">
                                <div class="img d-flex mr-3">
                                    <i class="icon fas fa-users"></i>
                                </div>
                                <div class="media-body">
                                    <h2>Équipe</h2>
                                    <p>
                                        En plus du mode individuel, vous pouvez former des équipes avec un nombre de combattants fixe qui inclu également la gestion des remplaçants
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
                                    <h2>Import combattant</h2>
                                    <p>
                                        Importez massivement la liste des combattants en un clin d'oeil avec un simple fichier CSV
                                    </p>
                                </div>
                            </div>

                            <div class="media">
                                <div class="img d-flex mr-3">
                                    <i class="icon fas fa-language"></i>
                                </div>
                                <div class="media-body">
                                    <h2>Multilingue</h2>
                                    <p>
                                        <span class="flag-icon flag-icon-fr" /> et <span class="flag-icon flag-icon-gb" /> disponible.
                                        Si vous voulez aider à la traduction ou traduire dans votre langue, <a href="#contact">contactez-nous</a>
                                    </p>
                                </div>
                            </div>

                        </div>
                    </div>
                </div>
            </div>

            <div class="slide">
                Blabla
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