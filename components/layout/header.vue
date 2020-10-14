<template>
  <header class="fixed top-0 z-10 w-full h-11 overflow-visible header-style">
    <div
      class="absolute top-0 left-1/2 w-full transform -translate-x-1/2 -translate-y-1/2 container-style"
    >
      <Logo></Logo>
      <ShoppingBag></ShoppingBag>
    </div>
  </header>
</template>
<script>
export default {
  props: ["header-position"]
};
</script>
<style scoped>
.header-style {
  background-image: linear-gradient(
      90deg,
      rgba(65, 87, 45, 0.7),
      rgba(65, 87, 45, 0.7)
    ),
    url("../../assets/images/bg/bg.jpg");
  background-size: 300px;
}
.container-style {
  max-width: 980px;
}
</style>
