<script>
export default {
    methods: {
        pageLoad() {
            document.getElementById("page-loader").classList.add("p-hidden")
            document.body.classList.add("loaded")
        }
    },
    mounted() {
        window.onload = this.pageLoad

        if (document.readyState === "complete")
            this.pageLoad()
    }
}
</script>

<template>
    <div class="page-loader" id="page-loader">
        <div>
            <img width="150px" src="~assets/images/logo_red.png">
        </div>
    </div>
</template>

<style lang="scss" scoped>
.page-loader {
    background: #25263A;
}
</style>

<style lang="scss">
body {
    overflow: hidden;

    &.loaded {
        overflow: auto;
    }
}
</style>