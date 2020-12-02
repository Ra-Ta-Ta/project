<template>
    <nav class="flex">
        <a
            href="#"
            class="relative inline-flex items-center p-1 bg-metallicGold text-oldLace rounded-l-lg"
            :class="{
                disabled: !pagination.has_pre,
            }"
            @click="
                getProducts(pagination.current_page - 1)
            "
        >
            <svg
                class="h-7 w-7"
                :class="{
                    'arrow-style': pagination.has_pre,
                }"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 20 20"
                fill="currentColor"
                aria-hidden="true"
            >
                <path
                    fill-rule="evenodd"
                    d="M12.707 5.293a1 1 0 010 1.414L9.414 10l3.293 3.293a1 1 0 01-1.414 1.414l-4-4a1 1 0 010-1.414l4-4a1 1 0 011.414 0z"
                    clip-rule="evenodd"
                />
            </svg>
        </a>
        <a
            href="#"
            v-text="
                `${pagination.current_page} / ${pagination.total_pages}`
            "
            class="relative inline-flex items-center px-3 py-1 bg-metallicGold text-oldLace leading-none"
            @click="getProducts(page)"
        >
        </a>
        <a
            href="#"
            class="relative inline-flex items-center p-1 rounded-r-lg bg-metallicGold text-oldLace"
            :class="{
                disabled: !pagination.has_next,
            }"
            @click="
                getProducts(pagination.current_page + 1)
            "
        >
            <svg
                class="h-7 w-7"
                :class="{
                    'arrow-style': pagination.has_next,
                }"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 20 20"
                fill="currentColor"
                aria-hidden="true"
            >
                <path
                    fill-rule="evenodd"
                    d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z"
                    clip-rule="evenodd"
                />
            </svg>
        </a>
    </nav>
</template>
<script>
import { mapState, mapActions } from "vuex";
export default {
    mounted() {
        const vm = this;
        vm.getProducts();
    },
    computed: {
        ...mapState("product", ["pagination"]),
    },
    methods: {
        ...mapActions("product", ["getProducts"]),
    },
};
</script>
<style scoped>
.arrow-style:hover {
    transform: scale(1.25);
    filter: brightness(1.25);
    transition: all 0.3s ease;
}
.disabled {
    filter: brightness(0.75);
}
</style>
