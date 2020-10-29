module.exports = {
    root: true,
    env: {
        browser: true,
        node: true,
    },
    parserOptions: {
        parser: "babel-eslint",
    },
    extends: [
        "eslint:recommended",
        "plugin:vue/recommended",
        "plugin:prettier/recommended",
        "prettier",
        "prettier/vue",
    ],
    plugins: ["prettier"],
    // add your custom rules here
    rules: {
        "no-lonely-if": "off",
        "new-cap": "off",
        "vue/attributes-order": "off",
        "vue/order-in-components": "off",
        "vue/no-use-v-if-with-v-for": "off",
        "no-console": "off",
        "linebreak-style": "off",
        "vue/component-name-in-template-casing": [
            "error",
            "kebab-case",
            {
                registeredComponentsOnly: false,
                ignores: [],
            },
        ],
        "vue/name-property-casing": ["error", "PascalCase"],
        "vue/prop-name-casing": ["error", "camelCase"],
    },
};
