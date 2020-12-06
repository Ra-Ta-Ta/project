<template>
    <div
        class="w-full h-12 flex justify-start items-center transition-all duration-300 ease-linear pl-4 overflow-hidden search-style"
        :class="{ 'nav-active': search.active }"
    >
        <img
            :src="search.src"
            :alt="`${search.id}`"
            class="w-7 h-7 nav-img-style"
        />
        <form class="relative pl-5 pr-2 overflow-hidden">
            <input
                type="text"
                :name="search.id"
                class="w-full text-oldLace text-base leading-none py-4 bg-transparent input-style"
                placeholder=" "
                @focus="search.active = true"
                @blur="search.active = false"
            />
            <span
                class="absolute top-3 left-5 text-base text-oldLace uppercase pointer-events-none label-style"
                v-text="search.placeholder"
            ></span>
        </form>
    </div>
</template>
<script>
export default {
    data() {
        return {
            search: {
                placeholder: "search...",
                src: require("~/assets/images/bg/search.svg"),
                id: "search",
                active: false,
            },
        };
    },
};
</script>
<style lang="scss" scoped>
.search-style {
    background-color: $search-color;
}
.nav-active {
    @include nav-active;
}
.input-style {
    + .label-style {
        @include label;
    }
    &:focus + .label-style {
        @include input-focus-label;
    }
    &:not(:placeholder-shown) + .label-style {
        @include input-blur-label;
    }
}
</style>
