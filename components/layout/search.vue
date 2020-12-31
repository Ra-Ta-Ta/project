<template>
    <div
        class="absolute z-50 right-30 w-22 h-8 flex justify-between items-center transition-all duration-300 ease-linear overflow-hidden search-style"
        :class="{ 'icon-active': search.active }"
        @mouseover="search.active = true"
        @mouseleave="search.active = false"
    >
        <img
            :src="search.src"
            :alt="`${search.id}`"
            class="w-7 h-7 nav-img-style"
        />
        <span
            class="hidden md:inline-block text-oldLace text-base leading-none uppercase"
            :class="{
                'title-active': search.active,
            }"
            v-text="
                search.active
                    ? search.cnTitle
                    : search.engTitle
            "
        ></span>
    </div>
</template>
<script>
export default {
    data() {
        return {
            search: {
                engTitle: "search",
                cnTitle: "搜尋",
                src: require("~/assets/images/bg/search.svg"),
                alt: "search",
                active: "",
            },
        };
    },
};
</script>
<style lang="scss" scoped>
.search-style {
    top: 14px;
}
.icon-active {
    @include icon-active;
}
.title-active {
    @include title-active;
}
</style>
