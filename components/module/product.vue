<template>
    <div
        class="relative w-full h-full border-4 border-oldLace rounded-xl transform-gpu transition-all duration-150 ease-linear overflow-hidden product-style"
    >
        <div
            class="absolute top-0 left-0 flex flex-col w-full h-full back-style"
        >
            <div
                class="h-20 bg-fieldDrab back-banner-style"
            ></div>
            <div
                class="h-full bg-100 bg-center back-main-style"
            ></div>
        </div>
        <div
            class="absolute top-0 left-0 w-full h-full transfrom rotate-180 front-style"
        ></div>
    </div>
</template>
<script>
export default {
    props: ["temp-product"],
};
</script>
<style lang="scss" scoped>
.product-style {
    max-height: 500px;
}
.front-style,
.back-style {
    backface-visibility: hidden;
}
.back-main-style {
    background-image: linear-gradient(
        135deg,
        rgba(227, 208, 169, 0.75) 0% 25%,
        rgba(88, 130, 128, 0.75) 25% 50%,
        rgba(218, 175, 70, 0.75) 50% 75%,
        rgba(179, 92, 47, 0.75) 75%
    );
}
</style>
