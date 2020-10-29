<template>
    <nuxt-link
        :to="cart.link"
        class="cursor-pointer overflow-hidden cart-style"
    >
        <div class="relative w-8 h-8">
            <img
                :src="cart.src"
                :alt="`${cart.alt}`"
                class=""
            />
            <span
                class="absolute w-full text-bigDipOruby text-sm text-center font-bold leading-none capacity-style"
            >
                {{ cart.capacity }}
            </span>
        </div>
        <span
            class="text-oldLace text-base leading-none uppercase py-4 pl-4 hidden lg:inline"
        >
            cart
        </span>
    </nuxt-link>
</template>
<script>
export default {
    data() {
        return {
            cart: {
                link: "./cart",
                src: require("~/assets/images/bg/cart.svg"),
                alt: "cart",
                capacity: 100,
            },
        };
    },
};
</script>
<style scoped>
.cart-style {
    top: 14px;
}
.capacity-style {
    bottom: 2px;
    text-indent: 2px;
}
</style>
