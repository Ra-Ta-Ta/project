<template>
    <div
        class="relative z-20 h-full bg-center bg-repeat bg-100 pointer-events-auto overflow-y-scroll bg-style"
        ref="bg"
    >
        <Header
            @toggle-menu="
          getMenuStatus();
          toggleMenu(menuIsOpen);
        "
        ></Header>
        <!-- <nav class="absolute top-18 left-4" ref="menu">
                <nuxt-link
                    :to="item.link"
                    class="block mb-4 text-oldLace text-2xl font-bold text-left"
                    v-for="item in menuItem"
                    :key="item.title"
                    @click.native="toggleMenu"
                >{{ item.title }}</nuxt-link>
        </nav>-->
        <Nuxt />
    </div>
</template>

<script>
import { mapState, mapActions } from "vuex"
export default {
    data() {
        return {
            menuItem: [
                { title: "關於甜上頭", link: "./about" },
                { title: "產品介紹", link: "./product" },
                { title: "常見問題", link: "./question" },
                { title: "訂單查詢", link: "./query" },
            ],
        }
    },
    computed: {
        ...mapState("toggleMenu", ["menuIsOpen"]),
    },
    methods: {
        ...mapActions("toggleMenu", ["getMenuStatus"]),
        toggleMenu(menuIsOpen) {
            const vm = this
            if (menuIsOpen) {
                vm.openMenu()
            } else {
                vm.closeMenu()
            }
        },
        openMenu() {
            const vm = this
            const { bg } = vm.$refs
        },
        closeMenu() {
            const vm = this
            const { bg } = vm.$refs
        },
    },
}
</script>

<style scoped>
.bg-style {
    background-image: url("https://uploads-ssl.webflow.com/57516ebd5650b01552cd9f03/5d30079985ef6117dc5b983d_Paper02.jpg");
    background-size: 300px;
}
</style>
