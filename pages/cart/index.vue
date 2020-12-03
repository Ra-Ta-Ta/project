<template>
    <Main>
        <template v-slot:content> </template>
    </Main>
</template>

<script>
export default {
    layouts: "default",
    middleware: "authenticated",
};
</script>

<style scoped>
.main-style {
    padding-top: 60px;
}
</style>
