<template>
  <div>
    <header
      class="top-0 z-30 w-full custom-style"
      :class="menuIsOpen ? 'absolute' : 'fixed'"
    >
      <Toggler v-on="$listeners"></Toggler>
      <Logo></Logo>
      <ShoppingBag></ShoppingBag>
    </header>
  </div>
</template>
<script>
export default {
  computed: {
    menuIsOpen() {
      const vm = this;
      return vm.$store.state.toggleMenu.menuIsOpen;
    }
  }
};
</script>
<style scoped>
.custom-style {
  background-image: linear-gradient(
      180deg,
      rgba(65, 87, 45, 0.7),
      rgba(65, 87, 45, 0.7)
    ),
    url("../../assets/images/bg/bg.jpg");
  height: 66px;
}
</style>
