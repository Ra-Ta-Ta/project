<template>
    <div
        class="fixed w-full h-full bg-center bg-repeat bg-100 overflow-x-hidden overflow-y-scroll scrolling-touch lg:pl-50 bg-style"
    >
        <Header></Header>
        <Nav></Nav>
        <Sidebar></Sidebar>
        <Nuxt />
    </div>
</template>

<script>
export default {
    async asyncData({ $axios }) {
        const api =
            "http://172.20.10.2:8000/api/sugar-tongue/products";
        const data = await $axios.$get(api);
        console.log(data);
    },
    mounted() {
        const vm = this;
    },
};
</script>

<style scoped>
.bg-style {
    background-image: url("https://uploads-ssl.webflow.com/57516ebd5650b01552cd9f03/5d30079985ef6117dc5b983d_Paper02.jpg");
    background-size: 300px;
}
</style>
