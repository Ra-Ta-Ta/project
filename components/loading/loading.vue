<template lang="html">
    <div class="loading-page" v-if="loading">
        <p>Loading...</p>
    </div>
</template>

<script>
export default {
    data: () => ({
        loading: false,
    }),
    methods: {
        start() {
            this.loading = true;
        },
        finish() {
            this.loading = false;
        },
    },
};
</script>

<style scoped>
.loading-page {
    position: fixed;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    width: 100%;
    height: 100%;
    background: rgba(255, 255, 255, 0.8);
    text-align: center;
    font-size: 30px;
    font-family: sans-serif;
}
</style>
