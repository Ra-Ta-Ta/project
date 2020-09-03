<template>
  <div
    class="z-20 w-9 h-9 custom-left cursor-pointer overflow-hidden "
    :style="active"
    ref="toggler"
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
        class="absolute w-2 h-2 bg-bgGreen rounded-full transform"
        :style="dot"
        :ref="`dot${i}`"
      ></div>
    </div>
  </div>
</template>

<script>
export default {
  props: ["active"],
  data() {
    return {
      dots: [{ left: "0px" }, { left: "14px" }, { left: "28px" }],
      marquees: [{ top: "0px" }, { top: "14px" }, { top: "28px" }]
    };
  },
  mounted() {
    const vm = this;
    const { marquee0, marquee1, marquee2, toggler } = vm.$refs;
    const distance = toggler.clientWidth;
    // console.log(distance);
    const d = 0.7;
    const tl = gsap.timeline({
      default: {}
    });
    tl.fromTo(marquee0, { x: distance }, { duration: d, ease: "none", x: 0 });
    tl.fromTo(
      marquee1,
      { x: distance },
      { duration: d, ease: "none", x: 0 },
      d * 0.3
    )
      .fromTo(
        marquee2,
        { x: distance },
        {
          duration: d,
          ease: "none",
          x: 0
        },
        d * 0.6
      )

      .to(marquee0, {
        duration: d,
        delay: 1,
        ease: "none",
        x: -distance
      })
      .to(
        marquee1,
        {
          duration: d,
          delay: 0.3,
          ease: "none",
          x: -distance
        },
        "<"
      )
      .to(
        marquee2,
        {
          duration: d,
          delay: 0.3,
          ease: "none",
          x: -distance
        },
        "<"
      )
      .repeat(-1);
  }
};
</script>

<style lang="scss" scoped>
.custom-left {
  left: 15px;
}
</style>
