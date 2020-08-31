<template>
  <div class="fixed w-full h-screen bgImg bg-center bg-repeat overflow-hidden">
    <div
      class="fixed w-9 h-9 custom-top-left  cursor-pointer"
      @click="getMenuStatus"
    >
      <div
        class="absolute toggler-w-h rounded-lg toggler-bgImg bg-cover transform -translate-x-1 translate-y-4"
        :class="stroke"
        v-for="(stroke, index) in strokes"
        :key="stroke"
        :ref="`stroke${index}`"
      ></div>
    </div>

    <nav class="absolute top-0 left-0 nav-top-left " ref="menu">
      <nuxt-link
        :to="item.link"
        class="block mb-4 text-fontWhite  text-2xl text-left "
        v-for="item in menuItem"
        :key="item.title"
        >{{ item.title }}</nuxt-link
      >
    </nav>
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
    ...mapActions("closeMenu", ["getMenuStatus"])
  }
};
</script>

<style scoped>
.bgImg {
  background-image: linear-gradient(
      rgba(65, 87, 45, 0.7),
      rgba(65, 87, 45, 0.7)
    ),
    url("https://uploads-ssl.webflow.com/57516ebd5650b01552cd9f03/5d30079985ef6117dc5b983d_Paper02.jpg");

  background-size: 250px;
}
.toggler-bgImg {
  background-image: url("https://uploads-ssl.webflow.com/57516ebd5650b01552cd9f03/5d30079985ef6117dc5b983d_Paper02.jpg");
  background-size: 250px;
}
.custom-top-left {
  top: 15px;
  left: 15px;
}
.nav-top-left {
  top: 71px;
  left: 15px;
}

.toggler-w-h {
  width: 45px;
  height: 6px;
}
</style>
