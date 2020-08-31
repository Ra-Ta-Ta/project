<template>
  <div class="z-20 w-9 h-9 custom-left cursor-pointer " :style="active">
    <div
      v-for="(item, index) in toggler"
      :key="item"
      class="absolute bg-bgGreen toggler-h rounded-lg transform"
      :class="item"
      :ref="`toggler${index}`"
    ></div>
  </div>
</template>

<script>
export default {
  props: ["active"],
  data() {
    return {
      toggler: [" translate-y-1", " translate-y-4", " translate-y-7"]
    };
  },
  mounted() {
    const vm = this;
    const { toggler0, toggler1, toggler2 } = vm.$refs;
    const start = { width: 18 };
    const end = { width: 36 };
    const d = 0.5;
    const tl = gsap.timeline({ defaults: { duration: d } });
    tl.fromTo(toggler0, start, end)
      .fromTo(toggler1, start, end, d * 0.3)
      .fromTo(toggler2, start, end, d * 0.6)
      .fromTo(toggler0, end, start, d * 0.9)
      .fromTo(toggler1, end, start, d * 1.2)
      .fromTo(toggler2, end, start, d * 1.5)
      .repeat(-1);
  }
};
</script>

<style scoped>
.custom-left {
  left: 15px;
}
.toggler-h {
  height: 6px;
}
</style>
