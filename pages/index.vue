<template>
  <main class="w-full p-4 grid grid-cols-1 gap-4">
    <Card>
      <template v-slot:title>
        <div></div>
      </template>
      <template v-slot:subTitle>
        <div></div>
      </template>
      <template v-slot:content>
        <div></div>
      </template>
    </Card>

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

<style scoped></style>
