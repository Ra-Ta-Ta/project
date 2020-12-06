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
    // &:hover {
    //     box-shadow: 0 0 1em rgba(0, 0, 0, 0.2);
    //     transform: perspective(200px) rotateY(-30deg);
    //     filter: brightness(1.1);
    // }
    &:hover,
    &:active {
        background-image: linear-gradient(
            90deg,
            #00c0ff 0%,
            #ffcf00 49%,
            #fc4f4f 80%,
            #00c0ff 100%
        );
        animation: slidebg 5s linear infinite;
    }
    @keyframes slidebg {
        to {
            background-position: 20vw;
        }
    }
}
</style>
