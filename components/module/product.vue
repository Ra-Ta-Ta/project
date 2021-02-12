<template>
    <div
        class="relative w-full border-8 border-custom-white rounded-xl transform-gpu transition-all duration-150 ease-linear overflow-hidden product-style"
    >
        <div
            class="absolute top-0 left-0 flex flex-col w-full h-full back-style"
        >
            <div
                class="relative h-full bg-100 bg-center overflow-hidden back-main-style"
            >
                <img
                    :src="tempProduct.imageUrl"
                    class=""
                    alt=""
                />
            </div>
            <div
                class="h-3/5 bg-custom-white py-2 back-banner-style"
            >
                <div
                    class="text-darkBrown uppercase title-stlye"
                    v-text="tempProduct.title"
                ></div>
                <div class="price-stlye">
                    <span
                        v-text="
                            $currency(
                                tempProduct.origin_price,
                            )
                        "
                    ></span>
                    <span
                        v-text="
                            $currency(tempProduct.price)
                        "
                    ></span>
                </div>
            </div>
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
    &:before {
        content: "";
        display: block;
        padding-bottom: 133%;
    }
}
.front-style,
.back-style {
    backface-visibility: hidden;
}
.back-main-style {
    // background-image: linear-gradient(
    //     135deg,
    //     rgba(227, 208, 169, 0.75) 25%,
    //     rgba(88, 130, 128, 0.75) 50%,
    //     rgba(218, 175, 70, 0.75) 75%,
    //     rgba(179, 92, 47, 0.75) 100%
    // );
}
</style>
