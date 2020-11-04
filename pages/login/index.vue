<template>
    <main class="w-full h-full m-auto pt-15 p-4 main-style">
        <Card class="login-style">
            <template v-slot:content>
                <div>
                    <div>
                        <h1
                            class=""
                            v-text="Login / 登入"
                        ></h1>
                        <input class="block" type="text" />
                        <input class="block" type="text" />
                        <button></button>
                    </div>
                    <hr class="mt-3 mb-2 border-dotted" />
                    <div>
                        <nuxt-link to=""></nuxt-link>
                    </div>
                </div>
            </template>
        </Card>
    </main>
</template>

<script>
export default {
    layouts: "default",
    data() {
        return {};
    },
};
</script>

<style scoped>
.main-style {
    background-color: rgba(0, 0, 0, 0.7);
}
</style>
