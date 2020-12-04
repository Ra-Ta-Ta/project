<template>
    <div
        class="rounded-xl p-4 transform transition-all duration-150 ease-linear hover:scale-101 product-style"
    >
        <slot name="content"></slot>
    </div>
</template>
<script>
export default {
    props: [product],
};
</script>
<style scoped>
.product-style {
}
</style>
