<template>
  <div>
    <div
      class="absolute top-4 left-4 w-9 h-9 cursor-pointer overflow-hidden"
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
      marquees: [{ top: "0px" }, { top: "14px" }, { top: "28px" }],
    };
  },
  mounted() {
    const vm = this;
    const { dot0, dot1, dot2, toggler } = vm.$refs;
    const distance = toggler.clientWidth;
    const d = 0.7;
    const tl = gsap.timeline({
      defaults: {
        duration: d,
        repeat: -1,
        yoyo: true,
        scale: 0.6,
      },
    });
    tl.to(dot2, {})
      .to(
        dot1,
        {
          delay: d * 0.33,
        },
        "<"
      )
      .to(
        dot0,
        {
          delay: d * 0.66,
        },
        "<"
      );
  },
};
</script>

<style scoped>
</style>
