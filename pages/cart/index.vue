<template>
    <main
        class="w-full m-auto p-4 grid grid-cols-1 gap-4 main-style"
    ></main>
</template>

<script>
export default {
    layouts: "default",
    middleware: "authenticated",
};
</script>

<style scoped>
.main-style {
    padding-top: 60px;
}
</style>
