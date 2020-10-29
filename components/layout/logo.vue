<template>
    <nuxt-link class="logo-style" to="/">
        <span
            class="block text-center uppercase leading-none font-style"
        >
            sugar
        </span>
        <span
            class="block text-center uppercase leading-none font-style"
        >
            t<span class="bg-left bg-no-repeat face-style"
                >&ensp;</span
            >ngue
        </span>
    </nuxt-link>
</template>
<script>
export default {
    data() {
        return {
            face: {
                src: require("~/assets/images/bg/face.svg"),
                alt: "face",
            },
        };
    },
};
</script>
<style scoped>
.font-style {
    font-family: "Cabin Sketch";
    font-size: 26px;
    color: rgba(235, 206, 146, 1);
    letter-spacing: calc(26px * 0.5);
    text-indent: calc(26px * 0.5);
}
.face-style {
    background-image: url("~assets/images/bg/face.svg");
    background-size: 80% 80%;
    margin-right: calc(26px * 0.35);
}
</style>
