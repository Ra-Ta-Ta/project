<template>
  <main
    class="w-full custom-style overflow-x-hidden overflow-y-scroll"
    :class="menuIsOpen ? 'absolute' : 'fixed'"
  >
    <Card>
      <template v-slot:title>
        <div></div>
      </template>
      <template v-slot:subTitle>
        <div></div>
      </template>
      <template v-slot:content>
        <div></div>
      </template>
    </Card>
  </main>
</template>

<script>
export default {
  layouts: "default",

  data() {
    return {
      items: 100
    };
  },
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
  top: 66px;
  height: calc(100vh - 66px);
}
</style>
