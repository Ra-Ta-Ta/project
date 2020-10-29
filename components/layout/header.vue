<template>
    <header class="fixed z-20 w-full h-15 header-style">
        <input
            type="checkbox"
            id="toggler"
            class="hidden"
        />
        <label
            for="toggler"
            class="absolute z-30 top-4 left-4 w-7 h-7 toggler-style"
        >
            <span
                v-for="(line, i) in 3"
                :key="`line${i}`"
                class="absolute block w-full h-1 rounded-xl bg-oldLace line-style"
            ></span>
        </label>
        <Logo
            class="absolute z-30 top-1 left-1/2 transform -translate-x-1/2"
        ></Logo>
        <Cart
            class="absolute z-30 right-4 w-8 h-8 cart-style"
        ></Cart>
        <Nav class="absolute bottom-0 nav-style"></Nav>
    </header>
</template>
<script>
export default {};
</script>
<style lang="scss" scoped>
.header-style {
    background-image: linear-gradient(
            rgba(34, 50, 22, 0.8),
            rgba(34, 50, 22, 0.8)
        ),
        url("~assets/images/bg/flower.png"),
        url("~assets/images/bg/bg.jpg");
    background-size: 300px;
    transform-style: preserve-3d;
}

#toggler {
    & ~ .toggler-style .line-style,
    & ~ .nav-style {
        transition: all 0.5s ease;
    }
    & ~ .toggler-style .line-style:nth-child(1) {
        top: 2px;
    }
    & ~ .toggler-style .line-style:nth-child(2) {
        top: 12px;
        left: 50%;
        transform: translate(-50%, 0);
    }
    & ~ .toggler-style .line-style:nth-child(3) {
        top: 22px;
    }
    & ~ .nav-style {
        transform: translate3d(0px, -100%, -1px);
    }
    &:checked ~ .toggler-style .line-style:nth-child(1) {
        top: 12px;
        transform: rotate(405deg);
    }
    &:checked ~ .toggler-style .line-style:nth-child(2) {
        width: 0;
    }
    &:checked ~ .toggler-style .line-style:nth-child(3) {
        top: 12px;
        transform: rotate(-405deg);
    }
    &:checked ~ .nav-style {
        transform: translate3d(0px, 100%, -1px);
    }
}
</style>
