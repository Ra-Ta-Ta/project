<template>
    <div
        class="w-full h-12 flex justify-start items-center transition-all duration-300 ease-linear pl-4 bg-oldMossGreen cursor-pointer overflow-hidden search-style"
    >
        <img
            :src="search.src"
            :alt="`${search.alt}`"
            class="w-7 h-7"
        />
        <input
            type="text"
            class="text-oldLace text-base leading-none uppercase py-4 pl-5 bg-transparent search-input-style"
            placeholder="search..."
        />
    </div>
</template>
<script>
export default {
    data() {
        return {
            search: {
                src: require("~/assets/images/bg/search.svg"),
                alt: "search",
            },
        };
    },
};
</script>
<style scoped>
.search-input-style::placeholder {
    color: rgba(250, 245, 232, 0.75);
}
</style>
