<template>
    <div
        class="w-full bg-darkBrown rounded-xl p-4 footer-style"
    >
        <div class="text-center">
            <div
                class="lg:inline text-satinSheenGold text-center tracking-wider whitespace-no-wrap"
                v-text="'SUGAR TONGUE E-News｜電子報訂閱'"
            ></div>
            <input
                type="email"
                name="subscribe"
                placeholder="Enter your email"
                class="w-47 lg:w-64 h-8 inline-block bg-custom-white text-darkBrown placeholder-darkBrown tracking-wider rounded-lg pl-2 mt-2 lg:ml-2 mr-2 email-style"
                :class="
                    active
                        ? 'placeholder-transparent'
                        : 'placeholder-darkBrown'
                "
                @focus="active = true"
                @blur="active = false"
            />
            <Button
                v-text="'訂閱'"
                class="bg-satinSheenGold text-darkBrown px-4"
            >
            </Button>
        </div>
        <hr class="mt-5 mb-4 border-dotted" />
        <div
            class="flex flex-col lg:flex-row justify-center items-center"
        >
            <span
                class="lg:inline-block text-custom-white text-center font-sm whitespace-no-wrap"
                v-html="
                    'SUGAR TONGUE.&nbsp;© All Rights Reserved'
                "
            ></span>
            <span
                class="hidden lg:inline text-custom-white font-sm"
            >
                ｜
            </span>
            <span
                class="lg:inline-block text-custom-white text-center font-sm whitespace-no-wrap"
                v-html="'客服信箱 : info@sugartongue.com'"
            ></span>
            <span
                class="hidden lg:inline text-custom-white font-sm"
            >
                ｜
            </span>
            <span
                class="lg:inline-block text-custom-white text-center font-sm whitespace-no-wrap"
                v-html="'客服電話 : 07-123-4567'"
            ></span>
        </div>
    </div>
</template>
<script>
export default {
    data() {
        return {
            active: false,
        };
    },
};
</script>
<style lang="scss" scoped></style>
