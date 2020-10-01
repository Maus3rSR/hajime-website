<script>
export default {
    methods: {
        lerp(start, end, amt){
            return (1 - amt ) * start + amt * end
        },
        onEnter(e) {
            this.oldValues.offsetLeftContent = this.leftContent.offsetLeft
            this.oldValues.offsetRightContent = this.oldValues.offsetLeftContent
        },
        onMove(e) {
            const mouseRatio = (e.pageX - this.sectionContent.offsetLeft) / this.sectionContent.clientWidth
            console.log(this.sectionContent.clientWidth)

            this.leftContent.style.left = `${this.oldValues.offsetLeftContent + this.lerp(-this.oldValues.offsetLeftContent, this.oldValues.offsetLeftContent, 1 - mouseRatio)}px`
            this.rightContent.style.right = `${this.oldValues.offsetRightContent + this.lerp(-this.oldValues.offsetRightContent, this.oldValues.offsetRightContent, mouseRatio)}px`
        },
        onLeave() {
            this.leftContent.style.left = null
            this.rightContent.style.right = null
        }
    },
    data() {
        return {
            sectionContent: null,
            leftContent: null,
            rightContent: null,
            oldValues: {
                offsetLeftContent: null,
                offsetRightContent: null,
            }
        }
    },
    mounted() {
    }
}
</script>


<template>
    <section id="section__author" class="section section-description fp-auto-height-responsive" data-section="author">
        <div class="section-wrapper">
            <div class="section-title text-center">
                <h1 class="title-bg">{{ $t("author.index") }}</h1>
            </div>

            <div class="section-content">
                <div id="author-img--dev" class="author-img"></div>
                <div id="author-img--kendo" class="author-img"></div>
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

<style lang="scss" scoped>
.section {
    justify-content: flex-start;

    .section-content {
        height: 100vh;
        position: relative;

        .author-img {
            transition: all 1000ms ease;
            position: absolute;
            width: 0;
            top: 10vh;
            height: 60vh;
            overflow: hidden;

            &::after {
                content: "";
                display: block;
                position: absolute;
                width: 840px;
                height: 600px;
                background: url("~assets/images/sprite-author.png") 0 0 no-repeat;
                background-size: 100%;
            }

            &#author-img--dev {
                left: 10%;
                background-color: red;

                &::after {
                }
            }

            &#author-img--kendo {
                right: 10%;
                background-color: blue;

                &::after {
                    background-position: 0 -600px;
                }
            }
        }
    }

    &.active {
        .section-content {
           .author-img {
               width: 40%;
            }
        }
    }
}
</style>