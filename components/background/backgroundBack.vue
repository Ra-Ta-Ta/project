<template>
  <div class="fixed w-full h-screen bgimg bg-center bg-repeat overflow-hidden">
    <div
      class="fixed w-9 h-9 custom-top-left  cursor-pointer"
      @click="getMenuStatus"
    >
      <div
        class="absolute toggler-w-h rounded-lg bg-bgOrange transform -translate-x-1 translate-y-4"
        :class="stroke"
        v-for="(stroke, index) in strokes"
        :key="stroke"
        :ref="`stroke${index}`"
      ></div>
    </div>

    <nav
      class="absolute top-0 left-0 transform translate-x-7	translate-y-24 "
      ref="menu"
    >
      <a
        href="#"
        class="block mb-4 text-fontWhite  text-2xl text-left "
        v-for="item in menuItem"
        :key="item"
        >{{ item }}</a
      >
    </nav>
  </div>
</template>

<script>
import { mapActions } from "vuex";
export default {
  data() {
    return {
      menuItem: ["關於甜上頭", "產品介紹", "常見問題", "訂單查詢"],
      strokes: ["rotate-45 ", "-rotate-45 "]
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
      .to([stroke0, stroke1], {
        rotation: 450
      })

      .to(stroke0, { rotation: 495 }, "<")
      .to(stroke1, { rotation: 585 }, "<")
      .repeatDelay(1)
      .repeat(-1);
  },
  methods: {
    ...mapActions("closeMenu", ["getMenuStatus"])
  }
};
</script>

<style scoped>
.bgimg {
  background-image: linear-gradient(
      rgba(65, 87, 45, 0.7),
      rgba(65, 87, 45, 0.7)
    ),
    url("https://uploads-ssl.webflow.com/57516ebd5650b01552cd9f03/5d30079985ef6117dc5b983d_Paper02.jpg");

  background-size: 250px;
}
.custom-top-left {
  top: 30px;
  left: 30px;
}

.toggler-w-h {
  width: 45px;
  height: 6px;
}
</style>
