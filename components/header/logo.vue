<template>
  <div class="z-10 w-9 h-9  z-10 custom-right cursor-pointer " :style="active">
    <p></p>
  </div>
</template>

<script>
export default {
  props: ["active"],
  data() {
    return {
      logo: [{ img: "../../assets/images/bg/logo.png" }]
    };
  }
};
</script>

<style scoped>
.custom-right {
  right: 15px;
}
.toggler-h {
  height: 6px;
}
</style>
