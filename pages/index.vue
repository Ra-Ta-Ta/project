<template>
  <main class="w-full p-4 main-style grid grid-cols-1 gap-4">
    <Card :bg-class="'header-style bg-100'">
      <template v-slot:content1>
        <Book></Book>
      </template>
      <template v-slot:content2> </template>
      <template v-slot:content3> </template>
    </Card>

    <Footer></Footer>
    <Footer></Footer>
    <Footer></Footer>
    <Footer></Footer>
    <Footer></Footer>
    <Footer></Footer>
    <Footer></Footer>
    <Footer></Footer>
    <Footer></Footer>
    <Footer></Footer>
    <Footer></Footer>
  </main>
</template>

<script>
export default {
  layouts: "default",

  data() {
    return {};
  }
};
</script>

<style lang="scss" scoped>
.main-style {
  padding-top: 82px;
}
.header-style {
  background-image: url("../assets/images/component/library.jpg");
  height: calc(100vw * 10 / 16);
  perspective: 100vw;
  perspective-origin: bottom;
}
</style>
