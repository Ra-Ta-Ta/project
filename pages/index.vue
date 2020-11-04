<template>
    <main
        class="w-full m-auto pt-19 p-4 grid grid-cols-1 gap-4 main-style"
    >
        <Card :bg-class="'bg-100 header-style'">
            <template v-slot:content> </template>
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
    layouts: "default",
    data() {
        return {};
    },
    mounted() {
        const vm = this;
        vm.$nextTick(() => {
            vm.$nuxt.$loading.start();
            setTimeout(
                () => vm.$nuxt.$loading.finish(),
                500,
            );
        });
    },
};
</script>

<style scoped></style>
