<template>
    <Main>
        <template v-slot:content>
            <div
                class="w-full h-full max-h-full rounded-xl p-4 text-darkBrown bg-desertSand"
            >
                <table
                    cellPadding="4"
                    class="w-full h-full text-left mb-3 table-style"
                >
                    <thead class="block">
                        <tr
                            class="table table-fixed w-full border-t border-b border-darkBrown"
                        >
                            <th>分類</th>
                            <th>品項</th>
                            <th>原價</th>
                            <th>售價</th>
                            <th>狀態</th>
                            <th>編輯</th>
                        </tr>
                    </thead>
                    <tbody
                        class="block w-full h-full overflow-x-hidden overflow-y-auto tbody-style"
                    >
                        <tr
                            v-for="product in products"
                            :key="product.id"
                            class="table table-fixed w-full border-b border-fieldDrab"
                        >
                            <td
                                v-text="product.category"
                            ></td>
                            <td v-text="product.title"></td>
                            <td
                                v-text="
                                    $currency(
                                        product.origin_price,
                                    )
                                "
                                class=""
                            ></td>
                            <td
                                v-text="
                                    $currency(product.price)
                                "
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
                            <td
                                class="grid gap-1 grid-cols-1 md:grid-cols-2"
                            >
                                <Button
                                    v-text="'編輯'"
                                    class="text-oldLace bg-fieldDrab"
                                    @click.native="
                                        openModal(
                                            false,
                                            product,
                                        )
                                    "
                                >
                                </Button>
                                <Button
                                    v-text="'刪除'"
                                    class="text-oldLace bg-ruddyBrown"
                                    @click.native="
                                        openAlert(product)
                                    "
                                >
                                </Button>
                            </td>
                        </tr>
                    </tbody>
                </table>
                <div class="flex justify-between h-10">
                    <Pagination
                        class="justify-start"
                    ></Pagination>
                    <Button
                        v-text="'建立新商品'"
                        class="text-oldLace bg-wintergreenDream ml-4"
                        @click.native="openModal(true)"
                    >
                    </Button>
                </div>
            </div>

            <DashboardModal
                @open-modal="openModal"
                @update-product="updateProduct"
                :is-new="modal.isNew"
                :temp-product="tempProduct"
                :temp-img.sync="tempProduct.imageUrl"
                :modal-is-opened="modal.isOpened"
            ></DashboardModal>
            <DashboardAlert
                @open-alert="openAlert"
                @delete-product="deleteProduct"
                :temp-product="tempProduct"
                :alert-is-opened="alert.isOpened"
            ></DashboardAlert>
        </template>
    </Main>
</template>

<script>
import { mapState, mapActions } from "vuex";
export default {
    layout: "dashboard",
    data() {
        return {
            tempProduct: {},
            modal: {
                isOpened: false,
                isNew: false,
            },
            alert: { isOpened: false },
        };
    },
    mounted() {
        const vm = this;
        vm.getProducts();
    },
    computed: {
        ...mapState("user", ["uid"]),
        ...mapState("product", ["products"]),
    },
    methods: {
        ...mapActions("product", ["getProducts"]),
        async updateProduct() {
            try {
                const vm = this;
                const api = vm.modal.isNew
                    ? `${process.env.baseUrl}/api/sugar-tongue/admin/product`
                    : `${process.env.baseUrl}/api/sugar-tongue/admin/product/${vm.tempProduct.id}`;
                const method = vm.modal.isNew
                    ? "$post"
                    : "$put";
                const updateProductResult = await vm.$axios[
                    method
                ](api, { data: vm.tempProduct });
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
                const deleteProductResult = await vm.$axios.$delete(
                    `${process.env.baseUrl}/api/sugar-tongue/admin/product/${vm.tempProduct.id}`,
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
                vm.tempProduct = {};
                vm.modal.isNew = true;
            } else {
                vm.tempProduct = Object.assign({}, product);
                vm.modal.isNew = false;
            }
            vm.modal.isOpened = !vm.modal.isOpened;
        },
        openAlert(product) {
            const vm = this;
            vm.tempProduct = Object.assign({}, product);
            vm.alert.isOpened = !vm.alert.isOpened;
        },
    },
};
</script>

<style lang="scss" scoped>
.table-style {
    height: calc(100% - 52px);
}
.tbody-style {
    height: calc(100% - 38px);
}
</style>
