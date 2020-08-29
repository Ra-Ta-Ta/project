<template>
  <div class="custom-top ">
    <div v-for="(item, index) in items" :key="index">{item}</div>
  </div>
</template>

<script>
export default {
  layouts: "default",
  data() {
    return {
      items: 100
    };
  }
};
</script>

<style>
.custom-top {
  top: 72px;
}
</style>
