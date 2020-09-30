<template>
  <div>
    <div
      class="absolute toggler-style w-9 h-9 cursor-pointer overflow-hidden "
      ref="toggler"
      @click="$emit('toggle-menu')"
    >
      <div
        v-for="(marquee, i) in marquees"
        :key="`marquee${i}`"
        class="absolute w-9 h-2"
        :style="marquee"
        :ref="`marquee${i}`"
      >
        <div
          v-for="(dot, i) in dots"
          :key="`dot${i}`"
          class="absolute w-2 h-2 bg-oldLace rounded-full transform"
          :style="dot"
          :ref="`dot${i}`"
        ></div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      dots: [{ left: "0px" }, { left: "14px" }, { left: "28px" }],
      marquees: [{ top: "0px" }, { top: "14px" }, { top: "28px" }]
    };
  },
  mounted() {
    const vm = this;
    const { dot0, dot1, dot2, toggler } = vm.$refs;
    const distance = toggler.clientWidth;
    const d = 0.3;
    const tl = gsap.timeline({
      default: { duration: d }
    });
    tl.to(dot2, { scale: 0.6 })
      .to(dot1, { scale: 0.6 }, d * 0.5)
      .to(dot0, { scale: 0.6 }, d * 1)
      .to(dot2, { scale: 1 }, d * 3)
      .to(dot1, { scale: 1 }, d * 3.5)
      .to(dot0, { scale: 1 }, d * 4)
      .repeat(-1);
  }
};
</script>

<style scoped>
.toggler-style {
  top: 15px;
  left: 15px;
}
</style>
