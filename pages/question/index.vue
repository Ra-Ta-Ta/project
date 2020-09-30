<template>
  <main
    class="w-full custom-style overflow-x-hidden overflow-y-scroll"
    :class="menuIsOpen ? 'absolute' : 'fixed'"
  >
    <!-- <Card></Card> -->
    <div v-for="item in items" :key="item">
      {{ "item" + item }}
    </div>
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
