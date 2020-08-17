<template>
  <div class="bgimg w-full h-screen bg-center bg-repeat overflow-hidden">
    <Header></Header>
    <Nuxt />
  </div>
</template>

<script>
import Header from "../components/header/index.vue";
export default {
  components: {
    Header: Header
  }
};
</script>

<style>
.bgimg {
  background-image: url("https://uploads-ssl.webflow.com/57516ebd5650b01552cd9f03/5d30079985ef6117dc5b983d_Paper02.jpg");
  background-size: 250px;
}
</style>
