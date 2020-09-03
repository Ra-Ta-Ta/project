<template>
  <div class="custom-top ">
    <Card></Card>
  </div>
</template>

<script>
import Card from "../components/card/card";
export default {
  layouts: "default",
  components: {
    Card: Card
  },
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
