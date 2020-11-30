<template>
    <div
        class="fixed inset-0 z-30 w-full h-full p-4 pt-19 lg:pt-4 lg:pl-50 flex justify-center items-center transform transition-all duration-300 ease-linear shadow-style"
        :class="
            alertIsOpened
                ? ' opacity-100 pointer-events-auto'
                : 'opacity-0 pointer-events-none '
        "
    >
        <div
            class="flex flex-col w-full max-h-full rounded-lg transform transition-all duration-300 ease-linear modal-style"
            :class="alertIsOpened ? 'scale-100' : 'scale-0'"
        >
            <!--header-->
            <div
                class="flex items-center justify-between bg-ruddyBrown border-b border-oldLace rounded-t-lg p-4"
            >
                <h3
                    class="text-5 font-bold"
                    v-text="'刪除警告'"
                ></h3>
                <Button
                    v-text="'X'"
                    class="ml-auto bg-transparent text-5 leading-none"
                    @click.native="$emit('open-alert')"
                >
                </Button>
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
                <Button
                    v-text="'確定刪除'"
                    class="text-ruddyBrown bg-transparent border border-ruddyBrown hover:border-metallicGold hover:bg-metallicGold hover:text-white"
                    @click.native="$emit('delete-product')"
                ></Button>
                <Button
                    v-text="'取消'"
                    class="bg-ruddyBrown hover:bg-metallicGold hover:text-white ml-2"
                    @click.native="$emit('open-alert')"
                ></Button>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    props: [
        "open-alert",
        "temp-product",
        "delete-product",
        "alert-is-opened",
    ],
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
</style>
