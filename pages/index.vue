<template>
    <main
        class="w-full m-auto pt-19 lg:pt-4 p-4 grid grid-cols-1 gap-4 main-style"
    >
        <Card :bg-class="'bg-100 header-style'">
            <template v-slot:content> </template>
        </Card>

        <Footer></Footer>
    </main>
</template>

<script>
export default {
    layouts: "default",
    data() {
        return {};
    },
};
</script>

<style scoped></style>
