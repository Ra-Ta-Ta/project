<template>
    <div
        class="relative w-full rounded-xl p-4 transform transition-all duration-150 ease-linear product-style"
    >
        <div class="front-style"></div>
        <div class="bg-oldLace back-style"></div>
    </div>
</template>
<script>
export default {
    props: ["temp-product"],
};
</script>
<style scoped>
.product-style {
    max-width: 37rem;
    max-height: 47rem;
}
</style>
