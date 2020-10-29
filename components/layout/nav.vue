<template>
    <nav class="w-full nav-style">
        <Search
            :class="{ active: hoverObj == 'search' }"
            @mouseover.native="hoverObj = 'search'"
            @mouseleave.native="hoverObj = ''"
        ></Search>
        <nuxt-link
            v-for="(menuItem, i) in menuItems"
            :key="menuItem.title"
            :to="menuItem.link"
            class="w-full flex items-center transition-all duration-300 ease-linear pl-4"
            :class="[
                menuItem.color,
                { active: hoverObj == i },
            ]"
            @mouseover.native="hoverObj = i"
            @mouseleave.native="hoverObj = ''"
        >
            <img
                :src="menuItem.src"
                :alt="menuItem.alt"
                class="w-8 h-8"
            />
            <span
                class="text-oldLace text-base leading-none uppercase py-4 pl-4"
                >{{ menuItem.title }}</span
            >
        </nuxt-link>
        <Cart
            class="w-full h-12 justify-start items-center transition-all duration-300 ease-linear pl-4 bg-bigDipOruby hidden lg:flex"
            :class="{ active: hoverObj == 'cart' }"
            @mouseover.native="hoverObj = 'cart'"
            @mouseleave.native="hoverObj = ''"
        ></Cart>
    </nav>
</template>

<script>
export default {
    data() {
        return {
            hoverObj: "",
            menuItems: [
                {
                    title: "about us",
                    link: "./about",
                    color: "bg-brass",
                    src: require("~/assets/images/bg/tongue.svg"),
                    alt: "about us",
                },
                {
                    title: "shop",
                    link: "./product",
                    color: "bg-maximumYellowRed",
                    src: require("~/assets/images/bg/candy.svg"),
                    alt: "shop",
                },
                {
                    title: "faq",
                    link: "./question",
                    color: "bg-terraCotta",
                    src: require("~/assets/images/bg/faq.svg"),
                    alt: "faq",
                },
                {
                    title: "login",
                    link: "./login",
                    color: "bg-desire",
                    src: require("~/assets/images/bg/login.svg"),
                    alt: "login",
                },
            ],
        };
    },
};
</script>

<style scoped>
.nav-style {
    background-image: url("~assets/images/bg/bg.jpg");
    background-size: 300px;
}
.active {
    filter: brightness(1.25);
}
</style>
