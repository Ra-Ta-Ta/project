<template>
    <header
        class="fixed z-10 top-0 left-0 w-50 h-full flex-col justify-start items-center sidebar-style"
    >
        <Logo class="py-10"></Logo>
        <Nav></Nav>
    </header>
</template>

<script>
import { mapState, mapActions } from "vuex";
export default {
    data() {
        return {};
    },
};
</script>

<style scoped>
.sidebar-style {
    background-image: linear-gradient(
            rgba(34, 50, 22, 0.75),
            rgba(34, 50, 22, 0.75)
        ),
        url("~assets/images/bg/flower.png"),
        url("~assets/images/bg/bg.jpg");
    background-size: 300px;
}
</style>
