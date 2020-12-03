<template>
    <div
        class="w-full rounded-xl p-4 transform transition-all duration-150 ease-linear hover:scale-101 card-style"
        :class="bgClass"
    >
        <slot name="content"></slot>
    </div>
</template>
<script>
export default {};
</script>
<style scoped>
.card-style {
}
</style>
