<template>
    <nuxt-link class="logo-style" to="/">
        <div
            class="text-center uppercase leading-none font-style"
        >
            sugar
        </div>
        <div
            class="text-center uppercase leading-none"
            style="font-size: 0"
        >
            <span
                class="inline-block font-style"
                style="letter-spacing: 0"
                >t</span
            >
            <span
                class="inline-block bg-no-repeat font-style face-style"
                >o</span
            >
            <span
                class="inline-block font-style"
                style="text-indent: 0"
                >ngue</span
            >
        </div>
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
.logo-style {
    width: max-content;
}
.font-style {
    font-family: "Cabin Sketch";
    font-size: 26px;
    color: rgba(235, 206, 146, 1);
    letter-spacing: 0.5em;
    text-indent: 0.5em;
}
.face-style {
    background-image: url("~assets//images/bg/face.svg");
    background-size: 20px 20px;
    background-position: 50% 35%;
    color: transparent;
}
</style>
