<template>
  <div
    class="absolute z-10 w-48 h-48 bg-bgGreen  transform -translate-x-1/2	-translate-y-1/2 rounded-half "
    ref="background"
  >
    <div
      class="absolute z-20 top-50 left-50 w-8 h-5 transform translate-x-6	translate-y-8"
      @click="toggleMenu"
    >
      <div
        class="absolute top-0 w-8 h-1 bg-bgWhite rounded-lg"
        ref="togglerTop"
      ></div>
      <div
        class="absolute top-0 w-8 h-1 bg-bgWhite mt-3 rounded-lg"
        ref="togglerBottom"
      ></div>
    </div>

    <ul
      class="absolute z-20 top-50 left-50 transform translate-x-1/2 translate-y-1/2 opacity-0 invisible"
      ref="menu"
    >
      <li v-for="item in items" :key="item">
        <a
          href=""
          class="block mb-4 text-fontWhite tracking-widest text-center px-3 py-8"
          >{{ item }}</a
        >
      </li>
    </ul>
  </div>
</template>

<script>
import Patels from "./petals";
export default {
  components: {
    Petals: Patels
  },
  data() {
    return {
      items: ["和菓子", "大福", "糰子", "銅鑼燒", "煎餅"],
      menuIsOpen: false
    };
  },
  methods: {
    toggleMenu() {
      const vm = this;
      const tl = gsap.timeline({ defaults: { duration: 0.1 } });
      const { background, togglerTop, togglerBottom, menu, patel } = vm.$refs;

      vm.menuIsOpen = !vm.menuIsOpen;
      if (vm.menuIsOpen) {
        tl.to(togglerTop, {
          y: 6,
          backgroundColor: "rgba(226, 125, 89, 0.9)",
          ease: Power2.easeInOut
        })
          .to(
            togglerBottom,
            {
              y: -6,
              backgroundColor: "rgba(226, 125, 89, 0.9)",
              ease: Power2.easeInOut
            },
            "<"
          )
          .to(togglerTop, {
            rotation: 45,
            ease: Power2.easeInOut
          })
          .to(
            togglerBottom,
            {
              rotation: -45,
              ease: Power2.easeInOut
            },
            "<"
          )
          .to(
            background,
            {
              boxShadow: "0 0 0 100vh rgba(65, 87, 45, 0.7)",
              borderRadius: 0,
              perspective: 600
            },
            "<"
          )
          .to(
            menu,
            {
              opacity: 1,
              visibility: "visible"
            },
            "<"
          );
      } else {
        tl.to([togglerTop, togglerBottom], {
          rotation: 0,
          backgroundColor: "rgba(250, 245, 232, 0.85)",
          ease: Power2.easeInOut
        })
          .to(
            background,
            {
              boxShadow: "0 0 0 1px rgba(0, 0, 0, 0.05)",
              borderRadius: "50%"
            },
            "<"
          )
          .to(
            menu,
            {
              opacity: 0,
              visibility: "hidden"
            },
            "<"
          );

        tl.to(togglerTop, { y: 0, ease: Power2.easeInOut }).to(
          togglerBottom,
          {
            y: 0,
            ease: Power2.easeInOut
          },
          "<"
        );
      }
    }
  }
};
</script>

<style scoped></style>
