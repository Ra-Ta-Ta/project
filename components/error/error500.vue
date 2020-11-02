<template>
    <div>
        <h1>An error occurred</h1>
        <nuxt-link to="/">Home page</nuxt-link>
    </div>
</template>
<script>
export default {
    props: {
        error: {
            type: Object,
            default: () => {},
        },
    },
};
</script>
