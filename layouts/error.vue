<template>
    <div
        class="relative w-full h-full bg-center bg-repeat bg-100 overflow-x-hidden overflow-y-scroll scrolling-touch lg:pl-50 bg-style"
    >
        <h1 v-if="error.statusCode === 404">
            Page not found
        </h1>
        <h1 v-else>An error occurred</h1>
        <nuxt-link to="/">Home page</nuxt-link>
    </div>
</template>

<script>
export default {
    layouts: "error",
    props: ["error"],
};
</script>

<style scoped>
.bg-style {
    background-image: url("https://uploads-ssl.webflow.com/57516ebd5650b01552cd9f03/5d30079985ef6117dc5b983d_Paper02.jpg");
    background-size: 300px;
}
</style>
