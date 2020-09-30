<template>
  <header
    class="fixed top-0 z-30 w-full header-style overflow-visible"
    :style="headerPosition"
  >
    <Toggler v-on="$listeners"></Toggler>
    <Logo></Logo>
    <ShoppingBag></ShoppingBag>
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
      180deg,
      rgba(65, 87, 45, 0.7),
      rgba(65, 87, 45, 0.7)
    ),
    url("../../assets/images/bg/bg.jpg");
  height: 66px;
}
</style>
