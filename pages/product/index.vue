<template>
    <Main class="main-style">
        <template v-slot:content>
            <Card
                class="row-start-auto row-end-auto bg-wintergreenDream"
            >
                <template v-slot:content>
                    <h1
                        class="text-metallicGold font-bold text-11 uppercase"
                    >
                        Confectionery shop
                    </h1>
                </template>
            </Card>
            <div
                class="grid gap-4 grid-cols-1 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-4 w-full h-full"
            >
                <Product></Product>
            </div>
        </template>
    </Main>
</template>

<script>
import { mapState, mapActions } from "vuex";
export default {
    layouts: "default",
    data() {
        return {};
    },
    computed: {
        ...mapState("product", [
            "products",
            "product",
            "pagination",
        ]),
    },
    methods: {
        ...mapActions("product", [
            "getProducts",
            "getProduct",
        ]),
    },
};
</script>

<style scoped>
.main-style {
    grid-auto-rows: max-content auto;
}
</style>
