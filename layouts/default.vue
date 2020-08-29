<template>
  <div class="relative h-full overflow-hidden">
    <BackgroundBack> </BackgroundBack>
    <BackgroundFront>
      <template v-slot:nuxt>
        <Nuxt />
      </template>
    </BackgroundFront>
  </div>
</template>

<script>
import BackgroundFront from "../components/background/backgroundFront";
import BackgroundBack from "../components/background/backgroundBack";

export default {
  components: {
    BackgroundFront: BackgroundFront,
    BackgroundBack: BackgroundBack
  }
};
</script>

<style scoped></style>
