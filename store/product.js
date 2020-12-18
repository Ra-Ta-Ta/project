const state = () => {
    return {
        products: [],
        product: {},
        pagination: {},
    };
};

const actions = {
    async getProducts({ commit }, page = 1) {
        try {
            const vm = this;
            window.$nuxt.$loading.loading = true;
            const getProductsResult = await vm.$axios.$get(
                `${process.env.baseUrl}/api/sugar-tongue/products?page=${page}`,
            );
            if (getProductsResult.success) {
                console.log(getProductsResult);
                window.$nuxt.$loading.loading = false;
                commit(
                    "setProductsResult",
                    getProductsResult,
                );
            } else {
                console.log(getProductsResult);
                window.$nuxt.$loading.loading = false;
            }
        } catch (error) {
            throw new Error(error);
        }
    },
    async getProduct({ commit }, id) {
        try {
            const vm = this;
            const getProductResult = await vm.$axios.$get(
                `${process.env.baseUrl}/api/sugar-tongue/product/${id}`,
            );
            if (getProductResult.success) {
                console.log(getProductResult);
                commit(
                    "setProductResult",
                    getProductResult,
                );
            } else {
                console.log(getProductResult);
            }
        } catch (error) {
            throw new Error(error);
        }
    },
};

const mutations = {
    setProductsResult(state, getProductsResult) {
        state.products = getProductsResult.products;
        state.pagination = getProductsResult.pagination;
    },
    setProductResult(state, getProductResult) {
        state.product = getProductResult.product;
    },
};

const getters = {};

export default {
    namespaced: true,
    state,
    actions,
    mutations,
    getters,
};
