<template>
    <div
        class="w-full h-12 flex justify-start items-center transition-all duration-300 ease-linear pl-4 bg-oldMossGreen cursor-pointer overflow-hidden search-style"
        @mouseover="search.active = true"
        @mouseleave="search.active = false"
    >
        <img
            :src="search.src"
            :alt="`${search.alt}`"
            class="w-7 h-7"
        />
        <input
            type="text"
            class="text-oldLace text-base leading-none uppercase py-4 pl-5 bg-transparent search-input-style"
            :class="{ 'title-active': search.active }"
            :placeholder="
                search.active
                    ? search.cnTitle
                    : search.engTitle
            "
        />
    </div>
</template>
<script>
export default {
    data() {
        return {
            search: {
                engTitle: "search...",
                cnTitle: "站內搜尋...",
                src: require("~/assets/images/bg/search.svg"),
                alt: "search",
                active: false,
            },
        };
    },
};
</script>
<style lang="scss" scoped>
.search-input-style {
    &::placeholder {
        color: rgba(250, 245, 232, 0.75);
    }
    &:focus::placeholder {
        color: transparent;
    }
}
.title-active {
    animation: title-active 0.3s;
}
@keyframes title-active {
    0% {
        transform: translateX(10px);
        opacity: 0;
    }
    100% {
        transform: translateX(0px);
        opacity: 1;
    }
}
</style>
