<template>
    <div
        class="fixed inset-0 z-30 w-full h-full p-4 pt-19 lg:pt-4 lg:pl-50 flex justify-center items-center shadow-style"
    >
        <div
            class="flex flex-col w-full h-full lg:h-auto rounded-lg modal-style"
        >
            <!--header-->
            <div
                class="flex items-center justify-between bg-metallicGold border-b border-oldLace rounded-t-lg p-4"
            >
                <h3
                    class="text-5 font-bold"
                    v-text="isNew ? '新增產品' : '編輯產品'"
                ></h3>
                <button
                    class="ml-auto bg-transparent border-0 text-black text-5 leading-none"
                    @click="$emit('open-modal')"
                >
                    <span
                        class="bg-transparent text-oldLace opacity-5 h-6 w-6 font-bold block"
                        v-text="'X'"
                    >
                    </span>
                </button>
            </div>
            <!--body-->
            <div
                class="p-4 overflow-x-hidden overflow-y-auto"
            >
                <div
                    class="grid grid-cols-1 lg:grid-cols-2 gap-4"
                >
                    <label
                        for="title"
                        class="relative flex w-full h-12"
                    >
                        <input
                            type="text"
                            id="title"
                            placeholder=" "
                            class="inline-block w-full h-full text-wintergreenDream bg-oldLace rounded-lg px-4 input-style"
                            v-model="product.title"
                        />
                        <span
                            v-text="'標題'"
                            class="absolute top-3 left-4 text-wintergreenDream text-base uppercase pointer-events-none label-style"
                        ></span>
                    </label>
                    <div
                        class="flex items-center w-full h-12 px-4 bg-oldLace rounded-lg"
                    >
                        <span
                            v-text="'是否啟用'"
                            class="text-wintergreenDream leading-none mr-2"
                        ></span>
                        <label
                            for="is_enabled"
                            class="relative w-19 h-6 bg-wintergreenDream rounded-xl cursor-pointer is_enabled-style"
                        >
                            <input
                                type="checkbox"
                                id="is_enabled"
                                class="invisible"
                                v-model="product.is_enabled"
                                :true-value="1"
                                :false-value="0"
                            />
                            <div
                                class="absolute z-10 w-9 h-5 rounded-xl pointer-events-none transition-all duration-300 ease-linear switch-style"
                            ></div>
                        </label>
                    </div>

                    <label
                        for="category"
                        class="relative flex w-full h-12"
                    >
                        <input
                            type="text"
                            id="category"
                            placeholder=" "
                            class="inline-block w-full h-full text-wintergreenDream bg-oldLace rounded-lg px-4 input-style"
                            v-model="product.category"
                        />
                        <span
                            v-text="'分類'"
                            class="absolute top-3 left-4 text-wintergreenDream text-base uppercase pointer-events-none label-style"
                        ></span>
                    </label>
                    <label
                        for="unit"
                        class="relative flex w-full h-12"
                    >
                        <input
                            type="text"
                            id="unit"
                            placeholder=" "
                            class="inline-block w-full h-full text-wintergreenDream bg-oldLace rounded-lg px-4 input-style"
                            v-model="product.unit"
                        />
                        <span
                            v-text="'單位'"
                            class="absolute top-3 left-4 text-wintergreenDream text-base uppercase pointer-events-none label-style"
                        ></span>
                    </label>

                    <label
                        for="origin_price"
                        class="relative flex w-full h-12"
                    >
                        <input
                            type="number"
                            id="origin_price"
                            placeholder=" "
                            class="inline-block w-full h-full text-wintergreenDream bg-oldLace rounded-lg px-4 input-style"
                            v-model="product.origin_price"
                        />
                        <span
                            v-text="'原價'"
                            class="absolute top-3 left-4 text-wintergreenDream text-base uppercase pointer-events-none label-style"
                        ></span>
                    </label>
                    <label
                        for="price"
                        class="relative flex w-full h-12"
                    >
                        <input
                            type="number"
                            id="price"
                            placeholder=" "
                            class="inline-block w-full h-full text-wintergreenDream bg-oldLace rounded-lg px-4 input-style"
                            v-model="product.price"
                        />
                        <span
                            v-text="'售價'"
                            class="absolute top-3 left-4 text-wintergreenDream text-base uppercase pointer-events-none label-style"
                        ></span>
                    </label>

                    <label
                        for="description"
                        class="relative flex w-full h-12"
                    >
                        <input
                            type="text"
                            id="description"
                            placeholder=" "
                            class="inline-block w-full h-full text-wintergreenDream bg-oldLace rounded-lg px-4 input-style"
                            v-model="product.description"
                        />
                        <span
                            v-text="'產品描述'"
                            class="absolute top-3 left-4 text-wintergreenDream text-base uppercase pointer-events-none label-style"
                        ></span>
                    </label>
                    <label
                        for="content"
                        class="relative flex w-full h-12"
                    >
                        <input
                            type="text"
                            id="content"
                            placeholder=" "
                            class="inline-block w-full h-full text-wintergreenDream bg-oldLace rounded-lg px-4 input-style"
                            v-model="product.content"
                        />
                        <span
                            v-text="'產品內容'"
                            class="absolute top-3 left-4 text-wintergreenDream text-base uppercase pointer-events-none label-style"
                        ></span>
                    </label>

                    <label
                        for="imageUrl"
                        class="relative flex w-full h-12 col-start-1 col-end-2 lg:col-end-3"
                    >
                        <input
                            type="text"
                            id="imageUrl"
                            placeholder=" "
                            class="inline-block w-full h-full text-wintergreenDream bg-oldLace rounded-lg px-4 input-style"
                            v-model="product.imageUrl"
                        />
                        <span
                            v-text="'圖片網址'"
                            class="absolute top-3 left-4 text-wintergreenDream text-base uppercase pointer-events-none label-style"
                        ></span>
                    </label>
                    <label
                        for="customFile"
                        class="relative flex justify-center items-center w-full h-24 bg-oldLace hover:bg-metallicGold rounded-lg transform transition-all duration-150 ease-linear col-start-1 col-end-2 lg:col-end-3"
                    >
                        <input
                            type="file"
                            id="customFile"
                            class="absolute z-10 inset-0 w-full h-full opacity-0"
                            ref="files"
                            @change="uploadImage"
                        />
                        <p
                            v-if="
                                product.imageUrl ===
                                undefined
                            "
                            class="text-wintergreenDream leading-none p-4 pointer-events-none"
                            v-text="'拖曳圖片到此處上傳'"
                        ></p>
                        <img
                            v-else
                            :src="product.imageUrl"
                            class="h-full py-4"
                            alt=""
                        />
                    </label>
                </div>
            </div>
            <!--footer-->
            <div
                class="flex items-center justify-end border-t border-oldLace rounded-b-lg p-4"
            >
                <button
                    class="text-metallicGold bg-transparent border border-metallicGold hover:bg-ruddyBrown hover:text-white font-bold px-4 py-2 rounded-lg transform transition-all duration-150 ease-linear"
                    type="button"
                    style="transition: all 0.15s ease"
                    @click="$emit('open-modal')"
                    v-text="'取消'"
                ></button>
                <button
                    class="bg-metallicGold hover:bg-ruddyBrown hover:text-white font-bold px-4 py-2 ml-2 rounded-lg transform transition-all duration-150 ease-linear"
                    type="button"
                    style="transition: all 0.15s ease"
                    v-text="'確認'"
                    @click="$emit('update-product')"
                ></button>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    props: [
        "is-new",
        "open-modal",
        "temp-product",
        "update-product",
    ],
    data() {
        return {
            product: this.tempProduct,
        };
    },
    methods: {
        async uploadImage() {
            try {
                const vm = this;
                const uploadedImage =
                    vm.$refs.files.files[0];
                const formData = new FormData();
                formData.append(
                    "file-to-upload",
                    uploadedImage,
                );
                const uploadImageResult = await vm.$axios.$post(
                    `${process.env.baseUrl}/api/sugar-tongue/admin/upload`,
                    formData,
                    {
                        headers: {
                            "Content-Type":
                                "multipart/form-data",
                        },
                    },
                );
                if (uploadImageResult.success) {
                    console.log(uploadImageResult);
                    vm.$set(
                        vm.product,
                        "imageUrl",
                        uploadImageResult.imageUrl,
                    );
                } else {
                    console.log(uploadImageResult);
                }
            } catch (error) {
                throw new Error(error);
            }
        },
    },
};
</script>

<style lang="scss" scoped>
.modal-style {
    background-image: linear-gradient(
            rgba(250, 245, 232, 0.75),
            rgba(250, 245, 232, 0.75)
        ),
        url("https://uploads-ssl.webflow.com/57516ebd5650b01552cd9f03/5d30079985ef6117dc5b983d_Paper02.jpg");
    background-size: 300px;
    max-width: 576px;
}
.shadow-style {
    background-color: rgba(0, 0, 0, 0.25);
}
.input-style {
    + .label-style {
        @include label;
    }
    &:focus + .label-style {
        @include input-focus-label(
            rgba(218, 175, 70, 0.75)
        );
    }
    &:not(:placeholder-shown) + .label-style {
        @include input-blur-label(rgba(88, 130, 128, 0.75));
    }
}
.is_enabled-style {
    &:before {
        content: "ON";
        color: rgba(250, 245, 232, 0.75);
        position: absolute;
        top: 4px;
        left: 10px;
        font-weight: bold;
        line-height: 1;
    }
    &:after {
        content: "OFF";
        color: rgba(87, 67, 37, 0.75);
        position: absolute;
        top: 4px;
        right: 8px;
        font-weight: bold;
        line-height: 1;
    }

    .switch-style {
        top: 2px;
        left: 2px;
        background-color: rgba(250, 245, 232, 1);
    }
    input:checked + .switch-style {
        left: 38px;
    }
}
</style>
