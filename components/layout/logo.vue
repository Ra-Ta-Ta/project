<template>
  <nuxt-link
    class="absolute top-1 left-1/2 block w-30 m-auto  pl-1 cursor-pointer text-center  transform -translate-x-1/2 border-2 border-khaki whitespace-no-wrap logo-style"
    to="/"
    @mouseover="logoHover"
  >
    <span
      class="inline-block text-2xl text-khaki leading-none font-style"
      v-for="(name, i) in names"
      :key="name"
      :ref="`name${i + 1}`"
      >{{ name }}</span
    >
    <img
      src="../../assets/images/bg/seal.png"
      class="absolute bottom-0 right-0 inline w-2 h-2 align-text-bottom  transform -translate-x-1/2 -translate-y-1/2"
    />
  </nuxt-link>
</template>
<script>
export default {
  data() {
    return {
      names: ["甜", "上", "頭"]
    };
  },
  methods: {
    logoHover() {
      const vm = this;
      const { name1, name2, name3 } = vm.$refs;
      const tl = gsap.timeline({ default: { duration: 0.3 } });
      tl.to(name1, {});
    }
  }
};
</script>
<style scoped>
.logo-style {
  outline: 2px solid rgba(250, 245, 232, 0.9);
  outline-offset: 2px;
  padding-bottom: 2px;
}
.font-style {
  font-size: 28px;
}
</style>
