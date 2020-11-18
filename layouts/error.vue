<template>
    <main
        class="w-full h-full m-auto pt-19 lg:pt-4 p-4 grid grid-cols-1 gap-4 main-style"
    >
        <Card class="w-full bg-blackLeatherJacket">
            <template v-slot:content>
                <h1
                    class="text-28 text-oldLace leading-none uppercase"
                >
                    <p
                        v-text="error.statusCode"
                        class="text-metallicGold"
                    ></p>

                    <div v-if="error.statusCode === 404">
                        <p v-text="'Page not found.'"></p>
                        <p
                            v-text="'此頁面不存在。'"
                            class="text-7"
                        ></p>
                    </div>
                    <div v-else>
                        <p
                            v-text="'An error occurred.'"
                        ></p>
                        <p
                            v-text="'發生錯誤。'"
                            class="text-7"
                        ></p>
                    </div>
                </h1>
            </template>
        </Card>
        <Card class="w-full bg-desertSand">
            <template v-slot:content>
                <h2
                    v-if="error.statusCode === 404"
                    v-text="'contact us'"
                    class="text-14 text-ruddyBrown leading-none uppercase mb-4"
                ></h2>
                <div class="font-sm mb-4">
                    <p
                        v-text="'客服信箱'"
                        class="text-wintergreenDream font-bold"
                    ></p>
                    <p
                        v-text="'info@sugartongue.com'"
                        class="text-fieldDrab"
                    ></p>
                </div>
                <div class="font-sm mb-4">
                    <p
                        v-text="'客服電話'"
                        class="text-wintergreenDream font-bold"
                    ></p>
                    <p
                        v-text="'07-123-4567'"
                        class="text-fieldDrab"
                    ></p>
                </div>
                <p
                    v-html="
                        'SUGAR TONGUE.&nbsp;© All Rights Reserved'
                    "
                    class="text-fieldDrab font-sm mb-4"
                ></p>
            </template>
        </Card>
    </main>
</template>

<script>
export default {
    layouts: "default",
    props: ["error"],
};
</script>

<style scoped>
.bg-style {
    background-image: url("https://uploads-ssl.webflow.com/57516ebd5650b01552cd9f03/5d30079985ef6117dc5b983d_Paper02.jpg");
    background-size: 300px;
}
</style>
