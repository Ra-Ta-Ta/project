<template>
    <div
        class="relative z-20 h-full bg-center bg-repeat bg-100 pointer-events-auto overflow-y-scroll bg-style"
        ref="bg"
    >
        <Header></Header>
        <Nuxt />
    </div>
</template>

<script>
export default {
    data() {
        return {};
    }
};
</script>

<style scoped>
.bg-style {
    background-image: url('https://uploads-ssl.webflow.com/57516ebd5650b01552cd9f03/5d30079985ef6117dc5b983d_Paper02.jpg');
    background-size: 300px;
}
</style>
