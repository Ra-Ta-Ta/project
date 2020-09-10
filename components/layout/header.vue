<template>
  <header
    class="top-0 z-30 w-full custom-style bg-oliveGreen bg-cover"
    :class="menuIsOpen ? 'absolute' : 'fixed'"
  >
    <Toggler v-on="$listeners"></Toggler>
  </header>
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
  height: 66px;
}
</style>
