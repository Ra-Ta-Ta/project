<template>
  <div class="w-full rounded-xl p-4 card-style" :class="bgClass">
    <slot name="content1"></slot>
    <slot name="content2"></slot>
    <slot name="content3"></slot>
  </div>
</template>
<script>
export default {
  props: ["bg-class"]
};
</script>
<style scoped>
.card-style {
  max-height: calc(100vh - 98px);
}
</style>
