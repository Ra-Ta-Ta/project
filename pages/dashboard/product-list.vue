<template>
    <main
        class="w-full h-full m-auto p-4 pt-19 lg:pt-4 grid grid-cols-1 gap-4 main-style"
    >
        <Card class="h-full text-darkBrown bg-desertSand">
            <template v-slot:content>
                <table
                    cellpadding="8"
                    class="w-full table-auto text-left"
                >
                    <thead>
                        <tr
                            class="border-t border-b border-darkBrown"
                        >
                            <th width="120">分類</th>
                            <th width="120">品項</th>
                            <th width="80">原價</th>
                            <th width="80">售價</th>
                            <th width="80">狀態</th>
                            <th width="80">編輯</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr
                            v-for="product in products"
                            :key="product.id"
                            class="border-t border-b border-fieldDrab"
                        >
                            <td
                                v-text="product.category"
                            ></td>
                            <td v-text="product.title"></td>
                            <td
                                v-text="
                                    product.origin_price
                                "
                                class=""
                            ></td>
                            <td
                                v-text="product.price"
                                class=""
                            ></td>
                            <td>
                                <span
                                    v-if="
                                        product.is_enabled
                                    "
                                    v-text="'啟用'"
                                    class="text-wintergreenDream"
                                ></span>
                                <span
                                    v-else
                                    v-text="'停用'"
                                    class="text-ruddyBrown"
                                ></span>
                            </td>
                            <td>
                                <button
                                    v-text="'編輯'"
                                    class="text-oldLace bg-fieldDrab rounded-lg px-2 py-1"
                                    @click="
                                        openModal(
                                            false,
                                            product,
                                        )
                                    "
                                ></button>
                                <button
                                    v-text="'刪除'"
                                    class="text-oldLace bg-ruddyBrown rounded-lg px-2 py-1"
                                    @click="
                                        openAlert(product)
                                    "
                                ></button>
                            </td>
                        </tr>
                    </tbody>
                </table>
                <button
                    v-text="'建立新的產品'"
                    class="absolute bottom-8 right-8 text-oldLace bg-wintergreenDream rounded-lg px-2 py-1"
                    @click="openModal(true)"
                ></button>
            </template>
        </Card>
        <DashboardModal
            @open-modal="openModal"
            @update-product="updateProduct"
            :is-new="modal.isNew"
            :temp-product="modal.tempProduct"
            v-if="modal.isOpened"
        ></DashboardModal>
        <DashboardAlert
            @open-alert="openAlert"
            @delete-product="deleteProduct"
            :temp-product="alert.tempProduct"
            v-if="alert.isOpened"
        ></DashboardAlert>
    </main>
</template>

<script>
import { mapState } from "vuex";
export default {
    layout: "dashboard",
    data() {
        return {
            products: [],

            modal: {
                isOpened: false,
                isNew: false,
                tempProduct: {},
            },
            alert: { isOpened: false, tempProduct: {} },
        };
    },
    created() {
        const vm = this;
        vm.getProducts();
    },
    computed: {
        ...mapState("signInStatus", ["uid"]),
    },
    methods: {
        async getProducts() {
            try {
                const vm = this;
                const getProductsResult = await vm.$axios.$get(
                    `${process.env.baseUrl}/api/sugar-tongue/products`,
                );
                if (getProductsResult.success) {
                    vm.products =
                        getProductsResult.products;
                } else {
                    console.log(getProductsResult);
                }
            } catch (error) {
                throw new Error(error);
            }
        },
        async updateProduct() {
            try {
                const vm = this;
                const api = vm.modal.isNew
                    ? `${process.env.baseUrl}/api/sugar-tongue/admin/product`
                    : `${process.env.baseUrl}/api/sugar-tongue/admin/product/${vm.modal.tempProduct.id}`;
                const method = vm.modal.isNew
                    ? "$post"
                    : "$put";
                const updateProductResult = await vm.$axios[
                    method
                ](api, { data: vm.modal.tempProduct });
                if (updateProductResult.success) {
                    console.log(updateProductResult);
                    vm.openModal();
                    vm.getProducts();
                } else {
                    console.log(updateProductResult);
                    vm.openModal();
                    vm.getProducts();
                }
            } catch (error) {
                throw new Error(error);
            }
        },
        async deleteProduct() {
            try {
                const vm = this;
                const deleteProductResult = await vm.$axios.delete(
                    `${process.env.baseUrl}/api/sugar-tongue/admin/product/${vm.alert.tempProduct.id}`,
                );
                if (deleteProductResult.success) {
                    console.log(deleteProductResult);
                    vm.openAlert();
                    vm.getProducts();
                } else {
                    console.log(deleteProductResult);
                    vm.openAlert();
                    vm.getProducts();
                }
            } catch (error) {
                throw new Error(error);
            }
        },
        openModal(isNew, product) {
            const vm = this;
            if (isNew) {
                vm.modal.tempProduct = {};
                vm.modal.isNew = true;
            } else {
                vm.modal.tempProduct = Object.assign(
                    {},
                    product,
                );
                vm.modal.isNew = false;
            }
            vm.modal.isOpened = !vm.modal.isOpened;
        },
        openAlert(product) {
            const vm = this;
            vm.alert.tempProduct = product;
            vm.alert.isOpened = !vm.alert.isOpened;
        },
    },
};
</script>

<style scoped></style>
