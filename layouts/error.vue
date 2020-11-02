<template>
    <div
        class="relative h-screen bg-center bg-repeat bg-100 overflow-x-hidden overflow-y-scroll scrolling-touch lg:pl-50 bg-style"
    >
        <Error404
            v-if="error.statusCode === 404"
        ></Error404>
        <Error500 v-else></Error500>
    </div>
</template>

<script>
export default {
    layouts: "error",
    props: ["error"],
};
</script>

<style lang="scss" scoped>
.bg-style {
    height: calc(var(--vh, 1vh) * 100);
    background-image: url("https://uploads-ssl.webflow.com/57516ebd5650b01552cd9f03/5d30079985ef6117dc5b983d_Paper02.jpg");
    background-size: 300px;
}
</style>
