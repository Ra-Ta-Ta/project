<template>
    <main
        class="w-full h-full m-auto pt-19 lg:pt-4 p-4 grid grid-cols-1 gap-4 main-style"
    >
        <Card class="w-full bg-midnightGreen">
            <template v-slot:content>
                <h1
                    v-if="error.statusCode === 404"
                    class="text-28 leading-none uppercase"
                >
                    <p
                        class="text-rajah"
                        v-text="error.statusCode"
                    ></p>
                    <p
                        class="text-oldLace"
                        v-text="'Page not found.'"
                    ></p>
                </h1>
                <h1 v-else>An error occurred</h1>
                <nuxt-link to="/">Home page</nuxt-link>
            </template>
        </Card>
        <Card class="w-full bg-Bronze">
            <template v-slot:content>
                <div
                    class="lg:inline-block text-oldLace text-center font-sm whitespace-no-wrap"
                    v-html="
                        'SUGAR TONGUE.&nbsp;© All Rights Reserved'
                    "
                ></div>
                <div
                    class="lg:inline-block text-oldLace text-center font-sm whitespace-no-wrap"
                    v-html="
                        '客服信箱 : info@sugartongue.com'
                    "
                ></div>
                <div
                    class="lg:inline-block text-oldLace text-center font-sm whitespace-no-wrap"
                    v-html="'客服電話 : 07-123-4567'"
                ></div>
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
