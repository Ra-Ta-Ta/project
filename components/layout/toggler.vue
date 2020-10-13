<template>
  <div
    class="absolute top-2 left-4 w-7 h-7 cursor-pointer overflow-hidden toggler-style"
    @click="
      $emit('toggle-menu');
      rotateToggler(menuIsOpen);
    "
    ref="toggler"
  >
    <img
      src="~assets/images/bg/menu-open.svg"
      alt="menu-open"
      class="absolute top-0 left-0 w-full h-full menu-open-style"
      ref="menuOpen"
    />
    <img
      src="~assets/images/bg/menu-close.svg"
      alt="menu-close"
      class="absolute top-0 left-0 w-full h-full menu-close-style"
      ref="menuClose"
    />
  </div>
</template>

<script>
import { mapState } from "vuex";
export default {
  data() {
    return {};
  },
  computed: {
    ...mapState("toggleMenu", ["menuIsOpen"])
  },
  methods: {
    rotateToggler(menuIsOpen) {
      const vm = this;
      const { menuClose, menuOpen } = vm.$refs;
      const tl = gsap.timeline({ defaults: { duration: 0.5 } });
      if (menuIsOpen) {
        tl.to(menuClose, { rotateY: 180 }).to(
          menuOpen,
          { rotateY: 0, zIndex: 1 },
          "<"
        );
      } else {
        tl.to(menuClose, { rotateY: 0, clearProps: "all" }).to(
          menuOpen,
          { rotateY: 180, clearProps: "all" },
          "<"
        );
      }
    }
  }
};
</script>

<style scoped>
.toggler-style {
  perspective: 2000px;
}
.menu-open-style {
  transform: rotateY(180deg);
  backface-visibility: hidden;
}
.menu-close-style {
  backface-visibility: hidden;
}
</style>
