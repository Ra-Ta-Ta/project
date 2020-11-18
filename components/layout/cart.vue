<template>
    <nuxt-link
        :to="cart.link"
        class="absolute lg:static z-50 right-4 w-8 h-8 lg:w-full lg:h-12 lg:flex lg:justify-start lg:items-center lg:transition-all lg:duration-300 lg:ease-linear lg:pl-4 cursor-pointer overflow-hidden cart-style"
        @mouseover.native="cart.active = true"
        @mouseleave.native="cart.active = false"
    >
        <div class="relative w-8 h-8">
            <img :src="cart.src" :alt="`${cart.alt}`" />
            <span
                class="absolute w-full text-ruddyBrown text-sm text-center font-bold leading-none capacity-style"
                v-text="cart.capacity"
            ></span>
        </div>
        <span
            class="text-oldLace text-base leading-none uppercase py-4 pl-4 hidden lg:inline"
            :class="{ 'title-active': cart.active }"
            v-text="
                cart.active ? cart.cnTitle : cart.engTitle
            "
        ></span>
    </nuxt-link>
</template>
<script>
export default {
    data() {
        return {
            cart: {
                engTitle: "cart",
                cnTitle: "購物車",
                link: "./cart",
                src: require("~/assets/images/bg/cart.svg"),
                alt: "cart",
                capacity: 100,
                active: "",
            },
        };
    },
};
</script>
<style lang="scss" scoped>
.cart-style {
    @media screen and (min-width: 990px) {
        background-color: $cart-color;
    }
    top: 14px;
}
.capacity-style {
    bottom: 2px;
    text-indent: 2px;
}
.title-active {
    @include title-active;
}
</style>
