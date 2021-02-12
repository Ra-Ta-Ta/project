<template>
    <nuxt-link
        :to="basket.link"
        class="flex items-center h-8 transition-all duration-300 ease-linear cursor-pointer overflow-hidden lg:px-2 basket-style"
        :class="{
            wobble: basket.active,
        }"
        @mouseover.native="basket.active = true"
        @mouseleave.native="basket.active = false"
    >
        <div class="relative inline-block w-8 h-8">
            <img :src="basket.src" />
            <span
                class="absolute w-full text-ruddyBrown text-sm text-center leading-none capacity-style"
                v-text="basket.capacity"
            ></span>
        </div>
        <span
            class="hidden lg:inline-block text-custom-white text-base leading-none tracking-wider uppercase pl-2"
            :class="{
                'text-stripes': basket.active,
            }"
            v-text="basket.title"
        ></span>
    </nuxt-link>
</template>
<script>
export default {
    data() {
        return {
            basket: {
                title: "basket",
                link: "./basket",
                src: require("~/assets/images/bg/basket.svg"),
                capacity: 100,
                active: "",
            },
        };
    },
};
</script>
<style lang="scss" scoped>
.basket-style {
}
.capacity-style {
    bottom: 2px;
    text-indent: 2px;
}
.wobble {
    @include wobble;
}
.text-stripes {
    @include text-stripes;
}
</style>
