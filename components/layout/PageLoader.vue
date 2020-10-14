<script>
export default {
    methods: {
        pageLoad() {
            document.getElementById("page-loader").classList.add("p-hidden")
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
            <img width="80px" src="~assets/images/logo.png">
        </div>
    </div>
</template>

<style lang="scss" scoped>
.page-loader {
    background: black;
}
</style>