<template>
    <main
        class="relative w-full min-h-full grid gap-4 p-4 m-auto main-style"
    >
        <slot name="content"></slot>
    </main>
</template>
<script>
export default {};
</script>
<style scoped>
.main-style {
    /* max-width: 980px; */
}
</style>
