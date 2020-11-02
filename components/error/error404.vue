<template>
    <div>
        <h1>This page doesn’t exist</h1>
        <p>
            The link you clicked on may be broken or no
            longer exist.
        </p>
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
