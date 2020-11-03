<template>
    <nuxt-link
        :to="cart.link"
        class="cursor-pointer overflow-hidden cart-style"
        @mouseover.native="cart.active = true"
        @mouseleave.native="cart.active = false"
    >
        <div class="relative w-8 h-8">
            <img
                :src="cart.src"
                :alt="`${cart.alt}`"
                class=""
            />
            <span
                class="absolute w-full text-bigDipOruby text-sm text-center font-bold leading-none capacity-style"
                v-text="cart.capacity"
            >
            </span>
        </div>
        <span
            class="text-oldLace text-base leading-none uppercase py-4 pl-4 hidden lg:inline"
            :class="{ 'title-active': cart.active }"
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
                active: "",
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
.title-active {
    animation: title-active 0.3s;
}
@keyframes title-active {
    0% {
        transform: translateX(10px);
        opacity: 0;
    }
    100% {
        transform: translateX(0px);
        opacity: 1;
    }
}
</style>
