<template>
    <button
        class="tracking-widest rounded-lg transform-all duration-150 ease-linear px-2 sm:px-4 py-1 sm:py-2 button-style"
    ></button>
</template>
<script>
export default {};
</script>
<style lang="scss" scoped>
.button-style {
    &:hover,
    &:active {
        filter: brightness(1.25);
        animation: jelly 0.5s;
    }
    @keyframes jelly {
        25% {
            transform: scale(0.9, 1.1);
        }

        50% {
            transform: scale(1.1, 0.9);
        }

        75% {
            transform: scale(0.95, 1.05);
        }
    }
}
</style>
