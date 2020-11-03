<template>
    <div
        class="w-full rounded-xl p-4 card-style"
        :class="bgClass"
    >
        <slot name="content"></slot>
    </div>
</template>
<script>
export default {
    props: ["bg-class"],
};
</script>
<style scoped>
.card-style {
}
</style>
