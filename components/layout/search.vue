<template>
    <div
        class="hidden lg:flex items-center h-8 transition-all duration-300 ease-linear overflow-hidden cursor-pointer px-2 search-style"
        :class="{ wobble: search.active }"
        @mouseover="search.active = true"
        @mouseleave="search.active = false"
    >
        <img :src="search.src" class="w-7 h-7 icon-style" />
        <span
            class="hidden lg:inline-block text-custom-white text-base leading-none uppercase tracking-wider pl-2"
            :class="{ 'text-stripes': search.active }"
            v-text="search.title"
        ></span>
    </div>
</template>
<script>
export default {
    data() {
        return {
            search: {
                title: "search",
                src: require("~/assets/images/bg/search.svg"),
                active: "",
            },
        };
    },
};
</script>
<style lang="scss" scoped>
.search-style {
}
.wobble {
    @include wobble;
}
.text-stripes {
    @include text-stripes;
}
</style>
