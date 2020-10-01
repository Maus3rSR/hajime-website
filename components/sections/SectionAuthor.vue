<script>
export default {
    methods: {
        authorContentMove(e)
        {
            const mouseRatio = e.pageX - this.sectionContent.offsetLeft
console.log(mouseRatio)
            this.authorContentList.forEach(content => {
                

                // if (content.classList.contains("author__developer")) {
                //     content.style.width = `${840 - 840 * mouseRatio}px`
                //     content.style.left = `${100 + 260 - 520 * mouseRatio}px`
                // }
                // else if (content.classList.contains("author__kendo")) {
                //     content.style.width = `${840 - 840 * (1 - mouseRatio)}px`
                //     content.style.right = `${100 + 260 - 520 * (1 - mouseRatio)}px`
                // }
            })
        },
        authorContentLeave()
        {
            // this.authorContentList.forEach(content => {
            //     content.style.width = "420px"

            //     if (content.classList.contains("author__developer"))
            //         content.style.left = "100px"
            //     if (content.classList.contains("author__kendo"))
            //         content.style.right = "100px"
            // })
        }
    },
    data() {
        return {
            loop: null,
            sectionContent: null,
            authorContentList: [],
        }
    },
    mounted() {
        this.sectionContent = document.getElementById("section__author").getElementsByClassName('section-content')[0]
        this.authorContentList = [...document.getElementsByClassName("author__content")]

        this.sectionContent.addEventListener("mousemove", this.authorContentMove)
        this.sectionContent.addEventListener("mouseleave", this.authorContentLeave)
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
                <div class="author__content author__developer"></div>
                <div class="author__content author__kendo"></div>
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
        width: 1040px;
        margin: 0 auto;
        position: relative;

        .author__content {
            transition: all ease 1000ms;
            display: block;
            position: absolute;
            width: 0;
            height: 65vh;
            top: 10vh;
            z-index: 1;
            overflow: hidden;
            // background: url("~assets/images/sprite-author.png") 0 0 no-repeat;

            &.author__developer {
                left: 0;
                // background-position: 7vw -600px;
                background-color: blue;
            }

            &.author__kendo {
                right: 0;
                // background-position: -17vw 0px;
                background-color: red;
            }
        }
    }

    &.active {
        .section-content {
            > div {
                width: 50%;
            }
        }
    }
}
</style>