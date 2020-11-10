<template>
    <div
        class="fixed w-full h-full bg-center bg-repeat bg-100 overflow-x-hidden overflow-y-scroll scrolling-touch lg:pl-50 bg-style"
    >
        <Header></Header>
        <Nav></Nav>
        <Sidebar></Sidebar>
        <Nuxt />
    </div>
</template>

<script>
export default {
    data() {
        return {};
    },
    created() {
        console.log(this.$axios);
        //    async asyncData({ $axios }) {
        //     try{
        //         const respons = await $axios.$get('https://dog.ceo/api/breeds/image/random');
        //         let image = respons.message;
        //         return{image};
        //     }catch(err){
        //         console.log(err);
        //     }
        // }
        //   }
    },
};
</script>

<style scoped>
.bg-style {
    background-image: url("https://uploads-ssl.webflow.com/57516ebd5650b01552cd9f03/5d30079985ef6117dc5b983d_Paper02.jpg");
    background-size: 300px;
}
</style>
