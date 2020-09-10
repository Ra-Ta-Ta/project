<template>
  <div class="relative z-10 w-full h-full overflow-hidden pointer-events-none">
    <div
      class="relative z-20 bgImg bg-center bg-repeat h-full  pointer-events-auto overflow-hidden"
      ref="bgFront"
    >
      <Header @toggle-menu="toggleMenu"> </Header>
      <slot name="nuxt"></slot>
    </div>
  </div>
</template>

<script>
import Header from "./header.vue";
export default {
  components: {
    Header: Header
  },
  data() {
    return {
      offset: 0
    };
  },
  methods: {
    toggleMenu() {
      const vm = this;
      vm.$store.dispatch("toggleMenu/getMenuStatus");
      const { menuIsOpen } = vm.$store.state.toggleMenu;
      const { bgFront } = vm.$refs;
      if (menuIsOpen) {
        vm.offset =
          ((bgFront.offsetHeight * 7) / 4 / bgFront.offsetHeight) * 100 + "%";

        gsap.to(bgFront, {
          duration: 0.7,
          ease: "expo.out",
          transformOrigin: "center" + " " + vm.offset,
          transform: "rotate(10deg) translateZ(0px)",
          pointerEvents: "none"
        });
      } else {
        gsap.to(bgFront, {
          duration: 0.7,
          ease: "expo.out",
          transform: "rotate(0deg) translateZ(0)",
          clearProps: "all"
        });
      }
    }
  }
};
</script>

<style scoped>
.bgImg {
  background-image: url("https://uploads-ssl.webflow.com/57516ebd5650b01552cd9f03/5d30079985ef6117dc5b983d_Paper02.jpg");
  background-size: 250px;
  box-shadow: 0 0 20px rgba(0, 0, 0, 0.5);
}
</style>
