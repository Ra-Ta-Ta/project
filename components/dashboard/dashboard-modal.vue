<template>
    <div
        class="absolute z-30 flex justify-center items-center w-full h-full transform transition duration-300 ease-linear p-4 pt-19 lg:pt-4 shadow-style"
        :class="
            modalIsOpened
                ? ' opacity-100  pointer-events-auto'
                : 'opacity-0  pointer-events-none'
        "
    >
        <div
            class="flex flex-col w-full max-h-full rounded-lg transform transition-all duration-300 ease-linear scale-0 modal-style"
            :class="modalIsOpened ? 'scale-100' : ''"
        >
            <!--header-->
            <div
                class="flex items-center justify-between bg-metallicGold border-b border-oldLace rounded-t-lg p-4"
            >
                <h3
                    class="text-5 font-bold"
                    v-text="isNew ? '新增產品' : '編輯產品'"
                ></h3>

                <Button
                    v-text="'X'"
                    class="ml-auto bg-transparent text-5 leading-none"
                    @click.native="$emit('open-modal')"
                ></Button>
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
                            v-model="tempProduct.title"
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
                                v-model="
                                    tempProduct.is_enabled
                                "
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
                            v-model="tempProduct.category"
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
                            v-model="tempProduct.unit"
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
                            type="text"
                            id="origin_price"
                            placeholder=" "
                            class="inline-block w-full h-full text-wintergreenDream bg-oldLace rounded-lg px-4 input-style"
                            v-model="
                                tempProduct.origin_price
                            "
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
                            type="text"
                            id="price"
                            placeholder=" "
                            class="inline-block w-full h-full text-wintergreenDream bg-oldLace rounded-lg px-4 input-style"
                            v-model="tempProduct.price"
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
                        <textarea
                            type="text"
                            id="description"
                            placeholder=" "
                            class="inline-block w-full h-full text-wintergreenDream bg-oldLace rounded-lg px-4 input-style"
                            v-model="
                                tempProduct.description
                            "
                        ></textarea>
                        <span
                            v-text="'產品描述'"
                            class="absolute top-3 left-4 text-wintergreenDream text-base uppercase pointer-events-none label-style"
                        ></span>
                    </label>
                    <label
                        for="content"
                        class="relative flex w-full h-12"
                    >
                        <textarea
                            type="text"
                            id="content"
                            placeholder=" "
                            class="inline-block w-full h-full text-wintergreenDream bg-oldLace rounded-lg px-4 input-style"
                            v-model="tempProduct.content"
                        ></textarea>
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
                            v-model="tempProduct.imageUrl"
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
                                tempProduct.imageUrl ===
                                    undefined && !isLoading
                            "
                            class="text-wintergreenDream leading-none p-4 pointer-events-none"
                            v-text="
                                '將圖片拖至此處或點擊上傳'
                            "
                        ></p>
                        <img
                            v-if="!isLoading"
                            :src="tempProduct.imageUrl"
                            class="h-full py-4"
                            alt=""
                        />
                        <Spinner
                            v-if="isLoading"
                            class="w-16 h-16"
                        ></Spinner>
                    </label>
                </div>
            </div>
            <!--footer-->
            <div
                class="flex items-center justify-end border-t border-oldLace rounded-b-lg p-4"
            >
                <Button
                    v-text="'取消'"
                    class="text-metallicGold bg-transparent border border-metallicGold hover:bg-ruddyBrown hover:text-white"
                    @click.native="$emit('open-modal')"
                ></Button>
                <Button
                    v-text="'確認'"
                    class="bg-metallicGold hover:bg-ruddyBrown hover:text-white ml-2"
                    @click.native="$emit('update-product')"
                ></Button>
            </div>
        </div>
        <notifications
            group="error"
            position="top center"
            class="fixed"
        />
    </div>
</template>

<script>
export default {
    props: [
        "is-new",
        "open-modal",
        "temp-product",
        "temp-img",
        "update-product",
        "modal-is-opened",
    ],
    data() {
        return {
            isLoading: false,
        };
    },

    methods: {
        async uploadImage() {
            try {
                const vm = this;
                vm.isLoading = true;
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
                    vm.$emit(
                        "update:temp-img",
                        uploadImageResult.imageUrl,
                    );
                    vm.isLoading = false;
                } else {
                    console.log(uploadImageResult);
                    vm.$notify({
                        group: "error",
                        title: "錯誤",
                        type: "error",
                        text: uploadImageResult.message,
                    });
                    vm.isLoading = false;
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
