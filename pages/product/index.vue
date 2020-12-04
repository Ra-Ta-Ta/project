<template>
    <Main class="auto-rows-max main-style">
        <template v-slot:content>
            <Card class="bg-wintergreenDream">
                <template v-slot:content>
                    <h1
                        class="text-metallicGold font-bold text-11 uppercase"
                    >
                        Confectionery shop
                    </h1>
                </template>
            </Card>
            <Card class="bg-desertSand">
                <template v-slot:content>
                    <div></div>
                </template>
            </Card>
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
}
</style>
