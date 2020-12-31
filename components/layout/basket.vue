<template>
    <nuxt-link
        :to="basket.link"
        class="absolute z-50 right-4 flex justify-between items-center w-22 h-8 transition-all duration-300 ease-linear cursor-pointer overflow-hidden basket-style"
        :class="{
            'icon-active': basket.active,
        }"
        @mouseover.native="basket.active = true"
        @mouseleave.native="basket.active = false"
    >
        <div
            class="relative inline-block w-8 h-8 nav-img-style"
        >
            <img :src="basket.src" :alt="`${basket.alt}`" />
            <span
                class="absolute w-full text-ruddyBrown text-sm text-center font-bold leading-none capacity-style"
                v-text="basket.capacity"
            ></span>
        </div>
        <span
            class="hidden md:inline-block text-oldLace text-base leading-none uppercase"
            :class="{
                'title-active': basket.active,
            }"
            v-text="
                basket.active
                    ? basket.cnTitle
                    : basket.engTitle
            "
        ></span>
    </nuxt-link>
</template>
<script>
export default {
    data() {
        return {
            basket: {
                engTitle: "basket",
                cnTitle: "購物籃",
                link: "./basket",
                src: require("~/assets/images/bg/basket.svg"),
                alt: "basket",
                capacity: 100,
                active: "",
            },
        };
    },
};
</script>
<style lang="scss" scoped>
.basket-style {
    top: 14px;
}
.capacity-style {
    bottom: 2px;
    text-indent: 2px;
}
.icon-active {
    @include icon-active;
}
.title-active {
    @include title-active;
}
</style>
