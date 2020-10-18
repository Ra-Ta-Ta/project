<template>
    <main class="w-full m-auto p-4 grid grid-cols-1 gap-4 main-style">
        <Card :bg-class="'h-screen bg-100 header-style'">
            <template v-slot:content>
                <Book></Book>
            </template>
        </Card>
        <Footer></Footer>
        <Footer></Footer>
        <Footer></Footer>
        <Footer></Footer>
        <Footer></Footer>
        <Footer></Footer>
        <Footer></Footer>
        <Footer></Footer>
        <Footer></Footer>
        <Footer></Footer>
        <Footer></Footer>
    </main>
</template>

<script>
export default {
    layouts: 'default',
    data() {
        return {};
    },
    mounted() {
        const vm = this;
        vm.$nextTick(() => {
            vm.$nuxt.$loading.start();
            setTimeout(() => vm.$nuxt.$loading.finish(), 500);
        });
    }
};
</script>

<style lang="scss" scoped>
.main-style {
    max-width: 980px;
    padding-top: 60px;
}
.header-style {
    background-image: url('~assets/images/component/library.jpg');
    max-height: calc(980px * 10 / 16);
    perspective: 100vw;
    perspective-origin: bottom;
}
</style>
