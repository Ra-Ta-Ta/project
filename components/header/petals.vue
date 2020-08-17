<template>
  <div>
    <div
      v-for="petal in petals"
      :key="petal"
      class="absolute w-8 h-8 petalImg bg-100"
      ref="petal"
    ></div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      petals: 30
    };
  },
  mounted() {
    const vm = this;
    console.log(vm.menuIsOpen);
    const { petal } = vm.$refs;
    console.log(petal);

    let w = window.innerWidth;
    let h = window.innerHeight;

    petal.forEach(petal => {
      gsap.set(petal, {
        x: gsap.utils.random(0, w),
        y: gsap.utils.random(-200, -150),
        z: gsap.utils.random(-200, 200)
      });

      gsap.to(petal, {
        duration: gsap.utils.random(6, 15),
        y: h + 100,
        ease: Linear.easeNone,
        repeat: -1,
        delay: -15
      });
      gsap.to(petal, {
        duration: gsap.utils.random(4, 8),
        x: "+=100",
        rotationZ: gsap.utils.random(0, 180),
        repeat: -1,
        yoyo: true,
        ease: Sine.easeInOut
      });
      gsap.to(petal, {
        duration: gsap.utils.random(2, 8),
        rotationX: gsap.utils.random(0, 360),
        rotationY: gsap.utils.random(0, 360),
        repeat: -1,
        yoyo: true,
        ease: Sine.easeInOut,
        delay: -5
      });
    });
  }
};
</script>

<style scoped>
.petalImg {
  background-image: url("../../assets/images/component/petal.png");
}
</style>
