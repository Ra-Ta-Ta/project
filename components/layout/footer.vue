<template>
    <div
        class="w-full bg-pineTree rounded-xl p-4 footer-style"
    >
        <div class="text-center">
            <div
                class="lg:inline text-khaki text-center tracking-wider whitespace-no-wrap"
                v-text="'SUGAR TONGUE E-News｜電子報訂閱'"
            ></div>
            <input
                type="email"
                name="subscribe"
                placeholder="Enter your email"
                class="w-47 lg:w-64 h-8 inline-block bg-oldLace text-pineTree font-bold tracking-wider placeholder-pineTree rounded-lg pl-2 mt-2 lg:ml-2 mr-2"
            />
            <button
                class="h-8 inline-block bg-khaki rounded-lg text-pineTree text-base font-bold px-4"
                v-text="'訂閱'"
            ></button>
        </div>
        <hr class="mt-5 mb-4 border-dotted" />
        <div
            class="flex flex-col lg:flex-row justify-center items-center"
        >
            <span
                class="lg:inline-block text-oldLace text-center font-sm whitespace-no-wrap"
                v-html="
                    'SUGAR TONGUE.&nbsp;© All Rights Reserved'
                "
            ></span>
            <span
                class="hidden lg:inline text-oldLace font-sm font-bold"
            >
                ｜
            </span>
            <span
                class="lg:inline-block text-oldLace text-center font-sm whitespace-no-wrap"
                v-html="'客服信箱 : info@sugartongue.com'"
            ></span>
            <span
                class="hidden lg:inline text-oldLace font-sm font-bold"
            >
                ｜
            </span>
            <span
                class="lg:inline-block text-oldLace text-center font-sm whitespace-no-wrap"
                v-html="'客服電話 : 07-123-4567'"
            ></span>
        </div>
    </div>
</template>
<script>
export default {};
</script>
<style scoped></style>
