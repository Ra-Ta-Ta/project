const state = () => {
    return {
        products: [],
        pagination: {},
    };
};

const actions = {
    async getProducts({ commit }, page = 1) {
        try {
            const vm = this;
            const getProductsResult = await vm.$axios.$get(
                `${process.env.baseUrl}/api/sugar-tongue/products?page=${page}`,
            );
            if (getProductsResult.success) {
                console.log(getProductsResult);
                commit("setResult", getProductsResult);
            } else {
                console.log(getProductsResult);
            }
        } catch (error) {
            throw new Error(error);
        }
    },
};

const mutations = {
    setResult(state, getProductsResult) {
        state.products = getProductsResult.products;
        state.pagination = getProductsResult.pagination;
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
