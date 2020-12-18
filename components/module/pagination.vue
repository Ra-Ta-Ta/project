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
                class="h-7 w-7 transition-all duration-150 ease-linear"
                :class="{
                    'left-arrow-style': pagination.has_pre,
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
            class="relative inline-flex items-center px-3 py-1 bg-metallicGold text-oldLace leading-none cursor-pointer"
            @click="showPageList = !showPageList"
            ref="pageList"
        >
            {{
                pagination.current_page !== undefined
                    ? `${pagination.current_page} / ${pagination.total_pages}`
                    : ""
            }}
            <ul
                class="absolute -top-1 left-1/2 rounded-lg transform origin-bottom -translate-x-1/2 -translate-y-full transition-all duration-150 ease-linear overflow-x-hidden overflow-y-auto list-style"
                :class="
                    showPageList ? 'scale-100' : ' scale-0'
                "
            >
                <li
                    v-for="page in pagination.total_pages"
                    :key="page"
                    v-text="page"
                    class="text-center px-6 py-1"
                    :class="
                        active === page
                            ? 'bg-fieldDrab'
                            : 'bg-metallicGold'
                    "
                    @click="getProducts(page)"
                    @mouseover="active = page"
                    @mouseleave="active = ''"
                ></li>
            </ul>
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
                class="h-7 w-7 transition-all duration-150 ease-linear"
                :class="{
                    'right-arrow-style':
                        pagination.has_next,
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
    data() {
        return { showPageList: false, active: false };
    },
    mounted() {
        const vm = this;
        document.addEventListener(
            "click",
            vm.closePageList,
        );
    },
    beforeDestroy() {
        const vm = this;
        document.removeEventListener(
            "click",
            vm.closePageList,
        );
    },
    computed: {
        ...mapState("product", ["pagination"]),
    },
    methods: {
        ...mapActions("product", ["getProducts"]),
        closePageList(e) {
            const vm = this;
            if (!vm.$refs.pageList.contains(e.target)) {
                vm.showPageList = false;
            }
        },
    },
};
</script>
<style lang="scss" scoped>
.left-arrow-style:hover {
    transform: scale(1.25) translateX(-4px);
    filter: brightness(1.25);
}
.right-arrow-style:hover {
    transform: scale(1.25) translateX(4px);
    filter: brightness(1.25);
}
.disabled {
    filter: brightness(0.75);
}
.list-style {
    max-height: 50vh;
    padding-bottom: 6px;
    &:before {
        content: "";
        position: absolute;
        bottom: 2px;
        left: 50%;
        display: block;
        width: 8px;
        height: 8px;
        background-color: rgba(218, 175, 70, 0.75);
        transform: translateX(-50%) rotate(45deg);
        z-index: -10;
    }
    & li:last-child {
        border-bottom-right-radius: 0.5rem;
        border-bottom-left-radius: 0.5rem;
    }
}
</style>
