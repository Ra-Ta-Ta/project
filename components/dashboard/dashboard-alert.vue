<template>
    <div
        class="fixed inset-0 z-30 w-full h-full p-4 pt-19 lg:pt-4 lg:pl-50 flex justify-center items-center shadow-style"
    >
        <div
            class="flex flex-col w-full h-full lg:h-auto rounded-lg modal-style"
        >
            <!--header-->
            <div
                class="flex items-center justify-between bg-ruddyBrown border-b border-oldLace rounded-t-lg p-4"
            >
                <h3
                    class="text-5 font-bold"
                    v-text="'刪除警告'"
                ></h3>
                <button
                    class="ml-auto bg-transparent border-0 text-black text-5 leading-none"
                    @click="$emit('open-alert')"
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
                <p
                    class="text-lg text-ruddyBrown leading-none"
                >
                    確定要刪除<strong>{{
                        `&quot;${tempProduct.title}&quot;`
                    }}</strong
                    >嗎?
                </p>
            </div>
            <!--footer-->
            <div
                class="flex items-center justify-end border-t border-oldLace rounded-b-lg p-4"
            >
                <button
                    class="text-ruddyBrown bg-transparent border border-ruddyBrown hover:border-metallicGold hover:bg-metallicGold hover:text-white font-bold px-4 py-2 rounded-lg transform transition-all duration-500 ease-linear"
                    type="button"
                    style="transition: all 0.15s ease"
                    v-text="'確定刪除'"
                    @click="$emit('delete-product')"
                ></button>
                <button
                    class="bg-ruddyBrown hover:bg-metallicGold hover:text-white font-bold px-4 py-2 ml-2 rounded-lg transform transition-all duration-500 ease-linear"
                    type="button"
                    style="transition: all 0.15s ease"
                    v-text="'取消'"
                    @click="$emit('open-alert')"
                ></button>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    props: ["open-alert", "temp-product", "delete-product"],
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
</style>
