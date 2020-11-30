<template>
    <nav
        class="fixed left-0 transform transition-all duration-300 ease-linear nav-style"
        :class="[
            togglerIsReversed
                ? ' translate-y-0  opacity-100'
                : ' -translate-y-full opacity-0',
        ]"
    >
        <nuxt-link
            v-for="menuItem in menuItems"
            :key="menuItem.id"
            :to="menuItem.link"
            class="w-full flex items-center transition-all duration-300 ease-linear pl-4"
            :class="[
                menuItem.color,
                menuItem.class,
                {
                    'nav-active':
                        nav.activeObj == menuItem.id,
                },
            ]"
            @mouseover.native="nav.activeObj = menuItem.id"
            @mouseleave.native="nav.activeObj = ''"
            @click.native="reverseToggler()"
        >
            <img
                :src="menuItem.src"
                :alt="menuItem.id"
                class="w-8 h-8"
            />
            <span
                class="text-oldLace text-base leading-none uppercase py-4 pl-4 title-style"
                :class="{
                    'title-active':
                        nav.activeObj == menuItem.id,
                }"
                v-text="
                    nav.activeObj == menuItem.id
                        ? menuItem.cnTitle
                        : menuItem.engTitle
                "
            ></span>
        </nuxt-link>
    </nav>
</template>

<script>
import { mapState, mapMutations } from "vuex";
export default {
    data() {
        return {
            nav: {
                activeObj: "",
            },
            menuItems: [
                {
                    engTitle: "product list",
                    cnTitle: "產品列表",
                    link: "/dashboard/product-list",
                    class: "product-list-style",
                    src: require("~/assets/images/bg/candy.svg"),
                    id: "productList",
                },
                {
                    engTitle: "order list",
                    cnTitle: "訂購列表",
                    link: "/dashboard/order-list",
                    class: "order-list-style",
                    src: require("~/assets/images/bg/cart.svg"),
                    id: "orderList",
                },
                {
                    engTitle: "coupon",
                    cnTitle: "優惠券",
                    link: "/dashboard/coupon",
                    class: "coupon-style",
                    src: require("~/assets/images/bg/tongue.svg"),
                    id: "coupon",
                },
            ],
        };
    },
    mounted() {
        const vm = this;
        window.addEventListener("resize", vm.resizeScreen);
    },
    beforeDestroy() {
        const vm = this;
        window.removeEventListener(
            "resize",
            vm.resizeScreen,
        );
    },
    computed: {
        ...mapState("toggler", ["togglerIsReversed"]),
    },
    methods: {
        ...mapMutations("toggler", [
            "reverseToggler",
            "resizeScreen",
        ]),
    },
};
</script>

<style lang="scss" scoped>
.nav-style {
    background-image: url("~assets/images/bg/bg.jpg");
    background-size: 300px;
}
.product-list-style {
    background-color: $about-us-color;
}
.order-list-style {
    background-color: $shop-color;
}
.coupon-style {
    background-color: $faq-color;
}
.nav-active {
    @include nav-active;
}
.title-active {
    @include title-active;
}
</style>
