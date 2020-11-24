<template>
    <div
        class="fixed w-full h-full bg-center bg-repeat bg-100 overflow-x-hidden overflow-y-scroll scrolling-touch lg:pl-50 bg-style"
    >
        <Header>
            <template v-slot:content
                ><Toggler></Toggler
            ></template>
        </Header>
        <DashboardNav
            class="z-30 top-15 lg:hidden w-full"
        ></DashboardNav>
        <DashboardNav
            class="z-50 top-43 hidden lg:block w-50 opacity-100 transform-none"
        >
        </DashboardNav>
        <Nuxt />
    </div>
</template>

<script>
import { mapActions } from "vuex";
export default {
    mounted() {
        const vm = this;
        vm.checkStatus();
    },
    methods: {
        ...mapActions("signInStatus", ["checkStatus"]),
    },
};
</script>

<style lang="scss" scoped>
.bg-style {
    background-image: url("https://uploads-ssl.webflow.com/57516ebd5650b01552cd9f03/5d30079985ef6117dc5b983d_Paper02.jpg");
    background-size: 300px;
}
</style>
