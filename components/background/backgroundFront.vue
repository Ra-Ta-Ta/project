<template>
  <div
    class="relative z-10 w-full h-screen overflow-x-hidden overflow-y-scroll "
    ref="bgWindow"
    @scroll.passive="getScrollTop"
  >
    <div
      class="relative z-20  bgimg bg-center bg-repeat  pointer-events-auto"
      ref="bgFront"
    >
      <Toggler
        @click.native="toggleMenu"
        ref="toggler"
        :active="active"
      ></Toggler>
      <slot name="nuxt"></slot>
    </div>
  </div>
</template>

<script>
import Toggler from "../header/toggler.vue";
import { mapActions } from "vuex";
export default {
  components: {
    Toggler: Toggler
  },
  data() {
    return {
      scrollTop: 0,
      bgScrollTop: 0,
      bgFrontHeight: 0,
      offset: 0,
      active: { position: "fixed", top: "30px" }
    };
  },
  mounted() {
    const vm = this;
    vm.getScrollTop();
  },
  watch: {
    "$store.state.closeMenu.menuIsClose"() {
      const vm = this;
      const { menuIsClose } = vm.$store.state.closeMenu;
      if (menuIsClose) {
        vm.toggleMenu();
        vm.$store.dispatch("closeMenu/getMenuStatus");
      }
    }
  },
  methods: {
    getScrollTop() {
      const vm = this;
      const { bgFront, bgWindow, container } = vm.$refs;
      vm.bgScrollTop = bgWindow.scrollTop;
      vm.bgFrontHeight = bgFront.offsetHeight;
      vm.offset =
        ((vm.bgScrollTop + (vm.bgFrontHeight * 3) / 4) / vm.bgFrontHeight) *
          100 +
        "%";
    },
    openMenu() {
      const vm = this;
      const { bgFront, bgWindow } = vm.$refs;
      const tl = gsap.timeline({});

      tl.to(bgFront, {
        duration: 0.7,
        ease: "expo.out",
        transformOrigin: "center" + " " + vm.offset,
        transform: "rotate(10deg) translateZ(0px)"
      }).to(
        bgWindow,
        {
          overflow: "hidden",
          pointerEvents: "none"
        },
        "<"
      );
      vm.active = { position: "absolute", top: bgWindow.scrollTop + 30 + "px" };
    },
    closeMenu() {
      const vm = this;
      const { bgFront, bgWindow } = vm.$refs;
      const tl = gsap.timeline({
        ease: "bounce.out",
        transform: "translateZ(0)"
      });

      tl.to(bgFront, {
        duration: 0.7,
        ease: "expo.out",
        transform: "rotate(0deg) ",
        clearProps: "all"
      }).to(
        bgWindow,
        {
          clearProps: "all"
        },
        "<"
      );
      setTimeout(() => {
        vm.active = { position: "fixed", top: "30px" };
      }, 700);
    },
    toggleMenu() {
      const vm = this;
      vm.$store.dispatch("getMenuStatus");
      const { menuIsOpen } = vm.$store.state;
      if (menuIsOpen) {
        vm.openMenu();
      } else {
        vm.closeMenu();
      }
    }
  }
};
</script>

<style scoped>
.bgimg {
  background-image: url("https://uploads-ssl.webflow.com/57516ebd5650b01552cd9f03/5d30079985ef6117dc5b983d_Paper02.jpg");
  background-size: 250px;
  box-shadow: 0 0 20px rgba(0, 0, 0, 0.7);
  /* transform-origin: center 70%; */
}
</style>
