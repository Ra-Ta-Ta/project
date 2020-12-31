<template>
    <main
        class="relative w-full min-h-full grid gap-4 pt-19 p-4 m-auto overflow-x-hidden overflow-y-auto main-style"
    >
        <slot name="content"></slot>
    </main>
</template>
<script>
export default {};
</script>
<style scoped>
.main-style {
    max-width: 1440px;
}
</style>
