<template>
    <nav class="flex -space-x-px">
        <a
            href="#"
            class="relative inline-flex items-center px-2 py-1 bg-metallicGold text-oldLace rounded-l-lg border border-fieldDrab"
            :class="{
                disabled: !pagination.has_pre,
            }"
            @click="
                getProducts(pagination.current_page - 1)
            "
        >
            <span class="sr-only">Previous</span>
            <svg
                class="h-5 w-5"
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
            v-for="page in pagination.total_pages"
            :key="page"
            v-text="page"
            class="relative inline-flex items-center px-4 py-1 bg-metallicGold text-oldLace border border-fieldDrab"
            :class="{
                'current-page':
                    pagination.current_page === page,
            }"
            @click="getProducts(page)"
        >
        </a>
        <a
            href="#"
            class="relative inline-flex items-center px-2 py-1 rounded-r-lg bg-metallicGold text-oldLace border border-fieldDrab"
            :class="{
                disabled: !pagination.has_next,
            }"
            @click="
                getProducts(pagination.current_page + 1)
            "
        >
            <span class="sr-only">Next</span>
            <svg
                class="h-5 w-5"
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
.current-page {
    filter: brightness(1.2);
}
.disabled {
    filter: brightness(0.8);
}
</style>
