<template>
    <div
        class="fixed top-0 bottom-0 left-0 right-0 w-full h-full text-center text-xl loading-style"
        :class="{ hidden: !loading }"
    >
        <div
            v-for="line in lines"
            :key="line"
            class=""
        ></div>
    </div>
</template>

<script>
export default {
    data: () => ({
        loading: false,
        lines: 6,
    }),
    methods: {
        start() {
            const vm = this;
            vm.loading = true;
        },
        finish() {
            const vm = this;
            vm.loading = false;
        },
    },
};
</script>

<style scoped>
.loading-style {
    background: rgba(0, 0, 0, 0.5);
    z-index: 9999;
}
</style>
