<template>
    <div
        class="w-full bg-pineTree rounded-xl p-4 footer-style"
    >
        <div
            class="w-full m-auto flex flex-col lg:flex-row justify-center items-center"
        >
            <div
                class="flex flex-no-wrap lg:mr-4 lg:mb-0 mb-1"
            >
                <span
                    class="text-khaki tracking-wider whitespace-no-wrap"
                    >SUGAR TONGUE E-News｜</span
                ><span
                    class="text-oldLace tracking-wider whitespace-no-wrap"
                    >電子報訂閱</span
                >
            </div>
            <div class="flex justify-center">
                <input
                    type="email"
                    name="subscribe"
                    placeholder="Enter your email"
                    class="w-46 lg:w-64 custom-style bg-oldLace text-pineTree font-bold tracking-wider placeholder-pineTree rounded-lg pl-2 mr-2"
                />
                <button
                    class="h-8 bg-khaki rounded-lg text-pineTree text-base font-bold pt-1 px-3"
                >
                    訂閱
                </button>
            </div>
        </div>
        <hr class="mt-3 mb-2 border-dotted" />
        <div
            class="w-full flex flex-col lg:flex-row justify-center items-center"
        >
            <p class="text-oldLace font-sm flex flex-wrap">
                <span class="whitespace-no-wrap"
                    >SUGAR TONGUE .&nbsp;</span
                ><span class="whitespace-no-wrap"
                    >© All Rights Reserved</span
                >
            </p>
            <p
                class="hidden lg:inline text-oldLace font-sm font-bold"
            >
                ｜
            </p>
            <p class="text-oldLace font-sm flex flex-wrap">
                <span class="whitespace-no-wrap"
                    >客服信箱&nbsp;</span
                ><span class="whitespace-no-wrap"
                    >info@tianshangtou.com</span
                >
            </p>
            <p
                class="hidden lg:inline text-oldLace font-sm font-bold"
            >
                ｜
            </p>
            <p class="text-oldLace font-sm flex flex-wrap">
                <span class="whitespace-no-wrap"
                    >客服電話&nbsp;</span
                ><span class="whitespace-no-wrap"
                    >07-123-4567</span
                >
            </p>
        </div>
    </div>
</template>
<script>
export default {};
</script>
<style scoped>
.footer-style {
}
</style>
