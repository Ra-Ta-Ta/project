<template>
  <div
    class="fixed w-full h-full bg-style bg-contain bg-center bg-repeat overflow-visible"
  >
    <div
      class="fixed w-9 h-9 toggler-style  cursor-pointer "
      @click="
        getMenuStatus();
        toggleMenu();
      "
    >
      <div
        class="absolute stroke-style rounded-xl transform -translate-x-1 translate-y-4 "
        :class="stroke"
        v-for="(stroke, index) in strokes"
        :key="stroke"
        :ref="`stroke${index}`"
      >
        <div
          v-for="(dot, index) in dots"
          :key="dot"
          class="absolute w-2 h-2 dot-style bg-cover rounded-full"
          :style="{ left: `${index * 9.25}px`, top: `-1px` }"
          :ref="`dot${index}`"
        ></div>
      </div>
    </div>

    <nav class="absolute top-0 left-0 nav-style " ref="menu">
      <nuxt-link
        :to="item.link"
        class="block mb-4 text-oldLace text-2xl font-bold text-left "
        v-for="item in menuItem"
        :key="item.title"
        @click.native="toggleMenu"
        >{{ item.title }}</nuxt-link
      >
    </nav>
    <BgFront ref="bgFront">
      <template v-slot:nuxt>
        <Nuxt />
      </template>
    </BgFront>
  </div>
</template>

<script>
import { mapActions } from "vuex";
export default {
  data() {
    return {
      menuItem: [
        { title: "關於甜上頭", link: "./about" },
        { title: "產品介紹", link: "./product" },
        { title: "常見問題", link: "./question" },
        { title: "訂單查詢", link: "./query" }
      ],
      strokes: ["rotate-45 ", "-rotate-45 "],
      dots: 5,
      menuIsOpen: false
    };
  },
  mounted() {
    const vm = this;
    const { stroke0, stroke1 } = vm.$refs;
    const tl = gsap.timeline({
      defaults: {
        duration: 1,
        x: -4,
        y: 16
      }
    });
    tl.to([stroke0, stroke1], {
      duration: 0.7,
      rotation: 90
    })
      .to(
        [stroke0, stroke1],
        {
          rotation: 450
        },
        "0.5"
      )
      .to(stroke0, { rotation: 495 }, "<")
      .to(stroke1, { rotation: 585 }, "<")
      .repeatDelay(1)
      .repeat(-1);
  },
  methods: {
    ...mapActions("toggleMenu", ["getMenuStatus"]),
    toggleMenu() {
      const vm = this;
      const { bgFront } = vm.$refs;
      bgFront.toggleMenu();
    }
  }
};
</script>

<style scoped>
.bg-style {
  background-image: linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)),
    url("../assets/images/bg/bg.jpg");
}
.toggler-style {
  top: 15px;
  left: 15px;
}
.stroke-style {
  width: 45px;
  height: 6px;
}
.dot-style {
  background-image: url("../assets/images/bg/bg.jpg");
}
.nav-style {
  top: 71px;
  left: 15px;
}
</style>
