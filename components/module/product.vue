<template>
    <div
        class="rounded-xl p-4 transform transition-all duration-150 ease-linear product-style"
    >
        <div class="front">A</div>
        <div class="back">B</div>
    </div>
</template>
<script>
export default {
    props: ["temp-product"],
};
</script>
<style scoped>
.product-style {
}
</style>
