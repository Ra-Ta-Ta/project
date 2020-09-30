<template>
  <div class="relative z-10 w-full h-full pointer-events-none overflow-hidden">
    <div
      class="relative z-20 h-full bg-center bg-repeat pointer-events-auto overflow-y-scroll bgFront-style"
      ref="bgFront"
    >
      <Header
        @toggle-menu="
          getMenuStatus();
          toggleMenu(menuIsOpen);
        "
        :header-position="headerPosition"
      >
      </Header>

      <slot name="nuxt"></slot>
    </div>
  </div>
</template>

<script>
import { mapState, mapActions } from "vuex";
export default {
  data() {
    return { headerPosition: {} };
  },
  computed: {
    ...mapState("toggleMenu", ["menuIsOpen"])
  },
  methods: {
    ...mapActions("toggleMenu", ["getMenuStatus"]),
    toggleMenu(menuIsOpen) {
      const vm = this;
      if (menuIsOpen) {
        vm.openMenu();
      } else {
        vm.closeMenu();
      }
    },
    openMenu() {
      const vm = this;
      const { bgFront } = vm.$refs;
      gsap.to(bgFront, {
        duration: 0.7,
        ease: "expo.out",
        rotation: 10,
        pointerEvents: "none"
      });
      vm.headerPosition = {
        position: "absolute",
        top: `${bgFront.scrollTop}px`
      };
    },
    closeMenu() {
      const vm = this;
      const { bgFront } = vm.$refs;
      setTimeout(() => {
        vm.headerPosition = {};
      }, 700);
      gsap.to(bgFront, {
        duration: 0.7,
        ease: "expo.out",
        rotation: 0,
        clearProps: "all"
      });
    }
  }
};
</script>

<style scoped>
.bgFront-style {
  background-image: url("https://uploads-ssl.webflow.com/57516ebd5650b01552cd9f03/5d30079985ef6117dc5b983d_Paper02.jpg");
  background-size: contain;
  box-shadow: 0 0 20px rgba(0, 0, 0, 0.5);
  transform-origin: center 175%;
}
</style>
