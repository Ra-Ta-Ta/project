<template>
    <div
        class="fixed w-full h-full bg-center bg-repeat bg-100 overflow-x-hidden overflow-y-scroll scrolling-touch p-4 bg-custom-green bg-style"
    >
        <div
            class="min-h-full border-3 border-custom-white rounded-lg mx-auto container-style"
        >
            <Header> </Header>
            <Nuxt />
        </div>
    </div>
</template>

<script>
export default {
    mounted() {
        const vm = this;
        vm.$nextTick(() => {
            vm.$nuxt.$loading.start();
            setTimeout(
                () => vm.$nuxt.$loading.finish(),
                2000,
            );
        });
    },
};
</script>

<style lang="scss" scoped>
$pri-color: rgba(72, 160, 201, 0.5);
$sec-color: rgba(231, 232, 203, 0.5);
$bg-img: url("~assets/images/bg/new-bg.jpg");
.bg-style {
    background-image: linear-gradient(
            90deg,
            $pri-color 25%,
            $sec-color 0,
            $sec-color 50%,
            $pri-color 0,
            $pri-color 75%,
            $sec-color 0,
            $sec-color
        ),
        $bg-img;
    background-size: 120px 120px;
}
.container-style {
    background-image: $bg-img;
    background-size: 250px;
    max-width: 980px;
}
</style>
