<template>
  <div>
    <div
      class="absolute left-50 custom-style cursor-pointer  transform -translate-x-1/2 border-2 border-oldLace flex justify-center items-center"
    >
      <div
        class="border-2 border-khaki flex justify-center items-end py-1 pr-1 pl-3"
      >
        <h1 class="leading-none text-3xl text-khaki text-center font-bold">
          甜上頭
        </h1>
        <img
          src="../../assets/images/bg/seal.jpg"
          class="w-2 h-2 transform -translate-y-1/2"
        />
      </div>
      <img src="" alt="" />
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      productNum: ""
    };
  }
};
</script>
<style scoped>
.custom-style {
  top: 8px;
  padding: 2px;
}
</style>
